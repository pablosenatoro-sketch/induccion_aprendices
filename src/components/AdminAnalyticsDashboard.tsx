import React, { useState } from 'react';
import { UserProfileType, EvaluationAttempt } from '../types';
import { 
  BarChart3, 
  Users, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Download, 
  ShieldCheck, 
  TrendingUp, 
  BookOpen, 
  FileText,
  Filter
} from 'lucide-react';

interface AdminAnalyticsDashboardProps {
  userProfile: UserProfileType;
}

// Extended mock cohort for robust analytics representation
interface CohortRecord {
  id: string;
  name: string;
  document: string;
  program: string;
  regional: string;
  score: number;
  total: number;
  date: string;
  isPassed: boolean;
  profileType: 'Nuevo' | 'Previa';
}

export const AdminAnalyticsDashboard: React.FC<AdminAnalyticsDashboardProps> = ({ userProfile }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'passed' | 'failed'>('all');

  // Convert current user attempts to cohort records + mock cohort data
  const userAttemptsAsCohort: CohortRecord[] = (userProfile.evaluationAttempts || []).map(att => ({
    id: att.id,
    name: userProfile.name,
    document: userProfile.documentNumber || '1.098.765.432',
    program: userProfile.programName,
    regional: userProfile.regional,
    score: att.score,
    total: att.total,
    date: att.date,
    isPassed: att.isPassed,
    profileType: userProfile.isNew ? 'Nuevo' : 'Previa'
  }));

  const mockCohortRecords: CohortRecord[] = [
    { id: 'c-1', name: 'Laura Sofía Gómez', document: '1.023.456.789', program: 'ADSO', regional: 'Regional Distrito Capital (Bogotá)', score: 5, total: 5, date: '24 de Septiembre de 2026', isPassed: true, profileType: 'Nuevo' },
    { id: 'c-2', name: 'Mateo Rodríguez', document: '1.056.789.123', program: 'Gestión Bancaria', regional: 'Regional Antioquia (Medellín)', score: 4, total: 5, date: '24 de Septiembre de 2026', isPassed: true, profileType: 'Previa' },
    { id: 'c-3', name: 'Valentina Morales', document: '1.078.912.345', program: 'Multimedia y Producción', regional: 'Regional Valle del Cauca (Cali)', score: 2, total: 5, date: '23 de Septiembre de 2026', isPassed: false, profileType: 'Nuevo' },
    { id: 'c-4', name: 'Andrés Felipe Restrepo', document: '1.045.678.901', program: 'ADSO', regional: 'Regional Santander (Bucaramanga)', score: 5, total: 5, date: '23 de Septiembre de 2026', isPassed: true, profileType: 'Previa' },
    { id: 'c-5', name: 'Camila Andrea Torres', document: '1.089.012.345', program: 'Gestión Logística', regional: 'Regional Atlántico (Barranquilla)', score: 3, total: 5, date: '22 de Septiembre de 2026', isPassed: true, profileType: 'Nuevo' },
    { id: 'c-6', name: 'Juan David Martínez', document: '1.012.345.678', program: 'ADSO', regional: 'Regional Cundinamarca', score: 1, total: 5, date: '22 de Septiembre de 2026', isPassed: false, profileType: 'Nuevo' },
    { id: 'c-7', name: 'Diana Marcela Ríos', document: '1.067.890.123', program: 'Cocina y Gastronomía', regional: 'Regional Bolívar (Cartagena)', score: 4, total: 5, date: '21 de Septiembre de 2026', isPassed: true, profileType: 'Previa' },
    { id: 'c-8', name: 'Santiago Benítez', document: '1.034.567.890', program: 'Mantenimiento Mecatrónico', regional: 'Regional Risaralda (Pereira)', score: 5, total: 5, date: '21 de Septiembre de 2026', isPassed: true, profileType: 'Nuevo' }
  ];

  const allRecords = [...userAttemptsAsCohort, ...mockCohortRecords];

  const filteredRecords = allRecords.filter(rec => {
    const matchesSearch = rec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rec.document.includes(searchTerm) ||
                          rec.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                          (statusFilter === 'passed' && rec.isPassed) || 
                          (statusFilter === 'failed' && !rec.isPassed);
    return matchesSearch && matchesStatus;
  });

  // Analytics Metrics
  const totalEvaluated = allRecords.length;
  const passedCount = allRecords.filter(r => r.isPassed).length;
  const approvalRate = totalEvaluated > 0 ? Math.round((passedCount / totalEvaluated) * 100) : 0;
  const averageScore = totalEvaluated > 0 ? (allRecords.reduce((acc, r) => acc + (r.score / r.total) * 5, 0) / totalEvaluated).toFixed(1) : '0.0';

  const handleExportCSV = () => {
    const csvHeader = "Nombre,Documento,Programa,Regional,Puntaje,Total,Estado,Fecha\n";
    const csvRows = allRecords.map(r => `"${r.name}","${r.document}","${r.program}","${r.regional}",${r.score},${r.total},"${r.isPassed ? 'Aprobado' : 'Reprobado'}","${r.date}"`).join("\n");
    
    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Analiticas_Inducion_SENA_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#002B42] via-[#003C5E] to-[#001E2E] text-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-emerald-300 text-sm font-semibold mb-3.5 backdrop-blur-xs border border-white/20">
              <BarChart3 className="w-4 h-4 text-[#39A900]" />
              <span>Panel de Administrador e Instructor SENA</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-2">
              Analíticas y Respuestas de Aprendices
            </h1>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Supervisa el rendimiento académico de los aprendices en la inducción institucional, analiza tasas de aprobación y revisa las respuestas por cada reto normativo.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleExportCSV}
              className="px-5 py-3.5 bg-[#39A900] hover:bg-[#329600] text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2.5 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Reporte (CSV)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-slate-300 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-sky-100 text-sky-900 rounded-2xl border border-sky-200">
            <Users className="w-7 h-7 text-[#00324D]" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Aprendices Evaluados</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 block">{totalEvaluated}</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-300 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-emerald-100 text-emerald-900 rounded-2xl border border-emerald-300">
            <TrendingUp className="w-7 h-7 text-[#39A900]" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Tasa de Aprobación</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 mt-0.5 block">{approvalRate}%</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-300 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-amber-100 text-amber-900 rounded-2xl border border-amber-300">
            <Award className="w-7 h-7 text-amber-700" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Promedio Calificación</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 block">{averageScore} / 5.0</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-300 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-purple-100 text-purple-900 rounded-2xl border border-purple-300">
            <ShieldCheck className="w-7 h-7 text-purple-800" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Normativa Vigente</span>
            <span className="text-sm font-bold text-slate-900 mt-1 block">Acuerdo 009 de 2024</span>
          </div>
        </div>
      </div>

      {/* Toolbar & Filters */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre, documento o programa..."
            className="w-full pl-11 pr-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-500 mr-1" />
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              statusFilter === 'all' ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos ({allRecords.length})
          </button>
          <button
            onClick={() => setStatusFilter('passed')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              statusFilter === 'passed' ? 'bg-emerald-800 text-white shadow-md' : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
            }`}
          >
            Aprobados ({passedCount})
          </button>
          <button
            onClick={() => setStatusFilter('failed')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              statusFilter === 'failed' ? 'bg-red-800 text-white shadow-md' : 'bg-red-100 text-red-900 hover:bg-red-200'
            }`}
          >
            Reprobados ({totalEvaluated - passedCount})
          </button>
        </div>

      </div>

      {/* Responses & Analytics Table */}
      <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-300 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">Listado de Respuestas y Resultados de Aprendices</h2>
            <p className="text-xs sm:text-sm text-slate-600">Registro completo de evaluaciones almacenadas institucionalmente.</p>
          </div>
          <span className="text-xs sm:text-sm font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-xl border border-slate-300">
            Mostrando {filteredRecords.length} de {totalEvaluated} registros
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50">
                <th className="py-4 px-4 rounded-l-2xl">Aprendiz & Documento</th>
                <th className="py-4 px-4">Programa / Regional</th>
                <th className="py-4 px-4">Perfil</th>
                <th className="py-4 px-4">Calificación</th>
                <th className="py-4 px-4">Estado</th>
                <th className="py-4 px-4 rounded-r-2xl">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">{rec.name}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">CC: {rec.document}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-800">{rec.program}</div>
                    <div className="text-xs text-slate-500 truncate max-w-xs mt-0.5">{rec.regional}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 bg-sky-100 text-sky-900 rounded-lg text-xs font-bold border border-sky-200">
                      {rec.profileType}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-extrabold text-slate-900">{rec.score} / {rec.total}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${
                      rec.isPassed ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-red-100 text-red-900 border-red-300'
                    }`}>
                      {rec.isPassed ? <CheckCircle2 className="w-4 h-4 text-[#39A900]" /> : <XCircle className="w-4 h-4 text-red-600" />}
                      {rec.isPassed ? 'Aprobado' : 'Reprobado'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    {rec.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
