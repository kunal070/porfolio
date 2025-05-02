import React, { useEffect, forwardRef, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Bit = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/virus_8-bit.glb')
    const { actions } = useAnimations(animations, finalRef)

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['8vit_virus_win']?.play();
            setTimeout(() => {
                actions['8vit_virus_win']?.stop();
                actions['8vit_virus_idle']?.play();
            }, 5000);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null} scale={(props.isContact || props.isCharacterSelection) ? [0.9, 0.9, 0.9] : [0.6, 0.6, 0.6]}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} scale={0.166}>
                                <group name="root_1">
                                    <group name="GLTF_SceneRootNode_2" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="CHARACTER_77_3">
                                            <group name="GLTF_created_0_4">
                                                <group name="GLTF_created_0">
                                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                                    <skinnedMesh
                                                        name="Object_76"
                                                        geometry={nodes.Object_76.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_76.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_79"
                                                        geometry={nodes.Object_79.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_79.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_82"
                                                        geometry={nodes.Object_82.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_82.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_85"
                                                        geometry={nodes.Object_85.geometry}
                                                        material={materials.character_mat}
                                                        skeleton={nodes.Object_85.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_88"
                                                        geometry={nodes.Object_88.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_88.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_91"
                                                        geometry={nodes.Object_91.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_91.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_94"
                                                        geometry={nodes.Object_94.geometry}
                                                        material={materials.character_mat}
                                                        skeleton={nodes.Object_94.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_97"
                                                        geometry={nodes.Object_97.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_97.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_100"
                                                        geometry={nodes.Object_100.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_100.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_103"
                                                        geometry={nodes.Object_103.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_103.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_106"
                                                        geometry={nodes.Object_106.geometry}
                                                        material={materials.character_mat}
                                                        skeleton={nodes.Object_106.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_109"
                                                        geometry={nodes.Object_109.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_109.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_112"
                                                        geometry={nodes.Object_112.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_112.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_115"
                                                        geometry={nodes.Object_115.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_115.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_118"
                                                        geometry={nodes.Object_118.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_118.skeleton}
                                                    />
                                                    <skinnedMesh
                                                        name="Object_121"
                                                        geometry={nodes.Object_121.geometry}
                                                        material={materials.character_metal_mat}
                                                        skeleton={nodes.Object_121.skeleton}
                                                    />
                                                    <group name="Object_8_8_correction">
                                                        <group name="Object_8_8" />
                                                    </group>
                                                    <group name="Object_10_10_correction">
                                                        <group name="Object_10_10" />
                                                    </group>
                                                    <group name="Object_12_12_correction">
                                                        <group name="Object_12_12" />
                                                    </group>
                                                    <group name="Object_13_13_correction">
                                                        <group name="Object_13_13" />
                                                    </group>
                                                    <group name="Object_15_15_correction">
                                                        <group name="Object_15_15" />
                                                    </group>
                                                    <group name="Object_17_17_correction">
                                                        <group name="Object_17_17" />
                                                    </group>
                                                    <group name="Object_18_18_correction">
                                                        <group name="Object_18_18" />
                                                    </group>
                                                    <group name="Object_20_20_correction">
                                                        <group name="Object_20_20" />
                                                    </group>
                                                    <group name="Object_22_22_correction">
                                                        <group name="Object_22_22" />
                                                    </group>
                                                    <group name="Object_24_24_correction">
                                                        <group name="Object_24_24" />
                                                    </group>
                                                    <group name="Object_25_25_correction">
                                                        <group name="Object_25_25" />
                                                    </group>
                                                    <group name="Object_27_27_correction">
                                                        <group name="Object_27_27" />
                                                    </group>
                                                    <group name="Object_29_29_correction">
                                                        <group name="Object_29_29" />
                                                    </group>
                                                    <group name="Object_31_31_correction">
                                                        <group name="Object_31_31" />
                                                    </group>
                                                    <group name="Object_33_33_correction">
                                                        <group name="Object_33_33" />
                                                    </group>
                                                    <group name="Object_35_35_correction">
                                                        <group name="Object_35_35" />
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

export default Bit;