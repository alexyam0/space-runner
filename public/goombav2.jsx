import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

export default function GoombaV2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/goomba.glb')
  const { actions } = useAnimations(animations, group)

  const [ timeOffset ] = useState(() => Math.random()  * Math.PI * 2)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const x = Math.sin(time + timeOffset)
    group.current.setNextKinematicTranslation({ x: props.position[0] + x * 3, y: props.position[1], z: props.position[2] })
  })

  return (
    <RigidBody ref={group} scale={ 0.03 } position={ [...props.position] } type='kinematicPosition' colliders={ false } >
      <group dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="00dd51133e3c4203a068b3fadff534e0fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Goomba" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Body" position={[0.01, 0.05, -21.16]} rotation={[Math.PI / 2, 0, 0]} scale={[0.91, 1, 0.78]}>
                      <group name="Left_Foot" position={[-0.51, -0.7, 0.01]} rotation={[0, 0, 0.05]}>
                        <group name="Object_9" position={[1.95, 27.93, 0.6]}>
                          <mesh name="Left_Foot_14_-_Default_0" geometry={nodes['Left_Foot_14_-_Default_0'].geometry} material={materials['14_-_Default']} />
                          <mesh name="Left_Foot_07_-_Default_0" geometry={nodes['Left_Foot_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
                        </group>
                      </group>
                      <group name="Right_Foor">
                        <group name="Object_13" position={[1.95, 27.93, 0.6]}>
                          <mesh name="Right_Foor_14_-_Default_0" geometry={nodes['Right_Foor_14_-_Default_0'].geometry} material={materials['14_-_Default']} />
                          <mesh name="Right_Foor_07_-_Default_0" geometry={nodes['Right_Foor_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
                        </group>
                      </group>
                      <group name="Object_6" position={[1.95, 27.93, 0.6]}>
                        <mesh name="Body_07_-_Default_0" geometry={nodes['Body_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
                      </group>
                    </group>
                    <group name="Head" position={[0, 2.11, 6.77]} rotation={[Math.PI / 2, 0, 0]} scale={[0.91, 1, 0.78]}>
                      <mesh name="Head_10_-_Default_0" geometry={nodes['Head_10_-_Default_0'].geometry} material={materials['10_-_Default']} />
                      <mesh name="Head_1_0" geometry={nodes.Head_1_0.geometry} material={materials.material} />
                      <mesh name="Head_15_-_Default_0" geometry={nodes['Head_15_-_Default_0'].geometry} material={materials['15_-_Default']} />
                      <mesh name="Head_03_-_Default_0" geometry={nodes['Head_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/goomba.glb')
