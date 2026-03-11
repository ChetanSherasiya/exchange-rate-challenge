import { calculateConversion } from './ratesService';

/**
 * TODO (candidate — bonus): Add more test cases.
 * The suite is wired up and ready. Just run: npm test
 */
describe('calculateConversion', () => {
  const rates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
    INR: 83.12,
    GBP: 0.79,
  };

  it('converts USD to INR correctly', () => {
    const result = calculateConversion(rates, 'USD', 'INR', 100);
    expect(result).toBeCloseTo(8312, 0);
  });

  it('converts EUR to GBP correctly', () => {
    const result = calculateConversion(rates, 'EUR', 'GBP', 1);
    expect(result).toBeCloseTo(0.858, 2);
  });

  it('returns the same amount when converting to the same currency', () => {
    const result = calculateConversion(rates, 'USD', 'USD', 50);
    expect(result).toBe(50);
  });

  // TODO (candidate): What should happen with an invalid currency code?
  // it('throws for unknown currency', () => { ... });

  // TODO (candidate): What about amount = 0? Negative amounts?
});
