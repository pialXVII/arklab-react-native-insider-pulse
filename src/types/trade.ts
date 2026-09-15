export type InsiderRole = 'CEO' | 'CFO' | 'Director' | 'Officer';
export type TradeType = 'purchase' | 'sale';
export type SignalStrength = 'High' | 'Medium' | 'Low';

export type InsiderTrade = {
  id: string;
  ticker: string;
  company: string;
  sector: string;
  insider: string;
  role: InsiderRole;
  type: TradeType;
  transactionCode: 'P' | 'S';
  shares: number;
  pricePerShare: number;
  value: number;
  /** Local date string, YYYY-MM-DD. Fictional. */
  transactionDate: string;
  /** Local date-time string, YYYY-MM-DD HH:mm. Fictional. */
  filedAt: string;
  signal: string;
  signalStrength: SignalStrength;
  /** Seven invented points used only by the mock activity chart. */
  activitySeries: number[];
};

/* ---- Screener filter models ---- */

export type TypeFilter = 'all' | TradeType;
export type RoleFilter = 'all' | 'CEO' | 'CFO' | 'Director';
export type ValueFilter = 0 | 100000 | 500000 | 1000000;
