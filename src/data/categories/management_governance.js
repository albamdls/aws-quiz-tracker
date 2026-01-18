export default [
    {
        id: "mg_auto_scaling_001",
        category: "management_governance",
        service: "auto_scaling",
        difficulty: "medium",
        question: "¿Cuál es el objetivo principal de AWS Auto Scaling?",
        options: [
            "Reducir costes manualmente",
            "Ajustar automáticamente la capacidad según la demanda",
            "Monitorizar logs",
            "Gestionar permisos"
        ],
        correct: 1,
        explanation: "Auto Scaling ajusta automáticamente la capacidad para mantener rendimiento y optimizar costes."
    },
    {
        id: "mg_cloudformation_001",
        category: "management_governance",
        service: "cloudformation",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece AWS CloudFormation?",
        options: [
            "Monitorización en tiempo real",
            "Infraestructura como código",
            "Gestión de usuarios",
            "Análisis de costes"
        ],
        correct: 1,
        explanation: "CloudFormation permite definir infraestructura como código reutilizable."
    },
    {
        id: "mg_cloudtrail_001",
        category: "management_governance",
        service: "cloudtrail",
        difficulty: "hard",
        question: "¿Qué tipo de información registra AWS CloudTrail?",
        options: [
            "Métricas de rendimiento",
            "Eventos y llamadas a la API",
            "Logs de aplicaciones",
            "Uso de CPU"
        ],
        correct: 1,
        explanation: "CloudTrail registra acciones y llamadas a la API en la cuenta."
    },
    {
        id: "mg_cloudwatch_001",
        category: "management_governance",
        service: "cloudwatch",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon CloudWatch?",
        options: [
            "Gestionar cuentas AWS",
            "Monitorizar métricas, logs y alarmas",
            "Auditar seguridad",
            "Desplegar infraestructura"
        ],
        correct: 1,
        explanation: "CloudWatch monitoriza métricas, logs y crea alarmas."
    },
    {
        id: "mg_compute_optimizer_001",
        category: "management_governance",
        service: "compute_optimizer",
        difficulty: "hard",
        question: "¿Qué hace AWS Compute Optimizer?",
        options: [
            "Aplica cambios automáticamente",
            "Recomienda recursos óptimos basados en uso",
            "Monitoriza eventos",
            "Gestiona licencias"
        ],
        correct: 1,
        explanation: "Compute Optimizer ofrece recomendaciones basadas en métricas históricas."
    },
    {
        id: "mg_config_001",
        category: "management_governance",
        service: "config",
        difficulty: "hard",
        question: "¿Qué problema resuelve AWS Config?",
        options: [
            "Escalado automático",
            "Seguimiento de cambios de configuración",
            "Gestión de costes",
            "Automatización CI/CD"
        ],
        correct: 1,
        explanation: "AWS Config registra y evalúa cambios de configuración."
    },
    {
        id: "mg_control_tower_001",
        category: "management_governance",
        service: "control_tower",
        difficulty: "hard",
        question: "¿Cuál es el propósito principal de AWS Control Tower?",
        options: [
            "Monitorizar aplicaciones",
            "Configurar y gobernar entornos multi-cuenta",
            "Gestionar licencias",
            "Crear dashboards"
        ],
        correct: 1,
        explanation: "Control Tower ayuda a gobernar entornos multi-cuenta."
    },
    {
        id: "mg_health_001",
        category: "management_governance",
        service: "health_dashboard",
        difficulty: "medium",
        question: "¿Qué información proporciona AWS Health Dashboard?",
        options: [
            "Configuración de recursos",
            "Estado y eventos que afectan a servicios AWS",
            "Logs detallados",
            "Costes mensuales"
        ],
        correct: 1,
        explanation: "Health Dashboard muestra eventos y mantenimiento de AWS."
    },
    {
        id: "mg_license_manager_001",
        category: "management_governance",
        service: "license_manager",
        difficulty: "hard",
        question: "¿Para qué se utiliza AWS License Manager?",
        options: [
            "Gestionar instancias EC2",
            "Controlar y aplicar licencias de software",
            "Optimizar costes",
            "Auditar seguridad"
        ],
        correct: 1,
        explanation: "License Manager gestiona el uso de licencias de software."
    },
    {
        id: "mg_console_001",
        category: "management_governance",
        service: "management_console",
        difficulty: "medium",
        question: "¿Qué es AWS Management Console?",
        options: [
            "Una API",
            "Una interfaz web para gestionar AWS",
            "Un servicio de monitorización",
            "Un motor de búsqueda"
        ],
        correct: 1,
        explanation: "La Management Console es la interfaz web de AWS."
    },

    {
        id: "mg_organizations_001",
        category: "management_governance",
        service: "organizations",
        difficulty: "hard",
        question: "¿Qué permite AWS Organizations?",
        options: [
            "Crear VPCs",
            "Gestionar múltiples cuentas AWS",
            "Monitorizar logs",
            "Ejecutar aplicaciones"
        ],
        correct: 1,
        explanation: "Organizations permite gestionar y gobernar múltiples cuentas."
    },
    {
        id: "mg_service_catalog_001",
        category: "management_governance",
        service: "service_catalog",
        difficulty: "hard",
        question: "¿Para qué sirve AWS Service Catalog?",
        options: [
            "Comprar software",
            "Ofrecer productos AWS preaprobados",
            "Monitorizar costes",
            "Gestionar eventos"
        ],
        correct: 1,
        explanation: "Service Catalog permite ofrecer recursos preaprobados."
    },
    {
        id: "mg_service_quotas_001",
        category: "management_governance",
        service: "service_quotas",
        difficulty: "medium",
        question: "¿Qué permite AWS Service Quotas?",
        options: [
            "Aumentar costes",
            "Ver y gestionar límites de servicios",
            "Auditar seguridad",
            "Gestionar permisos"
        ],
        correct: 1,
        explanation: "Service Quotas permite consultar y solicitar aumentos de límites."
    },
    {
        id: "mg_systems_manager_001",
        category: "management_governance",
        service: "systems_manager",
        difficulty: "hard",
        question: "¿Qué funcionalidad ofrece AWS Systems Manager?",
        options: [
            "Gestión centralizada de recursos y automatización",
            "Entrenamiento ML",
            "Creación de APIs",
            "Búsqueda empresarial"
        ],
        correct: 0,
        explanation: "Systems Manager permite gestión, automatización y operación de recursos."
    },
    {
        id: "mg_trusted_advisor_001",
        category: "management_governance",
        service: "trusted_advisor",
        difficulty: "medium",
        question: "¿Qué proporciona AWS Trusted Advisor?",
        options: [
            "Despliegue automático",
            "Recomendaciones de mejores prácticas",
            "Auditorías legales",
            "Entrenamiento ML"
        ],
        correct: 1,
        explanation: "Trusted Advisor ofrece recomendaciones en coste, seguridad y rendimiento."
    },
    {
        id: "mg_well_architected_001",
        category: "management_governance",
        service: "well_architected_tool",
        difficulty: "hard",
        question: "¿Cuál es el propósito del AWS Well-Architected Tool?",
        options: [
            "Crear infraestructura",
            "Evaluar arquitecturas según pilares AWS",
            "Gestionar costes",
            "Monitorizar métricas"
        ],
        correct: 1,
        explanation: "Evalúa arquitecturas según los pilares del Well-Architected Framework."
    },

    {
        id: "mg_case_001",
        category: "management_governance",
        service: "cloudtrail",
        difficulty: "hard",
        question: "Una empresa necesita auditar quién realizó cambios en recursos AWS. ¿Qué servicio usar?",
        options: [
            "CloudWatch",
            "CloudTrail",
            "AWS Config",
            "Trusted Advisor"
        ],
        correct: 1,
        explanation: "CloudTrail registra llamadas y acciones en la cuenta."
    },
    {
        id: "mg_case_002",
        category: "management_governance",
        service: "config",
        difficulty: "hard",
        question: "Una empresa necesita verificar que sus recursos cumplen reglas de configuración. ¿Qué servicio usar?",
        options: [
            "AWS Config",
            "CloudWatch",
            "Auto Scaling",
            "Systems Manager"
        ],
        correct: 0,
        explanation: "AWS Config evalúa configuraciones frente a reglas."
    },
    {
        id: "mg_case_003",
        category: "management_governance",
        service: "organizations",
        difficulty: "hard",
        question: "Una empresa quiere aplicar políticas de seguridad a todas sus cuentas AWS. ¿Qué servicio usar?",
        options: [
            "AWS Config",
            "AWS Organizations",
            "CloudFormation",
            "Service Catalog"
        ],
        correct: 1,
        explanation: "Organizations permite aplicar SCPs a múltiples cuentas."
    },
    {
        id: "mg_case_004",
        category: "management_governance",
        service: "systems_manager",
        difficulty: "hard",
        question: "Una empresa quiere automatizar tareas operativas en instancias EC2 sin usar SSH. ¿Qué servicio usar?",
        options: [
            "CloudWatch",
            "AWS Systems Manager",
            "AWS CLI",
            "AWS Config"
        ],
        correct: 1,
        explanation: "Systems Manager permite gestión sin acceso SSH."
    },
    {
        id: "mg_hard_001",
        category: "management_governance",
        service: "cloudtrail",
        difficulty: "hard",
        question: "Una empresa detecta que se han eliminado recursos críticos y necesita saber QUÉ usuario, CUÁNDO y DESDE DÓNDE se realizó la acción. ¿Qué servicio es imprescindible?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "AWS Trusted Advisor"
        ],
        correct: 1,
        explanation: "CloudTrail registra llamadas a la API con identidad, hora y origen."
    },
    {
        id: "mg_hard_002",
        category: "management_governance",
        service: "config",
        difficulty: "hard",
        question: "Una empresa necesita detectar automáticamente cuando un bucket S3 deja de ser privado y marcarlo como no conforme. ¿Qué servicio usar?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS Control Tower"
        ],
        correct: 1,
        explanation: "AWS Config evalúa configuraciones frente a reglas de cumplimiento."
    },
    {
        id: "mg_hard_003",
        category: "management_governance",
        service: "cloudwatch",
        difficulty: "hard",
        question: "Una aplicación experimenta picos de latencia y el equipo quiere generar alertas automáticas cuando el uso de CPU supere un umbral. ¿Qué servicio usar?",
        options: [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Config",
            "AWS Health Dashboard"
        ],
        correct: 1,
        explanation: "CloudWatch permite métricas, alarmas y monitoreo en tiempo real."
    },
    {
        id: "mg_hard_004",
        category: "management_governance",
        service: "cloudformation",
        difficulty: "hard",
        question: "Un equipo quiere garantizar que todos los entornos (dev, test, prod) se despliegan exactamente igual y de forma repetible. ¿Qué servicio es clave?",
        options: [
            "AWS Systems Manager",
            "AWS CloudFormation",
            "AWS Service Catalog",
            "AWS Control Tower"
        ],
        correct: 1,
        explanation: "CloudFormation permite definir infraestructura como código reproducible."
    },
    {
        id: "mg_hard_005",
        category: "management_governance",
        service: "systems_manager",
        difficulty: "hard",
        question: "Una empresa quiere ejecutar comandos, aplicar parches y automatizar tareas operativas en EC2 SIN abrir acceso SSH. ¿Qué servicio usar?",
        options: [
            "Amazon CloudWatch",
            "AWS Systems Manager",
            "AWS CloudTrail",
            "AWS Auto Scaling"
        ],
        correct: 1,
        explanation: "Systems Manager permite gestión segura sin SSH."
    },
    {
        id: "mg_hard_006",
        category: "management_governance",
        service: "auto_scaling",
        difficulty: "hard",
        question: "Una aplicación debe mantener el rendimiento durante picos de tráfico sin intervención humana. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS Compute Optimizer",
            "AWS Auto Scaling",
            "Amazon CloudWatch",
            "AWS Trusted Advisor"
        ],
        correct: 1,
        explanation: "Auto Scaling ajusta capacidad automáticamente según la demanda."
    },
    {
        id: "mg_hard_007",
        category: "management_governance",
        service: "compute_optimizer",
        difficulty: "hard",
        question: "Una empresa quiere recomendaciones basadas en uso histórico para optimizar instancias EC2 y reducir costes. ¿Qué servicio usar?",
        options: [
            "AWS Trusted Advisor",
            "AWS Compute Optimizer",
            "AWS CloudWatch",
            "AWS Auto Scaling"
        ],
        correct: 1,
        explanation: "Compute Optimizer analiza métricas históricas y recomienda recursos óptimos."
    },
    {
        id: "mg_hard_008",
        category: "management_governance",
        service: "trusted_advisor",
        difficulty: "hard",
        question: "¿Qué servicio proporciona recomendaciones generales sobre seguridad, costes, rendimiento y tolerancia a fallos?",
        options: [
            "AWS Compute Optimizer",
            "AWS Trusted Advisor",
            "AWS Well-Architected Tool",
            "AWS Config"
        ],
        correct: 1,
        explanation: "Trusted Advisor ofrece recomendaciones transversales de mejores prácticas."
    },
    {
        id: "mg_hard_009",
        category: "management_governance",
        service: "well_architected_tool",
        difficulty: "hard",
        question: "Un arquitecto quiere evaluar una arquitectura según los pilares oficiales de AWS (coste, seguridad, fiabilidad…). ¿Qué herramienta usar?",
        options: [
            "AWS Trusted Advisor",
            "AWS Well-Architected Tool",
            "AWS Config",
            "AWS CloudFormation"
        ],
        correct: 1,
        explanation: "Well-Architected Tool evalúa arquitecturas según los pilares oficiales."
    },
    {
        id: "mg_hard_010",
        category: "management_governance",
        service: "organizations",
        difficulty: "hard",
        question: "Una empresa necesita gestionar múltiples cuentas AWS y aplicar políticas de seguridad globales. ¿Qué servicio usar?",
        options: [
            "AWS Control Tower",
            "AWS Organizations",
            "AWS Config",
            "AWS Service Catalog"
        ],
        correct: 1,
        explanation: "Organizations permite gestión multi-cuenta y SCPs."
    },

    {
        id: "mg_hard_011",
        category: "management_governance",
        service: "control_tower",
        difficulty: "hard",
        question: "Una empresa quiere crear un entorno multi-cuenta siguiendo buenas prácticas desde el inicio. ¿Qué servicio simplifica esta tarea?",
        options: [
            "AWS Organizations",
            "AWS Control Tower",
            "AWS CloudFormation",
            "AWS Systems Manager"
        ],
        correct: 1,
        explanation: "Control Tower facilita la creación y gobierno de entornos multi-cuenta."
    },
    {
        id: "mg_hard_012",
        category: "management_governance",
        service: "service_catalog",
        difficulty: "hard",
        question: "Un departamento de IT quiere que los equipos solo puedan lanzar recursos preaprobados. ¿Qué servicio usar?",
        options: [
            "AWS Service Catalog",
            "AWS CloudFormation",
            "AWS Organizations",
            "AWS Trusted Advisor"
        ],
        correct: 0,
        explanation: "Service Catalog ofrece productos AWS preaprobados."
    },
    {
        id: "mg_hard_013",
        category: "management_governance",
        service: "service_quotas",
        difficulty: "hard",
        question: "Una empresa alcanza el límite máximo de instancias EC2 y necesita solicitar un aumento. ¿Qué servicio usar?",
        options: [
            "AWS Support",
            "AWS Service Quotas",
            "AWS Organizations",
            "AWS Auto Scaling"
        ],
        correct: 1,
        explanation: "Service Quotas permite ver y solicitar aumentos de límites."
    },
    {
        id: "mg_hard_014",
        category: "management_governance",
        service: "health_dashboard",
        difficulty: "hard",
        question: "Una aplicación falla debido a un problema regional de AWS. ¿Qué servicio informa de este tipo de incidencias?",
        options: [
            "Amazon CloudWatch",
            "AWS Health Dashboard",
            "AWS CloudTrail",
            "AWS Config"
        ],
        correct: 1,
        explanation: "Health Dashboard informa de eventos y problemas de servicios AWS."
    },
    {
        id: "mg_hard_015",
        category: "management_governance",
        service: "license_manager",
        difficulty: "hard",
        question: "Una empresa necesita controlar el uso de licencias de software propietario en AWS. ¿Qué servicio usar?",
        options: [
            "AWS Organizations",
            "AWS License Manager",
            "AWS Service Catalog",
            "AWS Systems Manager"
        ],
        correct: 1,
        explanation: "License Manager controla y aplica licencias de software."
    },
    {
        id: "mg_hard_016",
        category: "management_governance",
        service: "management_console",
        difficulty: "hard",
        question: "¿Qué método proporciona una interfaz gráfica para gestionar recursos AWS sin usar código?",
        options: [
            "AWS CLI",
            "AWS Management Console",
            "AWS CloudFormation",
            "AWS SDK"
        ],
        correct: 1,
        explanation: "La Management Console es la interfaz web gráfica de AWS."
    },
    {
        id: "mg_hard_017",
        category: "management_governance",
        service: "cloudtrail",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre CloudTrail y CloudWatch?",
        options: [
            "CloudTrail monitoriza métricas",
            "CloudWatch audita llamadas API",
            "CloudTrail registra acciones; CloudWatch métricas y logs",
            "Ambos hacen lo mismo"
        ],
        correct: 2,
        explanation: "CloudTrail registra acciones; CloudWatch métricas y logs."
    },
    {
        id: "mg_hard_018",
        category: "management_governance",
        service: "trusted_advisor",
        difficulty: "hard",
        question: "¿Qué servicio ayuda a identificar recursos infrautilizados sin analizar métricas manualmente?",
        options: [
            "AWS CloudWatch",
            "AWS Compute Optimizer",
            "AWS Trusted Advisor",
            "AWS Config"
        ],
        correct: 2,
        explanation: "Trusted Advisor identifica recursos infrautilizados."
    },
    {
        id: "mg_hard_019",
        category: "management_governance",
        service: "well_architected_tool",
        difficulty: "hard",
        question: "¿Cuál NO es un pilar del AWS Well-Architected Framework?",
        options: [
            "Excelencia operativa",
            "Seguridad",
            "Marketing",
            "Optimización de costes"
        ],
        correct: 2,
        explanation: "Marketing no es un pilar del Well-Architected Framework."
    },
    {
        id: "mg_hard_020",
        category: "management_governance",
        service: "control_tower",
        difficulty: "hard",
        question: "Una empresa quiere aplicar guardrails automáticos a nuevas cuentas AWS desde el primer día. ¿Qué servicio usar?",
        options: [
            "AWS Organizations",
            "AWS Control Tower",
            "AWS Config",
            "AWS Service Catalog"
        ],
        correct: 1,
        explanation: "Control Tower aplica guardrails automáticamente."
    }
];
