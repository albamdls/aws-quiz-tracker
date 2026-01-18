export default [
    {
        id: "compute_ec2_001",
        category: "compute_containers",
        service: "ec2",
        difficulty: "medium",
        question: "¿Qué es Amazon EC2?",
        options: [
            "Un servicio serverless para ejecutar funciones",
            "Un servicio de máquinas virtuales en la nube",
            "Un orquestador de contenedores",
            "Un servicio de almacenamiento"
        ],
        correct: 1,
        explanation: "Amazon EC2 proporciona instancias (máquinas virtuales) con control total del sistema operativo."
    },
    {
        id: "compute_ec2_002",
        category: "compute_containers",
        service: "ec2",
        difficulty: "medium",
        question: "¿Qué modelo de precios permite pagar solo por el tiempo de ejecución de una instancia EC2?",
        options: [
            "Pago anual fijo",
            "Pago por uso (On-Demand)",
            "Licencia perpetua",
            "Suscripción obligatoria"
        ],
        correct: 1,
        explanation: "Las instancias On-Demand se pagan solo por el tiempo que están en ejecución."
    },
    {
        id: "compute_ec2_003",
        category: "compute_containers",
        service: "ec2",
        difficulty: "hard",
        question: "¿Qué opción de EC2 es más adecuada para cargas de trabajo flexibles y tolerantes a interrupciones?",
        options: [
            "Reserved Instances",
            "Dedicated Hosts",
            "Spot Instances",
            "On-Demand Instances"
        ],
        correct: 2,
        explanation: "Las Spot Instances ofrecen grandes descuentos a cambio de posibles interrupciones."
    },

    {
        id: "compute_batch_001",
        category: "compute_containers",
        service: "batch",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de AWS Batch?",
        options: [
            "Ejecutar aplicaciones web",
            "Ejecutar trabajos batch de forma gestionada",
            "Gestionar contenedores Kubernetes",
            "Ejecutar funciones serverless"
        ],
        correct: 1,
        explanation: "AWS Batch permite ejecutar trabajos batch sin gestionar infraestructura."
    },
    {
        id: "compute_batch_002",
        category: "compute_containers",
        service: "batch",
        difficulty: "medium",
        question: "AWS Batch es especialmente útil para:",
        options: [
            "Aplicaciones en tiempo real",
            "Procesamiento de grandes volúmenes de trabajos batch",
            "Dashboards interactivos",
            "Bases de datos relacionales"
        ],
        correct: 1,
        explanation: "Batch está orientado a cargas de trabajo batch y procesamiento masivo."
    },

    {
        id: "compute_beanstalk_001",
        category: "compute_containers",
        service: "elastic_beanstalk",
        difficulty: "medium",
        question: "¿Qué ofrece AWS Elastic Beanstalk?",
        options: [
            "Control total del hardware",
            "Despliegue automático de aplicaciones sin gestionar infraestructura",
            "Orquestación de contenedores avanzada",
            "Ejecución de funciones event-driven"
        ],
        correct: 1,
        explanation: "Elastic Beanstalk simplifica el despliegue y gestión de aplicaciones."
    },
    {
        id: "compute_beanstalk_002",
        category: "compute_containers",
        service: "elastic_beanstalk",
        difficulty: "medium",
        question: "¿Qué nivel de control ofrece Elastic Beanstalk?",
        options: [
            "Ninguno",
            "Control completo del hardware",
            "Control limitado mientras AWS gestiona la infraestructura",
            "Solo control del frontend"
        ],
        correct: 2,
        explanation: "Elastic Beanstalk abstrae la infraestructura, pero permite cierta configuración."
    },

    {
        id: "compute_lightsail_001",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "medium",
        question: "¿Para qué tipo de usuarios está pensado Amazon Lightsail?",
        options: [
            "Grandes arquitecturas empresariales",
            "Usuarios que buscan simplicidad y costes predecibles",
            "Cargas de trabajo de big data",
            "Orquestación Kubernetes avanzada"
        ],
        correct: 1,
        explanation: "Lightsail está diseñado para simplicidad y precios predecibles."
    },
    {
        id: "compute_lightsail_002",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "medium",
        question: "¿Qué ventaja clave ofrece Amazon Lightsail?",
        options: [
            "Escalado infinito",
            "Precio mensual fijo",
            "Control total de red avanzada",
            "Integración exclusiva on-premise"
        ],
        correct: 1,
        explanation: "Lightsail ofrece precios simples y predecibles."
    },

    {
        id: "compute_outposts_001",
        category: "compute_containers",
        service: "outposts",
        difficulty: "hard",
        question: "¿Cuál es el principal objetivo de AWS Outposts?",
        options: [
            "Ejecutar AWS solo en la nube pública",
            "Llevar infraestructura de AWS al on-premise",
            "Reducir costes de EC2",
            "Ejecutar funciones serverless"
        ],
        correct: 1,
        explanation: "Outposts permite ejecutar servicios AWS en centros de datos propios."
    },

    {
        id: "compute_ecr_001",
        category: "compute_containers",
        service: "ecr",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon Elastic Container Registry (ECR)?",
        options: [
            "Ejecutar contenedores",
            "Almacenar imágenes de contenedores",
            "Orquestar contenedores",
            "Gestionar máquinas virtuales"
        ],
        correct: 1,
        explanation: "ECR es un registro de imágenes de contenedores."
    },

    {
        id: "compute_ecs_001",
        category: "compute_containers",
        service: "ecs",
        difficulty: "medium",
        question: "¿Qué es Amazon ECS?",
        options: [
            "Un registro de imágenes",
            "Un orquestador de contenedores gestionado por AWS",
            "Un servicio de máquinas virtuales",
            "Un servicio serverless de funciones"
        ],
        correct: 1,
        explanation: "ECS permite ejecutar y gestionar contenedores Docker."
    },

    {
        id: "compute_eks_001",
        category: "compute_containers",
        service: "eks",
        difficulty: "medium",
        question: "¿Qué diferencia principal existe entre ECS y EKS?",
        options: [
            "ECS usa Kubernetes y EKS no",
            "EKS está basado en Kubernetes",
            "ECS solo funciona on-premise",
            "EKS no soporta contenedores"
        ],
        correct: 1,
        explanation: "EKS es el servicio gestionado de Kubernetes en AWS."
    },

    {
        id: "compute_fargate_001",
        category: "compute_containers",
        service: "fargate",
        difficulty: "medium",
        question: "¿Qué ventaja principal ofrece AWS Fargate?",
        options: [
            "Gestión manual de servidores",
            "Ejecución de contenedores sin gestionar servidores",
            "Solo funciona con EC2",
            "Solo sirve para batch"
        ],
        correct: 1,
        explanation: "Fargate permite ejecutar contenedores sin administrar infraestructura."
    },

    {
        id: "compute_lambda_001",
        category: "compute_containers",
        service: "lambda",
        difficulty: "medium",
        question: "¿Cuál es el modelo de ejecución de AWS Lambda?",
        options: [
            "Máquinas virtuales persistentes",
            "Funciones serverless ejecutadas bajo demanda",
            "Contenedores siempre activos",
            "Jobs batch programados"
        ],
        correct: 1,
        explanation: "Lambda ejecuta código bajo demanda sin servidores."
    },
    {
        id: "compute_lambda_002",
        category: "compute_containers",
        service: "lambda",
        difficulty: "medium",
        question: "¿Cómo se factura AWS Lambda?",
        options: [
            "Por hora de servidor",
            "Por número de usuarios",
            "Por número de ejecuciones y duración",
            "Por licencia anual"
        ],
        correct: 2,
        explanation: "Lambda se factura por invocaciones y tiempo de ejecución."
    },

    {
        id: "compute_case_001",
        category: "compute_containers",
        service: "lambda",
        difficulty: "hard",
        question: "Una aplicación necesita ejecutar código solo cuando ocurre un evento y minimizar costes. ¿Qué servicio es más adecuado?",
        options: [
            "Amazon EC2",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon Lightsail"
        ],
        correct: 2,
        explanation: "Lambda permite ejecutar código solo cuando es necesario y pagar solo por uso."
    },
    {
        id: "compute_case_002",
        category: "compute_containers",
        service: "ecs",
        difficulty: "medium",
        question: "Una empresa quiere ejecutar contenedores Docker sin usar Kubernetes. ¿Qué servicio elegir?",
        options: [
            "Amazon EKS",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon Lightsail"
        ],
        correct: 1,
        explanation: "ECS es el orquestador nativo de contenedores de AWS."
    },
    {
        id: "compute_case_003",
        category: "compute_containers",
        service: "fargate",
        difficulty: "medium",
        question: "¿Qué servicio usarías para ejecutar contenedores sin gestionar nodos?",
        options: [
            "Amazon EC2",
            "Amazon EKS",
            "AWS Fargate",
            "Amazon Lightsail"
        ],
        correct: 2,
        explanation: "Fargate elimina la gestión de servidores para contenedores."
    },
    {
        id: "compute_ec2_001",
        category: "compute_containers",
        service: "ec2",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon EC2?",
        options: [
            "Ejecutar funciones serverless",
            "Proporcionar máquinas virtuales escalables en la nube",
            "Orquestar contenedores Kubernetes",
            "Almacenar objetos"
        ],
        correct: 1,
        explanation: "Amazon EC2 permite lanzar y gestionar máquinas virtuales con control del sistema operativo."
    },
    {
        id: "compute_ec2_002",
        category: "compute_containers",
        service: "ec2",
        difficulty: "medium",
        question: "¿Qué modelo de precios de EC2 permite pagar solo por el tiempo de uso sin compromiso?",
        options: [
            "Reserved Instances",
            "Savings Plans",
            "On-Demand Instances",
            "Dedicated Hosts"
        ],
        correct: 2,
        explanation: "Las instancias On-Demand se pagan solo por el tiempo que están en ejecución."
    },
    {
        id: "compute_ec2_003",
        category: "compute_containers",
        service: "ec2",
        difficulty: "hard",
        question: "¿Qué tipo de instancia EC2 ofrece el mayor descuento a cambio de posibles interrupciones?",
        options: [
            "On-Demand",
            "Reserved",
            "Spot",
            "Dedicated"
        ],
        correct: 2,
        explanation: "Las Spot Instances son más baratas pero pueden ser interrumpidas por AWS."
    },

    {
        id: "compute_lambda_001",
        category: "compute_containers",
        service: "lambda",
        difficulty: "medium",
        question: "¿Qué tipo de servicio es AWS Lambda?",
        options: [
            "Máquinas virtuales",
            "Servicio serverless basado en eventos",
            "Orquestador de contenedores",
            "Servicio de almacenamiento"
        ],
        correct: 1,
        explanation: "Lambda ejecuta código bajo demanda sin necesidad de gestionar servidores."
    },
    {
        id: "compute_lambda_002",
        category: "compute_containers",
        service: "lambda",
        difficulty: "medium",
        question: "¿Cómo se factura AWS Lambda?",
        options: [
            "Por hora de servidor",
            "Por número de usuarios",
            "Por número de invocaciones y duración",
            "Por licencia mensual"
        ],
        correct: 2,
        explanation: "Lambda se factura por ejecuciones y tiempo de ejecución."
    },

    {
        id: "compute_ecs_001",
        category: "compute_containers",
        service: "ecs",
        difficulty: "medium",
        question: "¿Qué es Amazon ECS?",
        options: [
            "Un registro de contenedores",
            "Un orquestador de contenedores gestionado por AWS",
            "Un servicio serverless",
            "Un sistema de colas"
        ],
        correct: 1,
        explanation: "ECS es el servicio de AWS para ejecutar y gestionar contenedores Docker."
    },
    {
        id: "compute_ecr_001",
        category: "compute_containers",
        service: "ecr",
        difficulty: "medium",
        question: "¿Para qué se utiliza Amazon Elastic Container Registry (ECR)?",
        options: [
            "Ejecutar contenedores",
            "Orquestar contenedores",
            "Almacenar imágenes de contenedores",
            "Gestionar clústeres"
        ],
        correct: 2,
        explanation: "ECR es un registro privado para almacenar imágenes de contenedores."
    },

    {
        id: "compute_eks_001",
        category: "compute_containers",
        service: "eks",
        difficulty: "medium",
        question: "¿Qué tecnología utiliza Amazon EKS?",
        options: [
            "Docker Swarm",
            "Apache Mesos",
            "Kubernetes",
            "Nomad"
        ],
        correct: 2,
        explanation: "EKS es el servicio gestionado de Kubernetes en AWS."
    },
    {
        id: "compute_eks_002",
        category: "compute_containers",
        service: "eks",
        difficulty: "hard",
        question: "¿Por qué una empresa elegiría EKS en lugar de ECS?",
        options: [
            "Porque ECS es open-source",
            "Porque EKS usa Kubernetes estándar",
            "Porque ECS no escala",
            "Porque EKS es más barato siempre"
        ],
        correct: 1,
        explanation: "EKS permite usar Kubernetes estándar y portabilidad entre entornos."
    },

    {
        id: "compute_fargate_001",
        category: "compute_containers",
        service: "fargate",
        difficulty: "medium",
        question: "¿Qué ventaja clave ofrece AWS Fargate?",
        options: [
            "Gestión manual de servidores",
            "Ejecución de contenedores sin gestionar infraestructura",
            "Mayor control del hardware",
            "Solo funciona con EC2"
        ],
        correct: 1,
        explanation: "Fargate elimina la necesidad de administrar servidores para contenedores."
    },

    {
        id: "compute_batch_001",
        category: "compute_containers",
        service: "batch",
        difficulty: "medium",
        question: "¿Cuál es el principal caso de uso de AWS Batch?",
        options: [
            "Aplicaciones web",
            "Procesamiento de trabajos batch",
            "Streaming de datos",
            "Funciones serverless"
        ],
        correct: 1,
        explanation: "AWS Batch se utiliza para ejecutar trabajos batch a gran escala."
    },

    {
        id: "compute_beanstalk_001",
        category: "compute_containers",
        service: "elastic_beanstalk",
        difficulty: "medium",
        question: "¿Qué proporciona AWS Elastic Beanstalk?",
        options: [
            "Infraestructura sin automatización",
            "Despliegue automático de aplicaciones",
            "Solo contenedores",
            "Solo funciones Lambda"
        ],
        correct: 1,
        explanation: "Elastic Beanstalk simplifica el despliegue y la gestión de aplicaciones."
    },

    {
        id: "compute_lightsail_001",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "medium",
        question: "¿Qué caracteriza a Amazon Lightsail?",
        options: [
            "Alta complejidad",
            "Precio fijo y simplicidad",
            "Uso exclusivo empresarial",
            "Gestión avanzada de redes"
        ],
        correct: 1,
        explanation: "Lightsail ofrece simplicidad y precios predecibles."
    },

    {
        id: "compute_outposts_001",
        category: "compute_containers",
        service: "outposts",
        difficulty: "hard",
        question: "¿Para qué se utiliza AWS Outposts?",
        options: [
            "Ejecutar AWS solo en la nube pública",
            "Llevar infraestructura AWS al on-premise",
            "Reducir costes de Lambda",
            "Ejecutar contenedores serverless"
        ],
        correct: 1,
        explanation: "Outposts extiende la infraestructura AWS a centros de datos locales."
    },

    {
        id: "compute_case_001",
        category: "compute_containers",
        service: "lambda",
        difficulty: "medium",
        question: "Una aplicación necesita ejecutar código solo cuando ocurre un evento y minimizar costes. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon EC2",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon Lightsail"
        ],
        correct: 2,
        explanation: "Lambda ejecuta código bajo demanda y solo cobra por uso."
    },
    {
        id: "compute_case_002",
        category: "compute_containers",
        service: "ecs",
        difficulty: "medium",
        question: "Una empresa quiere ejecutar contenedores Docker sin usar Kubernetes. ¿Qué servicio elegir?",
        options: [
            "Amazon EKS",
            "Amazon ECS",
            "AWS Lambda",
            "Amazon Batch"
        ],
        correct: 1,
        explanation: "ECS es el orquestador nativo de contenedores de AWS."
    },
    {
        id: "compute_case_003",
        category: "compute_containers",
        service: "fargate",
        difficulty: "medium",
        question: "¿Qué servicio usarías para ejecutar contenedores sin administrar nodos?",
        options: [
            "Amazon EC2",
            "Amazon EKS",
            "AWS Fargate",
            "Amazon Lightsail"
        ],
        correct: 2,
        explanation: "Fargate abstrae completamente la gestión de servidores."
    },
    {
        id: "compute_case_004",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "medium",
        question: "Un desarrollador quiere lanzar una web sencilla con costes predecibles. ¿Qué servicio usar?",
        options: [
            "Amazon EC2",
            "Amazon Lightsail",
            "Amazon EKS",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "Lightsail es ideal para proyectos simples con precios fijos."
    },
    {
        id: "compute_hard_001",
        category: "compute_containers",
        service: "lambda",
        difficulty: "hard",
        question: "¿Cuál es una limitación clave de AWS Lambda frente a Amazon EC2?",
        options: [
            "No puede integrarse con otros servicios AWS",
            "Tiene un tiempo máximo de ejecución por invocación",
            "No escala automáticamente",
            "Requiere administrar el sistema operativo"
        ],
        correct: 1,
        explanation: "Lambda tiene un tiempo máximo de ejecución por función, a diferencia de EC2."
    },
    {
        id: "compute_hard_002",
        category: "compute_containers",
        service: "ec2",
        difficulty: "hard",
        question: "¿Qué opción de EC2 ofrece mayor control sobre licencias y cumplimiento normativo?",
        options: [
            "Spot Instances",
            "On-Demand Instances",
            "Dedicated Hosts",
            "Reserved Instances"
        ],
        correct: 2,
        explanation: "Dedicated Hosts permiten control total del hardware físico y licencias."
    },
    {
        id: "compute_hard_003",
        category: "compute_containers",
        service: "fargate",
        difficulty: "hard",
        question: "¿Qué responsabilidad elimina AWS Fargate en comparación con ECS sobre EC2?",
        options: [
            "Definir contenedores",
            "Gestionar el clúster de control",
            "Gestionar instancias y capacidad de cómputo",
            "Configurar redes"
        ],
        correct: 2,
        explanation: "Fargate elimina la gestión de servidores e instancias EC2."
    },
    {
        id: "compute_hard_004",
        category: "compute_containers",
        service: "ecs",
        difficulty: "hard",
        question: "¿Cuál es una diferencia clave entre Amazon ECS y Amazon EKS?",
        options: [
            "ECS es serverless y EKS no",
            "EKS está basado en Kubernetes estándar",
            "ECS no soporta contenedores Docker",
            "EKS no escala automáticamente"
        ],
        correct: 1,
        explanation: "EKS usa Kubernetes estándar; ECS es un orquestador propio de AWS."
    },
    {
        id: "compute_hard_005",
        category: "compute_containers",
        service: "eks",
        difficulty: "hard",
        question: "¿Por qué EKS suele considerarse más complejo que ECS?",
        options: [
            "Porque no soporta integración con AWS",
            "Porque requiere conocimientos de Kubernetes",
            "Porque no escala",
            "Porque no es gestionado"
        ],
        correct: 1,
        explanation: "EKS requiere conocimientos de Kubernetes, lo que añade complejidad."
    },
    {
        id: "compute_hard_006",
        category: "compute_containers",
        service: "batch",
        difficulty: "hard",
        question: "¿Qué tipo de carga de trabajo encaja peor con AWS Batch?",
        options: [
            "Procesamiento científico",
            "Renderizado masivo",
            "Aplicaciones web en tiempo real",
            "Procesamiento de datos offline"
        ],
        correct: 2,
        explanation: "AWS Batch no está diseñado para aplicaciones web en tiempo real."
    },
    {
        id: "compute_hard_007",
        category: "compute_containers",
        service: "elastic_beanstalk",
        difficulty: "hard",
        question: "¿Qué afirmación es correcta sobre AWS Elastic Beanstalk?",
        options: [
            "No permite acceder a recursos subyacentes",
            "Gestiona infraestructura pero permite personalización",
            "Solo funciona con contenedores",
            "Es un servicio serverless"
        ],
        correct: 1,
        explanation: "Beanstalk gestiona la infraestructura pero permite cierto control."
    },
    {
        id: "compute_hard_008",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "hard",
        question: "¿Cuál es una limitación importante de Amazon Lightsail?",
        options: [
            "No permite ejecutar aplicaciones",
            "Menor flexibilidad y opciones avanzadas que EC2",
            "No tiene acceso a Internet",
            "No permite escalar"
        ],
        correct: 1,
        explanation: "Lightsail prioriza simplicidad sobre flexibilidad avanzada."
    },
    {
        id: "compute_hard_009",
        category: "compute_containers",
        service: "outposts",
        difficulty: "hard",
        question: "¿Qué problema principal resuelve AWS Outposts?",
        options: [
            "Reducir latencia para aplicaciones serverless",
            "Ejecutar AWS en ubicaciones on-premise",
            "Eliminar costes de EC2",
            "Sustituir Kubernetes"
        ],
        correct: 1,
        explanation: "Outposts lleva infraestructura AWS a centros de datos locales."
    },
    {
        id: "compute_hard_010",
        category: "compute_containers",
        service: "ecr",
        difficulty: "hard",
        question: "¿Qué responsabilidad NO cubre Amazon ECR?",
        options: [
            "Almacenar imágenes Docker",
            "Control de acceso a imágenes",
            "Ejecutar contenedores",
            "Integración con ECS y EKS"
        ],
        correct: 2,
        explanation: "ECR almacena imágenes, pero no ejecuta contenedores."
    },
    {
        id: "compute_hard_011",
        category: "compute_containers",
        service: "lambda",
        difficulty: "hard",
        question: "¿En qué escenario AWS Lambda NO es la mejor opción?",
        options: [
            "Procesamiento event-driven",
            "Ejecución esporádica",
            "Procesos de larga duración",
            "Integración con servicios AWS"
        ],
        correct: 2,
        explanation: "Lambda no está pensado para procesos largos y persistentes."
    },
    {
        id: "compute_hard_012",
        category: "compute_containers",
        service: "ec2",
        difficulty: "hard",
        question: "¿Qué opción de EC2 ofrece mayor ahorro para cargas estables a largo plazo?",
        options: [
            "On-Demand",
            "Spot",
            "Reserved Instances",
            "Dedicated Hosts"
        ],
        correct: 2,
        explanation: "Las Reserved Instances ofrecen ahorro para cargas previsibles."
    },
    {
        id: "compute_hard_013",
        category: "compute_containers",
        service: "fargate",
        difficulty: "hard",
        question: "¿Qué combinación es correcta?",
        options: [
            "Fargate solo funciona con Lambda",
            "Fargate puede usarse con ECS y EKS",
            "Fargate requiere EC2 gestionado por el cliente",
            "Fargate solo soporta Kubernetes"
        ],
        correct: 1,
        explanation: "Fargate funciona tanto con ECS como con EKS."
    },
    {
        id: "compute_hard_014",
        category: "compute_containers",
        service: "ecs",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece ECS frente a EKS para principiantes?",
        options: [
            "Mayor compatibilidad multi-cloud",
            "Menor curva de aprendizaje",
            "Mayor control del plano de control",
            "Estándar open-source"
        ],
        correct: 1,
        explanation: "ECS es más sencillo y tiene menor curva de aprendizaje."
    },
    {
        id: "compute_hard_015",
        category: "compute_containers",
        service: "eks",
        difficulty: "hard",
        question: "¿Qué tipo de empresa suele preferir EKS?",
        options: [
            "Startups sin experiencia en contenedores",
            "Empresas con experiencia previa en Kubernetes",
            "Proyectos pequeños y simples",
            "Aplicaciones monolíticas"
        ],
        correct: 1,
        explanation: "EKS es ideal para equipos con experiencia en Kubernetes."
    },
    {
        id: "compute_hard_016",
        category: "compute_containers",
        service: "batch",
        difficulty: "hard",
        question: "¿Qué ventaja ofrece AWS Batch frente a gestionar EC2 manualmente?",
        options: [
            "Menor latencia",
            "Orquestación automática de recursos batch",
            "Soporte para aplicaciones web",
            "Ejecución serverless"
        ],
        correct: 1,
        explanation: "Batch gestiona colas, scheduling y escalado automáticamente."
    },
    {
        id: "compute_hard_017",
        category: "compute_containers",
        service: "elastic_beanstalk",
        difficulty: "hard",
        question: "¿Cuándo NO es recomendable usar Elastic Beanstalk?",
        options: [
            "Aplicaciones estándar",
            "Necesidad de control total de la infraestructura",
            "Despliegues rápidos",
            "Aplicaciones web comunes"
        ],
        correct: 1,
        explanation: "Beanstalk abstrae infraestructura, no da control total."
    },
    {
        id: "compute_hard_018",
        category: "compute_containers",
        service: "lightsail",
        difficulty: "hard",
        question: "¿Qué perfil de usuario encaja peor con Amazon Lightsail?",
        options: [
            "Desarrolladores individuales",
            "Pequeños proyectos",
            "Arquitecturas empresariales complejas",
            "Aplicaciones simples"
        ],
        correct: 2,
        explanation: "Lightsail no está pensado para arquitecturas complejas."
    },
    {
        id: "compute_hard_019",
        category: "compute_containers",
        service: "lambda",
        difficulty: "hard",
        question: "¿Qué responsabilidad sigue teniendo el cliente al usar AWS Lambda?",
        options: [
            "Gestionar servidores",
            "Gestionar el sistema operativo",
            "Escribir y mantener el código",
            "Configurar hardware"
        ],
        correct: 2,
        explanation: "El cliente sigue siendo responsable del código."
    },
    {
        id: "compute_hard_020",
        category: "compute_containers",
        service: "ec2",
        difficulty: "hard",
        question: "¿Qué escenario favorece claramente el uso de EC2 frente a Lambda?",
        options: [
            "Eventos esporádicos",
            "Cargas impredecibles",
            "Aplicaciones legacy con estado persistente",
            "Integración con S3"
        ],
        correct: 2,
        explanation: "Aplicaciones legacy y con estado encajan mejor en EC2."
    }
];
