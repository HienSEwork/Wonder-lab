import { Description, Dialog, DialogPanel, DialogTitle, CloseButton, Label, Field, Input } from '@headlessui/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import clsx from 'clsx';

export const ContactUsForm = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interestedTech: '',
        clientIdea: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevS => ({
            ...prevS,
            [name]: value
        }))
    }

    const submit = () => {
        console.log(formData);
        setIsOpen(false)
    }

    return (
        <>
            <Field className='my-4'>
                <Label className="text-sm/6 font-medium text-white">Your name*</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    name='name'
                    onChange={handleInputChange}
                    required
                />
            </Field>
            <Field className='my-4'>
                <Label className="text-sm/6 font-medium text-white">Email*</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    name='email'
                    onChange={handleInputChange}
                    required
                />
            </Field>
            <Field className='my-4'>
                <Label className="text-sm/6 font-medium text-white">What technology are you interested in?</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    name='interestedTech'
                    onChange={handleInputChange}
                />
            </Field>
            <Field className='my-4'>
                <Label className="text-sm/6 font-medium text-white">Tell us about your big idea :)* <br /> (description, timeline, budget, etc.)</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    name='clientIdea'
                    as='textarea'
                    rows={4}
                    onChange={handleInputChange}
                />
            </Field>
            <div className="flex justify-center">
                <button className='border rounded-full px-8 py-2 mt-12 text-white' onClick={submit}>
                    Submit
                </button>
            </div>
        </>
    )
}

function ContactUs() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button className="text-4xl leading-7 md:text-xl md:leading-6 text-white" onClick={() => setIsOpen(true)}>Contact us</button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/25">
                    <DialogPanel className="w-[350px] md:w-[768px] space-y-4 border bg-black text-white p-12 rounded-xl">
                        <DialogTitle className="font-bold flex justify-end">
                            <CloseButton>
                                <FaTimes />
                            </CloseButton>
                        </DialogTitle>
                        <Description as='div'>
                            <ContactUsForm setIsOpen={setIsOpen}/>
                        </Description>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default ContactUs