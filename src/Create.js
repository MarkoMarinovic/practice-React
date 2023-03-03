import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Kreso");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: { "Content-type": "application/json" }, //ovo nam govori kakve podatke saljemo, u ovom slucaju saljemo json
      body: JSON.stringify(blog), //pretvaramo blog u json objekt
    }).then(() => {
      console.log("ajmoooooo");
      setIsPending(false);
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h2>Add new tvrda stvar</h2>
      <form onSubmit={handleSubmit}>
        <label>Unesi title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Unesi body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Autor</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="kreso">Kreso</option>
          <option value="zuvi">Zuvi</option>
        </select>
        {!isPending && <button>Gotovo</button>}
        {isPending && <button>Loading...</button>}
      </form>
    </div>
  );
};

export default Create;
