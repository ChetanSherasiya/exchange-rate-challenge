# Exchange Rate Dashboard — Interview Scaffold

A full-stack pairing challenge using **React + TypeScript** (frontend) and **Node.js + TypeScript** (backend).

---

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

Server runs at `http://localhost:3001`.
Mock mode is **ON by default** (no external API calls needed).

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`.
API calls are proxied to the backend automatically — no CORS setup needed.

---

## Project Structure

```
exchange-rate-challenge/
├── backend/
│   └── src/
│       ├── index.ts                  # Express app entry point
│       ├── routes/
│       │   └── rates.ts              # ← Implement routes here
│       ├── services/
│       │   ├── ratesService.ts       # ← Implement calculateConversion() here
│       │   └── ratesService.test.ts  # ← Test suite (bonus)
│       ├── middleware/
│       │   └── errorHandler.ts       # Already wired up
│       └── types/
│           └── index.ts              # ← Define your types here
│
└── frontend/
    └── src/
        ├── App.tsx                   # ← Wire up useRates here
        ├── api/
        │   └── ratesApi.ts           # ← Implement API calls here
        ├── hooks/
        │   ├── useRates.ts           # ← Implement custom hook
        │   └── useConverter.ts       # ← Implement custom hook
        ├── components/
        │   ├── BaseCurrencySelector.tsx
        │   ├── RatesTable.tsx
        │   ├── CurrencyConverter.tsx
        │   └── Watchlist.tsx
        └── types/
            └── index.ts              # ← Mirror backend types here
```

---

## API Endpoints to Implement

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/rates?base=USD` | Fetch exchange rates for a base currency |
| GET | `/api/rates/convert?from=USD&to=INR&amount=100` | Convert an amount |
| POST | `/api/rates/watchlist` | Filter rates for selected currencies |

---

## Mock Data

The backend uses mock data by default (`USE_MOCK_DATA=true` in `.env`).
To use the live API, set `USE_MOCK_DATA=false`.

Live API: `https://open.er-api.com/v6/latest/USD` (no key required)

---

## Running Tests

```bash
cd backend
npm test
```

---

## Suggested Order of Attack

1. Define types in `backend/src/types/index.ts`
2. Implement `GET /api/rates` route → verify with `curl` or browser
3. Mirror types in `frontend/src/types/index.ts`
4. Implement `getRates()` in `frontend/src/api/ratesApi.ts`
5. Implement `useRates()` hook
6. Wire up `App.tsx` and `RatesTable` component
7. Implement `GET /api/rates/convert` + `useConverter` hook + `CurrencyConverter` component
8. Implement `POST /api/rates/watchlist` + `Watchlist` component
9. *(Bonus)* Add tests, debouncing, or API response caching
"# exchange-rate-challenge" 
"# exchange-rate-challenge" 
