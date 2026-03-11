// ─────────────────────────────────────────────
// Frontend types — mirror your backend response shapes here
// ─────────────────────────────────────────────

/**
 * TODO (candidate): Define types that match what your backend returns.
 * These should align with the RatesResponse and ConversionResult
 * types you defined on the backend.
 *
 * Keep them in sync — if you change the backend shape, update here too.
 */

export interface RatesResponse {
  // TODO: mirror your backend RatesResponse
  result: 'success' | 'error';
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>;
}

export interface ConversionResult {
  // TODO: mirror your backend ConversionResult
}

// Supported base currencies for the selector dropdown
export const SUPPORTED_BASES = ['USD', 'EUR', 'GBP', 'INR'] as const;
export type SupportedBase = typeof SUPPORTED_BASES[number];

// State shape for async data fetching
export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };
