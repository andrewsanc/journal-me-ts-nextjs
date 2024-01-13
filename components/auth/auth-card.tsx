"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Social from "./social";
import BackButton from "./back-button";

interface AuthCardProps {
  children: React.ReactNode;
  headerTitle: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function AuthCard(props: AuthCardProps) {
  const {
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
  } = props;

  return (
    <Card className='sm:w-[500px] w-[80%]'>
      <CardHeader>
        <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
          <h1 className='text-2xl text-gray-900 font-semibold tracking-wider'>
            {headerTitle}
          </h1>
          <p className='text-muted-foreground text-md'>{headerLabel}</p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className='flex flex-col gap-2'>
        {showSocial && <Social />}
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
