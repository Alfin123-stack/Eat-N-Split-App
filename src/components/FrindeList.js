import { FriendCard } from "./FriendCard";

export function FrindeList({ friends, handleSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
