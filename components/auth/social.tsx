"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { OAuthProviderType } from "next-auth/providers";

export default function Social() {
  function handleOnClick(provider: OAuthProviderType) {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        className='w-full'
        variant='outline'
        onClick={() => handleOnClick("google")}
      >
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button
        className='w-full'
        variant='outline'
        onClick={() => handleOnClick("github")}
      >
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
}
