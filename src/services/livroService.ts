import { createClient } from '@supabase/supabase-js';
import { Livro } from '../models/livro';

//Crie um novo projeto no https://supabase.com/ e pegue a URL e a API Key (em Project Settings > Data API).
const supabaseUrl = ''; //Deve colocar a URL que pegou no site
const supabaseKey = '';//Deve colocar a API Key que pegou no site
const supabase = createClient(supabaseUrl, supabaseKey);

export class LivroService {
  async criarLivro(livro: Livro): Promise<Livro> {
    const { data, error } = await supabase
      .from('livros')
      .insert([{ ...livro }])
      .select()
      .single();
    if (error) throw new Error(`Erro ao criar livro: ${error.message}`);
    return data as Livro;
  }

  async listarLivros(): Promise<Livro[]> {
    const { data, error } = await supabase.from('livros').select('*');
    if (error) throw new Error(`Erro ao listar livros: ${error.message}`);
    return data as Livro[];
  }

  async buscarLivroPorId(id: number): Promise<Livro | null> {
    const { data, error } = await supabase.from('livros').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw new Error(`Erro ao buscar livro: ${error.message}`);
    }
    return data as Livro;
  }

  async atualizarLivro(id: number, livro: Partial<Livro>): Promise<Livro> {
    const { data, error } = await supabase.from('livros').update(livro).eq('id', id).select().single();
    if (error) throw new Error(`Erro ao atualizar livro: ${error.message}`);
    return data as Livro;
  }

  async deletarLivro(id: number): Promise<void> {
    const { error } = await supabase.from('livros').delete().eq('id', id);
    if (error) throw new Error(`Erro ao deletar livro: ${error.message}`);
  }
}