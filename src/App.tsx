import { useCallback } from "react"
import buildSpatialHashExampleScene from "./lib/demo.js"

function App() {
  const cbRef = useCallback((canvas: HTMLCanvasElement) => {
    buildSpatialHashExampleScene(canvas)
  }, [])

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={cbRef}></canvas>
    </div>
  )
}

export default App
