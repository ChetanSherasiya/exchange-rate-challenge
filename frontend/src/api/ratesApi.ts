import { RatesResponse, ConversionResult } from '../types';

const BASE = 'http://localhost:3001/api/rates';

/**
 * TODO (candidate): Implement these API functions.
 *
 * They should call your backend routes and return typed responses.
 * Handle non-OK HTTP responses by throwing a descriptive Error.
 *
 * All three functions are called from hooks — you don't need to manage
 * loading or error state here, just fetch and return/throw.
 */

export async function getRates(base: string): Promise<RatesResponse> {
  // TODO: GET /api/rates?base={base}
  try {
    const response = await fetch(`${BASE}?base=${base}`);
    const data = await response.json();
    if(!data) {
      throw new Error('Network response was not ok');
    }
    const updatedResponse = {
      result: data?.result,
      base_code: data?.base_code,
      time_last_update_utc: data?.time_last_update_utc,
      rates: data?.rates
    }
    return updatedResponse; 
  } catch (error) {
    console.error("Error fetching rates:", error);
    throw new Error('Not implemented');
  }
}

export async function convertCurrency(
  from: string,
  to: string,
  amount: number
): Promise<ConversionResult> {
  // TODO: GET /api/rates/convert?from={from}&to={to}&amount={amount}
  throw new Error('Not implemented');
}

export async function getWatchlistRates(
  currencies: string[]
): Promise<RatesResponse> {
  // TODO: POST /api/rates/watchlist with body { currencies }
  throw new Error('Not implemented');
}
