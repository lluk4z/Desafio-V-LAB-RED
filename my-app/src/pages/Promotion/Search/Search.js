import React, { useEffect, useState } from "react";
//import RedCard from 'components/RED/Card/Card';
import Images from "components/RED/Card/Test";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const PagesPromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/reds')
            .then((response) => {
                setPromotions(response.data);
                console.log(response.data)
            });
    }, []);

    const handlePageClick = (data)=> {
        console.log(data.selected)
    }

    return (
        <div className="all-container">
            
            <h1>Recursos Educacionais Digitais</h1>
            <Images data={ promotions }></Images>
        </div>
    );
};

export default PagesPromotionSearch;