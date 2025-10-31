import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = NextResponse.redirect(new URL("/", request.url));
    
    // Removendo o cookie explicitamente
    response.cookies.set("token", "", { expires: new Date(0), path: "/" });

    return response;
  } catch (error) {
    console.error("Erro no logout:", error);
    return new NextResponse("Erro interno no logout", { status: 500 });
  }
}