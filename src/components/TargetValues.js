import { useState } from "react"

const TargetValues = () => {
    const [targetTemp, setTargetTemp] = useState(20)
    const [targetHumidity, setTargetHumidity] = useState(50)

    const addTemp = () => {setTargetTemp(targetTemp+1)}
    const subTemp = () => {setTargetTemp(targetTemp-1)}
    const addHumidity = () => {setTargetHumidity(targetHumidity+10)}
    const subHumidity = () => {setTargetHumidity(targetHumidity-10)}

    return(
        <div className="target">
            <h1>Target Values</h1>
            <div className="flex">
                <button className="sub" onClick={subTemp}>-</button>
                <p>{targetTemp+"°C"}</p>
                <button className="add" onClick={addTemp}>+</button>
            </div>
            <div className="flex">
                <button className="sub" onClick={subHumidity}>-</button>
                <p>{targetHumidity+"%"}</p>
                <button className="add" onClick={addHumidity}>+</button>
            </div>
            <button className="saveButton">Zapisz</button>
        </div>
    )
}
export default TargetValues