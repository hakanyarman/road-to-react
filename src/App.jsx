import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { Counter } from "./components/Counter";
import Note from "./components/Note";

function App() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [isJustImportantTrue,setIsJustImportantTrue ] = useState(false);
  const [justImportantNotes, setJustImportantNotes] = useState([]);
  

  const showJustImportanNotes = () => {
    setIsJustImportantTrue(!isJustImportantTrue);
    setJustImportantNotes(notes.filter((note)=>{
      return note.important == true;
    }))

  }

  const filteredWords = words.filter((word) => {
    return word.includes(searchTerm);
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(noteObject));
    setJustImportantNotes(notes.filter((note)=>{
      return note.important == true;
    }))
    setNewNote("");

  }

  const now = new Date().getTime();

  return (
    <div>
      <Search onChange={handleChange} />
      <ul style={{ listStyle: "none" }}>
        {filteredWords.map((x, index) => {
          return (
            <li key={index}>
              {" "}
              {index + 1} {x}
            </li>
          );
        })}
      </ul>
      {now.toString()}
      <Counter />
      <h2>Add note</h2>
      <form onSubmit={addNote}>
      <input type="text" value={newNote} onChange={handleNoteChange}/>
      <button type="submit">add</button>
      </form>
      <button onClick={showJustImportanNotes}>{isJustImportantTrue ? "show all" : "show just importants"}</button>
      {!isJustImportantTrue ? notes.map((note) => {
        return <Note note={note} key={note.id}/>;
      }): justImportantNotes.map((note) => {
        return <Note note={note} key={note.id}/>;
      }) }
      {}
      
    </div>
  );
}

export default App;
