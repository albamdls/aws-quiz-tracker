export default [
    {
        id: "frontend_amplify_001",
        category: "frontend_web",
        service: "amplify",
        difficulty: "medium",
        question: "¿Cuál es el objetivo principal de AWS Amplify?",
        options: [
            "Crear APIs GraphQL",
            "Desplegar y gestionar aplicaciones frontend y full-stack",
            "Orquestar pipelines CI/CD",
            "Analizar trazas de aplicaciones"
        ],
        correct: 1,
        explanation: "AWS Amplify simplifica el desarrollo, despliegue y hosting de aplicaciones frontend y full-stack."
    },
    {
        id: "frontend_amplify_002",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "¿Qué tipo de aplicaciones se benefician más de AWS Amplify?",
        options: [
            "Aplicaciones monolíticas legacy",
            "Aplicaciones frontend modernas (React, Vue, Angular)",
            "Procesamiento batch",
            "Aplicaciones de escritorio"
        ],
        correct: 1,
        explanation: "Amplify está diseñado para aplicaciones frontend modernas."
    },
    {
        id: "frontend_amplify_003",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "¿Qué funcionalidad incluye AWS Amplify sin necesidad de configurar servicios manualmente?",
        options: [
            "Kubernetes",
            "Autenticación, hosting y backend serverless",
            "Bases de datos relacionales",
            "Infraestructura on-premise"
        ],
        correct: 1,
        explanation: "Amplify integra autenticación, hosting y backend serverless fácilmente."
    },

    {
        id: "frontend_appsync_001",
        category: "frontend_web",
        service: "appsync",
        difficulty: "medium",
        question: "¿Qué es AWS AppSync?",
        options: [
            "Un servicio de hosting web",
            "Un servicio de APIs GraphQL gestionado",
            "Un servicio de CI/CD",
            "Un servicio de monitorización"
        ],
        correct: 1,
        explanation: "AppSync es un servicio gestionado para crear APIs GraphQL."
    },
    {
        id: "frontend_appsync_002",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece GraphQL (AppSync) frente a APIs REST tradicionales?",
        options: [
            "Mayor latencia",
            "El cliente define exactamente los datos que necesita",
            "Requiere más endpoints",
            "Solo funciona con bases de datos SQL"
        ],
        correct: 1,
        explanation: "GraphQL permite a los clientes solicitar solo los datos necesarios."
    },
    {
        id: "frontend_appsync_003",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "¿Qué tipo de fuentes de datos puede usar AWS AppSync?",
        options: [
            "Solo bases de datos relacionales",
            "DynamoDB, Lambda, HTTP endpoints",
            "Solo servicios frontend",
            "Solo S3"
        ],
        correct: 1,
        explanation: "AppSync puede conectarse a DynamoDB, Lambda y endpoints HTTP."
    },

    {
        id: "frontend_case_001",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "Una startup quiere desplegar rápidamente una aplicación React con autenticación y backend sin gestionar infraestructura. ¿Qué servicio usar?",
        options: [
            "AWS AppSync",
            "AWS Amplify",
            "Amazon EC2",
            "AWS CodePipeline"
        ],
        correct: 1,
        explanation: "Amplify simplifica el desarrollo y despliegue de apps frontend."
    },
    {
        id: "frontend_case_002",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "Una aplicación móvil necesita sincronización de datos en tiempo real entre usuarios. ¿Qué servicio elegir?",
        options: [
            "AWS Amplify Hosting",
            "AWS AppSync",
            "Amazon S3",
            "AWS Lambda"
        ],
        correct: 1,
        explanation: "AppSync soporta suscripciones GraphQL y datos en tiempo real."
    },
    {
        id: "frontend_case_003",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "Una app necesita consumir datos desde múltiples fuentes con una sola API. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS Amplify",
            "AWS AppSync",
            "Amazon CloudFront",
            "AWS Elastic Beanstalk"
        ],
        correct: 1,
        explanation: "AppSync permite unificar múltiples fuentes bajo una API GraphQL."
    },

    {
        id: "frontend_compare_001",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "¿Cuál es la principal diferencia entre AWS Amplify y AWS AppSync?",
        options: [
            "Amplify es solo backend, AppSync solo frontend",
            "Amplify es una plataforma de desarrollo; AppSync es un servicio de APIs",
            "Ambos hacen exactamente lo mismo",
            "AppSync reemplaza a Amplify"
        ],
        correct: 1,
        explanation: "Amplify es una plataforma completa; AppSync se centra en APIs GraphQL."
    },
    {
        id: "frontend_compare_002",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "¿Cuándo elegirías AWS AppSync en lugar de una API REST tradicional?",
        options: [
            "Cuando el frontend necesita flexibilidad en los datos",
            "Cuando se requiere FTP",
            "Cuando se necesita una base de datos relacional",
            "Cuando no hay frontend"
        ],
        correct: 0,
        explanation: "GraphQL es ideal cuando el frontend necesita flexibilidad."
    },

    {
        id: "frontend_trick_001",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS Amplify es CORRECTA?",
        options: [
            "Solo sirve para hosting estático",
            "Integra backend serverless y frontend",
            "Requiere Kubernetes",
            "No soporta autenticación"
        ],
        correct: 1,
        explanation: "Amplify integra frontend y backend serverless."
    },
    {
        id: "frontend_trick_002",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS AppSync es INCORRECTA?",
        options: [
            "Soporta suscripciones en tiempo real",
            "Es un servicio GraphQL gestionado",
            "Requiere servidores EC2 dedicados",
            "Puede integrarse con DynamoDB"
        ],
        correct: 2,
        explanation: "AppSync es totalmente gestionado y no requiere EC2."
    },

    {
        id: "frontend_scenario_004",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "Un equipo frontend quiere CI/CD automático desde GitHub con despliegue inmediato. ¿Qué servicio usar?",
        options: [
            "AWS Amplify",
            "AWS AppSync",
            "AWS CodeBuild",
            "Amazon EC2"
        ],
        correct: 0,
        explanation: "Amplify ofrece CI/CD integrado para frontend."
    },
    {
        id: "frontend_scenario_005",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "Una aplicación necesita reducir overfetching y underfetching de datos. ¿Qué servicio usar?",
        options: [
            "AWS Amplify",
            "AWS AppSync",
            "Amazon S3",
            "AWS Lambda"
        ],
        correct: 1,
        explanation: "GraphQL evita overfetching y underfetching."
    },

    {
        id: "frontend_scenario_006",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "¿Qué servicio usarías para desplegar rápidamente un frontend con autenticación Cognito integrada?",
        options: [
            "AWS AppSync",
            "AWS Amplify",
            "AWS API Gateway",
            "AWS ECS"
        ],
        correct: 1,
        explanation: "Amplify se integra fácilmente con Amazon Cognito."
    },
    {
        id: "frontend_scenario_007",
        category: "frontend_web",
        service: "appsync",
        difficulty: "hard",
        question: "Una aplicación necesita actualizaciones en tiempo real cuando cambian los datos. ¿Qué servicio elegir?",
        options: [
            "AWS Amplify Hosting",
            "AWS AppSync",
            "AWS CloudFront",
            "Amazon DynamoDB Streams"
        ],
        correct: 1,
        explanation: "AppSync soporta suscripciones GraphQL en tiempo real."
    },
    {
        id: "frontend_scenario_008",
        category: "frontend_web",
        service: "amplify",
        difficulty: "hard",
        question: "Una empresa quiere minimizar la gestión de infraestructura para frontend y backend. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon EC2",
            "AWS Amplify",
            "AWS AppSync",
            "AWS Elastic Beanstalk"
        ],
        correct: 1,
        explanation: "Amplify abstrae la infraestructura para frontend y backend."
    }
];
