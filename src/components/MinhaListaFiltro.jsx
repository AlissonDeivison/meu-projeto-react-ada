import { useEffect, useState } from "react"

const minhaLista = [
    { id: "1", value: "Alisson Deivison" },
    { id: "2", value: "Jully Desirrê" },
    { id: "3", value: "Alissa Emanuela" },
]

export default function MinhaListaFiltro() {

    const [nomes, setNomes] = useState(minhaLista);
    const [pesquisa, setPesquisa] = useState("");
    useEffect(
        () => {
            if (pesquisa) {
                const novaLista = minhaLista.filter((item) => {
                    return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
                })
                setNomes(novaLista)
            } else {
                setNomes(minhaLista)
            }
        }
        , [pesquisa])

    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Buscar" />
            {nomes.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}