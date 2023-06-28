import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

function App() {

  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />    
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
          <Experience />
      </Canvas>
    </>
  );
}

export default App;
