import { Style } from './styled'

function Input(props) {
    return (
        <Style>
            <div>{props.accent}</div>
            <select>
                <option>Inteira</option>
                <option>Meia</option>
            </select>
        </Style>
    )
}

export default Input;