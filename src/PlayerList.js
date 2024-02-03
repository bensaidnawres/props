import React from 'react'
import Player from './Player'
import players from './data'
function PlayerList() {

  
  return (
    <div>
       
    {players.map((el)=> < Player   el={el} />) }
     
    </div>
  )
}

export default PlayerList