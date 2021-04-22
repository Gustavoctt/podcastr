import { createContext } from 'react';

type Episode = {
    title: string,
    members: string,
    thumbnail: string,
    url: string,
    duration: number,
}

type PlayerContextData = {
    episodeList: Array<Episode>;
    currentEpisodeIndex: number;
    isPlayng: boolean;
    play: (episode: Episode) => void;
    tooglePlay: () => void;
    setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);