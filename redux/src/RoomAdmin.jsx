import { useSelector } from "react-redux";
import AddParticipant from "./AddParticipant";
import ParticipantList from "./ParticipantList";
import RoomGrid from "./RoomGrid";
import Room from "./Room";

import styles from './styles/RoomAdmin.module.css';

const RoomAdmin = () => {

  const rooms = useSelector((state) => state.participants.rooms);
  
  return (
    <div className={styles.container}>
      <h1>Room Admin</h1>
      <AddParticipant />
      <div className={styles.participantListWrapper}>
        <ParticipantList />
      </div>
      <RoomGrid>
        {rooms.map((i) => (
          <Room
            key={i}
            roomIndex={i}
          />
        ))}
      </RoomGrid>
    </div>
  );
};

export default RoomAdmin;
