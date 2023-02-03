import './RadioButton.css'

export interface IRadioButtonProps {
    backgroundColor: string;
    name: string
}

export default function RadioButton(props: IRadioButtonProps) {
    return (
        <input style={{
            backgroundColor: props.backgroundColor
        }}
            type="radio"
            name={props.name} />
    )
}