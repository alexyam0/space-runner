import { useAnimations, useGLTF, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { CylinderCollider, RigidBody, Physics } from '@react-three/rapier';

function Model() {
    const model = useGLTF('./mario-model.glb')
    const animations = useAnimations(model.animations, model.scene)
    // console.log('model', model)
    console.log('animations', animations)

    const [ subKeys, getKeys ] = useKeyboardControls()
    const mario = useRef()
    const [ currPosition, updatePosition ] = useState([ 0, -1, 0])
    const [ currFace, updateFace ] = useState(Math.PI * 0.35)

    useFrame(() => {
        const { left, right, jump } = getKeys()
        const action = animations.actions.ArmatureAction
        let curr = currPosition[0]
        let jumpPosition = currPosition[1]
        // action.play()
        if (left) {
            if (currFace > 0) updateFace(currFace * -1)
            updatePosition([ curr - 0.75, -1, 0 ])
            action.play()
            console.log('press left')
        }
        if (right) {
            if (currFace < 0) updateFace(currFace * -1)
            updatePosition([ curr + 0.75, -1, 0 ])
            action.play()
            console.log('press right')
        }
        if (jump) {
            const direction = left ? curr - 0.5 : curr + 0.5
            updatePosition([ direction, jumpPosition + 0.5, 0 ])
            console.log('press jump')
            // mario.current.applyImpulse({ x: 0, y: 3, z: 0 }, true)
        }
        

    }, [])

    return (
        <>
            <RigidBody ref={ mario } position={ currPosition } type='fixed' colliders={ false } >
                <mesh rotation-y={ currFace }>
                    <primitive 
                        object={ model.scene }
                        scale={ 1.25 }
                    />
                </mesh>
                <CylinderCollider args={ [ 2.95, 1.4 ] } />
            </RigidBody>
        </>

    )
}

export default Model