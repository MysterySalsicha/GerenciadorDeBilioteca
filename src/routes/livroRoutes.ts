import express, { Request, Response, RequestHandler } from 'express';
import { LivroService } from '../services/livroService';
import { Livro } from '../models/livro';

const router = express.Router();
const livroService = new LivroService();

// deixar a tela mais apresentavel com HTML simples
const renderLivroHtml = (livro: Livro): string => `
  <html>
    <head>
      <title>Livro: ${livro.titulo}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #333; }
        p { font-size: 16px; }
      </style>
    </head>
    <body>
      <h1>${livro.titulo}</h1>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p><strong>ISBN:</strong> ${livro.isbn}</p>
      <p><strong>Ano de Publicação:</strong> ${livro.ano_publicacao}</p>
    </body>
  </html>
`;

const criarLivroHandler: RequestHandler<{}, any, Livro> = async (req, res) => {
  try {
    const livro = await livroService.criarLivro(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: (error as Error).message });
  }
};
router.post('/livros', criarLivroHandler);

const listarLivrosHandler: RequestHandler = async (req, res) => {
  try {
    const livros = await livroService.listarLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: (error as Error).message });
  }
};
router.get('/livros', listarLivrosHandler);

const buscarLivroPorIdHandler: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const livro = await livroService.buscarLivroPorId(id);
    if (!livro) {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    } else {
      // Verifica se o cliente aceita HTML (navegador)
      if (req.headers.accept && req.headers.accept.includes('text/html')) {
        res.set('Content-Type', 'text/html');
        res.send(renderLivroHtml(livro));
      } else {
        res.json(livro);
      }
    }
  } catch (error) {
    res.status(500).json({ mensagem: (error as Error).message });
  }
};
router.get('/livros/:id', buscarLivroPorIdHandler);


export default router;