"use client";
import SubHeader from "@/components/header/subHeader";
import PDFPreview from "./_Components/pdf/pdfPrev";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function InstituicaoPage() {
  const [nome, setNome] = useState("")
  const [inicio, setInicio] = useState("")
  const [fim, setFim] = useState("")


  return (
    <main className="sm:ml-64">
      <SubHeader title="Declarações" href={""} />

      <div className="flex flex-col lg:flex-row w-full">

      <div className=" flex flex-col gap-2 p-3 lg:w-[450px]">

        <div className=" w-auto flex gap-4">
          <Label htmlFor="Nome" className="pl-2 pb-1 w-15">Nome: </Label>
          <Input placeholder="Nome do Aluno..." name="Nome" onChange={(e) => { setNome(e.target.value) }} />
        </div>

        <div className=" w-auto flex gap-4 ">
          <Label htmlFor="Inicio" className="pl-2 pb-1 w-15" >Inicio: </Label>
          <Input name="Inicio" placeholder="Data de inicio..." onChange={(e) => { setInicio(e.target.value) }} />
        </div>

        <div className=" w-auto flex gap-4">
          <Label htmlFor="Fim" className="pl-2 pb-1 w-15">Fim: </Label>
          <Input name="Fim" placeholder="Data de Fim..." onChange={(e) => { setFim(e.target.value) }} />
        </div>


      </div>

      <div className="w-full">
      <PDFPreview 
        nome={nome}
        dataInicio={inicio}
        dataFim={fim} />
      </div>

      </div>


    </main>
  );
}