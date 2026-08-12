"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { brandDefaults } from "@/lib/kds-data";

type CartItem = {
  slug: string;
  quantity: number;
};

type BrandSettings = {
  announcement: string;
  location: string;
};

type SiteState = {
  brandSettings: BrandSettings;
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
};

type SiteContextValue = SiteState & {
  addToCart: (slug: string) => void;
  updateCartQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  trackViewed: (slug: string) => void;
  updateBrandSettings: (settings: Partial<BrandSettings>) => void;
};

type SiteAction =
  | { type: "hydrate"; payload: SiteState }
  | { type: "addToCart"; slug: string }
  | { type: "updateCartQuantity"; slug: string; quantity: number }
  | { type: "removeFromCart"; slug: string }
  | { type: "toggleWishlist"; slug: string }
  | { type: "trackViewed"; slug: string }
  | { type: "updateBrandSettings"; settings: Partial<BrandSettings> };

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

const STORAGE_KEYS = {
  cart: "kds-cart",
  wishlist: "kds-wishlist",
  recentlyViewed: "kds-recently-viewed",
  brandSettings: "kds-brand-settings",
} as const;

const defaultState: SiteState = {
  brandSettings: {
    announcement: brandDefaults.announcement,
    location: brandDefaults.location,
  },
  cart: [],
  wishlist: [],
  recentlyViewed: [],
};

function readStorage<T>(key: string, fallback: T) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue) as T;
  } catch {
    return fallback;
  }
}

function siteReducer(state: SiteState, action: SiteAction): SiteState {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "addToCart": {
      const existingItem = state.cart.find((item) => item.slug === action.slug);

      return {
        ...state,
        cart: existingItem
          ? state.cart.map((item) =>
              item.slug === action.slug
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.cart, { slug: action.slug, quantity: 1 }],
      };
    }
    case "updateCartQuantity":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.slug === action.slug
              ? { ...item, quantity: Math.max(1, action.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.slug !== action.slug),
      };
    case "toggleWishlist":
      return {
        ...state,
        wishlist: state.wishlist.includes(action.slug)
          ? state.wishlist.filter((item) => item !== action.slug)
          : [...state.wishlist, action.slug],
      };
    case "trackViewed":
      return {
        ...state,
        recentlyViewed:
          state.recentlyViewed[0] === action.slug
            ? state.recentlyViewed
            : [
                action.slug,
                ...state.recentlyViewed.filter((item) => item !== action.slug),
              ].slice(0, 6),
      };
    case "updateBrandSettings":
      return {
        ...state,
        brandSettings: {
          ...state.brandSettings,
          ...action.settings,
        },
      };
    default:
      return state;
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(siteReducer, defaultState);

  useEffect(() => {
    dispatch({
      type: "hydrate",
      payload: {
        cart: readStorage<CartItem[]>(STORAGE_KEYS.cart, []),
        wishlist: readStorage<string[]>(STORAGE_KEYS.wishlist, []),
        recentlyViewed: readStorage<string[]>(STORAGE_KEYS.recentlyViewed, []),
        brandSettings: readStorage<BrandSettings>(
          STORAGE_KEYS.brandSettings,
          defaultState.brandSettings,
        ),
      },
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEYS.wishlist,
      JSON.stringify(state.wishlist),
    );
  }, [state.wishlist]);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEYS.recentlyViewed,
      JSON.stringify(state.recentlyViewed),
    );
  }, [state.recentlyViewed]);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEYS.brandSettings,
      JSON.stringify(state.brandSettings),
    );
  }, [state.brandSettings]);

  const value = useMemo<SiteContextValue>(
    () => ({
      ...state,
      addToCart: (slug) => dispatch({ type: "addToCart", slug }),
      updateCartQuantity: (slug, quantity) =>
        dispatch({ type: "updateCartQuantity", slug, quantity }),
      removeFromCart: (slug) => dispatch({ type: "removeFromCart", slug }),
      toggleWishlist: (slug) => dispatch({ type: "toggleWishlist", slug }),
      trackViewed: (slug) => dispatch({ type: "trackViewed", slug }),
      updateBrandSettings: (settings) =>
        dispatch({ type: "updateBrandSettings", settings }),
    }),
    [state],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteContext() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error("useSiteContext must be used within SiteProvider");
  }

  return context;
}
