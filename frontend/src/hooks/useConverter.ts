import { useState } from 'react';
import { convertCurrency } from '../api/ratesApi';
import { ConversionResult, AsyncState } from '../types';

interface UseConverterReturn {
  state: AsyncState<ConversionResult>;
  convert: (from: string, to: string, amount: number) => Promise<void>;
}

/**
 * TODO (candidate): Implement this custom hook.
 *
 * It should:
 *  - Expose a `convert()` function that the component can call
 *  - Track the AsyncState of the conversion request
 *  - Reset to idle when relevant inputs change (optional, nice-to-have)
 *
 * Bonus: add debouncing so rapid input changes don't fire multiple requests.
 */
export function useConverter(): UseConverterReturn {
  // TODO
  return {
    state: { status: 'idle' },
    convert: async () => {},
  };
}
