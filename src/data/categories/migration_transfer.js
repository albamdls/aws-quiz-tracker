export default [
    {
        id: "migration_001",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "Una empresa quiere recopilar información detallada sobre sus servidores on-premise antes de migrar a AWS. ¿Qué servicio usar?",
        options: [
            "AWS Migration Hub",
            "AWS Application Discovery Service",
            "Migration Evaluator",
            "AWS Application Migration Service"
        ],
        correct: 1,
        explanation: "Application Discovery Service recopila datos de servidores on-premise para planificar migraciones."
    },
    {
        id: "migration_002",
        category: "migration_transfer",
        service: "migration_evaluator",
        difficulty: "hard",
        question: "Una empresa necesita estimar costes y beneficios financieros antes de iniciar una migración a AWS. ¿Qué servicio usar?",
        options: [
            "AWS Migration Hub",
            "AWS Application Discovery Service",
            "Migration Evaluator",
            "AWS DMS"
        ],
        correct: 2,
        explanation: "Migration Evaluator ayuda a crear análisis de coste y TCO previos a la migración."
    },
    {
        id: "migration_003",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "Una empresa quiere una vista centralizada del progreso de todas sus migraciones a AWS. ¿Qué servicio usar?",
        options: [
            "AWS Migration Hub",
            "AWS Application Migration Service",
            "Migration Evaluator",
            "AWS Application Discovery Service"
        ],
        correct: 0,
        explanation: "Migration Hub centraliza el seguimiento del estado de las migraciones."
    },
    {
        id: "migration_004",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "Una empresa quiere levantar servidores on-premise en AWS con cambios mínimos. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS DMS",
            "AWS Application Migration Service (MGN)",
            "AWS SCT",
            "AWS Snowball"
        ],
        correct: 1,
        explanation: "MGN permite lift-and-shift de servidores con mínimos cambios."
    },
    {
        id: "migration_005",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "Una empresa necesita migrar una base de datos con mínimo downtime. ¿Qué servicio usar?",
        options: [
            "AWS Application Migration Service",
            "AWS DMS",
            "AWS Snow Family",
            "AWS SCT"
        ],
        correct: 1,
        explanation: "AWS DMS permite migraciones de bases de datos con poco o ningún downtime."
    },

    {
        id: "migration_006",
        category: "migration_transfer",
        service: "sct",
        difficulty: "hard",
        question: "Una empresa quiere migrar una base de datos Oracle a Amazon Aurora PostgreSQL. ¿Qué herramienta es necesaria?",
        options: [
            "AWS DMS",
            "AWS Schema Conversion Tool",
            "AWS Application Discovery Service",
            "Migration Evaluator"
        ],
        correct: 1,
        explanation: "SCT convierte esquemas de bases de datos heterogéneas."
    },
    {
        id: "migration_007",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "Una empresa necesita transferir decenas de petabytes desde un centro de datos sin conexión estable a internet. ¿Qué solución usar?",
        options: [
            "AWS DMS",
            "AWS Snow Family",
            "AWS Migration Hub",
            "AWS Application Migration Service"
        ],
        correct: 1,
        explanation: "Snow Family permite transferencias físicas de grandes volúmenes de datos."
    },
    {
        id: "migration_008",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "¿Qué servicio usarías para migrar datos desde ubicaciones remotas con conectividad limitada?",
        options: [
            "AWS Snow Family",
            "AWS DMS",
            "AWS Migration Hub",
            "AWS SCT"
        ],
        correct: 0,
        explanation: "Snow Family está diseñado para ubicaciones con poca conectividad."
    },

    {
        id: "migration_009",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "¿Qué tipo de información recopila AWS Application Discovery Service?",
        options: [
            "Costes estimados",
            "Dependencias, uso de CPU y memoria",
            "Estado de migraciones",
            "Esquemas de bases de datos"
        ],
        correct: 1,
        explanation: "Recopila métricas y dependencias de aplicaciones."
    },
    {
        id: "migration_010",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "¿Qué tipo de migración soporta AWS DMS?",
        options: [
            "Solo bases de datos homogéneas",
            "Solo bases de datos heterogéneas",
            "Homogéneas y heterogéneas",
            "Solo bases de datos NoSQL"
        ],
        correct: 2,
        explanation: "AWS DMS soporta migraciones homogéneas y heterogéneas."
    },

    {
        id: "migration_011",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "¿Qué enfoque de las 6 Rs utiliza AWS Application Migration Service?",
        options: [
            "Refactor",
            "Replatform",
            "Rehost",
            "Retire"
        ],
        correct: 2,
        explanation: "MGN está orientado a estrategias Rehost (lift-and-shift)."
    },
    {
        id: "migration_012",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "¿Qué servicio NO realiza migraciones directamente?",
        options: [
            "AWS Migration Hub",
            "AWS Application Migration Service",
            "AWS DMS",
            "AWS Snow Family"
        ],
        correct: 0,
        explanation: "Migration Hub solo centraliza y monitoriza migraciones."
    },
    {
        id: "migration_013",
        category: "migration_transfer",
        service: "migration_evaluator",
        difficulty: "hard",
        question: "¿En qué fase del proceso de migración se usa Migration Evaluator?",
        options: [
            "Ejecución",
            "Optimización",
            "Planificación",
            "Operación"
        ],
        correct: 2,
        explanation: "Migration Evaluator se usa antes de migrar para análisis financiero."
    },

    {
        id: "migration_014",
        category: "migration_transfer",
        service: "sct",
        difficulty: "hard",
        question: "¿Qué hace AWS SCT que NO hace AWS DMS?",
        options: [
            "Migrar datos en tiempo real",
            "Convertir esquemas y código SQL",
            "Reducir downtime",
            "Sincronizar datos"
        ],
        correct: 1,
        explanation: "SCT convierte esquemas y código, DMS mueve datos."
    },
    {
        id: "migration_015",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "¿Qué miembro de la Snow Family está diseñado para exabytes de datos?",
        options: [
            "Snowcone",
            "Snowball Edge",
            "Snowmobile",
            "Snowpack"
        ],
        correct: 2,
        explanation: "Snowmobile se usa para migraciones de exabytes."
    },

    {
        id: "migration_016",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "¿Por qué usar Application Discovery Service antes de migrar?",
        options: [
            "Para mover datos",
            "Para entender dependencias y dimensionamiento",
            "Para convertir esquemas",
            "Para controlar licencias"
        ],
        correct: 1,
        explanation: "Ayuda a planificar migraciones correctamente."
    },
    {
        id: "migration_017",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "¿Qué requisito debe cumplirse para usar AWS DMS?",
        options: [
            "Base de datos apagada",
            "Conectividad entre origen y destino",
            "Conversión manual de esquemas",
            "Uso exclusivo de AWS"
        ],
        correct: 1,
        explanation: "DMS requiere conectividad entre origen y destino."
    },
    {
        id: "migration_018",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "¿Qué valor aporta Migration Hub en migraciones complejas?",
        options: [
            "Ejecución automática",
            "Conversión de código",
            "Visibilidad centralizada",
            "Transferencia física"
        ],
        correct: 2,
        explanation: "Migration Hub ofrece visibilidad centralizada."
    },
    {
        id: "migration_019",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "¿Qué tipo de cargas es IDEAL para AWS Application Migration Service?",
        options: [
            "Bases de datos únicamente",
            "Aplicaciones legacy completas",
            "Aplicaciones serverless",
            "Machine Learning"
        ],
        correct: 1,
        explanation: "MGN es ideal para aplicaciones legacy completas."
    },
    {
        id: "migration_020",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "¿Qué ventaja principal ofrece AWS Snow Family frente a transferencias por red?",
        options: [
            "Menor coste siempre",
            "Mayor seguridad únicamente",
            "Transferencia masiva sin depender de internet",
            "Procesamiento en tiempo real"
        ],
        correct: 2,
        explanation: "Snow Family permite mover datos masivos sin depender de la red."
    },
    {
        id: "migration_hard_021",
        category: "migration_transfer",
        service: "migration_evaluator",
        difficulty: "hard",
        question: "Antes de aprobar un proyecto de migración, la dirección quiere conocer el TCO comparando on-premise vs AWS. ¿Qué servicio usar?",
        options: [
            "AWS Application Discovery Service",
            "AWS Migration Hub",
            "Migration Evaluator",
            "AWS Trusted Advisor"
        ],
        correct: 2,
        explanation: "Migration Evaluator permite análisis financiero y de TCO antes de migrar."
    },
    {
        id: "migration_hard_022",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "Una empresa necesita entender dependencias entre servidores para evitar cortes durante la migración. ¿Qué servicio es clave?",
        options: [
            "AWS Migration Hub",
            "AWS Application Discovery Service",
            "AWS Application Migration Service",
            "AWS DMS"
        ],
        correct: 1,
        explanation: "Application Discovery Service detecta dependencias entre servidores."
    },
    {
        id: "migration_hard_023",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "Un programa de migración usa múltiples herramientas AWS y quiere una vista única del progreso. ¿Qué servicio usar?",
        options: [
            "Migration Evaluator",
            "AWS Migration Hub",
            "AWS Control Tower",
            "AWS Organizations"
        ],
        correct: 1,
        explanation: "Migration Hub centraliza el estado de las migraciones."
    },
    {
        id: "migration_hard_024",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "Una empresa quiere mover servidores Windows y Linux a EC2 con el menor rediseño posible. ¿Qué servicio elegir?",
        options: [
            "AWS DMS",
            "AWS Application Migration Service (MGN)",
            "AWS Snow Family",
            "AWS SCT"
        ],
        correct: 1,
        explanation: "MGN está diseñado para lift-and-shift de servidores completos."
    },
    {
        id: "migration_hard_025",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "Una base de datos debe seguir funcionando mientras se migra a AWS con replicación continua. ¿Qué servicio usar?",
        options: [
            "AWS SCT",
            "AWS DMS",
            "AWS Application Migration Service",
            "AWS Snowball"
        ],
        correct: 1,
        explanation: "DMS permite replicación continua y mínimo downtime."
    },
    {
        id: "migration_hard_026",
        category: "migration_transfer",
        service: "sct",
        difficulty: "hard",
        question: "Una empresa migra de SQL Server a Amazon Aurora MySQL. ¿Qué herramienta se necesita para adaptar el esquema?",
        options: [
            "AWS DMS",
            "AWS SCT",
            "AWS Migration Hub",
            "Application Discovery Service"
        ],
        correct: 1,
        explanation: "SCT convierte esquemas entre motores heterogéneos."
    },
    {
        id: "migration_hard_027",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "Una planta industrial sin conectividad fiable necesita enviar 500 TB a AWS. ¿Qué solución usar?",
        options: [
            "AWS DMS",
            "AWS Snow Family",
            "AWS DataSync",
            "AWS Migration Hub"
        ],
        correct: 1,
        explanation: "Snow Family permite transferencias físicas sin depender de internet."
    },
    {
        id: "migration_hard_028",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "¿Qué dispositivo de la Snow Family es más adecuado para ubicaciones edge con poco espacio?",
        options: [
            "Snowball Edge",
            "Snowmobile",
            "Snowcone",
            "Snowpack"
        ],
        correct: 2,
        explanation: "Snowcone está pensado para edge y espacios reducidos."
    },
    {
        id: "migration_hard_029",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "¿Qué NO hace AWS Application Discovery Service?",
        options: [
            "Recolectar métricas de servidores",
            "Detectar dependencias",
            "Migrar servidores",
            "Ayudar a planificar migraciones"
        ],
        correct: 2,
        explanation: "Application Discovery Service no migra servidores."
    },
    {
        id: "migration_hard_030",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "¿Qué escenario NO es adecuado para AWS DMS?",
        options: [
            "Migrar una base de datos con poco downtime",
            "Replicar datos en tiempo real",
            "Migrar aplicaciones completas",
            "Migrar bases de datos heterogéneas"
        ],
        correct: 2,
        explanation: "DMS migra datos, no aplicaciones completas."
    },

    {
        id: "migration_hard_031",
        category: "migration_transfer",
        service: "migration_evaluator",
        difficulty: "hard",
        question: "¿En qué momento del proceso de migración aporta MÁS valor Migration Evaluator?",
        options: [
            "Después de migrar",
            "Durante la ejecución",
            "Antes de migrar",
            "Durante la operación diaria"
        ],
        correct: 2,
        explanation: "Migration Evaluator se usa antes de migrar para tomar decisiones."
    },
    {
        id: "migration_hard_032",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "¿Qué diferencia principal existe entre Migration Hub y Application Discovery Service?",
        options: [
            "Ambos hacen lo mismo",
            "Discovery recopila datos; Hub centraliza el progreso",
            "Hub migra servidores",
            "Discovery migra bases de datos"
        ],
        correct: 1,
        explanation: "Discovery recopila info; Migration Hub centraliza seguimiento."
    },
    {
        id: "migration_hard_033",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "¿Qué tipo de estrategia de las 6 Rs se asocia más con MGN?",
        options: [
            "Refactor",
            "Replatform",
            "Rehost",
            "Retire"
        ],
        correct: 2,
        explanation: "MGN está alineado con Rehost (lift-and-shift)."
    },
    {
        id: "migration_hard_034",
        category: "migration_transfer",
        service: "sct",
        difficulty: "hard",
        question: "¿Qué ocurre si usas AWS DMS sin AWS SCT en una migración heterogénea?",
        options: [
            "La migración falla",
            "Los datos se migran pero el esquema no se convierte",
            "Se convierte todo automáticamente",
            "No hay impacto"
        ],
        correct: 1,
        explanation: "DMS mueve datos, SCT convierte esquemas."
    },
    {
        id: "migration_hard_035",
        category: "migration_transfer",
        service: "snow_family",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Snowmobile es CORRECTA?",
        options: [
            "Se usa para migraciones pequeñas",
            "Es un dispositivo portátil",
            "Es un camión para exabytes de datos",
            "Requiere conexión de alta velocidad"
        ],
        correct: 2,
        explanation: "Snowmobile es un camión físico para exabytes."
    },
    {
        id: "migration_hard_036",
        category: "migration_transfer",
        service: "application_migration_service",
        difficulty: "hard",
        question: "¿Qué responsabilidad asume AWS Application Migration Service?",
        options: [
            "Conversión de código",
            "Replicación de servidores",
            "Optimización de arquitectura",
            "Evaluación financiera"
        ],
        correct: 1,
        explanation: "MGN replica servidores on-premise a AWS."
    },
    {
        id: "migration_hard_037",
        category: "migration_transfer",
        service: "migration_hub",
        difficulty: "hard",
        question: "¿Qué valor aporta Migration Hub en grandes programas de migración?",
        options: [
            "Ejecución automática",
            "Conversión de esquemas",
            "Visibilidad y coordinación",
            "Transferencia de datos"
        ],
        correct: 2,
        explanation: "Migration Hub aporta visibilidad centralizada."
    },
    {
        id: "migration_hard_038",
        category: "migration_transfer",
        service: "application_discovery_service",
        difficulty: "hard",
        question: "¿Qué información es CLAVE obtener antes de elegir un enfoque de migración?",
        options: [
            "Precio de instancias",
            "Dependencias entre aplicaciones",
            "Estado de AWS",
            "Configuración de IAM"
        ],
        correct: 1,
        explanation: "Las dependencias influyen directamente en la estrategia."
    },
    {
        id: "migration_hard_039",
        category: "migration_transfer",
        service: "dms",
        difficulty: "hard",
        question: "¿Qué requisito es esencial para una migración continua con AWS DMS?",
        options: [
            "Apagar la base de datos origen",
            "Conversión previa del esquema",
            "Conectividad estable entre origen y destino",
            "Uso exclusivo de AWS"
        ],
        correct: 2,
        explanation: "DMS requiere conectividad entre origen y destino."
    },
    {
        id: "migration_hard_040",
        category: "migration_transfer",
        service: "migration_evaluator",
        difficulty: "hard",
        question: "¿Qué tipo de decisión ayuda a tomar Migration Evaluator?",
        options: [
            "Qué tipo de EC2 usar",
            "Cuándo escalar",
            "Si la migración es financieramente viable",
            "Cómo convertir esquemas"
        ],
        correct: 2,
        explanation: "Migration Evaluator apoya decisiones financieras."
    }
];
