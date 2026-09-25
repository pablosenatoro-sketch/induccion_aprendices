import React, { useState } from 'react';
import { UserProfileType } from '../types';
import { SENA_REGIONALS } from '../data/senaData';
import { X, User, Briefcase, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfileType;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  setUserProfile,
}) => {
  const [formData, setFormData] = useState<UserProfileType>(userProfile);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-300 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#00324D] px-7 py-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-xl">
              <User className="w-6 h-6 text-[#39A900]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Caracterización y Datos Básicos</h3>
              <p className="text-xs text-slate-300">Plantilla previa vinculada al repositorio de evaluaciones</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/15 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-7 space-y-5 max-h-[75vh] overflow-y-auto text-slate-900">
          
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Nombre Completo del Aprendiz
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
              placeholder="Ej. Carlos Andrés Pérez"
            />
          </div>

          {/* Document & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Documento de Identidad (CC / TI)
              </label>
              <input
                type="text"
                required
                value={formData.documentNumber || ''}
                onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                className="w-full px-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
                placeholder="Ej. 1.098.765.432"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
                placeholder="Ej. aprendiz@sena.edu.co"
              />
            </div>
          </div>

          {/* Experience Profile */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              Perfil de Ingreso (Nivel de Profundidad)
            </label>
            <div className="grid grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isNew: true, experienceLevel: 'novice' })}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  formData.isNew
                    ? 'border-[#39A900] bg-emerald-50/80 ring-2 ring-[#39A900]/20'
                    : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-slate-900">Nuevo Aprendiz</span>
                  {formData.isNew && <CheckCircle2 className="w-5 h-5 text-[#39A900]" />}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Primera vez en el SENA. Inducción completa y reglamentaria.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, isNew: false, experienceLevel: 'experienced' })}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  !formData.isNew
                    ? 'border-[#39A900] bg-emerald-50/80 ring-2 ring-[#39A900]/20'
                    : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-slate-900">Formación Previa</span>
                  {!formData.isNew && <CheckCircle2 className="w-5 h-5 text-[#39A900]" />}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Itinerario ágil con actualización del Acuerdo 009 de 2024.
                </p>
              </button>
            </div>
          </div>

          {/* Program Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Programa de Formación
            </label>
            <input
              type="text"
              required
              value={formData.programName}
              onChange={(e) => setFormData({ ...formData, programName: e.target.value })}
              className="w-full px-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
              placeholder="Ej. Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
            />
          </div>

          {/* Regional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Regional SENA
              </label>
              <select
                value={formData.regional}
                onChange={(e) => setFormData({ ...formData, regional: e.target.value })}
                className="w-full px-3.5 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
              >
                {SENA_REGIONALS.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Centro de Formación
              </label>
              <input
                type="text"
                value={formData.centro}
                onChange={(e) => setFormData({ ...formData, centro: e.target.value })}
                className="w-full px-4 py-3 text-sm font-medium bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900] text-slate-900"
                placeholder="Ej. Centro de Servicios Financieros"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-bold rounded-xl transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-7 py-3 bg-[#39A900] hover:bg-[#329600] text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              {saved ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>¡Guardado!</span>
                </>
              ) : (
                <span>Guardar Caracterización</span>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
