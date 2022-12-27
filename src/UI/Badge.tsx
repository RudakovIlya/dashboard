import React, {ReactNode, FC} from 'react'
import RemoveIcon from "./RemoveIcon";

type BadgeType = {
    variant?: 'basic' | 'clearable' | 'rounded'
    colorScheme?: 'light' | 'primary' | 'dark'
    children?: ReactNode
    onClear?: () => void
    onClick?: () => void
}

const Badge: FC<BadgeType> = ({
                                  variant = 'basic',
                                  colorScheme = 'light',
                                  children,
                                  onClear,
                                  onClick,
                              }) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>
      {children}
    </span>
        {variant === 'clearable' && (
            <div className='badge-remover' onClick={onClear}>
                <RemoveIcon/>
            </div>
        )}
    </div>
);

export {Badge};