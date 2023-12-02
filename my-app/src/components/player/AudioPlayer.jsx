import './AudioPlayer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
const StyledContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
const StyledBarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
const StyledPlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
const StyledPlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
const StyledTrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
const StyledTrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`
const StyledTrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
const StyledTrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
const StyledTrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
const StyledTrackplayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
const StyledTrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

const StyledTrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`
const StyledTrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
const StyledTrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
const StyledBarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`
const StyledVolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`
const StyledVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
const StyledVolumeSvg = styled.div`
  width: 13px;
  height: 18px;
  fill: transparent;
`
const StyledVolumeProgress = styled.div`
  width: 109px;
`
const StyledPlayerBtnPrev = styled.div`
  margin-right: 23px;
`
const StyledPlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`
const StyledPlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
const StyledPlayerBtnNext = styled.div`
  margin-right: 28px;
  fill: #a53939;
`
const StyledPlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
const StyledPlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
const StyledPlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

function AudioPlayer() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <StyledBar>
      <StyledContent>
        <StyledBarPlayerProgress />
        <StyledBarPlayerBlock>
          <StyledBarPlayer>
            <StyledPlayerControls>
              <StyledPlayerBtnPrev>
                <StyledPlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </StyledPlayerBtnPrevSvg>
              </StyledPlayerBtnPrev>
              <div className="player__btn-play _btn">
                <StyledPlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </StyledPlayerBtnPlaySvg>
              </div>
              <StyledPlayerBtnNext>
                <StyledPlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </StyledPlayerBtnNextSvg>
              </StyledPlayerBtnNext>
              <div className="player__btn-repeat _btn-icon">
                <StyledPlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </StyledPlayerBtnRepeatSvg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <StyledPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </StyledPlayerBtnShuffleSvg>
              </div>
            </StyledPlayerControls>
            <StyledPlayerTrackPlay>
              <StyledTrackPlayContain>
                <StyledTrackPlayImage>
                  <StyledTrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </StyledTrackPlaySvg>
                </StyledTrackPlayImage>
                <StyledTrackPlayAuthor>
                  <div>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <StyledTrackPlayAuthorLink href="http://">
                        Ты та...
                      </StyledTrackPlayAuthorLink>
                    )}
                  </div>
                </StyledTrackPlayAuthor>
                <StyledTrackplayAlbum>
                  <div>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <StyledTrackPlayAlbumLink href="http://">
                        Баста
                      </StyledTrackPlayAlbumLink>
                    )}
                  </div>
                </StyledTrackplayAlbum>
              </StyledTrackPlayContain>

              <StyledTrackPlayLikeDis>
                <div className="track-play__like _btn-icon">
                  <StyledTrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </StyledTrackPlayLikeSvg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <StyledTrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </StyledTrackPlayDislikeSvg>
                </div>
              </StyledTrackPlayLikeDis>
            </StyledPlayerTrackPlay>
          </StyledBarPlayer>
          <StyledBarVolumeBlock>
            <StyledVolumeContent>
              <StyledVolumeImage>
                <StyledVolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </StyledVolumeSvg>
              </StyledVolumeImage>
              <StyledVolumeProgress className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </StyledVolumeProgress>
            </StyledVolumeContent>
          </StyledBarVolumeBlock>
        </StyledBarPlayerBlock>
      </StyledContent>
    </StyledBar>
  )
}

export default AudioPlayer
