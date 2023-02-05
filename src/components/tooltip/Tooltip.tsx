import { ReactComponent as TooltipIcon } from '../../data/tooltip.svg';
import './Tooltip.css'

interface ITooltipProps {
    text: string;
    actionText?: string;
    actionLink?: string;
}

export default function Tooltip(props: ITooltipProps) {
    return (
        <div className="tooltip"><TooltipIcon />
            <span className="tooltiptext">
                <p className="text">{props.text}</p>
                <a href={props.actionLink} target='_blank'>{props.actionText}</a>
            </span>
        </div>
    )
}