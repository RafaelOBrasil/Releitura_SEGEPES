"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useCallback } from "react";

export function Logout() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      await fetch("/api/logout"); // Chama o endpoint que remove o cookie
      router.replace("/"); // Redireciona sem adicionar ao histórico
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }, [router]); // Adicionando 'router' como dependência do useCallback
// Apenas handleLogout como dependência

  return <Button onClick={handleLogout}>Sair</Button>;
}