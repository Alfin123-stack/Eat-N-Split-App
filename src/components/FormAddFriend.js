import { useState } from "react";

export function FormAddFriend({ handeleAddFriends, handleAddFormFriend }) {
  const [friendName, setfriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48?u=118836");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!friendName || !imageUrl) return;

    const newFriend = {
      id: new Date(),
      name: friendName,
      image: `${imageUrl}?=${new Date()}`,
      balance: 0,
    };

    handeleAddFriends(newFriend);

    handleAddFormFriend();
    setfriendName("");
    setImageUrl("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendname">🧑 Friends name</label>
      <input
        id="friendname"
        type="text"
        placeholder="Friend's Name"
        value={friendName}
        onChange={(e) => setfriendName(e.target.value)}
      />

      <label htmlFor="image">📸 Image Url</label>
      <input
        id="image"
        type="text"
        placeholder="Image Url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}
