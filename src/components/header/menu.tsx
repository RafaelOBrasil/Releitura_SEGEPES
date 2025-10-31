"use client";

import {
  LucideCalendarDays,
  LucideHome,
  LucideLandmark,
  LucideLogOut,
  LucideMenu,
  LucideNotebook,
  LucideNotebookPen,
  LucidePanelsRightBottom,
  LucideSchool,
  LucideSettings2,
  LucideUserCog,
  LucideUserLock,
  LucideUserPen,
  LucideUsers,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MenuItem from "./menuItem";
import { useState } from "react";
import TogleTheme from "../togleTheme";
import { Logout } from "./logout";


export default function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/dashboard", icon: LucideHome, label: "Home" },
    {
      href: "/instituicoes/listar",
      icon: LucideLandmark,
      label: "Instituições",
    },
    {
      href: "/funcionarios/listar",
      icon: LucideUsers,
      label: "Funcionários",
    },
    { href: "/alunos/listar", icon: LucideUserPen, label: "Alunos" },
    { href: "/professores/listar", icon: LucideUserCog, label: "Professores" },
    { href: "/gestores/listar", icon: LucideUserLock, label: "Gestores" },
    { href: "/turmas/listar", icon: LucideSchool, label: "Turmas" },
    { href: "/#", icon: LucideCalendarDays, label: "Calendario" },
    { href: "/#", icon: LucidePanelsRightBottom, label: "Espaços" },
    { href: "/#", icon: LucideNotebook, label: "Cursos" },
    { href: "/#", icon: LucideNotebookPen, label: "Disciplinas" },
    { href: "/utilitarios", icon: LucideSettings2, label: "Utilitarios" },
  ];

  



  return (
    <>
      {/* Mobile Menu */}
      <header className="flex flex-row items-center justify-start w-full p-4 bg-blue-600 sm:hidden z-20">
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-center w-full mr-6">
            <SheetTrigger asChild>
              <Button
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 "
                size={"icon"}
              >
                <LucideMenu className="h-6 w-6" />
                <SheetTitle className="sr-only">Abrir / Fechar menu</SheetTitle>
              </Button>
            </SheetTrigger>

            <div className="flex items-center justify-center w-full ">
              <Avatar className="bg-gray-600-600 w-30 rounded-none flex items-center justify-center">
                <AvatarImage src="/segepes.png" alt="Avatar" />
                <AvatarFallback>Segepes</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <SheetContent side="left" className="sm:max-w-x bg-gray-200 dark:bg-black">
            <nav className="w-full flex flex-col mt-20 bg-gray-200 dark:bg-black">
              {menuItems.map(({ href, icon: Icon, label }) => (
                <MenuItem
                  key={label}
                  href={href}
                  icon={Icon}
                  label={label}
                  onClick={() => setOpen(false)} // fecha o sheet ao clicar
                />
              ))}
            </nav>

            <SheetFooter className="h-auto w-full flex items-center justify-center">
              <MenuItem
                href="#"
                icon={LucideLogOut}
                label="Sair"
                onClick={() => setOpen(false)} // fecha o sheet ao clicar
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>


      {/* Desktop Menu */}
      <header className="hidden sm:flex items-center justify-center w-full h-[6vh] p-4 bg-blue-600 z-50">

        <div className="flex flex-row items-center justify-center w-full ">
          <Avatar className="bg-gray-600-600 w-30 rounded-none flex items-center justify-center">
            <AvatarImage src="/segepes.png" alt="Avatar" />
            <AvatarFallback>Segepes</AvatarFallback>          

          </Avatar>            
          <TogleTheme/>


        </div>
      </header>
      <aside className="hidden sm:flex flex-col items-center justify-start w-64 h-[94vh]  pt-4 bg-gray-200 dark:bg-black z-50 absolute">
        <nav className="w-full flex flex-col font-semibold">
          {menuItems.map(({ href, icon: Icon, label }) => (
            <MenuItem key={label} href={href} icon={Icon} label={label} />
          ))}
          <Logout/>
        </nav>
      </aside>
    </>
  );
}
