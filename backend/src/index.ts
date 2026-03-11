import express from 'express';
import cors from 'cors';
import ratesRouter from './routes/rates';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 3001;

// ─── Middleware ───────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Routes ──────────────────────────────────
app.use('/api', ratesRouter);

// Health check — useful to verify the server is running
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Error Handler ────────────────────────────
// Must be registered after all routes
app.use(errorHandler);

// ─── Start ───────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Mock mode: ${process.env.USE_MOCK_DATA === 'true' ? 'ON ✓' : 'OFF (live API)'}`);
});

export default app;
