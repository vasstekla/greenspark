import './RadioButton.css'

export interface IRadioButtonProps {
    backgroundColor: string;
}

export default function RadioButton(props: IRadioButtonProps) {
    return (
        <input style={{
            backgroundColor: props.backgroundColor
        }}
            type="radio"
            name="colour" />
    )
}