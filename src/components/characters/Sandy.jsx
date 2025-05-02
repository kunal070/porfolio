import React, { forwardRef, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Sandy = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/sandy_lantern_geo.glb')
    const { actions } = useAnimations(animations, finalRef)

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['sandy_lantern_win']?.play();
            setTimeout(() => {
                actions['sandy_lantern_win']?.stop();
                actions['sandy_lantern_idle']?.play();
            }, 7000);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null} scale={(props.isContact) ? [0.4, 0.4, 0.4] : props.isCharacterSelection ? [0.2, 0.2, 0.2] : [0.1, 0.1, 0.1]}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="CHARACTER_142">
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_14"
                                        geometry={nodes.Object_14.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_14.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_16"
                                        geometry={nodes.Object_16.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_16.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_17"
                                        geometry={nodes.Object_17.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_17.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_19"
                                        geometry={nodes.Object_19.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_19.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_21"
                                        geometry={nodes.Object_21.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_21.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_23"
                                        geometry={nodes.Object_23.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_23.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_25"
                                        geometry={nodes.Object_25.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_25.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_27"
                                        geometry={nodes.Object_27.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_27.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_29"
                                        geometry={nodes.Object_29.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_29.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_31"
                                        geometry={nodes.Object_31.geometry}
                                        material={materials.character_metal_mat}
                                        skeleton={nodes.Object_31.skeleton}
                                    />
                                    <group name="hair_Geo_130" />
                                    <group name="hand_Geo_131" />
                                    <group name="handleHat_Geo_132" />
                                    <group name="hatGeoPIV_133" />
                                    <group name="lantern_Geo_134" />
                                    <group name="neckscarf_Geo_135" />
                                    <group name="nose_bubble_Geo_136" />
                                    <group name="pant_Geo_137" />
                                    <group name="sandy_Geo_138" />
                                    <group name="scarf_Geo_139" />
                                    <group name="vest_Geo_140" />
                                    <group name="wristguards_Geo_141" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

export default Sandy;