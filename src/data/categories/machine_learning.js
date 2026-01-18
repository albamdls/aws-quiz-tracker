export default [
    {
        id: "ml_comprehend_001",
        category: "machine_learning",
        service: "comprehend",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon Comprehend?",
        options: [
            "Traducir texto entre idiomas",
            "Analizar texto y extraer información mediante NLP",
            "Crear modelos de deep learning personalizados",
            "Reconocer imágenes y vídeos"
        ],
        correct: 1,
        explanation: "Amazon Comprehend utiliza NLP para analizar texto y extraer insights como sentimientos o entidades."
    },
    {
        id: "ml_comprehend_002",
        category: "machine_learning",
        service: "comprehend",
        difficulty: "hard",
        question: "¿Qué tipo de información puede extraer Amazon Comprehend de un texto?",
        options: [
            "Objetos y rostros",
            "Entidades, sentimientos y temas clave",
            "Audio y voz",
            "Tablas y formularios"
        ],
        correct: 1,
        explanation: "Comprehend identifica entidades, sentimientos, idioma y temas."
    },

    {
        id: "ml_kendra_001",
        category: "machine_learning",
        service: "kendra",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon Kendra?",
        options: [
            "Entrenar modelos ML desde cero",
            "Búsqueda inteligente basada en lenguaje natural",
            "Reconocimiento facial",
            "Conversión de texto a voz"
        ],
        correct: 1,
        explanation: "Amazon Kendra es un motor de búsqueda inteligente basado en ML."
    },
    {
        id: "ml_kendra_002",
        category: "machine_learning",
        service: "kendra",
        difficulty: "hard",
        question: "¿Qué caso de uso encaja mejor con Amazon Kendra?",
        options: [
            "Chatbot conversacional",
            "Buscador interno de documentación empresarial",
            "Traducción en tiempo real",
            "Procesamiento de imágenes"
        ],
        correct: 1,
        explanation: "Kendra se usa para búsquedas inteligentes en documentación."
    },

    {
        id: "ml_lex_001",
        category: "machine_learning",
        service: "lex",
        difficulty: "medium",
        question: "¿Qué permite crear Amazon Lex?",
        options: [
            "Sistemas de recomendación",
            "Chatbots y asistentes conversacionales",
            "Motores de búsqueda",
            "Modelos de visión artificial"
        ],
        correct: 1,
        explanation: "Amazon Lex permite crear chatbots y asistentes conversacionales."
    },
    {
        id: "ml_lex_002",
        category: "machine_learning",
        service: "lex",
        difficulty: "hard",
        question: "¿Qué tecnología subyacente utiliza Amazon Lex?",
        options: [
            "Reconocimiento de imágenes",
            "Procesamiento de lenguaje natural y reconocimiento de voz",
            "Bases de datos relacionales",
            "Streaming de datos"
        ],
        correct: 1,
        explanation: "Lex utiliza NLP y reconocimiento de voz (tecnología de Alexa)."
    },

    {
        id: "ml_polly_001",
        category: "machine_learning",
        service: "polly",
        difficulty: "medium",
        question: "¿Cuál es la función principal de Amazon Polly?",
        options: [
            "Texto a voz",
            "Voz a texto",
            "Análisis de sentimientos",
            "Reconocimiento facial"
        ],
        correct: 0,
        explanation: "Amazon Polly convierte texto en voz realista."
    },

    {
        id: "ml_q_001",
        category: "machine_learning",
        service: "amazon_q",
        difficulty: "hard",
        question: "¿Cuál es el objetivo principal de Amazon Q?",
        options: [
            "Entrenar modelos ML",
            "Asistente generativo para tareas empresariales y técnicas",
            "Reconocer imágenes",
            "Traducción de idiomas"
        ],
        correct: 1,
        explanation: "Amazon Q es un asistente generativo para ayudar a empleados y desarrolladores."
    },

    {
        id: "ml_rekognition_001",
        category: "machine_learning",
        service: "rekognition",
        difficulty: "medium",
        question: "¿Qué tipo de datos analiza Amazon Rekognition?",
        options: [
            "Texto",
            "Audio",
            "Imágenes y vídeos",
            "Tablas"
        ],
        correct: 2,
        explanation: "Rekognition analiza imágenes y vídeos para detectar objetos, rostros y escenas."
    },
    {
        id: "ml_rekognition_002",
        category: "machine_learning",
        service: "rekognition",
        difficulty: "hard",
        question: "¿Qué caso de uso encaja mejor con Amazon Rekognition?",
        options: [
            "Análisis de sentimiento en reseñas",
            "Detección de rostros en imágenes",
            "Conversión de voz a texto",
            "Búsqueda documental"
        ],
        correct: 1,
        explanation: "Rekognition se utiliza para análisis visual."
    },

    {
        id: "ml_sagemaker_001",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon SageMaker?",
        options: [
            "Solo para predicciones",
            "Construir, entrenar y desplegar modelos ML",
            "Solo para análisis de texto",
            "Solo para visión artificial"
        ],
        correct: 1,
        explanation: "SageMaker cubre todo el ciclo de vida del ML."
    },
    {
        id: "ml_sagemaker_002",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "hard",
        question: "¿Qué diferencia clave a SageMaker del resto de servicios ML preentrenados?",
        options: [
            "No usa ML",
            "Permite crear modelos personalizados",
            "Solo funciona con imágenes",
            "No escala"
        ],
        correct: 1,
        explanation: "SageMaker permite entrenar modelos personalizados."
    },

    {
        id: "ml_textract_001",
        category: "machine_learning",
        service: "textract",
        difficulty: "medium",
        question: "¿Qué problema resuelve Amazon Textract?",
        options: [
            "Reconocer rostros",
            "Extraer texto, formularios y tablas de documentos",
            "Traducir documentos",
            "Generar voz"
        ],
        correct: 1,
        explanation: "Textract extrae información estructurada de documentos escaneados."
    },

    {
        id: "ml_transcribe_001",
        category: "machine_learning",
        service: "transcribe",
        difficulty: "medium",
        question: "¿Cuál es la función principal de Amazon Transcribe?",
        options: [
            "Texto a voz",
            "Voz a texto",
            "Traducción de idiomas",
            "Análisis de imágenes"
        ],
        correct: 1,
        explanation: "Transcribe convierte audio en texto."
    },

    {
        id: "ml_translate_001",
        category: "machine_learning",
        service: "translate",
        difficulty: "medium",
        question: "¿Qué hace Amazon Translate?",
        options: [
            "Convierte voz en texto",
            "Traduce texto entre idiomas",
            "Analiza sentimientos",
            "Reconoce imágenes"
        ],
        correct: 1,
        explanation: "Amazon Translate traduce texto de forma automática."
    },

    {
        id: "ml_case_001",
        category: "machine_learning",
        service: "lex",
        difficulty: "hard",
        question: "Una empresa quiere crear un chatbot para atención al cliente. ¿Qué servicio usar?",
        options: [
            "Amazon Comprehend",
            "Amazon Lex",
            "Amazon Polly",
            "Amazon Kendra"
        ],
        correct: 1,
        explanation: "Lex es el servicio adecuado para chatbots."
    },
    {
        id: "ml_case_002",
        category: "machine_learning",
        service: "textract",
        difficulty: "hard",
        question: "Una empresa necesita extraer datos de facturas escaneadas automáticamente. ¿Qué servicio elegir?",
        options: [
            "Amazon Rekognition",
            "Amazon Textract",
            "Amazon Comprehend",
            "Amazon Translate"
        ],
        correct: 1,
        explanation: "Textract está diseñado para documentos y formularios."
    },
    {
        id: "ml_case_003",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "hard",
        question: "Un equipo de data science quiere entrenar modelos propios con control total. ¿Qué servicio usar?",
        options: [
            "Amazon SageMaker",
            "Amazon Comprehend",
            "Amazon Rekognition",
            "Amazon Lex"
        ],
        correct: 0,
        explanation: "SageMaker permite entrenar y desplegar modelos personalizados."
    },
    {
        id: "ml_case_004",
        category: "machine_learning",
        service: "kendra",
        difficulty: "hard",
        question: "Una empresa quiere permitir búsquedas en lenguaje natural sobre su base de conocimiento interna. ¿Qué servicio usar?",
        options: [
            "Amazon Kendra",
            "Amazon Lex",
            "Amazon Comprehend",
            "Amazon Q"
        ],
        correct: 0,
        explanation: "Kendra está diseñado para búsquedas empresariales inteligentes."
    },
    {
        id: "ml_hard_001",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "hard",
        question: "Un equipo necesita entrenar modelos personalizados, ajustar hiperparámetros y desplegar endpoints escalables sin gestionar infraestructura. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Comprehend",
            "Amazon SageMaker",
            "Amazon Rekognition",
            "Amazon Kendra"
        ],
        correct: 1,
        explanation: "SageMaker cubre todo el ciclo de vida del ML personalizado."
    },
    {
        id: "ml_hard_002",
        category: "machine_learning",
        service: "comprehend",
        difficulty: "hard",
        question: "Una empresa quiere analizar miles de reseñas para detectar sentimientos y entidades sin entrenar modelos propios. ¿Qué servicio usar?",
        options: [
            "Amazon SageMaker",
            "Amazon Lex",
            "Amazon Comprehend",
            "Amazon Translate"
        ],
        correct: 2,
        explanation: "Comprehend ofrece NLP preentrenado sin necesidad de modelos propios."
    },
    {
        id: "ml_hard_003",
        category: "machine_learning",
        service: "kendra",
        difficulty: "hard",
        question: "Un portal interno necesita responder preguntas en lenguaje natural basándose en documentos, PDFs y wikis corporativos. ¿Qué servicio elegir?",
        options: [
            "Amazon Lex",
            "Amazon Kendra",
            "Amazon Comprehend",
            "Amazon Q"
        ],
        correct: 1,
        explanation: "Kendra es un buscador empresarial inteligente."
    },
    {
        id: "ml_hard_004",
        category: "machine_learning",
        service: "amazon_q",
        difficulty: "hard",
        question: "Una empresa quiere un asistente que ayude a empleados con preguntas técnicas y de negocio usando información interna. ¿Qué servicio usar?",
        options: [
            "Amazon Lex",
            "Amazon Kendra",
            "Amazon Q",
            "Amazon SageMaker"
        ],
        correct: 2,
        explanation: "Amazon Q es un asistente generativo para entornos empresariales."
    },
    {
        id: "ml_hard_005",
        category: "machine_learning",
        service: "lex",
        difficulty: "hard",
        question: "Una empresa quiere crear un bot conversacional que entienda intención del usuario y responda con flujos guiados. ¿Qué servicio usar?",
        options: [
            "Amazon Lex",
            "Amazon Polly",
            "Amazon Comprehend",
            "Amazon Q"
        ],
        correct: 0,
        explanation: "Lex está diseñado para chatbots conversacionales."
    },
    {
        id: "ml_hard_006",
        category: "machine_learning",
        service: "polly",
        difficulty: "hard",
        question: "Una aplicación debe leer noticias en voz alta con voz natural en varios idiomas. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Transcribe",
            "Amazon Translate",
            "Amazon Polly",
            "Amazon Lex"
        ],
        correct: 2,
        explanation: "Polly convierte texto en voz natural."
    },
    {
        id: "ml_hard_007",
        category: "machine_learning",
        service: "transcribe",
        difficulty: "hard",
        question: "Un call center necesita convertir grabaciones de llamadas en texto para análisis posterior. ¿Qué servicio usar?",
        options: [
            "Amazon Polly",
            "Amazon Translate",
            "Amazon Transcribe",
            "Amazon Comprehend"
        ],
        correct: 2,
        explanation: "Transcribe convierte audio en texto."
    },
    {
        id: "ml_hard_008",
        category: "machine_learning",
        service: "translate",
        difficulty: "hard",
        question: "Una plataforma global necesita traducir comentarios de usuarios a múltiples idiomas automáticamente. ¿Qué servicio elegir?",
        options: [
            "Amazon Comprehend",
            "Amazon Lex",
            "Amazon Translate",
            "Amazon Polly"
        ],
        correct: 2,
        explanation: "Translate traduce texto entre idiomas."
    },
    {
        id: "ml_hard_009",
        category: "machine_learning",
        service: "textract",
        difficulty: "hard",
        question: "Una empresa necesita extraer tablas y campos estructurados de documentos escaneados. ¿Qué servicio usar?",
        options: [
            "Amazon Rekognition",
            "Amazon Textract",
            "Amazon Comprehend",
            "Amazon Kendra"
        ],
        correct: 1,
        explanation: "Textract extrae texto, formularios y tablas."
    },
    {
        id: "ml_hard_010",
        category: "machine_learning",
        service: "rekognition",
        difficulty: "hard",
        question: "Una aplicación debe identificar objetos y personas en imágenes subidas por usuarios. ¿Qué servicio elegir?",
        options: [
            "Amazon Textract",
            "Amazon Rekognition",
            "Amazon SageMaker",
            "Amazon Comprehend"
        ],
        correct: 1,
        explanation: "Rekognition analiza imágenes y vídeos."
    },

    {
        id: "ml_hard_011",
        category: "machine_learning",
        service: "rekognition",
        difficulty: "hard",
        question: "Una empresa quiere moderar automáticamente imágenes subidas por usuarios detectando contenido inapropiado. ¿Qué servicio usar?",
        options: [
            "Amazon Textract",
            "Amazon Rekognition",
            "Amazon Polly",
            "Amazon Lex"
        ],
        correct: 1,
        explanation: "Rekognition permite moderación de contenido visual."
    },
    {
        id: "ml_hard_012",
        category: "machine_learning",
        service: "comprehend",
        difficulty: "hard",
        question: "¿Qué servicio elegirías para detectar automáticamente el idioma de textos enviados por usuarios?",
        options: [
            "Amazon Translate",
            "Amazon Comprehend",
            "Amazon Lex",
            "Amazon Polly"
        ],
        correct: 1,
        explanation: "Comprehend detecta idioma automáticamente."
    },
    {
        id: "ml_hard_013",
        category: "machine_learning",
        service: "kendra",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre Amazon Kendra y Amazon Lex?",
        options: [
            "Kendra es para chatbots y Lex para búsqueda",
            "Lex es para conversación y Kendra para búsqueda",
            "Ambos son idénticos",
            "Kendra traduce texto"
        ],
        correct: 1,
        explanation: "Lex es conversacional; Kendra es buscador inteligente."
    },
    {
        id: "ml_hard_014",
        category: "machine_learning",
        service: "amazon_q",
        difficulty: "hard",
        question: "¿Qué característica distingue a Amazon Q frente a Kendra?",
        options: [
            "Búsqueda básica",
            "Asistente generativo con contexto empresarial",
            "Reconocimiento de imágenes",
            "Conversión de voz"
        ],
        correct: 1,
        explanation: "Amazon Q es un asistente generativo, no solo un buscador."
    },
    {
        id: "ml_hard_015",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "hard",
        question: "¿Por qué NO usarías SageMaker para un simple análisis de sentimiento?",
        options: [
            "Porque requiere entrenar modelos",
            "Porque no escala",
            "Porque no soporta texto",
            "Porque solo funciona con imágenes"
        ],
        correct: 0,
        explanation: "Para tareas simples existen servicios ML preentrenados."
    },
    {
        id: "ml_hard_016",
        category: "machine_learning",
        service: "lex",
        difficulty: "hard",
        question: "Un chatbot debe integrarse con voz y texto sin implementar NLP manualmente. ¿Qué servicio elegir?",
        options: [
            "Amazon Lex",
            "Amazon Comprehend",
            "Amazon Polly",
            "Amazon Q"
        ],
        correct: 0,
        explanation: "Lex incluye NLP y reconocimiento de voz."
    },
    {
        id: "ml_hard_017",
        category: "machine_learning",
        service: "translate",
        difficulty: "hard",
        question: "¿Qué servicio usarías junto a Transcribe para subtítulos multilingües?",
        options: [
            "Amazon Polly",
            "Amazon Comprehend",
            "Amazon Translate",
            "Amazon Rekognition"
        ],
        correct: 2,
        explanation: "Translate permite traducir texto generado por Transcribe."
    },
    {
        id: "ml_hard_018",
        category: "machine_learning",
        service: "textract",
        difficulty: "hard",
        question: "¿Por qué Textract es mejor que OCR tradicional?",
        options: [
            "Reconoce solo texto",
            "Extrae estructura como tablas y formularios",
            "Traduce documentos",
            "Genera voz"
        ],
        correct: 1,
        explanation: "Textract extrae información estructurada."
    },
    {
        id: "ml_hard_019",
        category: "machine_learning",
        service: "comprehend",
        difficulty: "hard",
        question: "Una empresa quiere anonimizar automáticamente datos personales en textos. ¿Qué servicio usar?",
        options: [
            "Amazon Textract",
            "Amazon Comprehend",
            "Amazon Kendra",
            "Amazon Lex"
        ],
        correct: 1,
        explanation: "Comprehend puede detectar y clasificar PII."
    },
    {
        id: "ml_hard_020",
        category: "machine_learning",
        service: "sagemaker",
        difficulty: "hard",
        question: "Un equipo necesita control total del algoritmo y dataset para ML avanzado. ¿Qué servicio es obligatorio?",
        options: [
            "Amazon SageMaker",
            "Amazon Comprehend",
            "Amazon Rekognition",
            "Amazon Lex"
        ],
        correct: 0,
        explanation: "SageMaker permite ML avanzado y personalizado."
    }
];
