import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Sasara wasana thuru", id: 1 },
    { title: "Nim him sewwa", id: 2 },
    { title: "budune", id: 3 },
  ]);

  const [age, setAge] = useState(20)

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }]);
  };

  // useEffect(() => {
  //   console.log('useEffect ran', songs);
  // },[songs])
  // useEffect(() => {
  //   console.log('useEffect ran', age);
  // },[age])
  // useEffect(() => {
  //   console.log('useEffect ran');
  // },[])


  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      {/* we using standard prop here */}
      {/* <button onClick={addSong}>Add a song</button> */}
      <button onClick={() => setAge(age + 1)}>Age is: { age}</button>
    </div>
  );
};

export default SongList;
