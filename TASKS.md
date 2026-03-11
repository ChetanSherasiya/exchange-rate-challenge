# Your Tasks

You have ~50 minutes. Focus on completing tasks in order — don't skip ahead.

---

## Task 1 — Backend: Rates Endpoint (15 min)

File: `backend/src/routes/rates.ts`

The stub is already wired up. Your job:

- [ ] Implement `GET /api/rates?base=USD`
- [ ] Call `ratesService.getRates(base)` and return the result as JSON
- [ ] Return a `400` error if `base` is missing or not a valid 3-letter currency code
- [ ] Return a `500` error (with a message) if the service throws

**Types are in** `backend/src/types/index.ts` — use them.

---

## Task 2 — Backend: Convert Endpoint (10 min)

File: `backend/src/routes/rates.ts`

- [ ] Implement `GET /api/convert?from=USD&to=INR&amount=100`
- [ ] Validate that `from`, `to`, and `amount` are all present and valid
- [ ] Use `ratesService.convert(from, to, amount)` — **you need to implement this method** in `backend/src/services/ratesService.ts`

---

## Task 3 — Frontend: useRates Hook (15 min)

File: `frontend/src/hooks/useRates.ts`

- [ ] Implement the `useRates(base: string)` custom hook
- [ ] It should call `GET /api/rates?base={base}` via the pre-built `apiClient`
- [ ] Return `{ data, loading, error }` with correct TypeScript types
- [ ] Handle loading and error states

---

## Task 4 — Frontend: RatesTable Component (10 min)

File: `frontend/src/components/RatesTable.tsx`

- [ ] Consume the `useRates` hook
- [ ] Render a table of currency codes and their rates
- [ ] Show a loading indicator while fetching
- [ ] Show an error message if the request fails

---

## If You Finish Early

- Add a `CurrencyConverter` component using a second custom hook `useConverter`
- Add input debouncing to the converter
- Cache the rates response in the backend for 60 seconds
