import React from "react";
import TextInput from "./text-input/index.jsx";
import Button from "./button/index.jsx";
import IconSelector from "./Icon-selector/index.jsx";
import "./index.scss";
import { useState } from 'react'
import { addNewProject } from "../../utils/project-tools.js";

function Input() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  const handleNew = () =>{
    addNewProject({name,description,icon});
  }

  return (
    <form>
        <div className="title">
          <p>Crear un nuevo Proyecto</p>
        </div>
        <div className="project-name">
          <p>Ponle un nombre a tu nuevo Proyecto</p>
          <TextInput 
            customText={'"Mi nuevo Proyecto"'} 
            customClass={"small"} 
            setText = {setName}
          />
        </div>
        <div className="description">
          <p>Agregale una descripcion (opcional)</p>
          <TextInput
            customText={'"Proyecto final de Programacion Web"'}
            customClass={"large"}
            setText={setDescription}
          />
        </div>
        <div className="icon-selector">
          <p>Selecciona un Icono!</p>
          <IconSelector 
            setIcon={setIcon}
          />
        </div>
      <Button 
      customText={"Listo!"} 
      customClass={"submit"}
      customFunction={handleNew}
      />
    </form>
  );
}

export default Input;
