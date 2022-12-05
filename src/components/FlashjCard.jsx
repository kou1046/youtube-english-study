import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useRef, useState } from "react";
import { getPaginationItemUtilityClass } from "@mui/material";


export const FlashCard = ({en, ja, sec, phrases, player, index}) => {
    
    const [isVisible, setIsVisible] = useState(false)

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
      if (player.getPlayerState() != 1){
        player.playVideo()
      }

    }

    return <>
      <Box sx={{mt:10, textAlign:'center'}}>
        <Box component='a' href="#!" onClick={(e) => seekTimeStamp(e, sec)} sx={{fontSize:20}}>{toHHMMSS(sec)}</Box>
        <Accordion sx={{border:'solid', width:'100%', bgcolor:'skyblue'}}>
            <AccordionSummary>
              <Typography align='center' sx={{'width':'100%', fontSize:25}}>
                {index+1} 
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{textAlign:'center', overflow:'auto'}}>
              {isVisible ? 
              <>
                <Box sx={{display:'flex', justifyContent:"center"}}>
                 <Button onClick={() => setIsVisible((isvisible) => !isvisible)} color='error' variant='contained'>-</Button>
                 <Box component='p' sx={{fontWeight:'bold', fontSize:25 ,m:0 ,ml:3}}>{en}</Box>
                </Box>
                <Box component='p' sx={{fontSize:23 ,m:0}}>{ja}</Box>
              </>
              : 
                <Button onClick={() => setIsVisible((isvisible) => !isvisible )} variant='contained'>+</Button>
              }
              <Box component='ul' sx={{display:'flex'}}>
                {phrases.map((phrase, i) => {
                return (
                    <Box component='li' key={index.toString() + 'phrase-' + i.toString()} sx={{fontSize:23, mr:10}}>{phrase}</Box>
                )
                })}
              </Box>
            </AccordionDetails>
        </Accordion>
      </Box>
    </>
}
