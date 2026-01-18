export default [
    {
        id: "srv_001",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "Una función debe ejecutarse solo cuando ocurre un evento y escalar automáticamente sin gestionar servidores. ¿Qué servicio usar?",
        options: [
            "AWS Fargate",
            "AWS Lambda",
            "Amazon EC2",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "Lambda es totalmente event-driven y serverless."
    },
    {
        id: "srv_002",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "Una aplicación en contenedores necesita ejecutarse sin gestionar servidores pero con control del runtime. ¿Qué servicio usar?",
        options: [
            "AWS Lambda",
            "Amazon EC2",
            "AWS Fargate",
            "AWS Elastic Beanstalk"
        ],
        correct: 2,
        explanation: "Fargate ejecuta contenedores sin gestionar infraestructura."
    },
    {
        id: "srv_003",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué limitación clave existe en AWS Lambda?",
        options: [
            "No escala automáticamente",
            "Tiempo máximo de ejecución",
            "Requiere contenedores",
            "Necesita VPC obligatoriamente"
        ],
        correct: 1,
        explanation: "Lambda tiene un tiempo máximo de ejecución por invocación."
    },
    {
        id: "srv_004",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué ventaja tiene AWS Fargate frente a Lambda?",
        options: [
            "Menor latencia inicial",
            "Ejecuciones de larga duración",
            "Modelo event-driven",
            "Menor coste para ejecuciones cortas"
        ],
        correct: 1,
        explanation: "Fargate no tiene límite estricto de duración como Lambda."
    },

    {
        id: "srv_005",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "Una API serverless necesita ejecutar lógica breve y escalar automáticamente. ¿Qué servicio encaja mejor?",
        options: [
            "AWS Fargate",
            "AWS Lambda",
            "Amazon ECS con EC2",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "Lambda es ideal para APIs serverless."
    },
    {
        id: "srv_006",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "Una empresa quiere migrar microservicios en Docker sin administrar nodos EC2. ¿Qué servicio usar?",
        options: [
            "AWS Lambda",
            "AWS Fargate",
            "Amazon EC2",
            "AWS App Runner"
        ],
        correct: 1,
        explanation: "Fargate ejecuta contenedores sin gestionar servidores."
    },
    {
        id: "srv_007",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué modelo de facturación utiliza AWS Lambda?",
        options: [
            "Por instancia por hora",
            "Por contenedor",
            "Por número de ejecuciones y duración",
            "Por CPU reservada"
        ],
        correct: 2,
        explanation: "Lambda se factura por invocaciones y tiempo de ejecución."
    },
    {
        id: "srv_008",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Cómo se factura AWS Fargate?",
        options: [
            "Por número de eventos",
            "Por ejecución",
            "Por CPU y memoria asignadas",
            "Por instancias EC2"
        ],
        correct: 2,
        explanation: "Fargate se factura según CPU y memoria consumidas."
    },

    {
        id: "srv_009",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué integración es típica para disparar funciones Lambda?",
        options: [
            "Amazon S3, SNS o API Gateway",
            "Solo Amazon EC2",
            "AWS Direct Connect",
            "Amazon Route 53"
        ],
        correct: 0,
        explanation: "Lambda se integra con múltiples servicios event-driven."
    },
    {
        id: "srv_010",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué servicio se usa habitualmente junto con AWS Fargate?",
        options: [
            "Amazon ECS o Amazon EKS",
            "AWS Lambda",
            "AWS Batch",
            "AWS CloudFront"
        ],
        correct: 0,
        explanation: "Fargate se usa con ECS o EKS."
    },

    {
        id: "srv_011",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué escenario NO es adecuado para AWS Lambda?",
        options: [
            "Procesamiento de eventos",
            "APIs serverless",
            "Ejecuciones de larga duración",
            "Automatización puntual"
        ],
        correct: 2,
        explanation: "Lambda no es ideal para tareas largas."
    },
    {
        id: "srv_012",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué escenario NO encaja bien con AWS Fargate?",
        options: [
            "Microservicios en contenedores",
            "Procesos batch largos",
            "Funciones muy cortas y event-driven",
            "Aplicaciones Docker"
        ],
        correct: 2,
        explanation: "Para funciones muy cortas, Lambda es más eficiente."
    },

    {
        id: "srv_013",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "Una empresa quiere ejecutar código sin preocuparse por el sistema operativo. ¿Qué servicio usar?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "AWS Fargate",
            "AWS Outposts"
        ],
        correct: 1,
        explanation: "Lambda abstrae completamente la infraestructura."
    },
    {
        id: "srv_014",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "Una aplicación requiere dependencias personalizadas y un entorno específico. ¿Qué servicio usar?",
        options: [
            "AWS Lambda",
            "AWS Fargate",
            "Amazon S3",
            "Amazon API Gateway"
        ],
        correct: 1,
        explanation: "Fargate permite definir entornos mediante contenedores."
    },

    {
        id: "srv_015",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué característica hace que Lambda sea altamente escalable?",
        options: [
            "Uso de contenedores Docker",
            "Escalado automático por evento",
            "Uso de EC2 dedicadas",
            "Balanceadores de carga manuales"
        ],
        correct: 1,
        explanation: "Lambda escala automáticamente con los eventos."
    },
    {
        id: "srv_016",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué responsabilidad NO asume AWS Fargate?",
        options: [
            "Gestión de servidores",
            "Gestión del sistema operativo",
            "Gestión de contenedores",
            "Gestión de escalado de infraestructura"
        ],
        correct: 2,
        explanation: "El usuario gestiona los contenedores."
    },

    {
        id: "srv_017",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué ventaja tiene Lambda frente a Fargate en términos de coste?",
        options: [
            "Más barato para cargas largas",
            "Más barato para ejecuciones cortas",
            "Siempre más barato",
            "Menor consumo de memoria"
        ],
        correct: 1,
        explanation: "Lambda es ideal para ejecuciones cortas y esporádicas."
    },
    {
        id: "srv_018",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué ventaja tiene Fargate frente a Lambda?",
        options: [
            "Menor latencia cold start",
            "Mayor control del entorno",
            "Modelo event-driven",
            "Menor configuración"
        ],
        correct: 1,
        explanation: "Fargate ofrece mayor control del runtime."
    },

    {
        id: "srv_019",
        category: "serverless",
        service: "aws_lambda",
        difficulty: "hard",
        question: "¿Qué afirmación es CORRECTA sobre Lambda?",
        options: [
            "Requiere instancias EC2",
            "Escala manualmente",
            "Es serverless y event-driven",
            "Solo funciona con contenedores"
        ],
        correct: 2,
        explanation: "Lambda es serverless y se ejecuta por eventos."
    },
    {
        id: "srv_020",
        category: "serverless",
        service: "aws_fargate",
        difficulty: "hard",
        question: "¿Qué afirmación es CORRECTA sobre AWS Fargate?",
        options: [
            "No usa contenedores",
            "Requiere gestionar EC2",
            "Ejecuta contenedores sin servidores",
            "Solo sirve para funciones pequeñas"
        ],
        correct: 2,
        explanation: "Fargate ejecuta contenedores sin gestionar servidores."
    }
];
