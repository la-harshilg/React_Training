import React, { ReactNode, useRef } from "react"

const NewTodo: React.FC<{children?: ReactNode, onAddTodo: (text:string) => void}> = (props) => {

    const inputTodo = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputTodo.current!.value;

        if(enteredText?.trim().length === 0){
            return;
        }

        props.onAddTodo(enteredText)

    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="ntodo">New Todo</label>
        <input id="notodo" type="text" ref={inputTodo}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo