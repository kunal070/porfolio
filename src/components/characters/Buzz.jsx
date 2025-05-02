import React, { forwardRef, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Buzz = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/buzz_brawl_stars.glb')
    const { actions } = useAnimations(animations, finalRef)

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['CHARACTER|buzz_win']?.play();
            setTimeout(() => {
                actions['CHARACTER|buzz_win']?.stop();
                actions['CHARACTER|buzz_idle']?.play();
            }, 4500);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={props.isCharacterSelection ? [0.3, 0.3, 0.3] : [0.1, 0.1, 0.1]}>
                    <group
                        name="69e8b2b77c0745e4a11e2e40923a7a90fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="CHARACTER" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_152"
                                            geometry={nodes.Object_152.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_152.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_154"
                                            geometry={nodes.Object_154.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_154.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_155"
                                            geometry={nodes.Object_155.geometry}
                                            material={materials.character_metal_mat}
                                            skeleton={nodes.Object_155.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_157"
                                            geometry={nodes.Object_157.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_157.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_159"
                                            geometry={nodes.Object_159.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_159.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_161"
                                            geometry={nodes.Object_161.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_161.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_162"
                                            geometry={nodes.Object_162.geometry}
                                            material={materials.character_metal_mat}
                                            skeleton={nodes.Object_162.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_164"
                                            geometry={nodes.Object_164.geometry}
                                            material={materials.character_metal_mat}
                                            skeleton={nodes.Object_164.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_165"
                                            geometry={nodes.Object_165.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_165.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_167"
                                            geometry={nodes.Object_167.geometry}
                                            material={materials.character_metal_mat}
                                            skeleton={nodes.Object_167.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_168"
                                            geometry={nodes.Object_168.geometry}
                                            material={materials.character_mat}
                                            skeleton={nodes.Object_168.skeleton}
                                        />
                                        <group name="Object_151" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_153" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_156" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_158" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_160" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_163" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                        <group name="Object_166" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                    </group>
                                </group>
                                <group name="board_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="body_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="cheeks_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="eyebrow_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="glasses_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="rope_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                <group name="whistle_GeoPIV" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

export default Buzz;