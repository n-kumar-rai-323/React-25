import React from 'react'
import { useAppSelector } from './redux/hooks'

const MyComp = () => {
    const count = useAppSelector((s)=>s.counter)
  return (
    <div>
      <h1>MyCom: {count}</h1>
    </div>
  )
}

export default MyComp
