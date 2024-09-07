import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReaction } from './reactionSlice';

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ postId }) => {
  const dispatch = useDispatch();
  const reactions = useSelector((state) => state.reactions[postId]);
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => dispatch(addReaction({ postId, reaction: name }))}
      >
        {reactions?.[name] > 0 ? 
          reactions[name] + " " : ""
        } {emoji}

      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
