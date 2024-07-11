import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guests-modal'
import { ComfirmTripModal } from './confirm-trip-modal'


export function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [emailsToInvite, setEmailsToInvite] = useState([
        'gabriel@gmail.com'
    ])

    function openGuestsInput() {
        setIsGuestInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestModalOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,

            email
        ])

        event.currentTarget.reset()

    }

    function removeEmailToInvite(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault
        navigate('/trips/123')
    }


    return (

        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="Logo" />
                    <p className="text-zinc-300 ">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-5">
                        <div className='flex items-center gap-2 flex-1'>
                            <MapPin className='size-5 text-zinc-400' />
                            <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className=" bg-transparent text-lg placeholder-zinc-400 outline-none" />
                        </div>

                        <div className='flex items-center gap-2 flex-1'>
                            <Calendar className='size-5 text-zinc-400' />
                            <input disabled={isGuestInputOpen} type="text" placeholder="Quando?" className=" bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                        </div>

                        <div className='w-px h-6 bg-zinc-800'></div>

                        {isGuestInputOpen ? (
                            <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700'>Alterar local/data
                                <Settings2 className='size-5' />
                            </button>
                        ) : (
                            <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400'>
                                Continuar
                                <ArrowRight className='size-5' />
                            </button>
                        )
                        }

                    </div>

                    {isGuestInputOpen && (
                        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-5">
                            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                                <UserRoundPlus className='size-5 text-zinc-400' />
                                {emailsToInvite.length > 0 ? (
                                    <span className='text-zinc-100 text-lg flex-1'>{emailsToInvite.length} pessoa(s) convidada(s)</span>

                                ) : (
                                    <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
                                )}

                            </button>

                            <div className='w-px h-6 bg-zinc-800'></div>

                            <button onClick={openConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400'>
                                Comfirmar viagem
                                <ArrowRight className='size-5' />
                            </button>
                        </div>

                    )}
                </div>

                <p className="text-sm text-zinc-500" >
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a href="#" className=" text-zinc-300 underline">termos de uso</a> e <a href="#" className=" text-zinc-300 underline">políticas de privacidade</a>.
                </p>
            </div>

            {isGuestModalOpen && (
                <InviteGuestModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailToInvite={removeEmailToInvite}
                />
            )}

            {isConfirmTripModalOpen && (
                <ComfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                />
            )}

        </div>

    )
}




