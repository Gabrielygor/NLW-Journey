import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";


export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Jessica do Grau</span>
                        <span className="block text-xs text-zinc-400 truncate ">JessicaDoGrau@gamil.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Zé do Capota Kwid</span>
                        <span className="block text-xs text-zinc-400 truncate ">MrMilho@gmail.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Button variant="secundary" size="full">
                <UserCog className='size-5' />
                Gerenciar convidados
            </Button>
        </div>
    )
}