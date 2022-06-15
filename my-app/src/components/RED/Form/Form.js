import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const initialValue = {
    name: '',
    description: '',
    author: '',
    tags: '',
    object_type: '',
    link: ''
}
const PromotionForm = () => {
    const [values, setValues] = useState(initialValue)
    const history = useNavigate();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();


        axios.post('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects', values, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer' + 'ID1QfuMcUDK8rVoz6SnIKQ'
              }
        })
            .then((response) => {
                history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>RED</h1>
            <h2>Novo RED</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Nome</label>
                    <input id="name" name="name" type="text" onChange={onChange}/>

                    <label>Descrição</label>
                    <input id="description" name="description" type="text" onChange={onChange}/>

                    <label>Autor</label>
                    <input id="author" name="author" type="text" onChange={onChange}/>

                    <label>Palavras chave</label>
                    <input id="tags" name="tags" type="text" onChange={onChange}/>

                    <label>Categoria</label>
                    <input id="object_type" name="object_type" type="text" onChange={onChange}/>

                    <label>Link do RED</label>
                    <input id="link" name="link" type="text" onChange={onChange}/>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
};

export default PromotionForm;