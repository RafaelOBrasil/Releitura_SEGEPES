"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { ano: "2020", alunos: 186 },
  { ano: "2020", alunos: 305 },
  { ano: "2021", alunos: 237 },
  { ano: "2022", alunos: 73 },
  { ano: "2023", alunos: 209 },
  { ano: "2024", alunos: 214 },
]

const chartConfig = {
  alunos: {
    label: "Alunos",
    color: "hsl(221, 100%, 64%)",
  },
} satisfies ChartConfig

export function Grafico_Barra() {
  return (
    <Card className="flex flex-col justify-center">
      <CardHeader className="flex flex-col items-center pb-0">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          Alunos Aprovados por Ano
        </CardTitle>
        <CardDescription>
          Dados referentes aos últimos 6 anos letivos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="ano"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="alunos" fill="var(--color-alunos)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm items-center">

        <div className="leading-none text-muted-foreground">
          Mostra o total de alunos aprovados por ano
        </div>
      </CardFooter>
    </Card>
  )
}
