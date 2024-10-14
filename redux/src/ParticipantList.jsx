import ParticipantCard from "./ParticipantCard";
import styles from "./styles/ParticipantList.module.css";
import { useSelector } from 'react-redux';

// ParticipantList component to display all participants not in any room
const ParticipantList = () => {
  const participants = useSelector((state) => state.participants.participants); // Access Redux state
  
  return (
    <div className={styles.participantList}>
      {participants
        .filter((participant) => participant.room === null) // Show participants without a room
        .map((p) => (
          <ParticipantCard key={p.id} participant={p} />
        ))}
    </div>
  );
};

export default ParticipantList;
