
import { useState } from "react";
import axios from "axios";
import "../styles/crear.css"
import { useHistory } from "react-router";
export default function Crear({id}){

    let history=useHistory();

    const [datos,setDatos]=useState({
        id:id,
        pregunta:'',
        respuesta:''
    });


    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Crear';
        axios.get(url+`?id=${datos.id}&pregunta=${datos.pregunta}&respuesta=${datos.respuesta}`).then((response) => {
            console.log(response);
            if(response.status=="200"){ 
                window.location.replace("/2CM13ID3IDT7/#/App");
            }
          }, (error) => {
            console.log(error);
          });

      };

    const handleChange = (e) => {
        const { name, value } = e.target
        setDatos({...datos, [name]: value })
      }

    return(
        <>
        
        <div className="imagen"></div>
        <div className="Crear">
        <img className="equis" onClick={()=>history.goBack()} src="https://images.vexels.com/media/users/3/155299/isolated/lists/1988d1faba4d059eb4461d955af5cf61-x-marca-garabato.png"/>
            <h1>Crear una nueva pregunta</h1>
            <form onSubmit={handleSubmit}>
                <label>{"No.Pregunta "+ datos.id}</label><hr/>
                <label>Pregunta</label>
                <input type="text" name="pregunta" onChange={handleChange}/>
                <label>Respuesta</label>
                <input type="text" name="respuesta" onChange={handleChange}/>
                <button type="submit"  className="boton">Enviar</button>
            </form>
        </div>
        </>
    );
    
}