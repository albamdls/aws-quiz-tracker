export default [
    {
        id: "devtools_cli_001",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de AWS CLI?",
        options: [
            "Crear pipelines de CI/CD",
            "Interactuar con servicios AWS desde la línea de comandos",
            "Analizar trazas de aplicaciones",
            "Compilar código fuente"
        ],
        correct: 1,
        explanation: "AWS CLI permite gestionar y automatizar servicios AWS desde la terminal."
    },
    {
        id: "devtools_cli_002",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "hard",
        question: "¿Qué ventaja clave ofrece AWS CLI frente a la consola web?",
        options: [
            "Mayor seguridad por defecto",
            "Automatización y scripting",
            "Menor latencia",
            "Acceso exclusivo a más servicios"
        ],
        correct: 1,
        explanation: "La CLI permite automatizar tareas repetitivas mediante scripts."
    },
    {
        id: "devtools_cli_003",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "hard",
        question: "¿Qué requisito es necesario para usar AWS CLI de forma segura?",
        options: [
            "Una IP pública fija",
            "Credenciales AWS configuradas",
            "Un pipeline activo",
            "Un rol de administrador obligatorio"
        ],
        correct: 1,
        explanation: "La CLI requiere credenciales (IAM user o role) configuradas."
    },

    {
        id: "devtools_codebuild_001",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de AWS CodeBuild?",
        options: [
            "Orquestar pipelines completos",
            "Compilar y testear código",
            "Desplegar aplicaciones",
            "Monitorizar aplicaciones"
        ],
        correct: 1,
        explanation: "CodeBuild se encarga de compilar, testear y generar artefactos."
    },
    {
        id: "devtools_codebuild_002",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "¿Qué responsabilidad elimina AWS CodeBuild al desarrollador?",
        options: [
            "Escribir tests",
            "Gestionar servidores de build",
            "Configurar pipelines",
            "Gestionar repositorios"
        ],
        correct: 1,
        explanation: "CodeBuild elimina la necesidad de administrar servidores de compilación."
    },
    {
        id: "devtools_codebuild_003",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "¿Qué archivo define las fases de build en AWS CodeBuild?",
        options: [
            "pipeline.yml",
            "buildspec.yml",
            "dockerfile",
            "template.yaml"
        ],
        correct: 1,
        explanation: "buildspec.yml define las fases del proceso de build."
    },

    {
        id: "devtools_codepipeline_001",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "medium",
        question: "¿Cuál es el objetivo principal de AWS CodePipeline?",
        options: [
            "Compilar código",
            "Orquestar procesos de CI/CD",
            "Analizar rendimiento",
            "Gestionar credenciales"
        ],
        correct: 1,
        explanation: "CodePipeline automatiza y orquesta pipelines de CI/CD."
    },
    {
        id: "devtools_codepipeline_002",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "¿Qué servicio se integra comúnmente como fase de build dentro de CodePipeline?",
        options: [
            "AWS X-Ray",
            "AWS CodeBuild",
            "AWS CLI",
            "Amazon S3"
        ],
        correct: 1,
        explanation: "CodeBuild se usa normalmente como etapa de build en CodePipeline."
    },
    {
        id: "devtools_codepipeline_003",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS CodePipeline es CORRECTA?",
        options: [
            "Ejecuta código directamente",
            "Gestiona servidores de compilación",
            "Coordina múltiples etapas del ciclo de entrega",
            "Solo funciona con GitHub"
        ],
        correct: 2,
        explanation: "CodePipeline coordina etapas como source, build y deploy."
    },

    {
        id: "devtools_xray_001",
        category: "developer_tools",
        service: "xray",
        difficulty: "medium",
        question: "¿Para qué se utiliza AWS X-Ray?",
        options: [
            "Compilar código",
            "Analizar trazas y latencia de aplicaciones",
            "Gestionar pipelines",
            "Automatizar despliegues"
        ],
        correct: 1,
        explanation: "X-Ray se usa para tracing distribuido y análisis de rendimiento."
    },
    {
        id: "devtools_xray_002",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "¿Qué problema ayuda a resolver AWS X-Ray?",
        options: [
            "Errores de sintaxis",
            "Cuellos de botella y latencia en aplicaciones distribuidas",
            "Gestión de costes",
            "Control de versiones"
        ],
        correct: 1,
        explanation: "X-Ray ayuda a identificar latencia y fallos en arquitecturas distribuidas."
    },
    {
        id: "devtools_xray_003",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "¿Qué tipo de arquitectura se beneficia MÁS de AWS X-Ray?",
        options: [
            "Aplicaciones monolíticas simples",
            "Aplicaciones distribuidas y microservicios",
            "Scripts locales",
            "Aplicaciones sin red"
        ],
        correct: 1,
        explanation: "X-Ray es especialmente útil en arquitecturas distribuidas."
    },

    {
        id: "devtools_case_001",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "Una empresa quiere automatizar desde commit hasta despliegue. ¿Qué servicio es clave?",
        options: [
            "AWS CodeBuild",
            "AWS CodePipeline",
            "AWS CLI",
            "AWS X-Ray"
        ],
        correct: 1,
        explanation: "CodePipeline orquesta todo el flujo CI/CD."
    },
    {
        id: "devtools_case_002",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "¿Qué servicio usarías exclusivamente para compilar y ejecutar tests?",
        options: [
            "AWS CodePipeline",
            "AWS CodeBuild",
            "AWS X-Ray",
            "AWS CLI"
        ],
        correct: 1,
        explanation: "CodeBuild se encarga específicamente del build y test."
    },
    {
        id: "devtools_case_003",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "Una aplicación serverless tiene latencia inesperada entre servicios. ¿Qué herramienta usar?",
        options: [
            "AWS CloudWatch Logs",
            "AWS X-Ray",
            "AWS CodeBuild",
            "AWS CodePipeline"
        ],
        correct: 1,
        explanation: "X-Ray permite trazar llamadas entre servicios."
    },

    {
        id: "devtools_compare_001",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "¿Cuál es la principal diferencia entre CodeBuild y CodePipeline?",
        options: [
            "CodeBuild orquesta pipelines y CodePipeline compila",
            "CodeBuild compila y CodePipeline orquesta",
            "Ambos hacen lo mismo",
            "CodePipeline analiza rendimiento"
        ],
        correct: 1,
        explanation: "CodeBuild compila; CodePipeline coordina el flujo."
    },
    {
        id: "devtools_compare_002",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "hard",
        question: "¿En qué escenario AWS CLI es la mejor opción?",
        options: [
            "Análisis de latencia",
            "Automatización de tareas repetitivas",
            "Orquestación CI/CD",
            "Tracing distribuido"
        ],
        correct: 1,
        explanation: "La CLI es ideal para automatizar tareas repetitivas."
    },

    {
        id: "devtools_trick_001",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS X-Ray es INCORRECTA?",
        options: [
            "Ayuda a analizar latencia",
            "Funciona bien con microservicios",
            "Es un servicio de CI/CD",
            "Permite tracing distribuido"
        ],
        correct: 2,
        explanation: "X-Ray no es un servicio de CI/CD."
    },
    {
        id: "devtools_trick_002",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "¿Qué componente NO suele formar parte de un pipeline CI/CD en AWS?",
        options: [
            "Source",
            "Build",
            "Deploy",
            "Tracing"
        ],
        correct: 3,
        explanation: "Tracing corresponde a observabilidad, no a CI/CD."
    },
    {
        id: "devtools_scenario_001",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "Una empresa quiere que cada cambio en el repositorio dispare automáticamente un proceso de build y despliegue sin intervención manual. ¿Qué servicio debe usarse como eje central?",
        options: [
            "AWS CodeBuild",
            "AWS CodePipeline",
            "AWS CLI",
            "AWS X-Ray"
        ],
        correct: 1,
        explanation: "CodePipeline orquesta automáticamente todas las fases desde el commit hasta el despliegue."
    },
    {
        id: "devtools_scenario_002",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "Un equipo necesita compilar código y ejecutar tests sin mantener servidores dedicados de CI. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS CodePipeline",
            "AWS CodeBuild",
            "AWS CLI",
            "AWS X-Ray"
        ],
        correct: 1,
        explanation: "CodeBuild elimina la necesidad de gestionar servidores de build."
    },
    {
        id: "devtools_scenario_003",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "hard",
        question: "Un administrador quiere automatizar la creación de recursos AWS mediante scripts reutilizables. ¿Qué herramienta usar?",
        options: [
            "AWS CodePipeline",
            "AWS X-Ray",
            "AWS CLI",
            "AWS CodeBuild"
        ],
        correct: 2,
        explanation: "AWS CLI permite automatizar operaciones AWS mediante scripts."
    },
    {
        id: "devtools_scenario_004",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "Una aplicación distribuida presenta latencias intermitentes entre servicios y funciones Lambda. ¿Qué herramienta ayuda a identificar el origen del problema?",
        options: [
            "AWS CloudWatch Metrics",
            "AWS CodeBuild",
            "AWS X-Ray",
            "AWS CodePipeline"
        ],
        correct: 2,
        explanation: "X-Ray permite trazar llamadas entre servicios y detectar cuellos de botella."
    },
    {
        id: "devtools_scenario_005",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "Un equipo quiere definir un flujo CI/CD con etapas de source, build y deploy conectando múltiples servicios AWS. ¿Qué servicio coordina este flujo?",
        options: [
            "AWS CodeBuild",
            "AWS CLI",
            "AWS CodePipeline",
            "AWS X-Ray"
        ],
        correct: 2,
        explanation: "CodePipeline coordina y conecta todas las etapas del flujo CI/CD."
    },
    {
        id: "devtools_scenario_006",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "Una arquitectura de microservicios necesita visibilidad end-to-end de las peticiones del usuario. ¿Qué servicio usar?",
        options: [
            "AWS CodePipeline",
            "AWS CLI",
            "AWS CodeBuild",
            "AWS X-Ray"
        ],
        correct: 3,
        explanation: "X-Ray proporciona tracing distribuido end-to-end."
    },
    {
        id: "devtools_scenario_007",
        category: "developer_tools",
        service: "codebuild",
        difficulty: "hard",
        question: "Un pipeline necesita ejecutar tests unitarios y generar artefactos antes del despliegue. ¿Qué servicio cumple esta función?",
        options: [
            "AWS CodePipeline",
            "AWS X-Ray",
            "AWS CodeBuild",
            "AWS CLI"
        ],
        correct: 2,
        explanation: "CodeBuild ejecuta builds, tests y genera artefactos."
    },
    {
        id: "devtools_scenario_008",
        category: "developer_tools",
        service: "aws_cli",
        difficulty: "hard",
        question: "Un desarrollador quiere lanzar y configurar recursos AWS rápidamente desde su portátil sin usar la consola web. ¿Qué herramienta usar?",
        options: [
            "AWS CodeBuild",
            "AWS CodePipeline",
            "AWS X-Ray",
            "AWS CLI"
        ],
        correct: 3,
        explanation: "La CLI permite gestionar AWS desde la línea de comandos."
    },
    {
        id: "devtools_scenario_009",
        category: "developer_tools",
        service: "codepipeline",
        difficulty: "hard",
        question: "Un equipo quiere garantizar que todos los despliegues sigan exactamente el mismo proceso automatizado. ¿Qué servicio es clave?",
        options: [
            "AWS CLI",
            "AWS X-Ray",
            "AWS CodeBuild",
            "AWS CodePipeline"
        ],
        correct: 3,
        explanation: "CodePipeline garantiza procesos de despliegue consistentes."
    },
    {
        id: "devtools_scenario_010",
        category: "developer_tools",
        service: "xray",
        difficulty: "hard",
        question: "Tras un despliegue exitoso, una aplicación sigue fallando en producción por problemas de rendimiento entre servicios. ¿Qué servicio ayuda a investigar?",
        options: [
            "AWS CodeBuild",
            "AWS CodePipeline",
            "AWS CLI",
            "AWS X-Ray"
        ],
        correct: 3,
        explanation: "X-Ray ayuda a investigar problemas de rendimiento en producción."
    }
];
