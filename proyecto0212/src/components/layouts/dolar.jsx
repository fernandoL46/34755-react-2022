 import React, {useState, useEffect} from 'react';

    const Dolar = () => {
    
        const [dolar, setDolar] = useState([]);
        useEffect(() => {
            const mostrarDolar = () => {
    
                fetch('https://criptoya.com/api/dolar')
                .then(response => response.json())
                .then(({blue, ccb, ccl, mep}) => {
                    setDolar(Object.entries({blue, ccb, ccl, mep}).map((moneda, indice) => <p key={indice}>Tipo: {moneda[0]} - ${moneda[1]}</p>))
                    console.log(dolar)
                })
    
                //[blue, 285] = <p>Tipo: Blue, valor: $285 <p>
    
            }
    
            mostrarDolar()
    
            setInterval(() => {
                mostrarDolar()
                console.log("Pase")
            }, 60000)
    
        }, );
    
        return (
            <>
               {dolar}
            </>
        );
    }
    
    export default Dolar;