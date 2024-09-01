import { Card } from "@chakra-ui/react";
import photo from "../assets/photo.jpg";
import Footer from "./Footer";
import { Button } from "@material-tailwind/react";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const BusinessCard = () => {
  return (
    <Card className='border m-auto flex flex-col w-60'>
      <div className='w-full bg-green-700 h-fit'>
        <img className='w-full h-72' src={photo} alt='' />
      </div>
      <div className='flex justify-center font-extrabold'>
        DAGIM ASRAT
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-red-800'>Frontend Developer</p>
        <p className='font-bold'>Socials</p>
        <div className='max-w-full flex gap-2'>
          <Button
            className='flex flex-row gap-1'
            variant='outlined'
          >
            <MdEmail size={16} className='' /> Email
          </Button>{" "}
          <Button
            className='flex flex-row bg-blue-700 gap-1 text-white'
            variant='outlined'
          >
            <CiLinkedin
              size={16}
              className='bg-white text-blue-700'
            />{" "}
            LinkedIn
          </Button>
        </div>
        <div className='flex flex-col px-5 py-2'>
          <h1 className='text-xl font-bold'>About me</h1>{" "}
          <p className='text-justify text-sm'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. A esse vero nulla animi. Culpa
            optio, sapiente aspernatur beatae doloribus
            adipisci et distinctio quibusdam molestiae!
            Saepe fugit laudantium repudiandae animi
            perspiciatis.
          </p>
        </div>
        <div className='flex flex-col px-5 py-2'>
          <h1 className='text-xl font-bold'>Interests</h1>{" "}
          <p className='text-justify text-sm'>
            Books, Coding, Football, Travelling
          </p>
        </div>
        <Footer />
      </div>
    </Card>
  );
};
export default BusinessCard;
