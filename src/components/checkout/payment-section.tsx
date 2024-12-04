import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { MercadoPagoButton } from './MercadoPagoButton';

interface PaymentSectionProps {
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
  setIsProcessing: (value: boolean) => void;
  total: number;
}

export function PaymentSection({
  isProcessing,
  setIsProcessing,
  total
}: PaymentSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-beige-100 mb-4">Método de pago</h2>
      <div className="bg-transparent backdrop-blur-lg rounded-lg p-6 border-2 border-white/20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-transparent rounded-lg p-6 flex items-center justify-center transition-all border-2 border-white/20 hover:border-white/40 mb-6"
        >
          <img
            src="/images/payments/mercadopago.svg"
            alt="Mercado Pago"
            className="h-12 w-auto"
          />
        </motion.div>

        <div className="text-center">
          <p className="text-beige-300 mb-4">
            Total a pagar: ${total.toFixed(2)}
          </p>
          <div className="flex justify-center">
            <MercadoPagoButton 
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}