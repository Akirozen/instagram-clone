import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )

    //! implement this one
    // const q = query(
    //   collection(db, 'posts', id, 'comments'),
    //   orderBy('timeStamp', 'desc')
    // )

    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   const comments = []
    //   querySnapshot.forEach((doc) => {
    //     comments.push(doc.data())
    //   })
    //   setComments(comments)

    //   return unsubscribe
    // })
  }, [db])

  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
