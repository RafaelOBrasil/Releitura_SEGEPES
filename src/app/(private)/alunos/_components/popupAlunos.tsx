import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alunos } from "@/types/listas";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Label } from "@radix-ui/react-label";
import { LucideFileUser } from "lucide-react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

export default function PopUpUser(aluno: Alunos) {
 
  const data = aluno;
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              className="
            bg-transparen 
            text-gray-700 
            hover:bg-blue-600 
            dark:text-white 
            hover:text-white"
            >
              <LucideFileUser className="size-5" />
            </Button>
          </DialogTrigger>

          <DialogContent
            showCloseButton={true}
            className="sm:max-w-[425px] p-0 contain-content border-gray-900"
          >
            <DialogHeader className="bg-blue-600 py-2">
              <DialogTitle className="flex justify-center items-center">
                Perfil: {data.nome}
              </DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={"../ico.png"} />
              </Avatar>
            </div>

            <div className="grid gap-4 px-6 pt-0">
              <div className="grid gap-2">
                <Label htmlFor="name-1" className="text-muted-foreground">Name:</Label>
                <Input
                  disabled={true}

                  className="selection:bg-blue-600 selection:text-white"
                  id="name-1"
                  name="name"
                  defaultValue={data.nome}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name-1" className="text-muted-foreground">Matrícula:</Label>
                <Input
                  disabled={true}

                  className="selection:bg-blue-600 selection:text-white"
                  id="name-1"
                  name="name"
                  defaultValue={data.matricula}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name-1" className="text-muted-foreground">Tell:</Label>
                <Input
                  disabled={true}
                  className="selection:bg-blue-600 selection:text-white"
                  id="name-1"
                  name="name"
                  defaultValue={data.telefone}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="username-1" className="text-muted-foreground">Email:</Label>
                <Input
                  className=" selection:bg-blue-600 selection:text-white"
                  id="username-1"
                  name="username"
                  disabled={true}
                  defaultValue={data.email}
                />
              </div>
            </div >
            <DialogFooter className="px-6 pb-6 !flex !justify-start">
              <DialogClose asChild >
                <Button className="bg-red-600 hover:bg-red-500 text-white">Cancel</Button>
              </DialogClose>


            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}


