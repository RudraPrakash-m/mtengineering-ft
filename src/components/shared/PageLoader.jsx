import { Compass } from 'lucide-react';

export default function PageLoader() {
  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent select-none py-20">
      {/* Blueprint Coordinate Micro-Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Ambient Glow */}
      <div className="absolute w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Animated Engineering Compass Reticle */}
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-amber-600/40 animate-[spin_8s_linear_infinite]" />
          
          {/* Inner counter-rotating ring */}
          <div className="absolute inset-2 rounded-full border border-slate-300/80 animate-[spin_6s_linear_infinite_reverse]" />
          
          {/* Center compass icon */}
          <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center shadow-sm">
            <Compass size={18} className="animate-pulse" />
          </div>

          {/* Precision Laser Dot */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-600 shadow-[0_0_8px_#d97706]" />
        </div>

        {/* Technical Title */}
        <div className="font-mono text-[11px] font-bold text-amber-700 tracking-widest uppercase mb-1.5">
          // ARCHITECTURAL ATELIER //
        </div>
        
        <div className="text-sm font-bold text-slate-800 tracking-tight font-display mb-4">
          Loading Engineering Schematics...
        </div>

        {/* Gliding Laser Beam Progress Bar */}
        <div className="w-44 h-[2px] bg-slate-200/80 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-amber-600 to-transparent animate-shimmer" />
        </div>

        {/* Coordinates Readout */}
        <div className="font-mono text-[10px] text-slate-400 mt-3 tracking-wider">
          20° 17' 46" N &bull; 85° 49' 28" E
        </div>

      </div>
    </div>
  );
}
