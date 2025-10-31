import { Alunos } from "@/types/listas";
import { useState, useEffect } from "react";

// hooks/useAlunos.ts
export function useAlunos(api: string) {
  const [alunos, setAlunos] = useState<Alunos[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("Erro ao buscar usuários!");
        
        const data = await res.json();
        setAlunos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido!");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [api]);

  return { alunos, loading, error };
}


