import {FC, ReactNode} from "react";

type CardType = {
    children?: ReactNode,
    isFeatured?: boolean,
    className?: string
}

const Card: FC<CardType> = ({children, isFeatured, className}) => {
    return (
        <div
            className={
                `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
            }
        >
            {children}
        </div>
    )
}

export {Card};
