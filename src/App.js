import { FlashCard } from "./components/FlashjCard";
import YouTube from 'react-youtube';
import { useRef, useState } from "react";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

function App() {

  const [player, setPlayer] = useState();
  const [playerWidth, setPlayerWidth] = useState();
  const playerRef = useRef();

  const flashCards = [
    {
      ja: '自分はシンプルなルールで生きている．どんな状況でも，一旦成長が止まったら，自分自身に変化を起こす義務があります．',
      en: 'I live by a simple rule. once I stop growing in any situation, I owe it to myself to make a change.',
      sec: 0
    },
    {
      en: 'A change in the environment and inputs, to challenge myself and stimulate new growth.', 
      ja: '環境やインプットの変化で，自分に挑戦し，新たな成長を促しています．',
      sec: 7.16
    },
    {
      ja: '素晴らしい仕事で何年も働いたのち，自分は成長の天井にぶつかりました．', 
      en: 'after many years of working at a great job, I hit a growth ceiling.',
      sec: 12.31
    },
    {
      ja: 'だから，私はやめるという苦渋の決断をしました．' ,
      en: 'So I made the difficult decision to quit.',
      sec: 16.2
    },
    {
      ja: 'どこに行くかはわかりませんが、今はそれを見つけるための場所を作っています．', 
      en: "Where I'll end up, I'm unsure of, but for now, I'm making space to find out.",
      sec: 19.0
    },
    {
      ja: 'こんにちは, Matthew Encina です。このビデオでは, 仕事を辞めた後の私の一日を紹介します.', 
      en: "Hello, I'm Matthew Encina, and in this video, I'll share a day in my life after quitting my job.",
      sec: 24.3
    },
    {
      ja: '始める前に, このビデオのスポンサーになってくれた Skillshare にお礼を言いたいです. ', 
      en: 'Before I begin, I want to thank Skillshare for sponsoring this video.',
      sec: 29.8
    },
    {
      ja: 'さて, 私は今，自由な時間を全て持っています．何に使いましょう？' ,
      en: 'So now that I have all this free time. what do I do with it?',
      sec: 34.4
    },
    {
      ja: '私の朝はとてもゆっくり始まります. いつも7時半ごろに目覚ましをかけずに起きます.' ,
      en: 'My mornings start very slow. I usually wake up around 7:30am, no alarms,',
      sec: 39.7
    },
    {
      ja: '私の体は、準備ができたときに目覚めます. それか，愛犬チュイがそろそろだよと教えてくれます。', 
      en: "My body just wakes up when it's ready. Or when my dog, Chuy, tells me it's time",
      sec: 46.6
    },
    {
      ja: 'コーヒーを淹れて, 座って考えます.', 
      en: "I make some coffee, And sit down to think. ",
      sec: 52.6
    },
    {
      ja: '朝は, 考えたり, 書いたり, 計画を立てたりするのに最適な時間だとわかりました.', 
      en: "The mornings, I've found are the best times to reflect, write, and plan.",
      sec: 56.2
    },

    {
      en: "I've recently picked up my 5-minute journal again, to help me set the right intentions for the day.", 
      ja: '最近, 一日の正しい意図を設定するために, 5分間日記を再開しました. ',
      sec: 61.4
    },
    {
      ja: '毎日のToDoリストを管理するために、私はUgmonkのアナログシステムを使い始めました。', 
      en: 'To keep track of my daily to-do list, I started using the analog system by Ugmonk.',
      sec: 68.9
    },
    {
      ja: '付箋紙システムからの良いアップグレードです．' ,
      en: 'a nice upgrate from my post-it note system',
      sec: 74.8
    },
    {
      ja: '朝は私にとってとても貴重な時間です。', 
      en: "Mornings are so precious to me.",
      sec: 79.0
    },
    {
      ja: '一日の行動を起こす前に、自分の考えと向き合う静かな時間なのです。', 
      en: "It's quite and is time for me to sit with my own thoughts before I take action for the day.",
      sec: 81.3
    },
    {
      ja: 'また、妻ベリンダが仕事に向かう前に、一緒に充実した時間を過ごすチャンスでもあります。 ', 
      en: "It's also a chance to spend quality time with my wife Belinda before she heads into work.",
      sec: 87.0
    },
    {
      ja: '午前11時半ごろから, 何か活動的なことをするようになりました.' ,
      en: 'Around, 11:30 am, I move into doing something active',
      sec: 93.1
    },
    {
      ja: 'このときが一番体が元気なときです。' ,
      en: 'This time is when my body is the most energetic.',
      sec: 97.3
    },
    {
      ja: '5分から30分程度の短時間の運動で, 血流を良くするように心がけています。', 
      en: "I try to get a short workout in, anywhere from 5 to 30 minutes to just get the blood flowing.",
      sec: 100.1
    },
    {
      ja: '私はもう仕事を持っていないので, 一日のうちこの部分をこのチャンネルのコンテンツ作りに捧げています。', 
      en: "Since I don't have a job anymore, I dedicate this part of the day to creating content for this channel",
      sec: 106.4
    },
    {
      ja: 'そして，いくつかのホームプロジェクトに取り組んでいます。', 
      en: "and working on a few home projects. ",
      sec: 112.9
    },

    {
      ja: '昨年は, 家のリフォームや DIY のプロジェクトに夢中になりました。' ,
      en: 'Last year, I really got into home improvement and DIY projects.',
      sec: 116.02
    },
    {
      ja: 'だから, 最近は自分の環境を改善するための設計やドキュメント作成、構築に時間を使っています.' ,
      en: "So I've been using my time lately to design, document, and build things that improve my environment.",
      sec: 120.4
    },
    {
      ja: 'この種の仕事が楽しい理由のひとつは, パソコンやオンラインでの忙しさから離れることができることです.', 
      en: "One reason I really enjoy this type of work is that\
           it takes me away from my computer and the busyness of being online.",
      sec: 126.8
    },
    {
      ja: '家具をつくる工程は、ゆっくり, ていねいに.', 
      en: "The process for building furniture is slow, methodical",
      sec: 133.9
    },
    {
      ja: '(家具を作る工程は，) 以前の仕事で行っていたものと比べて，歓迎すべき変化です. ', 
      en: "and is a welcome change of pace compared to what I was doing in my previous job.",
      sec: 137.8
    },

    {
      ja: '1日のうち数時間でも接続を断つことで, ゆっくりできるんです.', 
      en: "Being disconnected for a few hours in the day, helps me slow down,",
      sec: 142.4
    },

    {
      ja: '目の前の仕事に集中し、自分の考えと再び向き合います．' ,
      en: 'focus on the task at hand, and reconnect with my own thoughts',
      sec: 146.5
    },
    {
      ja: '数時間の仕事の後, 遅い時間に1食目を食べます.' ,
      en: "After a few hours of work, I eat my first meal late in the day",
      sec: 152.5
    },
    {
      ja: '普段は宅配を頼むことが多いのですが、たまに料理をすることが好きです.', 
      en: "Most of the time I order delivery, but occasionally I like to cook.",
      sec: 156.9
    },
    {
      ja: 'シンプルで栄養価が高く, お腹にたまるもの.', 
      en: "Something simple, nutritious, and filling.",
      sec: 163.3
    },
    {
      ja: '昼食後も, 体力が尽きるまで自分のプロジェクトに取り組みます.', 
      en: "After lunch, I continue to work on my projects until my energy is spent.",
      sec: 171.02
    },
    {
      ja: 'そして, もう少し受動的な活動に移行します。', 
      en: "then I move onto activities that are a little more passive.",
      sec: 176.2
    },
    {
      ja: '勉強のためにコンテンツを見ている時間帯です.', 
      en: "These are times when I watch content to study,",
      sec: 179.8
    }
    
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
        <Button onClick={() => [alert(player.getCurrentTime()), console.log(player)]}>test</Button>
      </ButtonGroup>
        <YouTube videoId="l7NeyCI8DoI" onReady={readyPlayer} style={{background:'black'}}></YouTube>
    </Paper>
    {flashCards.map((el, i) => <FlashCard {...el} player={player} index={i}></FlashCard>)}
  </>
}

export default App;
