"use client"

import SubHeader from "@/components/header/subHeader"
import List_Instituicoes from "@/app/(private)/instituicoes/_components/list_instituicoes";
import { Instituicoes } from "@/types/listas"
import { useEffect, useState } from "react";



export default function InstituicaoPage() {
  const [instituicoes, setInstituicoes] = useState<Instituicoes[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/instituicoes");
        if (!res.ok) throw new Error("Erro ao buscar usuários!");
        
        const data = await res.json();
        setInstituicoes(data);
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
      <SubHeader title="Instituiçoes" href={""} />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {instituicoes && <List_Instituicoes  instituicoes={instituicoes} />}
    </main>
  )
}