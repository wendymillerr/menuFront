import { useState } from "react"
import { useFoodDataMutate } from "../../../hooks/udeFoodDataMutate";
import { foodData } from "../../../interface/foodData";
import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
        <label >{label}</label>
        <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export  function CreateModal(){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const  {mutate}= useFoodDataMutate();

    const submit = ( ) => {
        const foodData: foodData = {
            title,
            price,
            image
        }

        mutate(foodData)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
            <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/> 
                </form>
                <button onClick={submit} className="button-secundary">postar</button>
            </div>
        </div>
    )
}