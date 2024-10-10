import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//ESTA ES LA DEL PRODUCTO DETALLE, OSEA TODO EL PRODUCTO ... SU INFORMACION

function ProductoDetalle() {


  return (
    <div className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      {/* Agrega más detalles del producto aquí */}
    </div>
  );
}

export default ProductoDetalle;