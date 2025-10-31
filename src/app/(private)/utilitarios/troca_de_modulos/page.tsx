"use client";

import { useEffect, useState } from "react";
import SubHeader from "@/components/header/subHeader";
import { Alunos } from "@/types/listas"
import List_Aluno from "@/app/(private)/alunos/_components/list_alunos";
import Loading from "@/components/loading/loading";


export default function InstituicaoPage() {
  const [users, setUsers] = useState<Alunos[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/alunos");
        if (!res.ok) throw new Error("Erro ao buscar usuários!");
        
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido!");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="sm:ml-64">
      <SubHeader title="Alunos" href={""} />
      {loading && <Loading/>}
      {error && <p>{error}</p>}
      {users && <List_Aluno alunos={users} />}
    </main>
  );
}