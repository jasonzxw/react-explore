import { memo  } from 'react'
interface TestRenderProps{
    count: number ,
    text: string ,
}

const TestRenders = ({ count, text}: TestRenderProps) => {
    console.log(`test render`)
    return(
        <>
        <p> {count}</p>
        <p> {text} </p>
        </>
    )
}

export default memo(TestRenders)