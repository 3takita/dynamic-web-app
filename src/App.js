import "./styles.css";

export default function App() {
  function demo() {
    console.log("This is a demo");
  }
  function wtf() {
    console.log("What Da Fuck!!!");
  }
  function stfu() {
    console.log("Shut Da Fuck Up!!");
  }
  return (
    <div className="page">
      <img
        src="https://thumbnails.production.thenounproject.com/_qZl4gCT4aoJFGpZPO6jpE3IJEM=/fit-in/1000x1000/photos.production.thenounproject.com/photos/5D9F002A-B336-45BA-BA28-24EDB1B748C7.jpg"
        alt="pix"
        onMouseOver={wtf}
        onClick={stfu}
      />
      <button onClick={demo}>Click Me</button>
    </div>
  );
}
