import { useState } from 'react'

// react input oninput 与 change 效果一致
interface todoItemProps {
    text: string ;
    finishTask: () => void
}


const TodoList = () => {
    const [list ,setList ] = useState<Array<string>>([]);
    const addItem = (e:React.ChangeEvent<HTMLInputElement>) => {
        const item = e.target.value ;
        setList([...list,item])
        e.target.value = ''
    }

    const deleteItem = (index: number) => {
        list.splice(index,1);
        setList([...list])
    }
    const itemList = list.map((item,index) => {
        return (
            <TodoItem text={item} finishTask={() => deleteItem(index)}/>
        )
    })

    return (
        <div>
            <input onBlur={addItem}/>
            {itemList}
        </div>
    )
}
const TodoItem = ({text , finishTask}: todoItemProps) => {
    return(
        <div onClick={finishTask}>
            {text}
        </div>
    )
}

export default TodoList