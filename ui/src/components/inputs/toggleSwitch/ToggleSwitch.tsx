import './ToggleSwitch.css'

export default function ToggleSwitch() {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />

        </label>
    )
}