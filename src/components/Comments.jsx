import React from 'react'

const Comments = () => {
    const Comments = useFetch("/comments")
  return (
    <div>Comments</div>
  )
}

export default Comments