import './RadioButton.css'

interface IRadioButtonProps {
    backgroundColor: string;
    selectedColor: string;
    name: string;
    onChange: Function;
}

export default function RadioButton(props: IRadioButtonProps) {
    return (
        <input style={{
            backgroundColor: props.backgroundColor
        }}
            type="radio"
            name={props.name}
            value={props.backgroundColor}
            checked={props.backgroundColor === props.selectedColor}
            onChange={(e) => { props.onChange(e.target.value) }} />
    )
}