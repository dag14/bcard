import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-8 bg-gray-300 justify-center flex gap-2'>
      <FaSquareXTwitter
        className='text-gray-500'
        size={32}
      />
      <FaSquareInstagram
        className='text-gray-500'
        size={32}
      />
      <FaGithubSquare className='text-gray-500' size={32} />
    </div>
  );
};
export default Footer;
