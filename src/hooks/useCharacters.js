import { useState, useEffect } from "react";

const useCharacters = url => {
    const [characters , setCharacters] = useState([]);
    useEffect(() => {
        const getCharacters = async (api) => {
            const response = await fetch(api);
            const data = await response.json();
            setCharacters(data.results);
        };
        getCharacters(url);
    }, [url])
    return characters
};

export default useCharacters;