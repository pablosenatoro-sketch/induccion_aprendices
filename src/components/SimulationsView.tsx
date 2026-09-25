import React, { useState } from 'react';
import { MOCK_CASE_STUDIES } from '../data/senaData';
import { Award, CheckCircle2, XCircle, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export const SimulationsView: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(MOCK_CASE_STUDIES[0].id);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const currentCase = MOCK_CASE_STUDIES.find(c => c.id === selectedCaseId) || MOCK_CASE_STUDIES[0];

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optId);
  };

  const handleVerify = () => {
    if (!selectedOptionId) return;
    setIsAnswered(true);
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 text-slate-900">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-xs sm:text-sm font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
              Simulador de Casos Prácticos
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">· Aplicación del Reglamento</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900">
            Retos de Convivencia y Normatividad
          </h1>
          <p className="text-slate-700 text-sm sm:text-base mt-2 leading-relaxed">
            Pon a prueba tu criterio tomando decisiones basadas en el Acuerdo 009 de 2024 ante situaciones reales de formación.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Case selector sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 px-1">
            Casos Disponibles ({MOCK_CASE_STUDIES.length})
          </h3>
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {MOCK_CASE_STUDIES.map((cs, idx) => {
              const active = cs.id === selectedCaseId;
              return (
                <button
                  key={cs.id}
                  onClick={() => {
                    setSelectedCaseId(cs.id);
                    setSelectedOptionId(null);
                    setIsAnswered(false);
                  }}
                  className={`w-full text-left p-4.5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                    active 
                      ? 'bg-white border-[#39A900] shadow-md ring-2 ring-[#39A900]/20' 
                      : 'bg-white/80 hover:bg-white border-slate-300 text-slate-800'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    active ? 'bg-[#39A900] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800">{cs.relatedArticle}</span>
                    <h4 className={`text-sm sm:text-base font-bold truncate ${active ? 'text-slate-900' : 'text-slate-800'}`}>
                      {cs.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Case Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between pb-5 border-b border-slate-200">
            <span className="text-xs sm:text-sm font-bold text-[#00324D] bg-sky-100 px-3 py-1.5 rounded-xl border border-sky-200">
              {currentCase.relatedArticle}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600">Simulación Interactiva UX</span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">{currentCase.title}</h2>
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed mb-5 font-medium">
              <strong>Contexto: </strong> {currentCase.context}
            </div>
            <p className="text-sm sm:text-base font-bold text-[#00324D] mb-5">
              {currentCase.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3.5">
            {currentCase.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let btnStyle = 'border-2 border-slate-300 bg-white hover:border-slate-400 text-slate-800';

              if (isSelected) {
                btnStyle = 'border-2 border-[#39A900] bg-emerald-50/70 ring-2 ring-[#39A900]/20 text-slate-900 font-semibold';
              }

              if (isAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'border-2 border-emerald-500 bg-emerald-100/80 text-emerald-950 font-semibold';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'border-2 border-red-400 bg-red-100/80 text-red-950';
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'border-[#39A900] bg-[#39A900] text-white' : 'border-slate-400'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium">{opt.text}</p>
                      {isAnswered && (
                        <p className={`text-xs sm:text-sm mt-2 font-bold ${opt.isCorrect ? 'text-emerald-800' : isSelected ? 'text-red-800' : 'text-slate-600'}`}>
                          {opt.feedback}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
            {isAnswered ? (
              <button
                onClick={handleReset}
                className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 text-sm font-bold rounded-xl transition-all"
              >
                Intentar de Nuevo
              </button>
            ) : (
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                Selecciona una opción para verificar tu respuesta.
              </div>
            )}

            {!isAnswered && (
              <button
                onClick={handleVerify}
                disabled={!selectedOptionId}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md ${
                  selectedOptionId 
                    ? 'bg-[#39A900] hover:bg-[#329600] text-white' 
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                Verificar Respuesta
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
