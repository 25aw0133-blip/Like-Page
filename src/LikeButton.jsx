import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes Count</p>
      <p>❤️ {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>+1</button>
      <p>Created by Poe Ei San.</p>
    </div>
  );
}

export default LikeButton;
