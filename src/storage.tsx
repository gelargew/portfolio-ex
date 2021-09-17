import React, { useContext, useState } from 'react'

export { useStorage, StorageProvider}

interface storageProps {
    cursorSize: number,
    setCursorSize: (n: number) => void
}

const useCreateStorage = () => {
    const [cursorSize, setCursorSize] = useState(25)

    return {
        cursorSize,
        setCursorSize
    }
}

const Storage = React.createContext<storageProps>(null!)

const StorageProvider = ({ children }: { children: any }) => {
    const storage = useCreateStorage()

    return (
        <Storage.Provider value={storage}>
            {children}
        </Storage.Provider>
    )
}

const useStorage = () => useContext(Storage)