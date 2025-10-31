
import { Grafico_Barra } from "@/components/graficos/grafico-barra";
import { Grafico_pizza } from "@/components/graficos/grafico-pizza";
import SubHeader from "@/components/header/subHeader";
import { Mobile_grafico_pizza } from "@/components/mobile/graficos/grafico-pizza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Deshboard() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token'); // ou o nome do seu cookie

  if (!token) {
    redirect('/login');
  }

  return (
    <main className="sm:ml-64 ">
      <SubHeader title="DashBoard" href={""} />
      <div className="w-full  h-10 flex justify-between items-center font-medium bg-blue-600 text-white ">
        <h2 className="ml-6 text-[12px] md:text-[1rem]">TOTAL DE TURMAS QUE IRÃO SE FORMAR EM 2025/2:</h2>
        <h2 className="text-[15px] md:text-2xl mr-6">20</h2>
      </div>

      <ScrollArea className="flex items-center h-screen w-full">

        <section className="grid grid-cols-1  xl:grid-cols-2 gap-6 m-6 mb-50 lg:mt-20 ">
          <Grafico_pizza />
          <Mobile_grafico_pizza/>
          <Grafico_Barra />
        </section>

      </ScrollArea>
    </main>

  );
}
