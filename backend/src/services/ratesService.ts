import axios from 'axios';
import { ExternalRatesResponse } from '../types';

const BASE_URL = 'https://open.er-api.com/v6/latest';

// ─────────────────────────────────────────────
// Mock data — used automatically in test/dev
// when USE_MOCK_DATA=true in your .env
// ─────────────────────────────────────────────
const MOCK_RESPONSE: ExternalRatesResponse = {
  result: 'success',
  base_code: 'USD',
  time_last_update_utc: 'Fri, 01 Jan 2025 00:00:00 +0000',
  rates: {
    USD: 1,
    EUR: 0.9201,
    GBP: 0.7923,
    INR: 83.12,
    JPY: 149.50,
    AUD: 1.5301,
    CAD: 1.3401,
    CHF: 0.8812,
    CNY: 7.1023,
    MXN: 17.15,
    BRL: 4.9701,
    SGD: 1.3401,
    HKD: 7.8201,
    NOK: 10.55,
    SEK: 10.42,
  },
};

/**
 * Fetches exchange rates from the external API.
 * Falls back to mock data when USE_MOCK_DATA=true.
 *
 * TODO (candidate): This function returns the raw external response.
 * You'll need to call it from your route and transform the result
 * into your own RatesResponse shape before sending to the client.
 */
export async function fetchRates(baseCurrency: string): Promise<ExternalRatesResponse> {
  if (process.env.USE_MOCK_DATA === 'true') {
    console.log(`[mock] Returning mock rates for base: ${baseCurrency}`);
    return { ...MOCK_RESPONSE, base_code: baseCurrency.toUpperCase() };
  }

  const url = `${BASE_URL}/${baseCurrency.toUpperCase()}`;
  const response = await axios.get<ExternalRatesResponse>(url);
  return response.data;
}

/**
 * TODO (candidate): Implement the conversion calculation.
 *
 * Given rates fetched for a base currency, calculate how much
 * `amount` units of `fromCurrency` equals in `toCurrency`.
 *
 * Think about: what happens if the base isn't USD?
 * What if the currency codes are invalid?
 */
export function calculateConversion(
  rates: Record<string, number>,
  from: string,
  to: string,
  amount: number
): number {
  // TODO
  throw new Error('Not implemented');
}
