"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Input
} from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"
import { Pencil, Clipboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import SubHeader from "@/components/header/subHeader"

type User = {
  id: number
  name: string
  matricula: string
  telefone: string
  email: string
}

const users: User[] = [
  { id: 1, name: "Ana Paula", matricula: "101.202.303-44", telefone: "(27) 99901-1234", email: "ana.paula@gmail.com" },
  { id: 2, name: "Bruno Costa", matricula: "202.303.404-55", telefone: "(27) 99882-5678", email: "bruno.costa@hotmail.com" },
  { id: 3, name: "Carla Mendes", matricula: "303.404.505-66", telefone: "(27) 99773-9123", email: "carla.mendes@outlook.com" },
  { id: 4, name: "Daniel Souza", matricula: "404.505.606-77", telefone: "(27) 99664-3478", email: "daniel.souza@gmail.com" },
  { id: 5, name: "Eduarda Lima", matricula: "505.606.707-88", telefone: "(27) 99555-7789", email: "eduarda.lima@yahoo.com" },
  { id: 6, name: "Felipe Martins", matricula: "606.707.808-99", telefone: "(27) 99446-3344", email: "felipe.martins@gmail.com" },
  { id: 7, name: "Gabriela Rocha", matricula: "707.808.909-00", telefone: "(27) 99337-9821", email: "gabirocha@live.com" },
  { id: 8, name: "Heitor Faria", matricula: "808.909.010-11", telefone: "(27) 99228-6735", email: "heitor.faria@hotmail.com" },
  { id: 9, name: "Isabela Ferreira", matricula: "909.010.121-22", telefone: "(27) 99119-2211", email: "isabela.ferreira@gmail.com" },
  { id: 10, name: "João Vitor", matricula: "010.121.232-33", telefone: "(27) 99001-1100", email: "joaovitor@gmail.com" },
  { id: 11, name: "Karen Oliveira", matricula: "111.222.333-44", telefone: "(27) 98888-1212", email: "karen.oliveira@hotmail.com" },
  { id: 12, name: "Lucas Ribeiro", matricula: "222.333.444-55", telefone: "(27) 98777-2323", email: "lucas.ribeiro@gmail.com" },
  { id: 13, name: "Mariana Alves", matricula: "333.444.555-66", telefone: "(27) 98666-3434", email: "mariana.alves@live.com" },
  { id: 14, name: "Nicolas Torres", matricula: "444.555.666-77", telefone: "(27) 98555-4545", email: "nicolas.torres@yahoo.com" },
  { id: 15, name: "Olívia Teixeira", matricula: "555.666.777-88", telefone: "(27) 98444-5656", email: "olivia.teixeira@gmail.com" },
  { id: 16, name: "Pedro Henrique", matricula: "666.777.888-99", telefone: "(27) 98333-6767", email: "pedro.henrique@hotmail.com" },
  { id: 17, name: "Queila Santos", matricula: "777.888.999-00", telefone: "(27) 98222-7878", email: "queila.santos@gmail.com" },
  { id: 18, name: "Rafael Nunes", matricula: "888.999.000-11", telefone: "(27) 98111-8989", email: "rafael.nunes@outlook.com" },
  { id: 19, name: "Sabrina Castro", matricula: "999.000.111-22", telefone: "(27) 98000-9090", email: "sabrina.castro@hotmail.com" },
  { id: 20, name: "Thiago Gomes", matricula: "000.111.222-33", telefone: "(27) 97979-1010", email: "thiago.gomes@gmail.com" },
  { id: 21, name: "Ursula Vidal", matricula: "123.234.345-45", telefone: "(27) 97878-2121", email: "ursula.vidal@gmail.com" },
  { id: 22, name: "Victor Hugo", matricula: "234.345.456-56", telefone: "(27) 97767-3232", email: "victor.hugo@hotmail.com" },
  { id: 23, name: "Wesley Dias", matricula: "345.456.567-67", telefone: "(27) 97656-4343", email: "wesley.dias@gmail.com" },
  { id: 24, name: "Xuxa Lopes", matricula: "456.567.678-78", telefone: "(27) 97545-5454", email: "xuxa.lopes@live.com" },
  { id: 25, name: "Yasmin Prado", matricula: "567.678.789-89", telefone: "(27) 97434-6565", email: "yasmin.prado@yahoo.com" },
  { id: 26, name: "Zeca Barreto", matricula: "678.789.890-90", telefone: "(27) 97323-7676", email: "zeca.barreto@gmail.com" },
  { id: 27, name: "Aline Silva", matricula: "789.890.901-01", telefone: "(27) 97212-8787", email: "aline.silva@hotmail.com" },
  { id: 28, name: "Breno Marques", matricula: "890.901.012-12", telefone: "(27) 97101-9898", email: "breno.marques@gmail.com" },
  { id: 29, name: "Camila Rezende", matricula: "901.012.123-23", telefone: "(27) 97000-0000", email: "camila.rezende@outlook.com" },
  { id: 30, name: "Diego Lima", matricula: "012.123.234-34", telefone: "(27) 96999-1111", email: "diego.lima@gmail.com" },
]


const itemsPerPage = 10

export default function UserTablePage() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.matricula.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage
  const paginatedUsers = filteredUsers.slice(start, end)

  return (
    <main className="sm:ml-64">
      <SubHeader title="Alunos"/>
      <div className="space-y-4 m-6">
        {/* Input de busca */}
        <Input
          placeholder="Nome ou Matrícula"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="w-80"
        />

        <Table className="border rounded-md overflow-hidden">
          <TableHeader className="bg-blue-600 text-white ">
            <TableRow >
              <TableHead className="text-white">Nome</TableHead>
              <TableHead className="text-white">CPF</TableHead>
              <TableHead className="text-white">Telefone</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{`${(start + index + 1)} - ${user.name}`}</TableCell>
                <TableCell>{user.matricula}</TableCell>
                <TableCell>{user.telefone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Button size="icon" variant="ghost" className="hover:bg-blue-700 hover:text-white rounded-full">
                    <Pencil size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-green-700 hover:text-white rounded-full">
                    <Clipboard size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Paginação */}
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
    </main>
  )
}

