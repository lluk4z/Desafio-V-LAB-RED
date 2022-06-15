import React from "react";
import './Card.css'

const RedCard = ({ promotion }) => {

    var plvrChave = promotion.tags.map(function(item){
        return `${item.name} `;
     });

    return(
    <div className="card-completo">
        <img src={promotion.image_url} alt={promotion.name} target="_blank"
                    rel="noopener noreferrer"/>
        <p>Nome: {promotion.name}</p>
        <p>Descrição: {promotion.description}</p>
        <p>Autor: {promotion.author}</p>
        <p>Palavras chave: </p>{plvrChave.map((palavra) => (
            <ul>
                <li>
                    {palavra}
                </li>
            </ul>
           
        ))}


       
        <p>Categoria: {promotion.object_type}</p>
        <a href={promotion.link}> link do RED </a>
    </div>
    );
}

export default RedCard;