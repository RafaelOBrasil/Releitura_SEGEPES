"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Props } from "@/types/listas";
import PopUpUser from "./popupAlunos";
import PopUpEditUser from "./popupEditarAlunos";


export default function ListAluno({ alunos }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;



  const filteredAlunos = (alunos ?? []).filter(
    (aluno) =>
      (aluno.nome ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (aluno.email ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (aluno.matricula ?? "").includes(search)
  );

  const totalPages = Math.ceil(filteredAlunos.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedAlunos = filteredAlunos.slice(start, end);

  const tableTitle = [
    "Nome",
    "Matrícula",
    "Telefone",
    "Email",]

  return (
    <div className="space-y-4 m-6">
      {alunos && alunos.length > 0 && (
        <Input
          placeholder="Nome ou Matrícula"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-80"
        />
      )}



      <Table className="border border-black rounded-2xl overflow-hidden">
        <TableHeader className="bg-blue-600 text-white">

            <TableRow className="hover:bg-blue-600">
              {tableTitle.map((Title, index) => (
                <TableHead className="text-white" key={index}>
                  {Title}
                </TableHead>
              ))
              }
              <TableHead className="text-white text-center">Ações</TableHead>
            </TableRow>
        </TableHeader>
          <TableBody >

            {paginatedAlunos.map((aluno) => (


              <TableRow key={aluno.id}>
                <TableCell>
                  {aluno.nome}
                </TableCell>
                <TableCell>
                  {aluno.matricula}
                </TableCell>
                <TableCell>
                  {aluno.telefone}
                </TableCell>
                <TableCell>
                  {aluno.email}
                </TableCell>

                <TableCell className="flex justify-center gap-2">

                  <PopUpEditUser {...aluno}/>
                  <PopUpUser {...aluno} />

                </TableCell>
              </TableRow>
            ))}
          </TableBody>


      </Table>


        <Pagination className="flex flex-row justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious

                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="px-2 py-1 text-muted-foreground">
                {page > 1 ? page - 1 : ""}
              </span>
            </PaginationItem>
            <PaginationItem>
              <span className="px-2 py-1 font-bold">{page}</span>
            </PaginationItem>
            <PaginationItem>
              <span className="px-2 py-1 text-muted-foreground">
                {page < totalPages ? page + 1 : ""}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                aria-disabled={page === totalPages}
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

  );
}
