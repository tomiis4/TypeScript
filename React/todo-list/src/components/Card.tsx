import { useState } from "react";

const Card = ({ text, color }: { text: string, color: string }) => {
    const [isActive, setIsActive] = useState(true);

    const click = () => {
        setIsActive(!isActive);
    }

    return <>
        <div className={isActive ? "" : "not-active"} onClick={click}>
            <div style={{ background: color }} />
            <h3> {text} </h3>
            <img src="" />
        </div>
    </>;
}

export default Card;
