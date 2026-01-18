# ☁️ AWS Quiz Tracker

> Plataforma interactiva para preparar la certificación **AWS Cloud Practitioner**  
> Diseñada con un enfoque **visual, práctico y orientado a resultados**.

--

## 🚀 ¿Qué es AWS Quiz Tracker?

**AWS Quiz Tracker** es una aplicación web educativa creada a partir de una **necesidad real y personal**:  
poder practicar para la certificación **AWS Cloud Practitioner** de una forma **interactiva, práctica, visual y entretenida**.

Durante el proceso de preparación encontré muchos recursos con información muy valiosa, pero que resultaban:
- 📄 **Demasiado teóricos o aburridos**, difíciles de mantener en el tiempo  
- ❓ **Demasiado sencillos**, poco representativos del nivel real del examen  

La mayoría eran *o muy completos pero poco prácticos*, o *prácticos pero sin profundidad*.

AWS Quiz Tracker nace para cubrir ese hueco:  
una herramienta que combine **calidad de preguntas**, **experiencia de usuario cuidada** y **feedback claro**, permitiendo no solo hacer tests, sino **entender errores, medir progreso y mejorar de forma consciente**.

El objetivo no es únicamente aprobar el examen, sino **aprender de verdad cómo funciona AWS** mientras se practica.

---

## 🧪 Modos de práctica

### 📝 Modo Examen
- Cronómetro activo
- Sin feedback inmediato
- Resultados y corrección al finalizar
- Simula el entorno real del examen oficial

### 📘 Modo Estudio
- Feedback inmediato por pregunta
- Corrección visual (aciertos / fallos)
- Ideal para aprender y reforzar conceptos

---

## 🗺️ Minimapa inteligente

Durante el test, la aplicación muestra un **minimapa de preguntas** que permite:

- Ver preguntas respondidas y pendientes
- Navegar libremente entre preguntas
- En modo estudio:
  - 🟢 Correctas
  - 🔴 Incorrectas
- En modo examen:
  - Solo estado de respuesta (sin spoilers)

---

## 📚 Tipos de tests

### 🌍 Tests Globales
- Simulacros completos tipo examen oficial
- Selección manual del test
- Historial de intentos por examen:
  - 🟢 Aprobado (≥70%)
  - 🟠 Cerca (50–69%)
  - 🔴 A reforzar (<50%)

### 🧩 Tests por Categorías
- Selección de una o varias categorías de AWS
- Número de preguntas configurable
- Ideal para reforzar puntos débiles

---

## 🧱 Arquitectura y datos

- Las preguntas están **normalizadas y estructuradas**
- Soporte para:
  - Preguntas de respuesta única
  - Preguntas de múltiples respuestas
- Sistema de scoring unificado y reutilizable
- Persistencia de estadísticas en local

---

## 🛠️ Tecnologías utilizadas

### Frontend
- **React** + Hooks
- **Vite** (build rápido y moderno)
- **Tailwind CSS** (UI glassmorphism, dark theme)
- **Lucide Icons**

### Lógica & estado
- Estado controlado con hooks (`useState`, `useEffect`, `useMemo`)
- Arquitectura modular (pages / components / utils)
- Sistema de scoring desacoplado

### UX & Diseño
- Dark UI con gradientes azul/verde
- Glassmorphism y efectos suaves
- Interfaz responsive
- Animaciones sutiles y feedback visual claro

---

## 📊 Estadísticas y progreso

La app registra:
- Tests realizados
- Total de preguntas respondidas
- Aciertos totales
- % de acierto global
- Progreso por categoría
- Historial de intentos (hasta 50)

Todo pensado para **medir mejora real**, no solo hacer tests.

---

## 📌 Origen de las preguntas

Las preguntas de práctica de los tests globales se han obtenido con fines **educativos** a partir de:

👉 https://kananinirav.com

Todos los derechos pertenecen a sus respectivos autores.  
Este proyecto **no está afiliado ni patrocinado por AWS**.

---

## ⚠️ Disclaimer

AWS Quiz Tracker es un proyecto **independiente**.  
Amazon Web Services, AWS y sus servicios son marcas registradas de Amazon.com, Inc.

---

Proyecto creado por **Alba Mora de la Sen** con mucho ❤️.
