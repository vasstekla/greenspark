import './ToggleSwitch.css';

interface IToggleSwitchProps {
    value: boolean;
    onChange: Function;
}

export default function ToggleSwitch(props: IToggleSwitchProps) {
    return (
        <label className="switch">
            <input type="checkbox" checked={props.value} onChange={() => { props.onChange(!props.value); }} />
            <span className="slider round" />
        </label>
    );
}