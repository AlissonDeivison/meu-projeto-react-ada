import { useEffect, useState } from "react"

const tarefas = [
    {id:"1", title:"Minha primeira tarefa"},
    {id:"2", title:"Minha segunda tarefa"},
    {id:"3", title:"Minha terceira tarefa"},
    {id:"4", title:"Minha quarta tarefa"},
    {id:"5", title:"Minha quinta tarefa"},
] 
export default function BuscarDados(){

    const [tarefas, setTarefas] = useState([]);

    useEffect(()=> {
        async function buscarDados(){
            const resultado = await fetch("https://jsonplaceholder.typicode.com/todos");
            const resultadoFinal = await resultado.json();
            return resultadoFinal;
        }
        buscarDados().then(res => setTarefas(res))
    }, [])


    return(
        <div>
            <ol>
            {tarefas.map((tarefa)=>{
                return(
                    <div>
                        <li key={tarefa.id}>{tarefa.title}
                        {tarefa.completed ? <span>- Tarefa concluída</span> : null }
                        </li>
                        
                    </div>
                )
            })}
            </ol>
        </div>
    )
}