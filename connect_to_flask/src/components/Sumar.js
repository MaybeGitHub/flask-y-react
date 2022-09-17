import React from 'react';
import axios from 'axios';

export default class Sumar extends React.Component {

    state = {
        numero_1: 0,
        numero_2: 0,
        resultado_suma: 0,
        numeros_generados: []
    }

    setNumero_1 = (event) => {
        this.setState({ numero_1: event.target.value })
    }

    setNumero_2 = (event) => {
        this.setState({ numero_2: event.target.value })
    }

    sumar = () => {
        const data = { numero_1: this.state.numero_1, numero_2: this.state.numero_2 };
        axios.post("http://127.0.0.1:5000/sumar", data)
            .then(resultado => {
                this.setState({ resultado_suma: resultado.data.suma })
            })
            .catch(error => console.log(error))
    }

    generar_numeros_aleatorios = () => {
        axios.get("http://127.0.0.1:5000/generar_numeros")
            .then(resultado => {
                this.setState({ numeros_generados: resultado.data })
            })
            .catch(error => console.log(error))

        // fetch("http://127.0.0.1:5000/generar_numeros")
        //     .then(response => response.json())
        //     .then(resultado => {
        //         this.setState({ numeros_generados: resultado })
        //     })
        //     .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <label htmlFor="numero_1">Numero 1</label>
                        <input value={this.state.numero_1} onChange={this.setNumero_1} id="numero_1" type="number" />
                    </div>
                    <div>
                        <label htmlFor="numero_2">Numero 2</label>
                        <input value={this.state.numero_2} onChange={this.setNumero_2} id="numero_2" type="number" />
                    </div>
                    <div>
                        <button onClick={this.sumar}>Sumar números</button>
                    </div>
                    <div>
                        {this.state.resultado_suma}
                    </div>
                </div>
                <div>
                    <p>Generar 5 números aleatorios</p>
                    <div>
                        <button onClick={this.generar_numeros_aleatorios}>Sumar números</button>
                    </div>
                    <p>
                        {this.state.numeros_generados.sort((a,b) => a - b).join(", ")}
                    </p>
                </div>
            </div>
        )
    }
}