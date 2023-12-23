import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './AudioPlayer.styles'
import { BtnIcon } from '../../App.styles'

function AudioPlayer({track}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    console.log(111111);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  //handleLoop  isLoop setIsLoop true false

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    console.log(audioRef);
    console.log(track.track_file);
    audioRef.current.load();
    
  }, [track])
  

  useEffect(() => {
    console.log('rerender');
    audioRef.current.addEventListener('loadedmetadata',() => {audioRef.current.play()});
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }, [])

  return (
    <>
     <audio controls ref={audioRef}>
        <source src={track.track_file} type="audio/mpeg" />
      </audio>
    <S.Bar>
      <S.Content>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <BtnIcon>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </BtnIcon>
              <BtnIcon>
                <S.PlayerBtnShuffleSvg alt="shuffle">
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
                <S.VolumeProgressLine type="range" name="range"/>
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
