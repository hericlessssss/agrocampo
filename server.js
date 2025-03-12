import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();
  
  app.use(cors());

  // Rota da API do Google Places
  app.get('/api/google-reviews', async (req, res) => {
    try {
      const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
      const placeId = process.env.VITE_GOOGLE_PLACE_ID;

      if (!apiKey || !placeId) {
        return res.status(500).json({
          status: 'error',
          message: 'Configurações da API não encontradas'
        });
      }

      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'AGROCAMPO/1.0'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 'OK' && data.result) {
        return res.json({
          status: 'success',
          data: {
            reviews: data.result.reviews || [],
            rating: data.result.rating,
            total_ratings: data.result.user_ratings_total
          }
        });
      } else {
        throw new Error(data.error_message || 'Erro na API do Google Places');
      }
    } catch (error) {
      console.error('Erro ao buscar avaliações:', error);
      return res.status(500).json({
        status: 'error',
        message: 'Não foi possível obter as avaliações'
      });
    }
  });

  // Configuração para desenvolvimento
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  // Configuração para produção
  if (isProduction) {
    app.use(express.static(join(__dirname, 'dist')));
    
    // Configura todas as rotas para retornar o index.html
    app.get('/*', (req, res) => {
      res.sendFile(join(__dirname, 'dist', 'index.html'));
    });
  }

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`
🚀 Servidor rodando em http://localhost:${port}
🌍 Modo: ${isProduction ? 'produção' : 'desenvolvimento'}
🔑 API Key: ${process.env.VITE_GOOGLE_MAPS_API_KEY ? 'Configurada' : 'Não configurada'}
📍 Place ID: ${process.env.VITE_GOOGLE_PLACE_ID ? 'Configurado' : 'Não configurado'}
    `);
  });
}

createServer().catch((err) => {
  console.error('Erro ao iniciar o servidor:', err);
  process.exit(1);
});