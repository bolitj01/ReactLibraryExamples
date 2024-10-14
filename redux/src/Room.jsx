import ParticipantCard from "./ParticipantCard";
import styles from "./styles/Room.module.css";
import { useDispatch } from 'react-redux';
import { addToRoom } from './participantsReducer';

// Room component that handles drag and drop of participants into the room
const Room = ({ roomIndex }) => {
  const participants = useSelector((state) => state.participants.participants); // Access Redux state
  const dispatch = useDispatch();

  const handleDrop = (e) => {
    e.preventDefault();
    const participantId = e.dataTransfer.getData("participantId");
    dispatch(addToRoom({participantId, roomIndex}));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow the drop action
  };

  return (
    <div
      className={styles.roomContainer}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h3>Room {roomIndex + 1}</h3>
      {participants.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
    </div>
  );
};

export default Room;
