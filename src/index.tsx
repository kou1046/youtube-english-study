import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import reactDom from "react-dom";
import YouTube from "react-youtube";
import videoInfo from "../public/videoInfo.json";
import { FlashCard } from "./components/FlashjCard";

function App() {
  const [player, setPlayer] = useState<any>();
  const [playerWidth, setPlayerWidth] = useState<any>();

  const readyPlayer = (e) => {
    setPlayer(e.target);
    setPlayerWidth(640);
  };

  const resizeFunc = (delta) => {
    const newWidth = playerWidth + delta;
    const newHeight = newWidth * (9 / 16);
    player.setSize(newWidth, newHeight);
    setPlayerWidth(newWidth);
  };

  return (
    <>
      <Paper
        elevation={20}
        sx={{
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          pt: 1,
          bgcolor: "skyblue",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box component="h2" sx={{ m: 1.5 }}>
            {player?.playerInfo.videoData.title}
          </Box>
          <ButtonGroup>
            <Button variant="contained" onClick={() => resizeFunc(50)}>
              +
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => resizeFunc(-50)}
            >
              -
            </Button>
          </ButtonGroup>
        </Box>
        <YouTube
          videoId={videoInfo.videoId}
          onReady={readyPlayer}
          style={{ background: "black" }}
        ></YouTube>
      </Paper>
      {videoInfo.flashCards.map((card, i) => (
        <FlashCard {...card} player={player} index={i}></FlashCard>
      ))}
    </>
  );
}

reactDom.render(<App />, document.querySelector("#app"));
