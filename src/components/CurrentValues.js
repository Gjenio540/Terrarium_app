import { useState, useEffect } from "react"

const CurrentValues = () => {
    const [currentTemp, setCurrentTemp] = useState(25)
    const [currentHumidity, setCurrentHumidity] = useState(60)

    return(
        <div className="current">
            <h3>Temperatura 🌡️</h3>
            <h2>{currentTemp+"°C"}</h2>
            <h3>Wilgotność 💦</h3>
            <h2>{currentHumidity+"%"}</h2>
        </div>
    )
}

export default CurrentValues