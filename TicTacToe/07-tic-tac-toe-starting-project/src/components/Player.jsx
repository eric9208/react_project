import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const [buttonText, setButtonText] = useState("Edit");

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (buttonText === "Edit") {
      setButtonText("Save");
      setIsEditing(true);
    } else {
      setButtonText("Edit");
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </li>
  );
}
