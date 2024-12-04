import { useState } from 'react';
import { Wallet } from '@mercadopago/sdk-react';
import { createPreference } from '@/lib/mercadopago';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from '../ui/button';
import { CreditCard } from 'lucide-react';
import { toast } from 'sonner';

interface MercadoPagoButtonProps {
  isProcessing: boolean;
  setIsProcessing: (value: boolean) => void;
}

export function MercadoPagoButton({ isProcessing, setIsProcessing }: MercadoPagoButtonProps) {
  const [preferenceId, setPreferenceId] = useState<string>('');
  const { user } = useAuth();
  const { cart } = useCart();

  const handlePayment = async () => {
    if (!user) {
      toast.error('Debes iniciar sesión para realizar el pago');
      return;
    }
    
    if (cart.items.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    
    setIsProcessing(true);
    try {
      const items = cart.items.map(item => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        unit_price: Number(item.price.toFixed(2))
      }));

      const preferenceId = await createPreference({
        items,
        payer: {
          name: user,
          email: `${user}@example.com`
        }
      });

      setPreferenceId(preferenceId);
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('Error al iniciar el pago. Por favor, intenta nuevamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-3/4">
      {preferenceId ? (
        <Wallet 
          initialization={{ preferenceId }}
          customization={{ 
            texts: { valueProp: 'smart_option' },
            visual: {
              buttonBackground: 'default',
              borderRadius: '8px'
            }
          }}
        />
      ) : (
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-transparent hover:bg-white/10 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Procesando...
            </span>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Pagar
            </>
          )}
        </Button>
      )}
    </div>
  );
}