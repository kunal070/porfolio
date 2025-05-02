import React, { useEffect, forwardRef, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Otis = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/otis_geo.glb')
    const { actions } = useAnimations(animations, finalRef)

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['otis_win']?.play();
            setTimeout(() => {
                actions['otis_win']?.stop();
                actions['otis_idle']?.play();
            }, 6000);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={props.isCharacterSelection ? [0.3, 0.3, 0.3] : 0.142}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="CHARACTER_73">
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_10"
                                        geometry={nodes.Object_10.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_10.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_12"
                                        geometry={nodes.Object_12.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_12.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_15"
                                        geometry={nodes.Object_15.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_15.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_16"
                                        geometry={nodes.Object_16.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_16.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_18"
                                        geometry={nodes.Object_18.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_18.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_20"
                                        geometry={nodes.Object_20.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_20.skeleton}
                                    />
                                    <group name="backpack_GEOPIV_67" />
                                    <group name="body_GEOPIV_68" />
                                    <group name="head_GEOPIV_69" />
                                    <group name="pipe_GEOPIV_70" />
                                    <group name="shoe_GEOPIV_71" />
                                    <group name="star_GEOPIV_72" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

export default Otis;