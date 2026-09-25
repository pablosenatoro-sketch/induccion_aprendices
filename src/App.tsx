import React, { useState } from 'react';
import { UserProfileType } from './types';
import { SENA_REGIONALS } from './data/senaData';
import { Navbar } from './components/Navbar';
import { DashboardOverview } from './components/DashboardOverview';
import { ModulesView } from './components/ModulesView';
import { ReglamentoExplorer } from './components/ReglamentoExplorer';
import { InstructionalDesignDoc } from './components/InstructionalDesignDoc';
import { DerechosDeberesInteractive } from './components/DerechosDeberesInteractive';
import { EvaluationRepositoryView } from './components/EvaluationRepositoryView';
import { AdminAnalyticsDashboard } from './components/AdminAnalyticsDashboard';
import { ProfileModal } from './components/ProfileModal';
import { AIAssistantModal } from './components/AIAssistantModal';
import { CertificateModal } from './components/CertificateModal';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfileType>({
    name: 'Carlos Andrés Pérez',
    documentNumber: '1.098.765.432',
    email: 'carlos.perez@sena.edu.co',
    isNew: true,
    programName: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    regional: SENA_REGIONALS[0],
    centro: 'Centro de Servicios Financieros',
    completedModules: ['mod-1'],
    quizScores: {},
    evaluationAttempts: [
      {
        id: 'att-init-1',
        date: '24 de Septiembre de 2026, 08:30 AM',
        score: 4,
        total: 5,
        testName: 'Prueba de Conocimientos - Reglamento del Aprendiz (Acuerdo 009 de 2024)',
        answersSummary: [
          { question: 'Caso a.1: Entrega del Carné Estudiantil', chosen: 'Recibir en el momento de su matrícula el carné estudiantil.', isCorrect: true },
          { question: 'Caso a.2: Inducción Institucional Integral', chosen: 'El derecho a recibir inducción al momento de ingresar.', isCorrect: true },
          { question: 'Caso a.3: Acceso a Fuentes de Conocimiento', chosen: 'Es correcto si el instructor prefiere libros impresos.', isCorrect: false },
          { question: 'Caso b.1: Trato Digno y Respetuoso', chosen: 'El derecho a recibir trato digno y respetuoso.', isCorrect: true },
          { question: 'Caso b.4: Uso de Indumentaria y EPPs', chosen: 'El aprendiz tiene derecho y obligation de usar EPPs.', isCorrect: true }
        ],
        isPassed: true
      }
    ]
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-[#39A900] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userProfile={userProfile}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <DashboardOverview
            userProfile={userProfile}
            setActiveTab={setActiveTab}
            onOpenProfile={() => setIsProfileOpen(true)}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
        {activeTab === 'modules' && (
          <ModulesView
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        )}
        {activeTab === 'reglamento' && <ReglamentoExplorer />}
        {activeTab === 'interactive_rights' && (
          <DerechosDeberesInteractive
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        )}
        {activeTab === 'instructional' && <InstructionalDesignDoc />}
        {activeTab === 'repository' && (
          <EvaluationRepositoryView
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        )}
        {activeTab === 'admin' && (
          <AdminAnalyticsDashboard
            userProfile={userProfile}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-800">Servicio Nacional de Aprendizaje - SENA</p>
            <p>Inducción Institucional y Reglamento del Aprendiz (Acuerdo 009 de 2024)</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('admin')} className="hover:text-slate-900 transition-colors font-medium">
              Panel Admin
            </button>
            <button onClick={() => setActiveTab('repository')} className="hover:text-slate-900 transition-colors font-medium">
              Repositorio de Evaluaciones
            </button>
            <button onClick={() => setActiveTab('instructional')} className="hover:text-slate-900 transition-colors">
              Diseño Instruccional
            </button>
            <button onClick={() => setIsCertificateOpen(true)} className="hover:text-slate-900 transition-colors">
              Certificado
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />

      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        userProfile={userProfile}
      />

    </div>
  );
}
