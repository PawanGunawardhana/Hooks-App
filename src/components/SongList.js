import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Sasara wasana thuru", id: 1 },
    { title: "Nim him sewwa", id: 2 },
    { title: "budune", id: 3 },
  ]);

  const addSongs = () => {
    setSongs([...songs, { title: "new song", id: uuidv4() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSongs}>Add a song</button>
    </div>
  );
};

export default SongList;
