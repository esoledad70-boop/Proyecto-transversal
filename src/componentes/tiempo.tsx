import { useState, useEffect } from "react";

function Reloj() {
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

    // Actualizamos la hora cada segundo
    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        // Limpiamos el intervalo
        return () => clearInterval(intervalo);
    }, []);

    return (
        <p>{hora}</p>
    );
}

export default Reloj;