import { useParams } from "react-router";

const Topic = () => {
    let { topicName } = useParams();

    return (
        <div>Topic Name: {topicName}</div>
    )
};

export default Topic;