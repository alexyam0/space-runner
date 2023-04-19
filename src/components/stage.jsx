import { FixedMultibodyJoint } from '@dimforge/rapier3d-compat';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

function Stage() {
    const stage = useGLTF('./mario-stage.glb')


    return (
        <>
            <RigidBody type='fixed'>
                <mesh>
                    <primitive 
                        object={ stage.scene }
                        position={ [ 95, -4, -6 ] }
                        scale={ 1.5 }
                    />
                </mesh>
            </RigidBody>
        </>

    )
}

export default Stage