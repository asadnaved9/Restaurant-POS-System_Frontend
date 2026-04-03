import React from 'react'
// import { FaCheckDouble } from "react-icons/fa";
import { getRandomBG } from '../../utils';
import { useNavigate } from 'react-router-dom';


const TableCard = ({key,name,status,initials,seats}) => {

    const navigate = useNavigate();

    const handleClick = () => {
       if(status === "Booked") return;
       navigate(`/menu`);
    }

  return (
    <div onClick={handleClick} key={key} className="w-[300px] hover:bg-[#383838] bg-[#262626] p-4 rounded-lg cursor-pointer">
      <div className="flex items-center justify-between px-1">
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
        <p className={`px-2 py-1 rounded-lg ${status === "Booked" ? "bg-[#2e4a40] text-green-600" : "bg-[#664a04] text-white"}`}> {status} </p>
      </div>
      <div className='flex items-center justify-center mb-7 mt-5 '>
        <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>{initials}</h1>
      </div>
      <p className="text-[#ababab] text-xs">Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
    </div>
  )
}

export default TableCard