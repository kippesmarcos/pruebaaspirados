import { motion } from 'framer-motion';
import { Zap, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { MinecraftFeaturesModal } from './MinecraftFeaturesModal';
import { cn } from '@/lib/utils';

interface MinecraftProductCardProps {
  name: string;
  description?: string;
  price: number | { permanent: number; monthly: number };
  icon: string;
  color: string;
  features: string[];
  durationType?: 'permanent' | 'monthly';
  onAddToCart: () => void;
}

export function MinecraftProductCard({
  name,
  description,
  price,
  icon,
  color,
  features,
  durationType,
  onAddToCart
}: MinecraftProductCardProps) {
  const [showFeatures, setShowFeatures] = useState(false);
  const displayPrice = typeof price === 'number' ? price : price[durationType || 'permanent'];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Border layers */}
        <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
        <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
        
        {/* Main content */}
        <div className="relative bg-[#1D1D1D] rounded-lg overflow-hidden border-2 border-[#3B3B3B]">
          {/* Header */}
          <div className="p-4 border-b border-[#3B3B3B] bg-black/30">
            <div className="flex items-center gap-3">
              <div 
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center",
                  "bg-black/30 border border-[#3B3B3B]"
                )}
              >
                {typeof icon === 'string' && icon.startsWith('data:image') ? (
                  <div
                    className="w-8 h-8 text-white"
                    dangerouslySetInnerHTML={{ __html: decodeURIComponent(icon.split(',')[1]) }}
                  />
                ) : (
                  <img 
                    src={icon} 
                    alt={name} 
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                )}
              </div>
              <div>
                <h3 className="font-minecraft text-lg" style={{ color }}>
                  {name}
                </h3>
                {description && (
                  <p className="text-sm text-[#A8B9A8]">{description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-4 space-y-4">
            <button 
              onClick={() => setShowFeatures(true)}
              className="w-full bg-black/30 hover:bg-black/40 rounded-lg p-3 transition-colors border border-[#3B3B3B]"
            >
              <h4 className="font-minecraft text-[#A8B9A8] text-sm mb-3">CARACTERÍSTICAS</h4>
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-white text-sm font-minecraft text-left">{feature}</span>
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-center text-[#A8B9A8] text-sm mt-2 font-minecraft">
                    VER MÁS CARACTERÍSTICAS...
                  </li>
                )}
              </ul>
            </button>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#A8B9A8] font-minecraft">PRECIO</span>
                <span className="text-xl font-minecraft text-yellow-500">
                  ${displayPrice}
                  {durationType === 'monthly' && (
                    <span className="text-sm text-[#A8B9A8] ml-1">/mes</span>
                  )}
                </span>
              </div>

              <button
                onClick={onAddToCart}
                className="w-full py-3 bg-black/30 hover:bg-black/50 text-white font-minecraft rounded-lg flex items-center justify-center gap-2 transition-colors border border-[#3B3B3B]"
              >
                <ShoppingCart className="w-4 h-4" />
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <MinecraftFeaturesModal
        isOpen={showFeatures}
        onClose={() => setShowFeatures(false)}
        name={name}
        icon={icon}
        color={color}
        features={features}
      />
    </>
  );
}