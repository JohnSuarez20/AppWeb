import { useParams } from "react-router-dom";

export default function Detail({ mascotas }) {
  const { mascotaId } = useParams(); // Obtener el ID de la mascota desde los parámetros
  const mascota = mascotas.find((m) => m.id.toString() === mascotaId); // Buscar la mascota por ID

  if (!mascota) {
    return <div>Mascota no encontrada</div>; // Manejo en caso de que no exista
  }

  return (
    <div>
      {/* Contenido de la mascota */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>{mascota.nombre}</h1>
        <img
          src={mascota.foto}
          alt={mascota.nombre}
          style={{ width: "400px", height: "auto", borderRadius: "10px" }}
        />
        <p>{mascota.raza} </p>
        <div
          style={{
            fontSize: "18px", // Tamaño de fuente más grande
            border: "1px solid #ccc", // Borde alrededor de la descripción
            padding: "15px", // Espaciado interno
            borderRadius: "10px", // Bordes redondeados
            maxWidth: "600px", // Limitar el ancho máximo de la descripción
            margin: "20px auto", // Centrando el contenedor
            backgroundColor: "#f9f9f9", // Fondo ligeramente gris para mayor contraste
          }}
        >
          <p>{mascota.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

