# 💚 VAMatch

Tinder-style hiring for virtual assistants. Sandbox/demo.

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## 📦 Como deployar de graça (Vercel)

### Opção 1 — via interface (mais fácil)

1. Cria um repo no GitHub e dá push deste projeto:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USER/va-match.git
   git push -u origin main
   ```

2. Vai em [vercel.com](https://vercel.com) → Login com GitHub.

3. Clica em **"Add New... → Project"** → escolhe o repo `va-match` → clica em **Deploy**.

4. Em ~1 minuto você ganha um link tipo `va-match-xyz.vercel.app`. Manda pro time.

### Opção 2 — via CLI (mais rápido se você já usa terminal)

```bash
npm i -g vercel
vercel
```

Segue as perguntas (aceita os defaults). Pronto.

## 🔧 Stack

- Vite + React 18
- Tailwind CSS 3
- lucide-react (ícones)

## 📝 Notas

- Não tem login, não persiste dados — é só sandbox.
- A "análise da IA" é mockada. Pra integrar com OpenAI de verdade, troca a função `AIAnalysis` por chamadas reais à API.
- Os candidatos estão hardcoded em `MOCK_CANDIDATES` dentro de `src/App.jsx`.
