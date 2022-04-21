import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import styled from 'styled-components'
import { OrbitControls } from "@react-three/drei"
import AnimatedSphere from './components/AnimatedSphere'
import Iphone from './components/Iphone'
import AppleSeries5 from './components/Appleseris5'

const Wrapper = styled.div`
position: relative;
background: '#1f1144';

Canvas {
   
    height: 700px;
    
}
`

const App = () => {
  return (
    <Wrapper>
        <h1>React Fibre Three</h1>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
          <Box />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
          <AnimatedSphere />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
          <Iphone />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
          <AppleSeries5 />
          </Suspense>
        </Canvas>
    </Wrapper>
  )
}

export default App