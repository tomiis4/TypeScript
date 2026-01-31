import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./card.scss";

const Card = ({ value, color, id, closeF }: { value: string, color: string, id:number, closeF: (arg0:number) => void }) => {
    const [isActive, setIsActive] = useState(true);

    const click = () => {
        setIsActive(!isActive);
    }

    return <>
        <div className={isActive ? "card" : "card not-active"} onClick={click}>
            <div className={"clr"} style={{ background: color }} />
            <h3> <span>{value}</span> </h3>
            <IoMdCloseCircleOutline
                color={"#ECEFC8"} 
                fontSize={"35px"} 
                className={"ico"} 
                onClick={() => closeF(id)!} 
            />
        </div>
    </>;
}

export default Card;
