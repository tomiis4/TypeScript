import { useRef, useState } from 'react'
import './App.scss'
import Card from '../components/Card'

type Data = {
    value: string
    id: number
    color: string
}


function App() {
    const [data, setData]= useState<Data[]>([]);
    const [txt, setTxt] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const getColor = () => `#${[0,0,0].map(() => Math.floor(Math.random() * 128 + 127).toString(16).padStart(2, '0')).join('')}`;

    const clickHandler = () => {
        setData([...data, {
            value: txt,
            id: data.length,
            color: getColor()
        }]);

        setTxt("");
        inputRef.current!.value = "";
    }

    const closeF = (id: number) => {
        setData(data.filter(a => a.id != id));
    }

    return (
        <>
            <div className={"inputs"}>
                <input
                    type='text'
                    placeholder={"your task"}
                    ref={inputRef}
                    onChange={(e) => setTxt(e.target.value)}
                />
                <input type='button' value={"submit"} onClick={clickHandler} />
            </div>
            <div className={"cards"}>
                {
                    data.map(a => {
                        return <Card 
                            value={a.value} 
                            color={a.color} 
                            id={a.id} 
                            key={a.id}
                            closeF={closeF} 
                        />
                    })
                }
            </div>
        </>
    )
}

export default App
