export default [
    {
        id: "appint_sns_001",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Cuál es el principal propósito de Amazon SNS?",
        options: [
            "Orquestar flujos de trabajo con pasos y estados",
            "Enviar notificaciones a múltiples suscriptores mediante un modelo pub/sub",
            "Procesar eventos en streaming de alta frecuencia",
            "Ejecutar código sin servidores"
        ],
        correct: 1,
        explanation: "SNS es un servicio de mensajería pub/sub para enviar notificaciones a múltiples suscriptores (por ejemplo, email, SMS, HTTP/S, SQS, Lambda)."
    },
    {
        id: "appint_sqs_001",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "¿Cuál es el caso de uso típico de Amazon SQS?",
        options: [
            "Difundir un mensaje a múltiples sistemas simultáneamente",
            "Desacoplar componentes de una aplicación mediante colas de mensajes",
            "Orquestar procesos con reintentos y estados",
            "Enrutar eventos entre múltiples productores y destinos"
        ],
        correct: 1,
        explanation: "SQS es una cola de mensajes que ayuda a desacoplar productores y consumidores, amortiguando picos de carga."
    },
    {
        id: "appint_eventbridge_001",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "¿Qué describe mejor a Amazon EventBridge?",
        options: [
            "Un servicio de colas punto a punto",
            "Un bus de eventos para enrutar eventos entre servicios y aplicaciones",
            "Un servicio de notificaciones por SMS y email",
            "Un motor de orquestación de tareas humanas"
        ],
        correct: 1,
        explanation: "EventBridge actúa como un bus de eventos para recibir, filtrar y enrutar eventos a destinos (targets) según reglas."
    },
    {
        id: "appint_stepfunctions_001",
        category: "application_integration",
        service: "step_functions",
        difficulty: "medium",
        question: "¿Para qué se utiliza principalmente AWS Step Functions?",
        options: [
            "Almacenar mensajes de forma duradera",
            "Enviar notificaciones a usuarios finales",
            "Orquestar flujos de trabajo entre múltiples servicios AWS",
            "Publicar eventos desde aplicaciones SaaS"
        ],
        correct: 2,
        explanation: "Step Functions permite coordinar pasos (estados) y manejar reintentos/errores en flujos de trabajo."
    },
    {
        id: "appint_sns_002",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "Un sistema necesita enviar el mismo evento a varios consumidores (por ejemplo, email al equipo y además disparar procesos en backend). ¿Qué servicio encaja mejor?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "AWS Step Functions",
            "Amazon EventBridge"
        ],
        correct: 1,
        explanation: "SNS (pub/sub) permite fan-out: un mensaje publicado puede entregarse a múltiples suscriptores."
    },
    {
        id: "appint_sqs_002",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "Una aplicación tiene picos de tráfico y quieres evitar que el backend se caiga, almacenando peticiones para procesarlas después. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SQS desacopla y actúa como buffer, permitiendo que los consumidores procesen a su ritmo."
    },
    {
        id: "appint_eventbridge_002",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "Una empresa quiere reaccionar a eventos de servicios AWS (por ejemplo, cambios en estados) y enrutar esos eventos a diferentes destinos según reglas. ¿Qué servicio usar?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 2,
        explanation: "EventBridge está diseñado para recibir eventos (incluidos de AWS) y enrutar a targets basándose en reglas."
    },
    {
        id: "appint_stepfunctions_002",
        category: "application_integration",
        service: "step_functions",
        difficulty: "hard",
        question: "Necesitas un flujo con varios pasos: validar pedido, cobrar, reservar stock, y si falla el cobro hacer compensación. ¿Qué servicio es más adecuado?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 3,
        explanation: "Step Functions permite orquestar pasos con control de errores, reintentos y lógica de compensación."
    },
    {
        id: "appint_compare_001",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "¿Cuál es una diferencia clave entre Amazon SNS y Amazon SQS?",
        options: [
            "SNS es para colas y SQS para notificaciones",
            "SNS es pub/sub (fan-out) y SQS es una cola punto a punto para desacoplar productores/consumidores",
            "SQS solo funciona con email y SMS, SNS no",
            "SNS almacena mensajes más tiempo que SQS"
        ],
        correct: 1,
        explanation: "SNS distribuye a múltiples suscriptores, SQS mantiene mensajes en una cola para consumo asíncrono."
    },
    {
        id: "appint_compare_002",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "hard",
        question: "¿Qué escenario encaja mejor con EventBridge en lugar de SNS?",
        options: [
            "Enviar una alerta por SMS a un usuario",
            "Difundir un mensaje a múltiples colas SQS",
            "Enrutar eventos a distintos destinos basándose en contenido del evento con reglas",
            "Poner en cola tareas para procesarlas después"
        ],
        correct: 2,
        explanation: "EventBridge destaca en enrutado basado en reglas y contenido del evento (event routing)."
    },
    {
        id: "appint_sns_003",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Cuál de las siguientes opciones es un caso típico de Amazon SNS?",
        options: [
            "Orquestar un flujo de aprobación con múltiples estados",
            "Enviar notificaciones (por ejemplo, email/SMS) cuando ocurre un evento",
            "Procesar mensajes en orden estricto con un único consumidor",
            "Ejecutar consultas SQL sobre S3"
        ],
        correct: 1,
        explanation: "SNS se usa comúnmente para notificaciones (email, SMS, etc.) y distribución pub/sub."
    },
    {
        id: "appint_sqs_003",
        category: "application_integration",
        service: "sqs",
        difficulty: "hard",
        question: "Una arquitectura de microservicios necesita comunicación asíncrona y garantizar que los mensajes no se pierdan si el consumidor está caído temporalmente. ¿Qué servicio usar?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SQS almacena los mensajes hasta que el consumidor los procese, mejorando resiliencia."
    },
    {
        id: "appint_eventbridge_003",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "¿Qué permite hacer una 'rule' en Amazon EventBridge?",
        options: [
            "Enviar emails a usuarios finales",
            "Filtrar eventos y enviarlos a un destino (target)",
            "Almacenar mensajes en una cola de forma duradera",
            "Crear un DAG de tareas con reintentos"
        ],
        correct: 1,
        explanation: "Las reglas de EventBridge filtran/seleccionan eventos y los dirigen a targets."
    },
    {
        id: "appint_stepfunctions_003",
        category: "application_integration",
        service: "step_functions",
        difficulty: "medium",
        question: "¿Qué capacidad es especialmente útil en Step Functions para flujos robustos?",
        options: [
            "Búsqueda de texto completo",
            "Reintentos y manejo de errores entre pasos",
            "Almacenamiento de objetos",
            "Consultas SQL serverless"
        ],
        correct: 1,
        explanation: "Step Functions permite definir reintentos, timeouts y rutas de error/compensación."
    },
    {
        id: "appint_case_001",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "Un e-commerce quiere enviar confirmaciones de pedido por email y SMS cuando se completa una compra. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 0,
        explanation: "SNS es ideal para notificaciones a múltiples protocolos como email y SMS."
    },
    {
        id: "appint_case_002",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "Un servicio genera tareas de procesamiento de imágenes; los workers deben procesarlas asíncronamente y escalar según carga. ¿Qué servicio usar como buffer de tareas?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 0,
        explanation: "SQS es una cola para distribuir trabajo asíncrono a consumidores/workers."
    },
    {
        id: "appint_case_003",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "hard",
        question: "Una empresa integra varios sistemas y quiere disparar acciones diferentes según el tipo de evento (por ejemplo, 'OrderCreated', 'OrderCancelled') sin acoplar servicios entre sí. ¿Qué servicio es mejor?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 2,
        explanation: "EventBridge permite un modelo event-driven con enrutado por reglas basado en el contenido del evento."
    },
    {
        id: "appint_case_004",
        category: "application_integration",
        service: "step_functions",
        difficulty: "hard",
        question: "Un proceso requiere varios pasos con decisiones: si el pago falla, reintentar; si vuelve a fallar, cancelar pedido y notificar. ¿Qué servicio es el más adecuado para modelar esto?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 3,
        explanation: "Step Functions modela flujos con branching, reintentos, timeouts y rutas de error."
    },
    {
        id: "appint_multi_001",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "Quieres enviar un mensaje a múltiples consumidores y que cada uno lo procese a su ritmo usando colas. ¿Cuál es el patrón más típico?",
        options: [
            "SQS -> SNS (cola publica a tópico)",
            "SNS -> múltiples colas SQS (fan-out)",
            "EventBridge -> una cola SQS única para todo",
            "Step Functions -> SNS -> EventBridge"
        ],
        correct: 1,
        explanation: "El patrón fan-out clásico es SNS publicando a múltiples colas SQS, una por consumidor."
    },
    {
        id: "appint_multi_002",
        category: "application_integration",
        service: "step_functions",
        difficulty: "medium",
        question: "¿Qué servicio elegirías si necesitas visibilidad del estado de un proceso (qué paso va, cuánto tarda, si falló) de forma nativa?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 3,
        explanation: "Step Functions ofrece seguimiento del flujo, estados, historial de ejecución y manejo de errores."
    },
    {
        id: "appint_sns_004",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Qué característica define mejor el modelo de mensajería de Amazon SNS?",
        options: [
            "Punto a punto con un único consumidor",
            "Publicación/suscripción (pub/sub)",
            "Procesamiento por lotes",
            "Streaming continuo de eventos"
        ],
        correct: 1,
        explanation: "SNS utiliza un modelo pub/sub donde un mensaje puede ser entregado a múltiples suscriptores."
    },
    {
        id: "appint_sns_005",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Cuál de los siguientes puede ser un suscriptor de un tópico SNS?",
        options: [
            "Amazon EC2 únicamente",
            "Amazon S3",
            "Amazon SQS o AWS Lambda",
            "Amazon Redshift"
        ],
        correct: 2,
        explanation: "SNS puede enviar mensajes a SQS, Lambda, HTTP/S, email, SMS, entre otros."
    },
    {
        id: "appint_sqs_004",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "¿Qué ocurre con un mensaje en SQS después de ser leído por un consumidor?",
        options: [
            "Se elimina automáticamente",
            "Se mueve a SNS",
            "Se oculta temporalmente durante el visibility timeout",
            "Se duplica para otros consumidores"
        ],
        correct: 2,
        explanation: "Tras ser leído, el mensaje queda oculto durante el visibility timeout hasta que se elimina explícitamente."
    },
    {
        id: "appint_sqs_005",
        category: "application_integration",
        service: "sqs",
        difficulty: "hard",
        question: "¿Qué ventaja principal ofrece Amazon SQS frente a una comunicación síncrona entre servicios?",
        options: [
            "Menor latencia",
            "Mayor acoplamiento",
            "Mayor resiliencia y desacoplamiento",
            "Ejecución en tiempo real garantizada"
        ],
        correct: 2,
        explanation: "SQS desacopla servicios y aumenta la resiliencia ante picos o fallos temporales."
    },
    {
        id: "appint_eventbridge_004",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "¿Qué tipo de arquitectura promueve Amazon EventBridge?",
        options: [
            "Monolítica",
            "Cliente-servidor tradicional",
            "Event-driven",
            "Batch processing"
        ],
        correct: 2,
        explanation: "EventBridge facilita arquitecturas event-driven basadas en eventos."
    },
    {
        id: "appint_eventbridge_005",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "¿Qué elemento define a dónde se envía un evento en EventBridge?",
        options: [
            "Topic",
            "Queue",
            "Rule",
            "State"
        ],
        correct: 2,
        explanation: "Las rules de EventBridge determinan qué eventos se envían y a qué targets."
    },
    {
        id: "appint_stepfunctions_004",
        category: "application_integration",
        service: "step_functions",
        difficulty: "medium",
        question: "¿Qué concepto utiliza Step Functions para definir cada paso de un flujo?",
        options: [
            "Task",
            "State",
            "Queue",
            "Event"
        ],
        correct: 1,
        explanation: "Los flujos de Step Functions se definen mediante estados (states)."
    },
    {
        id: "appint_stepfunctions_005",
        category: "application_integration",
        service: "step_functions",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece Step Functions frente a manejar lógica de orquestación directamente en código?",
        options: [
            "Mayor latencia",
            "Menor visibilidad",
            "Gestión visual de flujos y estados",
            "Mayor dependencia del desarrollador"
        ],
        correct: 2,
        explanation: "Step Functions ofrece visibilidad, control de errores y reintentos sin lógica compleja en el código."
    },
    {
        id: "appint_compare_003",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Qué servicio usarías para enviar una alerta inmediata a múltiples equipos cuando ocurre un incidente?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SNS es ideal para alertas inmediatas a múltiples suscriptores."
    },
    {
        id: "appint_compare_004",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "¿Qué servicio es más adecuado para procesar trabajos en segundo plano de forma asíncrona?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SQS se usa comúnmente para jobs en background y procesamiento asíncrono."
    },
    {
        id: "appint_case_007",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "Una empresa quiere desacoplar microservicios usando eventos sin que los productores conozcan a los consumidores. ¿Qué servicio usar?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 2,
        explanation: "EventBridge desacopla productores y consumidores mediante un bus de eventos."
    },
    {
        id: "appint_case_008",
        category: "application_integration",
        service: "sqs",
        difficulty: "hard",
        question: "Un consumidor falla repetidamente al procesar ciertos mensajes. ¿Qué patrón se suele usar con SQS para aislar estos mensajes?",
        options: [
            "Fan-out",
            "Dead-letter queue (DLQ)",
            "Retry infinito",
            "Event filtering"
        ],
        correct: 1,
        explanation: "Las DLQ permiten aislar mensajes problemáticos para análisis posterior."
    },
    {
        id: "appint_case_009",
        category: "application_integration",
        service: "sns",
        difficulty: "medium",
        question: "¿Qué servicio usarías para notificar a usuarios finales mediante SMS cuando ocurre un evento?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "SNS soporta notificaciones SMS de forma nativa."
    },
    {
        id: "appint_case_010",
        category: "application_integration",
        service: "step_functions",
        difficulty: "hard",
        question: "Un flujo requiere pasos secuenciales, paralelos y decisiones condicionales. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 3,
        explanation: "Step Functions soporta pasos secuenciales, paralelos y branching."
    },
    {
        id: "appint_case_011",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "medium",
        question: "¿Qué servicio permite integrar fácilmente eventos de servicios AWS y aplicaciones SaaS?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 2,
        explanation: "EventBridge se integra con servicios AWS y SaaS para eventos."
    },
    {
        id: "appint_case_012",
        category: "application_integration",
        service: "sqs",
        difficulty: "medium",
        question: "¿Qué característica de SQS ayuda a manejar picos de carga?",
        options: [
            "Envío síncrono",
            "Escalado automático de colas",
            "Procesamiento en tiempo real",
            "Búsqueda de mensajes"
        ],
        correct: 1,
        explanation: "SQS escala automáticamente para manejar grandes volúmenes de mensajes."
    },
    {
        id: "appint_case_013",
        category: "application_integration",
        service: "sns",
        difficulty: "hard",
        question: "¿Qué patrón combina SNS y SQS para entregar el mismo mensaje a múltiples consumidores de forma independiente?",
        options: [
            "Point-to-point",
            "Batch processing",
            "Fan-out",
            "Request-response"
        ],
        correct: 2,
        explanation: "El patrón fan-out usa SNS para publicar y múltiples colas SQS para consumir."
    },
    {
        id: "appint_case_014",
        category: "application_integration",
        service: "step_functions",
        difficulty: "medium",
        question: "¿Qué servicio proporciona un historial visual de ejecuciones y estados?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        correct: 3,
        explanation: "Step Functions muestra el historial y estado de cada ejecución."
    },
    {
        id: "appint_case_015",
        category: "application_integration",
        service: "eventbridge",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece EventBridge frente a SNS en arquitecturas complejas?",
        options: [
            "Menor coste fijo",
            "Enrutado basado en contenido del evento",
            "Soporte SMS nativo",
            "Colas persistentes"
        ],
        correct: 1,
        explanation: "EventBridge permite enrutar eventos según su contenido mediante reglas."
    }
];
