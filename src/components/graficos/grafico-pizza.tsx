"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LucideAlbum } from "lucide-react";

const chartData = [
  {
    disciplinas: "Administração",
    alunos: 275,
    fill: "var(--color-Administracao)",
  },
  { disciplinas: "Rádio e TV", alunos: 200, fill: "var(--color-radio_tv)" },
  { disciplinas: "Multimídia", alunos: 173, fill: "var(--color-multimidia" },

  {
    disciplinas: "Jogos Digitais",
    alunos: 187,
    fill: "var(--color-jogos_digitais)",
  },
  {
    disciplinas: "Informática",
    alunos: 90,
    fill: "var(--color-informatica)",
  },
  {
    disciplinas: "Gastronomia",
    alunos: 90,
    fill: "var(--color-gastronomia)",
  },
  { disciplinas: "Eventos", alunos: 90, fill: "var(--color-eventos)" },
];

const chartConfig = {
  alunos: {
    label: "Alunos",
  },
  Administracao: {
    label: "Administração",
    color: "hsl(221, 100%, 64%)",
  },
  radio_tv: {
    label: "Rádio e TV",
    color: "hsl(196, 100%, 58%)",
  },
  jogos_digitais: {
    label: "Jogos Digitais",
    color: "hsl(268, 100%, 45%)",
  },
  multimidia: {
    label: "Multimídia",
    color: "hsl(174, 68%, 45%)",
  },
  informatica: {
    label: "Informática",
    color: "hsl(150, 82%, 50%)",
  },
  gastronomia: {
    label: "Gastronomia",
    color: "hsl(45, 100%, 51%)",
  },
  eventos: {
    label: "Eventos",
    color: "hsl(348, 96%, 69%)",
  },
} satisfies ChartConfig;

export function Grafico_pizza() {
  return (
    <Card className=" flex-col justify-center hidden sm:flex ">
      <CardHeader className="flex flex-col items-center pb-0">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <LucideAlbum className="w-5 h-5 text-blue-500" />
          Total de alunos/disciplinas
        </CardTitle>
        
        <CardDescription className="text-center text-muted-foreground">
          Dados referentes ao ano letivo de 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[450px] pb-0 [&_.recharts-pie-label-text]:fill-foreground "
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="alunos"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                disciplinas,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 1.2; // aumenta distância
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const fill = chartData[index]?.fill || "#000";

                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                    fill={fill}
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {disciplinas}
                  </text>
                );
              }}
              nameKey="disciplinas"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mostra o total de alunos por disciplinas
        </div>
      </CardFooter>
    </Card>
  );
}
