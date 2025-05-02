import React, { createContext, useContext, useState } from "react";

const JoystickContext = createContext();

export const JoystickProvider = ({ children }) => {
    const [direction, setDirection] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
    });

    const updateDirection = (newDirection) => setDirection(newDirection);

    return (
        <JoystickContext.Provider value={{ direction, updateDirection }}>
            {children}
        </JoystickContext.Provider>
    );
};

export const useJoystickContext = () => useContext(JoystickContext);
