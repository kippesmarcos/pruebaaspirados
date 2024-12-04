import { useState } from 'react';
import { Header } from '../components/Header';
import { motion } from 'framer-motion';
import { Crown, Clock, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SnowParticles } from '@/components/SnowParticles';
import { ranks } from '../data/ranks';
import { MinecraftProductCard } from '@/components/minecraft/MinecraftProductCard';

export function RanksPage() {
  const [durationType, setDurationType] = useState<'permanent' | 'monthly'>('permanent');
  const { addItem } = useCart();

  const handleAddToCart = (rank: typeof ranks[0]) => {
    addItem({
      id: `${rank.id}-${durationType}`,
      name: rank.name,
      price: rank.price[durationType],
      type: 'rank',
      durationType,
      icon: rank.icon,
      color: rank.color,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/background/minecraft-castle.jpg')`
        }}
      />
      
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      <SnowParticles />
      <Header />

      <div className="relative z-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white">Ranks</h1>
            </div>
            <p className="text-white/80">Mejora tu experiencia con beneficios exclusivos</p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setDurationType('permanent')}
              className={`relative ${durationType === 'permanent' ? 'text-yellow-500' : 'text-white'}`}
            >
              <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
              <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
              <div className={`relative minecraft-btn flex items-center gap-2 px-6 py-3 ${
                durationType === 'permanent' ? 'bg-[#1D1D1D]' : ''
              }`}>
                <Crown className="w-5 h-5 filter brightness-0 invert" />
                <span className="font-minecraft">PERMANENTE</span>
              </div>
            </button>
            <button
              onClick={() => setDurationType('monthly')}
              className={`relative ${durationType === 'monthly' ? 'text-yellow-500' : 'text-white'}`}
            >
              <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
              <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
              <div className={`relative minecraft-btn flex items-center gap-2 px-6 py-3 ${
                durationType === 'monthly' ? 'bg-[#1D1D1D]' : ''
              }`}>
                <Clock className="w-5 h-5 filter brightness-0 invert" />
                <span className="font-minecraft">MENSUAL</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ranks.map((rank) => (
              <MinecraftProductCard
                key={rank.id}
                name={rank.name}
                icon={rank.icon}
                color={rank.color}
                features={rank.features}
                price={rank.price}
                durationType={durationType}
                onAddToCart={() => handleAddToCart(rank)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}