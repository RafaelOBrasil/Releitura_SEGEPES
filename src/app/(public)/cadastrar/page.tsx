'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // ← ESSENCIAL
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  }

  return (

    <main className=" bg-[url(/bg-segepes.png)] bg-no-repeat bg-cover bg-top bg-blend-overlay bg-black/60 flex flex-col items-center justify-center h-screen p-4">
      <Avatar className=" w-90 h-20 mb-12 sm:w-100 sm:h-25
       rounded-none" >
        <AvatarImage src={"/segepes.png"} alt="Logo SEGEPES" />


      </Avatar>
      <form onSubmit={handleLogin} method='POST' className="space-y-6 w-full max-w-sm text-white" >


        <Label htmlFor="email"className='mb-2'>Email</Label>

        <Input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border rounded bg-amber-50 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="password" className='mb-2'>Senha</Label>
        <Input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded bg-amber-50 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)

          }


        />
        <Link className=' text-blue-500 text-shadow-black' href={'/recuperacao'}>Esqueci a senha</Link>

        <button
          type="submit"
          className="w-full p-2 mt-4 bg-blue-600 text-white rounded"
        >
          Entrar
        </button>
      </form>
    </main>

  );
}
