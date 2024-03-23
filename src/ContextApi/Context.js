import React, { createContext, useState } from 'react';
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const storeData = (newData) => {
        setData(newData);
    };
    return (
        <DataContext.Provider value={{ data, storeData }}>
            {children}
        </DataContext.Provider>
    );
};
