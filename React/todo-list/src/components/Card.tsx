import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./card.scss";

type Props = {
    value: string,
    color: string,
    id: number,
    deleteCallback: (arg0: number) => void,
    activityCallback: (arg0: number, arg1: boolean) => void
}

const Card = ({ value, color, id, deleteCallback, activityCallback }: Props) => {
    const [isActive, setIsActive] = useState(true);

    const activeHandler = () => {
        activityCallback(id, !isActive);
        setIsActive(!isActive);
    }

    return <>
        <div className={isActive ? "card" : "card not-active"} onClick={activeHandler}>
            <div className={"clr"} style={{ background: color }} />
            <h3> <span>{value}</span> </h3>
            <IoMdCloseCircleOutline
                color={"#ECEFC8"}
                fontSize={"35px"}
                className={"ico"}
                onClick={(e) => {
                    e.stopPropagation(); 
                    deleteCallback(id);
                }}
            />
        </div>
    </>;
}

export default Card;
