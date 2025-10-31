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
import { Pencil, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Props, Funcionarios } from "@/types/listas";

const itemsPerPage = 10;

export default function ListFuncionarios({ funcionarios }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const funcionariosKeys = funcionarios?.[0]
    ? Object.keys(funcionarios[0]).filter((key) => key !== "id")
    : [];

  const filteredFuncionarios = (funcionarios ?? []).filter((funcionarios) =>
    (funcionarios.nome ?? "").toLowerCase().includes(search.toLowerCase()) ||
    (funcionarios.funcao ?? "").toLowerCase().includes(search.toLowerCase()) ||
    (funcionarios.email ?? "").toLowerCase().includes(search.toLowerCase()) ||
    (funcionarios.admissao ?? "").includes(search.replace("/", ""))
  );

  const totalPages = Math.ceil(filteredFuncionarios.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedFuncionarios = filteredFuncionarios.slice(start, end);

  function formatarTexto(texto: string): string {
    const map = {
      funcao: "Função",
      nome: "Nome",
      email: "Email",
      descricao: "Descrição",
      admissao: "Admissão"
    };

    const chave = texto.toLowerCase();
    if (map[chave as keyof typeof map]) {
      return map[chave as keyof typeof map];
    }

    // Transformar camelCase ou snake_case em "Camel Case"
    return texto
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/^./, (str) => str.toUpperCase());
  }


  return (
    <div className="space-y-4 m-6">
      {funcionarios && funcionarios.length > 0 && (
        <Input
          placeholder="Nome ou CNPJ"
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
          <TableRow>
            {funcionariosKeys.map((key, index) => (
              <TableHead className="text-white" key={index}>
                {formatarTexto(key)}
              </TableHead>
            ))}
            <TableHead className="text-white text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedFuncionarios.map((funcionarios) => (
            <TableRow key={funcionarios.id}>
              {funcionariosKeys.map((key, idx) => (
                <TableCell key={idx}>
                  {funcionarios[key as keyof Funcionarios]}
                </TableCell>
              ))}
              <TableCell className="flex justify-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-blue-700 hover:text-white rounded-full"
                  onClick={() => {}}
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-green-700 hover:text-white rounded-full"
                >
                  <Clipboard size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="flex flex-row justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
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
              href="#"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
