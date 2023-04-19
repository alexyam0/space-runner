import { Float, Text } from '@react-three/drei';

function Words() {

    return (
        <>
            <Float>
                <Text
                font='./bangers-v20-latin-regular.woff'
                fontSize={ 3 }
                color='salmon'
                position={ [ -40, 15, -30 ] } 
                >Let's Go 57!</Text>
            </Float>
        </>
    )

}

export default Words