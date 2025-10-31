"use client";

import SubHeader from "@/components/header/subHeader";
import { Card, CardContent } from "@/components/ui/card";
import { LockKeyhole, LucideBookMarked, LucideFile, LucideRefreshCw } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

export default function InstituicaoPage() {
    const router = useRouter();
  
  return (
    <main className="sm:ml-64">
      <SubHeader title={"Utilitários"} href={""} />
      <div className="flex items-center justify-center w-full">
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-7 xl:gap-25 p-6">
          <Card
            className="
                    w-50 h-50 
                    xl:w-70 xl-h-70
                    flex flex-auto 
                    items-center 
                    justify-center 
                    font-bold 
                    text-[15px] 
                    hover:text-[18px] 
                    hover:bg-blue-600
                    cursor-pointer"
            onClick={() => router.push("/utilitarios/acessos")}
          >
            <CardContent className="flex flex-col items-center">
                <LockKeyhole size={70}/>
              <h1 className="select-none">Acessos</h1>
            </CardContent>
          </Card>

          <Card
            className="
                    w-50 h-50 
                    xl:w-70 xl-h-70
                    flex flex-auto 
                    items-center 
                    justify-center 
                    font-bold 
                    text-[15px] 
                    hover:text-[18px]
                    hover:bg-blue-600
                    cursor-pointer"
            onClick={() => redirect("#")}
          >
            <CardContent className="flex flex-col items-center">
                <LucideRefreshCw size={70}/>
              <h1 className="select-none">Troca de Módulo</h1>
            </CardContent>
          </Card>

          <Card
            className="
                    w-50 h-50 
                    xl:w-70 xl-h-70
                    flex flex-auto 
                    items-center 
                    justify-center 
                    font-bold 
                    text-[15px] 
                    hover:text-[18px]
                    hover:bg-blue-600
                    cursor-pointer"
            onClick={() => router.push("/utilitarios/declaracoes")}
          >
            <CardContent className="flex flex-col items-center">
                <LucideFile size={70}/>
              <h1 className="select-none">Declarações</h1>
            </CardContent>
          </Card>

          <Card
            className="
                    w-50 h-50 
                    xl:w-70 xl-h-70
                    flex flex-auto 
                    items-center 
                    justify-center 
                    font-bold 
                    text-[15px] 
                    hover:text-[18px]
                    hover:bg-blue-600
                    cursor-pointer"
            onClick={() => redirect("#")}
          >
            <CardContent className="flex flex-col items-center">
                <LucideBookMarked size={70}/>
              <h1 className="select-none">Histórico Escolar</h1>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
