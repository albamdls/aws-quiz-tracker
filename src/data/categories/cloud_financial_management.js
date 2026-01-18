export default [
    {
        id: "finance_budgets_001",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de AWS Budgets?",
        options: [
            "Analizar costes históricos de AWS",
            "Definir alertas y límites de gasto",
            "Comprar software de terceros",
            "Generar informes detallados de uso"
        ],
        correct: 1,
        explanation: "AWS Budgets permite establecer presupuestos y recibir alertas cuando se superan umbrales."
    },
    {
        id: "finance_budgets_002",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "¿Qué tipo de alertas puede enviar AWS Budgets?",
        options: [
            "Solo alertas por uso de CPU",
            "Alertas por coste y uso",
            "Alertas por errores de aplicación",
            "Alertas por latencia de red"
        ],
        correct: 1,
        explanation: "Budgets permite alertas basadas en coste, uso y reservas."
    },
    {
        id: "finance_budgets_003",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "Una empresa quiere recibir un email cuando su gasto mensual supere los 500€. ¿Qué servicio debe usar?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "AWS Budgets permite configurar alertas automáticas por umbrales de gasto."
    },
    {
        id: "finance_budgets_004",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "hard",
        question: "¿Qué acción puede automatizarse cuando se supera un presupuesto en AWS Budgets?",
        options: [
            "Eliminar recursos automáticamente",
            "Enviar notificaciones o activar acciones",
            "Reducir precios de servicios",
            "Bloquear la cuenta de AWS"
        ],
        correct: 1,
        explanation: "AWS Budgets puede activar acciones (por ejemplo, notificaciones o restricciones mediante IAM)."
    },

    {
        id: "finance_cost_explorer_001",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Para qué se utiliza AWS Cost Explorer?",
        options: [
            "Crear presupuestos",
            "Visualizar y analizar costes y uso",
            "Comprar servicios de terceros",
            "Auditar seguridad"
        ],
        correct: 1,
        explanation: "Cost Explorer permite analizar y visualizar el gasto y uso de AWS."
    },
    {
        id: "finance_cost_explorer_002",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Qué tipo de información muestra AWS Cost Explorer?",
        options: [
            "Solo costes futuros",
            "Costes y uso históricos",
            "Errores de facturación",
            "Logs de aplicaciones"
        ],
        correct: 1,
        explanation: "Cost Explorer muestra datos históricos de coste y uso."
    },
    {
        id: "finance_cost_explorer_003",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "Una empresa quiere saber qué servicio ha generado más coste el último mes. ¿Qué servicio usar?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "Cost Explorer permite desglosar costes por servicio."
    },
    {
        id: "finance_cost_explorer_004",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "hard",
        question: "¿Qué funcionalidad ofrece AWS Cost Explorer para optimización de costes?",
        options: [
            "Recomendaciones de Reserved Instances",
            "Compra automática de software",
            "Alertas de seguridad",
            "Backups automáticos"
        ],
        correct: 0,
        explanation: "Cost Explorer puede mostrar recomendaciones de ahorro como Reserved Instances."
    },

    {
        id: "finance_cur_001",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "¿Qué es AWS Cost and Usage Reports (CUR)?",
        options: [
            "Un dashboard visual de costes",
            "Un informe detallado y granular de costes y uso",
            "Un sistema de alertas",
            "Una tienda de software"
        ],
        correct: 1,
        explanation: "CUR proporciona informes detallados de uso y costes a nivel muy granular."
    },
    {
        id: "finance_cur_002",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "¿Dónde se almacenan los informes generados por AWS CUR?",
        options: [
            "Amazon EC2",
            "Amazon S3",
            "Amazon DynamoDB",
            "Amazon CloudWatch"
        ],
        correct: 1,
        explanation: "Los informes CUR se entregan en un bucket de Amazon S3."
    },
    {
        id: "finance_cur_003",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "hard",
        question: "¿Para qué tipo de análisis es más adecuado AWS CUR?",
        options: [
            "Visualización rápida",
            "Análisis financiero avanzado y personalizado",
            "Alertas en tiempo real",
            "Compra de servicios"
        ],
        correct: 1,
        explanation: "CUR es ideal para análisis avanzados y personalizados del gasto."
    },
    {
        id: "finance_cur_004",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "Una empresa quiere integrar datos de costes de AWS en una herramienta externa de BI. ¿Qué servicio usar?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "CUR ofrece datos detallados exportables para análisis externo."
    },

    {
        id: "finance_marketplace_001",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué es AWS Marketplace?",
        options: [
            "Un sistema de presupuestos",
            "Una tienda de software y servicios de terceros",
            "Un dashboard de costes",
            "Un motor de recomendaciones"
        ],
        correct: 1,
        explanation: "AWS Marketplace es un catálogo de software y servicios de terceros."
    },
    {
        id: "finance_marketplace_002",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué ventaja ofrece AWS Marketplace?",
        options: [
            "Gestión manual de licencias",
            "Facturación integrada con AWS",
            "Costes ocultos",
            "Requiere pagos externos"
        ],
        correct: 1,
        explanation: "Las compras de Marketplace se integran en la factura de AWS."
    },
    {
        id: "finance_marketplace_003",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué tipo de productos se pueden adquirir en AWS Marketplace?",
        options: [
            "Solo hardware",
            "Software y servicios de terceros",
            "Solo servicios de AWS",
            "Licencias on-premise"
        ],
        correct: 1,
        explanation: "Marketplace ofrece software y servicios de proveedores externos."
    },
    {
        id: "finance_marketplace_004",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "hard",
        question: "Una empresa quiere contratar un firewall de terceros con pago por uso y facturación AWS. ¿Qué servicio usar?",
        options: [
            "AWS Budgets",
            "AWS Marketplace",
            "AWS Cost Explorer",
            "AWS CUR"
        ],
        correct: 1,
        explanation: "Marketplace permite adquirir soluciones de terceros con facturación AWS."
    },

    {
        id: "finance_case_001",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "Una empresa quiere controlar que el gasto mensual no supere un límite definido. ¿Qué servicio usar?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "Budgets permite definir límites y alertas."
    },
    {
        id: "finance_case_002",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Qué servicio usarías para comparar el gasto de este mes con el mes anterior?",
        options: [
            "AWS CUR",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "Cost Explorer permite comparaciones visuales entre periodos."
    },
    {
        id: "finance_case_003",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "hard",
        question: "¿Qué servicio es más adecuado para auditorías financieras detalladas?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "CUR ofrece el mayor nivel de detalle para auditorías."
    },
    {
        id: "finance_case_004",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué servicio usarías para adquirir software empresarial sin gestionar licencias manuales?",
        options: [
            "AWS Marketplace",
            "AWS Budgets",
            "AWS CUR",
            "AWS Cost Explorer"
        ],
        correct: 0,
        explanation: "Marketplace simplifica la compra y licenciamiento."
    },

    {
        id: "finance_compare_001",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "hard",
        question: "¿Qué servicio permite actuar de forma proactiva antes de exceder un presupuesto?",
        options: [
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "Budgets permite alertas y acciones antes de superar límites."
    },
    {
        id: "finance_compare_002",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Cuál es la principal diferencia entre Cost Explorer y CUR?",
        options: [
            "Cost Explorer es visual; CUR es más granular",
            "CUR es solo para alertas",
            "Cost Explorer requiere S3",
            "CUR no muestra costes"
        ],
        correct: 0,
        explanation: "Cost Explorer es visual; CUR ofrece datos muy detallados."
    },
    {
        id: "finance_compare_003",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué servicio integra costes de software de terceros en la factura AWS?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Marketplace",
            "AWS CUR"
        ],
        correct: 2,
        explanation: "Marketplace integra los costes de terceros en la factura AWS."
    },
    {
        id: "finance_compare_004",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "hard",
        question: "¿Qué servicio proporciona el mayor nivel de detalle de costes a nivel de recurso?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "CUR ofrece el nivel más granular de datos."
    },
    {
        id: "finance_budgets_005",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "¿Qué tipo de presupuesto se puede crear con AWS Budgets?",
        options: [
            "Solo presupuestos mensuales",
            "Presupuestos de coste, uso y reservas",
            "Solo presupuestos por servicio",
            "Presupuestos solo anuales"
        ],
        correct: 1,
        explanation: "AWS Budgets permite crear presupuestos basados en coste, uso y Reserved Instances/Savings Plans."
    },
    {
        id: "finance_budgets_006",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "hard",
        question: "¿Qué acción NO es una funcionalidad directa de AWS Budgets?",
        options: [
            "Enviar alertas por email",
            "Ejecutar acciones automáticas mediante IAM",
            "Visualizar gráficos detallados de gasto histórico",
            "Definir umbrales de presupuesto"
        ],
        correct: 2,
        explanation: "La visualización detallada corresponde a Cost Explorer, no a Budgets."
    },
    {
        id: "finance_budgets_007",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "¿Con qué frecuencia se evalúan normalmente los presupuestos en AWS Budgets?",
        options: [
            "Cada minuto",
            "Varias veces al día",
            "Una vez al mes",
            "Solo bajo demanda"
        ],
        correct: 1,
        explanation: "AWS Budgets evalúa el gasto varias veces al día para disparar alertas."
    },

    {
        id: "finance_cost_explorer_005",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Qué tipo de gráfico es común en AWS Cost Explorer?",
        options: [
            "Diagramas de red",
            "Gráficos de barras y líneas",
            "Mapas de calor de seguridad",
            "Diagramas de estados"
        ],
        correct: 1,
        explanation: "Cost Explorer usa gráficos visuales como barras y líneas para analizar costes."
    },
    {
        id: "finance_cost_explorer_006",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "¿Qué periodo máximo de datos históricos suele mostrar AWS Cost Explorer?",
        options: [
            "30 días",
            "3 meses",
            "12 meses",
            "Hasta 24 meses"
        ],
        correct: 3,
        explanation: "Cost Explorer puede mostrar hasta 24 meses de datos históricos."
    },
    {
        id: "finance_cost_explorer_007",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "hard",
        question: "¿Qué funcionalidad de AWS Cost Explorer ayuda a reducir costes a largo plazo?",
        options: [
            "Alertas de presupuesto",
            "Recomendaciones de ahorro",
            "Exportación automática a S3",
            "Integración con Marketplace"
        ],
        correct: 1,
        explanation: "Cost Explorer incluye recomendaciones de ahorro como RI y Savings Plans."
    },

    {
        id: "finance_cur_005",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "¿Con qué frecuencia se pueden generar los informes de AWS CUR?",
        options: [
            "Solo mensual",
            "Diaria o mensual",
            "Cada hora",
            "Solo bajo demanda"
        ],
        correct: 1,
        explanation: "AWS CUR puede configurarse con entrega diaria o mensual."
    },
    {
        id: "finance_cur_006",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "hard",
        question: "¿Qué ventaja ofrece AWS CUR frente a Cost Explorer?",
        options: [
            "Mejor visualización",
            "Datos mucho más granulares",
            "Alertas en tiempo real",
            "Compra de servicios"
        ],
        correct: 1,
        explanation: "CUR proporciona datos extremadamente detallados a nivel de recurso."
    },
    {
        id: "finance_cur_007",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "¿Qué formato suelen tener los informes de AWS CUR?",
        options: [
            "JSON",
            "CSV o Parquet",
            "XML",
            "TXT"
        ],
        correct: 1,
        explanation: "CUR se entrega normalmente en CSV o Parquet para análisis."
    },

    {
        id: "finance_marketplace_005",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué ventaja clave ofrece AWS Marketplace para empresas?",
        options: [
            "Precios fijos para todos los servicios",
            "Integración de licencias y facturación en AWS",
            "Uso exclusivo on-premise",
            "No requiere cuenta AWS"
        ],
        correct: 1,
        explanation: "Marketplace centraliza licencias y facturación dentro de AWS."
    },
    {
        id: "finance_marketplace_006",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "hard",
        question: "¿Qué modelo de precios es común en AWS Marketplace?",
        options: [
            "Pago único obligatorio",
            "Pago por uso (pay-as-you-go)",
            "Solo licencias perpetuas",
            "Suscripciones gratuitas"
        ],
        correct: 1,
        explanation: "Muchos productos en Marketplace usan el modelo pay-as-you-go."
    },
    {
        id: "finance_marketplace_007",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Quién proporciona los productos disponibles en AWS Marketplace?",
        options: [
            "Exclusivamente AWS",
            "Proveedores terceros y AWS",
            "Solo partners locales",
            "Solo fabricantes de hardware"
        ],
        correct: 1,
        explanation: "Marketplace incluye productos de terceros y de AWS."
    },

    {
        id: "finance_case_005",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "medium",
        question: "Un equipo financiero quiere identificar tendencias de gasto a lo largo del tiempo. ¿Qué servicio usar?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "Cost Explorer es ideal para analizar tendencias de gasto."
    },
    {
        id: "finance_case_006",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "hard",
        question: "Una empresa quiere calcular el coste exacto por proyecto y recurso. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "CUR ofrece el mayor nivel de detalle para cálculos precisos."
    },
    {
        id: "finance_case_007",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "medium",
        question: "¿Qué servicio usarías para recibir alertas antes de alcanzar el 80% del gasto mensual?",
        options: [
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "Budgets permite definir umbrales y alertas anticipadas."
    },
    {
        id: "finance_case_008",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "Una empresa necesita adquirir una solución de monitorización de terceros con facturación unificada. ¿Qué servicio usar?",
        options: [
            "AWS Marketplace",
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR"
        ],
        correct: 0,
        explanation: "Marketplace permite adquirir software de terceros con facturación AWS."
    },

    {
        id: "finance_compare_005",
        category: "cloud_financial_management",
        service: "cost_explorer",
        difficulty: "hard",
        question: "¿Qué servicio es más adecuado para un análisis rápido y visual del gasto?",
        options: [
            "AWS CUR",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correct: 1,
        explanation: "Cost Explorer ofrece análisis visual inmediato."
    },
    {
        id: "finance_compare_006",
        category: "cloud_financial_management",
        service: "cur",
        difficulty: "medium",
        question: "¿Qué servicio se integra mejor con herramientas externas de análisis de datos?",
        options: [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "CUR se exporta a S3 para análisis con herramientas externas."
    },
    {
        id: "finance_trick_001",
        category: "cloud_financial_management",
        service: "budgets",
        difficulty: "hard",
        question: "¿Qué servicio puede ayudarte a prevenir gastos inesperados antes de que ocurran?",
        options: [
            "AWS CUR",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS Marketplace"
        ],
        correct: 2,
        explanation: "Budgets permite alertas proactivas antes de exceder el gasto."
    },
    {
        id: "finance_trick_002",
        category: "cloud_financial_management",
        service: "marketplace",
        difficulty: "medium",
        question: "¿Qué servicio usarías para simplificar la compra de software sin contratos externos?",
        options: [
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS CUR",
            "AWS Marketplace"
        ],
        correct: 3,
        explanation: "Marketplace simplifica la adquisición de software con facturación integrada."
    }
];
