import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guests-modal'
import { ComfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestStep } from './steps/invite-guets-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'


export function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [onweEmail, setOwnerEmail] = useState('')
    const [eventStartAndEndDate, seteventStartAndEndDate] = useState<DateRange | undefined>();


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

    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault

        if (!destination) {
            return
        }

        if (!eventStartAndEndDate?.from || !eventStartAndEndDate.to) {
            return
        }

        if (emailsToInvite.length == 0) {
            return
        }

        if (!onweEmail || !ownerName) {
            return
        }

        const response = await api.post('/trips', {
            destination,
            starts_at: eventStartAndEndDate.from,
            ends_at: eventStartAndEndDate.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: onweEmail
        })

        const { tripId } = response.data

        navigate(`/trips/${tripId}`)
    }


    return (

        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="Logo" />
                    <p className="text-zinc-300 ">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>
                    <DestinationAndDateStep
                        closeGuestsInput={closeGuestsInput}
                        openGuestsInput={openGuestsInput}
                        isGuestInputOpen={isGuestInputOpen}
                        setDestination={setDestination}
                        eventStartAndEndDate={eventStartAndEndDate}
                        seteventStartAndEndDate={seteventStartAndEndDate}
                    />

                    {isGuestInputOpen && (
                        <InviteGuestStep
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestsModal={openGuestsModal}
                        />

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
                    setOwnerName={setOwnerName}
                    setOwnerEmail={setOwnerEmail}
                />
            )}

        </div>

    )
}




