import { useState } from "react";
import { initialFriends } from "../App";
import { FormSplitBill } from "./FormSplitBill";
import { SideBar } from "./SideBar";

export function EatAndSplit() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState([...initialFriends]);

  const handeleAddFriends = (newFriends) => {
    setFriends((prevFreinds) => [...prevFreinds, newFriends]);
  };

  const handleNewBalance = (newBalance) => {
    setFriends(
      friends.map((friend) =>
        friend.name === selectedFriend.name
          ? { ...friend, balance: friend.balance + newBalance }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((prevFriend) =>
      prevFriend?.id === friend?.id ? null : friend
    );
  };

  return (
    <div className="app">
      <SideBar
        handleSelectedFriend={handleSelectedFriend}
        friends={friends}
        handeleAddFriends={handeleAddFriends}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && (
        <FormSplitBill
          handleNewBalance={handleNewBalance}
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
