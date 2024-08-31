import { Card } from "@chakra-ui/react";
import photo from "../assets/photo.jpg";

const BusinessCard = () => {
  return (
    <Card className='flex flex-col w-1/2 h-full'>
      <div className='h-1/5 w-fit'>
        <img src={photo} alt='' />
      </div>
      <div className='flex justify-center'>DAGIM ASRAT</div>
    </Card>
  );
};
export default BusinessCard;
