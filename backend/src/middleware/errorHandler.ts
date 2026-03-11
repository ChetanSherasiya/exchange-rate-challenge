import { Request, Response, NextFunction } from 'express';

export interface ApiError {
  status: number;
  message: string;
  details?: string;
}

/**
 * Central error handler — already wired up in index.ts.
 * 
 * TODO (candidate): You can throw structured errors from your routes and
 * they'll be caught here. Feel free to extend ApiError or add custom
 * error classes if you want cleaner error propagation.
 *
 * Example usage in a route:
 *   const err: ApiError = { status: 400, message: 'Invalid currency code', details: 'USD is required' };
 *   next(err);
 */
export function errorHandler(
  err: ApiError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if ('status' in err) {
    res.status(err.status).json({
      error: err.message,
      ...(err.details && { details: err.details }),
    });
    return;
  }

  console.error('[Unhandled error]', err);
  res.status(500).json({ error: 'Internal server error' });
}
