import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { Canvas } from '@react-three/fiber';

const cameraSettings = {
    fov: 75,
    near: 0.1,
    far: 200,
    position: [ 3, 1, 4]
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas
        camera={ cameraSettings }
    >
        <App />
    </Canvas>
   
);
