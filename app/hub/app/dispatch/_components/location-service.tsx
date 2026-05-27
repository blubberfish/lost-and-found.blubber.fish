"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export type ILocationContext =
  | { consent: false }
  | ({ consent: true } & (
      | { ready: false }
      | ({ ready: true } & (
          | {
              available: true;
              coordinates: {
                longitude: number;
                latitude: number;
              };
            }
          | {
              available: false;
            }
        ))
    ));

export type ILocationConsentContext = {
  allow(): void;
};

const LocationContext = createContext<ILocationContext>({ consent: false });

const LocationConsentContext = createContext<ILocationConsentContext>({
  allow() {
    throw new Error("Location context not available");
  },
});

export function LocationServiceProvider({
  children,
  consentFallback,
  unavailableFallback,
  fallback,
}: PropsWithChildren<{
  unavailableFallback?: PropsWithChildren["children"];
  consentFallback?: PropsWithChildren["children"];
  fallback?: PropsWithChildren["children"];
}>) {
  const [state, setState] = useState<ILocationContext>({ consent: false });
  useEffect(() => {
    if (!state.consent) return;
    if (!navigator.geolocation) {
      setState({ consent: true, ready: true, available: false });
      return;
    }
  }, [state]);
  useEffect(() => {
    if (!state.consent) return;
    if (state.ready) return;
    let unmounted = false;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (unmounted) return;
        setState({
          consent: true,
          ready: true,
          available: true,
          coordinates: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
        });
      },
      () => {
        if (unmounted) return;
        setState({ consent: true, ready: true, available: false });
      },
    );
    return () => {
      unmounted = true;
    };
  }, [state]);

  if (!state.consent) {
    return (
      <LocationConsentContext.Provider
        value={{
          allow: () => {
            setState({ consent: true, ready: false });
          },
        }}
      >
        {consentFallback}
      </LocationConsentContext.Provider>
    );
  }

  if (!state.ready) {
    return <>{fallback}</>;
  }

  if (state.ready && !state.available) {
    return <>{unavailableFallback}</>;
  }

  return (
    <LocationContext.Provider value={state}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationConsent() {
  return useContext(LocationConsentContext);
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context.consent && context.ready && context.available) {
    return context.coordinates;
  }
  return null;
}
