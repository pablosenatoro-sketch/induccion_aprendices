import { ModuleItem, AcuerdoArticle, CaseStudy } from '../types';

export const SENA_REGIONALS = [
  "Regional Distrito Capital (Bogotá)",
  "Regional Antioquia (Medellín)",
  "Regional Valle del Cauca (Cali)",
  "Regional Atlántico (Barranquilla)",
  "Regional Cundinamarca",
  "Regional Santander (Bucaramanga)",
  "Regional Bolívar (Cartagena)",
  "Regional Risaralda (Pereira)",
  "Regional Boyacá (Tunja)",
  "Regional Caldas (Manizales)"
];

export const ACUERDO_009_ARTICLES: AcuerdoArticle[] = [
  {
    chapter: "Capítulo I: Principios Generales",
    number: "Artículo 5",
    title: "Definición del Aprendiz SENA",
    summary: "El aprendiz SENA es toda persona matriculada en los programas de formación profesional integral...",
    details: "El aprendiz es el actor principal del proceso educativo, quien asume con compromiso su formación profesional integral, participando activamente en su desarrollo técnico, tecnológico y humano.",
    category: 'estatuto'
  },
  {
    chapter: "Capítulo II: Derechos Académicos del Aprendiz (a.1 - a.7)",
    number: "Artículo 9",
    title: "Derechos Académicos en la Formación",
    summary: "Incluye carné, inducción integral, acceso a TICs y fuentes de conocimiento, formación profesional, uso de ambientes, bienestar y orientación.",
    details: "A. De carácter Académico: a.1. Recibir carné estudiantil al matricularse. a.2. Recibir inducción integral. a.3. Acceso a diversas fuentes de conocimiento y TICs. a.4. Recibir formación profesional acorde al programa. a.5. Hacer uso apropiado de los ambientes de aprendizaje. a.6. Disfrutar de programas de bienestar al aprendiz. a.7. Recibir orientación académica y comportamental.",
    category: 'derecho'
  },
  {
    chapter: "Capítulo II: Derechos Comportamentales del Aprendiz (b.1 - b.4)",
    number: "Artículo 10",
    title: "Derechos Comportamentales y de Convivencia",
    summary: "Trato digno, debido proceso, libertad de expresión responsable y uso de indumentaria y EPPs.",
    details: "B. De carácter Comportamental: b.1. Recibir trato digno y respetuoso. b.2. Ser escuchado y atendido siguiendo el debido proceso. b.3. Expresar ideas con libertad sin perturbar el orden institucional. b.4. Usar indumentaria y EPPs propios del programa.",
    category: 'derecho'
  },
  {
    chapter: "Capítulo III: Deberes del Aprendiz",
    number: "Artículo 11",
    title: "Deberes del Aprendiz SENA",
    summary: "Cumplir con el reglamento, asistir puntualmente a las actividades, cuidar los bienes institucionales y actuar con ética.",
    details: "El aprendiz debe participar en las actividades curriculares y extracurriculares, portar siempre el carné institucional, usar correctamente el uniforme cuando aplique, y reportar oportunamente cualquier novedad que afecte su proceso formativo.",
    category: 'deber'
  },
  {
    chapter: "Capítulo IV: Prohibiciones",
    number: "Artículo 14",
    title: "Prohibiciones Generales",
    summary: "Conductas prohibidas como plagio, porte de armas, sustancias psicoactivas y acoso dentro de la institución.",
    details: "Se prohíbe fumar o consumir sustancias psicoactivas en centros de formación, realizar fraude o plagio en trabajos y evaluaciones, dañar los equipos o instalaciones, y ejercer cualquier forma de hostigamiento o discriminación.",
    category: 'deber'
  },
  {
    chapter: "Capítulo V: Estímulos e Incentivos",
    number: "Artículo 21",
    title: "Reconocimientos por Desempeño",
    summary: "Menciones de honor, participación en pasantías nacionales/internacionales y monitorías.",
    details: "El SENA premia la excelencia académica, deportiva y de liderazgo a través de becas, monitorías remuneradas, menciones especiales y participación en programas de intercambio o representación institucional.",
    category: 'estatuto'
  },
  {
    chapter: "Capítulo VI: Proceso Formativo y Faltas",
    number: "Artículo 28",
    title: "Clasificación de las Faltas",
    summary: "Las faltas se clasifican en Académicas (incumplimiento del componente técnico) y Disciplinarias (conducta y convivencia).",
    details: "Las faltas pueden ser Leves, Graves o Gravísimas, evaluándose según el grado de afectación al proceso formativo, la reincidencia y los daños causados a la institución o a la comunidad.",
    category: 'faltas'
  },
  {
    chapter: "Capítulo VII: Debido Proceso",
    number: "Artículo 34",
    title: "Garantías del Debido Proceso",
    summary: "Derecho a la defensa, presunción de inocencia, contradicción de pruebas y decisión motivada.",
    details: "Ningún aprendiz podrá ser sancionado sin habérsele adelantado el debido proceso, garantizando la notificación oportuna de los cargos, el derecho a ser escuchado en descargos y a presentar descargos y pruebas.",
    category: 'debido_proceso'
  },
  {
    chapter: "Capítulo VIII: Medidas y Sanciones",
    number: "Artículo 39",
    title: "Medidas Formativas y Sanciones",
    summary: "Llamado de atención verbal, plan de mejoramiento, llamado de atención escrito y cancelación de la matrícula.",
    details: "Las medidas formativas buscan corregir conductas antes de aplicar sanciones disciplinarias. La cancelación de la matrícula procede en casos de faltas gravísimas o reincidencia en faltas graves.",
    category: 'faltas'
  }
];

export const INDUCTION_MODULES: ModuleItem[] = [
  {
    id: 'mod-1',
    title: 'Módulo 1: Identidad Institucional y Cultura SENA',
    subtitle: 'Historia, símbolos, misión y visión del Servicio Nacional de Aprendizaje',
    duration: '25 minutos',
    description: 'Conoce los orígenes del SENA, fundado en 1957, su impacto en el desarrollo socioeconómico de Colombia y los símbolos patrios e institucionales.',
    targetAudience: 'all',
    keyPoints: [
      'Creación del SENA en 1957 por Rodolfo Martínez Tono.',
      'Símbolos institucionales: El Escudo, la Bandera, el Logotipo y el Himno del SENA.',
      'Misión: Cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos.'
    ],
    content: [
      {
        heading: 'Orígenes y Evolución (1957 - Presente)',
        text: 'El SENA fue creado bajo el Decreto 118 de 1957, durante la Junta Militar, por iniciativa de Rodolfo Martínez Tono. Su propósito fundamental ha sido brindar formación profesional integral a los trabajadores para impulsar la industria, el comercio, la agricultura y la minería en Colombia.',
        highlights: ['Fundación: 28 de julio de 1957', 'Carácter: Establecimiento público del orden nacional']
      },
      {
        heading: 'Símbolos Patrios e Institucionales',
        text: 'Los emblemas del SENA reflejan nuestros valores: el escudo y la bandera reflejan los tres sectores económicos (piñón para industria, cadu/grano para agricultura, y balanza/mercurio para comercio y servicios). El himno institucional enaltece la labor del trabajador colombiano.'
      }
    ],
    interactiveType: 'explorer'
  },
  {
    id: 'mod-2',
    title: 'Módulo 2: Formación Profesional Integral (FPI)',
    subtitle: 'El modelo educativo por competencias, metodologías activas y trabajo colaborativo',
    duration: '35 minutos',
    description: 'Explora cómo se aprende en el SENA mediante proyectos formativos, desarrollo humano, competencias técnicas y el uso de ambientes virtuales y talleres.',
    targetAudience: 'all',
    keyPoints: [
      'Enfoque basado en Competencias Laborales.',
      'El proyecto formativo como eje central del aprendizaje.',
      'Articulación entre teoría, práctica y el mundo productivo.'
    ],
    content: [
      {
        heading: '¿Qué es la Formación Profesional Integral?',
        text: 'Es un proceso educativo teórico-práctico orientado al desarrollo de conocimientos técnicos, tecnológicos y actitudes para el desarrollo personal y social del aprendiz, facilitando su inserción en el mercado laboral o el emprendimiento.',
        highlights: ['Aprendizaje por Proyectos', 'Evaluación continua y formativa']
      }
    ],
    interactiveType: 'checklist'
  },
  {
    id: 'mod-3',
    title: 'Módulo 3: Reglamento del Aprendiz (Acuerdo 009 de 2024)',
    subtitle: 'Derechos Académicos y Comportamentales, deberes y compromisos institucionales',
    duration: '45 minutos',
    description: 'Análisis profundo de los 11 derechos fundamentales (a.1 a a.7 y b.1 a b.4), deberes, prohibiciones y directrices del Acuerdo 009 de 2024.',
    targetAudience: 'all',
    keyPoints: [
      'Derechos Académicos (a.1 a a.7): Carné, Inducción, Fuentes de conocimiento, Formación profesional, Ambientes de aprendizaje, Bienestar y Orientación.',
      'Derechos Comportamentales (b.1 a b.4): Trato digno, Debido proceso, Libertad de expresión e Indumentaria/EPP.',
      'Deberes éticos y normativos del aprendiz SENA.'
    ],
    content: [
      {
        heading: 'Derechos Académicos (a.1 - a.7)',
        text: 'El aprendiz tiene derecho a recibir su carné al matricularse, inducción integral, acceso a TICs y fuentes de conocimiento, formación profesional integral acorde al programa, uso adecuado de ambientes, disfrutar de bienestar y recibir orientación académica.',
        highlights: ['Carné y Matrícula', 'Inducción Integral', 'Ambientes y Bienestar']
      },
      {
        heading: 'Derechos Comportamentales (b.1 - b.4)',
        text: 'Garantizan un entorno de respeto: trato digno, debido proceso en peticiones, libertad de expresión responsable y uso obligatorio de indumentaria y elementos de protección personal (EPP).',
        highlights: ['Trato Digno', 'Debido Proceso', 'Indumentaria y EPP']
      }
    ],
    interactiveType: 'quiz'
  },
  {
    id: 'mod-4',
    title: 'Módulo 4: Proceso Disciplinario y Debido Proceso',
    subtitle: 'Faltas, medidas formativas, sanciones y garantías procesales',
    duration: '30 minutos',
    description: 'Comprende cómo se abordan las situaciones académicas y disciplinarias, el debido proceso y la importancia de los planes de mejoramiento.',
    targetAudience: 'all',
    keyPoints: [
      'Clasificación de faltas: Académicas y Disciplinarias (Leves, Graves, Gravísimas).',
      'Medidas formativas (Llamado de atención verbal y planes de mejoramiento).',
      'Debido proceso: Descargos, derecho a defensa y apelación.'
    ],
    content: [
      {
        heading: 'Garantías del Debido Proceso (Artículo 34)',
        text: 'Ante presuntas faltas, el SENA garantiza que el aprendiz sea escuchado, pueda aportar pruebas y controvertirlas, asegurando decisiones justas y motivadas por el Comité de Evaluación y Promoción.'
      }
    ],
    interactiveType: 'simulation'
  }
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-a1',
    title: 'Caso a.1: Entrega del Carné Estudiantil',
    context: 'Un nuevo aprendiz se matriculó en el Centro de Gestión y necesita ingresar a la biblioteca y a los laboratorios, pero administración no le ha entregado su carné al iniciar clases.',
    question: '¿Cuál es el derecho que le asiste al aprendiz según el literal a.1?',
    options: [
      {
        id: 'opt-1',
        text: 'Ninguno, el carné no es obligatorio en el SENA.',
        isCorrect: false,
        feedback: 'Incorrecto. El carné es el documento oficial de acreditación.'
      },
      {
        id: 'opt-2',
        text: 'Recibir en el momento de su matrícula el carné estudiantil que lo acredite como Aprendiz SENA.',
        isCorrect: true,
        feedback: '¡Correcto! El literal a.1 establece el derecho a recibir el carné institucional al momento de la matrícula.'
      }
    ],
    relatedArticle: 'Literal a.1 (Derechos Académicos)'
  },
  {
    id: 'case-a2',
    title: 'Caso a.2: Inducción Institucional Integral',
    context: 'Un grupo de aprendices ingresa al centro de formación y la coordinación omite realizar la semana de inducción sobre proyectos, entorno y gestión tecnológica.',
    question: '¿Qué derecho académico está siendo vulnerado en este caso?',
    options: [
      {
        id: 'opt-1',
        text: 'El derecho a recibir inducción al momento de ingresar, con contenidos de gestión tecnológica, entorno, proyectos y ruta de aprendizaje.',
        isCorrect: true,
        feedback: '¡Exacto! El literal a.2 garantiza una inducción integral completa al ingresar al SENA.'
      },
      {
        id: 'opt-2',
        text: 'Ninguno, la inducción es opcional para los instructores.',
        isCorrect: false,
        feedback: 'Incorrecto. La inducción es un derecho fundamental del nuevo aprendiz.'
      }
    ],
    relatedArticle: 'Literal a.2 (Derechos Académicos)'
  },
  {
    id: 'case-a3',
    title: 'Caso a.3: Acceso a Fuentes de Conocimiento y TICs',
    context: 'Un instructor prohíbe el uso de las plataformas LMS y las herramientas digitales del centro de formación a un grupo de aprendices para sus investigaciones.',
    question: '¿Cómo evalúa esta situación frente al Reglamento del Aprendiz?',
    options: [
      {
        id: 'opt-1',
        text: 'Es correcto si el instructor prefiere libros impresos antiguos.',
        isCorrect: false,
        feedback: 'Incorrecto. Los aprendices tienen derecho al acceso a diversas fuentes de conocimiento y TICs.'
      },
      {
        id: 'opt-2',
        text: 'Se vulnera el derecho a acceder a TICs, entornos simulados y trabajo colaborativo según el literal a.3.',
        isCorrect: true,
        feedback: '¡Correcto! El literal a.3 garantiza el acceso a tecnologías de información, comunicaciones y entornos simulados.'
      }
    ],
    relatedArticle: 'Literal a.3 (Derechos Académicos)'
  },
  {
    id: 'case-a4',
    title: 'Caso a.4: Formación Profesional Integral',
    context: 'Durante el trimestre, se suprimen las actividades orientadas al desarrollo humano y cultural, enfocándose exclusivamente en tareas mecánicas sin contexto integral.',
    question: '¿Qué principio o derecho académico del aprendiz se está afectando?',
    options: [
      {
        id: 'opt-1',
        text: 'El derecho a recibir formación profesional acorde al programa y al crecimiento y desarrollo armónico de sus dimensiones humanas (a.4).',
        isCorrect: true,
        feedback: '¡Excelente! La Formación Profesional Integral (FPI) abarca tanto lo técnico como el desarrollo humano armónico.'
      },
      {
        id: 'opt-2',
        text: 'Ninguno, el SENA solo enseña técnica sin importar la dimensión humana.',
        isCorrect: false,
        feedback: 'Incorrecto. El SENA se fundamenta en la Formación Profesional Integral.'
      }
    ],
    relatedArticle: 'Literal a.4 (Derechos Académicos)'
  },
  {
    id: 'case-a5',
    title: 'Caso a.5: Uso Apropiado de Ambientes de Aprendizaje',
    context: 'Un aprendiz utiliza de manera inadecuada los equipos de cómputo del laboratorio especializado, rayando las pantallas y desconfigurando el software.',
    question: '¿Cuál es la responsabilidad del aprendiz frente a este derecho y deber (a.5)?',
    options: [
      {
        id: 'opt-1',
        text: 'El aprendiz tiene derecho a usar los ambientes, pero asume responsabilidad por su daño, deterioro anormal o utilización indebida.',
        isCorrect: true,
        feedback: '¡Correcto! El literal a.5 otorga el derecho de uso pero exige la responsabilidad por el cuidado de los bienes institucionales.'
      },
      {
        id: 'opt-2',
        text: 'Los equipos son públicos y no pasa nada si se dañan.',
        isCorrect: false,
        feedback: 'Incorrecto. El mal uso o daño de la infraestructura genera responsabilidades disciplinarias.'
      }
    ],
    relatedArticle: 'Literal a.5 (Derechos Académicos)'
  },
  {
    id: 'case-a6',
    title: 'Caso a.6: Programas de Bienestar al Aprendiz',
    context: 'Un aprendiz solicita postularse a los auxilios y convocatorias de bienestar institucional del centro, pero la coordinación le niega el acceso sin justificación.',
    question: '¿Qué derecho le asiste al aprendiz según el literal a.6?',
    options: [
      {
        id: 'opt-1',
        text: 'Disfrutar de los programas institucionales de bienestar al aprendiz durante su proceso formativo.',
        isCorrect: true,
        feedback: '¡Correcto! El bienestar al aprendiz es un derecho fundamental reglamentado institucionalmente.'
      },
      {
        id: 'opt-2',
        text: 'El bienestar es solo para aprendices destacados en deportes.',
        isCorrect: false,
        feedback: 'Incorrecto. Todos los aprendices tienen derecho a disfrutar de los programas de bienestar.'
      }
    ],
    relatedArticle: 'Literal a.6 (Derechos Académicos)'
  },
  {
    id: 'case-a7',
    title: 'Caso a.7: Orientación Académica y Comportamental',
    context: 'Un aprendiz presenta dificultades de adaptación y bajo rendimiento, y los instructores se niegan a brindarle asesoría o rutas de mejora.',
    question: '¿Cómo se incumple el derecho consagrado en el literal a.7?',
    options: [
      {
        id: 'opt-1',
        text: 'Se vulnera el derecho a recibir orientación académica y comportamental que estimule el desarrollo personal y la convivencia social.',
        isCorrect: true,
        feedback: '¡Exacto! El acompañamiento y orientación son claves en la Formación Profesional Integral.'
      },
      {
        id: 'opt-2',
        text: 'El aprendiz debe resolver sus problemas solo sin ayuda institucional.',
        isCorrect: false,
        feedback: 'Incorrecto. El SENA provee orientación académica y comportamental permanente.'
      }
    ],
    relatedArticle: 'Literal a.7 (Derechos Académicos)'
  },
  {
    id: 'case-b1',
    title: 'Caso b.1: Trato Digno y Respetuoso',
    context: 'Durante una sesión de asesoría, un integrante de la comunidad educativa utiliza expresiones despectivas y groseras hacia un aprendiz.',
    question: '¿Qué derecho comportamental se está vulnerando según el literal b.1?',
    options: [
      {
        id: 'opt-1',
        text: 'El derecho a recibir trato digno y respetuoso por todos los integrantes de la Comunidad Educativa.',
        isCorrect: true,
        feedback: '¡Correcto! El respeto mutuo y la dignidad son pilares fundamentales de la convivencia en el SENA.'
      },
      {
        id: 'opt-2',
        text: 'Ninguno, los instructores tienen autoridad para expresarse como deseen.',
        isCorrect: false,
        feedback: 'Incorrecto. Toda la comunidad educativa debe mantener un trato digno y respetuoso.'
      }
    ],
    relatedArticle: 'Literal b.1 (Derechos Comportamentales)'
  },
  {
    id: 'case-b2',
    title: 'Caso b.2: Derecho a ser Escuchado y Debido Proceso',
    context: 'Un aprendiz presenta una petición formal sobre una inconformidad en una calificación, pero la administración archiva el caso sin escuchar sus argumentos ni dar respuesta.',
    question: '¿Qué derecho comportamental se está incumpliendo?',
    options: [
      {
        id: 'opt-1',
        text: 'Ser escuchado y atendido en sus peticiones, siguiendo el debido proceso (b.2).',
        isCorrect: true,
        feedback: '¡Excelente! El literal b.2 garantiza que toda petición del aprendiz sea atendida bajo el debido proceso.'
      },
      {
        id: 'opt-2',
        text: 'Las peticiones de los aprendices no requieren respuesta institucional.',
        isCorrect: false,
        feedback: 'Incorrecto. Toda petición debe ser tramitada con rigor y debido proceso.'
      }
    ],
    relatedArticle: 'Literal b.2 (Derechos Comportamentales)'
  },
  {
    id: 'case-b3',
    title: 'Caso b.3: Libertad de Expresión Responsable',
    context: 'Un grupo de aprendices desea manifestar su opinión sobre mejoras en el restaurante escolar, realizando una cartelera pacífica en la zona permitida sin interrumpir las clases.',
    question: '¿Es válida esta actuación según el literal b.3?',
    options: [
      {
        id: 'opt-1',
        text: 'Sí, tienen derecho a expresar con libertad ideas y pensamientos sin recurrir a la violencia ni perturbar el orden.',
        isCorrect: true,
        feedback: '¡Correcto! El literal b.3 ampara la libertad de expresión respetando los derechos de los demás y sin alterar el orden institucional.'
      },
      {
        id: 'opt-2',
        text: 'No, está prohibido expresar cualquier opinión dentro de los centros SENA.',
        isCorrect: false,
        feedback: 'Incorrecto. La libertad de expresión pacífica e institucional es un derecho garantizado.'
      }
    ],
    relatedArticle: 'Literal b.3 (Derechos Comportamentales)'
  },
  {
    id: 'case-b4',
    title: 'Caso b.4: Uso de Indumentaria y Elementos de Protección (EPP)',
    context: 'Un aprendiz de taller mecánico ingresa a las prácticas de soldadura sin botas de seguridad ni careta protectora exigidas por el programa.',
    question: '¿Qué norma sobre derechos y seguridad se aplica en este caso (literal b.4)?',
    options: [
      {
        id: 'opt-1',
        text: 'El aprendiz tiene derecho y obligación de usar la indumentaria y EPPs propios de su programa para protegerse de riesgos.',
        isCorrect: true,
        feedback: '¡Correcto! El literal b.4 establece el uso de la indumentaria y elementos de protección personal (EPP) para salvaguardar la integridad física.'
      },
      {
        id: 'opt-2',
        text: 'Los EPPs son opcionales y el aprendiz puede decidir no usarlos si le incomodan.',
        isCorrect: false,
        feedback: 'Incorrecto. El uso de EPPs e indumentaria adecuada es obligatorio por seguridad y normatividad SENA.'
      }
    ],
    relatedArticle: 'Literal b.4 (Derechos Comportamentales)'
  }
];

export const INSTRUCTIONAL_DESIGN_SPEC = {
  title: "Especificación de Diseño Instruccional y UX - Inducción SENA",
  version: "3.0 (Acuerdo 009 de 2024)",
  author: "Equipo de Diseño Instruccional SENA & Expertos UX Educativo",
  sections: [
    {
      title: "1. Perfil de Usuario y Caracterización",
      description: "Adaptación del nivel de profundidad de inducción según el tipo de aprendiz:",
      items: [
        "Nuevos Aprendices (Primera vez en SENA): Enfoque exhaustivo en la cultura institucional, símbolos, historia, uso de plataformas LMS (Territorium/Sofía Plus), y sensibilización profunda sobre deberes y derechos.",
        "Aprendices con Formación Previa (Reingreso o Ciclos Propedéuticos): Itinerario ágil centrado en las actualizaciones normativas del Acuerdo 009 de 2024, nuevas políticas de bienestar, y requisitos específicos del nuevo nivel de formación."
      ]
    },
    {
      title: "2. Arquitectura de Contenidos (Acuerdo 009 de 2024)",
      description: "Estructura rigurosa basada en la normatividad vigente:",
      items: [
        "Conocimiento Institucional y Regionales: Historia de la entidad, símbolos, misión, visión y centros de formación en las diferentes regionales de Colombia.",
        "Deberes y Derechos Centrales: Análisis detallado de los 11 derechos académicos (a.1-a.7) y comportamentales (b.1-b.4), estímulos (Art. 21) y prohibiciones (Art. 14).",
        "Régimen Disciplinario y Debido Proceso: Clasificación de faltas (Art. 28), garantías procesales (Art. 34), medidas formativas y sanciones (Art. 39)."
      ]
    },
    {
      title: "3. Estrategia Metodológica y Usabilidad UX",
      description: "Diseño centrado en el aprendiz para garantizar alta retención y accesibilidad:",
      items: [
        "Microlearning Modular: Píldoras de conocimiento de 25-45 minutos con interactividad constante.",
        "Gamificación y Simulaciones: Resolución de casos reales basados en el reglamento para fomentar el pensamiento crítico.",
        "Accesibilidad WCAG 2.1 AA: Contraste optimizado, navegación por teclado, tipografía legible (Plus Jakarta Sans / Syne) y diseño responsivo."
      ]
    }
  ]
};
