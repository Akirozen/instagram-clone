import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {

  const [suggestionsName, setSuggestionsName] = useState([])
  const avatar=faker.image.people()

  const { data: session } = useSession()

  useEffect(() => {
    const suggestionsName = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestionsName(suggestionsName)

    // console.log("USER SUGGESTIONS",suggestionsName)

  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestionsName.map((profile) => (
        <Story
          key={profile.username}
          img={avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
