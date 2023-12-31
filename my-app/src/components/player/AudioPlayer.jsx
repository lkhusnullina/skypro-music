import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './AudioPlayer.styles'
import { BtnIcon } from '../../App.styles'

function secondsToTimeString(seconds) {
  return (
    Math.floor(Math.round(seconds) / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    (Math.round(seconds) % 60).toString().padStart(2, '0')
  )
}

function AudioPlayer({track}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(30)
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const Realize = () => {
    alert('Еще не реализовано!')
  }

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setDuration(audioRef.current.duration);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleOnLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
  }

  const handleOffLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  }

  const toggleLoop = isLoop ? handleOffLoop : handleOnLoop;
 
  const changeTime = (val) => {
    setCurrentTime(val);
    audioRef.current.currentTime = val;
  }

  useEffect(() => {
    audioRef.current.load();
  }, [track])
  

  useEffect(() => {
    audioRef.current.addEventListener('loadedmetadata',() => {
      handleStart();
    });
  }, []);

  const handleVolumeChange = (event) => {
    let newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  }
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }, [])

  return (
    <>
    <S.TegAudio controls ref={audioRef} onTimeUpdate={(val) => setCurrentTime(val.target.currentTime)}>
      <source src={track.track_file} type="audio/mpeg" />
    </S.TegAudio>
    <S.Bar>
      <S.Content>
        <S.AudioTrackTime>
        {secondsToTimeString(currentTime)} / {secondsToTimeString(duration)}
        </S.AudioTrackTime>
        <S.BarPlayerProgress type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(event) => changeTime(event.target.value)} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev" onClick={Realize}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                  {isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                                  <rect width="5" height="19" fill="#D9D9D9"/>
                                  <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                                </svg>) : (<use xlinkHref="img/icon/sprite.svg#icon-play" />)}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next" onClick={Realize}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <BtnIcon>
                <S.PlayerBtnRepeatSvg alt="repeat"  onClick={toggleLoop} $isLoop={isLoop}>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </BtnIcon>
              <BtnIcon>
                <S.PlayerBtnShuffleSvg alt="shuffle" onClick={Realize}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </BtnIcon>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <div>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAuthorLink href="http://">
                        {track.name}
                      </S.TrackPlayAuthorLink>
                    )}
                  </div>
                </S.TrackPlayAuthor>
                <S.TrackplayAlbum>
                  <div>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAlbumLink href="http://">
                        {track.author}
                      </S.TrackPlayAlbumLink>
                    )}
                  </div>
                </S.TrackplayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <BtnIcon>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </BtnIcon>
                <BtnIcon>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </BtnIcon>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range"
                    name="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={(e) => handleVolumeChange(e)}
                    value={volume}/>
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.Content>
    </S.Bar>
    </>
  )
}

export default AudioPlayer
