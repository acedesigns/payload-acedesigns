"use client";
/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useSyncExternalStore } from 'react'

function subscribe(onStoreChange: () => void) {
  window.addEventListener("load", onStoreChange);

  return () => {
    window.removeEventListener("load", onStoreChange);
  };
}

function getSnapshot(): boolean {
  return document.readyState === "complete";
}

function getServerSnapshot(): boolean {
  return false;
}

export function usePreloader(): boolean {
  const isLoaded = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return !isLoaded;
}
