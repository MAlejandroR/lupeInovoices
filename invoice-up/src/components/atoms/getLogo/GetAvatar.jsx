import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../../assets/logo.svg";
import { GetAvatarStyled } from "./GetAvatarStyled";

function GetAvatar({ avatar, updateAvatar }) {
  // creamos una propiedad de la clase que es la que vamos a usar en varios métodos para cargar la imagen
  // esto es un manejador de ficheros
  // const fr = new FileReader();

  // creamos un React.createRef porque React
  // no gestiona los <input type="file" /> por ello tenemos que gestionarlo por nuestra cuenta
  const myFileField = React.createRef();
  //  myFileField = document.querySelecto('input')

  const uploadImage = (event) => {
    console.log("GetAvatar handlefileChage: ");
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      console.log(file);
      updateAvatar(file);  // Enviar directamente el archivo
    }
  };

  return (
    <GetAvatarStyled>
      {" "}
      <div className="get-avatar">
        <label className="action__upload-btn" htmlFor="img-selector">
          Añade tu logo
        </label>
        <input
          type="file"
          name="logo"
          id="img-selector"
          className="action__hiddenField"
          ref={myFileField}
          onChange={uploadImage}
        />

        <div
          className="get-avatar__preview"
          style={{ backgroundImage: `url(${avatar || defaultAvatar})` }}
        ></div>
      </div>
    </GetAvatarStyled>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
