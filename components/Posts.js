import React from 'react'
import Post from './Post'

const DUMMY_DATA = [
  {
    id: '123',
    username: 'saimir',
    userImg: '/images/fun-robot.jpg',
    img: '/images/robot.jpg',
    caption: 'Cool robot',
  },
  {
    id: '124',
    username: 'baraj',
    userImg: '/images/fun-robot.jpg',
    img: '/images/robot.jpg',
    caption: 'Cool robot2',
  },
]

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
