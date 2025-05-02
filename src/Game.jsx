import { useContactMaterial } from '@react-three/cannon'
import Floor from './elements/Floor'
import Man from './elements/Man'
import Sky from './components/Sky'


export default function Game() {

  useContactMaterial('ground', 'slippery', {
    friction: 0,
    restitution: 0.3,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 3
  })

  return (
    <>
      {/* <ToggleDebug> */}
      <Sky />
      <Floor rotation={[-Math.PI / 2, 0, 0]} material={'ground'} />
      <Man position={[10, 5, 0]} linearDamping={0.95} material={'slippery'} />

      {/* </ToggleDebug> */}
    </>
  )
}
