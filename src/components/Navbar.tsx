import React from 'react';
import { ShieldCheck, User, BookOpen, Award, FileText, Bot, Sparkles, Database, BarChart3 } from 'lucide-react';
import { UserProfileType } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userProfile: UserProfileType;
  onOpenProfile: () => void;
  onOpenAI: () => void;
  onOpenCertificate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  onOpenProfile,
  onOpenAI,
  onOpenCertificate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#00324D] border-b border-[#002B42] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#39A900] flex items-center justify-center text-white font-bold shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white font-display tracking-tight">
                Inducción SENA
              </span>
              <span className="text-xs bg-white/20 text-emerald-300 font-medium px-2 py-0.5 rounded-full border border-white/20">
                Acuerdo 009 de 2024
              </span>
            </div>
            <p className="text-xs text-slate-300">Servicio Nacional de Aprendizaje - Colombia</p>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-200">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'dashboard' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'modules' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#39A900]" />
            Módulos
          </button>
          <button
            onClick={() => setActiveTab('reglamento')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'reglamento' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Reglamento (009)
          </button>
          <button
            onClick={() => setActiveTab('interactive_rights')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'interactive_rights' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Derechos Interactivos & Test
          </button>
          <button
            onClick={() => setActiveTab('instructional')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'instructional' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            <FileText className="w-4 h-4 text-sky-300" />
            Diseño Instruccional
          </button>
          <button
            onClick={() => setActiveTab('repository')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'repository' ? 'bg-white/20 text-white font-semibold' : 'hover:text-white hover:bg-white/10'
            }`}
          >
            <Database className="w-4 h-4 text-emerald-300" />
            Repositorio y Respuestas
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('admin')}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold transition-all shadow-xs rounded-lg border ${
              activeTab === 'admin'
                ? 'bg-[#00324D] text-white border-[#00324D]'
                : 'text-[#00324D] bg-sky-50 hover:bg-sky-100 border-sky-200'
            }`}
            title="Panel de Administrador e Instructor"
          >
            <BarChart3 className="w-4 h-4 text-[#39A900]" />
            <span>Panel Admin</span>
          </button>

          <button
            onClick={onOpenCertificate}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all shadow-xs"
            title="Generar Certificado"
          >
            <Award className="w-4 h-4 text-[#39A900]" />
            <span>Certificado</span>
          </button>

          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 pl-3 pr-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-all shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-[#39A900] flex items-center justify-center text-white font-bold text-[10px]">
              {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-semibold truncate max-w-[100px]">{userProfile.name || 'Aprendiz'}</p>
              <p className="text-[10px] text-slate-300">{userProfile.isNew ? 'Nuevo Ingreso' : 'Reingreso'}</p>
            </div>
            <User className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </button>
        </div>

      </div>

      {/* Mobile Nav Bar */}
      <div className="flex lg:hidden overflow-x-auto px-4 py-2 bg-slate-50 border-t border-slate-200 gap-1 text-xs font-medium">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'dashboard' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'}`}
        >
          Inicio
        </button>
        <button
          onClick={() => setActiveTab('modules')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'modules' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'}`}
        >
          Módulos
        </button>
        <button
          onClick={() => setActiveTab('reglamento')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'reglamento' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'}`}
        >
          Reglamento
        </button>
        <button
          onClick={() => setActiveTab('interactive_rights')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'interactive_rights' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'}`}
        >
          Prueba & Derechos
        </button>
        <button
          onClick={() => setActiveTab('instructional')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'instructional' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'}`}
        >
          UX y Diseño
        </button>
      </div>
    </header>
  );
};
