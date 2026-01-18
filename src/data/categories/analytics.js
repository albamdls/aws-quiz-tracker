export default [
    {
        id: "analytics_athena_001",
        category: "analytics",
        service: "athena",
        difficulty: "medium",
        question: "¿Cuál es el principal caso de uso de Amazon Athena?",
        options: [
            "Procesar datos en tiempo real",
            "Ejecutar consultas SQL directamente sobre datos en Amazon S3",
            "Crear dashboards interactivos",
            "Ejecutar jobs de machine learning"
        ],
        correct: 1,
        explanation: "Athena es un servicio serverless que permite ejecutar consultas SQL directamente sobre datos almacenados en S3."
    },
    {
        id: "analytics_athena_002",
        category: "analytics",
        service: "athena",
        difficulty: "medium",
        question: "Un equipo necesita analizar archivos CSV en S3 sin gestionar servidores. ¿Qué servicio debe usar?",
        options: [
            "Amazon Redshift",
            "Amazon EMR",
            "Amazon Athena",
            "Amazon OpenSearch Service"
        ],
        correct: 2,
        explanation: "Athena no requiere infraestructura y permite consultas SQL sobre archivos en S3."
    },
    {
        id: "analytics_emr_001",
        category: "analytics",
        service: "emr",
        difficulty: "medium",
        question: "¿Para qué tipo de cargas de trabajo está diseñado Amazon EMR?",
        options: [
            "Visualización de datos",
            "Procesamiento distribuido de big data",
            "Consultas SQL serverless",
            "Streaming de datos"
        ],
        correct: 1,
        explanation: "EMR permite ejecutar frameworks de big data como Hadoop y Spark."
    },
    {
        id: "analytics_emr_002",
        category: "analytics",
        service: "emr",
        difficulty: "medium",
        question: "Una empresa necesita ejecutar jobs de Spark sobre grandes volúmenes de datos. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Athena",
            "AWS Glue",
            "Amazon EMR",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "Amazon EMR está diseñado para ejecutar Spark y otros frameworks distribuidos."
    },
    {
        id: "analytics_glue_001",
        category: "analytics",
        service: "glue",
        difficulty: "medium",
        question: "¿Cuál es la función principal de AWS Glue?",
        options: [
            "Visualizar datos",
            "Almacenar datos",
            "Realizar procesos ETL",
            "Procesar datos en tiempo real"
        ],
        correct: 2,
        explanation: "AWS Glue es un servicio ETL totalmente gestionado."
    },
    {
        id: "analytics_glue_002",
        category: "analytics",
        service: "glue",
        difficulty: "medium",
        question: "¿Qué componente de AWS Glue descubre automáticamente los esquemas de datos?",
        options: [
            "Glue Jobs",
            "Glue Crawlers",
            "Glue Triggers",
            "Glue Workflows"
        ],
        correct: 1,
        explanation: "Los Crawlers analizan los datos y crean el Data Catalog."
    },
    {
        id: "analytics_kinesis_001",
        category: "analytics",
        service: "kinesis",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon Kinesis?",
        options: [
            "Datos históricos",
            "Datos en streaming en tiempo real",
            "Almacenamiento de datos",
            "Visualización de métricas"
        ],
        correct: 1,
        explanation: "Kinesis está diseñado para ingestión y procesamiento de datos en tiempo real."
    },
    {
        id: "analytics_kinesis_002",
        category: "analytics",
        service: "kinesis",
        difficulty: "medium",
        question: "Una aplicación recibe miles de eventos por segundo desde dispositivos IoT. ¿Qué servicio debe usar?",
        options: [
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon Kinesis",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "Kinesis permite capturar y procesar eventos en tiempo real."
    },
    {
        id: "analytics_opensearch_001",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "¿Cuál es el principal caso de uso de Amazon OpenSearch Service?",
        options: [
            "Procesamiento ETL",
            "Búsqueda y análisis de logs",
            "Visualización de KPIs",
            "Streaming de datos"
        ],
        correct: 1,
        explanation: "OpenSearch se utiliza para búsquedas rápidas y análisis de logs."
    },
    {
        id: "analytics_opensearch_002",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "Un equipo quiere analizar logs de aplicaciones y hacer búsquedas en tiempo real. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Athena",
            "Amazon OpenSearch Service",
            "Amazon EMR",
            "Amazon Redshift"
        ],
        correct: 1,
        explanation: "OpenSearch está optimizado para búsqueda y análisis casi en tiempo real."
    },
    {
        id: "analytics_quicksight_001",
        category: "analytics",
        service: "quicksight",
        difficulty: "medium",
        question: "¿Cuál es la función principal de Amazon QuickSight?",
        options: [
            "Procesar big data",
            "Almacenar datos",
            "Visualizar datos y crear dashboards",
            "Ingerir datos en streaming"
        ],
        correct: 2,
        explanation: "QuickSight es el servicio de BI y visualización de AWS."
    },
    {
        id: "analytics_quicksight_002",
        category: "analytics",
        service: "quicksight",
        difficulty: "medium",
        question: "Un directivo necesita dashboards interactivos con métricas de negocio. ¿Qué servicio debe usar?",
        options: [
            "Amazon Redshift",
            "Amazon EMR",
            "Amazon QuickSight",
            "AWS Glue"
        ],
        correct: 2,
        explanation: "QuickSight está orientado a visualización para usuarios de negocio."
    },
    {
        id: "analytics_redshift_001",
        category: "analytics",
        service: "redshift",
        difficulty: "medium",
        question: "¿Qué tipo de base de datos es Amazon Redshift?",
        options: [
            "NoSQL",
            "OLTP",
            "Data warehouse",
            "Key-value"
        ],
        correct: 2,
        explanation: "Redshift es un data warehouse diseñado para analítica."
    },
    {
        id: "analytics_redshift_002",
        category: "analytics",
        service: "redshift",
        difficulty: "medium",
        question: "Una empresa necesita ejecutar consultas analíticas complejas sobre grandes volúmenes de datos estructurados. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon Kinesis",
            "Amazon OpenSearch Service"
        ],
        correct: 1,
        explanation: "Redshift está optimizado para análisis SQL a gran escala."
    },
    {
        id: "analytics_mix_001",
        category: "analytics",
        service: "glue",
        difficulty: "hard",
        question: "¿Qué combinación de servicios permite un flujo ETL completo desde datos en bruto hasta dashboards?",
        options: [
            "Kinesis + OpenSearch",
            "Glue + Redshift + QuickSight",
            "Athena + EMR",
            "S3 + EC2"
        ],
        correct: 1,
        explanation: "Glue procesa datos, Redshift los almacena y QuickSight los visualiza."
    },
    {
        id: "analytics_mix_002",
        category: "analytics",
        service: "athena",
        difficulty: "medium",
        question: "¿Qué servicio es completamente serverless y cobra por datos escaneados?",
        options: [
            "Amazon EMR",
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon OpenSearch Service"
        ],
        correct: 2,
        explanation: "Athena es serverless y cobra por la cantidad de datos analizados."
    },
    {
        id: "analytics_mix_003",
        category: "analytics",
        service: "kinesis",
        difficulty: "medium",
        question: "¿Qué servicio se utiliza para procesar datos en tiempo real antes de almacenarlos?",
        options: [
            "Amazon Kinesis",
            "Amazon Redshift",
            "Amazon QuickSight",
            "Amazon Athena"
        ],
        correct: 0,
        explanation: "Kinesis permite procesar datos en streaming en tiempo real."
    },
    {
        id: "analytics_mix_004",
        category: "analytics",
        service: "emr",
        difficulty: "hard",
        question: "¿Qué servicio ofrece mayor control sobre la infraestructura de big data?",
        options: [
            "AWS Glue",
            "Amazon Athena",
            "Amazon EMR",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "EMR permite configurar clústeres y frameworks de big data."
    },
    {
        id: "analytics_mix_005",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "¿Qué servicio es más adecuado para búsquedas textuales y análisis de logs?",
        options: [
            "Amazon Redshift",
            "Amazon OpenSearch Service",
            "Amazon Athena",
            "AWS Glue"
        ],
        correct: 1,
        explanation: "OpenSearch está optimizado para búsquedas y análisis de texto."
    },
    {
        id: "analytics_mix_006",
        category: "analytics",
        service: "quicksight",
        difficulty: "medium",
        question: "¿Qué servicio está orientado principalmente a usuarios de negocio?",
        options: [
            "Amazon EMR",
            "AWS Glue",
            "Amazon QuickSight",
            "Amazon Kinesis"
        ],
        correct: 2,
        explanation: "QuickSight está diseñado para analistas y usuarios de negocio."
    },
    {
        id: "analytics_athena_003",
        category: "analytics",
        service: "athena",
        difficulty: "medium",
        question: "¿Qué ventaja clave ofrece Amazon Athena frente a un data warehouse tradicional?",
        options: [
            "Mayor rendimiento en consultas complejas",
            "No requiere aprovisionar ni administrar infraestructura",
            "Soporta transacciones OLTP",
            "Permite procesamiento en tiempo real"
        ],
        correct: 1,
        explanation: "Athena es serverless y elimina la gestión de infraestructura."
    },
    {
        id: "analytics_athena_004",
        category: "analytics",
        service: "athena",
        difficulty: "hard",
        question: "¿Qué factor impacta directamente en el coste de las consultas de Amazon Athena?",
        options: [
            "Número de usuarios",
            "Tiempo de ejecución",
            "Cantidad de datos escaneados",
            "Tipo de consulta SQL"
        ],
        correct: 2,
        explanation: "Athena cobra en función de los datos escaneados por consulta."
    },
    {
        id: "analytics_emr_003",
        category: "analytics",
        service: "emr",
        difficulty: "medium",
        question: "¿Qué frameworks se pueden ejecutar en Amazon EMR?",
        options: [
            "Spark y Hadoop",
            "MySQL y PostgreSQL",
            "Lambda y Step Functions",
            "CloudFormation y CDK"
        ],
        correct: 0,
        explanation: "EMR soporta frameworks de big data como Spark, Hadoop y Hive."
    },
    {
        id: "analytics_emr_004",
        category: "analytics",
        service: "emr",
        difficulty: "hard",
        question: "¿Qué responsabilidad sigue teniendo el cliente al usar Amazon EMR?",
        options: [
            "Gestionar el sistema operativo",
            "Configurar y escalar los clústeres",
            "Aplicar parches de hardware",
            "Mantener el centro de datos"
        ],
        correct: 1,
        explanation: "En EMR el cliente controla la configuración y escalado del clúster."
    },
    {
        id: "analytics_glue_003",
        category: "analytics",
        service: "glue",
        difficulty: "medium",
        question: "¿Qué tipo de servicio es AWS Glue?",
        options: [
            "Data warehouse",
            "Servicio ETL serverless",
            "Servicio de streaming",
            "Motor de búsqueda"
        ],
        correct: 1,
        explanation: "Glue es un servicio ETL totalmente gestionado y serverless."
    },
    {
        id: "analytics_glue_004",
        category: "analytics",
        service: "glue",
        difficulty: "medium",
        question: "¿Dónde almacena AWS Glue los metadatos de los datos descubiertos?",
        options: [
            "Amazon S3",
            "Glue Data Catalog",
            "Amazon Redshift",
            "Amazon DynamoDB"
        ],
        correct: 1,
        explanation: "El Glue Data Catalog centraliza los metadatos."
    },
    {
        id: "analytics_kinesis_003",
        category: "analytics",
        service: "kinesis",
        difficulty: "medium",
        question: "¿Cuál es una característica clave de Amazon Kinesis?",
        options: [
            "Procesamiento por lotes",
            "Alta latencia",
            "Baja latencia en tiempo real",
            "Orientado a usuarios de negocio"
        ],
        correct: 2,
        explanation: "Kinesis está diseñado para procesamiento en tiempo real con baja latencia."
    },
    {
        id: "analytics_kinesis_004",
        category: "analytics",
        service: "kinesis",
        difficulty: "hard",
        question: "Una empresa necesita reaccionar inmediatamente a eventos de pago online. ¿Qué servicio es más adecuado?",
        options: [
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon Kinesis",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "Kinesis permite procesar eventos en tiempo real."
    },
    {
        id: "analytics_opensearch_003",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "Amazon OpenSearch Service es especialmente adecuado para:",
        options: [
            "Análisis transaccional",
            "Consultas OLTP",
            "Búsqueda de texto y análisis de logs",
            "ETL de grandes volúmenes"
        ],
        correct: 2,
        explanation: "OpenSearch destaca en búsqueda textual y observabilidad."
    },
    {
        id: "analytics_opensearch_004",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "¿Qué tipo de datos se almacenan comúnmente en OpenSearch?",
        options: [
            "Imágenes",
            "Logs y métricas",
            "Datos relacionales normalizados",
            "Datos de backup"
        ],
        correct: 1,
        explanation: "OpenSearch se usa mucho para logs y métricas."
    },
    {
        id: "analytics_quicksight_003",
        category: "analytics",
        service: "quicksight",
        difficulty: "medium",
        question: "¿Qué ventaja ofrece Amazon QuickSight frente a herramientas BI tradicionales?",
        options: [
            "Requiere servidores dedicados",
            "Escala automáticamente y es serverless",
            "Solo funciona con Redshift",
            "Está orientado solo a desarrolladores"
        ],
        correct: 1,
        explanation: "QuickSight es serverless y escala automáticamente."
    },
    {
        id: "analytics_quicksight_004",
        category: "analytics",
        service: "quicksight",
        difficulty: "hard",
        question: "¿Quién es el usuario objetivo principal de Amazon QuickSight?",
        options: [
            "Administradores de sistemas",
            "Ingenieros de datos",
            "Usuarios de negocio y analistas",
            "Ingenieros DevOps"
        ],
        correct: 2,
        explanation: "QuickSight está orientado a usuarios de negocio."
    },
    {
        id: "analytics_redshift_003",
        category: "analytics",
        service: "redshift",
        difficulty: "medium",
        question: "¿Qué tipo de consultas se ejecutan habitualmente en Amazon Redshift?",
        options: [
            "Consultas transaccionales cortas",
            "Consultas analíticas complejas",
            "Búsquedas de texto",
            "Eventos en tiempo real"
        ],
        correct: 1,
        explanation: "Redshift está optimizado para análisis complejo (OLAP)."
    },
    {
        id: "analytics_redshift_004",
        category: "analytics",
        service: "redshift",
        difficulty: "hard",
        question: "¿Cuál es una diferencia clave entre Athena y Redshift?",
        options: [
            "Athena es OLTP y Redshift OLAP",
            "Redshift requiere aprovisionamiento y Athena no",
            "Athena soporta streaming y Redshift no",
            "Redshift es serverless y Athena no"
        ],
        correct: 1,
        explanation: "Athena es serverless, Redshift requiere clústeres."
    },
    {
        id: "analytics_case_001",
        category: "analytics",
        service: "glue",
        difficulty: "medium",
        question: "Una empresa quiere preparar datos antes de cargarlos a un data warehouse. ¿Qué servicio debe usar?",
        options: [
            "Amazon QuickSight",
            "AWS Glue",
            "Amazon OpenSearch Service",
            "Amazon Athena"
        ],
        correct: 1,
        explanation: "Glue permite realizar transformaciones ETL."
    },
    {
        id: "analytics_case_002",
        category: "analytics",
        service: "redshift",
        difficulty: "medium",
        question: "¿Qué servicio es más adecuado como backend para dashboards de BI corporativos?",
        options: [
            "Amazon Redshift",
            "Amazon Kinesis",
            "Amazon EMR",
            "Amazon OpenSearch Service"
        ],
        correct: 0,
        explanation: "Redshift es un data warehouse ideal para BI."
    },
    {
        id: "analytics_case_003",
        category: "analytics",
        service: "athena",
        difficulty: "medium",
        question: "Un analista quiere consultar datos históricos sin cargarlos a una base de datos. ¿Qué servicio usar?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue",
            "Amazon EMR"
        ],
        correct: 0,
        explanation: "Athena consulta directamente datos en S3."
    },
    {
        id: "analytics_case_004",
        category: "analytics",
        service: "emr",
        difficulty: "hard",
        question: "¿Qué servicio elegirías para un control avanzado del procesamiento de big data?",
        options: [
            "AWS Glue",
            "Amazon Athena",
            "Amazon EMR",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "EMR ofrece mayor control y flexibilidad."
    },
    {
        id: "analytics_case_005",
        category: "analytics",
        service: "kinesis",
        difficulty: "medium",
        question: "¿Qué servicio se usa para ingerir datos antes de almacenarlos en S3 o Redshift en tiempo real?",
        options: [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon Kinesis",
            "Amazon QuickSight"
        ],
        correct: 2,
        explanation: "Kinesis es ideal para ingestión en streaming."
    },
    {
        id: "analytics_case_006",
        category: "analytics",
        service: "opensearch",
        difficulty: "medium",
        question: "¿Qué servicio usarías para crear un sistema de búsqueda interno de logs?",
        options: [
            "Amazon Redshift",
            "Amazon OpenSearch Service",
            "AWS Glue",
            "Amazon Athena"
        ],
        correct: 1,
        explanation: "OpenSearch permite búsquedas rápidas sobre logs."
    }
]