import React from "react";
import { Joystick } from "react-joystick-component";
import { useJoystickContext } from "../context/joystick.context";

const useJoystick = () => {
    const { updateDirection } = useJoystickContext();

    const handleMove = (event) => {
        const x = event.x;
        const y = event.y;

        updateDirection({
            forward: y > 0.2,
            backward: y < -0.2,
            left: x < -0.2,
            right: x > 0.2
        })
    };

    const handleStop = () => {
        updateDirection({
            forward: false,
            backward: false,
            left: false,
            right: false
        });
    };

    return { handleMove, handleStop };
};

const JoystickComponent = () => {
    const { handleMove, handleStop } = useJoystick();

    return (
        <div className="joystick-container">
            <Joystick
                size={100}
                baseColor="lightgray"
                stickColor="gray"
                move={handleMove}
                stop={handleStop}
            />
        </div>
    );
};

export default JoystickComponent;
