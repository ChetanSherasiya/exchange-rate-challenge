import { Router, Request, Response } from "express";
import { fetchRates } from "../services/ratesService";
import { RatesResponse } from "../types";

const router = Router();

// ─────────────────────────────────────────────
// GET /api/rates?base=USD
// ─────────────────────────────────────────────


/**
 * TODO (candidate): Implement this route.
 *
 * Steps:
 *  1. Read and validate the `base` query param (default to 'USD' if missing)
 *  2. Call fetchRates() from the service layer
 *  3. Transform the raw external response into your RatesResponse shape
 *  4. Handle errors — return a meaningful status + message on failure
 *
 * Example response shape (your design):
 *  { base: 'USD', updatedAt: '...', rates: { EUR: 0.92, INR: 83.12, ... } }
 */
router.get("/rates", async (req: Request, res: Response) => {
  try {
    const baseCurrency: string = typeof req.query.base === "string" ? req.query.base : "USD";
    const response = await fetchRates(baseCurrency);
    res.send(response);
  } catch (error) {
    console.error("Error fetching rates:", error);
    res.status(500).json({ error: "Failed to fetch rates" });
  }
});


// ─────────────────────────────────────────────
// GET /api/rates/convert?from=USD&to=INR&amount=100
// ─────────────────────────────────────────────

/**
 * TODO (candidate): Implement this route.
 *
 * Steps:
 *  1. Read and validate `from`, `to`, and `amount` query params
 *  2. Fetch rates and use calculateConversion() from the service
 *  3. Return a ConversionResult response
 *  4. Think about edge cases: same currency, invalid codes, amount <= 0
 */
router.get("/convert", async (req: Request, res: Response) => {
  // TODO
  res.status(501).json({ error: "Not implemented" });
});

// ─────────────────────────────────────────────
// POST /api/rates/watchlist
// Body: { currencies: string[] }
// ─────────────────────────────────────────────

/**
 * TODO (candidate): Implement this route.
 *
 * Steps:
 *  1. Parse and validate the request body
 *  2. Fetch rates for USD base (or let caller specify?)
 *  3. Filter the rates to only include the requested currencies
 *  4. Return the filtered result
 *
 * Bonus: what should happen if a requested currency doesn't exist?
 */
router.post("/watchlist", async (req: Request, res: Response) => {
  // TODO
  res.status(501).json({ error: "Not implemented" });
});

export default router;
