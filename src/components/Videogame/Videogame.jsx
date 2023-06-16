import React from 'react'
import './Videogame.css'
import { Unity, useUnityContext } from "react-unity-webgl";



function Videogame () {

  const { unityProvider } = useUnityContext({
    loaderUrl: "public/Build/buildPrueba.loader.js",
    dataUrl: "public/Build/buildPrueba.data.gz",
    frameworkUrl: "public/Build/buildPrueba.framework.js.gz",
    codeUrl: "public/Build/buildPrueba.wasm.gz"
  });
    
  

  return (
    <Unity unityProvider={unityProvider} />
  )
}

export default Videogame