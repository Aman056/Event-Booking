import React, { useEffect, useRef, useState, useContext } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { DataContext } from '../ContextApi/Context';

const DateTime = (props) => {
    const { storeData } = useContext(DataContext);

    const [formattedDate, setFormattedDate] = useState('');
    const pickerRef = useRef(null);

    useEffect(() => {
        storeData(formattedDate);
    }, [formattedDate]);




    useEffect(() => {
        const picker = flatpickr(pickerRef.current, {
            enableTime: true,
            altInput: true,
            altFormat: "D ,F j, h:m",
            dateFormat: "d-m",
            minDate: "today",
            dateFormat: "H:i",
            time_24hr: true,
            onChange: (selectedDates) => {             
                setFormattedDate(selectedDates);
            },
        });
        return () => {
            picker.destroy();
        };
    }, []);

    return (
        <input
            type="text"
            name={props.name}
            id='date_picker'
            value={formattedDate}
            placeholder="Select Date and Time"
            className='lg:p-3 px-3 py-3 rounded-lg font-bold'
            readOnly // Make the input read-only to prevent manual editing
            ref={pickerRef}
        />
    );
};

export default DateTime;
