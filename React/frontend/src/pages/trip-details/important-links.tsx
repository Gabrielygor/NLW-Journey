import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";


export function ImportLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva dp AirBnB</span>
                        <a href="#"><span className="block text-xs text-zinc-400 truncate hover:text-zinc-50">htpp://www.airbnb.com.bt/rooms/154001115400111540011</span>
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva dp AirBnB</span>
                        <a href="#"><span className="block text-xs text-zinc-400 truncate hover:text-zinc-50">htpp://www.airbnb.com.bt/rooms/154001115400111540011</span>
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Button variant="secundary" size="full">
                <Plus className='size-5' />
                Cadastrar novo link
            </Button>
            
        </div>
    )
}