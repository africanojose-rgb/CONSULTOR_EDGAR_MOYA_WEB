import { LegalService, PilarCard, ProcessStep } from './types';

export const SERVICES_DATA: LegalService[] = [
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    iconName: 'gavel',
    description: 'Gestión, recursos jerárquicos y litigios de alta complejidad ante entes y órganos de la Administración Pública.',
    longDescription: 'Asesoramos y representamos a empresas y particulares en sus relaciones con el Estado. Especialistas en licitaciones públicas, concesiones, contratos públicos, expropiaciones, y recursos administrativos y contencioso-administrativos.',
    featured: true
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    iconName: 'balance',
    description: 'Derecho de personas, propiedad, contratos, garantías y sucesiones con un enfoque preventivo y litigio de alto nivel.',
    longDescription: 'Ofrecemos representación legal en la protección del patrimonio familiar e individual. Redacción de testamentos, partición de herencias, litigios de propiedad, responsabilidad civil contractual y extracontractual.',
    featured: true
  },
  {
    id: 'contratos',
    title: 'Contratos e Ingeniería Legal',
    iconName: 'history_edu',
    description: 'Interpretación, diseño y redacción robusta de acuerdos comerciales e internacionales complejos.',
    longDescription: 'Protegemos la seguridad jurídica de sus transacciones. Diseñamos contratos de distribución, franquicias, alianzas estratégicas, fusiones y adquisiciones, estructurando cláusulas de resolución de disputas de nivel internacional.',
    featured: true
  },
  {
    id: 'energia',
    title: 'Gas, Petróleo y GNL',
    iconName: 'oil_barrel',
    description: 'Consultoría y asesoría técnica especializada en energía, hidrocarburos tradicionales y gas natural licuado.',
    longDescription: 'Asesoría regulatoria completa para el sector energético. Permisos de operación, cumplimiento de normativas ambientales nacionales e internacionales, contratos de joint-venture y acuerdos comerciales transfronterizos.',
    featured: true
  },
  {
    id: 'inmobiliario',
    title: 'Derecho Inmobiliario',
    iconName: 'apartment',
    description: 'Locación, transacciones comerciales de gran envergadura, compra y venta de inmuebles corporativos.',
    longDescription: 'Estructuración jurídica de proyectos de desarrollo urbano, hotelero e industrial. Auditoría de títulos (Due Diligence), redacción de contratos de locación comercial, fideicomisos y litigios de derechos reales.',
    featured: true
  },
  {
    id: 'maritimo',
    title: 'Derecho Marítimo',
    iconName: 'directions_boat',
    description: 'Derecho de navegación, aduanas, fletamento, reclamos de carga y litigios del sector naviero internacional.',
    longDescription: 'Representación en reclamaciones por averías, abordajes, salvamentos, seguros marítimos y contratos de fletamento. Asesoría en registro y abanderamiento de buques, y cumplimiento de normativas de la OMI.',
    featured: true
  },
  {
    id: 'constitucional',
    title: 'Derecho Constitucional',
    iconName: 'account_balance',
    description: 'Defensa de garantías constitucionales, derechos humanos y acciones de amparo de alta jerarquía.',
    longDescription: 'Representación ante el Tribunal Supremo en recursos de interpretación, inconstitucionalidad, y acciones de amparo para la protección efectiva de derechos consagrados en la Carta Magna frente a actuaciones del poder público.',
    featured: true
  },
  {
    id: 'tributario',
    title: 'Derecho Tributario',
    iconName: 'payments',
    description: 'Planificación fiscal corporativa, defensa contra reparos de la administración tributaria y auditoría.',
    longDescription: 'Asesoría en materia de tributación interna y aduanera. Defensa en procedimientos de fiscalización del SENIAT y administraciones municipales, recursos de reconsideración y recursos contencioso-tributarios.',
    featured: true
  },
  {
    id: 'mercantil',
    title: 'Mercantil y Corporativo',
    iconName: 'business_center',
    description: 'Constitución de sociedades, secretaría corporativa, fusiones, adquisiciones y buen gobierno corporativo.',
    longDescription: 'Acompañamiento legal permanente a juntas directivas. Reestructuración de empresas, acuerdos de accionistas, aumento de capital, disolución y liquidación de sociedades de comercio.'
  },
  {
    id: 'aduanas',
    title: 'Comercio Exterior y Aduanas',
    iconName: 'package',
    description: 'Régimen aduanero de importación y exportación, valoración aduanera y solución de controversias.',
    longDescription: 'Cumplimiento normativo de comercio exterior. Gestión de regímenes especiales, clasificación arancelaria, defensa contra multas aduaneras e incautaciones, y acuerdos comerciales internacionales.'
  },
  {
    id: 'penal',
    title: 'Penal Corporativo',
    iconName: 'policy',
    description: 'Asesoría preventiva contra delitos financieros, lavado de activos y cumplimiento regulatorio empresarial.',
    longDescription: 'Defensa penal empresarial en delitos contra el patrimonio, fraudes, compliance penal, y diseño de programas de prevención del delito para blindar a las organizaciones de riesgos penales internos y externos.'
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral Empresarial',
    iconName: 'groups',
    description: 'Contratación ejecutiva de alto nivel, reestructuraciones corporativas y defensa ante litigios del trabajo.',
    longDescription: 'Gestión estratégica del capital humano. Diseño de planes de compensación, contratos de confidencialidad y no competencia, negociación colectiva y representación judicial en disputas laborales.'
  },
  {
    id: 'ambiental',
    title: 'Ambiente y Sostenibilidad',
    iconName: 'eco',
    description: 'Cumplimiento de estándares de sostenibilidad, licencias ambientales y estudios de impacto ecológico.',
    longDescription: 'Acompañamiento en el cumplimiento de las leyes ambientales para proyectos industriales, de hidrocarburos y de infraestructura. Gestión de pasivos ambientales y auditorías de sustentabilidad.'
  },
  {
    id: 'arbitraje',
    title: 'Arbitraje y Conflictos',
    iconName: 'gavel',
    description: 'Mecanismos alternativos de resolución de controversias comerciales a nivel nacional e internacional.',
    longDescription: 'Representación en procesos de arbitraje institucional y ad-hoc. Homologación de laudos extranjeros, ejecución de acuerdos arbitrales y defensa judicial de convenios de arbitraje.'
  }
];

export const PILARES_DATA: PilarCard[] = [
  {
    id: 'confidencialidad',
    title: 'Confidencialidad Absoluta',
    description: 'La discreción y el secreto profesional son la piedra angular de nuestra relación. Protegemos los intereses de nuestros clientes bajo las más rigurosas directrices éticas internacionales.',
    iconName: 'lock',
    variant: 'light'
  },
  {
    id: 'experiencia',
    title: 'Experiencia',
    description: 'Más de 25 años de sólida práctica en litigación y consultoría ante escenarios regulatorios y comerciales altamente complejos, garantizando el mejor criterio estratégico.',
    iconName: 'shield',
    variant: 'primary'
  },
  {
    id: 'respuesta',
    title: 'Respuesta Rápida',
    description: 'Entendemos el valor del tiempo en los negocios de alta escala. Ofrecemos respuestas inmediatas y soluciones oportunas a las solicitudes legales críticas de nuestros clientes.',
    iconName: 'zap',
    variant: 'secondary'
  },
  {
    id: 'atencion',
    title: 'Atención Personalizada',
    description: 'Usted trata de manera directa y exclusiva con el socio principal, asegurando que su caso reciba el beneficio total de nuestra máxima experiencia y dedicación.',
    iconName: 'user',
    variant: 'light'
  },
  {
    id: 'asesoria',
    title: 'Asesoría Integral',
    description: 'Visión tridimensional que entrelaza la dogmática jurídica más estricta con el pragmatismo financiero y comercial que exigen los proyectos globales del siglo XXI.',
    iconName: 'globe',
    variant: 'light'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: 1,
    title: 'Contacto',
    description: 'Establecemos una comunicación inicial discreta para entender el alcance y la naturaleza de su requerimiento legal o corporativo.'
  },
  {
    number: 2,
    title: 'Evaluación',
    description: 'Analizamos a fondo los precedentes, marcos regulatorios, riesgos potenciales y oportunidades del caso para estructurar viabilidades.'
  },
  {
    number: 3,
    title: 'Asesoría',
    description: 'Diseñamos una propuesta legal estratégica a la medida, coordinando reuniones ejecutivas presenciales o digitales de alta seguridad.'
  },
  {
    number: 4,
    title: 'Solución Legal',
    description: 'Ejecutamos el plan estratégico acordado con rigor técnico, defendiendo con máxima solvencia sus intereses hasta la resolución exitosa.'
  }
];
