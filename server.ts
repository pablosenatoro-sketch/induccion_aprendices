import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  // Initialize Gemini client on server-side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API endpoint for SENA AI Chat / Tutor
  app.post('/api/sena-chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      const systemInstruction = `
      Eres "SENA Bot", un tutor virtual experto e inspirador y asistente pedagógico especializado en el Servicio Nacional de Aprendizaje (SENA) de Colombia y en el Reglamento del Aprendiz (Acuerdo 009 de 2024). 
      Tu tono es cordial, respetuoso, empático, institucional y claro. Ayudas a los nuevos aprendices y aprendices con formación previa a resolver dudas sobre derechos, deberes, estímulos, faltas, debido proceso y cultura institucional SENA.
      Responde siempre de manera concisa y basada en la normatividad SENA vigente (Acuerdo 009 de 2024).
      `;

      const contents = [
        ...(history || []),
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text || 'Hola, soy tu tutor SENA Bot. ¿En qué te puedo colaborar con respecto al Reglamento del Aprendiz (Acuerdo 009 de 2024)?' });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ 
        reply: 'Lo siento, en este momento el tutor virtual SENA Bot está experimentando alta demanda. Te sugiero consultar directamente el módulo de Reglamento del Aprendiz o la sección de Casos.' 
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
