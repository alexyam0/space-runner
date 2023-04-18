import { useRef, Suspense } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function App() {
  const boxRef = useRef();

  // useFrame((state, delta) => {
  //   boxRef.current.rotation.y += delta
  // })

  return (
    // <Suspense fallback={null}>
    //   <Canvas>
    <>
        <PerspectiveCamera position={[0, 0, 0]} fov={10} />
        <OrbitControls target={[0, 0, 0]} />

        <mesh ref={ boxRef } position={[0, 0, 0]} scale={1.5} >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='mediumpurple' />
          <ambientLight intensity={ 0.75 } />
          <pointLight position={[1, 2, 3]} />
        </mesh>

        <mesh position-y= { -1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 } >
          <planeGeometry />
          <meshStandardMaterial color='greenyellow' />
        </mesh>
    </>
        
    //   </Canvas>
    // </Suspense>
  )
}

export default App
