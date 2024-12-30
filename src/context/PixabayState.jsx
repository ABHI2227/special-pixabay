import React, { useEffect, useState } from 'react';
import PixabayContext from './PixabayContext';

const PixabayState = (props) => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('london');

    const api_key = '47900419-92c2fba04026e83f8101f1bec';

    // Fetch default images on component mount
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(
                `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
            );
            const data = await api.json();
            setImages(data.hits);
            console.log(data.hits);
        };
        fetchData();
    }, [query]);

    // Fetch images by category
    const fetchImagesByCategory = async (cat) => {
        const api = await fetch(
            `https://pixabay.com/api/?key=${api_key}&q=${cat}&image_type=photo&pretty=true&per_page=100`
        );
        const data = await api.json();
        setImages(data.hits);
        console.log(data.hits);
    };

    return (
        <PixabayContext.Provider
            value={{ images, fetchImagesByCategory,setQuery }}
        >
            {props.children}
        </PixabayContext.Provider>
    );
};

export default PixabayState;
