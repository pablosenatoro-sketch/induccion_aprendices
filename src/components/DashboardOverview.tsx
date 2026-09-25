import React from 'react';
import { UserProfileType } from '../types';
import { INDUCTION_MODULES } from '../data/senaData';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Compass, 
  FileText
} from 'lucide-react';

interface DashboardOverviewProps {
  userProfile: UserProfileType;
  setActiveTab: (tab: string) => void;
  onOpenProfile: () => void;
  onOpenCertificate: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  userProfile,
  setActiveTab,
  onOpenProfile,
  onOpenCertificate,
}) => {
  const completedCount = userProfile.completedModules.length;
  const totalModules = INDUCTION_MODULES.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 text-slate-900">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002B42] via-[#003C5E] to-[#001E2E] text-white p-8 sm:p-10 shadow-xl border border-slate-700">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-[#39A900]/25 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-emerald-300 text-sm font-semibold mb-4 backdrop-blur-xs border border-white/20">
            <Sparkles className="w-4 h-4 text-[#39A900]" />
            <span>Inducción Institucional 2026 · Acuerdo 009 de 2024</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-4 leading-tight">
            ¡Bienvenido(a) al SENA, {userProfile.name}!
          </h1>
          
          <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
            Estás cursando el programa <strong className="text-white underline decoration-[#39A900]">{userProfile.programName}</strong> en la <span className="text-emerald-300 font-semibold">{userProfile.regional}</span>. 
            {userProfile.isNew ? (
              <span> Como <strong>nuevo aprendiz</strong>, tu ruta incluye todos los fundamentos institucionales y el conocimiento esencial del Reglamento del Aprendiz.</span>
            ) : (
              <span> Tu perfil con <strong>formación previa</strong> se enfoca en la actualización normativa y los nuevos lineamientos del Acuerdo 009 de 2024.</span>
            )}
          </p>
        </div>
      </div>

      {/* Progress & Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Progress Card */}
        <div className="bg-white rounded-3xl p-7 border border-slate-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">Progreso de Inducción</span>
              <span className="text-xs sm:text-sm font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                {progressPercent}% Completado
              </span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-[#39A900] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm sm:text-base text-slate-700">
              Has completado <strong className="text-slate-900">{completedCount} de {totalModules}</strong> módulos de aprendizaje institucional.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setActiveTab('modules')}
              className="text-xs sm:text-sm font-bold text-[#00324D] hover:text-[#39A900] flex items-center gap-1.5 transition-colors"
            >
              <span>Ver todos los módulos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {completedCount === totalModules && (
              <button
                onClick={onOpenCertificate}
                className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-300 flex items-center gap-1.5 animate-bounce shadow-sm"
              >
                <Award className="w-4 h-4 text-[#39A900]" /> Descargar Certificado
              </button>
            )}
          </div>
        </div>

        {/* Instructional Design Card */}
        <div className="bg-white rounded-3xl p-7 border border-slate-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-2xl">
                <FileText className="w-6 h-6 text-[#39A900]" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900">Diseño Instruccional y UX</h3>
                <p className="text-xs sm:text-sm text-slate-600">Estructura pedagógica y metodológica</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Consulta las especificaciones completas de arquitectura de contenidos, caracterización de usuarios y directrices de usabilidad educativa.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-200">
            <button
              onClick={() => setActiveTab('instructional')}
              className="w-full py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Ver Especificación Técnica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Recommended Learning Path */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">Ruta de Inducción Recomendada</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Módulos interactivos diseñados para tu perfil ({userProfile.isNew ? 'Nuevo Ingreso' : 'Formación Previa'})</p>
          </div>
          <button
            onClick={() => setActiveTab('modules')}
            className="text-xs sm:text-sm font-bold text-[#39A900] hover:text-[#329600] flex items-center gap-1.5"
          >
            <span>Ver todos los módulos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUCTION_MODULES.map((mod, index) => {
            const isCompleted = userProfile.completedModules.includes(mod.id);
            return (
              <div
                key={mod.id}
                onClick={() => setActiveTab('modules')}
                className="group p-6 rounded-2xl border-2 border-slate-200 hover:border-[#39A900] hover:shadow-md transition-all cursor-pointer bg-slate-50/70 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#00324D] bg-sky-100 px-3 py-1 rounded-lg border border-sky-200">
                      Módulo {index + 1} · {mod.duration}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-[#39A900]" /> Completado
                      </span>
                    ) : (
                      <span className="text-xs sm:text-sm font-semibold text-slate-500">Pendiente</span>
                    )}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#39A900] transition-colors mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600">
                  <span>{mod.keyPoints.length} puntos clave</span>
                  <span className="text-[#39A900] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    Iniciar Módulo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
