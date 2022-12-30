import {FC, memo, ReactNode} from "react";

type StackType = {
    pos: string
    children?: ReactNode
}

const Stack: FC<StackType> = memo(({children, pos}) => (
    <div className='stack' style={{
        justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
        {children}
    </div>
));

export {Stack};
