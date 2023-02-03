import './Checkbox.css'

export default function Checkbox() {
    return (
        <div className="checkBoxContainer">
            <input className='checkBox' type="checkbox" />
            <span className='hoverArea' />
        </div>
    )
}