import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "INSTITUICOES_MOCK_DATA.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(jsonData);

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Erro ao ler INSTITUICOES_MOCK_DATA.json:", error);
    return NextResponse.json({ message: "Erro interno ao carregar os dados." }, { status: 500 });
  }
}