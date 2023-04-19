import { useRef, Suspense } from 'react';
import { Sphere, Environment, OrbitControls, PerspectiveCamera, TransformControls, KeyboardControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { RigidBody, Physics, Debug } from '@react-three/rapier';
import Model from './components/model.jsx';
import Stage from './components/stage.jsx';
import Words from './components/text.jsx';



function App() {
  const cameraSettings = {
    fov: 80,
    near: 0.1,
    far: 300,
    position: [ 0, 3, 14]
  }
  const boxRef = useRef();

  // useFrame((state, delta) => {
  //   boxRef.current.rotation.y += delta
  // })

  return (
    
    <>
      <KeyboardControls
        map={ [ 
          // { name: "forward", keys: ["ArrowUp", "w", "W"] },
          // { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ] }
      >
        <Canvas camera={ cameraSettings }>
          <PerspectiveCamera position={[0, 0, 0]} fov={10} />
          <OrbitControls makeDefault target={[0, 0, 0]} />
          <directionalLight castShadow position={ [ 2, 4, 5 ] } intensity={ 0.5 } />
          <ambientLight intensity={ 0.5 } />
          {/* <pointLight position={[3, 3, 3]} /> */}

          <Physics gravity={ [ 0, 1, 0 ] }>
            <Debug />

            <Model />
          
            <Stage />
          </Physics>

          <Words />

          {/* <mesh position-y= { -1 } rotation-x={ -Math.PI * 0.5 } scale={ 15 } >
              <planeGeometry />
              <meshStandardMaterial color='greenyellow' />
          </mesh> */}
          {/* <mesh position={ [ 20, 30, -70] } scale={20} >
            <Sphere>
              <meshStandardMaterial color='white' />
            </Sphere>
          </mesh> */}

          {/* <mesh ref={ boxRef } position={[-4, 0, 0]} scale={1.5} >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='mediumpurple' />
          </mesh>
          <TransformControls object={ boxRef } /> */}
        </Canvas>
      </KeyboardControls>
    </>
    
  )
}

export default App
