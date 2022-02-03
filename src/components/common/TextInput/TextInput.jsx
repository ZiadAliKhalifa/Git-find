import { useState, useEffect } from "react";
import "./TextInput.css";

const TextInput = ({ timeoutFunction, label }) => {
    const [inputValue, setInputValue] = useState("");

    // Trigger a passed function when user stops typing
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (inputValue.trim() !== "")
                timeoutFunction(inputValue)
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [timeoutFunction, inputValue])

    return (
        <div className="text-input-container">
            <input
                value={inputValue}
                className={"text-input"}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}

            />
            {label && <label className="text-input-helper">{label}</label>}
        </div >
    );
}

export default TextInput;
