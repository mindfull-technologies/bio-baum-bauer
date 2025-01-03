import React from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function ScrollToTop() {
  return (
    <div className='fixed right-4 bg-accent p-2 rounded-full bottom-4 shadow-lg hover:scale-110 duration-300'>
      <a href='#'>
        <MdKeyboardDoubleArrowUp className='text-3xl text-gray-light' />
      </a>
    </div>
  );
}
