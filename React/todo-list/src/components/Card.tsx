import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import type { Card as CardType } from "./Db";
import "./card.scss";

interface Props extends CardType {
    deleteCallback: (arg0: number) => void,
    activityCallback: (arg0: number, arg1: boolean) => void
}

const Card = ({ id, value, color, isActive, deleteCallback, activityCallback }: Props) => {
    const [isActiveClass, setIsActiveClass] = useState(isActive);
    const [isDeleted, setIsDeleted] = useState("");

    const activeHandler = () => {
        activityCallback(id, !isActiveClass);
        setIsActiveClass(!isActiveClass);
    }

    const deleteHandler = (e: any) => {
        // setIsDeleted(" delete")

        // setTimeout(() => {
            e.stopPropagation();
            deleteCallback(id);
        // }, 400)
    }

    return <>
        <div className={isActiveClass ? "card" : "card not-active" + isDeleted} onClick={activeHandler}>
            <div className={"clr"} style={{ background: color }} />
            <h3> <span>{value}</span> </h3>
            <IoMdCloseCircleOutline
                color={"#ECEFC8"}
                fontSize={"35px"}
                className={"ico"}
                onClick={(e) => deleteHandler(e)}
            />
        </div>
    </>;
}

export default Card;
