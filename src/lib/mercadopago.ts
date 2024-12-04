import { initMercadoPago } from '@mercadopago/sdk-react';
import { MERCADOPAGO_CONFIG } from '@/config/mercadopago';

// Inicializa MercadoPago con la clave pública
initMercadoPago(MERCADOPAGO_CONFIG.PUBLIC_KEY);

export interface CreatePreferenceParams {
  items: {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
  }[];
  payer: {
    name: string;
    email: string;
  };
}

export async function createPreference({ items, payer }: CreatePreferenceParams): Promise<string> {
  try {
    const response = await fetch(`${MERCADOPAGO_CONFIG.API_URL}/api/create-preference`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        payer,
        back_urls: {
          success: `${window.location.origin}/purchase-success`,
          failure: `${window.location.origin}/cart`,
          pending: `${window.location.origin}/purchase-pending`,
        },
        auto_return: 'approved',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.id) {
      throw new Error('No preference ID received from server');
    }
    
    return data.id;
  } catch (error) {
    console.error('Error creating preference:', error);
    throw error instanceof Error ? error : new Error('Failed to create payment preference');
  }
}