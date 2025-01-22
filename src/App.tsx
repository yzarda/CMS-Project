import "./App.css";
import Card from "./components/Card";

function App() {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      title: "Consetetur sadipscing elitr",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      title: "Sed diam nonumy eirmod tempor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];

  return (
    <div className="app">
      <h1>HTL Dornbirn</h1>
      <div className="button-container">
        <button className="button">Filter Öffnen</button>
        <button className="button">Hausübung Hinzufügen</button>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
