import React, { useContext } from 'react';
import { useState } from 'react'
import flatpickr from 'flatpickr';
import DateTime from './DateTime';
import { DataContext } from '../ContextApi/Context';
import ScheduleInvite from '../Components/ScheduleInvite'
import Event from './Event';
// import { useSelector } from 'react-redux';

const navigation = [
    {
        name: 'Event', href: '#', current: false, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
    },
    {
        name: 'Calendar', href: '#', current: false, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
    },
    {
        name: 'Explore', href: '#', current: false, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    },
]

const themes = [
    {
        name: 'background1',
        value: 'radial-gradient(circle, rgba(63,244,251,1) 0%, rgba(252,219,70,1) 100%)',
    },
    {
        name: 'background2',
        value: 'radial-gradient(circle, rgba(174,238,228,1) 0%, rgba(255,186,10,1) 100%)',
    },
    {
        name: 'background3',
        value: 'radial-gradient(circle, rgba(174,238,228,1) 0%, rgba(77,126,183,1) 100%)',
    },
    {
        name: 'background4',
        value: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(45,253,132,1) 100%)',
    },
];

const fontFamily = [

    'Serif', "Sans-serif", "Monospace"
]
export default function Home() {
    const [bg, setBg] = useState({ i: 0, value: 'radial-gradient(circle, rgba(63,244,251,1) 0%, rgba(252,219,70,1) 100%)' })
    const [all_data, setAllData] = useState({ "theme": bg.value })
    const { data } = useContext(DataContext);
    const handleChange = (e) => {
        const { name, value } = e.target
        setAllData({ ...all_data, ...data, [name]: value })
    }
    const [All_event, setAllEvent] = useState([]);
    const handleAddEvent = () => {
        const updatedEvents = [...All_event, all_data];
        setAllEvent(updatedEvents);
        alert('Event Added Successfully!')
    }
    const handleSelect = (index, color) => {
        setBg({ i: index, value: color })
    }
    flatpickr('#datetimepicker', {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
    });

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <div className="">

                <main className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-6 sm:px-10 lg:px-8 bg-slate-50 ">
                        <div className='mx-auto max-w-7xl py-6 bg-white text-black rounded-lg shadow-lg'>
                            <div className="ml-10 flex items-baseline space-x-4 flex-wrap">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium mb-2 sm:mb-0' // Added mb-2 and sm:mb-0 for spacing
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <span className='flex items-center align-middle'>
                                            {item.icon} {item.name}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
                                <div className='col-span-1'>
                                    <div className="flex space-x-2 content-evenly overflow-hidden mt-6">
                                        <div>
                                            <img
                                                className="mt-2 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className='pl-2 text-start'>
                                            <small>Jon Du</small>
                                            <h2 className='font-bold'>Personal Calendar</h2>
                                        </div>
                                        <div className='m-4 pl-10'>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className='my-4'>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="Event_name"
                                            id="price"
                                            className="block w-full rounded-md  border-none py-4 pl-7 pr-20 text-gray-900 font-bold  focus:outline-none  ring-gray-300 placeholder:text-gray-400 sm:text-4xl  sm:leading-6"
                                            placeholder="Event Name"
                                        />
                                    </div>
                                    <div className=''>
                                        <div className='flex items-baseline'>
                                            <div className=''>
                                                <div className='border rounded-xl w-11 overflow-hidden m-3'>
                                                    <div className='h-5 border flex align-middle item-center bg-slate-100'>
                                                        <small className='m-auto'>Date</small>
                                                    </div>
                                                    <div className='h-7'>
                                                        <span>24</span>
                                                    </div>
                                                </div>
                                                <div className='mt-20 m-3 pt-6 mx-5'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>


                                                </div>
                                            </div>

                                            <div className="w-full h-auto">
                                                <div className="mb-2 min-w-10 sm:flex sm:justify-between sm:items-center sm:flex-wrap bg-slate-100  lg:p-4 sm:py-10 mx-4 sm:mx-4 rounded-lg">

                                                    {/* Start Date */}
                                                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 sm:mb-4">
                                                        <span className="font-bold mb-1 sm:mb-0 px-3">Start</span>
                                                        <div className="border-lg sm:ml-4 w-100 px-2">
                                                            <DateTime name='start_date' />
                                                        </div>
                                                    </div>

                                                    {/* End Date */}
                                                    <div className="flex mx-2 flex-col sm:flex-row items-center sm:space-x-4 sm:mb-4">
                                                        <span className="font-bold mb-1 sm:mb-0 px-4">End</span>
                                                        <div className="border-lg sm:ml-4">
                                                            <DateTime name='end_date' />
                                                        </div>
                                                    </div>

                                                    {/* Event Location */}

                                                </div>
                                                <div className="mb-2 sm:flex sm:justify-between sm:items-center py-3 sm:flex-wrap bg-slate-100  lg:p-4 sm:p-6 mx-4 sm:mx-4 rounded-lg">
                                                    <span className="font-bold">Add event location</span>
                                                    <br />
                                                    <small>Offline Location</small>
                                                </div>
                                            </div>


                                        </div>
                                        <div className=''>
                                            <Event />
                                            <button onClick={handleAddEvent} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-3  rounded " style={{ width: '100%' }}>
                                                Create Event
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-span-1'>
                                    <div
                                        style={{ background: bg.value }}
                                        className=' h-11 w-100 mt-10 view-display rounded-lg flex justify-center '>
                                        <div className='pt-10 mt-10'>
                                            <h1 className='font-bold text-slate-100 mt-10 text-center md:text-left' style={{ fontSize: '3rem', lineHeight: "1.2" }}>
                                                YOU ARE <i> INVITED</i>
                                            </h1>

                                        </div>
                                    </div>
                                    {/* Theme Section */}
                                    <span className='flex items-start font-bold mt-5'>Theme</span>
                                    <div className='flex  flex-wrap justify-center'>
                                        {themes.map((item, index) => (
                                            <div>

                                                <div onClick={() => handleSelect(index, item.value)} key={index}
                                                    className='rounded-lg grid content-center justify-center align-middle border  hover:border-black border-blue-200'
                                                    style={{
                                                        border: bg.i === index ? '1px solid' : '',
                                                        cursor: 'pointer',
                                                        background: item.value,
                                                        height: '85px',
                                                        width: "100px",

                                                        margin: '5px', // Add margin for spacing between divs
                                                    }}
                                                >
                                                    <div
                                                        className='flex justify-start px-2 rounded-lg'
                                                        style={{
                                                            background: 'rgba(255, 255, 255, 0.8)', // Light and transparent background
                                                            height: '65px',
                                                            width: '80px',
                                                            margin: 'auto',
                                                            margin: '5px', // Add margin for spacing between divs
                                                        }}
                                                    >
                                                        <span className='font-bold'>Title</span><br />
                                                    </div>

                                                </div>
                                                <span>Name</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='bg-slate-200 h-11 w-full rounded-lg mt-5 relative'>
                                        <select onChange={handleChange} name='font_family' className="appearance-none bg-transparent border-none w-full h-full px-4 py-2 pr-8 leading-tight focus:outline-none">
                                            {fontFamily.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>

                                        </div>
                                    </div>

                                    <div className='bg-slate-200 h-11 w-full rounded-lg mt-5 relative'>
                                        <div className='w-full h-full text-left rounded-full'>
                                            <input
                                                onChange={handleChange} name='color'
                                                type="color"
                                                className="bg-transparent mx-3 rounded-full border-none w-20 h-full py-2 pr-8 "
                                            />
                                        </div>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <select

                                            name="color"
                                            onChange={handleChange}
                                            className="absolute inset-y-0 right-0 appearance-none bg-transparent border-none px-4 py-2 pr-8 leading-tight focus:outline-none"
                                            style={{ zIndex: 0 }}
                                        >
                                            <option value="">Choose Color</option>
                                            <option value="#FF0000">Red</option>
                                            <option value="#00FF00">Green</option>
                                            <option value="#0000FF">Blue</option>
                                        </select>
                                    </div>







                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>


            <ScheduleInvite All_event={All_event} />
        </>
    )
}
