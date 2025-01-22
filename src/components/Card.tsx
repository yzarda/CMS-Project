import "./Card.css";

interface CardProps {
  title: string;
  content: string;
}

function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
}

export default Card;
