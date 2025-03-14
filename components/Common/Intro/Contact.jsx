import React from 'react';
import { CONTACTS } from '../../../constants/constants';
// import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>

        <span className='text-xs text-gray-600'>
          <a href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</a>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-gray-600 flex space-x-2'>
          <span>{CONTACTS.PHONE[0]}</span> 
          <span>|</span>
          <span>{CONTACTS.PHONE[1]}</span></span>
      </div>
    </div>
  );
};

export default Contact;
