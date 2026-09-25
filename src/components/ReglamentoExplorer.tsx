import React, { useState } from 'react';
import { ACUERDO_009_ARTICLES } from '../data/senaData';
import { AcuerdoArticle } from '../types';
import { ShieldCheck, Search, BookOpen, CheckCircle2, AlertTriangle, FileText, ArrowRight, X } from 'lucide-react';

export const ReglamentoExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<AcuerdoArticle | null>(null);

  const filteredArticles = ACUERDO_009_ARTICLES.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300 text-slate-900">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002B42] to-[#004C75] text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-700">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-emerald-300 text-sm font-semibold mb-3.5 backdrop-blur-xs border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#39A900]" />
            <span>Marco Normativo Oficial · Acuerdo 009 de 2024</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3">
            Explorador del Reglamento del Aprendiz
          </h1>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
            Consulta los derechos, deberes, prohibiciones, faltas y garantías del debido proceso que rigen la vida institucional de todos los aprendices del SENA.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Search input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por artículo, título o palabra clave..."
            className="w-full pl-11 pr-4 py-3 text-sm sm:text-base bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900 font-medium"
          />
        </div>

        {/* Category Filter Buttons (Interactive Filter Tabs) */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              selectedCategory === 'all' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedCategory('derecho')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              selectedCategory === 'derecho' 
                ? 'bg-emerald-800 text-white shadow-md' 
                : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
            }`}
          >
            Derechos
          </button>
          <button
            onClick={() => setSelectedCategory('deber')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              selectedCategory === 'deber' 
                ? 'bg-sky-900 text-white shadow-md' 
                : 'bg-sky-100 text-sky-900 hover:bg-sky-200'
            }`}
          >
            Deberes
          </button>
          <button
            onClick={() => setSelectedCategory('faltas')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              selectedCategory === 'faltas' 
                ? 'bg-amber-800 text-white shadow-md' 
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
            }`}
          >
            Faltas y Sanciones
          </button>
          <button
            onClick={() => setSelectedCategory('debido_proceso')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              selectedCategory === 'debido_proceso' 
                ? 'bg-purple-900 text-white shadow-md' 
                : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
            }`}
          >
            Debido Proceso
          </button>
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredArticles.map((art) => (
          <div
            key={art.number}
            onClick={() => setActiveArticle(art)}
            className="group bg-white rounded-2xl p-6 sm:p-7 border-2 border-slate-200 hover:border-[#39A900] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs sm:text-sm font-bold text-[#00324D] bg-sky-100 px-3 py-1 rounded-xl border border-sky-200">
                  {art.number} · {art.chapter.split(':')[0]}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  art.category === 'derecho' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                  art.category === 'deber' ? 'bg-sky-100 text-sky-900 border border-sky-300' :
                  art.category === 'faltas' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                  'bg-purple-100 text-purple-900 border border-purple-300'
                }`}>
                  {art.category.toUpperCase()}
                </span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#39A900] transition-colors mb-2.5">
                {art.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 line-clamp-2 leading-relaxed font-medium">
                {art.summary}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-bold text-[#39A900]">
              <span>Ver texto oficial y detalles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-300 shadow-sm">
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900">No se encontraron artículos</h3>
          <p className="text-sm text-slate-600 mt-1">Intenta con otra palabra clave o categoría.</p>
        </div>
      )}

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#00324D] px-7 py-6 text-white flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider">{activeArticle.chapter}</span>
                <h3 className="font-display font-bold text-lg sm:text-xl mt-1">{activeArticle.number}: {activeArticle.title}</h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/15 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-7 space-y-5 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">Resumen Normativo</h4>
                <p className="text-sm sm:text-base text-slate-900 font-semibold bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 leading-relaxed">
                  {activeArticle.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">Detalle del Acuerdo 009 de 2024</h4>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-emerald-50/70 p-5 rounded-2xl border-2 border-emerald-200 font-medium">
                  {activeArticle.details}
                </p>
              </div>
            </div>

            <div className="px-7 py-5 bg-slate-100 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all shadow-md"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
