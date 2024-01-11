"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button className='w-full' variant='outline' onClick={() => {}}>
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button className='w-full' variant='outline' onClick={() => {}}>
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
}
