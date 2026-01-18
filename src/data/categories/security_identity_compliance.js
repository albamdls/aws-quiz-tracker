export default [
    {
        id: "sec_001",
        category: "security_identity_compliance",
        service: "iam",
        difficulty: "hard",
        question: "Una empresa necesita definir qué acciones puede realizar cada usuario sobre recursos AWS. ¿Qué servicio es fundamental?",
        options: [
            "Amazon Cognito",
            "AWS IAM",
            "AWS Directory Service",
            "AWS Resource Access Manager"
        ],
        correct: 1,
        explanation: "IAM gestiona usuarios, roles y permisos sobre recursos AWS."
    },
    {
        id: "sec_002",
        category: "security_identity_compliance",
        service: "iam_identity_center",
        difficulty: "hard",
        question: "Una empresa quiere centralizar el acceso de empleados a múltiples cuentas AWS con SSO. ¿Qué servicio usar?",
        options: [
            "AWS IAM",
            "Amazon Cognito",
            "AWS IAM Identity Center",
            "AWS Directory Service"
        ],
        correct: 2,
        explanation: "IAM Identity Center (SSO) centraliza accesos a múltiples cuentas."
    },
    {
        id: "sec_003",
        category: "security_identity_compliance",
        service: "cognito",
        difficulty: "hard",
        question: "Una aplicación necesita autenticación de usuarios finales con login social (Google, Facebook). ¿Qué servicio usar?",
        options: [
            "AWS IAM",
            "Amazon Cognito",
            "AWS Directory Service",
            "AWS IAM Identity Center"
        ],
        correct: 1,
        explanation: "Cognito gestiona identidades de usuarios finales."
    },
    {
        id: "sec_004",
        category: "security_identity_compliance",
        service: "kms",
        difficulty: "hard",
        question: "Una empresa quiere cifrar datos en S3 y controlar claves de cifrado. ¿Qué servicio usar?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS Certificate Manager"
        ],
        correct: 1,
        explanation: "KMS gestiona claves de cifrado integradas con servicios AWS."
    },
    {
        id: "sec_005",
        category: "security_identity_compliance",
        service: "cloudhsm",
        difficulty: "hard",
        question: "Una empresa necesita control total del hardware que almacena claves criptográficas. ¿Qué servicio usar?",
        options: [
            "AWS KMS",
            "AWS CloudHSM",
            "AWS Secrets Manager",
            "AWS ACM"
        ],
        correct: 1,
        explanation: "CloudHSM proporciona módulos de seguridad hardware dedicados."
    },

    {
        id: "sec_006",
        category: "security_identity_compliance",
        service: "secrets_manager",
        difficulty: "hard",
        question: "Una aplicación necesita almacenar y rotar automáticamente credenciales de bases de datos. ¿Qué servicio usar?",
        options: [
            "AWS KMS",
            "AWS Secrets Manager",
            "Amazon Macie",
            "AWS IAM"
        ],
        correct: 1,
        explanation: "Secrets Manager almacena y rota secretos automáticamente."
    },
    {
        id: "sec_007",
        category: "security_identity_compliance",
        service: "acm",
        difficulty: "hard",
        question: "Una empresa necesita certificados SSL/TLS para un ALB sin gestionar renovación manual. ¿Qué servicio usar?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Certificate Manager",
            "AWS Artifact"
        ],
        correct: 2,
        explanation: "ACM gestiona certificados SSL/TLS automáticamente."
    },
    {
        id: "sec_008",
        category: "security_identity_compliance",
        service: "guardduty",
        difficulty: "hard",
        question: "¿Qué servicio detecta comportamientos sospechosos analizando logs como VPC Flow Logs y CloudTrail?",
        options: [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "Amazon Detective",
            "AWS Security Hub"
        ],
        correct: 1,
        explanation: "GuardDuty detecta amenazas mediante análisis de logs."
    },
    {
        id: "sec_009",
        category: "security_identity_compliance",
        service: "inspector",
        difficulty: "hard",
        question: "¿Qué servicio evalúa vulnerabilidades en instancias EC2 y contenedores?",
        options: [
            "Amazon GuardDuty",
            "Amazon Inspector",
            "Amazon Macie",
            "AWS Audit Manager"
        ],
        correct: 1,
        explanation: "Inspector analiza vulnerabilidades y exposición."
    },
    {
        id: "sec_010",
        category: "security_identity_compliance",
        service: "macie",
        difficulty: "hard",
        question: "Una empresa quiere detectar datos sensibles como PII en buckets S3. ¿Qué servicio usar?",
        options: [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "Amazon Macie",
            "AWS Artifact"
        ],
        correct: 2,
        explanation: "Macie identifica datos sensibles en S3."
    },

    {
        id: "sec_011",
        category: "security_identity_compliance",
        service: "detective",
        difficulty: "hard",
        question: "Tras una alerta de GuardDuty, un analista quiere investigar visualmente la causa raíz. ¿Qué servicio usar?",
        options: [
            "Amazon Detective",
            "AWS Security Hub",
            "AWS Audit Manager",
            "AWS Inspector"
        ],
        correct: 0,
        explanation: "Detective ayuda a investigar incidentes de seguridad."
    },
    {
        id: "sec_012",
        category: "security_identity_compliance",
        service: "security_hub",
        difficulty: "hard",
        question: "¿Qué servicio centraliza alertas de seguridad de múltiples servicios AWS?",
        options: [
            "Amazon GuardDuty",
            "Amazon Detective",
            "AWS Security Hub",
            "AWS Firewall Manager"
        ],
        correct: 2,
        explanation: "Security Hub centraliza findings de seguridad."
    },
    {
        id: "sec_013",
        category: "security_identity_compliance",
        service: "waf",
        difficulty: "hard",
        question: "Una aplicación web debe protegerse contra ataques SQL injection y XSS. ¿Qué servicio usar?",
        options: [
            "AWS Shield",
            "AWS WAF",
            "AWS Firewall Manager",
            "Amazon GuardDuty"
        ],
        correct: 1,
        explanation: "WAF protege aplicaciones web frente a ataques comunes."
    },
    {
        id: "sec_014",
        category: "security_identity_compliance",
        service: "shield",
        difficulty: "hard",
        question: "¿Qué servicio protege automáticamente contra ataques DDoS a nivel de red?",
        options: [
            "AWS WAF",
            "AWS Shield",
            "AWS Firewall Manager",
            "Amazon Inspector"
        ],
        correct: 1,
        explanation: "AWS Shield protege contra ataques DDoS."
    },
    {
        id: "sec_015",
        category: "security_identity_compliance",
        service: "firewall_manager",
        difficulty: "hard",
        question: "Una empresa quiere aplicar reglas WAF de forma centralizada a múltiples cuentas. ¿Qué servicio usar?",
        options: [
            "AWS WAF",
            "AWS Firewall Manager",
            "AWS Organizations",
            "AWS Shield"
        ],
        correct: 1,
        explanation: "Firewall Manager gestiona reglas de seguridad centralizadas."
    },

    {
        id: "sec_016",
        category: "security_identity_compliance",
        service: "artifact",
        difficulty: "hard",
        question: "¿Qué servicio permite acceder a informes de cumplimiento y certificaciones de AWS?",
        options: [
            "AWS Audit Manager",
            "AWS Artifact",
            "AWS Security Hub",
            "Amazon Inspector"
        ],
        correct: 1,
        explanation: "AWS Artifact proporciona informes de cumplimiento."
    },
    {
        id: "sec_017",
        category: "security_identity_compliance",
        service: "audit_manager",
        difficulty: "hard",
        question: "Una empresa quiere automatizar la recopilación de evidencias para auditorías. ¿Qué servicio usar?",
        options: [
            "AWS Artifact",
            "AWS Audit Manager",
            "AWS Security Hub",
            "AWS Config"
        ],
        correct: 1,
        explanation: "Audit Manager automatiza evidencias de auditoría."
    },
    {
        id: "sec_018",
        category: "security_identity_compliance",
        service: "ram",
        difficulty: "hard",
        question: "Una empresa quiere compartir subredes entre varias cuentas AWS. ¿Qué servicio usar?",
        options: [
            "AWS Organizations",
            "AWS Resource Access Manager",
            "AWS IAM",
            "AWS Transit Gateway"
        ],
        correct: 1,
        explanation: "RAM permite compartir recursos entre cuentas."
    },
    {
        id: "sec_019",
        category: "security_identity_compliance",
        service: "directory_service",
        difficulty: "hard",
        question: "Una empresa quiere integrar Active Directory on-premise con AWS. ¿Qué servicio usar?",
        options: [
            "Amazon Cognito",
            "AWS Directory Service",
            "AWS IAM Identity Center",
            "AWS IAM"
        ],
        correct: 1,
        explanation: "Directory Service integra AD con AWS."
    },
    {
        id: "sec_020",
        category: "security_identity_compliance",
        service: "waf",
        difficulty: "hard",
        question: "¿Qué combinación protege mejor una aplicación web pública frente a ataques de capa 7 y DDoS?",
        options: [
            "AWS Shield + AWS WAF",
            "Amazon GuardDuty + Inspector",
            "AWS Firewall Manager + IAM",
            "AWS Macie + KMS"
        ],
        correct: 0,
        explanation: "Shield protege contra DDoS y WAF contra ataques web."
    },
    {
        id: "sec_hard_021",
        category: "security_identity_compliance",
        service: "iam",
        difficulty: "hard",
        question: "Una empresa quiere conceder permisos temporales a aplicaciones que se ejecutan en EC2 sin usar credenciales estáticas. ¿Qué mecanismo es el más adecuado?",
        options: [
            "Usuarios IAM con access keys",
            "Roles IAM",
            "AWS Secrets Manager",
            "Amazon Cognito"
        ],
        correct: 1,
        explanation: "Los roles IAM permiten credenciales temporales sin usar claves estáticas."
    },
    {
        id: "sec_hard_022",
        category: "security_identity_compliance",
        service: "iam_identity_center",
        difficulty: "hard",
        question: "Una empresa con múltiples cuentas AWS quiere gestionar permisos por grupos y roles corporativos desde un único punto. ¿Qué servicio usar?",
        options: [
            "AWS IAM",
            "Amazon Cognito",
            "AWS IAM Identity Center",
            "AWS Directory Service"
        ],
        correct: 2,
        explanation: "IAM Identity Center centraliza accesos y permisos multi-cuenta."
    },
    {
        id: "sec_hard_023",
        category: "security_identity_compliance",
        service: "cognito",
        difficulty: "hard",
        question: "Una app móvil necesita autenticación de usuarios externos y federación con proveedores sociales. ¿Qué servicio usar?",
        options: [
            "AWS IAM",
            "AWS IAM Identity Center",
            "Amazon Cognito",
            "AWS Directory Service"
        ],
        correct: 2,
        explanation: "Cognito gestiona identidades de usuarios finales."
    },
    {
        id: "sec_hard_024",
        category: "security_identity_compliance",
        service: "kms",
        difficulty: "hard",
        question: "¿Qué servicio permite controlar el acceso a claves de cifrado mediante políticas IAM?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS ACM"
        ],
        correct: 1,
        explanation: "KMS se integra con IAM para controlar el acceso a claves."
    },
    {
        id: "sec_hard_025",
        category: "security_identity_compliance",
        service: "secrets_manager",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre AWS Secrets Manager y AWS KMS?",
        options: [
            "KMS almacena secretos",
            "Secrets Manager cifra datos",
            "Secrets Manager gestiona y rota secretos",
            "KMS rota credenciales automáticamente"
        ],
        correct: 2,
        explanation: "Secrets Manager almacena y rota secretos; KMS gestiona claves."
    },

    {
        id: "sec_hard_026",
        category: "security_identity_compliance",
        service: "guardduty",
        difficulty: "hard",
        question: "¿Qué tipo de amenazas detecta Amazon GuardDuty?",
        options: [
            "Vulnerabilidades de software",
            "Configuraciones incorrectas",
            "Actividad maliciosa y comportamientos anómalos",
            "Datos sensibles expuestos"
        ],
        correct: 2,
        explanation: "GuardDuty detecta amenazas mediante análisis de logs."
    },
    {
        id: "sec_hard_027",
        category: "security_identity_compliance",
        service: "inspector",
        difficulty: "hard",
        question: "¿En qué escenario es MÁS adecuado Amazon Inspector?",
        options: [
            "Detectar accesos sospechosos",
            "Analizar vulnerabilidades en EC2",
            "Detectar PII en S3",
            "Bloquear ataques DDoS"
        ],
        correct: 1,
        explanation: "Inspector evalúa vulnerabilidades en EC2 y contenedores."
    },
    {
        id: "sec_hard_028",
        category: "security_identity_compliance",
        service: "macie",
        difficulty: "hard",
        question: "Una auditoría exige identificar datos personales almacenados en S3. ¿Qué servicio usar?",
        options: [
            "Amazon GuardDuty",
            "Amazon Inspector",
            "Amazon Macie",
            "AWS Audit Manager"
        ],
        correct: 2,
        explanation: "Macie detecta y clasifica datos sensibles en S3."
    },
    {
        id: "sec_hard_029",
        category: "security_identity_compliance",
        service: "detective",
        difficulty: "hard",
        question: "¿Qué servicio ayuda a analizar relaciones entre recursos tras un incidente de seguridad?",
        options: [
            "AWS Security Hub",
            "Amazon Detective",
            "Amazon GuardDuty",
            "AWS Audit Manager"
        ],
        correct: 1,
        explanation: "Detective ayuda a investigar y entender incidentes."
    },
    {
        id: "sec_hard_030",
        category: "security_identity_compliance",
        service: "security_hub",
        difficulty: "hard",
        question: "¿Qué servicio agrega findings de GuardDuty, Inspector y Macie?",
        options: [
            "Amazon Detective",
            "AWS Security Hub",
            "AWS Audit Manager",
            "AWS Firewall Manager"
        ],
        correct: 1,
        explanation: "Security Hub centraliza findings de múltiples servicios."
    },

    {
        id: "sec_hard_031",
        category: "security_identity_compliance",
        service: "waf",
        difficulty: "hard",
        question: "¿Qué tipo de ataques mitiga AWS WAF?",
        options: [
            "DDoS volumétricos",
            "Ataques de red L3/L4",
            "SQL injection y XSS",
            "Robo de credenciales IAM"
        ],
        correct: 2,
        explanation: "WAF protege frente a ataques de capa 7."
    },
    {
        id: "sec_hard_032",
        category: "security_identity_compliance",
        service: "shield",
        difficulty: "hard",
        question: "¿Qué afirmación sobre AWS Shield es CORRECTA?",
        options: [
            "Requiere configuración manual",
            "Solo protege aplicaciones web",
            "Protege contra ataques DDoS",
            "Detecta vulnerabilidades"
        ],
        correct: 2,
        explanation: "Shield protege frente a ataques DDoS."
    },
    {
        id: "sec_hard_033",
        category: "security_identity_compliance",
        service: "firewall_manager",
        difficulty: "hard",
        question: "¿Qué servicio permite aplicar WAF y Shield de forma centralizada?",
        options: [
            "AWS Security Hub",
            "AWS Firewall Manager",
            "AWS Organizations",
            "Amazon GuardDuty"
        ],
        correct: 1,
        explanation: "Firewall Manager gestiona reglas de seguridad centralizadas."
    },
    {
        id: "sec_hard_034",
        category: "security_identity_compliance",
        service: "artifact",
        difficulty: "hard",
        question: "Un auditor solicita certificados SOC e ISO de AWS. ¿Dónde se obtienen?",
        options: [
            "AWS Audit Manager",
            "AWS Artifact",
            "AWS Security Hub",
            "AWS Trusted Advisor"
        ],
        correct: 1,
        explanation: "AWS Artifact proporciona informes de cumplimiento."
    },
    {
        id: "sec_hard_035",
        category: "security_identity_compliance",
        service: "audit_manager",
        difficulty: "hard",
        question: "¿Qué diferencia principal existe entre AWS Artifact y AWS Audit Manager?",
        options: [
            "Artifact genera evidencias",
            "Audit Manager automatiza auditorías",
            "Artifact detecta vulnerabilidades",
            "Audit Manager cifra datos"
        ],
        correct: 1,
        explanation: "Audit Manager automatiza recopilación de evidencias."
    },

    {
        id: "sec_hard_036",
        category: "security_identity_compliance",
        service: "ram",
        difficulty: "hard",
        question: "¿Qué recurso se puede compartir entre cuentas mediante AWS RAM?",
        options: [
            "Usuarios IAM",
            "Subredes VPC",
            "Claves KMS",
            "Certificados ACM"
        ],
        correct: 1,
        explanation: "RAM permite compartir subredes y otros recursos."
    },
    {
        id: "sec_hard_037",
        category: "security_identity_compliance",
        service: "directory_service",
        difficulty: "hard",
        question: "¿Qué servicio facilita usar credenciales de Active Directory en AWS?",
        options: [
            "Amazon Cognito",
            "AWS IAM",
            "AWS Directory Service",
            "IAM Identity Center"
        ],
        correct: 2,
        explanation: "Directory Service integra Active Directory con AWS."
    },
    {
        id: "sec_hard_038",
        category: "security_identity_compliance",
        service: "acm",
        difficulty: "hard",
        question: "¿Qué servicio gestiona automáticamente la renovación de certificados SSL?",
        options: [
            "AWS CloudHSM",
            "AWS Certificate Manager",
            "AWS KMS",
            "AWS Secrets Manager"
        ],
        correct: 1,
        explanation: "ACM gestiona certificados SSL/TLS automáticamente."
    },
    {
        id: "sec_hard_039",
        category: "security_identity_compliance",
        service: "kms",
        difficulty: "hard",
        question: "¿Qué servicio se integra directamente con S3, EBS y RDS para cifrado?",
        options: [
            "AWS CloudHSM",
            "AWS KMS",
            "AWS Secrets Manager",
            "AWS ACM"
        ],
        correct: 1,
        explanation: "KMS se integra con múltiples servicios AWS."
    },
    {
        id: "sec_hard_040",
        category: "security_identity_compliance",
        service: "guardduty",
        difficulty: "hard",
        question: "¿Qué combinación representa un flujo típico de detección e investigación de amenazas?",
        options: [
            "Inspector → Macie → WAF",
            "GuardDuty → Detective → Security Hub",
            "Macie → KMS → Shield",
            "WAF → Shield → IAM"
        ],
        correct: 1,
        explanation: "GuardDuty detecta, Detective investiga y Security Hub centraliza."
    }
];
