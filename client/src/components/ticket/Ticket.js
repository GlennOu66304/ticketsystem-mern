import "./ticket.css";

export default function ticket(props) {
    const item = props.item
  return (
    <div className="ticket">
      <span>{item.id}</span>
    </div>
  );
}
