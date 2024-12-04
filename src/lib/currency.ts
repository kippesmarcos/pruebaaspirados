export const USD_TO_ARS = 850; // Current exchange rate

export function formatUSD(amount: number): string {
  return `U$D ${amount.toFixed(2)}`;
}

export function formatARS(amount: number): string {
  return `ARS $${(amount * USD_TO_ARS).toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export function convertUSDtoARS(usdAmount: number): number {
  return usdAmount * USD_TO_ARS;
}

export interface DualPrice {
  usd: string;
  ars: string;
}

export function getDualPrice(usdAmount: number): DualPrice {
  return {
    usd: formatUSD(usdAmount),
    ars: formatARS(usdAmount)
  };
}