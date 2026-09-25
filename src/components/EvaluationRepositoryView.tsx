import React from 'react';
import { UserProfileType, EvaluationAttempt } from '../types';
import { Database, Award, CheckCircle2, XCircle, Calendar, FileText, User, Download, Trash2, ShieldCheck } from 'lucide-react';

interface EvaluationRepositoryViewProps {
  userProfile: UserProfileType;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
}

export const EvaluationRepositoryView: React.FC<EvaluationRepositoryViewProps> = ({ userProfile, setUserProfile }) => {
  const attempts = userProfile.evaluationAttempts || [];

  const handleClearRepository = () => {
    if (window.confirm("¿Estás seguro de limpiar el repositorio de evaluaciones?")) {
      setUserProfile({
        ...userProfile,
        evaluationAttempts: []
      });
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      aprendiz: {
        nombre: userProfile.name,
        documento: userProfile.documentNumber || 'No registrado',
        correo: userProfile.email || 'No registrado',
        programa: userProfile.programName,
        regional: userProfile.regional,
        centro: userProfile.centro,
        tipoPerfil: userProfile.isNew ? 'Nuevo Aprendiz' : 'Formación Previa'
      },
      evaluaciones: attempts
    }, null, 2));
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Repositorio_Evaluaciones_${userProfile.name.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 text-slate-900">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002B42] via-[#003C5E] to-[#001E2E] text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-emerald-300 text-sm font-semibold mb-3.5 backdrop-blur-xs border border-white/20">
              <Database className="w-4 h-4 text-[#39A900]" />
              <span>Repositorio Institucional de Evaluaciones y Respuestas</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-2">
              Registro Histórico de Aprendices
            </h1>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Almacenamiento seguro de datos básicos de caracterización y resultados de pruebas de conocimientos del Reglamento del Aprendiz (Acuerdo 009 de 2024).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {attempts.length > 0 && (
              <>
                <button
                  onClick={handleExportJSON}
                  className="px-4 py-3 bg-[#39A900] hover:bg-[#329600] text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Exportar Repositorio (JSON)</span>
                </button>
                <button
                  onClick={handleClearRepository}
                  className="px-4 py-3 bg-red-600/80 hover:bg-red-700 text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Limpiar</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Apprentice Basic Data Card */}
      <div className="bg-white rounded-3xl p-7 border border-slate-300 shadow-sm space-y-5">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-2xl">
            <User className="w-6 h-6 text-[#39A900]" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Datos Básicos del Aprendiz Registrados</h2>
            <p className="text-xs sm:text-sm text-slate-600">Plantilla previa de caracterización vinculada al repositorio</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Nombre Completo</span>
            <span className="font-bold text-slate-900 text-base">{userProfile.name}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Documento de Identidad</span>
            <span className="font-bold text-slate-900 text-base">{userProfile.documentNumber || 'No registrado (Actualizar en Perfil)'}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Correo Electrónico</span>
            <span className="font-bold text-slate-900 text-base">{userProfile.email || 'No registrado (Actualizar en Perfil)'}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Programa de Formación</span>
            <span className="font-bold text-slate-900 text-sm">{userProfile.programName}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Regional y Centro</span>
            <span className="font-bold text-slate-900 text-sm">{userProfile.regional} - {userProfile.centro}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Tipo de Ingreso</span>
            <span className="font-bold text-emerald-800 text-sm">
              {userProfile.isNew ? 'Nuevo Aprendiz (Inducción Completa)' : 'Formación Previa (Actualización Normativa)'}
            </span>
          </div>
        </div>
      </div>

      {/* Evaluation Repository Records */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">Historial de Pruebas y Respuestas Almacenadas</h2>
            <p className="text-xs sm:text-sm text-slate-600">Registro detallado de los intentos de evaluación realizados por el aprendiz.</p>
          </div>
          <span className="text-xs sm:text-sm font-bold bg-sky-100 text-sky-900 px-3 py-1 rounded-xl border border-sky-200">
            Total Intentos: {attempts.length}
          </span>
        </div>

        {attempts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300">
            <Database className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No hay evaluaciones registradas en el repositorio</h3>
            <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
              Realiza la prueba de conocimientos en el módulo <strong>"Derechos Interactivos & Test"</strong> para que tus resultados y respuestas queden guardados automáticamente.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {attempts.map((att) => (
              <div key={att.id} className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base ${
                      att.isPassed ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-red-100 text-red-900 border border-red-300'
                    }`}>
                      {att.isPassed ? <CheckCircle2 className="w-6 h-6 text-[#39A900]" /> : <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900">{att.testName}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3.5 h-3.5" /> {att.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Calificación</span>
                      <span className={`text-lg font-extrabold ${att.isPassed ? 'text-emerald-700' : 'text-red-700'}`}>
                        {att.score} / {att.total} ({Math.round((att.score / att.total) * 100)}%)
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${
                      att.isPassed ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-red-100 text-red-900 border-red-300'
                    }`}>
                      {att.isPassed ? 'APROBADO' : 'REPROBADO'}
                    </span>
                  </div>
                </div>

                {/* Answers summary */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Detalle de Respuestas del Aprendiz:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {att.answersSummary.map((ans, idx) => (
                      <div key={idx} className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                        ans.isCorrect ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-red-50/70 border-red-200 text-red-950'
                      }`}>
                        {ans.isCorrect ? <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" /> : <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />}
                        <div>
                          <p className="font-bold">{ans.question}</p>
                          <p className="text-xs opacity-90 mt-0.5">Opción elegida: {ans.chosen}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
