import React, { useEffect, forwardRef, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Spike = forwardRef((props, parentPassedRef) => {
    const childRef = useRef(null);
    const finalRef = parentPassedRef || childRef;

    const { nodes, materials, animations } = useGLTF('/3D/spike_geo.glb')
    const { actions } = useAnimations(animations, finalRef)

    useEffect(() => {
        if (props.isContact || props.isCharacterSelection) {
            actions['spike_win']?.play();
            setTimeout(() => {
                actions['spike_win']?.stop();
                actions['spike_idle']?.play();
            }, 6000);
        }
    }, [actions])

    return (
        <group ref={finalRef} {...props} dispose={null} scale={props.isContact ? [0.6, 0.6, 0.6] : props.isCharacterSelection ? [0.3, 0.3, 0.3] : [0.1, 0.1, 0.1]}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="CHARACTER_48">
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
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_15"
                                        geometry={nodes.Object_15.geometry}
                                        material={materials.character_mat}
                                        skeleton={nodes.Object_15.skeleton}
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
                                    <group name="ammo_GEO_41" />
                                    <group name="arms_GEO_42" />
                                    <group name="body_GEO_43" />
                                    <group name="flower_GEO_44" />
                                    <group name="jacket_GEO_45" />
                                    <group name="spikes_GEO_46" />
                                    <group name="stitch_GEO_47" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

export default Spike;