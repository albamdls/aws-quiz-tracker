export default [
    {
        id: "euc_workspaces_001",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon WorkSpaces?",
        options: [
            "Streaming de aplicaciones individuales",
            "Proporcionar escritorios virtuales completos",
            "Acceso seguro solo a navegadores",
            "Ejecución de aplicaciones serverless"
        ],
        correct: 1,
        explanation: "Amazon WorkSpaces proporciona escritorios virtuales Windows o Linux gestionados."
    },
    {
        id: "euc_workspaces_002",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "¿Qué responsabilidad elimina Amazon WorkSpaces para una empresa?",
        options: [
            "Gestión de usuarios",
            "Gestión de hardware físico de escritorios",
            "Gestión de aplicaciones",
            "Gestión de datos del usuario"
        ],
        correct: 1,
        explanation: "WorkSpaces elimina la necesidad de gestionar hardware físico para escritorios."
    },
    {
        id: "euc_appstream_001",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "medium",
        question: "¿Cuál es el propósito principal de Amazon AppStream 2.0?",
        options: [
            "Proporcionar escritorios completos",
            "Streaming de aplicaciones a usuarios finales",
            "Acceso seguro a navegadores",
            "Gestión de dispositivos móviles"
        ],
        correct: 1,
        explanation: "AppStream 2.0 permite ejecutar y transmitir aplicaciones desde la nube."
    },
    {
        id: "euc_appstream_002",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "¿Cuál es una diferencia clave entre AppStream 2.0 y WorkSpaces?",
        options: [
            "AppStream ofrece escritorios completos",
            "WorkSpaces solo transmite aplicaciones",
            "AppStream transmite aplicaciones, WorkSpaces escritorios",
            "Ambos hacen exactamente lo mismo"
        ],
        correct: 2,
        explanation: "AppStream se centra en aplicaciones; WorkSpaces en escritorios completos."
    },
    {
        id: "euc_secure_browser_001",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "medium",
        question: "¿Cuál es el objetivo de Amazon WorkSpaces Secure Browser?",
        options: [
            "Proporcionar escritorios virtuales completos",
            "Ofrecer acceso seguro solo a aplicaciones web",
            "Ejecutar aplicaciones locales",
            "Gestionar dispositivos físicos"
        ],
        correct: 1,
        explanation: "Secure Browser ofrece acceso seguro a aplicaciones web sin exponer datos."
    },
    {
        id: "euc_secure_browser_002",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "¿Qué riesgo reduce principalmente Amazon WorkSpaces Secure Browser?",
        options: [
            "Latencia de red",
            "Fugas de datos en dispositivos finales",
            "Costes de infraestructura",
            "Falta de escalado"
        ],
        correct: 1,
        explanation: "Secure Browser evita que los datos se descarguen al dispositivo del usuario."
    },

    {
        id: "euc_case_001",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "Una empresa quiere ofrecer a empleados remotos un entorno de trabajo completo accesible desde cualquier lugar. ¿Qué servicio usar?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 1,
        explanation: "WorkSpaces proporciona escritorios virtuales completos."
    },
    {
        id: "euc_case_002",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "Una empresa quiere que usuarios externos accedan solo a una aplicación específica sin escritorio completo. ¿Qué servicio elegir?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon Lightsail"
        ],
        correct: 1,
        explanation: "AppStream es ideal para acceso a aplicaciones concretas."
    },
    {
        id: "euc_case_003",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "Una empresa necesita que contratistas accedan a aplicaciones web internas sin descargar datos localmente. ¿Qué servicio usar?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "Amazon WorkSpaces Secure Browser",
            "Amazon RDS"
        ],
        correct: 2,
        explanation: "Secure Browser permite acceso web seguro sin fuga de datos."
    },

    {
        id: "euc_compare_001",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "¿Cuándo es más adecuado WorkSpaces frente a AppStream 2.0?",
        options: [
            "Cuando solo se necesita una app",
            "Cuando se necesita un escritorio completo",
            "Cuando solo se necesita un navegador",
            "Cuando no se requiere persistencia"
        ],
        correct: 1,
        explanation: "WorkSpaces está pensado para escritorios completos persistentes."
    },
    {
        id: "euc_compare_002",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "¿Qué característica distingue a WorkSpaces Secure Browser de los otros servicios?",
        options: [
            "Soporte para aplicaciones locales",
            "Acceso limitado solo al navegador",
            "Uso exclusivo on-premise",
            "Requiere hardware especializado"
        ],
        correct: 1,
        explanation: "Secure Browser está limitado al acceso web seguro."
    },

    {
        id: "euc_trick_001",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon AppStream 2.0 es CORRECTA?",
        options: [
            "Proporciona escritorios persistentes",
            "Transmite aplicaciones sin instalarlas localmente",
            "Es solo para aplicaciones web",
            "Requiere dispositivos potentes"
        ],
        correct: 1,
        explanation: "AppStream transmite aplicaciones sin instalación local."
    },
    {
        id: "euc_trick_002",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon WorkSpaces es INCORRECTA?",
        options: [
            "Proporciona escritorios virtuales",
            "Reduce la necesidad de hardware local",
            "Solo sirve para aplicaciones web",
            "Soporta Windows y Linux"
        ],
        correct: 2,
        explanation: "WorkSpaces no se limita solo a aplicaciones web."
    },
    {
        id: "euc_trick_003",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "¿Qué tipo de usuario encaja mejor con WorkSpaces Secure Browser?",
        options: [
            "Desarrolladores",
            "Administradores de sistemas",
            "Contratistas con acceso limitado",
            "Usuarios que necesitan escritorios completos"
        ],
        correct: 2,
        explanation: "Secure Browser es ideal para accesos limitados y controlados."
    },

    {
        id: "euc_scenario_004",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "Una universidad quiere ofrecer a estudiantes acceso temporal a software especializado sin instalarlo en sus equipos. ¿Qué servicio usar?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 1,
        explanation: "AppStream permite acceso temporal a aplicaciones sin instalación."
    },
    {
        id: "euc_scenario_005",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "Una empresa quiere reemplazar escritorios físicos por virtuales para empleados remotos permanentes. ¿Qué servicio elegir?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon WorkSpaces",
            "Amazon Lambda"
        ],
        correct: 2,
        explanation: "WorkSpaces está diseñado para reemplazar escritorios físicos."
    },
    {
        id: "euc_scenario_006",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "¿Qué servicio elegirías para maximizar la seguridad cuando solo se requiere acceso a aplicaciones SaaS?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "Amazon WorkSpaces Secure Browser",
            "Amazon ECS"
        ],
        correct: 2,
        explanation: "Secure Browser limita el acceso exclusivamente al navegador web."
    },
    {
        id: "euc_scenario_007",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "Una empresa necesita que los empleados conserven su entorno de trabajo, archivos y configuraciones entre sesiones. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 1,
        explanation: "WorkSpaces ofrece escritorios persistentes con estado y datos del usuario."
    },
    {
        id: "euc_scenario_008",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "Una empresa de ingeniería quiere ofrecer software pesado (CAD) a usuarios externos sin instalar nada localmente. ¿Qué servicio elegir?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon Lightsail"
        ],
        correct: 1,
        explanation: "AppStream permite ejecutar aplicaciones pesadas desde la nube sin instalación local."
    },
    {
        id: "euc_scenario_009",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "Una organización necesita permitir acceso temporal a una aplicación web interna cumpliendo estrictas políticas de seguridad. ¿Qué servicio usar?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 2,
        explanation: "Secure Browser limita el acceso al navegador y evita la exfiltración de datos."
    },
    {
        id: "euc_scenario_010",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "Una empresa quiere ofrecer acceso a una aplicación solo durante unas horas al día y sin persistencia de sesión. Muy importante minimizar costes. ¿Qué servicio usar?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon RDS"
        ],
        correct: 1,
        explanation: "AppStream es ideal para acceso temporal y sin persistencia."
    },
    {
        id: "euc_scenario_011",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "Una empresa quiere sustituir portátiles corporativos por escritorios virtuales centralizados. ¿Qué servicio elegir?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon WorkSpaces",
            "Amazon ECS"
        ],
        correct: 2,
        explanation: "WorkSpaces está diseñado para reemplazar escritorios físicos."
    },
    {
        id: "euc_scenario_012",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "¿Qué servicio usarías si el requisito principal es evitar que los usuarios descarguen o copien datos?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 2,
        explanation: "Secure Browser reduce al máximo el riesgo de fuga de datos."
    },
    {
        id: "euc_scenario_013",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "Una empresa necesita escalar rápidamente el acceso a una aplicación para cientos de usuarios simultáneos. ¿Qué servicio es el más adecuado?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2 manual"
        ],
        correct: 1,
        explanation: "AppStream escala fácilmente para muchos usuarios concurrentes."
    },
    {
        id: "euc_scenario_014",
        category: "end_user_computing",
        service: "workspaces",
        difficulty: "hard",
        question: "¿Qué servicio elegirías si los usuarios necesitan instalar y personalizar aplicaciones en su entorno?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon WorkSpaces",
            "Amazon Lambda"
        ],
        correct: 2,
        explanation: "WorkSpaces permite entornos persistentes y personalizables."
    },
    {
        id: "euc_scenario_015",
        category: "end_user_computing",
        service: "workspaces_secure_browser",
        difficulty: "hard",
        question: "Una empresa necesita ofrecer acceso BYOD (Bring Your Own Device) con el máximo control de seguridad. ¿Qué servicio usar?",
        options: [
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EC2"
        ],
        correct: 2,
        explanation: "Secure Browser es ideal para escenarios BYOD con alto control."
    },
    {
        id: "euc_scenario_016",
        category: "end_user_computing",
        service: "appstream",
        difficulty: "hard",
        question: "¿Qué servicio es más adecuado cuando NO se necesita persistencia del entorno del usuario?",
        options: [
            "Amazon WorkSpaces",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces Secure Browser",
            "Amazon EKS"
        ],
        correct: 1,
        explanation: "AppStream funciona bien con sesiones no persistentes."
    }
];
