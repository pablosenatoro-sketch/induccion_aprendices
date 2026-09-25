export type EvaluationAttempt = {
  id: string;
  date: string;
  score: number;
  total: number;
  testName: string;
  answersSummary: { question: string; chosen: string; isCorrect: boolean }[];
  isPassed: boolean;
};

export type UserProfileType = {
  name: string;
  documentNumber: string;
  email: string;
  isNew: boolean; // true = Nuevo aprendiz, false = Formación previa / Reingreso
  programName: string;
  regional: string;
  centro: string;
  completedModules: string[];
  quizScores: Record<string, number>;
  evaluationAttempts: EvaluationAttempt[];
  experienceLevel?: 'novice' | 'experienced';
};

export type ModuleItem = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  targetAudience: 'all' | 'new' | 'experienced';
  keyPoints: string[];
  content: {
    heading: string;
    text: string;
    highlights?: string[];
  }[];
  interactiveType: 'quiz' | 'explorer' | 'simulation' | 'checklist';
};

export type AcuerdoArticle = {
  chapter: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  category: 'derecho' | 'deber' | 'estatuto' | 'faltas' | 'debido_proceso';
};

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  relatedArticle: string;
};
