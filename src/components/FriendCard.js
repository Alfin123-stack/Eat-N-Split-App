export function FriendCard({ friend, handleSelectedFriend, selectedFriend }) {
  const isSeleceted = friend?.id === selectedFriend?.id;

  return (
    <li className={isSeleceted ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }>
        {friend.balance < 0
          ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
          : friend.balance > 0
          ? `${friend.name} owe You  $${Math.abs(friend.balance)}`
          : `You and ${friend.name}  are even`}
      </p>
      <button className="button" onClick={() => handleSelectedFriend(friend)}>
        {isSeleceted ? "Close" : "Select"}
      </button>
    </li>
  );
}
