# ☁️ AWS Quiz Tracker

> Plataforma interactiva para preparar la certificación  
> **AWS Cloud Practitioner**, diseñada para aprender **de forma práctica, visual y efectiva**.

Puedes visitar la app en [AWS Quiz Tracker](https://albamdls.github.io/aws-quiz-tracker/).

---

## 🚀 ¿Qué es AWS Quiz Tracker?

**AWS Quiz Tracker** es una aplicación web educativa creada a partir de una **necesidad real**:  
practicar para la certificación **AWS Cloud Practitioner** de una forma **más interactiva, clara y entretenida**.

Durante la preparación encontré muchos recursos:
- 📄 Muy completos, pero **poco prácticos o aburridos**
- ❓ Prácticos, pero con **preguntas demasiado sencillas**

Esta app nace para cubrir ese hueco:  
una herramienta que combina **preguntas de calidad**, **feedback visual claro** y **seguimiento del progreso**, permitiendo no solo hacer tests, sino **aprender de verdad cómo funciona AWS**.

---

## 🧪 Modos de práctica

### 📝 Modo Examen
- Cronómetro activo  
- Sin feedback inmediato  
- Resultados y corrección al finalizar  
- Simula el entorno real del examen

### 📘 Modo Estudio
- Feedback inmediato por pregunta  
- Corrección visual de aciertos y fallos  
- Ideal para aprender y reforzar conceptos

---

## 🗺️ Minimapa inteligente

Durante el test, la app muestra un **minimapa de preguntas** que permite:

- Navegar entre preguntas libremente
- Ver cuáles están respondidas o pendientes
- En modo estudio:
  - 🟢 Correctas
  - 🔴 Incorrectas
- En modo examen:
  - Solo estado (sin spoilers)

---

## 📚 Tipos de tests

### 🌍 Tests Globales
- Simulacros completos tipo examen oficial
- Selección manual del test
- Historial por examen con estados visuales:
  - 🟢 ≥70% · Aprobado
  - 🟠 50–69% · Cerca
  - 🔴 <50% · A reforzar

### 🧩 Tests por Categorías
- Selección de una o varias categorías de AWS
- Número de preguntas configurable
- Ideal para reforzar puntos débiles

---

## 🛠️ Tecnologías

- **React** + Hooks  
- **Vite**
- **Tailwind CSS** (dark UI + glassmorphism)
- **Lucide Icons**

Arquitectura modular (`pages / components / utils`)  
Sistema de scoring desacoplado y reutilizable.

---

## 📊 Progreso y estadísticas

La aplicación registra:
- Tests realizados
- Total de preguntas y aciertos
- % de acierto global
- Progreso por categoría
- Historial de intentos

Todo orientado a **medir mejora real**, no solo hacer tests.

---

## 📌 Disclaimer

Las preguntas de práctica se utilizan con fines **educativos**.  
Este proyecto **no está afiliado ni patrocinado por Amazon Web Services (AWS)**.

---

Proyecto creado por **Alba Mora de la Sen** con mucho ❤️ y muchas horas de estudio ☁️
