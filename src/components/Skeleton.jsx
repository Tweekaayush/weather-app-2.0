import React from 'react'

const Skeleton = ({cls}) => {
  return (
    <div className={`${cls} animate-pulse bg-gray-400 dark:bg-gray-600 rounded`}></div>
  )
}

export default Skeleton