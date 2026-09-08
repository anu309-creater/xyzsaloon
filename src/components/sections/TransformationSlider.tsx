import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, MoveHorizontal, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';

interface TransformationSliderProps {
  onOpenBooking: () => void;
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({
  onOpenBooking,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="transformation"
      className="relative py-20 sm:py-26 lg:py-32 bg-[#FAF7F2] text-rich-black overflow-hidden border-b border-[#E8E1D3]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <SectionHeading
            theme="light"
            align="center"
            label="ATELIER TRANSFORMATIONS"
            title="A LITTLE CHANGE CAN CHANGE EVERYTHING."
            subtitle="Real transformations crafted by our master colorists and stylists. Experience the difference of couture hair architecture, precision glossing, and healthy restoration."
          />
        </div>

        {/* Interactive Before / After Centerpiece */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onMouseEnter={() => setCursorState('drag')}
            onMouseLeave={() => setCursorState('default')}
            className="relative w-full aspect-[4/5] sm:aspect-[16/10] max-h-[700px] overflow-hidden select-none cursor-ew-resize shadow-xl border border-[#E2D8C7] rounded-2xl bg-[#EFE9DF] touch-none"
          >
            {/* After Image (Base Layer - 100% width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/trans-after.jpg"
                alt="After Hair Transformation: Radiant Honey Balayage & Velvet Blowout"
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-sans font-semibold tracking-widest uppercase text-champagne-dark border border-[#E2D8C7] rounded-full shadow-xs">
                AFTER: BALAYAGE &amp; BLOWOUT
              </div>
            </div>

            {/* Before Image (Revealed by width clip percentage) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
                <img
                  src="/images/trans-before.jpg"
                  alt="Before Hair Transformation: Dull and Uneven Hair"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                />
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-sans font-semibold tracking-widest uppercase text-rich-black/80 border border-[#E2D8C7] rounded-full shadow-xs">
                BEFORE: OVERGROWN &amp; DULL
              </div>
            </div>

            {/* Draggable Divider Line & Pill Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2px] bg-champagne-dark pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Draggable Handle Pill */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 bg-rich-black border border-champagne text-white rounded-full shadow-2xl backdrop-blur-md">
                <MoveHorizontal className="w-3.5 h-3.5 text-champagne" />
                <span className="text-[9px] font-sans tracking-widest uppercase font-bold text-white whitespace-nowrap">
                  DRAG TO REVEAL
                </span>
              </div>
            </div>

            {/* Instructional Overlay Pill on Bottom Center */}
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2D8C7] shadow-xs flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-champagne-dark" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-rich-black/80 font-medium">
                DRAG SLIDER TO COMPARE
              </span>
            </div>
          </div>

          {/* Transformation Footer Actions & Details */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 sm:pt-8 border-t border-[#E8E1D3]">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-xl sm:text-2xl font-light text-rich-black">
                Ready for your bespoke makeover?
              </h4>
              <p className="font-sans text-xs text-rich-black/60 mt-1">
                Consult with our senior master colorists to define your signature shade.
              </p>
            </div>

            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={onOpenBooking}
                onMouseEnter={() => setCursorState('book')}
                onMouseLeave={() => setCursorState('default')}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-rich-black hover:bg-[#222222] text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>START YOUR TRANSFORMATION</span>
                <ArrowRight className="w-4 h-4 text-champagne" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
