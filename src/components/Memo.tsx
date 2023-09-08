import { memo } from 'react'

interface MemoProps{
    click: () => void ,
    text: string
}

const Memo = memo(({ click , text} : MemoProps) => {
    console.log(`Memo render`)
    return(
        <div onClick={click}>
            {text}
        </div>
    )
})

export default Memo