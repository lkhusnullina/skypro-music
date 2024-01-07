import {createSlice} from "@reduxjs/toolkit";

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        currentTrack: null,
        currentTrackIndex: null,
        tracks: [{},{},{},{},{},{},{},{},{},{}],
        playingTracks: [{},{},{},{},{},{},{},{},{},{}],

        isRepeat: false,
        isShuffle: false,
        isPlaying: false,
    },
    reducers: {
        // handleStart(state, action) {},
        // handleStop(state, action) {},
        // handleOnLoop(state, action) {},
        setNextTrack(state, action){
            state.currentTrackIndex++;
            state.currentTrack = state.playingTracks[state.currentTrackIndex];
        },
        setPrevTrack(state, action){
            state.currentTrackIndex--;
            state.currentTrack = state.playingTracks[state.currentTrackIndex];
        },
        shuffleTracks(state, action){
            state.isShuffle = !state.isShuffle;
            if (state.isShuffle) {
                state.playingTracks = shuffle(state.playingTracks);
            } else {
                state.playingTracks = [...state.tracks];
            }
        },
        startStop(state, action) {
            state.isPlaying = action.payload.play;
        },
        loadTracks(state, action) {
            state.tracks = action.payload.tracks;
            state.playingTracks = [...action.payload.tracks];
        }, 
        // полчую айди трека, нахожу трек в массиве playingTracks и устанавливаю в currentTrack, индекс трека устанавливаю в currentTrackIndex
        setCurrentTrack(state, action) {
            const index = state.playingTracks.findIndex(track => track.id == action.payload.id);
            if (index == -1) return;
            state.currentTrackIndex = index;
            state.currentTrack = state.playingTracks[index];
        }
    },
});

export const {setNextTrack, setPrevTrack, shuffleTracks, startStop, loadTracks, setCurrentTrack} = musicSlice.actions;
export default musicSlice.reducer;