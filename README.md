# Protocolo Paco — Sistema de Contingencia (Pista 01)

App Next.js (App Router) + Tailwind CSS. Sin backend, sin variables de entorno.

## Desplegar en Vercel en menos de 2 minutos (sin GitHub)

Vercel no tiene una zona de "arrastrar carpeta" en su web — para desplegar sin conectar un repositorio se usa la **Vercel CLI**, que sube los archivos directo desde tu máquina.

1. Instala la CLI (una sola vez):
   npm install -g vercel
2. Dentro de la carpeta del proyecto, inicia sesión (abre el navegador para autenticarte):
   vercel login
3. Despliega:
   vercel
   Te hará un par de preguntas (acepta los valores por defecto: Set up and deploy? -> Yes, Link to existing project? -> No, Project name -> Enter, Directory -> Enter). Vercel detecta Next.js automáticamente.
4. Cuando termine, te dará una URL de vista previa. Para publicarla como definitiva:
   vercel --prod
5. Listo: tendrás una URL tipo https://protocolo-paco.vercel.app

### Alternativa con GitHub

1. Sube esta carpeta a un repositorio en GitHub/GitLab/Bitbucket.
2. Entra a vercel.com -> Add New Project -> importa el repositorio.
3. Vercel detecta Next.js automáticamente. Click en Deploy.

## Desarrollo local

npm install
npm run dev

Abre http://localhost:3000.
