const minhaLista = [
    { id: "1", value: "Alisson Deivison" },
    { id: "2", value: "Jully Desirrê" },
    { id: "3", value: "Alissa Emanuela" },
]

export default function MinhaLista() {
    return minhaLista.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}