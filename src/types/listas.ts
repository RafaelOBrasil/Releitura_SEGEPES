
export interface Instituicoes extends Endereco{
  id?: number;
  nome?: string;
  CNPJ?: string;
  telefone?: string;
  endereco?: string
  
}

export interface Funcionarios extends Endereco{
  id?: number;
  nome?: string;
  email?: string;
  funcao?: string;
  descricao?: string;
  admissao?: string
}

export interface Alunos extends Endereco{
  id?: number;
  nome?: string;
  matricula?: string;
  telefone?: string;
  email?: string;


}
export interface Endereco {
  id?: number;
  rua?: string;
  numero?: string;
  cidade?: string;
  bairro?: string;
  estado?: string;
  cep?: string
  
}


export interface Props {
  alunos?: Alunos[]
  instituicoes?: Instituicoes[] 
  funcionarios?: Funcionarios[]

}