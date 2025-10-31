// app/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import './globals.css'; // Certifique-se de que o caminho está correto

export default async function Home() {
  const token = (await cookies()).get('token')?.value;

  if (token) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }

  // Essa parte nunca renderiza, pois há redirecionamento antes
  return null;
}
