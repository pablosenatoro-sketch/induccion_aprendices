import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Award, 
  RefreshCw, 
  Code, 
  FileJson, 
  HelpCircle, 
  Sparkles, 
  Check, 
  ArrowRight,
  BookMarked
} from 'lucide-react';
import { MOCK_CASE_STUDIES } from '../data/senaData';
import { UserProfileType, EvaluationAttempt } from '../types';
import acuerdoJsonData from '../data/acuerdo009.json';

interface DerechosDeberesInteractiveProps {
  userProfile: UserProfileType;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
}

export const DerechosDeberesInteractive: React.FC<DerechosDeberesInteractiveProps> = ({ userProfile, setUserProfile }) => {
  const [activeSubTab, setActiveSubTab] = useState<'explorer' | 'quiz' | 'json'>('explorer');
  const [selectedCategory, setSelectedCategory] = useState<'academic' | 'behavioral' | 'duties'>('academic');
  
  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredRecords, setAnsweredRecords] = useState<{ question: string; chosen: string; isCorrect: boolean }[]>([]);
  const [showReinforcement, setShowReinforcement] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [successEffect, setSuccessEffect] = useState(false);

  const academicRights = [
    { id: 'a.1', title: 'Carné Estudiantil', desc: 'Recibir en el momento de su matrícula, el carné estudiantil que lo acredite como Aprendiz del SENA.' },
    { id: 'a.2', title: 'Inducción Integral', desc: 'Recibir inducción al ingresar con contenidos de gestión tecnológica, entorno, proyectos y ruta de aprendizaje.' },
    { id: 'a.3', title: 'Fuentes de Conocimiento y TICs', desc: 'Acceso a TICs, entornos reales o simulados, trabajo colaborativo e instructores.' },
    { id: 'a.4', title: 'Formación Profesional Integral', desc: 'Formación acorde al programa y al desarrollo armónico de las dimensiones humanas.' },
    { id: 'a.5', title: 'Ambientes de Aprendizaje', desc: 'Uso apropiado de infraestructura, equipos y recursos, asumiendo responsabilidad por su cuidado.' },
    { id: 'a.6', title: 'Bienestar al Aprendiz', desc: 'Disfrutar de los programas institucionales de bienestar durante el proceso formativo.' },
    { id: 'a.7', title: 'Orientación Académica', desc: 'Recibir orientación académica y comportamental que estimule el desarrollo y convivencia social.' }
  ];

  const behavioralRights = [
    { id: 'b.1', title: 'Trato Digno y Respetuoso', desc: 'Recibir trato digno y respetuoso por todos los integrantes de la Comunidad Educativa.' },
    { id: 'b.2', title: 'Debido Proceso en Peticiones', desc: 'Ser escuchado y atendido en sus peticiones, siguiendo rigurosamente el debido proceso.' },
    { id: 'b.3', title: 'Libertad de Expresión Pacífica', desc: 'Expresar ideas y pensamientos sin recurrir a la violencia ni perturbar el orden institucional.' },
    { id: 'b.4', title: 'Indumentaria y EPPs', desc: 'Usar la indumentaria y los elementos de protección personal (EPP) propios del programa.' }
  ];

  const handleOptionSelect = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optionId);
  };

  const handleAnswerSubmit = () => {
    if (!selectedOption) return;
    setIsAnswerSubmitted(true);
    
    const currentCase = MOCK_CASE_STUDIES[currentQuizIndex];
    const chosenOpt = currentCase.options.find(o => o.id === selectedOption);
    const isCorrect = chosenOpt?.isCorrect || false;

    const newRecord = {
      question: currentCase.title,
      chosen: chosenOpt?.text || '',
      isCorrect
    };
    setAnsweredRecords(prev => [...prev, newRecord]);
    
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setSuccessEffect(true);
      setTimeout(() => setSuccessEffect(false), 1200);
    } else {
      setShakeEffect(true);
      setShowReinforcement(true);
      setTimeout(() => setShakeEffect(false), 600);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowReinforcement(false);
    
    if (currentQuizIndex < MOCK_CASE_STUDIES.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      // Quiz Finished - Save to evaluationAttempts repository
      const finalScore = quizScore;
      const total = MOCK_CASE_STUDIES.length;
      const isPassed = finalScore >= Math.ceil(total * 0.7);

      const newAttempt: EvaluationAttempt = {
        id: 'att-' + Date.now(),
        date: new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        score: finalScore,
        total,
        testName: 'Prueba de Conocimientos - Reglamento del Aprendiz (Acuerdo 009 de 2024)',
        answersSummary: answeredRecords,
        isPassed
      };

      setUserProfile(prev => ({
        ...prev,
        evaluationAttempts: [newAttempt, ...(prev.evaluationAttempts || [])]
      }));

      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setAnsweredRecords([]);
    setShowReinforcement(false);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6 animate-fade-in text-slate-900">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002B42] via-[#003C5E] to-[#001E2E] rounded-3xl p-7 sm:p-9 text-white shadow-xl relative overflow-hidden border border-slate-700">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold mb-3.5 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Módulo Interactivo del Reglamento (Acuerdo 009 de 2024)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display mb-3">
            Derechos, Deberes y Prueba de Conocimiento
          </h1>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
            Explora de manera dinámica los derechos académicos y comportamentales del SENA, realiza la prueba de conocimientos con refuerzo pedagógico y almacenamiento automático en el repositorio.
          </p>
        </div>

        {/* Sub-tabs selector */}
        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-white/20 pt-5">
          <button
            onClick={() => setActiveSubTab('explorer')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'explorer' 
                ? 'bg-white text-slate-900 shadow-md' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#39A900]" />
            Explorador de Derechos y Deberes
          </button>
          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'quiz' 
                ? 'bg-white text-slate-900 shadow-md' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            Prueba de Conocimientos y Refuerzo
          </button>
          <button
            onClick={() => setActiveSubTab('json')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'json' 
                ? 'bg-white text-slate-900 shadow-md' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <FileJson className="w-4 h-4 text-sky-400" />
            Estructura JSON (Documento Oficial)
          </button>
        </div>
      </div>

      {/* Tab 1: Explorer */}
      {activeSubTab === 'explorer' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-300 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">Filtrar Categoría:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedCategory('academic')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  selectedCategory === 'academic' 
                    ? 'bg-[#39A900] text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Derechos Académicos (a.1 - a.7)
              </button>
              <button
                onClick={() => setSelectedCategory('behavioral')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  selectedCategory === 'behavioral' 
                    ? 'bg-[#00324D] text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Derechos Comportamentales (b.1 - b.4)
              </button>
              <button
                onClick={() => setSelectedCategory('duties')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  selectedCategory === 'duties' 
                    ? 'bg-amber-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Deberes e Institucionalidad
              </button>
            </div>
          </div>

          {selectedCategory === 'academic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {academicRights.map((right) => (
                <div key={right.id} className="bg-white rounded-2xl p-6 border border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-l-4 border-l-[#39A900]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-lg border border-emerald-300">
                        {right.id}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Capítulo II</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{right.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{right.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 text-[#39A900] font-bold">
                      <CheckCircle2 className="w-4 h-4" /> Garantizado por Acuerdo 009
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedCategory === 'behavioral' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {behavioralRights.map((right) => (
                <div key={right.id} className="bg-white rounded-2xl p-6 border border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-l-4 border-l-[#00324D]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 bg-sky-100 text-sky-900 rounded-lg border border-sky-300">
                        {right.id}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Capítulo II - Convivencia</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{right.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{right.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 text-[#00324D] font-bold">
                      <ShieldCheck className="w-4 h-4" /> Respeto y Debido Proceso
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedCategory === 'duties' && (
            <div className="bg-white rounded-3xl p-7 border border-slate-300 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-600" />
                Deberes Principales del Aprendiz SENA (Artículo 11 y 14)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Los deberes son las obligaciones éticas, normativas y comportamentales que todo aprendiz asume al matricularse en el SENA para garantizar una convivencia armónica y un óptimo desempeño profesional.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="p-5 bg-amber-50/70 rounded-2xl border-2 border-amber-300">
                  <h4 className="font-bold text-sm sm:text-base text-amber-950 mb-1.5">1. Puntualidad y Asistencia</h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">Asistir puntualmente a las sesiones presenciales y virtuales programadas, justificando oportunamente cualquier inasistencia.</p>
                </div>
                <div className="p-5 bg-amber-50/70 rounded-2xl border-2 border-amber-300">
                  <h4 className="font-bold text-sm sm:text-base text-amber-950 mb-1.5">2. Porte del Carné e Indumentaria</h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">Portar siempre el carné estudiantil en lugar visible y usar la indumentaria o elementos de protección personal (EPP) requeridos.</p>
                </div>
                <div className="p-5 bg-amber-50/70 rounded-2xl border-2 border-amber-300">
                  <h4 className="font-bold text-sm sm:text-base text-amber-950 mb-1.5">3. Cuidado de Bienes Institucionales</h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">Hacer uso adecuado y racional de la infraestructura, equipos de cómputo, talleres, laboratorios y material bibliográfico.</p>
                </div>
                <div className="p-5 bg-amber-50/70 rounded-2xl border-2 border-amber-300">
                  <h4 className="font-bold text-sm sm:text-base text-amber-950 mb-1.5">4. Probidad y Honestidad Académica</h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">Actuar con total honestidad en las evaluaciones y proyectos, evitando cualquier forma de fraude o plagio.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Quiz & Pedagogical Reinforcement */}
      {activeSubTab === 'quiz' && (
        <div className="bg-white rounded-3xl border border-slate-300 shadow-sm overflow-hidden">
          {!quizFinished ? (
            <div className="p-7 sm:p-9">
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-xl border border-emerald-300">
                    Pregunta {currentQuizIndex + 1} de {MOCK_CASE_STUDIES.length}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold">
                    {MOCK_CASE_STUDIES[currentQuizIndex].relatedArticle}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Aciertos: {quizScore}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden mb-7">
                <div 
                  className="bg-[#39A900] h-full transition-all duration-300"
                  style={{ width: `${((currentQuizIndex + 1) / MOCK_CASE_STUDIES.length) * 100}%` }}
                />
              </div>

              {/* Case Box */}
              <div className={`p-6 sm:p-7 rounded-2xl bg-slate-50 border-2 border-slate-300 mb-6 transition-all ${shakeEffect ? 'animate-bounce border-red-400 bg-red-50/60' : ''} ${successEffect ? 'border-emerald-400 bg-emerald-50/60' : ''}`}>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {MOCK_CASE_STUDIES[currentQuizIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-800 mb-4 leading-relaxed font-medium">
                  <strong>Situación:</strong> {MOCK_CASE_STUDIES[currentQuizIndex].context}
                </p>
                <p className="text-sm sm:text-base font-bold text-[#00324D]">
                  {MOCK_CASE_STUDIES[currentQuizIndex].question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3.5 mb-7">
                {MOCK_CASE_STUDIES[currentQuizIndex].options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  let optionStyle = "border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-800";
                  
                  if (isAnswerSubmitted) {
                    if (opt.isCorrect) {
                      optionStyle = "border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-semibold";
                    } else if (isSelected && !opt.isCorrect) {
                      optionStyle = "border-2 border-red-400 bg-red-100 text-red-950 font-semibold";
                    }
                  } else if (isSelected) {
                    optionStyle = "border-2 border-[#39A900] bg-emerald-50/80 text-slate-900 shadow-sm font-semibold";
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionSelect(opt.id)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between gap-4 ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${isSelected ? 'bg-[#39A900] text-white border-[#39A900]' : 'border-slate-400 text-slate-700'}`}>
                          {opt.id === 'opt-1' ? 'A' : 'B'}
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
                      </div>
                      {isAnswerSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-[#39A900] shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !opt.isCorrect && (
                        <XCircle className="w-6 h-6 text-red-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Pedagogical Reinforcement Card (When wrong) */}
              {showReinforcement && (
                <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 mb-7 animate-fade-in flex items-start gap-4">
                  <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-base">Refuerzo Pedagógico SENA</h4>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      <strong>¿Dónde estuvo el error?</strong> Has seleccionado una opción incorrecta frente al Reglamento del Aprendiz (Acuerdo 009 de 2024). 
                      Recuerda que este aspecto normativo protege los derechos fundamentales, el debido proceso y la calidad en la Formación Profesional Integral. 
                      Revisa el literal asociado: <em>{MOCK_CASE_STUDIES[currentQuizIndex].relatedArticle}</em>. Tus respuestas han sido almacenadas en el repositorio para seguimiento.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                <span className="text-xs sm:text-sm text-slate-600 font-medium">
                  {isAnswerSubmitted ? 'Respuesta registrada en el repositorio.' : 'Selecciona una opción y verifica.'}
                </span>

                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={!selectedOption}
                    className={`px-7 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md ${
                      selectedOption 
                        ? 'bg-[#39A900] hover:bg-[#329400] text-white' 
                        : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Verificar Respuesta
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-7 py-3.5 rounded-xl text-sm font-bold bg-[#00324D] hover:bg-[#002438] text-white shadow-md flex items-center gap-2"
                  >
                    <span>Siguiente Reto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-9 sm:p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-[#39A900] rounded-full flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-300">
                <Award className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">¡Prueba de Conocimientos Almacenada!</h3>
                <p className="text-sm sm:text-base text-slate-700 max-w-md mx-auto font-medium">
                  Tus respuestas y calificaciones han sido guardadas exitosamente en el <strong>Repositorio Institucional de Evaluaciones</strong>.
                </p>
              </div>
              <div className="inline-block p-5 bg-slate-50 rounded-2xl border-2 border-slate-300">
                <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-bold">Puntaje Final Obtenido</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#39A900] mt-1">{quizScore} / {MOCK_CASE_STUDIES.length}</p>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={restartQuiz}
                  className="px-6 py-3.5 bg-[#00324D] hover:bg-[#002438] text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Repetir Prueba
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: JSON Converted Document */}
      {activeSubTab === 'json' && (
        <div className="bg-white rounded-3xl border border-slate-300 shadow-sm p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileJson className="w-5 h-5 text-sky-600" />
                Documento Convertido en Formato JSON (Acuerdo 009 de 2024)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Representación estructurada en JSON puro lista para integración con sistemas de gestión de aprendizaje (LMS).
              </p>
            </div>
            <button
              onClick={() => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(acuerdoJsonData, null, 2));
                const downloadAnchor = document.createElement('a');
                downloadAnchor.setAttribute("href", dataStr);
                downloadAnchor.setAttribute("download", "Acuerdo_009_2024_SENA.json");
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
              }}
              className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 transition-all"
            >
              <Code className="w-4 h-4" />
              Descargar Archivo JSON
            </button>
          </div>

          <div className="relative bg-slate-900 rounded-2xl p-5 overflow-x-auto shadow-inner border border-slate-700">
            <pre className="text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed">
              {JSON.stringify(acuerdoJsonData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
