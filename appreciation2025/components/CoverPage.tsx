import React from 'react';
import { MailOpen } from 'lucide-react';

interface CoverPageProps {
  onOpen: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onOpen }) => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-gold-500 rounded-tl-3xl m-4 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-gold-500 rounded-tr-3xl m-4 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-gold-500 rounded-bl-3xl m-4 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-gold-500 rounded-br-3xl m-4 opacity-50"></div>

      <div className="z-10 text-center max-w-lg w-full bg-white p-12 shadow-2xl border border-gold-200 rounded-lg">
        <h1 className="font-display text-2xl tracking-widest text-gold-700 mb-4 uppercase">
          Appreciation 2025
        </h1>
        <p className="font-serif italic text-gray-600 mb-8">
          Kepada Bapak/Ibu/Saudara di Tempat
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-gold-50 rounded-full border-2 border-gold-300">
             <MailOpen className="w-12 h-12 text-gold-600" />
          </div>
        </div>

        <button 
          onClick={onOpen}
          className="bg-gold-600 hover:bg-gold-700 text-white font-serif px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 tracking-wide"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};