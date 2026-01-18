export default [
    {
        id: "business_ses_001",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon Simple Email Service (Amazon SES)?",
        options: [
            "Crear flujos de trabajo con estados",
            "Enviar y recibir correos electrónicos a gran escala",
            "Enrutar eventos entre aplicaciones",
            "Gestionar colas de mensajes"
        ],
        correct: 1,
        explanation: "Amazon SES es un servicio gestionado para enviar y recibir emails (transaccionales y marketing) a gran escala."
    },
    {
        id: "business_ses_002",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "¿Qué caso de uso encaja mejor con Amazon SES?",
        options: [
            "Procesar logs y hacer búsquedas de texto",
            "Enviar emails transaccionales como confirmaciones de compra y restablecimiento de contraseña",
            "Desacoplar microservicios con colas",
            "Orquestar un workflow con reintentos y branching"
        ],
        correct: 1,
        explanation: "SES se usa típicamente para emails transaccionales (recibos, confirmaciones, password reset) y también campañas de email."
    },
    {
        id: "business_ses_003",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "¿Qué ventaja clave ofrece Amazon SES respecto a operar tu propio servidor SMTP?",
        options: [
            "Requiere administrar servidores y parches",
            "Alta escalabilidad y servicio gestionado",
            "Solo funciona con cuentas personales",
            "No permite enviar emails a dominios externos"
        ],
        correct: 1,
        explanation: "SES es gestionado y escala para grandes volúmenes, evitando operar y mantener infraestructura de correo."
    },
    {
        id: "business_ses_004",
        category: "business_applications",
        service: "ses",
        difficulty: "hard",
        question: "Una startup quiere enviar newsletters por email y también emails transaccionales desde su app. ¿Qué servicio es el más directo para el envío de email?",
        options: [
            "Amazon SNS",
            "Amazon SES",
            "Amazon SQS",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SES es el servicio específico para envío/recepción de correos electrónicos."
    },
    {
        id: "business_ses_005",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "Una aplicación necesita enviar correos de restablecimiento de contraseña de forma fiable. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon EventBridge",
            "Amazon Kinesis"
        ],
        correct: 1,
        explanation: "SES es ideal para emails transaccionales automatizados como password reset."
    },
    {
        id: "business_ses_006",
        category: "business_applications",
        service: "ses",
        difficulty: "hard",
        question: "¿Cuál de las siguientes opciones describe mejor el alcance de Amazon SES?",
        options: [
            "Solo permite enviar SMS",
            "Solo permite recibir correos",
            "Permite enviar y recibir correos electrónicos",
            "Es un centro de contacto para llamadas"
        ],
        correct: 2,
        explanation: "SES permite tanto envío como recepción de emails (según configuración)."
    },

    {
        id: "business_connect_001",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "¿Cuál es el principal caso de uso de Amazon Connect?",
        options: [
            "Enviar correos masivos",
            "Centro de contacto (contact center) en la nube",
            "Procesar tareas en colas",
            "Analizar datos en S3 con SQL"
        ],
        correct: 1,
        explanation: "Amazon Connect es un contact center cloud para gestionar llamadas y atención al cliente."
    },
    {
        id: "business_connect_002",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "Una empresa quiere montar un centro de atención telefónica sin gestionar infraestructura propia. ¿Qué servicio usar?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon SQS",
            "Amazon Redshift"
        ],
        correct: 0,
        explanation: "Connect es un centro de contacto totalmente gestionado que reduce la necesidad de infraestructura on-premise."
    },
    {
        id: "business_connect_003",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "¿Qué funcionalidad suele asociarse a Amazon Connect?",
        options: [
            "IVR (menú de voz) y enrutamiento de llamadas",
            "Búsqueda de texto completo",
            "Procesamiento ETL",
            "Consultas SQL serverless"
        ],
        correct: 0,
        explanation: "Connect se utiliza para IVR, colas de llamadas y enrutado hacia agentes."
    },
    {
        id: "business_connect_004",
        category: "business_applications",
        service: "connect",
        difficulty: "hard",
        question: "Un negocio necesita habilitar un call center rápidamente y pagar según uso, sin comprar hardware ni licencias. ¿Qué servicio encaja mejor?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon EC2",
            "Amazon OpenSearch Service"
        ],
        correct: 0,
        explanation: "Amazon Connect está diseñado para desplegar centros de contacto rápido y con modelo pay-as-you-go."
    },
    {
        id: "business_connect_005",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "Una empresa quiere gestionar llamadas entrantes y asignarlas a agentes en función de disponibilidad. ¿Qué servicio usar?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon SNS",
            "AWS Glue"
        ],
        correct: 1,
        explanation: "Connect permite gestionar colas de llamadas y asignación/ruteo hacia agentes."
    },
    {
        id: "business_connect_006",
        category: "business_applications",
        service: "connect",
        difficulty: "hard",
        question: "¿Cuál es la diferencia más clara entre Amazon Connect y Amazon SES?",
        options: [
            "Connect es para email y SES para llamadas",
            "Connect es para contact center (voz/chat) y SES para envío/recepción de email",
            "SES enruta eventos y Connect procesa colas",
            "Ambos son servicios de colas de mensajes"
        ],
        correct: 1,
        explanation: "Connect es para atención al cliente (contact center); SES es para correo electrónico."
    },

    {
        id: "business_case_001",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "Una tienda online quiere enviar recibos y confirmaciones de pedido automáticamente por email. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon EventBridge",
            "Amazon SQS"
        ],
        correct: 1,
        explanation: "SES permite enviar emails transaccionales automatizados a gran escala."
    },
    {
        id: "business_case_002",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "Una compañía de seguros quiere ofrecer un número de teléfono con menú de opciones y derivación a agentes. ¿Qué servicio usar?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon Athena",
            "Amazon SNS"
        ],
        correct: 1,
        explanation: "Connect soporta IVR y enrutamiento de llamadas hacia agentes."
    },
    {
        id: "business_case_003",
        category: "business_applications",
        service: "ses",
        difficulty: "hard",
        question: "Un SaaS necesita enviar grandes volúmenes de emails de verificación de cuenta con alta entregabilidad sin operar servidores de correo. ¿Qué servicio elegir?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon SQS",
            "AWS Step Functions"
        ],
        correct: 0,
        explanation: "SES está diseñado para envíos masivos y transaccionales sin administrar infraestructura SMTP."
    },
    {
        id: "business_case_004",
        category: "business_applications",
        service: "connect",
        difficulty: "hard",
        question: "Un retailer quiere abrir un contact center estacional para campañas (por ejemplo Black Friday) y cerrarlo después, pagando solo por uso. ¿Qué servicio es mejor?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon EC2",
            "Amazon Redshift"
        ],
        correct: 0,
        explanation: "Connect permite escalar por demanda y se adapta bien a necesidades estacionales."
    },

    {
        id: "business_compare_001",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "¿Cuál de estas necesidades encaja mejor con Amazon SES?",
        options: [
            "Crear un IVR y gestionar colas de llamadas",
            "Enviar emails transaccionales desde una aplicación",
            "Enrutar eventos con reglas basadas en contenido",
            "Desacoplar microservicios con colas"
        ],
        correct: 1,
        explanation: "SES es específico para envío/recepción de correo electrónico."
    },
    {
        id: "business_compare_002",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "¿Cuál de estas necesidades encaja mejor con Amazon Connect?",
        options: [
            "Enviar newsletters por email",
            "Gestionar atención al cliente por teléfono con agentes",
            "Ejecutar consultas SQL sobre S3",
            "Transformar datos con ETL"
        ],
        correct: 1,
        explanation: "Connect se centra en contact center (llamadas, colas, IVR, agentes)."
    },

    {
        id: "business_trick_001",
        category: "business_applications",
        service: "ses",
        difficulty: "hard",
        question: "Tu app necesita enviar emails automáticamente cuando se crea un ticket de soporte. ¿Qué servicio es el más directo para el envío del email?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon EventBridge",
            "Amazon OpenSearch Service"
        ],
        correct: 0,
        explanation: "SES es el servicio dedicado a envío/recepción de email."
    },
    {
        id: "business_trick_002",
        category: "business_applications",
        service: "connect",
        difficulty: "hard",
        question: "Tu empresa quiere un sistema de atención telefónica con grabación de llamadas y gestión de colas, sin desplegar infraestructura propia. ¿Qué servicio de AWS elegirías?",
        options: [
            "Amazon Connect",
            "Amazon SES",
            "Amazon SNS",
            "AWS Glue"
        ],
        correct: 0,
        explanation: "Connect es el servicio gestionado de contact center para llamadas, colas e IVR."
    },
    {
        id: "business_trick_003",
        category: "business_applications",
        service: "ses",
        difficulty: "medium",
        question: "¿Qué servicio elegirías para enviar emails de notificación (por ejemplo, 'tu pedido ha sido enviado')?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon SQS",
            "Amazon EventBridge"
        ],
        correct: 0,
        explanation: "SES es la opción adecuada para notificaciones por correo electrónico."
    },
    {
        id: "business_trick_004",
        category: "business_applications",
        service: "connect",
        difficulty: "medium",
        question: "¿Qué servicio elegirías si tu objetivo es mejorar la atención al cliente mediante un contact center cloud?",
        options: [
            "Amazon SES",
            "Amazon Connect",
            "Amazon Athena",
            "Amazon Kinesis"
        ],
        correct: 1,
        explanation: "Amazon Connect es el servicio de contact center en la nube."
    }
];
