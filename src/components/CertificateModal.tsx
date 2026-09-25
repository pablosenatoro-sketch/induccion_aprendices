import React from 'react';
import { UserProfileType } from '../types';
import { Award, X, Printer, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfileType;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, userProfile }) => {
  if (!isOpen) return null;

  const currentDate = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header toolbar */}
        <div className="bg-[#00324D] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#39A900]" />
            <h3 className="font-display font-bold text-base">Certificado de Inducción Institucional</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Canvas Preview */}
        <div className="p-8 sm:p-10 bg-slate-50 border-b border-slate-200">
          <div className="bg-white rounded-2xl p-8 border-4 border-[#00324D]/10 shadow-lg text-center space-y-6 relative overflow-hidden">
            
            <div className="absolute top-4 right-4 opacity-10">
              <ShieldCheck className="w-24 h-24 text-[#39A900]" />
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#39A900] text-white flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00324D]">
                Servicio Nacional de Aprendizaje - SENA
              </h4>
              <p className="text-[11px] text-slate-500">Regional {userProfile.regional}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-slate-500 italic">El presente certificado se otorga a:</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {userProfile.name || 'Aprendiz SENA'}
              </h2>
              <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block border border-emerald-200 mt-1">
                {userProfile.programName}
              </p>
            </div>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Por haber cursado y aprobado satisfactoriamente los módulos de Inducción Institucional y el Reglamento del Aprendiz conforme al <strong className="text-slate-900">Acuerdo 009 de 2024</strong>.
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <div>
                <p className="font-semibold text-slate-800">Fecha de expedición</p>
                <p>{currentDate}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Estado</p>
                <p className="text-emerald-700 font-medium">Aprobado Satisfactoriamente</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              window.print();
            }}
            className="px-5 py-2.5 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
