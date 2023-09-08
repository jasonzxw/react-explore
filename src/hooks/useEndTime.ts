import { useState , useEffect} from 'react'

function useTimeEnd(endTime: number){
    const [end , setEnd] = useState(endTime);
    
    useEffect( () => {
        const timerId = setInterval(() => {
            if(end > 0){
                setEnd(end -1 )
            }else{
                clearInterval(timerId);
            }
        } , 1000)

        return () => clearInterval(timerId)
    },[end])
    return end ;
}

export default useTimeEnd