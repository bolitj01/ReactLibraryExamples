// participantsReducer.js
import { createSlice } from '@reduxjs/toolkit';
import Participant from './Participant';

const initialState = {
  participants: [],
  rooms: Array.from({ length: 9 }, (_, i) => i),  // Array of rooms by #
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      state.participants.push(new Participant(action.payload));
    },
    removeParticipant: (state, action) => {
      state.participants = state.participants.filter(
        (participant) => participant.id !== action.payload
      );
    },
    addToRoom: (state, action) => {
      const { participantId, room } = action.payload;
      const participant = state.participants.find((p) => p.id === participantId);
      if (participant) {
        participant.room = room;  // Assign room to the participant
      }
    },
  },
});

export const { addParticipant, removeParticipant, addToRoom } = participantsSlice.actions;

export default participantsSlice.reducer;
