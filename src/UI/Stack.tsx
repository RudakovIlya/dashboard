import {FC, ReactNode} from "react";

type StackType = {
    pos: string
    children?: ReactNode
}

const Stack: FC<StackType> = ({children, pos}) => (
    <div className='stack' style={{
        justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
        {children}
    </div>
);

export {Stack};
