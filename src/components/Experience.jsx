import { ContactShadows, Environment, OrbitControls, Sky, Text3D, Center, useMatcapTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import typingMusic from '../music/night-coffee-shop-114856.mp3'
import swingMusic from '../music/swing-110485.mp3'
import rumbaMusic from '../music/funny-background-tango-hip-hop-music-for-vlog-video-1-minute-151674.mp3'
import shakingMusic from '../music/catch-it-117676.mp3'
import hiphopMusic from '../music/cool-chill-hip-hop-ambience-music-95-bpm-121533.mp3'
import sillyMusic from '../music/cheating-15095.mp3'
import { useEffect } from "react";


export const Experience = () => {
  const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
  const { animation, bgm } = useControls({
    animation: {
      value: "Standing",
      options: ["Standing", "Swing Dancing", "Shaking", "Twist Dancing", "Rumba Dancing",   "Uprock Dancing", "Breaking Dancing"]
    },
    bgm : false
  })

  let mp3Play = {};

  useEffect(()=> {
    let track = null;

    switch (animation) {
      case 'Standing':
        track = typingMusic;
          break;
      case 'Rumba Dancing':
        track = rumbaMusic;
          break;
      case 'Shaking':
        track = shakingMusic;
          break;
      case 'Swing Dancing':
        track = swingMusic;
          break;
      case 'Twist Dancing':
        track = sillyMusic;
          break;
      case 'Uprock Dancing':
        track = hiphopMusic;
          break;
      case 'Breaking Dancing':
        track = hiphopMusic;
          break;
      default:
          track = null;
    }

    mp3Play = new Audio(track);

    if(bgm) {
      mp3Play.play();
      console.log('paly')
    }

    return () => {
      if(mp3Play !== null) {
        mp3Play.pause();
        // mp3Play.currentTime = 0;
      }
    }
  },[bgm, animation])

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <Center position-z="-1">
        <Text3D 
          font="./fonts/helvetiker_regular.typeface.json"
          size={ 0.75 }
          height={ 0.2 }
          curveSegments={ 12 }
          bevelEnabled
          bevelThickness={ 0.02 }
          bevelSize={ 0.02 }
          bevelOffset={ 0 }
          bevelSegments={ 5 }
        >
          Sunny's Dance Club
          <meshMatcapMaterial matcap={ matcapTexture } />
        </Text3D>
      </Center>
      <group position-y={-1}>
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={animation} rotation-x={-Math.PI * 0.5} />
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="#CCB9AB" />
        </mesh>
      </group>
    </>
  );
};