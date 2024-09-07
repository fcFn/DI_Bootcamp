import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import ReactionButton from '../reactions/ReactionButton';
const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
const selectedAuthor = useSelector((state) => state.filter.selectedAuthor);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
    const filteredPosts = selectedAuthor
    ? posts.filter((post) => post.userId === selectedAuthor)
    : posts;

  content = filteredPosts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <ReactionButton postId={post.id} />
      </article>
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
