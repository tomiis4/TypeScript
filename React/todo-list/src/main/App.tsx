import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Card from '../components/Card'

type Data = {
    value: string
    id: number
    color: string
    isActive: boolean
}

function randomColor() {
    return `#${[0, 0, 0].map(() => Math.floor(Math.random() * 128 + 127).toString(16).padStart(2, '0')).join('')}`;
}

function App() {
    const [data, setData] = useState<Data[]>([]);
    const [inputData, setInputData] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // useEffect(() => { }, [data])


    const addHandler = () => {
        setData([...data, {
            value: inputData,
            id: data.length,
            color: randomColor(),
            isActive: true
        }]);

        // reset
        setInputData("");
        inputRef.current!.value = "";
    }

    const updateActivity = (id: number, isActive: boolean) => {
        setData(data.map(item => {
            if (item.id == id) {
                return { ...item, isActive: isActive }
            }

            return item;
        }))
    }

    const deleteItem = (id: number) => { setData(prevData => prevData.filter(item => item.id !== id)); }

    return (
        <>
            <div className={"inputs"}>
                <input
                    type='text'
                    placeholder={"your task"}
                    ref={inputRef}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <input type='button' value={"submit"} onClick={addHandler} />
            </div>
            <div className={"cards"}>
                {
                    data.map(a => {
                        return <Card
                            value={a.value}
                            color={a.color}
                            id={a.id}
                            key={a.id}
                            deleteCallback={deleteItem}
                            activityCallback={updateActivity}
                        />
                    })
                }
            </div>
        </>
    )
}

export default App
