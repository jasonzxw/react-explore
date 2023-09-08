import './tree.css'

export interface props{
    array: TreeProps[]
}
export interface TreeProps {
    text: string ,
    length?: number ,
    children?: TreeProps[], 
}
const Tree = ({array}: props) => {
    return (
        <>
        {
            array.map(item => {
                return (
                    <div className='tree'>
                        {item.text}
                        {item.children && <Tree array={item.children}/>}
                    </div>
                )
            })
        }
        </>
    )
}

export default Tree