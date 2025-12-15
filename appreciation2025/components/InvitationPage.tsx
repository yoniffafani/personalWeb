import React from 'react';
import { Gift, Heart } from 'lucide-react';

interface InvitationPageProps {
  onPrankTrigger: () => void;
}

export const InvitationPage: React.FC<InvitationPageProps> = ({ onPrankTrigger }) => {
  return (
    <div className="min-h-screen bg-[#FAFAF5] flex flex-col items-center py-12 px-4 relative overflow-y-auto">
      {/* Background Pattern Mockup */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      <div className="max-w-2xl w-full bg-white shadow-2xl border-8 border-double border-gold-200 p-8 md:p-16 text-center relative z-10 mx-auto">
        
        {/* Header Ornament */}
        <div className="flex justify-center mb-6">
            <svg width="200" height="40" viewBox="0 0 200 40" className="text-gold-500 fill-current">
                <path d="M100 35 C60 35 40 10 0 10 L0 12 C40 12 60 37 100 37 C140 37 160 12 200 12 L200 10 C160 10 140 35 100 35 Z" />
                <circle cx="100" cy="20" r="5" />
            </svg>
        </div>

        <h1 className="font-script text-6xl md:text-7xl text-gold-600 mb-6 drop-shadow-sm">
          Terima Kasih
        </h1>

        <div className="font-display text-gold-800 tracking-[0.2em] text-sm md:text-base uppercase mb-8 border-b border-gold-200 pb-8 mx-12">
          Atas Kerjasamanya
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6 font-bold">
          Tahun 2025
        </h2>

        <p className="font-serif text-gray-600 leading-relaxed mb-8 italic">
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
          <br/>
          <span className="text-sm text-gold-600 mt-2 block">— Winston Churchill</span>
        </p>
        
        <p className="font-serif text-gray-600 leading-relaxed mb-12">
          Perjalanan kita di tahun ini sungguh luar biasa. Dedikasi, kerja keras, dan semangat yang Anda tunjukkan telah membawa kita pada pencapaian yang gemilang. Mari kita songsong masa depan dengan harapan baru.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-60">
           <div className="h-[1px] w-12 bg-gold-400"></div>
           <Heart className="w-5 h-5 text-gold-500 fill-gold-500" />
           <div className="h-[1px] w-12 bg-gold-400"></div>
        </div>

        <div className="bg-gold-50 p-8 rounded-lg border border-gold-200">
          <p className="font-serif text-gray-700 mb-6">
            Sebagai tanda apresiasi kami yang mendalam, kami telah menyiapkan kenang-kenangan spesial untuk Anda.
          </p>
          
          <button
            onClick={onPrankTrigger}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-serif px-8 py-4 rounded-lg shadow-lg hover:shadow-gold-300/50 hover:scale-105 transition-all duration-300"
          >
            <Gift className="w-5 h-5 animate-bounce" />
            <span className="tracking-wide">Click Here to Get a Gift</span>
          </button>
        </div>

        {/* Footer Ornament */}
        <div className="flex justify-center mt-12">
            <svg width="200" height="40" viewBox="0 0 200 40" className="text-gold-500 fill-current transform rotate-180">
                <path d="M100 35 C60 35 40 10 0 10 L0 12 C40 12 60 37 100 37 C140 37 160 12 200 12 L200 10 C160 10 140 35 100 35 Z" />
                <circle cx="100" cy="20" r="5" />
            </svg>
        </div>

      </div>
      
      <div className="mt-8 font-display text-gold-700 text-xs tracking-widest opacity-70">
        EST. 2025 | APPRECIATION EVENT
      </div>
    </div>
  );
};