import React, { ReactNode } from "react"

const Todo: React.FC<{text: string, onRemoveTodo: ()=> void,children? : ReactNode}> = (props) =>{
    return <li onClick={props.onRemoveTodo}>{props.text}</li>
}

export default Todo;