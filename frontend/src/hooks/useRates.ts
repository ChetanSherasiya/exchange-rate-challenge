import { useState, useEffect } from 'react';
import { getRates } from '../api/ratesApi';
import { RatesResponse, AsyncState } from '../types';

/**
 * TODO (candidate): Implement this custom hook.
 *
 * It should:
 *  - Accept a `base` currency string as a parameter
 *  - Fetch rates from the API when `base` changes
 *  - Return an AsyncState<RatesResponse> so the component
 *    can handle loading, error, and success cases
 *  - Clean up or cancel any in-flight requests on unmount
 *    (hint: AbortController or an `isMounted` flag)
 *
 * The component that uses this hook should never call getRates() directly.
 */

export function useRates(base: string) {
  // const [state, setState] = useState<AsyncState>({ status: 'idle' });
  const [state, setState] = useState<AsyncState<RatesResponse>>({ status: 'idle' });
  useEffect(() => {
    const data = async () => {
      try {
        setState({ status: 'loading' });
        const data = await getRates(base);
        if(!data) {
          throw new Error('Network response was not ok');
        }
        setState({ status: "success", data});
    } catch (error) { 
      console.error("Error in useRates:", error);
      setState({ status: 'error', message: "Something went wrong" });
    }
  }
  data();
  }, [base]);
  
  return state;
}