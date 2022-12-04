import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper'
import { useRef } from "react";


export const FlashCard = ({en, ja, sec, player, index}) => {

    const toHHMMSS = (secValue) => {
      const secInt = parseInt(secValue.toString(), 10);
      const hours = Math.floor(secInt / 3600);
      const minutes = Math.floor((secInt - hours * 3600) / 60);
      const seconds = secInt - hours * 3600 - minutes * 60;

      const formattedHours = hours < 10 ? '0' + hours : hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSecounds = seconds < 10 ? '0' + seconds : seconds;

      if (formattedHours == '00') {
        return formattedMinutes + ':' + formattedSecounds;
      }

      return formattedHours + ':' + formattedMinutes + ':' + formattedSecounds;
    };

    const seekTimeStamp = (e, sec) => {
      player.seekTo(sec);
    }

    return <>
      <Box sx={{mt:10, textAlign:'center'}}>
        <Box component='a' href="#!" onClick={(e) => seekTimeStamp(e, sec)} sx={{fontSize:20}}>{toHHMMSS(sec)}</Box>
        <Accordion sx={{border:'solid', width:'100%', bgcolor:'skyblue'}}>
            <AccordionSummary>
              <Typography align='center' sx={{'width':'100%'}}>フレーズ{index+1}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{textAlign:'center', overflow:'auto'}}>
              <Box component='p' sx={{fontWeight:'bold', fontSize:20 ,m:0}}>{en}</Box>
              <Box component='p' sx={{fontSize:15 ,m:0}}>{ja}</Box>
            </AccordionDetails>
        </Accordion>
      </Box>
    </>
}
