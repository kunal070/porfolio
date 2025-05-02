import React, { useRef, useEffect, forwardRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Bibi = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/heroine_bibi_brawl_stars.glb')
    const { actions } = useAnimations(animations, finalRef)

    const getScale = () => {
        if (props.isCharacterSelection || props.isContact) {
            return [2, 2, 2]
        } else {
            return [0.6, 0.6, 0.6]
        }
    }

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['CHARACTER|bibi_gamer_win']?.play();
            setTimeout(() => {
                actions['CHARACTER|bibi_gamer_win']?.stop();
                actions['CHARACTER|bibi_gamer_idle']?.play();
            }, 6000);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null} scale={getScale()}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} scale={0.233}>
                                <group
                                    name="fd811fdc791445e6bd06376c8011ed41fbx_1"
                                    rotation={[Math.PI / 2, 0, 0]}
                                    scale={0.01}>
                                    <group name="Object_2_2">
                                        <group name="RootNode_3">
                                            <group name="CHARACTER_4" scale={[59.012, 61.039, 61.039]}>
                                                <group name="Object_5_5">
                                                    <group name="GLTF_created_0">
                                                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                                                        <skinnedMesh
                                                            name="Object_93"
                                                            geometry={nodes.Object_93.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_93.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_96"
                                                            geometry={nodes.Object_96.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_96.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_99"
                                                            geometry={nodes.Object_99.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_99.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_102"
                                                            geometry={nodes.Object_102.geometry}
                                                            material={materials['character_metal_mat.001']}
                                                            skeleton={nodes.Object_102.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_105"
                                                            geometry={nodes.Object_105.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_105.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_108"
                                                            geometry={nodes.Object_108.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_108.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_111"
                                                            geometry={nodes.Object_111.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_111.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_114"
                                                            geometry={nodes.Object_114.geometry}
                                                            material={materials['character_metal_mat.001']}
                                                            skeleton={nodes.Object_114.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_117"
                                                            geometry={nodes.Object_117.geometry}
                                                            material={materials['character_metal_mat.001']}
                                                            skeleton={nodes.Object_117.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_120"
                                                            geometry={nodes.Object_120.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_120.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_123"
                                                            geometry={nodes.Object_123.geometry}
                                                            material={materials.character_glow_mat}
                                                            skeleton={nodes.Object_123.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_126"
                                                            geometry={nodes.Object_126.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_126.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_129"
                                                            geometry={nodes.Object_129.geometry}
                                                            material={materials['character_metal_mat.001']}
                                                            skeleton={nodes.Object_129.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_132"
                                                            geometry={nodes.Object_132.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_132.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name="Object_135"
                                                            geometry={nodes.Object_135.geometry}
                                                            material={materials['character_mat.002']}
                                                            skeleton={nodes.Object_135.skeleton}
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
                                                        <group name="Object_19_19_correction">
                                                            <group name="Object_19_19" />
                                                        </group>
                                                        <group name="Object_20_20_correction">
                                                            <group name="Object_20_20" />
                                                        </group>
                                                        <group name="Object_22_22_correction">
                                                            <group name="Object_22_22" />
                                                        </group>
                                                        <group name="Object_23_23_correction">
                                                            <group name="Object_23_23" />
                                                        </group>
                                                        <group name="Object_24_24_correction">
                                                            <group name="Object_24_24" />
                                                        </group>
                                                        <group name="Object_26_26_correction">
                                                            <group name="Object_26_26" />
                                                        </group>
                                                        <group name="Object_28_28_correction">
                                                            <group name="Object_28_28" />
                                                        </group>
                                                        <group name="Object_29_29_correction">
                                                            <group name="Object_29_29" />
                                                        </group>
                                                        <group name="Object_31_31_correction">
                                                            <group name="Object_31_31" />
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
        </group>
    )
})

export default Bibi;