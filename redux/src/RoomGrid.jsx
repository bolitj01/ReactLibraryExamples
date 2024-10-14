import styles from './styles/RoomGrid.module.css'; // Import the CSS module

const RoomGrid = ({ children }) => {
  return (
    <div className={styles.gridContainer}>
      {children}
    </div>
  );
};

export default RoomGrid;
