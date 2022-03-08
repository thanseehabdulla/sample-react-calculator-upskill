import { ButtonStyle } from "../../containers/CalculatorPage/style";

export default function Button ({name, type, onHandleClick}) {
    return <button onClick={(e) => onHandleClick(name, type)} style={ButtonStyle}>{name}</button>
}