import React, { useState } from 'react';
import { INDUCTION_MODULES } from '../data/senaData';
import { UserProfileType, ModuleItem } from '../types';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  HelpCircle,
  Award,
  ListChecks
} from 'lucide-react';

interface ModulesViewProps {
  userProfile: UserProfileType;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
}

export const ModulesView: React.FC<ModulesViewProps> = ({ userProfile, setUserProfile }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(INDUCTION_MODULES[0].id);

  const currentModule = INDUCTION_MODULES.find(m => m.id === selectedModuleId) || INDUCTION_MODULES[0];
  const isCompleted = userProfile.completedModules.includes(currentModule.id);

  const toggleComplete = (id: string) => {
    let updated: string[];
    if (userProfile.completedModules.includes(id)) {
      updated = userProfile.completedModules.filter(m => m !== id);
    } else {
      updated = [...userProfile.completedModules, id];
    }
    setUserProfile({ ...userProfile, completedModules: updated });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 text-slate-900">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-xs sm:text-sm font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              Formación Profesional Integral
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">· {INDUCTION_MODULES.length} Módulos Disponibles</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900">
            Módulos de Inducción Institucional
          </h1>
          <p className="text-slate-700 text-sm sm:text-base mt-2 leading-relaxed">
            Desarrolla cada píldora de conocimiento diseñada específicamente para tu perfil de aprendiz.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-100 p-3 rounded-2xl border border-slate-300">
          <span className="text-xs sm:text-sm font-bold text-slate-800 px-3">
            Progreso: {userProfile.completedModules.length} / {INDUCTION_MODULES.length}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 px-1">
            Contenido de los Módulos
          </h3>
          <div className="space-y-3">
            {INDUCTION_MODULES.map((mod, index) => {
              const active = mod.id === selectedModuleId;
              const completed = userProfile.completedModules.includes(mod.id);

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setSelectedModuleId(mod.id);
                  }}
                  className={`w-full text-left p-4.5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                    active 
                      ? 'bg-white border-[#39A900] shadow-md ring-2 ring-[#39A900]/20' 
                      : 'bg-white/80 hover:bg-white border-slate-300 text-slate-800'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    completed ? 'bg-emerald-100 text-emerald-800' : active ? 'bg-[#39A900] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {completed ? <CheckCircle2 className="w-5 h-5 text-[#39A900]" /> : index + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {mod.duration}
                      </span>
                      {completed && (
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                          Completado
                        </span>
                      )}
                    </div>
                    <h4 className={`text-sm sm:text-base font-bold truncate ${active ? 'text-slate-900' : 'text-slate-800'}`}>
                      {mod.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Module Detailed Content */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#00324D] bg-sky-100 px-3 py-1 rounded-lg border border-sky-200">
                Módulo Interactivo
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-slate-900 mt-2.5">
                {currentModule.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{currentModule.subtitle}</p>
            </div>

            <button
              onClick={() => toggleComplete(currentModule.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
                isCompleted 
                  ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-400' 
                  : 'bg-[#39A900] hover:bg-[#329600] text-white shadow-md'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{isCompleted ? 'Módulo Completado' : 'Marcar como Completado'}</span>
            </button>
          </div>

          {/* Description */}
          <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            {currentModule.description}
          </div>

          {/* Key Takeaways */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-3.5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#39A900]" /> Puntos Clave del Módulo
            </h3>
            <ul className="space-y-3">
              {currentModule.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#39A900] mt-2.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-4 pt-5 border-t border-slate-200">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
              Desarrollo Temático
            </h3>
            {currentModule.content.map((sec, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border-2 border-slate-200 space-y-2.5 shadow-xs">
                <h4 className="font-bold text-base sm:text-lg text-slate-900">{sec.heading}</h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{sec.text}</p>
                {sec.highlights && (
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {sec.highlights.map((hl, j) => (
                      <span key={j} className="text-xs sm:text-sm font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-xl border border-emerald-300">
                        {hl}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Check / Mini Challenge */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              ¿Listo para avanzar al siguiente módulo o repasar el reglamento?
            </div>
            <button
              onClick={() => {
                const currentIndex = INDUCTION_MODULES.findIndex(m => m.id === selectedModuleId);
                if (currentIndex < INDUCTION_MODULES.length - 1) {
                  setSelectedModuleId(INDUCTION_MODULES[currentIndex + 1].id);
                } else {
                  setSelectedModuleId(INDUCTION_MODULES[0].id);
                }
              }}
              className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2.5 shadow-md"
            >
              <span>Siguiente Módulo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
