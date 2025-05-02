import { useRef } from 'react'
import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useGLTF } from '@react-three/drei'

export default function Floor(props) {
  const [ref] = usePlane(() => ({ ...props }), useRef())
  // const texture = useLoader(TextureLoader, 'https://i.postimg.cc/FH1tyn7q/pexels-photo-413195.jpg')
  const { nodes, materials, animations } = useGLTF("/3D/castillo.glb");
  return (
    <mesh ref={ref} receiveShadow>
      {/* <planeGeometry  args={[25, 25]} /> */}
      {/* <meshStandardMaterial map={texture} /> */}
      <group {...props} dispose={null}>
        {/* <PerspectiveCamera makeDefault ref={cameraRef} position={[10, 10,10]} />
      <OrbitControls/> */}
        <group name="Sketchfab_Scene">
          {/* <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}> */}
          <group name="Sketchfab_model" position={[0, 2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              {/* <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}> */}
              <group name="GLTF_SceneRootNode" position={[0, 2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="canyon_bottom_props_025_0"
                  position={[-0.531, 1.798, -1.664]}
                  rotation={[-3.136, 0.983, Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="Cylinder_152_1"
                  position={[9.653, 3.154, 25.075]}
                  rotation={[1.716, 0.263, 0.953]}
                  scale={0.071}
                >
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Plane_064_2"
                  position={[10.661, 2.58, 26.053]}
                  rotation={[-3.034, -1.506, 2.23]}
                  scale={0.671}
                >
                  <mesh
                    name="Object_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="barrel_1_037_3"
                  position={[9.214, 1.901, 24.488]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_206_4"
                  position={[12.129, 2.372, 26.633]}
                  rotation={[-0.39, 0.491, 0]}
                  scale={0.261}
                >
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_205_5"
                  position={[11.613, 2.344, 26.478]}
                  rotation={[-0.451, 1.156, 0.032]}
                  scale={0.408}
                >
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_204_6"
                  position={[9.383, 2.802, 25.825]}
                  rotation={[-0.179, 0.014, 0]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_203_7"
                  position={[11.473, 2.646, 25.154]}
                  rotation={[-0.603, 0.111, -1.373]}
                >
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_151_8"
                  position={[9.443, 2.699, 25.763]}
                  rotation={[-2.228, -0.814, 2.956]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_150_9"
                  position={[10.907, 2.52, 25.924]}
                  rotation={[0.605, -0.627, -0.594]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_149_10"
                  position={[10.973, 2.047, 24.364]}
                  rotation={[-0.149, 1.068, 1.384]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_33"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_201_11"
                  position={[11.929, 2.025, 24.089]}
                  rotation={[-0.929, -0.864, -1.058]}
                >
                  <mesh
                    name="Object_35"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_36"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_37"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_200_12"
                  position={[9.811, 2.487, 25.625]}
                  rotation={[0.005, -1.456, -1.245]}
                >
                  <mesh
                    name="Object_39"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_40"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_41"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="torch_flame_016_35"
                  position={[22.867, 6.869, 14.688]}
                  rotation={[0.428, 1.239, -0.781]}
                  scale={[2.316, 1.138, 2.37]}
                >
                  <mesh
                    name="Object_43"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials["torch_flame_2-material"]}
                  />
                </group>
                <group
                  name="torch_flame_015_36"
                  position={[22.982, 6.872, 14.059]}
                  rotation={[0.495, 1.226, -0.892]}
                  scale={[3.148, 1.359, 3.221]}
                >
                  <mesh
                    name="Object_45"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials["torch_flame-material"]}
                  />
                </group>
                <group
                  name="Cylinder_148_37"
                  position={[23.718, 6.938, 14.405]}
                  rotation={[2.307, 1.053, -2.681]}
                >
                  <mesh
                    name="Object_47"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_47.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_48"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_49"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_49.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_50"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_147_38"
                  position={[22.772, 6.253, 13.91]}
                  rotation={[2.069, -0.146, 2.623]}
                >
                  <mesh
                    name="Object_52"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_53"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_53.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_54"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_54.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_55"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_55.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_146_45"
                  position={[21.017, 4.693, 7.958]}
                  rotation={[2.919, 0, Math.PI]}
                  scale={1.427}
                >
                  <mesh
                    name="Object_57"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_145_46"
                  position={[21.507, 6.426, 10.458]}
                  rotation={[0.005, -1.022, 0]}
                  scale={[0.85, 0.933, 0.786]}
                >
                  <mesh
                    name="Object_59"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials["light_gradient_2-material"]}
                  />
                </group>
                <group
                  name="Cylinder_144_47"
                  position={[-0.503, 6.389, 10.485]}
                  rotation={[0.005, 0.985, 0]}
                  scale={[0.85, 0.933, 0.786]}
                >
                  <mesh
                    name="Object_61"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials["light_gradient_2-material"]}
                  />
                </group>
                <group
                  name="Cylinder_143_48"
                  position={[-0.105, 6.433, 9.035]}
                  rotation={[1.559, 1.569, -1.554]}
                  scale={[0.85, 0.933, 0.786]}
                >
                  <mesh
                    name="Object_63"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_63.geometry}
                    material={materials["light_gradient_2-material"]}
                  />
                </group>
                <group
                  name="Cube_045_50"
                  position={[13.955, 6.109, 24.262]}
                  rotation={[-0.112, -1.116, -0.111]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_65"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_65.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <group
                    name="Cylinder_140_49"
                    position={[0.572, 0.485, 0.454]}
                    rotation={[1.104, -1.275, 1.303]}
                    scale={[1.22, 4.578, 1.09]}
                  >
                    <mesh
                      name="Object_67"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_67.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="item_power_up_bottle_003_51"
                  position={[14.377, 5.988, 24.662]}
                  rotation={[-0.151, 0.454, -1.343]}
                  scale={0.405}
                >
                  <mesh
                    name="Object_69"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_69.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="item_power_up_bottle_004_52"
                  position={[-0.646, 3.375, -10.68]}
                  rotation={[1.132, 0.219, -1.426]}
                  scale={0.405}
                >
                  <mesh
                    name="Object_71"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_71.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="item_power_up_bottle_002_53"
                  position={[21.771, 2.994, -10.336]}
                  rotation={[-3.136, -1.398, -Math.PI]}
                  scale={0.405}
                >
                  <mesh
                    name="Object_73"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="item_power_up_bottle_001_54"
                  position={[-1.941, 5.813, 13.45]}
                  rotation={[-0.151, 0.454, -1.343]}
                  scale={0.405}
                >
                  <mesh
                    name="Object_75"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_75.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cube_193_55"
                  position={[-2.171, 5.908, -4.84]}
                  rotation={[0.005, 0.652, 0]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_77"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_77.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_192_56"
                  position={[-1.668, 5.936, -5.918]}
                  rotation={[-3.138, 1.025, -2.921]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_79"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_79.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_191_57"
                  position={[-2.513, 6.749, -10.662]}
                  rotation={[0.005, 0.964, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_81"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_81.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_190_58"
                  position={[-2.44, 6.589, -10.621]}
                  rotation={[0.005, -1.501, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_83"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_83.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_189_59"
                  position={[-2.171, 5.917, -6.589]}
                  rotation={[0.005, -0.683, 0]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_85"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_85.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_188_60"
                  position={[-1.745, 6.113, -10.187]}
                  rotation={[-2.276, -0.516, -2.315]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_87"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_87.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_187_61"
                  position={[-2.421, 6.46, -10.459]}
                  rotation={[-3.136, 0.79, -Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_89"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_89.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_186_62"
                  position={[-2.343, 6.24, -11.065]}
                  rotation={[-1.566, 0, 2.42]}
                >
                  <mesh
                    name="Object_91"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_91.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_92"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_92.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_93"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_93.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_184_63"
                  position={[-2.171, 5.932, -9.659]}
                  rotation={[0.005, 0.652, 0]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_95"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_95.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_031_64"
                  position={[-1.599, 5.963, -11.169]}
                  rotation={[-0.028, 0.869, -0.019]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_97"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_97.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_005_65"
                  position={[21.645, 1.515, 2.2]}
                  rotation={[2.51, 0.355, 2.249]}
                >
                  <mesh
                    name="Object_99"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_99.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_005_66"
                  position={[21.645, 1.515, 2.2]}
                  rotation={[2.51, 0.355, 2.336]}
                >
                  <mesh
                    name="Object_101"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_101.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_005_67"
                  position={[21.645, 1.515, 2.2]}
                  rotation={[2.51, 0.355, 2.162]}
                >
                  <mesh
                    name="Object_103"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_103.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_004_72"
                  position={[22.126, 1.876, 1.877]}
                  rotation={[-0.189, 0.686, 0.927]}
                >
                  <mesh
                    name="Object_105"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_105.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_004_73"
                  position={[22.126, 1.876, 1.877]}
                  rotation={[-0.189, 0.686, 1.014]}
                >
                  <mesh
                    name="Object_107"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_107.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_004_74"
                  position={[22.126, 1.876, 1.877]}
                  rotation={[-0.189, 0.686, 0.839]}
                >
                  <mesh
                    name="Object_109"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_109.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_003_79"
                  position={[-0.197, 4.01, 11.903]}
                  rotation={[-0.26, -1.447, -0.264]}
                >
                  <mesh
                    name="Object_111"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_111.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_003_80"
                  position={[11.081, -0.255, 10.834]}
                  rotation={[-0.3, -1.446, -0.216]}
                >
                  <mesh
                    name="Object_113"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_113.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_003_81"
                  position={[11.081, -0.255, 10.834]}
                  rotation={[-0.3, -1.446, -0.39]}
                >
                  <mesh
                    name="Object_115"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_115.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_006_82"
                  position={[-0.475, 3.849, -10.727]}
                  rotation={[-0.033, 0.535, 0.019]}
                >
                  <mesh
                    name="Object_117"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_117.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_006_83"
                  position={[-5.984, -0.372, -20.646]}
                  rotation={[-0.038, 0.534, 0.109]}
                >
                  <mesh
                    name="Object_119"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_119.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_006_84"
                  position={[-5.984, -0.372, -20.646]}
                  rotation={[-0.038, 0.534, -0.065]}
                >
                  <mesh
                    name="Object_121"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_121.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_002_85"
                  position={[-0.948, 4.76, -0.115]}
                  rotation={[0.632, -0.15, -1.002]}
                >
                  <mesh
                    name="Object_123"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_123.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_002_86"
                  position={[-0.948, 4.76, -0.115]}
                  rotation={[0.632, -0.15, -0.915]}
                >
                  <mesh
                    name="Object_125"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_125.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_002_87"
                  position={[-0.948, 4.76, -0.115]}
                  rotation={[0.632, -0.15, -1.089]}
                >
                  <mesh
                    name="Object_127"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_127.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="fly_body_001_92"
                  position={[-1.356, 5.121, 0.295]}
                  rotation={[-2.912, -0.878, -2.158]}
                >
                  <mesh
                    name="Object_129"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_129.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_l_001_93"
                  position={[-1.356, 5.121, 0.295]}
                  rotation={[-2.912, -0.878, -2.071]}
                >
                  <mesh
                    name="Object_131"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_131.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="wing_r_001_94"
                  position={[-1.356, 5.121, 0.295]}
                  rotation={[-2.912, -0.878, -2.245]}
                >
                  <mesh
                    name="Object_133"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_133.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_137_95"
                  position={[-1.685, 6.551, -12.877]}
                  rotation={[0.163, 0.617, -0.357]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_135"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_135.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_028_96"
                  position={[21.805, 8.051, 5.7]}
                  rotation={[-2.146, 0.662, 2.695]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_137"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_137.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_185_98"
                  position={[-0.584, 3.079, 11.449]}
                  rotation={[-2.942, 1.302, 2.948]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_139"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_139.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <group
                    name="Cylinder_135_97"
                    position={[0.572, 0.485, 0.454]}
                    rotation={[1.104, -1.275, 1.303]}
                    scale={[1.22, 4.578, 1.09]}
                  >
                    <mesh
                      name="Object_141"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_141.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_183_100"
                  position={[21.586, 2.862, -10.974]}
                  rotation={[-0.047, -0.141, -0.013]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_143"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_143.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <group
                    name="Cylinder_136_99"
                    position={[0.173, 0.212, 0.116]}
                    rotation={[-0.073, -0.623, 0.289]}
                    scale={[1.297, 4.56, 1.147]}
                  >
                    <mesh
                      name="Object_145"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_145.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_182_101"
                  position={[22.147, 8.399, 5.057]}
                  rotation={[0.005, 0.679, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_147"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_147.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="body_geo_003_102"
                  position={[-0.735, 1.733, -10.979]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_149"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_149.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_150"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_150.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_134_103"
                  position={[-0.76, 3.408, -11.21]}
                  rotation={[0.31, 0.18, 0.239]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_152"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_152.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_133_104"
                  position={[-0.761, 3.185, -10.888]}
                  rotation={[0.005, 0.887, 0]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_154"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_154.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_132_105"
                  position={[-0.756, 3.32, -11.083]}
                  rotation={[0.248, 1.148, 0.201]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_156"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_156.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_131_106"
                  position={[-0.761, 3.082, -10.994]}
                  rotation={[0.005, 0, 0]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_158"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_158.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cube_181_107"
                  position={[21.982, 3.096, -10.866]}
                  rotation={[1.396, -0.135, 0.934]}
                  scale={0.157}
                >
                  <mesh
                    name="Object_160"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_160.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_180_108"
                  position={[22.124, 3.072, -10.461]}
                  rotation={[1.944, -0.271, 1.426]}
                  scale={0.157}
                >
                  <mesh
                    name="Object_162"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_162.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_130_110"
                  position={[22.299, 2.842, -10.865]}
                  rotation={[0.005, 0, 0]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_164"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_164.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <group
                    name="Cylinder_129_109"
                    position={[0.075, 0.142, -0.304]}
                    rotation={[0.251, -0.136, -0.018]}
                  >
                    <mesh
                      name="Object_166"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_166.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_128_111"
                  position={[-1.233, 6.448, -12.556]}
                  rotation={[0.048, -0.145, -0.317]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_168"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_168.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_127_112"
                  position={[-1.247, 6.422, -12.557]}
                  rotation={[0.048, -0.145, -0.317]}
                  scale={0.36}
                >
                  <mesh
                    name="Object_170"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_170.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_126_113"
                  position={[7.58, 4.308, -13.366]}
                  rotation={[2.023, -0.466, -3.116]}
                  scale={0.071}
                >
                  <mesh
                    name="Object_172"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_172.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_173"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_173.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_174"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_174.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_179_114"
                  position={[-1.831, 6.862, -13.14]}
                  rotation={[1.397, 0.136, -0.345]}
                  scale={0.157}
                >
                  <mesh
                    name="Object_176"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_176.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_178_115"
                  position={[-1.39, 6.748, -13.216]}
                  rotation={[1.393, -0.417, 0.033]}
                  scale={0.157}
                >
                  <mesh
                    name="Object_178"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_178.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_176_117"
                  position={[-1.7, 6.294, -13.281]}
                  rotation={[3.031, 0.2, -2.847]}
                >
                  <mesh
                    name="Object_180"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_180.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_181"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_181.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_182"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_182.geometry}
                    material={materials["generic_wood-material"]}
                  />
                  <group name="Cube_177_116" scale={[1.315, 1, 1]}>
                    <mesh
                      name="Object_184"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_184.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_174_119"
                  position={[22.141, 2.595, -10.842]}
                  rotation={[0.005, -1.432, 0]}
                >
                  <mesh
                    name="Object_186"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_186.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_187"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_187.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_188"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_188.geometry}
                    material={materials["generic_wood-material"]}
                  />
                  <group name="Cube_175_118" scale={[1.315, 1, 1]}>
                    <mesh
                      name="Object_190"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_190.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_173_120"
                  position={[22.773, 6.685, -13.414]}
                  rotation={[-0.387, -0.741, -1.679]}
                >
                  <mesh
                    name="Object_192"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_192.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_193"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_193.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_194"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_194.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_172_121"
                  position={[23.001, 5.963, -6.162]}
                  rotation={[-1.697, -0.03, -2.845]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_196"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_196.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_197"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_197.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="barrel_1_021_122"
                  position={[22.961, 6.182, -10.16]}
                  rotation={[0.005, -0.94, 0]}
                >
                  <mesh
                    name="Object_199"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_199.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_020_123"
                  position={[22.602, 5.721, -10.676]}
                  rotation={[-1.566, 0, 0.056]}
                >
                  <mesh
                    name="Object_201"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_201.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_019_124"
                  position={[23.54, 5.729, -12.249]}
                  rotation={[-1.566, 0, 2.24]}
                >
                  <mesh
                    name="Object_203"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_203.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_171_125"
                  position={[23.867, 6.19, -10.744]}
                  rotation={[-1.459, 0.661, -1.708]}
                >
                  <mesh
                    name="Object_205"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_205.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_206"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_206.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_207"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_207.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_170_126"
                  position={[22.797, 6.066, -5.044]}
                  rotation={[2.617, 0.192, -2.88]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_209"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_209.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_169_127"
                  position={[22.68, 5.923, -4.492]}
                  rotation={[-3.101, 0.908, 3.069]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_211"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_211.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_168_128"
                  position={[23.5, 6.363, -4.924]}
                  rotation={[3.103, 0.028, 1.668]}
                >
                  <mesh
                    name="Object_213"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_213.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_214"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_214.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_215"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_215.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_125_129"
                  position={[17.66, 2.24, -14.191]}
                  rotation={[0.005, 0, 0]}
                  scale={[1.214, 1.124, 1.124]}
                >
                  <mesh
                    name="Object_217"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_217.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_124_130"
                  position={[22.86, 7.142, 4.763]}
                  rotation={[-3.136, 0, -Math.PI]}
                >
                  <mesh
                    name="Object_219"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_219.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="barrel_1_018_131"
                  position={[4.966, 5.54, 24.759]}
                  rotation={[-1.566, 0, 2.144]}
                >
                  <mesh
                    name="Object_221"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_221.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_167_132"
                  position={[10.782, 5.714, 24.005]}
                  rotation={[0.005, -0.897, 0]}
                  scale={0.17}
                >
                  <mesh
                    name="Object_223"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_223.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_166_133"
                  position={[11.082, 5.705, 24.011]}
                  rotation={[-3.108, -0.7, 3.115]}
                  scale={0.164}
                >
                  <mesh
                    name="Object_225"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_225.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_165_134"
                  position={[11.834, 5.847, 24.046]}
                  rotation={[0.841, -0.839, 0.839]}
                  scale={0.17}
                >
                  <mesh
                    name="Object_227"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_227.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_164_135"
                  position={[12.087, 5.709, 24.012]}
                  rotation={[-0.025, 0.781, -0.023]}
                  scale={0.163}
                >
                  <mesh
                    name="Object_229"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_229.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_123_136"
                  position={[21.946, 2.853, -6.071]}
                  rotation={[1.426, -1.236, 0.397]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_231"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_231.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_232"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_232.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_122_137"
                  position={[22.133, 2.964, -6.153]}
                  rotation={[0.605, -0.627, -0.594]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_234"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_234.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_235"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_235.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Plane_063_138"
                  position={[22.161, 2.805, -5.884]}
                  rotation={[1.261, 0.048, -0.097]}
                  scale={0.671}
                >
                  <mesh
                    name="Object_237"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_237.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_238"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_238.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_163_139"
                  position={[22.34, 2.56, -4.417]}
                  rotation={[-3.124, -0.202, -1.606]}
                >
                  <mesh
                    name="Object_240"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_240.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_241"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_241.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_242"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_242.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_024_140"
                  position={[21.67, 1.889, 18.302]}
                  rotation={[0.005, -0.639, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_244"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_244.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_022_141"
                  position={[21.505, 2.019, -3.342]}
                  rotation={[0.005, -0.559, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_246"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_246.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_021_142"
                  position={[21.532, 1.901, 13.777]}
                  rotation={[0.005, 0.278, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_248"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_248.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_017_143"
                  position={[17.934, 1.879, 25.324]}
                  rotation={[0.005, -0.016, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_250"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_250.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_015_144"
                  position={[21.833, 2.011, -7.605]}
                  rotation={[0.005, 1.143, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_252"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_252.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_014_145"
                  position={[19.607, 1.973, -12.703]}
                  rotation={[0.005, -0.062, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_254"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_254.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_013_146"
                  position={[21.257, 2.036, -12.581]}
                  rotation={[0.005, 1.143, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_256"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_256.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_012_147"
                  position={[5.629, 1.975, -12.687]}
                  rotation={[0.005, 0.713, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_258"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_258.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_011_148"
                  position={[2.699, 2.036, -12.581]}
                  rotation={[0.005, 1.143, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_260"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_260.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_010_149"
                  position={[-0.469, 1.974, -12.57]}
                  rotation={[0.005, 0.713, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_262"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_262.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_009_150"
                  position={[-0.405, 2.033, -11.925]}
                  rotation={[-3.136, 0.99, Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_264"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_264.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_008_151"
                  position={[-0.335, 1.991, -3.723]}
                  rotation={[0.005, 0.51, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_266"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_266.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_007_152"
                  position={[-0.531, 1.825, -6.937]}
                  rotation={[-3.136, 0.983, Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_268"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_268.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_006_153"
                  position={[-0.906, 1.886, 18.825]}
                  rotation={[-3.136, 0.858, -Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_270"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_270.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_005_154"
                  position={[-0.307, 2.001, 12.072]}
                  rotation={[0.005, 0.516, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_272"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_272.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="Cylinder_121_155"
                  position={[-0.789, 2.541, 12.551]}
                  rotation={[1.446, 0.304, -1.367]}
                >
                  <mesh
                    name="Object_274"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_274.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_275"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_275.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_276"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_276.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_004_156"
                  position={[-0.418, 1.894, 15.223]}
                  rotation={[-3.136, 0.858, -Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_278"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_278.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_003_157"
                  position={[-0.077, 1.92, 10.066]}
                  rotation={[0.005, 0.844, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_280"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_280.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_002_158"
                  position={[-0.562, 1.905, 13.077]}
                  rotation={[-3.136, 1.13, -Math.PI]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_282"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_282.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_001_159"
                  position={[0.664, 1.842, 25.433]}
                  rotation={[0.005, 0.759, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_284"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_284.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_023_160"
                  position={[-0.819, 1.733, 26.408]}
                  rotation={[0.005, 0.86, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_286"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_286.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_020_161"
                  position={[19.737, 1.842, 25.433]}
                  rotation={[0.005, 0.759, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_288"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_288.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_019_162"
                  position={[4.838, 1.842, 25.324]}
                  rotation={[0.005, -0.016, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_290"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_290.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_018_163"
                  position={[2.99, 1.842, 25.456]}
                  rotation={[0.005, 1.3, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_292"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_292.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="canyon_bottom_props_016_164"
                  position={[16.014, 1.841, 25.485]}
                  rotation={[0.005, 0.759, 0]}
                  scale={1.579}
                >
                  <mesh
                    name="Object_294"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_294.geometry}
                    material={materials["grass_5-material"]}
                  />
                </group>
                <group
                  name="Cube_162_165"
                  position={[18.754, 5.806, 24.362]}
                  rotation={[-1.536, -0.131, -1.27]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_296"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_296.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_297"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_297.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_161_166"
                  position={[2.657, 5.806, 24.362]}
                  rotation={[-1.431, -0.001, 0.068]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_299"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_299.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_300"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_300.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="barrel_1_017_167"
                  position={[17.431, 6.005, 24.403]}
                  rotation={[0.005, 0.63, 0]}
                >
                  <mesh
                    name="Object_302"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_302.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_016_168"
                  position={[16.917, 5.54, 24.759]}
                  rotation={[-1.566, 0, 1.627]}
                >
                  <mesh
                    name="Object_304"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_304.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_015_169"
                  position={[15.344, 5.545, 23.822]}
                  rotation={[-1.566, 0, -2.472]}
                >
                  <mesh
                    name="Object_306"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_306.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_160_170"
                  position={[14.172, 6.013, 23.897]}
                  rotation={[-2.23, 0.084, -0.071]}
                >
                  <mesh
                    name="Object_308"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_308.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_309"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_309.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_310"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_310.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_159_171"
                  position={[19.873, 5.915, 24.567]}
                  rotation={[1.944, -1.01, 2.148]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_312"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_312.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_158_172"
                  position={[20.425, 5.774, 24.683]}
                  rotation={[-3.109, -0.662, 3.114]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_314"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_314.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_157_173"
                  position={[19.991, 6.216, 23.865]}
                  rotation={[2.149, -1.519, 0.67]}
                >
                  <mesh
                    name="Object_316"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_316.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_317"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_317.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_318"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_318.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_120_174"
                  position={[1.762, 6.228, 24.355]}
                  rotation={[-0.063, -0.633, -0.944]}
                >
                  <mesh
                    name="Object_320"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_320.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_321"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_321.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_322"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_322.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_119_175"
                  position={[0.812, 6.317, 24.696]}
                  rotation={[1.186, 1.015, -1.196]}
                >
                  <mesh
                    name="Object_324"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_324.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_325"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_325.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_326"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_326.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_156_176"
                  position={[1.085, 5.862, 24.51]}
                  rotation={[-1.535, -1.051, -1.732]}
                >
                  <mesh
                    name="Object_328"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_328.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_329"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_329.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_330"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_330.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="barrel_1_014_177"
                  position={[5.179, 6.376, 23.972]}
                  rotation={[0.694, 0.203, 0.271]}
                >
                  <mesh
                    name="Object_332"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_332.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_155_178"
                  position={[5.539, 5.928, 24.452]}
                  rotation={[2.398, 0.754, -2.425]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_334"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_334.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_154_179"
                  position={[5.255, 5.787, 24.55]}
                  rotation={[-3.102, -0.901, 3.125]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_336"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_336.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_153_180"
                  position={[-0.478, 2.087, -4.001]}
                  rotation={[-3.13, 0.195, -3.105]}
                  scale={0.261}
                >
                  <mesh
                    name="Object_338"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_338.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_152_181"
                  position={[-0.434, 2.103, -4.652]}
                  rotation={[-2.852, -1.493, -2.902]}
                  scale={0.408}
                >
                  <mesh
                    name="Object_340"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_340.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_151_182"
                  position={[-0.335, 2.93, -5.877]}
                  rotation={[-0.454, 1.298, 0.429]}
                >
                  <mesh
                    name="Object_342"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_342.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_343"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_343.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_344"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_344.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_150_183"
                  position={[-0.976, 2.564, -4.744]}
                  rotation={[0.049, 0.05, -1.477]}
                >
                  <mesh
                    name="Object_346"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_346.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_347"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_347.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_348"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_348.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_149_184"
                  position={[22.783, 8.178, 4.779]}
                  rotation={[-1.566, 0, 0]}
                >
                  <mesh
                    name="Object_350"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_350.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_351"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_351.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_352"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_352.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_148_185"
                  position={[20.567, 8.139, 6.651]}
                  rotation={[-2.78, 0.59, 2.337]}
                  scale={0.267}
                >
                  <mesh
                    name="Object_354"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_354.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_147_186"
                  position={[20.801, 7.931, 6.955]}
                  rotation={[-0.014, 0.746, 0.091]}
                  scale={0.329}
                >
                  <mesh
                    name="Object_356"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_356.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_118_187"
                  position={[21.952, 8.392, 6.386]}
                  rotation={[-3.136, 0, 0]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_358"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_358.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_359"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_359.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Plane_061_188"
                  position={[22.806, 7.854, 6.389]}
                  rotation={[-3.136, -1.043, Math.PI]}
                >
                  <mesh
                    name="Object_361"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_361.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_362"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_362.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_363"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_363.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_117_189"
                  position={[20.845, 7.936, 6.281]}
                  rotation={[-2.561, -0.658, -1.51]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_365"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_365.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_366"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_366.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_146_190"
                  position={[21.64, 8.04, 4.993]}
                  rotation={[0.527, -0.102, 0.208]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_368"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_368.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_145_191"
                  position={[22.767, 7.895, 5.945]}
                  rotation={[-0.026, -0.803, -0.067]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_370"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_370.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_116_192"
                  position={[22.019, 8.236, 3.32]}
                  rotation={[1.189, -0.815, 0.377]}
                >
                  <mesh
                    name="Object_372"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_372.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_373"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_373.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_374"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_374.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_144_193"
                  position={[20.645, 8.627, 2.784]}
                  rotation={[-0.935, 0.131, 0.518]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_376"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_376.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_377"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_377.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_143_194"
                  position={[21.035, 8.005, 3.037]}
                  rotation={[-2.319, -0.786, -2.708]}
                >
                  <mesh
                    name="Object_379"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_379.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_380"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_380.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_381"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_381.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="barrel_1_013_195"
                  position={[22.614, 7.744, 2.205]}
                  rotation={[-1.566, 0, 2.427]}
                >
                  <mesh
                    name="Object_383"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_383.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_012_196"
                  position={[25.022, 8.56, 2.787]}
                  rotation={[1.939, -0.859, 2.403]}
                >
                  <mesh
                    name="Object_385"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_385.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_011_197"
                  position={[23.49, 7.738, 3.244]}
                  rotation={[-1.566, 0, 1.724]}
                >
                  <mesh
                    name="Object_387"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_387.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_142_198"
                  position={[24.425, 8.114, 2.861]}
                  rotation={[0.529, 0.127, 0.077]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_389"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_389.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_141_199"
                  position={[24.48, 7.976, 2.564]}
                  rotation={[-3.079, 1.185, 3.044]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_391"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_391.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_140_200"
                  position={[23.5, 8.156, 3.295]}
                  rotation={[-0.393, 0.726, -0.328]}
                  scale={0.267}
                >
                  <mesh
                    name="Object_393"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_393.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_139_201"
                  position={[23.158, 7.949, 3.468]}
                  rotation={[-0.021, -1.009, 0.056]}
                  scale={0.329}
                >
                  <mesh
                    name="Object_395"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_395.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_060_202"
                  position={[21.17, 6.377, 4.594]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={1.018}
                >
                  <mesh
                    name="Object_397"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_397.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_059_203"
                  position={[21.022, 6.639, 8.334]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={0.913}
                >
                  <mesh
                    name="Object_399"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_399.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_058_204"
                  position={[7.267, 3.891, -13.282]}
                  rotation={[1.077, -0.358, 0.037]}
                  scale={0.671}
                >
                  <mesh
                    name="Object_401"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_401.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_402"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_402.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_057_205"
                  position={[21.958, 7.777, 26.521]}
                  rotation={[1.576, 0, 0]}
                >
                  <mesh
                    name="Object_404"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_404.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="barrel_1_010_206"
                  position={[5.93, 3.443, -13.658]}
                  rotation={[0.181, -0.332, -0.461]}
                >
                  <mesh
                    name="Object_406"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_406.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_009_207"
                  position={[22.719, 6.425, 11.982]}
                  rotation={[0.694, 0.203, 0.271]}
                >
                  <mesh
                    name="Object_408"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_408.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_008_208"
                  position={[23.974, 5.584, 13.205]}
                  rotation={[-1.566, 0, -2.472]}
                >
                  <mesh
                    name="Object_410"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_410.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_138_209"
                  position={[21.897, 2.234, 13.179]}
                  rotation={[-2.552, 1.362, 2.437]}
                  scale={0.267}
                >
                  <mesh
                    name="Object_412"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_412.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_137_210"
                  position={[21.907, 1.958, 12.9]}
                  rotation={[-0.008, 0.215, 0.077]}
                  scale={0.329}
                >
                  <mesh
                    name="Object_414"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_414.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_136_211"
                  position={[22.708, 5.975, 19.421]}
                  rotation={[0.527, -0.102, 0.208]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_416"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_416.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_135_212"
                  position={[22.767, 5.838, 18.859]}
                  rotation={[-0.026, -0.803, -0.067]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_418"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_418.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_134_213"
                  position={[23.201, 6.176, 18.464]}
                  rotation={[3.085, -0.773, 1.624]}
                >
                  <mesh
                    name="Object_420"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_420.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_421"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_421.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_422"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_422.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_115_214"
                  position={[22.672, 6.703, 15.019]}
                  rotation={[0.285, -0.513, 0.598]}
                >
                  <mesh
                    name="Object_424"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_424.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_425"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_425.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_426"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_426.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_427"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_427.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_114_215"
                  position={[22.79, 6.36, 14.887]}
                  rotation={[1.966, -1.015, 1.946]}
                >
                  <mesh
                    name="Object_429"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_429.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_430"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_430.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_431"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_431.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_133_216"
                  position={[22.517, 5.902, 15.068]}
                  rotation={[-1.597, 1.051, 1.41]}
                >
                  <mesh
                    name="Object_433"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_433.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_434"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_434.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_435"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_435.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_132_217"
                  position={[23.109, 5.887, 11.719]}
                  rotation={[3.131, -1.028, -3.085]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_437"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_437.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_131_218"
                  position={[23.08, 5.977, 12.462]}
                  rotation={[2.398, 0.754, -2.425]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_439"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_439.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_130_219"
                  position={[22.795, 5.836, 12.559]}
                  rotation={[-3.102, -0.901, 3.125]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_441"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_441.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_129_220"
                  position={[22.866, 6.422, 11.468]}
                  rotation={[0.005, -0.221, 0]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_443"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_443.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_444"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_444.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_128_221"
                  position={[19.566, 4.419, -13.028]}
                  rotation={[-3.136, -0.523, Math.PI]}
                  scale={0.261}
                >
                  <mesh
                    name="Object_446"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_446.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_127_222"
                  position={[8.232, 2.292, -12.927]}
                  rotation={[-0.143, 0.353, -0.122]}
                  scale={0.183}
                >
                  <mesh
                    name="Object_448"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_448.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="ground_013_223"
                  position={[0, 2.036, -12.627]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_450"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_450.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_126_224"
                  position={[0.692, 8.486, 6.415]}
                  rotation={[-0.638, 0.27, -0.536]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_452"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_452.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_453"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_453.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_125_225"
                  position={[0.373, 8.134, 6.506]}
                  rotation={[-0.047, 0.672, -0.059]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_455"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_455.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_124_226"
                  position={[0.334, 8.303, 7.012]}
                  rotation={[2.033, 0.985, -1.954]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_457"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_457.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_123_227"
                  position={[-0.167, 8.165, 6.941]}
                  rotation={[-0.05, 1.169, 0.007]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_459"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_459.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_122_228"
                  position={[-0.507, 7.919, 7.39]}
                  rotation={[0.013, 0.274, 0.068]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_461"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_461.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_121_229"
                  position={[-0.818, 8.01, 7.905]}
                  rotation={[0.779, 0.782, -0.453]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_463"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_463.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_120_230"
                  position={[-1.28, 7.871, 7.581]}
                  rotation={[-0.017, 0.26, -0.039]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_465"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_465.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="torch_flame_014_231"
                  position={[-0.056, 9.585, 4.278]}
                  rotation={[2.964, 0.746, 2.888]}
                  scale={[3.174, 1.56, 3.248]}
                >
                  <mesh
                    name="Object_467"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_467.geometry}
                    material={materials["torch_flame_2-material"]}
                  />
                </group>
                <group
                  name="Cylinder_113_233"
                  position={[12.451, 3.03, 25.592]}
                  rotation={[0.002, 0.066, -0.028]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_469"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_469.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_470"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_470.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_471"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_471.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_012_232"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_473"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_473.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_112_235"
                  position={[8.591, 3.146, 25.553]}
                  rotation={[0.002, 0.066, 0.166]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_475"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_475.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_476"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_476.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_477"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_477.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_011_234"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_479"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_479.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_111_237"
                  position={[23.832, 8.721, 1.233]}
                  rotation={[0.005, 0.614, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_481"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_481.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_482"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_482.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_483"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_483.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_010_236"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[0.232, 1.38, -0.438]}
                    scale={[7.196, 4.843, 7.285]}
                  >
                    <mesh
                      name="Object_485"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_485.geometry}
                      material={materials["torch_flame-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_110_239"
                  position={[21.974, 8.695, 1.369]}
                  rotation={[0.005, -0.586, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_487"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_487.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_488"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_488.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_489"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_489.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_009_238"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_491"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_491.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_109_241"
                  position={[22.094, 3.21, -7.61]}
                  rotation={[-3.112, -1.459, -2.951]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_493"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_493.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_494"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_494.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_495"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_495.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_008_240"
                    position={[0.474, 2.727, 2.938]}
                    rotation={[-3.108, -0.184, 3.07]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_497"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_497.geometry}
                      material={materials["torch_flame-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_119_242"
                  position={[-2.049, 5.832, 16.166]}
                  rotation={[-3.113, -0.436, 3.107]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_499"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_499.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_108_244"
                  position={[-1.104, 3.21, -7.61]}
                  rotation={[-0.02, 1.459, 0.191]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_501"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_501.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_502"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_502.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_503"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_503.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_007_243"
                    position={[0.007, 2.806, 2.752]}
                    rotation={[0.18, 0.075, -0.417]}
                    scale={[7.727, 5.201, 7.824]}
                  >
                    <mesh
                      name="Object_505"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_505.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_107_246"
                  position={[12.687, 3.614, -13.37]}
                  rotation={[0.002, 0.066, -0.028]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_507"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_507.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_508"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_508.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_509"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_509.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_006_245"
                    position={[0.401, 2.737, 2.928]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_511"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_511.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_106_248"
                  position={[8.287, 3.614, -13.37]}
                  rotation={[0.002, 0.066, 0.166]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_513"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_513.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_514"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_514.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_515"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_515.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_005_247"
                    position={[0.401, 2.74, 2.928]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_517"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_517.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_105_250"
                  position={[-0.894, 6.68, 10.984]}
                  rotation={[0.005, 0.46, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_519"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_519.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_520"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_520.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_521"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_521.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_004_249"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[8.488, 5.713, 8.593]}
                  >
                    <mesh
                      name="Object_523"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_523.geometry}
                      material={materials["torch_flame-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_104_252"
                  position={[-2.758, 6.655, 10.944]}
                  rotation={[0.005, -0.586, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_525"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_525.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_526"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_526.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_527"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_527.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_002_251"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.093, 0.462, 2.953]}
                    scale={[8.26, 5.56, 8.363]}
                  >
                    <mesh
                      name="Object_529"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_529.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_092_253"
                  position={[23.751, 6.68, 10.984]}
                  rotation={[0.005, 0.46, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_531"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_531.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_532"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_532.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_533"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_533.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cylinder_172_255"
                  position={[21.887, 6.655, 10.944]}
                  rotation={[0.005, -0.586, 0]}
                  scale={0.186}
                >
                  <mesh
                    name="Object_535"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_535.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_536"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_536.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_537"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_537.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <group
                    name="torch_flame_003_254"
                    position={[0.415, 2.738, 2.705]}
                    rotation={[3.017, 1.213, 3.048]}
                    scale={[7.727, 5.201, 7.823]}
                  >
                    <mesh
                      name="Object_539"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_539.geometry}
                      material={materials["torch_flame_2-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cube_118_256"
                  position={[-1.973, 5.94, 19.568]}
                  rotation={[0.753, -0.754, 0.716]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_541"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_541.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_117_257"
                  position={[-1.532, 5.802, 19.214]}
                  rotation={[-2.397, -1.539, -2.447]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_543"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_543.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_064_258"
                  position={[-1.756, 5.82, 14.322]}
                  rotation={[-0.663, -0.802, 0.739]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_545"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_545.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_546"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_546.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_116_259"
                  position={[-1.874, 5.902, 15.132]}
                  rotation={[-1.803, -0.691, 1.467]}
                >
                  <mesh
                    name="Object_548"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_548.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_549"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_549.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_550"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_550.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_115_260"
                  position={[-0.62, 2.887, -9.503]}
                  rotation={[0.584, 1.191, -0.63]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_552"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_552.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_553"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_553.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_114_261"
                  position={[-0.798, 2.664, -9.538]}
                  rotation={[3.104, 0.129, 1.725]}
                >
                  <mesh
                    name="Object_555"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_555.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_556"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_556.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_557"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_557.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_113_262"
                  position={[20.665, 5.384, -13.155]}
                  rotation={[2.879, -1.256, 2.905]}
                  scale={0.261}
                >
                  <mesh
                    name="Object_559"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_559.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_112_263"
                  position={[20.296, 5.099, -13.283]}
                  rotation={[-0.457, 1.522, 0.417]}
                  scale={0.408}
                >
                  <mesh
                    name="Object_561"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_561.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="barrel_1_007_264"
                  position={[20.358, 5.598, -14.021]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_563"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_563.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_006_265"
                  position={[22.28, 5.741, -13.713]}
                  rotation={[-1.566, 0, -Math.PI]}
                >
                  <mesh
                    name="Object_565"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_565.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_005_266"
                  position={[9.307, 3.044, -14.317]}
                  rotation={[1.576, 0, -0.509]}
                >
                  <mesh
                    name="Object_567"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_567.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_004_267"
                  position={[8.377, 2.068, -14.903]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_569"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_569.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_003_268"
                  position={[11.763, 2.068, -14.903]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_571"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_571.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_002_269"
                  position={[2.472, 4.114, -13.721]}
                  rotation={[-1.566, 0, -Math.PI]}
                >
                  <mesh
                    name="Object_573"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_573.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_001_270"
                  position={[0.675, 5.177, -13.516]}
                  rotation={[-0.09, -0.14, -0.722]}
                >
                  <mesh
                    name="Object_575"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_575.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Plane_055_271"
                  position={[18.351, 5.594, -14.063]}
                  rotation={[1.576, 0, 0]}
                  scale={0.759}
                >
                  <mesh
                    name="Object_577"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_577.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_054_272"
                  position={[15.804, 5.512, -14.193]}
                  rotation={[1.576, 0, 0]}
                  scale={0.932}
                >
                  <mesh
                    name="Object_579"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_579.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_053_273"
                  position={[3.943, 5.398, -14.194]}
                  rotation={[1.576, 0, 0]}
                  scale={0.947}
                >
                  <mesh
                    name="Object_581"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_581.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_052_274"
                  position={[10.487, 5.722, -12.886]}
                  rotation={[1.576, 0, 0]}
                  scale={0.759}
                >
                  <mesh
                    name="Object_583"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_583.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_051_275"
                  position={[-1.071, 4.722, 12.326]}
                  rotation={[1.576, 0, -Math.PI / 2]}
                  scale={0.759}
                >
                  <mesh
                    name="Object_585"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_585.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_050_276"
                  position={[22.087, 4.394, 20.021]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={1.308}
                >
                  <mesh
                    name="Object_587"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_587.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_049_277"
                  position={[22.087, 4.222, 12.323]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={1.147}
                >
                  <mesh
                    name="Object_589"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_589.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_048_278"
                  position={[20.026, 4.585, 25.424]}
                  rotation={[1.465, 0, 0]}
                  scale={[0.681, 0.68, 0.68]}
                >
                  <mesh
                    name="Object_591"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_591.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_047_279"
                  position={[16.64, 4.34, 25.466]}
                  rotation={[1.263, 0, 0]}
                >
                  <mesh
                    name="Object_593"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_593.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_046_280"
                  position={[2.754, 4.483, 25.42]}
                  rotation={[1.334, 0, 0]}
                  scale={1.204}
                >
                  <mesh
                    name="Object_595"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_595.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_004_281"
                  position={[13.279, 8.193, -12.643]}
                  rotation={[1.577, -0.077, -0.013]}
                  scale={1.091}
                >
                  <mesh
                    name="Object_597"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_597.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_598"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_598.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_044_282"
                  position={[19.953, 5.268, 2.82]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_600"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_600.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_601"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_601.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_043_283"
                  position={[19.953, 5.248, 6.639]}
                  rotation={[1.576, 0, Math.PI / 2]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_603"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_603.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_604"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_604.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_058_284"
                  position={[19.994, 3.186, -12.779]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.37}
                >
                  <mesh
                    name="Object_606"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_606.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_055_285"
                  position={[21.17, 3.186, -12.779]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.37}
                >
                  <mesh
                    name="Object_608"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_608.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_008_286"
                  position={[-0.187, 3.186, -12.779]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.37}
                >
                  <mesh
                    name="Object_610"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_610.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_057_287"
                  position={[1.025, 3.186, -12.779]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.37}
                >
                  <mesh
                    name="Object_612"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_612.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_063_288"
                  position={[22.86, 7.759, 4.766]}
                  rotation={[-3.136, 0, -Math.PI]}
                >
                  <mesh
                    name="Object_614"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_614.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_615"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_615.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_111_289"
                  position={[8.227, 2.131, -12.829]}
                  rotation={[-3.097, 1.296, 3.016]}
                  scale={0.249}
                >
                  <mesh
                    name="Object_617"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_617.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_110_290"
                  position={[14.028, 2.279, -12.583]}
                  rotation={[2.033, 0.985, -1.954]}
                  scale={0.261}
                >
                  <mesh
                    name="Object_619"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_619.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_109_291"
                  position={[13.627, 2.148, -12.766]}
                  rotation={[-0.05, 1.169, 0.007]}
                  scale={0.408}
                >
                  <mesh
                    name="Object_621"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_621.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_108_292"
                  position={[-0.335, 2.818, 16.024]}
                  rotation={[-0.454, 1.298, 0.429]}
                >
                  <mesh
                    name="Object_623"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_623.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_624"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_624.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_625"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_625.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="body_geo_002_293"
                  position={[-0.593, 1.629, 11.432]}
                  rotation={[0.005, 1.17, 0]}
                >
                  <mesh
                    name="Object_627"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_627.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_628"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_628.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="body_geo_001_294"
                  position={[3.381, 3.406, -13.205]}
                  rotation={[0.021, 0.004, 0.864]}
                >
                  <mesh
                    name="Object_630"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_630.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                  <mesh
                    name="Object_631"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_631.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="body_geo_295"
                  position={[-0.735, 1.733, -10.979]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_633"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_633.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_634"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_634.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_102_296"
                  position={[20.966, 6.264, 24.448]}
                  rotation={[-3.138, 0.03, 1.634]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_636"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_636.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_101_297"
                  position={[0.039, 6.264, 24.448]}
                  rotation={[0.005, 0.026, -1.516]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_638"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_638.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_105_298"
                  position={[-1.917, 6.244, 18.391]}
                  rotation={[0.063, -0.714, -1.436]}
                >
                  <mesh
                    name="Object_640"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_640.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_641"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_641.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_642"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_642.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_104_299"
                  position={[-2.673, 5.879, 13.213]}
                  rotation={[-0.047, 0.672, -0.059]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_644"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_644.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_103_300"
                  position={[-2.712, 6.049, 13.719]}
                  rotation={[2.033, 0.985, -1.954]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_646"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_646.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_102_301"
                  position={[-3.212, 5.911, 13.648]}
                  rotation={[-0.05, 1.169, 0.007]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_648"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_648.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_042_302"
                  position={[21.044, 2.947, 4.775]}
                  rotation={[1.576, 0, Math.PI / 2]}
                >
                  <mesh
                    name="Object_650"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_650.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_651"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_651.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_101_303"
                  position={[22.355, 2.947, 4.775]}
                  rotation={[1.565, -1.568, 1.56]}
                >
                  <mesh
                    name="Object_653"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_653.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_100_304"
                  position={[22.871, 16.626, -16.879]}
                  rotation={[-3.019, -1.295, -3.015]}
                  scale={0.831}
                >
                  <mesh
                    name="Object_655"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_655.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cube_100_305"
                  position={[0.647, 5.651, -13.763]}
                  rotation={[-1.509, -0.941, -2.685]}
                >
                  <mesh
                    name="Object_657"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_657.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_658"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_658.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_659"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_659.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_099_306"
                  position={[-0.845, 2.464, 14.723]}
                  rotation={[0.05, -0.156, -1.468]}
                >
                  <mesh
                    name="Object_661"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_661.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_662"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_662.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_663"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_663.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_087_307"
                  position={[-2.62, 8.441, 7.032]}
                  rotation={[-0.005, -0.185, -0.248]}
                  scale={0.266}
                >
                  <mesh
                    name="Object_665"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_665.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_086_308"
                  position={[-2.086, 8.444, 7.15]}
                  rotation={[0.005, 0, 0]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_667"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_667.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_085_309"
                  position={[-1.566, 5.882, 12.814]}
                  rotation={[2.462, -1.558, 2.527]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_669"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_669.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_084_310"
                  position={[-1.973, 5.977, 12.372]}
                  rotation={[0.753, -0.754, 0.716]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_671"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_671.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_083_311"
                  position={[-1.532, 5.839, 12.018]}
                  rotation={[-2.397, -1.539, -2.447]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_673"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_673.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_082_312"
                  position={[-1.128, 7.903, 9.418]}
                  rotation={[-3.098, -0.97, 3.129]}
                  scale={0.266}
                >
                  <mesh
                    name="Object_675"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_675.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_081_313"
                  position={[-2.713, 7.952, 9.525]}
                  rotation={[0.114, 0.352, 0.073]}
                  scale={0.346}
                >
                  <mesh
                    name="Object_677"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_677.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_080_314"
                  position={[-1.807, 8.16, 8.996]}
                  rotation={[0.815, 0.817, -0.504]}
                  scale={0.382}
                >
                  <mesh
                    name="Object_679"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_679.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_079_315"
                  position={[-2.285, 8.021, 8.695]}
                  rotation={[-0.018, 0.31, -0.037]}
                  scale={0.427}
                >
                  <mesh
                    name="Object_681"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_681.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_091_316"
                  position={[23.913, 6.017, 13.052]}
                  rotation={[-2.831, 0.276, 2.455]}
                  scale={0.267}
                >
                  <mesh
                    name="Object_683"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_683.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_090_317"
                  position={[24.234, 5.81, 13.263]}
                  rotation={[-0.024, 1.077, 0.104]}
                  scale={0.329}
                >
                  <mesh
                    name="Object_685"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_685.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_089_318"
                  position={[21.615, 2.178, 11.202]}
                  rotation={[2.616, -0.203, -3.11]}
                  scale={0.333}
                >
                  <mesh
                    name="Object_687"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_687.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_088_319"
                  position={[21.649, 2.061, 11.264]}
                  rotation={[-3.107, 0.45, 3.12]}
                  scale={0.361}
                >
                  <mesh
                    name="Object_689"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_689.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_098_320"
                  position={[9.183, 2.969, -12.876]}
                  rotation={[0.005, -0.234, 0]}
                  scale={0.728}
                >
                  <mesh
                    name="Object_691"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_691.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_692"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_692.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_097_321"
                  position={[21.472, 2.809, 17.671]}
                  rotation={[-0.534, -1.336, -0.542]}
                >
                  <mesh
                    name="Object_694"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_694.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_695"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_695.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_696"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_696.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_096_322"
                  position={[13.588, 2.882, -12.816]}
                  rotation={[-0.282, 0.111, -1.373]}
                >
                  <mesh
                    name="Object_698"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_698.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_699"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_699.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_700"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_700.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_095_323"
                  position={[6.064, 2.965, -12.815]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_702"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_702.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_703"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_703.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_704"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_704.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_099_324"
                  position={[4.39, 3.472, -13.57]}
                  rotation={[2.512, 1.175, -1.518]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_706"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_706.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_707"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_707.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_098_325"
                  position={[4.246, 3.219, -13.503]}
                  rotation={[-1.709, 0.085, 3.107]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_709"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_709.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_710"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_710.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_097_326"
                  position={[21.53, 2.582, -8.255]}
                  rotation={[1.254, -0.21, 1.036]}
                >
                  <mesh
                    name="Object_712"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_712.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_713"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_713.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_714"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_714.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_096_327"
                  position={[21.848, 3.22, -9.307]}
                  rotation={[-3.136, 0.003, -Math.PI]}
                >
                  <mesh
                    name="Object_716"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_716.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_717"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_717.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_718"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_718.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_095_328"
                  position={[21.81, 2.868, -9.463]}
                  rotation={[-3.136, -1.176, -Math.PI]}
                >
                  <mesh
                    name="Object_720"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_720.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_721"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_721.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_722"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_722.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_094_329"
                  position={[21.948, 2.563, -9.311]}
                  rotation={[0.005, -1.513, 0]}
                >
                  <mesh
                    name="Object_724"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_724.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_725"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_725.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_726"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_726.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_093_330"
                  position={[5.417, 2.584, -13.665]}
                  rotation={[1.061, 1.166, 0]}
                >
                  <mesh
                    name="Object_728"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_728.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_729"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_729.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_730"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_730.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_003_331"
                  position={[21.785, 2.223, -9.379]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_732"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_732.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_733"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_733.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_734"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_734.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Plane_037_332"
                  position={[3.662, 2.539, -13.332]}
                  rotation={[0.92, 0.793, 0.278]}
                >
                  <mesh
                    name="Object_736"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_736.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_737"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_737.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_738"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_738.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_094_333"
                  position={[23.136, 2.893, 15.416]}
                  rotation={[1.565, -1.568, 1.56]}
                >
                  <mesh
                    name="Object_740"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_740.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_093_334"
                  position={[23.136, 2.998, -5.032]}
                  rotation={[1.565, -1.568, 1.56]}
                >
                  <mesh
                    name="Object_742"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_742.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_092_335"
                  position={[23.136, 3.023, -10.101]}
                  rotation={[1.565, -1.568, 1.56]}
                >
                  <mesh
                    name="Object_744"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_744.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_091_336"
                  position={[21.677, 2.945, 12.032]}
                  rotation={[1.246, -0.412, 2.906]}
                  scale={0.071}
                >
                  <mesh
                    name="Object_746"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_746.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_747"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_747.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_748"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_748.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cylinder_090_337"
                  position={[21.254, 2.073, 13.14]}
                  rotation={[-2.503, -0.621, -1.515]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_750"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_750.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_751"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_751.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_078_338"
                  position={[21.953, 2.1, 12.078]}
                  rotation={[-1.433, -1.016, -1.675]}
                >
                  <mesh
                    name="Object_753"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_753.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_754"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_754.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_755"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_755.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_089_339"
                  position={[22.933, 3.859, 11.507]}
                  rotation={[2.099, -0.46, 0.278]}
                >
                  <mesh
                    name="Object_757"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_757.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_758"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_758.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_088_340"
                  position={[14.25, 2.294, -13.583]}
                  rotation={[1.502, 0.342, -1.546]}
                >
                  <mesh
                    name="Object_760"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_760.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_761"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_761.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_087_341"
                  position={[13.102, 7.413, -13.556]}
                  rotation={[1.158, 1.4, -0.864]}
                >
                  <mesh
                    name="Object_763"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_763.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_086_342"
                  position={[22.321, 4.42, -7.404]}
                  rotation={[1.975, -1.397, 1.965]}
                >
                  <mesh
                    name="Object_765"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_765.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_766"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_766.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_085_343"
                  position={[22.339, 4.37, 16.941]}
                  rotation={[-3.14, -0.019, 2.952]}
                >
                  <mesh
                    name="Object_768"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_768.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_077_344"
                  position={[23.578, -6.311, -14.834]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_770"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_770.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="tree_left_024_345"
                  position={[20.12, 4.481, 32.093]}
                  rotation={[-3.136, -0.624, Math.PI]}
                >
                  <mesh
                    name="Object_772"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_772.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_773"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_773.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_774"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_774.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_023_346"
                  position={[28.674, 4.484, 31.388]}
                  rotation={[-3.136, -0.063, Math.PI]}
                >
                  <mesh
                    name="Object_776"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_776.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_777"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_777.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_778"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_778.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_022_347"
                  position={[29.344, 4.733, -17.247]}
                  rotation={[0.005, -0.898, 0]}
                >
                  <mesh
                    name="Object_780"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_780.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_781"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_781.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_782"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_782.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_020_348"
                  position={[30.954, 4.666, -4.084]}
                  rotation={[0.005, 0.714, 0]}
                >
                  <mesh
                    name="Object_784"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_784.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material.001"]
                    }
                  />
                  <mesh
                    name="Object_785"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_785.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_786"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_786.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_017_349"
                  position={[30.954, 4.696, -10.023]}
                  rotation={[-3.136, 0.745, Math.PI]}
                >
                  <mesh
                    name="Object_788"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_788.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_789"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_789.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_790"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_790.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_016_350"
                  position={[29.824, 4.619, 4.987]}
                  rotation={[-3.136, -0.012, Math.PI]}
                >
                  <mesh
                    name="Object_792"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_792.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_793"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_793.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_794"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_794.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_015_351"
                  position={[30.954, 4.542, 20.067]}
                  rotation={[0.005, -1.515, 0]}
                >
                  <mesh
                    name="Object_796"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_796.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_797"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_797.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_798"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_798.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_014_352"
                  position={[30.954, 4.572, 14.264]}
                  rotation={[0.005, 0.114, 0]}
                >
                  <mesh
                    name="Object_800"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_800.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_801"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_801.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_802"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_802.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_013_353"
                  position={[13.28, 4.492, 29.879]}
                  rotation={[-3.136, -1.294, Math.PI]}
                >
                  <mesh
                    name="Object_804"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_804.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_805"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_805.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_806"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_806.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_012_354"
                  position={[7.651, 4.492, 29.987]}
                  rotation={[-3.136, 1.418, Math.PI]}
                >
                  <mesh
                    name="Object_808"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_808.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_809"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_809.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_810"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_810.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_011_355"
                  position={[1.929, 4.481, 32.093]}
                  rotation={[0.005, 1.362, 0]}
                >
                  <mesh
                    name="Object_812"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_812.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_813"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_813.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_814"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_814.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_010_356"
                  position={[-7.494, 4.484, 31.388]}
                  rotation={[-3.136, -0.063, Math.PI]}
                >
                  <mesh
                    name="Object_816"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_816.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_817"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_817.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_818"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_818.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_006_357"
                  position={[-9.328, 4.618, 5.214]}
                  rotation={[-3.136, -0.714, Math.PI]}
                >
                  <mesh
                    name="Object_820"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_820.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_821"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_821.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_822"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_822.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_005_358"
                  position={[-9.328, 4.545, 19.485]}
                  rotation={[-3.136, 1.23, -Math.PI]}
                >
                  <mesh
                    name="Object_824"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_824.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_825"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_825.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_826"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_826.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_004_359"
                  position={[-9.328, 4.575, 13.707]}
                  rotation={[0.005, -0.745, 0]}
                >
                  <mesh
                    name="Object_828"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_828.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_829"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_829.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_830"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_830.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_003_360"
                  position={[-9.328, 4.667, -4.294]}
                  rotation={[0.005, 0.012, 0]}
                >
                  <mesh
                    name="Object_832"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_832.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_833"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_833.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_834"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_834.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_001_361"
                  position={[-9.328, 3.774, -17.619]}
                  rotation={[-3.136, 1.515, 3.142]}
                >
                  <mesh
                    name="Object_836"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_836.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_837"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_837.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_838"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_838.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="tree_left_002_362"
                  position={[-9.328, 4.696, -10.072]}
                  rotation={[-3.136, -0.114, Math.PI]}
                >
                  <mesh
                    name="Object_840"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_840.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_841"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_841.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_842"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_842.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_076_363"
                  position={[24.022, 3.313, -7.306]}
                  rotation={[1.565, -1.568, 1.56]}
                  scale={0.521}
                >
                  <mesh
                    name="Object_844"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_844.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_845"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_845.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_075_364"
                  position={[24.042, 3.191, 16.682]}
                  rotation={[1.565, -1.568, 1.56]}
                  scale={0.521}
                >
                  <mesh
                    name="Object_847"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_847.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_848"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_848.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cylinder_082_365"
                  position={[-1.859, 7.759, 4.755]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_850"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_850.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_081_366"
                  position={[22.818, 6.22, 0.183]}
                  rotation={[0.005, 0.248, 0]}
                  scale={[0.786, 0.787, 0.786]}
                >
                  <mesh
                    name="Object_852"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_852.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_002_367"
                  position={[22.824, 15.136, 0.192]}
                  rotation={[0.005, -1.382, -0.034]}
                  scale={0.692}
                >
                  <mesh
                    name="Object_854"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_854.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_855"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_855.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_080_368"
                  position={[-1.907, 4.434, 9.399]}
                  rotation={[1.565, 1.568, -1.56]}
                  scale={0.689}
                >
                  <mesh
                    name="Object_857"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_857.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_079_369"
                  position={[22.825, 15.089, 9.424]}
                  rotation={[-3.137, -1.274, 3.107]}
                  scale={0.692}
                >
                  <mesh
                    name="Object_859"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_859.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_078_370"
                  position={[-1.864, 6.173, 9.352]}
                  rotation={[0.005, 0, 0]}
                  scale={0.787}
                >
                  <mesh
                    name="Object_861"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_861.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_862"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_862.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_077_371"
                  position={[22.973, 6.173, 9.352]}
                  rotation={[0.005, 0.367, 0]}
                  scale={[0.786, 0.787, 0.786]}
                >
                  <mesh
                    name="Object_864"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_864.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_076_372"
                  position={[11.498, 2.889, -13.094]}
                  rotation={[-2.228, -0.814, 2.956]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_866"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_866.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_867"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_867.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_074_373"
                  position={[11.804, 3, -13.176]}
                  rotation={[0.605, -0.627, -0.594]}
                  scale={0.077}
                >
                  <mesh
                    name="Object_869"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_869.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_870"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_870.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_073_374"
                  position={[15.22, 3.06, -13.633]}
                  rotation={[1.247, -0.142, 2.417]}
                  scale={0.071}
                >
                  <mesh
                    name="Object_872"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_872.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_873"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_873.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_874"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_874.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_074_375"
                  position={[16.324, 2.941, -13.347]}
                  rotation={[-1.829, 0, -3.006]}
                >
                  <mesh
                    name="Object_876"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_876.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_877"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_877.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_878"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_878.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_073_376"
                  position={[9.268, 2.682, -13.1]}
                  rotation={[2.93, -1.37, 1.507]}
                >
                  <mesh
                    name="Object_880"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_880.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_881"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_881.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_882"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_882.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_072_377"
                  position={[6.923, 2.417, -12.949]}
                  rotation={[2.814, -0.01, -0.581]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_884"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_884.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_885"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_885.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cylinder_071_378"
                  position={[14.608, 2.254, -13.37]}
                  rotation={[-0.149, 1.068, 1.384]}
                  scale={0.318}
                >
                  <mesh
                    name="Object_887"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_887.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_888"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_888.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_072_379"
                  position={[15.564, 2.232, -13.646]}
                  rotation={[-0.929, -0.864, -1.058]}
                >
                  <mesh
                    name="Object_890"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_890.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_891"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_891.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_892"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_892.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_071_380"
                  position={[6.975, 2.683, -13.299]}
                  rotation={[0.005, 1.015, -1.245]}
                >
                  <mesh
                    name="Object_894"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_894.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_895"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_895.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_896"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_896.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_381"
                  position={[11.783, 2.607, -13.079]}
                  rotation={[0.005, -1.456, -1.245]}
                >
                  <mesh
                    name="Object_898"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_898.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_899"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_899.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_900"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_900.geometry}
                    material={materials["generic_wood-material"]}
                  />
                </group>
                <group
                  name="Cube_070_382"
                  position={[1.758, -6.31, -14.931]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_902"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_902.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_069_383"
                  position={[16.31, -6.302, -16.429]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_904"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_904.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_068_384"
                  position={[4.737, -6.302, -16.429]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_906"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_906.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_010_385"
                  position={[10.5, 3.212, -17.899]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_908"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_908.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_070_386"
                  position={[22.797, 2.853, 4.832]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_910"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_910.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_069_387"
                  position={[-1.906, 2.853, 4.832]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_912"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_912.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_068_388"
                  position={[14.223, 0.872, 24.433]}
                  rotation={[0.005, 0.294, 0]}
                >
                  <mesh
                    name="Object_914"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_914.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_067_389"
                  position={[22.916, 8.393, 1.669]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_916"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_916.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_066_390"
                  position={[22.699, 6.5, -15.087]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_918"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_918.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_065_391"
                  position={[-1.83, 8.393, 1.669]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_920"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_920.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cube_067_392"
                  position={[10.5, 3.212, -17.899]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_922"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_922.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_066_393"
                  position={[10.5, 3.197, -15.008]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_924"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_924.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_063_394"
                  position={[10.5, 3.197, -15.008]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_926"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_926.geometry}
                    material={materials["Material-material"]}
                  />
                </group>
                <group
                  name="Cube_019_395"
                  position={[10.251, 10.707, -16.259]}
                  rotation={[0.005, 0, 0]}
                  scale={[1.213, 1.215, 1.215]}
                >
                  <mesh
                    name="Object_928"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_928.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_018_396"
                  position={[10.5, 2.464, -14.664]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_930"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_930.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_017_397"
                  position={[10.5, 2.464, -14.664]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_932"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_932.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_016_398"
                  position={[10.5, 2.464, -14.664]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_934"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_934.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_015_399"
                  position={[10.5, 2.464, -14.656]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_936"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_936.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_023_400"
                  position={[10.505, 7.494, -13.41]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.615}
                >
                  <mesh
                    name="Object_938"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_938.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_014_401"
                  position={[10.5, 3.197, -15.008]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_940"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_940.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_011_402"
                  position={[15.28, 6.529, -14.649]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.444}
                >
                  <mesh
                    name="Object_942"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_942.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_943"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_943.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_004_403"
                  position={[10.5, 3.197, -15.008]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_945"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_945.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_062_404"
                  position={[-1.922, 16.489, -16.88]}
                  rotation={[-0.034, 0.595, 0.035]}
                  scale={0.831}
                >
                  <mesh
                    name="Object_947"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_947.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_061_405"
                  position={[-1.366, 5.795, -16.891]}
                  rotation={[-0.115, 1.124, 0.133]}
                  scale={0.945}
                >
                  <mesh
                    name="Object_949"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_949.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_013_406"
                  position={[0.103, 6.529, -14.649]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.444}
                >
                  <mesh
                    name="Object_951"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_951.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_952"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_952.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_060_407"
                  position={[-1.721, 6.5, -15.087]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_954"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_954.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Plane_041_408"
                  position={[0.981, 8.962, -14.179]}
                  rotation={[1.576, 0, 0]}
                  scale={0.918}
                >
                  <mesh
                    name="Object_956"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_956.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_059_409"
                  position={[-0.936, 6.567, -14.009]}
                  rotation={[0.005, 0, 0]}
                  scale={[1.111, 1.029, 1.029]}
                >
                  <mesh
                    name="Object_958"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_958.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_959"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_959.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Plane_040_410"
                  position={[1.045, 5.248, 6.639]}
                  rotation={[1.576, 0, -Math.PI / 2]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_961"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_961.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_962"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_962.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_039_411"
                  position={[1.045, 5.268, 2.82]}
                  rotation={[1.576, 0, -Math.PI / 2]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_964"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_964.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_965"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_965.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_038_412"
                  position={[-0.013, 2.947, 4.775]}
                  rotation={[1.576, 0, -Math.PI / 2]}
                >
                  <mesh
                    name="Object_967"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_967.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_968"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_968.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_001_413"
                  position={[-1.324, 2.947, 4.775]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_970"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_970.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_007_414"
                  position={[-1.814, 15.136, 0.192]}
                  rotation={[0.005, 0.596, -0.034]}
                  scale={0.692}
                >
                  <mesh
                    name="Object_972"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_972.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_973"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_973.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_006_415"
                  position={[-1.861, 6.22, 0.183]}
                  rotation={[0.005, 1.004, 0]}
                  scale={0.787}
                >
                  <mesh
                    name="Object_975"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_975.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_005_416"
                  position={[0.333, 9.461, 2.319]}
                  rotation={[-1.449, 0.185, -0.521]}
                  scale={0.692}
                >
                  <mesh
                    name="Object_977"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_977.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_978"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_978.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_004_417"
                  position={[-3.85, 9.454, 10.193]}
                  rotation={[-1.572, 0.003, -0.481]}
                  scale={0.786}
                >
                  <mesh
                    name="Object_980"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_980.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_981"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_981.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_056_418"
                  position={[-1.859, 7.759, 4.755]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_983"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_983.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_984"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_984.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cylinder_047_419"
                  position={[17.109, 3.395, 25.49]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.498}
                >
                  <mesh
                    name="Object_986"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_986.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_046_420"
                  position={[19.164, 3.395, 25.49]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.498}
                >
                  <mesh
                    name="Object_988"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_988.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_045_421"
                  position={[1.846, 3.395, 25.49]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.498}
                >
                  <mesh
                    name="Object_990"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_990.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_044_422"
                  position={[3.9, 3.395, 25.49]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.498}
                >
                  <mesh
                    name="Object_992"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_992.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_003_423"
                  position={[-1.877, 2.737, 14.525]}
                  rotation={[1.565, -1.568, 1.56]}
                >
                  <mesh
                    name="Object_994"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_994.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_006_425"
                  position={[22.149, 2.674, -1.901]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_996"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_996.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <group
                    name="Cylinder_043_424"
                    position={[-2.298, 1.886, -1.992]}
                    rotation={[1.57, 1.52, -3.141]}
                    scale={0.599}
                  >
                    <mesh
                      name="Object_998"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_998.geometry}
                      material={
                        materials["bgr_castle_courtyard_metal_dark-material"]
                      }
                    />
                    <mesh
                      name="Object_999"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_999.geometry}
                      material={materials["bgr_castle_courtyard-material"]}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder_042_426"
                  position={[0.115, 4.666, 19.082]}
                  rotation={[-0.038, 0, -1.571]}
                  scale={0.599}
                >
                  <mesh
                    name="Object_1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1001.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_1002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1002.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_041_427"
                  position={[0.115, 4.634, 20.356]}
                  rotation={[0.056, 0, -1.571]}
                  scale={0.599}
                >
                  <mesh
                    name="Object_1004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1004.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_1005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1005.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_030_428"
                  position={[22.858, 6.332, 11.258]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_1007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1007.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_010_429"
                  position={[-1.83, 6.331, 11.315]}
                  rotation={[1.576, -1.571, 0]}
                  scale={0.843}
                >
                  <mesh
                    name="Object_1009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1009.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_009_430"
                  position={[-1.854, 2.01, -7.443]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_1011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1011.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1012.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_065_431"
                  position={[-1.98, 3.023, -10.101]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_1014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1014.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_064_432"
                  position={[-1.98, 2.997, -5.014]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_1016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1016.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_003_433"
                  position={[18.347, 4.678, -13.851]}
                  rotation={[1.576, -0.057, 0]}
                  scale={0.996}
                >
                  <mesh
                    name="Object_1018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1018.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1019.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_034_434"
                  position={[2.667, 4.679, -13.91]}
                  rotation={[1.576, 0.059, 0]}
                  scale={0.996}
                >
                  <mesh
                    name="Object_1021"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1021.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1022.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_009_435"
                  position={[10.5, 3.18, -14.938]}
                  rotation={[0.005, 0, 0]}
                  scale={1.203}
                >
                  <mesh
                    name="Object_1024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1024.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_040_436"
                  position={[-1.854, 1.885, 16.901]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_1026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1026.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_060_437"
                  position={[-1.98, 2.893, 15.416]}
                  rotation={[1.565, 1.568, -1.56]}
                >
                  <mesh
                    name="Object_1028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1028.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_038_438"
                  position={[-1.637, 13.354, 24.169]}
                  rotation={[0.021, -0.036, -0.03]}
                  scale={0.88}
                >
                  <mesh
                    name="Object_1030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1030.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1031.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_034_439"
                  position={[22.752, 13.184, 24.152]}
                  rotation={[0.005, 0, -0.034]}
                  scale={0.88}
                >
                  <mesh
                    name="Object_1033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1033.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Plane_020_453"
                  position={[12.069, 3.243, 27.903]}
                  rotation={[0.264, 0, Math.PI]}
                  scale={0.139}
                >
                  <mesh
                    name="Object_1035"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1035.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <group
                    name="Plane_021_452"
                    position={[0, -0.133, -2.03]}
                    rotation={[-0.139, 0, -1.571]}
                  >
                    <mesh
                      name="Object_1037"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1037.geometry}
                      material={
                        materials["bgr_castle_courtyard_metal_dark-material"]
                      }
                    />
                    <group
                      name="Plane_022_451"
                      position={[0.007, 0, -2.322]}
                      rotation={[0, -0.046, 1.571]}
                    >
                      <mesh
                        name="Object_1039"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_1039.geometry}
                        material={
                          materials["bgr_castle_courtyard_metal_dark-material"]
                        }
                      />
                      <group
                        name="Plane_023_450"
                        position={[0, -0.133, -2.03]}
                        rotation={[-0.139, 0, -1.571]}
                      >
                        <mesh
                          name="Object_1041"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_1041.geometry}
                          material={
                            materials["bgr_castle_courtyard_metal_dark-material"]
                          }
                        />
                        <group
                          name="Plane_024_449"
                          position={[-0.102, 0, -2.43]}
                          rotation={[0, 0.005, 1.571]}
                        >
                          <mesh
                            name="Object_1043"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_1043.geometry}
                            material={
                              materials[
                              "bgr_castle_courtyard_metal_dark-material"
                              ]
                            }
                          />
                          <group
                            name="Plane_025_448"
                            position={[0, -0.133, -2.03]}
                            rotation={[-0.139, 0, -1.571]}
                          >
                            <mesh
                              name="Object_1045"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1045.geometry}
                              material={
                                materials[
                                "bgr_castle_courtyard_metal_dark-material"
                                ]
                              }
                            />
                            <group
                              name="Plane_026_447"
                              position={[-0.09, 0, -2.244]}
                              rotation={[0, 0.078, 1.571]}
                            >
                              <mesh
                                name="Object_1047"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1047.geometry}
                                material={
                                  materials[
                                  "bgr_castle_courtyard_metal_dark-material"
                                  ]
                                }
                              />
                              <group
                                name="Plane_027_446"
                                position={[0, -0.068, -2.117]}
                                rotation={[-0.067, 0, -1.571]}
                              >
                                <mesh
                                  name="Object_1049"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_1049.geometry}
                                  material={
                                    materials[
                                    "bgr_castle_courtyard_metal_dark-material"
                                    ]
                                  }
                                />
                                <group
                                  name="Plane_028_445"
                                  position={[-0.212, 0, -2.248]}
                                  rotation={[0, 0.15, 1.571]}
                                >
                                  <mesh
                                    name="Object_1051"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_1051.geometry}
                                    material={
                                      materials[
                                      "bgr_castle_courtyard_metal_dark-material"
                                      ]
                                    }
                                  />
                                  <group
                                    name="Plane_029_444"
                                    position={[0, -0.021, -2.05]}
                                    rotation={[0.023, 0, -1.571]}
                                  >
                                    <mesh
                                      name="Object_1053"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_1053.geometry}
                                      material={
                                        materials[
                                        "bgr_castle_courtyard_metal_dark-material"
                                        ]
                                      }
                                    />
                                    <group
                                      name="Plane_030_443"
                                      position={[0.036, 0, -2.367]}
                                      rotation={[0, -0.033, 1.571]}
                                    >
                                      <mesh
                                        name="Object_1055"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_1055.geometry}
                                        material={
                                          materials[
                                          "bgr_castle_courtyard_metal_dark-material"
                                          ]
                                        }
                                      />
                                      <group
                                        name="Plane_031_442"
                                        position={[0, -0.133, -2.03]}
                                        rotation={[-0.139, 0, -1.571]}
                                      >
                                        <mesh
                                          name="Object_1057"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.Object_1057.geometry}
                                          material={
                                            materials[
                                            "bgr_castle_courtyard_metal_dark-material"
                                            ]
                                          }
                                        />
                                        <group
                                          name="Plane_032_441"
                                          position={[-0.251, 0, -2.189]}
                                          rotation={[0, 0.139, 1.571]}
                                        >
                                          <mesh
                                            name="Object_1059"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_1059.geometry}
                                            material={
                                              materials[
                                              "bgr_castle_courtyard_metal_dark-material"
                                              ]
                                            }
                                          />
                                          <group
                                            name="Plane_033_440"
                                            position={[0, -0.133, -2.03]}
                                            rotation={[-0.139, 0, -1.571]}
                                          >
                                            <mesh
                                              name="Object_1061"
                                              castShadow
                                              receiveShadow
                                              geometry={
                                                nodes.Object_1061.geometry
                                              }
                                              material={
                                                materials[
                                                "bgr_castle_courtyard_metal_dark-material"
                                                ]
                                              }
                                            />
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
                </group>
                <group
                  name="Plane_006_467"
                  position={[8.949, 3.243, 27.903]}
                  rotation={[0.264, 0, Math.PI]}
                  scale={0.139}
                >
                  <mesh
                    name="Object_1063"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1063.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <group
                    name="Plane_007_466"
                    position={[0, -0.133, -2.03]}
                    rotation={[-0.139, 0, -1.571]}
                  >
                    <mesh
                      name="Object_1065"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1065.geometry}
                      material={
                        materials["bgr_castle_courtyard_metal_dark-material"]
                      }
                    />
                    <group
                      name="Plane_008_465"
                      position={[0.007, 0, -2.322]}
                      rotation={[0, -0.046, 1.571]}
                    >
                      <mesh
                        name="Object_1067"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_1067.geometry}
                        material={
                          materials["bgr_castle_courtyard_metal_dark-material"]
                        }
                      />
                      <group
                        name="Plane_009_464"
                        position={[0, -0.133, -2.03]}
                        rotation={[-0.139, 0, -1.571]}
                      >
                        <mesh
                          name="Object_1069"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_1069.geometry}
                          material={
                            materials["bgr_castle_courtyard_metal_dark-material"]
                          }
                        />
                        <group
                          name="Plane_010_463"
                          position={[-0.102, 0, -2.43]}
                          rotation={[0, 0.005, 1.571]}
                        >
                          <mesh
                            name="Object_1071"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_1071.geometry}
                            material={
                              materials[
                              "bgr_castle_courtyard_metal_dark-material"
                              ]
                            }
                          />
                          <group
                            name="Plane_011_462"
                            position={[0, -0.133, -2.03]}
                            rotation={[-0.139, 0, -1.571]}
                          >
                            <mesh
                              name="Object_1073"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1073.geometry}
                              material={
                                materials[
                                "bgr_castle_courtyard_metal_dark-material"
                                ]
                              }
                            />
                            <group
                              name="Plane_012_461"
                              position={[-0.09, 0, -2.244]}
                              rotation={[0, 0.078, 1.571]}
                            >
                              <mesh
                                name="Object_1075"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1075.geometry}
                                material={
                                  materials[
                                  "bgr_castle_courtyard_metal_dark-material"
                                  ]
                                }
                              />
                              <group
                                name="Plane_013_460"
                                position={[0, -0.068, -2.117]}
                                rotation={[-0.067, 0, -1.571]}
                              >
                                <mesh
                                  name="Object_1077"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_1077.geometry}
                                  material={
                                    materials[
                                    "bgr_castle_courtyard_metal_dark-material"
                                    ]
                                  }
                                />
                                <group
                                  name="Plane_014_459"
                                  position={[-0.212, 0, -2.248]}
                                  rotation={[0, 0.15, 1.571]}
                                >
                                  <mesh
                                    name="Object_1079"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_1079.geometry}
                                    material={
                                      materials[
                                      "bgr_castle_courtyard_metal_dark-material"
                                      ]
                                    }
                                  />
                                  <group
                                    name="Plane_015_458"
                                    position={[0, -0.021, -2.05]}
                                    rotation={[0.023, 0, -1.571]}
                                  >
                                    <mesh
                                      name="Object_1081"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_1081.geometry}
                                      material={
                                        materials[
                                        "bgr_castle_courtyard_metal_dark-material"
                                        ]
                                      }
                                    />
                                    <group
                                      name="Plane_016_457"
                                      position={[0.036, 0, -2.367]}
                                      rotation={[0, -0.033, 1.571]}
                                    >
                                      <mesh
                                        name="Object_1083"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_1083.geometry}
                                        material={
                                          materials[
                                          "bgr_castle_courtyard_metal_dark-material"
                                          ]
                                        }
                                      />
                                      <group
                                        name="Plane_017_456"
                                        position={[0, -0.133, -2.03]}
                                        rotation={[-0.139, 0, -1.571]}
                                      >
                                        <mesh
                                          name="Object_1085"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.Object_1085.geometry}
                                          material={
                                            materials[
                                            "bgr_castle_courtyard_metal_dark-material"
                                            ]
                                          }
                                        />
                                        <group
                                          name="Plane_018_455"
                                          position={[-0.251, 0, -2.189]}
                                          rotation={[0, 0.139, 1.571]}
                                        >
                                          <mesh
                                            name="Object_1087"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_1087.geometry}
                                            material={
                                              materials[
                                              "bgr_castle_courtyard_metal_dark-material"
                                              ]
                                            }
                                          />
                                          <group
                                            name="Plane_019_454"
                                            position={[0, -0.133, -2.03]}
                                            rotation={[-0.139, 0, -1.571]}
                                          >
                                            <mesh
                                              name="Object_1089"
                                              castShadow
                                              receiveShadow
                                              geometry={
                                                nodes.Object_1089.geometry
                                              }
                                              material={
                                                materials[
                                                "bgr_castle_courtyard_metal_dark-material"
                                                ]
                                              }
                                            />
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
                </group>
                <group
                  name="Cube_055_468"
                  position={[19.186, 3.761, 25.169]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.171}
                >
                  <mesh
                    name="Object_1091"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1091.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_054_469"
                  position={[17.115, 3.761, 25.169]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.171}
                >
                  <mesh
                    name="Object_1093"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1093.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_052_470"
                  position={[3.89, 3.761, 25.169]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.171}
                >
                  <mesh
                    name="Object_1095"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1095.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_032_471"
                  position={[-0.897, 4.588, 25.276]}
                  rotation={[0.005, 0, 0]}
                  scale={[1.08, 1, 1]}
                >
                  <mesh
                    name="Object_1097"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1097.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_031_472"
                  position={[6.72, 0.79, 24.432]}
                  rotation={[0.005, -0.171, 0]}
                >
                  <mesh
                    name="Object_1099"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1099.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_062_473"
                  position={[10.5, 2.848, 24.271]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_1101"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1101.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_061_474"
                  position={[10.5, 2.94, 24.378]}
                  rotation={[0.005, 0, 0]}
                  scale={[1.17, 1.083, 1]}
                >
                  <mesh
                    name="Object_1103"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1103.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_059_475"
                  position={[-3.053, 3.191, 16.682]}
                  rotation={[1.565, 1.568, -1.56]}
                  scale={0.521}
                >
                  <mesh
                    name="Object_1105"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1105.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1106"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1106.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_058_476"
                  position={[-3.072, 3.313, -7.306]}
                  rotation={[1.565, 1.568, -1.56]}
                  scale={0.521}
                >
                  <mesh
                    name="Object_1108"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1108.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1109"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1109.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_053_477"
                  position={[1.819, 3.761, 25.169]}
                  rotation={[-3.136, 0, -Math.PI]}
                  scale={0.171}
                >
                  <mesh
                    name="Object_1111"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1111.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_021_478"
                  position={[10.5, 1.803, 25.675]}
                  rotation={[-0.439, 0, 0]}
                >
                  <mesh
                    name="Object_1113"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1113.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                  <mesh
                    name="Object_1114"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1114.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_028_479"
                  position={[18.875, 4.056, -13.661]}
                  rotation={[-0.1, 0.197, -0.711]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1116"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1116.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_027_480"
                  position={[7.745, 12.375, -13.616]}
                  rotation={[-3.079, 0.071, 2.864]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1118"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1118.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_026_481"
                  position={[7.73, 7.413, -13.556]}
                  rotation={[0.005, -1.292, 0]}
                >
                  <mesh
                    name="Object_1120"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1120.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1121"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1121.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_020_482"
                  position={[10.5, 3.21, -17.513]}
                  rotation={[0.005, 0, 0]}
                  scale={1.286}
                >
                  <mesh
                    name="Object_1123"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1123.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cylinder_025_483"
                  position={[22.836, 16.607, -16.851]}
                  rotation={[3.076, -0.362, 2.845]}
                  scale={0.247}
                >
                  <mesh
                    name="Object_1125"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1125.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_024_484"
                  position={[-1.95, 16.496, -16.871]}
                  rotation={[-0.15, 0.019, 0.121]}
                  scale={0.284}
                >
                  <mesh
                    name="Object_1127"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1127.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Plane_005_485"
                  position={[5.424, 4.574, -13.942]}
                  rotation={[1.581, -0.06, 0.017]}
                  scale={0.996}
                >
                  <mesh
                    name="Object_1129"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1129.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1130"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1130.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_002_486"
                  position={[7.757, 8.416, -12.9]}
                  rotation={[1.576, 0, 0]}
                  scale={1.091}
                >
                  <mesh
                    name="Object_1132"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1132.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1133"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1133.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_001_487"
                  position={[14.227, 3.074, 26.114]}
                  rotation={[1.576, 0, 0]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_1135"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1135.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1136"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1136.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Plane_488"
                  position={[6.721, 3.117, 26.212]}
                  rotation={[1.576, 0, 0]}
                  scale={1.192}
                >
                  <mesh
                    name="Object_1138"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1138.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1139"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1139.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cube_012_489"
                  position={[10.5, 3.197, -15.008]}
                  rotation={[0.005, 0, 0]}
                  scale={1.215}
                >
                  <mesh
                    name="Object_1141"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1141.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1142"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1142.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cylinder_022_490"
                  position={[-0.621, 9.223, -7.426]}
                  rotation={[-3.022, 0.488, 2.976]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1144"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1144.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_021_491"
                  position={[21.555, 9.293, -7.383]}
                  rotation={[3.107, -0.168, 2.698]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1146"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1146.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_020_492"
                  position={[-1.834, 15.41, 0.171]}
                  rotation={[0.012, 0.222, 0.026]}
                  scale={0.228}
                >
                  <mesh
                    name="Object_1148"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1148.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_019_493"
                  position={[0.332, 9.452, 2.1]}
                  rotation={[0.06, 1.366, -1.595]}
                  scale={0.228}
                >
                  <mesh
                    name="Object_1150"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1150.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_018_494"
                  position={[22.843, 15.315, 0.234]}
                  rotation={[-3.131, -0.11, 2.863]}
                  scale={0.228}
                >
                  <mesh
                    name="Object_1152"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1152.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_017_495"
                  position={[22.822, 15.103, 9.39]}
                  rotation={[2.919, -0.747, 2.761]}
                  scale={0.228}
                >
                  <mesh
                    name="Object_1154"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1154.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_016_496"
                  position={[-0.568, 9.289, 16.916]}
                  rotation={[2.4, -1.189, 2.32]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1156"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1156.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_015_497"
                  position={[21.984, 2.012, 16.182]}
                  rotation={[0.611, -0.965, 0.495]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1158"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1158.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_014_498"
                  position={[22.667, 13.464, 24.157]}
                  rotation={[-3.126, -0.094, 2.864]}
                  scale={0.259}
                >
                  <mesh
                    name="Object_1160"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1160.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_013_499"
                  position={[-1.715, 13.755, 24.137]}
                  rotation={[-0.149, 0.027, 0.065]}
                  scale={0.256}
                >
                  <mesh
                    name="Object_1162"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1162.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                </group>
                <group
                  name="Cylinder_012_500"
                  position={[-1.244, 4.41, -7.404]}
                  rotation={[-0.079, -0.57, -0.155]}
                >
                  <mesh
                    name="Object_1164"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1164.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1165"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1165.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_011_501"
                  position={[-1.066, 4.37, 16.941]}
                  rotation={[-2.871, -1.198, -2.858]}
                >
                  <mesh
                    name="Object_1167"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1167.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1168"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1168.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                </group>
                <group
                  name="Cylinder_001_504"
                  position={[6.72, 0.518, 24.431]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_1170"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1170.geometry}
                    material={materials["bgr_castle_courtyard_specular-material"]}
                  />
                  <mesh
                    name="Object_1171"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1171.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cylinder_505"
                  position={[-1.519, 1.846, 24.629]}
                  rotation={[0.005, 0, 0]}
                >
                  <mesh
                    name="Object_1173"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1173.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1174"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1174.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="Cube_044_506"
                  position={[-5.983, 0.598, 5.265]}
                  rotation={[-1.973, -0.309, -2.491]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1176"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1176.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_027_507"
                  position={[23.915, 0.317, 26.86]}
                  rotation={[0.011, -1.252, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1178"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1178.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_036_508"
                  position={[24.457, -0.168, 26.344]}
                  rotation={[-1.549, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1180"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1180.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_035_509"
                  position={[-3.841, 0.38, 26.726]}
                  rotation={[-1.233, -0.658, 0.881]}
                >
                  <mesh
                    name="Object_1182"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1182.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_026_510"
                  position={[-2.7, 0.45, 27.088]}
                  rotation={[-3.131, 0.315, Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1184"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1184.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_025_511"
                  position={[16.831, 0.447, 27.321]}
                  rotation={[-3.131, -0.826, Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1186"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1186.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_024_512"
                  position={[4.908, 0.439, 28.077]}
                  rotation={[-3.131, -0.791, Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1188"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1188.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="body_geo_005_513"
                  position={[8.462, 0.349, 26.286]}
                  rotation={[-0.141, 0.246, 1.55]}
                >
                  <mesh
                    name="Object_1190"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1190.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                  <mesh
                    name="Object_1191"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1191.geometry}
                    material={
                      materials["bgr_castle_courtyard_specular-material.001"]
                    }
                  />
                </group>
                <group
                  name="barrel_1_034_514"
                  position={[0.722, 0.454, 25.839]}
                  rotation={[-1.939, -1.045, 2.706]}
                >
                  <mesh
                    name="Object_1193"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1193.geometry}
                    material={materials["barrel_1-material.001"]}
                  />
                </group>
                <group
                  name="Cube_023_515"
                  position={[19.726, 0.376, 25.697]}
                  rotation={[-2.063, -0.089, -2.936]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1195"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1195.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_022_516"
                  position={[17.375, 0.245, 26.656]}
                  rotation={[1.023, -0.703, -2.549]}
                >
                  <mesh
                    name="Object_1197"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1197.geometry}
                    material={materials["generic_wood_2-material"]}
                  />
                  <mesh
                    name="Object_1198"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1198.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1199"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1199.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_033_517"
                  position={[15.181, -0.452, 26.077]}
                  rotation={[-0.988, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1201"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1201.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_050_518"
                  position={[3.625, 0.504, 26.828]}
                  rotation={[-1.124, 0.283, -1.465]}
                >
                  <mesh
                    name="Object_1203"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1203.geometry}
                    material={materials["generic_1-material"]}
                  />
                  <mesh
                    name="Object_1204"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1204.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                  <mesh
                    name="Object_1205"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1205.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material.001"]
                    }
                  />
                </group>
                <group
                  name="Cube_036_519"
                  position={[2.185, 0.369, 26.363]}
                  rotation={[-1.918, 0.372, 2.416]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1207"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1207.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_047_520"
                  position={[-5.983, 0.703, -4.352]}
                  rotation={[-2.063, -0.089, -2.936]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1209"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1209.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_041_521"
                  position={[-5.918, 1.129, -10.751]}
                  rotation={[-3.131, -0.044, -Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1211"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1211.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_039_522"
                  position={[-5.93, 0.97, -10.836]}
                  rotation={[0.011, 0.721, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1213"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1213.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_030_523"
                  position={[-5.887, 0.748, -10.864]}
                  rotation={[0.011, 1.23, 0]}
                >
                  <mesh
                    name="Object_1215"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1215.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1216"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1216.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1217"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1217.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="Cube_046_524"
                  position={[27.295, 0.566, 21.071]}
                  rotation={[-1.591, 0.514, -0.371]}
                >
                  <mesh
                    name="Object_1219"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1219.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1220"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1220.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                  <mesh
                    name="Object_1221"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1221.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material.001"]
                    }
                  />
                </group>
                <group
                  name="Cube_038_525"
                  position={[27.281, 0.408, 22.748]}
                  rotation={[-2.063, -0.089, -2.936]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1223"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1223.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_035_526"
                  position={[27.281, 0.666, -0.926]}
                  rotation={[-2.063, -0.089, -2.936]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1225"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1225.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_034_527"
                  position={[26.867, 0.541, 6.281]}
                  rotation={[0.011, -1.252, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1227"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1227.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_032_528"
                  position={[-6.08, 0.806, -12.379]}
                  rotation={[0.917, 0.145, -0.589]}
                >
                  <mesh
                    name="Object_1229"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1229.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_194_529"
                  position={[-6.845, 0.761, -13.951]}
                  rotation={[0.011, -1.252, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1231"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1231.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_031_530"
                  position={[-6.759, 0.284, -15.209]}
                  rotation={[-1.549, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1233"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1233.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_043_531"
                  position={[-4.968, 0.783, -11.731]}
                  rotation={[-1.124, 0.275, 0.573]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1235"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1235.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_042_532"
                  position={[-4.968, 0.548, 5.667]}
                  rotation={[0.011, -1.252, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1237"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1237.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_040_533"
                  position={[-6.782, 0.641, 9.496]}
                  rotation={[-3.131, -0.791, Math.PI]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1239"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1239.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_037_534"
                  position={[-6.86, 1.067, -5.102]}
                  rotation={[0.011, 0.964, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1241"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1241.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_033_535"
                  position={[-6.787, 0.907, -5.062]}
                  rotation={[0.011, -1.501, 0]}
                  scale={[0.323, 0.078, 0.323]}
                >
                  <mesh
                    name="Object_1243"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1243.geometry}
                    material={materials["generic_1-material"]}
                  />
                </group>
                <group
                  name="Cube_032_536"
                  position={[-6.793, 0.684, -5.015]}
                  rotation={[0.011, -0.992, 0]}
                >
                  <mesh
                    name="Object_1245"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1245.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1246"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1246.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1247"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1247.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_030_537"
                  position={[-6.08, 0.539, 12.104]}
                  rotation={[1.081, -0.478, 0.293]}
                >
                  <mesh
                    name="Object_1249"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1249.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_029_538"
                  position={[-6.913, 0.446, 8.178]}
                  rotation={[1.023, -0.703, -2.549]}
                >
                  <mesh
                    name="Object_1251"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1251.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1252"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1252.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1253"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1253.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_029_539"
                  position={[-6.759, 0.074, 4.091]}
                  rotation={[-1.549, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1255"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1255.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="body_geo_004_540"
                  position={[-5.157, 0.523, 10.316]}
                  rotation={[-0.151, 0.426, 1.58]}
                >
                  <mesh
                    name="Object_1257"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1257.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                  <mesh
                    name="Object_1258"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1258.geometry}
                    material={
                      materials["bgr_castle_courtyard_specular-material.001"]
                    }
                  />
                </group>
                <group
                  name="barrel_1_028_541"
                  position={[26.967, 0.411, -20.478]}
                  rotation={[-1.56, 0, 2.002]}
                >
                  <mesh
                    name="Object_1260"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1260.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_049_542"
                  position={[26.863, 0.706, -15.733]}
                  rotation={[1.142, 0.774, 1.953]}
                >
                  <mesh
                    name="Object_1262"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1262.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1263"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1263.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1264"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1264.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_027_543"
                  position={[25.993, 0.539, 12.171]}
                  rotation={[1.081, -0.478, 0.293]}
                >
                  <mesh
                    name="Object_1266"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1266.geometry}
                    material={materials["barrel_1-material.001"]}
                  />
                </group>
                <group
                  name="Cube_048_544"
                  position={[26.863, 0.407, 11.719]}
                  rotation={[1.023, -0.703, -2.549]}
                >
                  <mesh
                    name="Object_1268"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1268.geometry}
                    material={materials["generic_wood-material.001"]}
                  />
                  <mesh
                    name="Object_1269"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1269.geometry}
                    material={materials["generic_1-material.001"]}
                  />
                  <mesh
                    name="Object_1270"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1270.geometry}
                    material={materials["generic_wood_2-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_026_545"
                  position={[27.018, 0.037, 7.491]}
                  rotation={[-1.549, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1272"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1272.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cylinder_139_546"
                  position={[27.085, -2.973, 10.706]}
                  rotation={[2.914, 0.623, 3.086]}
                >
                  <mesh
                    name="Object_1274"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1274.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material.001"]
                    }
                  />
                  <mesh
                    name="Object_1275"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1275.geometry}
                    material={
                      materials["bgr_castle_courtyard_specular-material.001"]
                    }
                  />
                </group>
                <group
                  name="Cylinder_138_547"
                  position={[26.732, 1.81, 9.48]}
                  rotation={[-0.701, 0.931, 0.899]}
                  scale={0.203}
                >
                  <mesh
                    name="Object_1277"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1277.geometry}
                    material={materials["bgr_castle_courtyard_lit-material"]}
                  />
                </group>
                <group
                  name="barrel_1_025_548"
                  position={[26.384, 0.827, -1.328]}
                  rotation={[3.141, -1.236, 3.119]}
                >
                  <mesh
                    name="Object_1279"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1279.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_024_549"
                  position={[27.018, 0.215, -1.955]}
                  rotation={[-1.549, -0.008, -0.227]}
                >
                  <mesh
                    name="Object_1281"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1281.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="barrel_1_023_550"
                  position={[26.208, 0.95, -12.102]}
                  rotation={[0.011, -0.94, 0]}
                >
                  <mesh
                    name="Object_1283"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1283.geometry}
                    material={materials["barrel_1-material.001"]}
                  />
                </group>
                <group
                  name="barrel_1_022_551"
                  position={[26.062, 0.329, -12.976]}
                  rotation={[-1.56, 0, 0.738]}
                >
                  <mesh
                    name="Object_1285"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1285.geometry}
                    material={materials["barrel_1-material"]}
                  />
                </group>
                <group
                  name="Cube_107_552"
                  position={[27.754, 1.655, 21.012]}
                  rotation={[-3.131, 0, -Math.PI]}
                  scale={[0.862, 1, 1]}
                >
                  <mesh
                    name="Object_1287"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1287.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                </group>
                <group
                  name="Cube_106_553"
                  position={[27.754, 1.916, -2.968]}
                  rotation={[-3.131, 0, -Math.PI]}
                  scale={[0.862, 1, 1]}
                >
                  <mesh
                    name="Object_1289"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1289.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                </group>
                <group
                  name="Cube_057_554"
                  position={[-6.737, 1.743, 12.892]}
                  rotation={[0.011, 0, 0]}
                  scale={[0.862, 1, 1]}
                >
                  <mesh
                    name="Object_1291"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1291.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                </group>
                <group
                  name="Cube_056_555"
                  position={[-6.737, 2.005, -11.119]}
                  rotation={[0.011, 0, 0]}
                  scale={[0.862, 1, 1]}
                >
                  <mesh
                    name="Object_1293"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1293.geometry}
                    material={materials["bgr_castle_courtyard-material.001"]}
                  />
                </group>
                <group
                  name="ground_002_556"
                  position={[0, 2.176, -12.442]}
                  rotation={[0.011, 0, 0]}
                >
                  <mesh
                    name="Object_1295"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1295.geometry}
                    material={materials["bgr_castle_courtyard-material"]}
                  />
                  <mesh
                    name="Object_1296"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1296.geometry}
                    material={materials["shoreline-material"]}
                  />
                </group>
                <group
                  name="ground_557"
                  position={[10.5, 1.997, 4.057]}
                  rotation={[0.011, 0, 0]}
                >
                  <mesh
                    name="Object_1298"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1298.geometry}
                    material={
                      materials["bgr_castle_courtyard_metal_dark-material"]
                    }
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  )
}
