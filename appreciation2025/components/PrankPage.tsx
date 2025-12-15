import React from 'react';
import { TriangleAlert, ShieldAlert } from 'lucide-react';

export const PrankPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-100"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
      </div>

      <div className="z-10 flex flex-col items-center max-w-2xl w-full animate-shake">
        
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-white p-6 rounded-full shadow-2xl">
                <TriangleAlert className="w-32 h-32 text-red-600" />
            </div>
        </div>

        <h1 className="font-sans font-black text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 drop-shadow-lg">
          WARNING!
        </h1>

        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border-2 border-red-400 mb-8 w-full">
            <p className="font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
              Hayo jangan klik link sembarangan!
            </p>
            <p className="font-medium text-xl text-red-100 mt-4">
              Ambil training cybersecurity lagi.
            </p>
        </div>

        <div className="flex items-center gap-2 text-white/80 bg-red-800/50 px-4 py-2 rounded-full">
           <ShieldAlert className="w-5 h-5" />
           <span className="font-mono text-sm">SECURITY ALERT: PHISHING SIMULATION</span>
        </div>

      </div>

      {/* Flashing Overlay */}
      <div className="absolute inset-0 bg-red-500/30 animate-pulse-fast pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};