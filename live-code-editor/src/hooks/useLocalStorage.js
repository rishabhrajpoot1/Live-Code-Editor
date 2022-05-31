import { useEffect, useState } from "react";

const PREFIX = 'code-editor-';

function useLocalStorage(key){
    const prefixedKey = PREFIX + key;
    
    const getData = () => {
        const jsonValue = localStorage.getItem(prefixedKey)

        if( !jsonValue){
            return "";
        }
        
        return  jsonValue;
    }

    const [value, setValue] = useState(getData)

    useEffect(()=>{
        localStorage.setItem(prefixedKey, value);
    },[prefixedKey, value])

    return [value, setValue]
}

export default useLocalStorage;