import './Checkbox.css'

interface ICheckboxProps {
    value: boolean;
    onChange: Function
}


export default function Checkbox(props: ICheckboxProps) {
    return (
        <div className="checkBoxContainer">
            <input className='checkBox' type="checkbox" checked={props.value} onChange={() => { props.onChange(!props.value) }} />
            <span className='hoverArea' />
        </div>
    )
}