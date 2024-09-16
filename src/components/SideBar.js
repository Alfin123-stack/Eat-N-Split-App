import { useState } from "react";
import { FormAddFriend } from "./FormAddFriend";
import { FrindeList } from "./FrindeList";

export function SideBar({
  handleSelectedFriend,
  friends,
  handeleAddFriends,
  selectedFriend,
}) {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);

  const handleAddFormFriend = () => {
    setIsOpenAddForm(!isOpenAddForm);
    handleSelectedFriend(null);
  };

  return (
    <div className="sidebar">
      <FrindeList
        friends={friends}
        handleSelectedFriend={handleSelectedFriend}
        selectedFriend={selectedFriend}
      />

      {isOpenAddForm ? (
        <FormAddFriend
          handeleAddFriends={handeleAddFriends}
          handleAddFormFriend={handleAddFormFriend}
        />
      ) : (
        ""
      )}

      <button className="button" onClick={handleAddFormFriend}>
        {isOpenAddForm ? "close" : "Add Friend"}
      </button>
    </div>
  );
}
