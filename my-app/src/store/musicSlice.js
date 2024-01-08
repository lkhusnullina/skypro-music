import { createSlice } from '@reduxjs/toolkit'

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentTrack: null,
    currentTrackIndex: null,
    tracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    playingTracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],

    isRepeat: false,
    isShuffle: false,
    isPlaying: false,
  },
  reducers: {
    setNextTrack(state, action) {
      const newIndex = state.currentTrackIndex + 1
      const len = state.playingTracks.length - 1
      if (newIndex > len) {
        return
      }
      state.currentTrackIndex = newIndex
      state.currentTrack = state.playingTracks[state.currentTrackIndex]
    },
    setPrevTrack(state, action) {
      const newIndex = state.currentTrackIndex - 1
      if (newIndex < 0) {
        return
      }
      state.currentTrackIndex = newIndex
      state.currentTrack = state.playingTracks[state.currentTrackIndex]
    },
    shuffleTracks(state, action) {
      state.isShuffle = !state.isShuffle
      if (state.isShuffle) {
        state.playingTracks = shuffle(state.playingTracks)
      } else {
        state.playingTracks = [...state.tracks]
      }
      if (state.currentTrack != null) {
        const i = state.playingTracks.findIndex(
          (track) => track.id == state.currentTrack.id,
        )
        state.currentTrackIndex = i
      }
    },
    startStop(state, action) {
      state.isPlaying = action.payload.play
    },
    loadTracks(state, action) {
      state.tracks = action.payload.tracks
      state.playingTracks = [...action.payload.tracks]
    },
    setCurrentTrack(state, action) {
      const index = state.playingTracks.findIndex(
        (track) => track.id == action.payload.id,
      )
      if (index == -1) return
      state.currentTrackIndex = index
      state.currentTrack = state.playingTracks[index]
    },
    repeatTracks(state, action) {
      state.isRepeat = !state.isRepeat
    },
  },
})

export const {
  setNextTrack,
  setPrevTrack,
  shuffleTracks,
  startStop,
  loadTracks,
  setCurrentTrack,
} = musicSlice.actions
export default musicSlice.reducer