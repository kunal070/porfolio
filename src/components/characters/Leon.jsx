import React, { forwardRef, useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Leon = forwardRef((props, parentPassedRef) => {
  const childRef = useRef(null);
  const finalRef = parentPassedRef || childRef;

  const model = useGLTF("/3D/leon_ghost_geo.glb");
  const { nodes, materials, animations } = model;
  const { actions } = useAnimations(animations, finalRef);

  useEffect(() => {
    if (props.isContact || props.isCharacterSelection) {
      actions['leon_ghost_win']?.play();
      setTimeout(() => {
        actions['leon_ghost_win']?.stop();
        actions['leon_ghost_idle']?.play();
      }, 6000);
    }
  }, [actions])

  return (
    <>
      <group {...props} ref={finalRef} dispose={null} scale={props.isCharacterSelection ? [1.2, 1.2, 1.2] : [1, 1, 1]} >
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.102}
          >
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="CHARACTER_128">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.character_metal_mat}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.character_mat}
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
                      material={materials.character_metal_mat}
                      skeleton={nodes.Object_12.skeleton}
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
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.character_metal_mat}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.character_mat}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      geometry={nodes.Object_22.geometry}
                      material={materials.character_mat}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.character_mat}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <group name="bagGeo_120" />
                    <group name="bodyGeo_121" />
                    <group name="buttonsGeo_122" />
                    <group name="hoodGeo_123" />
                    <group name="legsGeo_124" />
                    <group name="lolipopGEO_125" />
                    <group name="ropeGeo_126" />
                    <group name="tongueGeo_127" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
})

export default Leon;