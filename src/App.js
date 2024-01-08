import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import './App.css';
import * as THREE from 'three';
import Spline from "@splinetool/react-spline"
import { useEffect, useRef } from 'react';

export default function App() {
  const x = useRef()
  const y = useRef()
  const z = useRef()

  const x1 = useRef()
  const y1 = useRef()
  const z1 = useRef()


  function onLoad(spline) {
    // console.log(spline.getAllObjects())
    // console.log(spline.getSplineEvents())
    const obj = spline.findObjectByName('pig');
    const obj1 = spline.findObjectByName('pig 4');
    console.log("pig gray: " + JSON.stringify(obj));
    console.log("pig green: " + JSON.stringify(obj1));
    if (obj !== undefined) {
      console.log(obj.position.x)
      console.log(obj1.position.x)
      x.current = obj.position.x
      y.current = obj.position.y
      z.current = obj.position.z
      x1.current = obj1.position.x
      y1.current = obj1.position.y
      z1.current = obj1.position.z
      if (x === x1) {
        console.log("same x")
      }if (z === z1) {
        console.log("same z")
      }if (y === y1) {
        console.log("same y")
      }
    }
    
  }
  
  return (
    <Spline 
      scene="https://prod.spline.design/4OObmHyHjYqaDpe9/scene.splinecode"
      onLoad={onLoad}
    />
      

  )
}