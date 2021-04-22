import './../styles/global.scss';
import styles from './../styles/app.module.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ episodeList, setEpisodeList ] = useState([]);
  const [ currentEpisodeIndex, setCurrentEpisodeIndex ] = useState(0);
  const [ isPlayng, setIsPlayng] = useState(false)

  function play(episode){
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  function tooglePlay(){
    setIsPlayng(!isPlayng)
  }

  function setPlayingState(state: boolean){
    setIsPlayng(state)
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlayng, tooglePlay, setPlayingState}}>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
