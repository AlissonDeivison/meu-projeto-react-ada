import { useState } from "react";
import styles from "./button.module.css"

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1) //Função que altera o estado
    }

    function diminuir() {
        setContador(contador - 1);
    }

    if (contador > 5) {
        return (
            <div>
                <h1>Valor muito alto, diminua para exibir o contador</h1>
                <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
            </div>
        )
    }
    return (
        <div>
            <h1>Meu contador: {contador}</h1>
            <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
            <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
        </div>
    )
}