import { useState, useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const telemetrySteps = [
  'INITIALIZING SPATIAL COORDINATES (20.2961° N, 85.8245° E)',
  'PARSING 3D CAD & BIM GEOMETRIC SCHEMATICS',
  'CALIBRATING 5-AXIS CNC TOOLPATHS (±0.05 mm)',
  'VERIFYING IS 800 / IS 456 STRUCTURAL MATRIX',
  'ENGAGING PHYSICAL ATELIER VITRINE CANVAS',
];

export default function ArchitecturalLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [telemetryText, setTelemetryText] = useState(telemetrySteps[0]);
  const [isDone, setIsDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    const ua = navigator.userAgent || '';
    const isBot = /bot|google|lighthouse|pagespeed|crawler|spider|headless/i.test(ua);
    if (isBot) return true;
    try {
      return sessionStorage.getItem('mte_intro_shown') === 'true';
    } catch {
      return false;
    }
  });
  const loaderRef = useRef(null);

  useEffect(() => {
    if (isDone) {
      if (onComplete) onComplete();
      return;
    }

    let currentVal = 0;
    const startTime = performance.now();
    const duration = 650; // ms total duration
    let animFrameId;

    // Hard fallback timeout: guarantees loader vanishes in 900ms maximum
    const fallbackTimer = setTimeout(() => {
      finishLoader();
    }, 900);

    const finishLoader = () => {
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(animFrameId);
      try {
        sessionStorage.setItem('mte_intro_shown', 'true');
      } catch {}
      
      if (loaderRef.current) {
        loaderRef.current.style.pointerEvents = 'none';
        gsap.to(loaderRef.current, {
          opacity: 0,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsDone(true);
            if (onComplete) onComplete();
          },
        });
      } else {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    };

    const updateFrame = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      currentVal = Math.floor(eased * 100);
      setProgress(currentVal);

      const stepIdx = Math.min(
        Math.floor((currentVal / 100) * telemetrySteps.length),
        telemetrySteps.length - 1
      );
      setTelemetryText(telemetrySteps[stepIdx]);

      if (t < 1) {
        animFrameId = requestAnimationFrame(updateFrame);
      } else {
        finishLoader();
      }
    };

    animFrameId = requestAnimationFrame(updateFrame);

    return () => {
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(animFrameId);
    };
  }, [isDone, onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 bg-[#FAF9F5]/90 backdrop-blur-2xl text-slate-900 overflow-hidden select-none"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Blueprint Coordinate Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Top Bar — Fully Responsive GPS Coordinates */}
      <div className="w-full flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold tracking-wider sm:tracking-widest relative z-10">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="text-amber-600 font-bold">+</span>
          <span className="hidden sm:inline">LAT: </span>
          <span>20° 17' 46" N</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="hidden sm:inline">LONG: </span>
          <span>85° 49' 28" E</span>
          <span className="text-amber-600 font-bold">+</span>
        </div>
      </div>

      {/* Centerpiece Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full px-4 text-center my-auto">
        
        {/* Geometric Calibration Reticle & Laser Compass */}
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-6 sm:mb-8 flex items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl animate-pulse" />

          {/* Rotating Reticle Dial */}
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full text-slate-400 animate-[spin_10s_linear_infinite]"
          >
            {/* Outer coordinate ring */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="opacity-40"
            />
            {/* Mid precision ring */}
            <circle
              cx="60"
              cy="60"
              r="40"
              fill="none"
              stroke="#d97706"
              strokeWidth="1.5"
              strokeDasharray="2 4"
              className="opacity-60"
            />
            {/* 4 Cardinal Crosshairs */}
            <line x1="60" y1="4" x2="60" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="60" y1="100" x2="60" y2="116" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="60" x2="20" y2="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="60" x2="116" y2="60" stroke="currentColor" strokeWidth="1.5" />

            {/* Diagonal Tick Marks */}
            <line x1="22" y1="22" x2="30" y2="30" stroke="currentColor" strokeWidth="1" className="opacity-50" />
            <line x1="98" y1="22" x2="90" y2="30" stroke="currentColor" strokeWidth="1" className="opacity-50" />
            <line x1="22" y1="98" x2="30" y2="90" stroke="currentColor" strokeWidth="1" className="opacity-50" />
            <line x1="98" y1="98" x2="90" y2="90" stroke="currentColor" strokeWidth="1" className="opacity-50" />
          </svg>

          {/* Center Amber Laser Core */}
          <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-600 shadow-[0_0_12px_#d97706] ring-4 ring-amber-500/20 flex items-center justify-center animate-ping" />
          <div className="absolute w-2 h-2 rounded-full bg-amber-600" />
        </div>

        {/* Brand & Studio Title */}
        <div className="space-y-1 mb-5 sm:mb-6">
          <div className="font-mono text-[9px] sm:text-[11px] font-bold text-amber-700 tracking-wider sm:tracking-widest uppercase">
            // PHYSICAL SCALE & CIVIL ENGINEERING
          </div>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-display">
            MT ENGINEERING & CONSTRUCTION
          </h2>
        </div>

        {/* Precision Progress Percentage */}
        <div className="font-mono text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4 flex items-baseline justify-center gap-1">
          <span>{progress}</span>
          <span className="text-amber-600 text-xl sm:text-2xl font-bold">%</span>
        </div>

        {/* Hairline Laser Progress Line */}
        <div className="w-full max-w-xs sm:max-w-sm h-1 bg-slate-200/80 rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Real-Time Telemetry Status Text */}
        <div className="min-h-[20px] flex items-center justify-center">
          <p className="font-mono text-[9px] sm:text-[11px] text-slate-500 uppercase tracking-wider animate-pulse max-w-[260px] sm:max-w-sm leading-tight text-center">
            {telemetryText}
          </p>
        </div>

      </div>

      {/* Bottom Bar — Fully Responsive Specs & Registration */}
      <div className="w-full flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold tracking-wider sm:tracking-widest relative z-10">
        <div className="flex items-center gap-1 sm:gap-1.5 truncate max-w-[200px] sm:max-w-none">
          <span className="text-amber-600 font-bold">+</span>
          <span className="hidden sm:inline">MT ENGINEERING ATELIER // </span>
          <span>BHUBANESWAR</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <span className="hidden sm:inline">CALIBRATION: </span>
          <span>±0.05mm</span>
          <span className="text-amber-600 font-bold">+</span>
        </div>
      </div>

    </div>
  );
}
