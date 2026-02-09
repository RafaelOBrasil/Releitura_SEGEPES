"use client"

import SubHeader from "@/components/header/subHeader"
import ListFuncionarios from "@/app/(private)/funcionarios/_components/list_funcionarios";
import { Funcionarios } from "@/types/listas"
import { useEffect, useState } from "react";
import Loading from "@/components/loading/loading";



export default function FuncionariosPage() {
  const [funcionarios, setfuncionarios] = useState<Funcionarios[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/professores");
        if (!res.ok) throw new Error("Erro ao buscar!");
        
        const data = await res.json();
        setfuncionarios(data);
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
      <SubHeader title="Funcionarios" href={""} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {funcionarios && <ListFuncionarios funcionarios={funcionarios} />}
    </main>
  )
}