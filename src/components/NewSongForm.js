import React, { useState } from "react";

//access the prop inside function using object
const NewSongForm = ({addSong}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addSong(title)
    setTitle("");
    // Here you would typically send the title to a server or update the state in a parent component
    // For example: addSong(title);
    // addSong(title); // Assuming addSong is a function passed as a prop to this component
  };

  return (
    <form  onSubmit={handleSubmit} >
      <label>Song name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input type="submit" value="Add song"/>
    </form>
  );
};

export default NewSongForm;
