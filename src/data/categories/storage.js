export default [
    {
        id: "stor_001",
        category: "storage",
        service: "s3",
        difficulty: "medium",
        question: "¿Qué tipo de almacenamiento es Amazon S3?",
        options: [
            "Bloques",
            "Archivos",
            "Objetos",
            "Cinta"
        ],
        correct: 2,
        explanation: "Amazon S3 es un servicio de almacenamiento de objetos."
    },
    {
        id: "stor_002",
        category: "storage",
        service: "ebs",
        difficulty: "medium",
        question: "¿Qué característica define mejor a Amazon EBS?",
        options: [
            "Acceso concurrente desde múltiples instancias",
            "Almacenamiento de objetos",
            "Almacenamiento en bloques para EC2",
            "Sistema de archivos distribuido"
        ],
        correct: 2,
        explanation: "EBS proporciona almacenamiento en bloques para EC2."
    },
    {
        id: "stor_003",
        category: "storage",
        service: "efs",
        difficulty: "hard",
        question: "¿Qué ventaja principal ofrece Amazon EFS frente a EBS?",
        options: [
            "Menor coste",
            "Acceso compartido desde múltiples instancias",
            "Mayor rendimiento por instancia",
            "Almacenamiento de objetos"
        ],
        correct: 1,
        explanation: "EFS permite acceso concurrente desde múltiples instancias EC2."
    },
    {
        id: "stor_004",
        category: "storage",
        service: "ebs",
        difficulty: "hard",
        question: "¿En qué escenario es más adecuado Amazon EBS?",
        options: [
            "Compartir archivos entre muchas instancias",
            "Almacenar backups a largo plazo",
            "Disco de sistema para una instancia EC2",
            "Distribuir contenido globalmente"
        ],
        correct: 2,
        explanation: "EBS se usa comúnmente como disco de sistema para EC2."
    },

    {
        id: "stor_005",
        category: "storage",
        service: "efs",
        difficulty: "hard",
        question: "Una aplicación necesita un sistema de archivos compartido para múltiples instancias Linux. ¿Qué servicio usar?",
        options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon FSx for Windows"
        ],
        correct: 1,
        explanation: "EFS proporciona un sistema de archivos compartido para Linux."
    },
    {
        id: "stor_006",
        category: "storage",
        service: "fsx",
        difficulty: "hard",
        question: "¿Qué escenario es más adecuado para Amazon FSx?",
        options: [
            "Backups a largo plazo",
            "Aplicaciones Windows que requieren SMB",
            "Almacenamiento de objetos",
            "Acceso web público"
        ],
        correct: 1,
        explanation: "FSx es ideal para workloads Windows y SMB."
    },

    {
        id: "stor_007",
        category: "storage",
        service: "s3_glacier",
        difficulty: "hard",
        question: "¿Para qué se utiliza Amazon S3 Glacier?",
        options: [
            "Acceso frecuente de baja latencia",
            "Almacenamiento temporal",
            "Archivado de largo plazo y bajo coste",
            "Discos de sistema"
        ],
        correct: 2,
        explanation: "Glacier está diseñado para archivado a largo plazo."
    },
    {
        id: "stor_008",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué característica hace a Amazon S3 altamente duradero?",
        options: [
            "Replicación manual",
            "Almacenamiento en una sola AZ",
            "Replicación automática en múltiples AZs",
            "Snapshots periódicos"
        ],
        correct: 2,
        explanation: "S3 replica objetos automáticamente entre AZs."
    },

    {
        id: "stor_009",
        category: "storage",
        service: "aws_backup",
        difficulty: "hard",
        question: "¿Qué servicio centraliza y automatiza backups de múltiples servicios AWS?",
        options: [
            "AWS Backup",
            "Amazon S3 Glacier",
            "AWS Elastic Disaster Recovery",
            "Amazon EBS Snapshots"
        ],
        correct: 0,
        explanation: "AWS Backup centraliza y automatiza backups."
    },
    {
        id: "stor_010",
        category: "storage",
        service: "drs",
        difficulty: "hard",
        question: "¿Cuál es el objetivo principal de AWS Elastic Disaster Recovery (DRS)?",
        options: [
            "Backup a largo plazo",
            "Recuperación ante desastres con bajo RTO y RPO",
            "Archivado de datos",
            "Replicación de objetos"
        ],
        correct: 1,
        explanation: "DRS está orientado a recuperación ante desastres."
    },

    {
        id: "stor_011",
        category: "storage",
        service: "drs",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre AWS Backup y AWS DRS?",
        options: [
            "Backup copia datos; DRS replica sistemas completos",
            "DRS es más barato",
            "Backup tiene menor RPO",
            "DRS solo funciona con S3"
        ],
        correct: 0,
        explanation: "Backup guarda copias; DRS replica servidores completos."
    },
    {
        id: "stor_012",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "Una empresa quiere integrar almacenamiento on-premise con AWS. ¿Qué servicio usar?",
        options: [
            "Amazon FSx",
            "AWS Storage Gateway",
            "Amazon EFS",
            "Amazon S3 Glacier"
        ],
        correct: 1,
        explanation: "Storage Gateway conecta entornos on-premise con AWS."
    },

    {
        id: "stor_013",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "¿Qué tipo de Storage Gateway permite exponer S3 como un sistema de archivos?",
        options: [
            "Volume Gateway",
            "Tape Gateway",
            "File Gateway",
            "Snapshot Gateway"
        ],
        correct: 2,
        explanation: "File Gateway expone S3 como sistema de archivos."
    },
    {
        id: "stor_014",
        category: "storage",
        service: "efs",
        difficulty: "hard",
        question: "¿Qué modelo de escalado utiliza Amazon EFS?",
        options: [
            "Manual",
            "Escalado fijo",
            "Escala automáticamente según uso",
            "Basado en snapshots"
        ],
        correct: 2,
        explanation: "EFS escala automáticamente según la demanda."
    },

    {
        id: "stor_015",
        category: "storage",
        service: "ebs",
        difficulty: "hard",
        question: "¿Qué ocurre si una instancia EC2 se detiene?",
        options: [
            "Los datos de EBS se pierden",
            "Los datos de EBS persisten",
            "El volumen se elimina automáticamente",
            "Se mueve a Glacier"
        ],
        correct: 1,
        explanation: "Los volúmenes EBS persisten tras detener la instancia."
    },
    {
        id: "stor_016",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué opción usarías para proteger objetos S3 frente a borrado accidental?",
        options: [
            "Snapshots",
            "Versioning",
            "EBS Encryption",
            "Replication Gateway"
        ],
        correct: 1,
        explanation: "Versioning protege frente a borrados accidentales."
    },

    {
        id: "stor_017",
        category: "storage",
        service: "fsx",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre Amazon FSx y Amazon EFS?",
        options: [
            "FSx es solo para Linux",
            "FSx soporta workloads Windows y alto rendimiento",
            "EFS no escala",
            "FSx es almacenamiento de objetos"
        ],
        correct: 1,
        explanation: "FSx soporta workloads específicos como Windows."
    },
    {
        id: "stor_018",
        category: "storage",
        service: "s3_glacier",
        difficulty: "hard",
        question: "¿Qué compromiso existe al usar S3 Glacier?",
        options: [
            "Menor durabilidad",
            "Mayor coste",
            "Mayor latencia de acceso",
            "Menor seguridad"
        ],
        correct: 2,
        explanation: "Glacier tiene mayor latencia de recuperación."
    },

    {
        id: "stor_019",
        category: "storage",
        service: "aws_backup",
        difficulty: "hard",
        question: "¿Qué servicios pueden protegerse con AWS Backup?",
        options: [
            "Solo EC2",
            "EC2, EBS, RDS, EFS y más",
            "Solo S3",
            "Solo on-premise"
        ],
        correct: 1,
        explanation: "AWS Backup soporta múltiples servicios AWS."
    },
    {
        id: "stor_020",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "¿Qué escenario encaja mejor con Tape Gateway?",
        options: [
            "Backups legacy basados en cintas",
            "Acceso compartido Linux",
            "Archivado inmediato",
            "Discos de sistema"
        ],
        correct: 0,
        explanation: "Tape Gateway emula librerías de cintas para backups legacy."
    },
    {
        id: "stor_hard_021",
        category: "storage",
        service: "ebs",
        difficulty: "hard",
        question: "Una base de datos en EC2 requiere baja latencia y almacenamiento persistente por instancia. ¿Qué servicio usar?",
        options: [
            "Amazon EFS",
            "Amazon S3",
            "Amazon EBS",
            "Amazon FSx"
        ],
        correct: 2,
        explanation: "EBS ofrece almacenamiento en bloques de baja latencia para EC2."
    },
    {
        id: "stor_hard_022",
        category: "storage",
        service: "efs",
        difficulty: "hard",
        question: "Varias instancias EC2 necesitan compartir el mismo conjunto de archivos simultáneamente. ¿Qué servicio elegir?",
        options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon S3 Glacier"
        ],
        correct: 2,
        explanation: "EFS permite acceso concurrente desde múltiples instancias."
    },
    {
        id: "stor_hard_023",
        category: "storage",
        service: "fsx",
        difficulty: "hard",
        question: "Una aplicación Windows necesita un sistema de archivos compartido con protocolo SMB. ¿Qué servicio usar?",
        options: [
            "Amazon EFS",
            "Amazon FSx",
            "Amazon S3",
            "Amazon EBS"
        ],
        correct: 1,
        explanation: "FSx soporta SMB para workloads Windows."
    },
    {
        id: "stor_hard_024",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué característica de Amazon S3 permite proteger objetos frente a sobrescritura y borrado accidental?",
        options: [
            "Cross-Region Replication",
            "Object Lock",
            "Encryption",
            "Lifecycle Policies"
        ],
        correct: 1,
        explanation: "S3 Object Lock impide la eliminación o modificación de objetos."
    },
    {
        id: "stor_hard_025",
        category: "storage",
        service: "s3_glacier",
        difficulty: "hard",
        question: "¿Qué escenario encaja mejor con S3 Glacier Deep Archive?",
        options: [
            "Acceso diario a datos",
            "Backups semanales",
            "Archivado de datos por años",
            "Procesamiento en tiempo real"
        ],
        correct: 2,
        explanation: "Deep Archive es ideal para datos que rara vez se acceden."
    },

    {
        id: "stor_hard_026",
        category: "storage",
        service: "aws_backup",
        difficulty: "hard",
        question: "Una empresa quiere definir políticas de backup centralizadas para múltiples cuentas AWS. ¿Qué servicio usar?",
        options: [
            "Amazon S3",
            "AWS Backup",
            "AWS Storage Gateway",
            "AWS DRS"
        ],
        correct: 1,
        explanation: "AWS Backup permite políticas centralizadas."
    },
    {
        id: "stor_hard_027",
        category: "storage",
        service: "drs",
        difficulty: "hard",
        question: "Una empresa necesita poder levantar servidores completos en AWS tras un desastre on-premise. ¿Qué servicio usar?",
        options: [
            "AWS Backup",
            "AWS Elastic Disaster Recovery",
            "AWS Storage Gateway",
            "Amazon S3 Glacier"
        ],
        correct: 1,
        explanation: "DRS replica servidores para recuperación ante desastres."
    },
    {
        id: "stor_hard_028",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "¿Qué tipo de Storage Gateway es ideal para integrar aplicaciones legacy que usan cintas?",
        options: [
            "File Gateway",
            "Volume Gateway",
            "Tape Gateway",
            "Snapshot Gateway"
        ],
        correct: 2,
        explanation: "Tape Gateway emula librerías de cintas."
    },
    {
        id: "stor_hard_029",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "Una empresa quiere exponer S3 como un sistema de archivos NFS/SMB on-premise. ¿Qué tipo de gateway usar?",
        options: [
            "Tape Gateway",
            "Volume Gateway",
            "File Gateway",
            "DRS Gateway"
        ],
        correct: 2,
        explanation: "File Gateway expone S3 como sistema de archivos."
    },
    {
        id: "stor_hard_030",
        category: "storage",
        service: "efs",
        difficulty: "hard",
        question: "¿Qué afirmación sobre Amazon EFS es CORRECTA?",
        options: [
            "Requiere aprovisionamiento manual",
            "No soporta escalado",
            "Escala automáticamente con el uso",
            "Solo funciona en una AZ"
        ],
        correct: 2,
        explanation: "EFS escala automáticamente y es multi-AZ."
    },

    {
        id: "stor_hard_031",
        category: "storage",
        service: "ebs",
        difficulty: "hard",
        question: "¿Qué técnica se usa para respaldar volúmenes EBS?",
        options: [
            "Versioning",
            "Snapshots",
            "Replication",
            "Object Lock"
        ],
        correct: 1,
        explanation: "Los snapshots de EBS permiten backups."
    },
    {
        id: "stor_hard_032",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué política permite mover automáticamente objetos a Glacier?",
        options: [
            "Bucket Policy",
            "IAM Policy",
            "Lifecycle Policy",
            "Replication Policy"
        ],
        correct: 2,
        explanation: "Lifecycle Policies automatizan la transición entre clases."
    },
    {
        id: "stor_hard_033",
        category: "storage",
        service: "fsx",
        difficulty: "hard",
        question: "¿Qué workload es más adecuado para Amazon FSx for Lustre?",
        options: [
            "Aplicaciones web",
            "Big Data y HPC",
            "Backups",
            "Archivado"
        ],
        correct: 1,
        explanation: "FSx for Lustre está optimizado para alto rendimiento."
    },
    {
        id: "stor_hard_034",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué característica permite replicar datos de S3 a otra región?",
        options: [
            "Object Lock",
            "Cross-Region Replication",
            "Lifecycle Rules",
            "Storage Gateway"
        ],
        correct: 1,
        explanation: "CRR replica objetos entre regiones."
    },
    {
        id: "stor_hard_035",
        category: "storage",
        service: "drs",
        difficulty: "hard",
        question: "¿Qué métrica es crítica para AWS Elastic Disaster Recovery?",
        options: [
            "Throughput",
            "Latency",
            "RTO y RPO",
            "IOPS"
        ],
        correct: 2,
        explanation: "DRS se centra en minimizar RTO y RPO."
    },

    {
        id: "stor_hard_036",
        category: "storage",
        service: "aws_backup",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre AWS Backup y snapshots manuales?",
        options: [
            "Backup es menos seguro",
            "Backup centraliza y automatiza",
            "Snapshots son multi-AZ",
            "Backup solo funciona con S3"
        ],
        correct: 1,
        explanation: "AWS Backup automatiza y centraliza backups."
    },
    {
        id: "stor_hard_037",
        category: "storage",
        service: "s3_glacier",
        difficulty: "hard",
        question: "¿Qué trade-off principal existe al usar S3 Glacier?",
        options: [
            "Menor durabilidad",
            "Mayor coste",
            "Mayor latencia de acceso",
            "Menor seguridad"
        ],
        correct: 2,
        explanation: "Glacier implica latencia al recuperar datos."
    },
    {
        id: "stor_hard_038",
        category: "storage",
        service: "storage_gateway",
        difficulty: "hard",
        question: "¿Qué ventaja ofrece Storage Gateway?",
        options: [
            "Reduce latencia global",
            "Integra on-premise con AWS Storage",
            "Sirve contenido web",
            "Reemplaza EBS"
        ],
        correct: 1,
        explanation: "Storage Gateway conecta almacenamiento on-premise con AWS."
    },
    {
        id: "stor_hard_039",
        category: "storage",
        service: "ebs",
        difficulty: "hard",
        question: "¿Qué sucede con un volumen EBS si se elimina la instancia EC2?",
        options: [
            "Siempre se elimina",
            "Siempre persiste",
            "Depende de la configuración",
            "Se mueve a Glacier"
        ],
        correct: 2,
        explanation: "Depende del flag DeleteOnTermination."
    },
    {
        id: "stor_hard_040",
        category: "storage",
        service: "s3",
        difficulty: "hard",
        question: "¿Qué opción ofrece mayor durabilidad de datos?",
        options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon FSx"
        ],
        correct: 2,
        explanation: "S3 ofrece 11 nueves de durabilidad."
    }
];
