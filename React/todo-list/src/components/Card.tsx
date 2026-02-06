import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./card.scss";

type Props = {
    id: number,
    value: string,
    color: string,
    isActive: boolean,
    deleteCallback: (arg0: number) => void,
    activityCallback: (arg0: number, arg1: boolean) => void
}

const Card = ({ id, value, color, isActive, deleteCallback, activityCallback }: Props) => {
    const [isActiveClass, setIsActiveClass] = useState(isActive);

    const activeHandler = () => {
        activityCallback(id, !isActiveClass);
        setIsActiveClass(!isActiveClass);
    }

    return <>
        <div className={isActiveClass ? "card" : "card not-active"} onClick={activeHandler}>
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
