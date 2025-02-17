import React from 'react'
import Button from '../../atoms/Button'

export const ButtonIcon = ({ id, color, textColor, Icon,  iconPosition = "left", children, className }) => {
    return (
        <Button id={id} color={color} textColor={textColor} className={className}>
            <div className='flex items-center gap-2'>
                {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
                {children && <span>{children}</span>}
                {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
            </div>
        </Button>
    )
}
