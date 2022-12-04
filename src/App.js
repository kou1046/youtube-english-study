import { FlashCard } from "./components/FlashjCard";
import YouTube from 'react-youtube';
import { useRef, useState } from "react";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import {Rnd} from "react-rnd"

function App() {

  const [player, setPlayer] = useState();
  const [playerWidth, setPlayerWidth] = useState();
  const playerRef = useRef();

  const flashCards = [
    {
      ja: '私の名前はコウスケです．poaisupfroqwiejr;lkfahsopdiyfopqiaueywtklahjdf;oighopaiuhsdfpoiasudpfoiquweht;ihaspioudfypaisuydgoaskjdfpiouqwyepiruypogiajsd;ofpoaisdufpoqiawehf;oiausfieouprqoiweu', 
      en: 'My name is Kosuke poaisdufkqwepoityouhasdflkja;slkdjfpoqiweurpoquweiropu;lajsdf;lkjapsodiufpoiweasd iofupoqiwueroij;laskdjfv;laiufpioasudfpoiqweur;lkqwje;oifasdf',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
    {
      ja: 'My name is Kosuke', 
      en: '私の名前はコウスケです．',
      sec: 12.0
    },
  ]

  const readyPlayer = (e) => {
    const width = playerRef.current.offsetWidth
    const height = width * (9 / 16)
    e.target.setSize(width, height)
    setPlayer(e.target)
    setPlayerWidth(width)
  }

  const resizeFunc = (delta) => {
    const newWidth =  playerWidth + delta
    const newHeight = newWidth * (9 / 16)
    player.setSize(newWidth, newHeight)
    setPlayerWidth(newWidth)
  }

  return <>
    <Paper elevation={20} sx={{textAlign:'center', position:'sticky', top:0, zIndex:1000, pt:1, bgcolor:'skyblue'}} ref={playerRef}>
      <Box component='h2'>{player?.playerInfo.videoData.title}</Box>
      <ButtonGroup>
        <Button variant='contained' onClick={() => resizeFunc(50)}>+</Button>
        <Button variant='contained' color='error' onClick={() => resizeFunc(-50)}>-</Button>
      </ButtonGroup>
        <YouTube videoId="QVEp781Welg" onReady={readyPlayer} style={{background:'black'}}></YouTube>
    </Paper>
    {flashCards.map((el, i) => <FlashCard {...el} player={player} index={i}></FlashCard>)}
  </>
}

export default App;
