import { createSlice } from '@reduxjs/toolkit'
import { orderFilter } from '../constans';
import { useUserContext } from '../context/user';

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}
const user = JSON.parse(localStorage.getItem('user'));

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentTrack: null,
    currentTrackIndex: null,
    tracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    playingTracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    playlistId: null,
    filters: {
      genre: [],
      authors: []
    },
    order: orderFilter.find(of => of.value === 1),
    isRepeat: false,
    isShuffle: false,
    isPlaying: false,
  },
  reducers: {
    setOrder(state, action) {
      state.order = action.payload.value;
    },
    setFilter(state, action) {
      let { filter, value } = action.payload;
      value = value.toLowerCase();
      if (state.filters[filter] && state.filters[filter].includes(value)) {
        state.filters[filter] = state.filters[filter].filter(
          (elem) => elem !== value)
      } else {
        if (!state.filters[filter])
          state.filters[filter] = [];
        state.filters[filter].push(value);
      }
    },
    setNextTrack(state, action) {
      const newIndex = state.currentTrackIndex + 1;
      const len = state.playingTracks.length - 1;
      if (newIndex > len) {
        return;
      }
      state.currentTrackIndex = newIndex;
      state.currentTrack = state.playingTracks[state.currentTrackIndex];
    },
    setPrevTrack(state, action) {
      const newIndex = state.currentTrackIndex - 1;
      if (newIndex < 0) {
        return
      }
      state.currentTrackIndex = newIndex;
      state.currentTrack = state.playingTracks[state.currentTrackIndex];
    },
    shuffleTracks(state, action) {
      state.isShuffle = !state.isShuffle;
      if (state.isShuffle) {
        state.playingTracks = shuffle(state.playingTracks);
      } else {
        state.playingTracks = [...state.tracks];
      }
      if (state.currentTrack != null) {
        const i = state.playingTracks.findIndex(
          (track) => track.id == state.currentTrack.id,
        )
        state.currentTrackIndex = i;
      }
    },
    startStop(state, action) {
      state.isPlaying = action.payload.play;

    },
    loadTracks(state, action) {
      state.tracks = action.payload.tracks;
    },
    setCurrentTrack(state, action) {
      if (action.payload.playlistId !== state.playlistId) {
        state.playingTracks = [...state.tracks];
        state.playlistId = action.payload.playlistId;
      }
      const index = state.playingTracks.findIndex(
        (track) => track.id == action.payload.id,
      )
      if (index == -1) return
      state.currentTrackIndex = index;
      state.currentTrack = state.playingTracks[index];
    },
    repeatTracks(state, action) {
      state.isRepeat = !state.isRepeat;
    },
    setFavorite(state, action) {
      state.playingTracks = action.payload.tracks;
    },
    likeTrack(state, action) {
      const trackId = action.payload.id;
      const track = state.tracks.find((track) => track.id === trackId);
      if (!track) return;
      const findUser = track.stared_user.find((t) => t.email == user);
      if (!findUser) {
        track.stared_user[track.stared_user.length] = {email: user};
        
      }
      // я ищу  в треках трек по этому айди и если в старедюзер меня нету добавляю себя
    },
    dislikeTrack(state, action) {
      const trackId = action.payload.id;
      console.log(trackId);
      const track = state.tracks.find((track) => track.id === trackId);
      if (!track) return;
      const findUser = track.stared_user.findIndex((t) => t.email == user);
      if (findUser != -1) {
        track.stared_user.splice(findUser, 1);
      }
      //track id в пэйлоуде я ищу  в треках трек по этому айди и если в старедюзер я есть удаляю себя
    },
    clearStore(state, action) {
      state.currentTrack = null;
      state.currentTrackIndex = null;
      state.playlistId = null;
      state.tracks = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
      state.playingTracks = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
      state.isRepeat = false;
      state.isShuffle = false;
      state.isPlaying = false;
      state.filters = {
        genre: [],
        authors: []
      };
      state.order = orderFilter.find(of => of.value === 1);
    }
  },
})

export const {
  setFilter,
  setNextTrack,
  setPrevTrack,
  shuffleTracks,
  startStop,
  loadTracks,
  clearStore,
  setCurrentTrack,
  setFavorite,
  setOrder,
  likeTrack,
  dislikeTrack,
} = musicSlice.actions
export default musicSlice.reducer
