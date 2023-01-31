import React, { useEffect, useState } from 'react'

const MyFun = () => {
    const [count, setCount] = useState(40);
    const [date, setDate] = useState(new Date());


    const [text, setText] = useState("");


    useEffect(() => {
        document.title = count;
        console.log('renderd');
        return () => {
            
        }
    },[count])

    useEffect(() => {
       const timer = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    },[])


    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const tick = () => {
        console.log('working fine');
        setDate(new Date());
    }


    return (
        <div>
            <p>Time :{date.toLocaleString()}</p>
            <p>{count}</p>
            <button onClick={() => addClick()}>click </button>
            <br />

            <input type="text" value={text} onChange={(e)=>  setText(e.target.value)} />
        </div>
    )
}

export default MyFun