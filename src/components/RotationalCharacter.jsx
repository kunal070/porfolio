import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const RotationalCharacter = (props) => {
    const characterRef = useRef();
    const velocityRef = useRef(0);

    const [isDragging, setIsDragging] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const friction = 0.95; // Adjust for smoother/slower stopping

    const handlePointerDown = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setIsDragging(true);
        setLastX(e.clientX);
        velocityRef.current = 0; // Reset velocity on new drag start
    };

    const handlePointerMove = (e) => {
        if (isDragging) {
            const deltaX = e.clientX - lastX;
            velocityRef.current = deltaX * 0.02; // Adjust rotation speed
            characterRef.current.rotation.y -= deltaX * 0.01; // Rotate on Y-axis
            setLastX(e.clientX);
        }
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    useFrame(() => {
        if (!isDragging) {
            velocityRef.current *= friction; // Apply friction for gradual stop
            if (Math.abs(velocityRef.current) > 0.0001) {
                characterRef.current.rotation.y -= velocityRef.current; // Apply inertia
            }
        }
    });

    return (
        <>
            <group
                ref={characterRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                <mesh>
                    {/* <boxGeometry args={[1, 1, 1]} /> */}
                    {/* <meshStandardMaterial color="orange" /> */}
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skyColor="#b1e1ff" intensity={1} />
                    <props.character.component ref={characterRef} isCharacterSelection={true} />
                </mesh>
            </group>
        </>
    )
}

export default RotationalCharacter