import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useTokenExpiration() {
  const [minutesRemaining, setMinutesRemaining] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function fetchTokenInfo() {
      try {
        const res = await fetch("/api/token-info", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Erro desconhecido");
        }

        if (data.exp) {
          const expirationDate = new Date(data.exp * 1000);
          const now = new Date();
          const remainingTime = expirationDate.getTime() - now.getTime();
          const minutes = Math.floor(remainingTime / 60000);
          setMinutesRemaining(minutes);

          if (remainingTime == 0) {
            alert("Sessão expirada. Faça login novamente.");
            router.push("/login");
          }
        }
      } catch (err) {
        console.error("Erro ao obter info do token:", err);
        router.push("/login");
      }
    }

    // Chamada inicial
    fetchTokenInfo();

    // Atualiza a cada 1 minuto
    // eslint-disable-next-line prefer-const
    intervalId = setInterval(fetchTokenInfo, 60000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [router]);

  return minutesRemaining;
}
