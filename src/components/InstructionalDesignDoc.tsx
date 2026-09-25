import React from 'react';
import { INSTRUCTIONAL_DESIGN_SPEC } from '../data/senaData';
import { FileText, CheckCircle2, Sparkles, User, BookOpen, Layers } from 'lucide-react';

export const InstructionalDesignDoc: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto text-slate-900">
      
      {/* Header */}
      <div className="bg-[#002B42] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 bg-[#39A900] text-white rounded-full">
            Documento Institucional
          </span>
          <span className="text-xs sm:text-sm text-slate-300 font-medium">· {INSTRUCTIONAL_DESIGN_SPEC.version}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3">
          {INSTRUCTIONAL_DESIGN_SPEC.title}
        </h1>
        <p className="text-slate-200 text-sm sm:text-base font-medium">
          Elaborado por: <strong className="text-white underline decoration-[#39A900]">{INSTRUCTIONAL_DESIGN_SPEC.author}</strong>
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {INSTRUCTIONAL_DESIGN_SPEC.sections.map((sec, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-sm border border-emerald-300">
                0{idx + 1}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900">{sec.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">{sec.description}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {sec.items.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#39A900] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Methodology & UX Summary */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-4">
        <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900">4. Directrices de Accesibilidad e Interfaz (UX Educativo)</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
          El prototipo implementa una interfaz limpia inspirada en los estándares de accesibilidad WCAG 2.1 AA, con paleta institucional SENA (Verde `#39A900` y Azul Oscuro `#00324D`), tipografía de alta legibilidad (Plus Jakarta Sans para cuerpo y Syne para titulares), y ausencia completa de elementos recargados o distractores. Cada interacción responde en menos de 200ms para garantizar una experiencia fluida en dispositivos móviles, tablets y equipos de escritorio.
        </p>
      </div>

    </div>
  );
};
