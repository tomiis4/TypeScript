import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Card from '../components/Card'
import { db } from '../components/Db'
import { useLiveQuery } from 'dexie-react-hooks'

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
    const cards = useLiveQuery(() => db.cards.toArray());

    // updateCardActivity
    // addCard
    // deleteCard
    // getCards

    useEffect(() => {
        if (data.length == 0 && cards) {
            setData(cards);
        }

    }, [cards])

    const addHandler = () => {
        const color = randomColor();
        const id = data.length

        db.addCard(id, inputData, color, true);

        setData([...data, {
            value: inputData,
            id: id,
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
        }));

        db.updateCardActivity(id, isActive);
    }

    const deleteItem = (id: number) => { 
        setData(prevData => prevData.filter(item => item.id !== id)); 
        db.deleteCard(id);
    }

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
                            isActive={a.isActive}
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
