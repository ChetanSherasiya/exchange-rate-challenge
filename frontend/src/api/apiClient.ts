import { RatesResponse, ConversionResponse, WatchlistRequest, WatchlistResponse } from '../types';

// Re-export for convenience
export type { WatchlistResponse } from '../types';

const BASE_URL = '/api';

// ─── Generic Fetch Helper ─────────────────────────────────────────────────────

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(body.error ?? `Request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}

// ─── API Methods ──────────────────────────────────────────────────────────────

export const apiClient = {
  getRates(base: string): Promise<RatesResponse> {
    return apiFetch<RatesResponse>(`/rates?base=${encodeURIComponent(base)}`);
  },

  convert(from: string, to: string, amount: number): Promise<ConversionResponse> {
    const params = new URLSearchParams({ from, to, amount: String(amount) });
    return apiFetch<ConversionResponse>(`/convert?${params.toString()}`);
  },

  getWatchlist(currencies: string[]): Promise<RatesResponse> {
    return apiFetch<RatesResponse>('/watchlist', {
      method: 'POST',
      body: JSON.stringify({ currencies } satisfies WatchlistRequest),
    });
  },
};
