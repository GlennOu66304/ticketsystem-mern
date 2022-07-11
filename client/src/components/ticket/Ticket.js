import "./ticket.css";
import { Link } from "react-router-dom";

export default function ticket(props) {
  const item = props.item;
  // const history = useHistory();
  return (
    <div className="ticket">
      <span className="date">{item.createdAt}</span>
      <span className="desc">{item.desc}</span>
      <span className="status2">{item.user}</span>
      
        <Link
        className="view-details"
          to={`/ticket/${item._id}`}
        >
          view
        </Link>
      
    </div>
  );
}
