import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from '../actions/actions.js'
import AllDayItem from './AllDayItem.jsx'

const AllDay = () => {
  const state = useSelector(state => state.list)
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault()
    let tar = e.nativeEvent.target[0].value
    dispatch(addItem(tar))
  }
  const del = (e) => {
    e.preventDefault()
    let tar = e.nativeEvent.target[0].value
    dispatch(deleteItem(tar))
  }

  console.log('store', state)

  return (
    <div className='allDay'>

      {state && state.map((item,i) => {
        return <AllDayItem item={item} key={i} />
      })}
      <form onSubmit={e => add(e)}>
        <input></input>
        <button className='add'>Add</button>
      </form>
      <form onSubmit={e => del(e)}>
        <input></input>
        <button className='delete'>Delete</button>
      </form>

    </div>
  )
}

export default AllDay