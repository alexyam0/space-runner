import { useState, Suspense } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  

  return (
    <Suspense fallback={null}>
      <Canvas>
        <mesh position={[0, 0, 0]} scale={1.5} >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='mediumpurple' />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </mesh>
        <mesh position-y= { -1} rotation-x={ -Math.PI * 0.5 } scale={ 10 } >
          <planeGeometry />
          <meshBasicMaterial color='greenyellow' />
        </mesh>
        <PerspectiveCamera position={[0, 0, 0]} fov={50} />
        <OrbitControls target={[0, 0, 0]} />
        
        
      </Canvas>
    </Suspense>
  )
}

export default App
