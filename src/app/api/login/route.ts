import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async  function POST(request: Request) {
  const { email, password } = await request.json();

  if (email !== 'g@gmail.com' || password !== '123456') {
    return NextResponse.json({ message: 'Credenciais Erradas' }, { status: 401 });
  }

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(key);


  const response = new NextResponse(JSON.stringify({ message: 'Logado com sucesso' }));
  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60,
  });

  return response;
}