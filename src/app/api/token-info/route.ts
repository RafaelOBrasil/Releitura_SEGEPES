import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return NextResponse.json({ error: "Token não encontrado" }, { status: 401 });
  }

  if (!secret) {
    return NextResponse.json({ error: "Chave JWT não configurada" }, { status: 500 });
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return NextResponse.json({ exp: payload.exp });
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    return (NextResponse.json({ error: "Token inválido" }, { status: 401 }),redirect("/")
  )}
}


