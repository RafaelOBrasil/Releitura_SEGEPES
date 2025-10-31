"use client";

import SubHeader from "@/components/header/subHeader";
import List_Aluno from "@/app/(private)/alunos/_components/list_alunos";
import Loading from "@/components/loading/loading";
import { useAlunos } from "@/hooks/useUsuarios";


export default function InstituicaoPage() {

  const { alunos, loading, error } = useAlunos("/api/alunos");

  return (
    <main className="sm:ml-64">
      <SubHeader title="Alunos" href={"/alunos/cadastrar"} />
      {loading && <Loading/>}
      {error && <p>{error}</p>}
      {alunos && <List_Aluno alunos={alunos} />}
    </main>
  );
}