📚 Biblioteca com TypeScript, Express e Supabase

Este projeto é uma API para gerenciamento de livros, desenvolvida com **TypeScript** e **Express**, conectada ao banco de dados **PostgreSQL** via **Supabase**.

🚀 Funcionalidades

- ✅ Criar livros
- ✅ Listar todos os livros
- ✅ Buscar livro por ID
- ✅ Atualizar informações de um livro
- ✅ Deletar livros


🧠 Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Supabase](https://supabase.com/) (como backend e banco de dados PostgreSQL)
- [Node.js](https://nodejs.org/)


🛠️ Instalação e uso

1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instale as dependências
npm install

3. Configure o Supabase
Crie uma conta gratuita em https://supabase.com

Crie um novo projeto
Vá em Project Settings > API e copie:

URL do projeto
anon public API key


4. Configure sua tabela livros no Supabase
No Supabase > SQL Editor, rode o seguinte SQL:

create table if not exists livros (
  id serial primary key,
  titulo text,
  autor text,
  isbn text,
  ano_publicacao integer
);

5. Inicie o servidor
npm run dev
A API estará disponível em:
👉 http://localhost:3000/api/livros

📬 Endpoints disponíveis
Método	Rota	Descrição
GET	/api/livros	Lista todos os livros
GET	/api/livros/:id	Busca livro por ID
POST	/api/livros	Cria um novo livro
PUT	/api/livros/:id	Atualiza um livro
DELETE	/api/livros/:id	Remove um livro

🧑‍💻 Exemplo de requisição para criar um livro (POST)
{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "isbn": "9780132350884",
  "ano_publicacao": 2008
}

🧠 Conceitos abordados
Tipagem estática com TypeScript

Inversão de Controle e Injeção de Dependência

Separação de responsabilidades (MVC simplificado)

Integração com banco de dados na nuvem

Boas práticas de arquitetura

👨‍🏫 Autor
Desenvolvido por MysterySalsicha (Igor Silva), como parte de um projeto prático para aprofundar os conhecimentos em TypeScript com backend.


🛡️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.








