import { useRef, useState } from 'react'
import './App.scss'

function App() {
    const [txt, setTxt] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = () => {
        console.log(txt);

        setTxt("");
        inputRef.current!.value = "";
    }

    return (
        <>
            <div>
                <input
                    type='text'
                    ref={inputRef}
                    onChange={(e) => setTxt(e.target.value)}
                />
                <input type='button' value={"submit"} onClick={clickHandler} />


            </div>
        </>
    )
}

export default App
