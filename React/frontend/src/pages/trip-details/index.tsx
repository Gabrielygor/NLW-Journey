import { Plus } from "lucide-react";
import { useState } from "react";
import { CreatActivityModal } from "./creat-activity-modal";
import { ImportLinks } from "./important-links";
import { Guests } from "./guests";
import { Activity } from "./activity";
import { Header } from "./header";


export function TripDetailsPage() {

    const [isCreatActivityModalOpen, setIsCreatActivityModalOpen] = useState(false)

    function openCreatActivityModal() {
        setIsCreatActivityModalOpen(true)
    }

    function closeCreatActivityModal() {
        setIsCreatActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <Header />

            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button onClick={openCreatActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar Atividade
                        </button>
                    </div>

                    <Activity />
                </div>

                <div className="w-80 space-y-6">
                    <ImportLinks />

                    <div className="w-full h-px bg-zinc-800"></div>

                    <Guests />
                </div>
            </main>


            {isCreatActivityModalOpen && (
                <CreatActivityModal
                    closeCreatActivityModal={closeCreatActivityModal}
                />
            )}

        </div>
    )
}