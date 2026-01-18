export default [
    {
        id: "iot_core_001",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de AWS IoT Core?",
        options: [
            "Procesar grandes volúmenes de datos batch",
            "Conectar, gestionar y comunicarse con dispositivos IoT",
            "Almacenar datos en memoria",
            "Desplegar aplicaciones web"
        ],
        correct: 1,
        explanation: "AWS IoT Core permite conectar dispositivos IoT de forma segura y gestionar su comunicación."
    },
    {
        id: "iot_core_002",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "medium",
        question: "¿Qué tipo de comunicación utiliza AWS IoT Core principalmente?",
        options: [
            "FTP",
            "MQTT y HTTP",
            "SMTP",
            "SQL"
        ],
        correct: 1,
        explanation: "IoT Core soporta protocolos como MQTT, HTTP y WebSockets."
    },
    {
        id: "iot_core_003",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué característica de AWS IoT Core permite la comunicación bidireccional con dispositivos?",
        options: [
            "Amazon S3",
            "Device Shadow",
            "AWS Lambda",
            "Amazon EC2"
        ],
        correct: 1,
        explanation: "Device Shadow permite sincronizar el estado deseado y reportado de los dispositivos."
    },
    {
        id: "iot_core_004",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué mecanismo usa AWS IoT Core para autenticar dispositivos?",
        options: [
            "Usuarios IAM",
            "Certificados X.509",
            "Claves API",
            "Contraseñas locales"
        ],
        correct: 1,
        explanation: "AWS IoT Core utiliza certificados X.509 para autenticar dispositivos."
    },
    {
        id: "iot_core_005",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué problema resuelve AWS IoT Core en arquitecturas IoT?",
        options: [
            "Visualización de dashboards",
            "Conectividad segura y escalable de dispositivos",
            "Almacenamiento relacional",
            "Orquestación CI/CD"
        ],
        correct: 1,
        explanation: "IoT Core gestiona de forma segura la conexión y mensajería de millones de dispositivos."
    },

    {
        id: "iot_core_006",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "medium",
        question: "¿Qué servicio de AWS suele integrarse con IoT Core para procesar eventos en tiempo real?",
        options: [
            "AWS Lambda",
            "Amazon RDS",
            "Amazon WorkSpaces",
            "AWS CodeBuild"
        ],
        correct: 0,
        explanation: "IoT Core se integra comúnmente con AWS Lambda para procesamiento en tiempo real."
    },
    {
        id: "iot_core_007",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué componente de AWS IoT Core permite enrutar mensajes a otros servicios AWS?",
        options: [
            "Thing Registry",
            "IoT Rules Engine",
            "Device Shadow",
            "IoT Analytics"
        ],
        correct: 1,
        explanation: "El Rules Engine enruta mensajes a servicios como Lambda, S3 o DynamoDB."
    },
    {
        id: "iot_core_008",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué tipo de datos suelen enviar los dispositivos a AWS IoT Core?",
        options: [
            "Consultas SQL",
            "Telemetría y eventos",
            "Archivos multimedia grandes",
            "Backups completos"
        ],
        correct: 1,
        explanation: "Los dispositivos IoT envían principalmente datos de telemetría y eventos."
    },

    {
        id: "iot_case_001",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "Una empresa quiere conectar miles de sensores que envían datos cada segundo de forma segura. ¿Qué servicio usar?",
        options: [
            "Amazon API Gateway",
            "AWS IoT Core",
            "Amazon SQS",
            "Amazon Kinesis Data Firehose"
        ],
        correct: 1,
        explanation: "AWS IoT Core está diseñado para conectar y escalar dispositivos IoT."
    },
    {
        id: "iot_case_002",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "Un dispositivo puede estar offline y necesita sincronizar su estado al reconectarse. ¿Qué funcionalidad usar?",
        options: [
            "IoT Rules Engine",
            "Device Shadow",
            "Amazon S3",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "Device Shadow mantiene el estado deseado y reportado del dispositivo."
    },
    {
        id: "iot_case_003",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "Una solución IoT necesita enviar datos a DynamoDB sin escribir código adicional. ¿Qué componente usar?",
        options: [
            "AWS Lambda",
            "IoT Rules Engine",
            "Amazon API Gateway",
            "Amazon EC2"
        ],
        correct: 1,
        explanation: "El Rules Engine puede enviar mensajes directamente a DynamoDB."
    },

    {
        id: "iot_security_001",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué ventaja de seguridad ofrece AWS IoT Core?",
        options: [
            "Autenticación por usuario",
            "Comunicación cifrada de extremo a extremo",
            "Acceso público por defecto",
            "Sin control de permisos"
        ],
        correct: 1,
        explanation: "IoT Core cifra las comunicaciones y autentica dispositivos de forma segura."
    },
    {
        id: "iot_security_002",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué se utiliza para definir qué acciones puede realizar un dispositivo IoT?",
        options: [
            "IAM Roles",
            "IoT Policies",
            "Security Groups",
            "NACLs"
        ],
        correct: 1,
        explanation: "Las IoT Policies controlan permisos de los dispositivos."
    },

    {
        id: "iot_compare_001",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Por qué AWS IoT Core es preferible a una API REST tradicional para IoT?",
        options: [
            "Menor latencia y comunicación persistente",
            "Mayor complejidad",
            "Uso exclusivo de HTTP",
            "Menor seguridad"
        ],
        correct: 0,
        explanation: "IoT Core soporta MQTT y conexiones persistentes, ideal para IoT."
    },
    {
        id: "iot_compare_002",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué característica diferencia a AWS IoT Core de servicios de mensajería genéricos?",
        options: [
            "Soporte para certificados y dispositivos",
            "Uso de colas tradicionales",
            "Procesamiento batch",
            "Despliegue manual"
        ],
        correct: 0,
        explanation: "IoT Core está diseñado específicamente para dispositivos y seguridad IoT."
    },

    {
        id: "iot_trick_001",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS IoT Core es INCORRECTA?",
        options: [
            "Escala a millones de dispositivos",
            "Usa certificados X.509",
            "Requiere servidores EC2 dedicados",
            "Soporta comunicación bidireccional"
        ],
        correct: 2,
        explanation: "AWS IoT Core es totalmente gestionado y no requiere EC2."
    },
    {
        id: "iot_trick_002",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué escenario NO encaja con AWS IoT Core?",
        options: [
            "Sensores enviando telemetría",
            "Dispositivos conectados de forma intermitente",
            "Aplicaciones web monolíticas",
            "Gestión de estado de dispositivos"
        ],
        correct: 2,
        explanation: "IoT Core está orientado a dispositivos, no a apps web monolíticas."
    },

    {
        id: "iot_scenario_004",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "Una ciudad inteligente quiere recopilar datos de tráfico y enviarlos a servicios AWS en tiempo real. ¿Qué servicio es clave?",
        options: [
            "Amazon Kinesis",
            "AWS IoT Core",
            "Amazon S3",
            "Amazon Athena"
        ],
        correct: 1,
        explanation: "IoT Core es el punto de entrada ideal para datos de dispositivos."
    },
    {
        id: "iot_scenario_005",
        category: "iot",
        service: "aws_iot_core",
        difficulty: "hard",
        question: "¿Qué servicio elegirías para gestionar de forma segura la comunicación entre dispositivos físicos y la nube?",
        options: [
            "AWS IoT Core",
            "Amazon SNS",
            "Amazon SQS",
            "Amazon API Gateway"
        ],
        correct: 0,
        explanation: "AWS IoT Core está diseñado específicamente para este propósito."
    }
];
