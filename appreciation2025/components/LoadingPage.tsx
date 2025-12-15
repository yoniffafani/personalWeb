import React from 'react';
import { Heart } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF5] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background elements matching the theme */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-gold-300 rounded-tl-[3rem] m-6 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-gold-300 rounded-br-[3rem] m-6 opacity-40"></div>

      {/* Central Loading Content */}
      <div className="flex flex-col items-center z-10">
        <div className="relative mb-8">
             {/* Spinner Effect */}
             <div className="absolute inset-0 border-4 border-gold-200 rounded-full animate-[spin_3s_linear_infinite]"></div>
             <div className="absolute inset-0 border-t-4 border-gold-500 rounded-full animate-[spin_2s_linear_infinite]"></div>
             
             {/* Center Icon */}
             <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-gold-100">
                <Heart className="w-10 h-10 text-gold-500 fill-gold-500 animate-pulse" />
             </div>
        </div>
        
        <h2 className="font-script text-4xl md:text-5xl text-gold-600 mb-4 drop-shadow-sm">
          Mohon Tunggu...
        </h2>
        
        <div className="flex flex-col items-center gap-2">
            <div className="h-[1px] w-16 bg-gold-400"></div>
            <p className="font-display text-gold-800 tracking-[0.2em] text-xs md:text-sm uppercase">
              Menyiapkan Undangan Spesial
            </p>
        </div>
      </div>
    </div>
  );
};