import Link from "next/link";

export default function Usuarios() {
  return (
    <main className="sm:ml-64 flex flex-col justify-center items-center h-auto" >
      <div className="flex flex-col items-center justify-center w-full p-4 bg-white">
        <h1 className="text-2xl font-bold">Cadastrar Novo Usuários</h1>
        <p className="mt-2 text-gray-600">Cadastre seus usuários aqui.</p>
      </div>

      <Link
        href={"/dashboard"}
        className="flex items-center justify-center w-40 p-2 mt-4 bg-gray-600"
      >
        <span>Voltar</span>
      </Link>
    </main>
  );
}
