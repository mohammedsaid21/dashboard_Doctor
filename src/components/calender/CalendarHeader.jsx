import React from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        {/* <button onClick={onBack} id="backButton">Back</button>
        <button onClick={onNext} id="nextButton">Next</button> */}
        <div className='flex items-center justify-between w-24'>
          <div onClick={onBack} id="backButton" className=' cursor-pointer border-2 p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all'>
            <MdOutlineArrowBackIos className='text-2xl' />
          </div>
          <div onClick={onNext} id="nextButton" className=' cursor-pointer border-2 p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all'>
            <MdArrowForwardIos className='text-2xl' />
          </div>
          
        </div>
      </div>
    </div>
  );
};