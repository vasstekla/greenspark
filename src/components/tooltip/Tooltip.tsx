import { useState } from 'react';
import { ReactComponent as TooltipIcon } from '../../data/tooltip.svg';
import './Tooltip.css'

interface ITooltipProps {
    text: string;
    actionText?: string;
    actionLink?: string;
}

export default function Tooltip(props: ITooltipProps) {

    const [isShown, setIsShown] = useState(false);
    let handleMouseLeave = () => {
        setTimeout(() => {
            setIsShown(false);
        }, 250)
    }

    return (
        <div className="tooltip"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={handleMouseLeave}>
            <TooltipIcon />
            {isShown && <span className="tooltiptext">
                <p className="text">{props.text}</p>
                <a href={props.actionLink} target='_blank'>{props.actionText}</a>
            </span>}
        </div>
    )
}