import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Vector3, Euler, Quaternion, Matrix4 } from 'three';
import { useCompoundBody } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { Vec3 } from 'cannon-es';
import useFollowCam from '../hooks/useFollowCam';
import { useInput } from '../hooks/useInput';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useJoystickContext } from '../context/joystick.context';
import { useCharacterContext } from '../context/charcter.context';

function Man(props) {
  const corner1 = { x: 19.602127075195327, y: -2.00045351055450737455, z: 24.006841659545884 };
  const corner2 = { x: 1.0214509963989267, y: -2.00045351055450737455, z: 24.02713012695314 };
  const corner3 = { x: 0.8555576801300053, y: -2.00045351055450737455, z: -9.544156074523919 };
  // const corner4 = { x: 20.141155242919908, y: -0.00045351055450737455, z: -9.547193527221687 };

  const clampX = (value) => Math.min(Math.max(value, corner2.x), corner1.x);
  const clampZ = (value) => Math.min(Math.max(value, corner3.z), corner1.z);

  const { direction } = useJoystickContext();
  const { shift } = useInput();
  const keyBoardInputs = useInput();

  const isMobileDevice = JSON.parse(window.sessionStorage.getItem('isMobile')) === '1';

  const [currentDirection, setCurrentDirection] = useState({
    forward: false,
    backward: false,
    right: false,
    left: false,
  });

  const { character } = useCharacterContext();

  const group = useRef();
  const model = useGLTF(character.path);
  const { animations } = model;
  const { actions } = useAnimations(animations, group);

  const { pivot } = useFollowCam();
  const velocity = useMemo(() => new Vector3(), []);
  const inputVelocity = useMemo(() => new Vector3(), []);
  const euler = useMemo(() => new Euler(), []);
  const quat = useMemo(() => new Quaternion(), []);
  const targetQuaternion = useMemo(() => new Quaternion(), []);
  const worldPosition = useMemo(() => new Vector3(), []);
  const contactNormal = useMemo(() => new Vec3(0, 0, 0), []);

  const currentRef = useRef("");
  const [ref, body] = useCompoundBody(
    () => ({
      mass: 1,
      shapes: [
        { args: [0.5], position: [0, 0.5, 0], type: 'Sphere' },
        { args: [0.5], position: [0, 1.5, 0], type: 'Sphere' }
      ],
      onCollide: (e) => {
        if (e.contact.bi.id === e.body.id) {
          e.contact.ni.negate(contactNormal);
        } else {
          contactNormal.set(...e.contact.ni);
        }
      },
      ...props
    }),
    useRef()
  );

  useFrame((_, delta) => {
    body.angularFactor.set(0, 0, 0);

    ref.current.getWorldPosition(worldPosition);

    const rotationMatrix = new Matrix4();
    rotationMatrix.lookAt(worldPosition, group.current.position, group.current.up);
    targetQuaternion.setFromRotationMatrix(rotationMatrix);

    if (!group.current.quaternion.equals(targetQuaternion)) {
      targetQuaternion.z = 0;
      targetQuaternion.x = 0;
      group.current.quaternion.rotateTowards(targetQuaternion, delta * 10);
    } else {
      group.current.quaternion.copy(targetQuaternion);
    }

    if (document.pointerLockElement || isMobileDevice) {
      inputVelocity.set(0, 0, 0);
      if (currentDirection.forward) {
        shift ? inputVelocity.z += -100 * delta : inputVelocity.z += -60 * delta;
      }
      if (currentDirection.backward) {
        shift ? inputVelocity.z += 100 * delta : inputVelocity.z += 60 * delta;
      }
      if (currentDirection.left) {
        shift ? inputVelocity.x += -100 * delta : inputVelocity.x += -60 * delta;
      }
      if (currentDirection.right) {
        shift ? inputVelocity.x += 100 * delta : inputVelocity.x += 60 * delta;
      }

      euler.y = pivot.rotation.y;
      euler.order = 'XYZ';
      quat.setFromEuler(euler);
      inputVelocity.applyQuaternion(quat);
      velocity.set(inputVelocity.x, inputVelocity.y, inputVelocity.z);
      body.velocity.set(velocity.x, velocity.y, velocity.z);
    }

    const currentPosition = group.current.position

    // Smoothly move towards the target position
    group.current.position.lerp(worldPosition, 0.1);
    pivot.position.lerp(worldPosition, 0.2);

    // Clamp the position to stay within the specified space for forward movement
    group.current.position.x = clampX(currentPosition.x);
    group.current.position.z = clampZ(currentPosition.z);
    pivot.position.x = group.current.position.x;
    pivot.position.z = group.current.position.z;
  });

  useEffect(() => {
    let action = "";
    if (currentDirection.forward || currentDirection.backward || currentDirection.left || currentDirection.right) {
      action = character.walk;
      if (shift) action = character.attack;
    } else {
      action = character.idle;
    }

    if (currentRef.current !== action) {
      const nextAction = actions[action];
      const current = actions[currentRef.current];
      current?.fadeOut(0.5);
      nextAction?.reset().fadeIn(0.2).play();
      currentRef.current = action;
    }
  }, [currentDirection, shift, actions]);

  useEffect(() => {
    setCurrentDirection(direction)
  }, [direction]);

  useEffect(() => {
    setCurrentDirection({
      forward: keyBoardInputs.forward,
      backward: keyBoardInputs.backward,
      left: keyBoardInputs.left,
      right: keyBoardInputs.right
    })
  }, [keyBoardInputs])

  return (
    <>
      <spotLight
        position={[10, 10, 10]}
        angle={0.1}
        penumbra={0.5}
        intensity={2}
        castShadow
        target={group?.current} // Target the character
      />
      <character.component ref={group} />
    </>
  );
}

export default Man;
