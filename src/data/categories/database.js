export default [
    {
        id: "database_rds_001",
        category: "database",
        service: "rds",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon RDS?",
        options: [
            "Base de datos NoSQL totalmente gestionada",
            "Servicio gestionado de bases de datos relacionales",
            "Base de datos en memoria",
            "Base de datos de grafos"
        ],
        correct: 1,
        explanation: "Amazon RDS es un servicio gestionado para bases de datos relacionales."
    },
    {
        id: "database_rds_002",
        category: "database",
        service: "rds",
        difficulty: "medium",
        question: "¿Qué responsabilidad asume AWS al usar Amazon RDS?",
        options: [
            "Diseño del esquema",
            "Optimización de consultas",
            "Parches y backups automáticos",
            "Gestión de datos de negocio"
        ],
        correct: 2,
        explanation: "AWS gestiona tareas como backups, parches y alta disponibilidad."
    },

    {
        id: "database_aurora_001",
        category: "database",
        service: "aurora",
        difficulty: "medium",
        question: "¿Qué es Amazon Aurora?",
        options: [
            "Una base de datos NoSQL",
            "Un motor de búsqueda",
            "Una base de datos relacional compatible con MySQL y PostgreSQL",
            "Una base de datos en memoria"
        ],
        correct: 2,
        explanation: "Aurora es una base de datos relacional compatible con MySQL y PostgreSQL."
    },
    {
        id: "database_aurora_002",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "¿Qué ventaja distingue a Amazon Aurora frente a RDS tradicional?",
        options: [
            "Menor disponibilidad",
            "Mayor rendimiento y escalabilidad",
            "No es compatible con SQL",
            "Requiere gestión manual"
        ],
        correct: 1,
        explanation: "Aurora ofrece mayor rendimiento y escalado automático."
    },

    {
        id: "database_dynamodb_001",
        category: "database",
        service: "dynamodb",
        difficulty: "medium",
        question: "¿Qué tipo de base de datos es Amazon DynamoDB?",
        options: [
            "Relacional",
            "Documento",
            "Clave-valor y NoSQL",
            "Grafo"
        ],
        correct: 2,
        explanation: "DynamoDB es una base de datos NoSQL de tipo clave-valor."
    },
    {
        id: "database_dynamodb_002",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "¿Qué característica clave define a DynamoDB?",
        options: [
            "Consultas SQL complejas",
            "Escalabilidad automática y baja latencia",
            "Gestión manual de índices",
            "Dependencia de instancias EC2"
        ],
        correct: 1,
        explanation: "DynamoDB escala automáticamente y ofrece latencias de milisegundos."
    },

    {
        id: "database_elasticache_001",
        category: "database",
        service: "elasticache",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon ElastiCache?",
        options: [
            "Almacenamiento de datos relacionales",
            "Caché en memoria para mejorar rendimiento",
            "Base de datos de grafos",
            "Almacenamiento de documentos JSON"
        ],
        correct: 1,
        explanation: "ElastiCache se usa como caché en memoria (Redis o Memcached)."
    },
    {
        id: "database_elasticache_002",
        category: "database",
        service: "elasticache",
        difficulty: "hard",
        question: "¿Qué problema resuelve principalmente ElastiCache?",
        options: [
            "Persistencia a largo plazo",
            "Reducción de latencia y carga en bases de datos",
            "Consultas SQL complejas",
            "Almacenamiento de grandes volúmenes históricos"
        ],
        correct: 1,
        explanation: "ElastiCache reduce la latencia y descarga las bases de datos principales."
    },

    {
        id: "database_documentdb_001",
        category: "database",
        service: "documentdb",
        difficulty: "medium",
        question: "¿Con qué motor es compatible Amazon DocumentDB?",
        options: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis"
        ],
        correct: 2,
        explanation: "DocumentDB es compatible con MongoDB."
    },
    {
        id: "database_documentdb_002",
        category: "database",
        service: "documentdb",
        difficulty: "hard",
        question: "¿Qué tipo de datos se almacenan típicamente en Amazon DocumentDB?",
        options: [
            "Tablas relacionales",
            "Grafos",
            "Documentos JSON",
            "Datos en memoria"
        ],
        correct: 2,
        explanation: "DocumentDB almacena datos en formato documento (JSON)."
    },

    {
        id: "database_neptune_001",
        category: "database",
        service: "neptune",
        difficulty: "medium",
        question: "¿Qué tipo de base de datos es Amazon Neptune?",
        options: [
            "Relacional",
            "Documento",
            "Grafo",
            "Clave-valor"
        ],
        correct: 2,
        explanation: "Neptune es una base de datos orientada a grafos."
    },
    {
        id: "database_neptune_002",
        category: "database",
        service: "neptune",
        difficulty: "hard",
        question: "¿Qué caso de uso encaja mejor con Amazon Neptune?",
        options: [
            "Carrito de compra",
            "Análisis de relaciones complejas (redes sociales, fraude)",
            "Caché de sesiones",
            "Logs de aplicaciones"
        ],
        correct: 1,
        explanation: "Neptune es ideal para relaciones complejas entre entidades."
    },

    {
        id: "database_case_001",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "Una aplicación requiere latencia de milisegundos y escalado automático sin administrar servidores. ¿Qué servicio elegir?",
        options: [
            "Amazon RDS",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon Neptune"
        ],
        correct: 2,
        explanation: "DynamoDB ofrece baja latencia y escalado automático."
    },
    {
        id: "database_case_002",
        category: "database",
        service: "elasticache",
        difficulty: "medium",
        question: "Una web tiene mucha carga de lecturas repetidas y necesita mejorar tiempos de respuesta. ¿Qué servicio usar?",
        options: [
            "Amazon RDS",
            "Amazon ElastiCache",
            "Amazon Neptune",
            "Amazon DocumentDB"
        ],
        correct: 1,
        explanation: "ElastiCache se usa para cachear datos frecuentemente accedidos."
    },
    {
        id: "database_case_003",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "Una empresa necesita una base de datos relacional altamente disponible y con alto rendimiento. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon RDS MySQL",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon ElastiCache"
        ],
        correct: 1,
        explanation: "Aurora está optimizada para alto rendimiento y disponibilidad."
    },

    {
        id: "database_compare_001",
        category: "database",
        service: "rds",
        difficulty: "hard",
        question: "¿Cuál es una diferencia clave entre Amazon RDS y Amazon DynamoDB?",
        options: [
            "RDS es NoSQL y DynamoDB relacional",
            "RDS es relacional y DynamoDB NoSQL",
            "Ambos son bases de datos en memoria",
            "Ambos usan grafos"
        ],
        correct: 1,
        explanation: "RDS es relacional; DynamoDB es NoSQL."
    },
    {
        id: "database_compare_002",
        category: "database",
        service: "documentdb",
        difficulty: "hard",
        question: "¿Cuándo elegirías Amazon DocumentDB frente a Amazon RDS?",
        options: [
            "Cuando necesitas SQL",
            "Cuando necesitas documentos JSON flexibles",
            "Cuando necesitas caché en memoria",
            "Cuando necesitas grafos"
        ],
        correct: 1,
        explanation: "DocumentDB es ideal para modelos de datos flexibles basados en documentos."
    },

    {
        id: "database_trick_001",
        category: "database",
        service: "neptune",
        difficulty: "hard",
        question: "¿Qué base de datos usarías para modelar relaciones entre usuarios, productos y recomendaciones?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Neptune",
            "Amazon ElastiCache"
        ],
        correct: 2,
        explanation: "Neptune es ideal para relaciones complejas y grafos."
    },
    {
        id: "database_trick_002",
        category: "database",
        service: "elasticache",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon ElastiCache es CORRECTA?",
        options: [
            "Es una base de datos relacional",
            "Se usa como caché en memoria para acelerar aplicaciones",
            "Es compatible con MongoDB",
            "Es una base de datos de grafos"
        ],
        correct: 1,
        explanation: "ElastiCache se usa como caché en memoria (Redis/Memcached)."
    },
    {
        id: "database_hard_001",
        category: "database",
        service: "rds",
        difficulty: "hard",
        question: "¿Qué responsabilidad NO asume AWS al usar Amazon RDS?",
        options: [
            "Aplicar parches al motor de base de datos",
            "Gestionar backups automáticos",
            "Diseñar el esquema y las consultas",
            "Configurar alta disponibilidad"
        ],
        correct: 2,
        explanation: "El diseño del esquema y las consultas sigue siendo responsabilidad del cliente."
    },
    {
        id: "database_hard_002",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "¿Qué característica permite a Amazon Aurora ofrecer alta disponibilidad de forma nativa?",
        options: [
            "Almacenamiento distribuido en múltiples AZ",
            "Uso de caché en memoria",
            "Escalado manual de instancias",
            "Replicación síncrona en una sola AZ"
        ],
        correct: 0,
        explanation: "Aurora usa almacenamiento distribuido y replicado en múltiples AZ."
    },
    {
        id: "database_hard_003",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon Aurora Serverless es CORRECTA?",
        options: [
            "Requiere aprovisionar instancias",
            "Escala automáticamente según la carga",
            "No es compatible con SQL",
            "Solo funciona con DynamoDB"
        ],
        correct: 1,
        explanation: "Aurora Serverless ajusta la capacidad automáticamente."
    },
    {
        id: "database_hard_004",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "¿Qué patrón de acceso se adapta PEOR a Amazon DynamoDB?",
        options: [
            "Acceso por clave primaria",
            "Acceso predecible y a gran escala",
            "Consultas complejas con joins",
            "Baja latencia"
        ],
        correct: 2,
        explanation: "DynamoDB no soporta joins ni consultas relacionales complejas."
    },
    {
        id: "database_hard_005",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "¿Qué responsabilidad elimina DynamoDB frente a bases de datos relacionales?",
        options: [
            "Diseño de claves",
            "Gestión de escalado y capacidad",
            "Modelado de datos",
            "Definición de índices"
        ],
        correct: 1,
        explanation: "DynamoDB escala automáticamente sin gestión de capacidad manual."
    },
    {
        id: "database_hard_006",
        category: "database",
        service: "elasticache",
        difficulty: "hard",
        question: "¿Qué riesgo existe si una aplicación depende exclusivamente de ElastiCache?",
        options: [
            "Alta latencia",
            "Pérdida de datos persistentes",
            "Escalado limitado",
            "Incompatibilidad con AWS"
        ],
        correct: 1,
        explanation: "ElastiCache es una caché en memoria, no una base de datos persistente principal."
    },
    {
        id: "database_hard_007",
        category: "database",
        service: "elasticache",
        difficulty: "hard",
        question: "¿Qué combinación es un patrón común de arquitectura?",
        options: [
            "ElastiCache como base de datos principal",
            "RDS + ElastiCache para reducir latencia",
            "Neptune + ElastiCache para SQL",
            "DynamoDB + ElastiCache para joins"
        ],
        correct: 1,
        explanation: "ElastiCache se usa comúnmente junto a RDS para cachear lecturas."
    },
    {
        id: "database_hard_008",
        category: "database",
        service: "documentdb",
        difficulty: "hard",
        question: "¿Qué escenario encaja mejor con Amazon DocumentDB?",
        options: [
            "Relaciones complejas entre entidades",
            "Datos semiestructurados y esquemas flexibles",
            "Consultas SQL analíticas",
            "Caché de baja latencia"
        ],
        correct: 1,
        explanation: "DocumentDB es ideal para documentos JSON con esquemas flexibles."
    },
    {
        id: "database_hard_009",
        category: "database",
        service: "documentdb",
        difficulty: "hard",
        question: "¿Por qué NO elegirías Amazon DocumentDB para un sistema transaccional clásico?",
        options: [
            "No es compatible con MongoDB",
            "No es una base de datos relacional",
            "No escala",
            "No es gestionada"
        ],
        correct: 1,
        explanation: "DocumentDB no es relacional y no soporta joins SQL tradicionales."
    },
    {
        id: "database_hard_010",
        category: "database",
        service: "neptune",
        difficulty: "hard",
        question: "¿Qué tipo de consulta es más eficiente en Amazon Neptune?",
        options: [
            "SUM y AVG sobre grandes tablas",
            "Recorridos de relaciones (traversals)",
            "Búsquedas por clave primaria",
            "Caché de sesiones"
        ],
        correct: 1,
        explanation: "Neptune está optimizado para recorridos de grafos."
    },
    {
        id: "database_hard_011",
        category: "database",
        service: "neptune",
        difficulty: "hard",
        question: "¿Qué problema típico NO resuelve Amazon Neptune?",
        options: [
            "Detección de fraude",
            "Recomendaciones",
            "Consultas relacionales tradicionales",
            "Redes sociales"
        ],
        correct: 2,
        explanation: "Neptune no está pensado para consultas relacionales SQL."
    },
    {
        id: "database_hard_012",
        category: "database",
        service: "rds",
        difficulty: "hard",
        question: "¿Qué característica diferencia a Amazon RDS Multi-AZ?",
        options: [
            "Escalado automático horizontal",
            "Alta disponibilidad mediante réplica en otra AZ",
            "Caché en memoria",
            "Modelo serverless"
        ],
        correct: 1,
        explanation: "Multi-AZ proporciona alta disponibilidad mediante réplica síncrona."
    },
    {
        id: "database_hard_013",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "¿Qué ventaja tiene Aurora frente a RDS en escenarios de lectura intensiva?",
        options: [
            "Menor compatibilidad",
            "Mayor número de réplicas de lectura",
            "Menor disponibilidad",
            "Menor coste siempre"
        ],
        correct: 1,
        explanation: "Aurora permite múltiples réplicas de lectura con alto rendimiento."
    },
    {
        id: "database_hard_014",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "¿Qué error de diseño puede provocar problemas graves en DynamoDB?",
        options: [
            "Definir demasiados índices",
            "Mala elección de la clave de partición",
            "Usar tablas pequeñas",
            "Escalado automático"
        ],
        correct: 1,
        explanation: "Una mala clave de partición genera hot partitions."
    },
    {
        id: "database_hard_015",
        category: "database",
        service: "elasticache",
        difficulty: "hard",
        question: "¿Qué tipo de datos NO es adecuado almacenar en ElastiCache?",
        options: [
            "Sesiones de usuario",
            "Resultados de consultas frecuentes",
            "Datos críticos sin respaldo",
            "Tokens temporales"
        ],
        correct: 2,
        explanation: "ElastiCache no debe ser la única fuente de datos críticos."
    },
    {
        id: "database_hard_016",
        category: "database",
        service: "rds",
        difficulty: "hard",
        question: "¿Qué escenario favorece claramente Amazon RDS frente a DynamoDB?",
        options: [
            "Escalado masivo sin esquema",
            "Consultas SQL complejas y joins",
            "Latencia de milisegundos",
            "Acceso por clave-valor"
        ],
        correct: 1,
        explanation: "RDS soporta SQL, joins y consultas complejas."
    },
    {
        id: "database_hard_017",
        category: "database",
        service: "aurora",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon Aurora es INCORRECTA?",
        options: [
            "Es compatible con MySQL y PostgreSQL",
            "Usa almacenamiento distribuido",
            "Es una base de datos NoSQL",
            "Ofrece alta disponibilidad"
        ],
        correct: 2,
        explanation: "Aurora es una base de datos relacional, no NoSQL."
    },
    {
        id: "database_hard_018",
        category: "database",
        service: "documentdb",
        difficulty: "hard",
        question: "¿Qué ventaja tiene DocumentDB frente a RDS?",
        options: [
            "Soporte SQL completo",
            "Modelo de documentos flexible",
            "Joins complejos",
            "Caché en memoria"
        ],
        correct: 1,
        explanation: "DocumentDB permite esquemas flexibles basados en documentos."
    },
    {
        id: "database_hard_019",
        category: "database",
        service: "neptune",
        difficulty: "hard",
        question: "¿Qué tipo de base de datos elegirías para dependencias entre microservicios?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Neptune",
            "Amazon ElastiCache"
        ],
        correct: 2,
        explanation: "Neptune es ideal para modelar relaciones complejas."
    },
    {
        id: "database_hard_020",
        category: "database",
        service: "dynamodb",
        difficulty: "hard",
        question: "¿Qué característica hace a DynamoDB especialmente adecuado para aplicaciones serverless?",
        options: [
            "Requiere instancias",
            "Escalado automático y gestión total por AWS",
            "Consultas SQL",
            "Dependencia de EC2"
        ],
        correct: 1,
        explanation: "DynamoDB escala automáticamente y se integra muy bien con Lambda."
    }
];
