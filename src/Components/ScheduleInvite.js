import React, { useEffect } from 'react'

export default function ScheduleInvite(props) {
    const event = props.All_event

    useEffect(() => {
        event.map((item) => {
            console.log(item[0], 'this is item')
        })
    }, [])
    return (
        <main className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-6 sm:px-10 lg:px-8 bg-slate-50">
                <div className='mx-auto max-w-7xl py-6 bg-white'>
                    <h1 className='text-start font-bold mx-5 sm:mx-10 text-3xl sm:text-4xl lg:text-5xl'>Events</h1>
                    {event.length == 0 &&<h1>Please Add events</h1>}
                    {event.length > 0 && event.map((item) => {
                        const NawDateFormate = [new Date('Sat Mar 23 2024 21:23:00 GMT+0530 (India Standard Time)')];


                        return (
                            <div className='grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 mx-5 sm:mx-10 mt-10 h-auto'>
                                <div className='sm:h-10 col-span-3 sm:col-span-2 text-start m-2'>
                                    <span className='font-bold'>{NawDateFormate && NawDateFormate[0] instanceof Date && NawDateFormate[0].toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span><br />
                                </div>
                                <div className='border h-auto p-3 col-span-9 sm:col-span-10 text-black rounded-lg shadow-lg text-start'>
                                    <span className='text-slate-500'>12:30 AM</span><br />
                                    <span className='text-lg sm:text-xl lg:text-2xl'>{item.Event_name}</span>

                                    <div className='mt-2 flex items-start align-middle'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mx-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                        </svg>
                                        <span className='font-thin text-slate-500'>This is</span>
                                    </div>
                                    <div className='mt-2 flex items-start'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mx-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <span className='font-thin text-slate-500'>Virtual</span>
                                    </div>
                                    <div className='flex align-middle justify-start'>

                                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mt-4">
                                            Invited
                                        </button>
                                        <div className="flex -space-x-1 overflow-hidden mt-5 mx-2">
                                            <img
                                                className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <img
                                                className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <img
                                                className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <img
                                                className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </main>
    )
}
