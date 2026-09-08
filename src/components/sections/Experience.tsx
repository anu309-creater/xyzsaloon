import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Wand2, Smile, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const Experience: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'The Consultation',
      copy: 'Tell us what you want. We listen before we style. Every appointment begins with an in-depth dialogue examining your face shape, lifestyle, and hair texture.',
      icon: Compass,
      detail: 'Sensory intake & hair architecture blueprint',
    },
    {
      number: '02',
      title: 'TRANSFORM',
      subtitle: 'The Artistry',
      copy: 'Our specialists turn your vision into a look designed for you. Precision scissor work, master-blended balayage, and luxurious head spa therapies unfold seamlessly.',
      icon: Wand2,
      detail: 'Bespoke chemistry & couture styling',
    },
    {
      number: '03',
      title: 'CONFIDENT',
      subtitle: 'The Unveiling',
      copy: 'Leave feeling like the best version of yourself. Walk out into the world with effortless bounce, healthy shine, and the quiet assurance of pure elegance.',
      icon: Smile,
      detail: 'Tailored home care & styling education',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-26 lg:py-32 bg-[#FAF7F2] text-rich-black overflow-hidden border-b border-[#E8E1D3]"
    >
      {/* Subtle Warm Travertine Light Glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-champagne/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#EAE2D5]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Light Theme */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <SectionHeading
            theme="light"
            label="THE ATELIER JOURNEY"
            title="THE ANUSALOON EXPERIENCE."
            subtitle="More than a simple appointment — an intentional luxury ritual crafted around slow beauty, attentive listening, and transformational results."
          />
        </div>

        {/* 3 Stages Horizontal & Vertical Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative">
          {/* Subtle connecting hairline on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-[#E8E1D3] z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="relative z-10 flex flex-col justify-between p-7 sm:p-9 bg-white border border-[#E2D8C7] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(184,155,94,0.18)] hover:border-champagne transition-all duration-500 group"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#E8E1D3]">
                    <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-champagne-dark">
                      STAGE {step.number}
                    </span>
                    <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#E2D8C7] group-hover:border-champagne group-hover:bg-champagne/15 transition-all duration-300">
                      <Icon className="w-4 h-4 text-champagne-dark" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-rich-black/50 font-semibold mb-1.5">
                    {step.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-rich-black tracking-wide mb-5 group-hover:text-champagne-dark transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Stage Narrative */}
                  <p className="font-sans text-xs sm:text-sm font-light text-rich-black/75 leading-relaxed">
                    {step.copy}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 pt-5 border-t border-[#E8E1D3] flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-champagne-dark shrink-0" />
                  <span className="text-[11px] font-sans tracking-wide text-champagne-dark font-medium">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
