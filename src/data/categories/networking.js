export default [
    {
        id: "net_001",
        category: "networking",
        service: "vpc",
        difficulty: "medium",
        question: "¿Qué es Amazon VPC?",
        options: [
            "Un servicio de CDN",
            "Una red virtual aislada en AWS",
            "Un servicio DNS",
            "Un servicio de VPN gestionado"
        ],
        correct: 1,
        explanation: "Amazon VPC permite crear una red virtual aislada en AWS."
    },
    {
        id: "net_002",
        category: "networking",
        service: "route53",
        difficulty: "medium",
        question: "¿Cuál es la función principal de Amazon Route 53?",
        options: [
            "Distribuir contenido",
            "Gestionar redes privadas",
            "Resolver nombres de dominio (DNS)",
            "Crear APIs REST"
        ],
        correct: 2,
        explanation: "Route 53 es el servicio DNS de AWS."
    },
    {
        id: "net_003",
        category: "networking",
        service: "cloudfront",
        difficulty: "hard",
        question: "Una aplicación web global necesita reducir latencia y mejorar tiempos de carga. ¿Qué servicio usar?",
        options: [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Direct Connect"
        ],
        correct: 1,
        explanation: "CloudFront es una CDN diseñada para servir contenido con baja latencia."
    },
    {
        id: "net_004",
        category: "networking",
        service: "global_accelerator",
        difficulty: "hard",
        question: "¿Qué diferencia clave existe entre CloudFront y AWS Global Accelerator?",
        options: [
            "CloudFront usa Anycast y Global Accelerator no",
            "Global Accelerator optimiza tráfico TCP/UDP hacia aplicaciones",
            "CloudFront solo funciona con EC2",
            "Global Accelerator es un servicio DNS"
        ],
        correct: 1,
        explanation: "Global Accelerator optimiza tráfico de red hacia endpoints, no contenido."
    },
    {
        id: "net_005",
        category: "networking",
        service: "api_gateway",
        difficulty: "hard",
        question: "Una empresa quiere exponer APIs REST y serverless de forma segura y escalable. ¿Qué servicio usar?",
        options: [
            "Amazon CloudFront",
            "Amazon API Gateway",
            "AWS PrivateLink",
            "Amazon Route 53"
        ],
        correct: 1,
        explanation: "API Gateway permite crear, publicar y asegurar APIs."
    },

    {
        id: "net_006",
        category: "networking",
        service: "direct_connect",
        difficulty: "hard",
        question: "Una empresa necesita una conexión privada y dedicada entre su data center y AWS. ¿Qué servicio usar?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "AWS Client VPN",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "Direct Connect ofrece una conexión dedicada y privada."
    },
    {
        id: "net_007",
        category: "networking",
        service: "vpn",
        difficulty: "hard",
        question: "¿Cuál es la principal diferencia entre AWS VPN y AWS Direct Connect?",
        options: [
            "VPN es más segura",
            "VPN usa internet pública; Direct Connect es privada",
            "Direct Connect es serverless",
            "VPN no cifra tráfico"
        ],
        correct: 1,
        explanation: "VPN viaja por internet pública; Direct Connect es una conexión privada."
    },
    {
        id: "net_008",
        category: "networking",
        service: "site_to_site_vpn",
        difficulty: "hard",
        question: "¿Qué tipo de conexión proporciona AWS Site-to-Site VPN?",
        options: [
            "Usuario a VPC",
            "VPC a VPC",
            "On-premise a VPC",
            "Internet a API"
        ],
        correct: 2,
        explanation: "Site-to-Site VPN conecta una red on-premise con una VPC."
    },
    {
        id: "net_009",
        category: "networking",
        service: "client_vpn",
        difficulty: "hard",
        question: "Empleados remotos necesitan acceso seguro a recursos en una VPC. ¿Qué servicio usar?",
        options: [
            "AWS Site-to-Site VPN",
            "AWS Client VPN",
            "AWS Direct Connect",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "Client VPN permite acceso remoto de usuarios a AWS."
    },

    {
        id: "net_010",
        category: "networking",
        service: "privatelink",
        difficulty: "hard",
        question: "¿Qué problema resuelve AWS PrivateLink?",
        options: [
            "Reducir latencia global",
            "Acceder a servicios privados sin usar internet",
            "Crear APIs públicas",
            "Conectar data centers"
        ],
        correct: 1,
        explanation: "PrivateLink permite acceso privado a servicios dentro de AWS."
    },
    {
        id: "net_011",
        category: "networking",
        service: "transit_gateway",
        difficulty: "hard",
        question: "Una empresa necesita conectar múltiples VPCs y redes on-premise de forma centralizada. ¿Qué servicio usar?",
        options: [
            "AWS VPN",
            "AWS Transit Gateway",
            "AWS Direct Connect",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "Transit Gateway actúa como hub central de red."
    },
    {
        id: "net_012",
        category: "networking",
        service: "route53",
        difficulty: "hard",
        question: "¿Qué política de routing permite Route 53 para alta disponibilidad?",
        options: [
            "Round Robin",
            "Failover",
            "Peer-to-peer",
            "Static"
        ],
        correct: 1,
        explanation: "Failover routing redirige tráfico si un endpoint falla."
    },

    {
        id: "net_013",
        category: "networking",
        service: "cloudfront",
        difficulty: "hard",
        question: "¿Qué tipo de contenido puede distribuir Amazon CloudFront?",
        options: [
            "Solo estático",
            "Solo dinámico",
            "Estático y dinámico",
            "Solo APIs"
        ],
        correct: 2,
        explanation: "CloudFront distribuye tanto contenido estático como dinámico."
    },
    {
        id: "net_014",
        category: "networking",
        service: "global_accelerator",
        difficulty: "hard",
        question: "¿Cuándo elegirías AWS Global Accelerator en lugar de CloudFront?",
        options: [
            "Para distribuir imágenes",
            "Para optimizar tráfico de aplicaciones no HTTP",
            "Para DNS",
            "Para contenido estático"
        ],
        correct: 1,
        explanation: "Global Accelerator mejora tráfico TCP/UDP, no contenido."
    },

    {
        id: "net_015",
        category: "networking",
        service: "api_gateway",
        difficulty: "hard",
        question: "¿Qué integración es típica con Amazon API Gateway?",
        options: [
            "Amazon EC2 únicamente",
            "AWS Lambda",
            "Amazon S3 solamente",
            "AWS Direct Connect"
        ],
        correct: 1,
        explanation: "API Gateway se integra comúnmente con Lambda."
    },
    {
        id: "net_016",
        category: "networking",
        service: "vpc",
        difficulty: "hard",
        question: "¿Qué componente controla el tráfico a nivel de subred en una VPC?",
        options: [
            "Security Groups",
            "NACLs",
            "Route 53",
            "CloudFront"
        ],
        correct: 1,
        explanation: "Las NACLs operan a nivel de subred."
    },
    {
        id: "net_017",
        category: "networking",
        service: "vpc",
        difficulty: "hard",
        question: "¿Qué componente controla el tráfico a nivel de instancia?",
        options: [
            "NACLs",
            "Route Tables",
            "Security Groups",
            "Internet Gateway"
        ],
        correct: 2,
        explanation: "Security Groups operan a nivel de instancia."
    },

    {
        id: "net_018",
        category: "networking",
        service: "vpn",
        difficulty: "hard",
        question: "¿Qué ventaja tiene AWS VPN frente a Direct Connect?",
        options: [
            "Mayor ancho de banda",
            "Menor coste inicial",
            "Menor latencia",
            "Conexión dedicada"
        ],
        correct: 1,
        explanation: "VPN es más rápida de implementar y más barata inicialmente."
    },
    {
        id: "net_019",
        category: "networking",
        service: "privatelink",
        difficulty: "hard",
        question: "¿Qué servicio permite exponer un servicio a otras VPCs sin usar IP pública?",
        options: [
            "AWS Transit Gateway",
            "AWS PrivateLink",
            "Amazon CloudFront",
            "AWS Global Accelerator"
        ],
        correct: 1,
        explanation: "PrivateLink expone servicios sin tráfico por internet."
    },
    {
        id: "net_020",
        category: "networking",
        service: "transit_gateway",
        difficulty: "hard",
        question: "¿Qué problema evita AWS Transit Gateway frente a VPC peering a gran escala?",
        options: [
            "Latencia",
            "Complejidad de mallas de red",
            "Costes de DNS",
            "Uso de IPs públicas"
        ],
        correct: 1,
        explanation: "Transit Gateway evita topologías complejas de peering."
    },
    {
        id: "net_hard_021",
        category: "networking",
        service: "cloudfront",
        difficulty: "hard",
        question: "Una empresa quiere servir contenido estático desde S3 con baja latencia global y protección contra picos de tráfico. ¿Qué servicio es el más adecuado?",
        options: [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Direct Connect"
        ],
        correct: 1,
        explanation: "CloudFront actúa como CDN y absorbe picos de tráfico."
    },
    {
        id: "net_hard_022",
        category: "networking",
        service: "global_accelerator",
        difficulty: "hard",
        question: "Una aplicación de trading requiere latencia mínima y rutas optimizadas para tráfico TCP global. ¿Qué servicio elegir?",
        options: [
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "Amazon Route 53",
            "AWS VPN"
        ],
        correct: 1,
        explanation: "Global Accelerator optimiza rutas de red para tráfico TCP/UDP."
    },
    {
        id: "net_hard_023",
        category: "networking",
        service: "route53",
        difficulty: "hard",
        question: "Una empresa quiere enrutar tráfico a la región más cercana al usuario. ¿Qué tipo de routing usaría en Route 53?",
        options: [
            "Failover",
            "Latency-based",
            "Weighted",
            "Simple"
        ],
        correct: 1,
        explanation: "Latency-based routing dirige tráfico a la región con menor latencia."
    },
    {
        id: "net_hard_024",
        category: "networking",
        service: "route53",
        difficulty: "hard",
        question: "¿Qué combinación proporciona alta disponibilidad a nivel DNS?",
        options: [
            "Weighted routing",
            "Failover routing con health checks",
            "Simple routing",
            "Static routing"
        ],
        correct: 1,
        explanation: "Failover routing usa health checks para redirigir tráfico."
    },
    {
        id: "net_hard_025",
        category: "networking",
        service: "direct_connect",
        difficulty: "hard",
        question: "¿Qué ventaja principal ofrece AWS Direct Connect frente a Site-to-Site VPN?",
        options: [
            "Configuración más rápida",
            "Conexión cifrada por defecto",
            "Ancho de banda más consistente",
            "Menor coste inicial"
        ],
        correct: 2,
        explanation: "Direct Connect ofrece ancho de banda dedicado y consistente."
    },

    {
        id: "net_hard_026",
        category: "networking",
        service: "site_to_site_vpn",
        difficulty: "hard",
        question: "Una empresa necesita una solución rápida para conectar su red on-premise con AWS usando internet público. ¿Qué servicio usar?",
        options: [
            "AWS Direct Connect",
            "AWS Site-to-Site VPN",
            "AWS Client VPN",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "Site-to-Site VPN usa internet pública y es rápida de implementar."
    },
    {
        id: "net_hard_027",
        category: "networking",
        service: "client_vpn",
        difficulty: "hard",
        question: "¿Qué escenario es más adecuado para AWS Client VPN?",
        options: [
            "Conectar dos VPCs",
            "Conectar data center on-premise",
            "Acceso remoto de usuarios individuales",
            "Distribución de contenido"
        ],
        correct: 2,
        explanation: "Client VPN permite acceso remoto seguro de usuarios."
    },
    {
        id: "net_hard_028",
        category: "networking",
        service: "privatelink",
        difficulty: "hard",
        question: "Una empresa quiere consumir un servicio alojado en otra VPC sin exponerlo a internet. ¿Qué servicio usar?",
        options: [
            "VPC Peering",
            "AWS Transit Gateway",
            "AWS PrivateLink",
            "AWS Global Accelerator"
        ],
        correct: 2,
        explanation: "PrivateLink permite acceso privado entre VPCs."
    },
    {
        id: "net_hard_029",
        category: "networking",
        service: "transit_gateway",
        difficulty: "hard",
        question: "Una empresa tiene 30 VPCs interconectadas mediante peering y la red se vuelve inmanejable. ¿Qué servicio resuelve este problema?",
        options: [
            "AWS PrivateLink",
            "AWS Transit Gateway",
            "AWS Direct Connect",
            "Amazon Route 53"
        ],
        correct: 1,
        explanation: "Transit Gateway centraliza y simplifica la conectividad."
    },
    {
        id: "net_hard_030",
        category: "networking",
        service: "vpc",
        difficulty: "hard",
        question: "¿Qué componente permite acceso a internet para recursos en una subred pública?",
        options: [
            "NAT Gateway",
            "Internet Gateway",
            "Transit Gateway",
            "VPC Endpoint"
        ],
        correct: 1,
        explanation: "Internet Gateway permite tráfico bidireccional con internet."
    },

    {
        id: "net_hard_031",
        category: "networking",
        service: "vpc",
        difficulty: "hard",
        question: "¿Qué solución permite a instancias en subred privada salir a internet sin recibir tráfico entrante?",
        options: [
            "Internet Gateway",
            "NAT Gateway",
            "VPC Peering",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "NAT Gateway permite salida a internet desde subredes privadas."
    },
    {
        id: "net_hard_032",
        category: "networking",
        service: "api_gateway",
        difficulty: "hard",
        question: "Una API pública debe protegerse contra abuso y escalar automáticamente. ¿Qué servicio es ideal?",
        options: [
            "Amazon CloudFront",
            "Amazon API Gateway",
            "AWS Global Accelerator",
            "AWS PrivateLink"
        ],
        correct: 1,
        explanation: "API Gateway ofrece throttling, seguridad y escalado."
    },
    {
        id: "net_hard_033",
        category: "networking",
        service: "api_gateway",
        difficulty: "hard",
        question: "¿Qué ventaja clave tiene API Gateway frente a exponer directamente un Load Balancer?",
        options: [
            "Menor latencia",
            "Gestión de autenticación y rate limiting",
            "Conectividad privada",
            "Optimización TCP"
        ],
        correct: 1,
        explanation: "API Gateway gestiona autenticación, cuotas y throttling."
    },
    {
        id: "net_hard_034",
        category: "networking",
        service: "cloudfront",
        difficulty: "hard",
        question: "¿Qué servicio puede usarse junto a CloudFront para proteger APIs?",
        options: [
            "AWS Direct Connect",
            "AWS WAF",
            "AWS VPN",
            "AWS Transit Gateway"
        ],
        correct: 1,
        explanation: "AWS WAF se integra con CloudFront para protección."
    },
    {
        id: "net_hard_035",
        category: "networking",
        service: "route53",
        difficulty: "hard",
        question: "¿Qué política de Route 53 se usa para pruebas A/B?",
        options: [
            "Latency-based",
            "Failover",
            "Weighted",
            "Geolocation"
        ],
        correct: 2,
        explanation: "Weighted routing permite dividir tráfico entre endpoints."
    },

    {
        id: "net_hard_036",
        category: "networking",
        service: "privatelink",
        difficulty: "hard",
        question: "¿Qué ventaja tiene PrivateLink frente a VPC Peering?",
        options: [
            "Menor latencia",
            "Menor coste",
            "No requiere CIDR no solapado",
            "Mayor ancho de banda"
        ],
        correct: 2,
        explanation: "PrivateLink no requiere CIDRs no solapados."
    },
    {
        id: "net_hard_037",
        category: "networking",
        service: "transit_gateway",
        difficulty: "hard",
        question: "¿Qué tipo de tráfico puede enrutar AWS Transit Gateway?",
        options: [
            "Solo tráfico VPC",
            "Solo tráfico on-premise",
            "VPC, VPN y Direct Connect",
            "Solo tráfico HTTP"
        ],
        correct: 2,
        explanation: "Transit Gateway enruta tráfico VPC, VPN y Direct Connect."
    },
    {
        id: "net_hard_038",
        category: "networking",
        service: "direct_connect",
        difficulty: "hard",
        question: "¿Qué suele combinarse con Direct Connect para alta disponibilidad?",
        options: [
            "Client VPN",
            "Site-to-Site VPN",
            "PrivateLink",
            "CloudFront"
        ],
        correct: 1,
        explanation: "Se suele usar VPN como respaldo de Direct Connect."
    },
    {
        id: "net_hard_039",
        category: "networking",
        service: "global_accelerator",
        difficulty: "hard",
        question: "¿Qué tipo de direcciones IP proporciona AWS Global Accelerator?",
        options: [
            "Dinámicas",
            "Privadas",
            "Anycast estáticas",
            "Locales"
        ],
        correct: 2,
        explanation: "Global Accelerator usa IPs Anycast estáticas."
    },
    {
        id: "net_hard_040",
        category: "networking",
        service: "vpc",
        difficulty: "hard",
        question: "¿Qué componente decide a dónde se envía el tráfico dentro de una VPC?",
        options: [
            "Security Groups",
            "NACLs",
            "Route Tables",
            "Internet Gateway"
        ],
        correct: 2,
        explanation: "Las Route Tables controlan el enrutamiento en la VPC."
    }
]