import React, {useState} from 'react';
import Sqaure from './Sqaure';





const Board = () => {
 const[state, setState] = useState(Array(9).fill(null))
 const[isXTurn, setIsXTurn] = useState(true);

 

 const handleClick = (index) =>{
    const copyState = [...state];
    copyState[index] = isXTurn?"X":"O";
    setState(copyState);
    setIsXTurn(!isXTurn);
 };

    return (
    <div className='board-container'>
        <div className='board-row'>
            <Sqaure onClick={() =>handleClick(0)} value={state[0]}/>
            <Sqaure onClick={() =>handleClick(1)} value={state[1]}/>
            <Sqaure onClick={() =>handleClick(2)} value={state[2]}/>
        </div>

        <div className='board-row'>
            <Sqaure onClick={() =>handleClick(3)} value={state[3]}/>
            <Sqaure onClick={() =>handleClick(4)} value={state[4]}/>
            <Sqaure onClick={() =>handleClick(5)} value={state[5]}/>

        </div>

        <div className='board-row'>
            <Sqaure onClick={() =>handleClick(6)} value={state[6]}/>
            <Sqaure onClick={() =>handleClick(7)} value={state[7]}/>
            <Sqaure onClick={() =>handleClick(8)} value={state[8]}/>

        </div>
    </div>
  )
};

export default Board;