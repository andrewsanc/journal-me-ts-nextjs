import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center'>
      <Card className='sm:w-[500px] w-[80%] py-10'>
        <CardHeader>
          <div className='flex flex-col items-center gap-y-2'>
            <h1 className='sm:text-6xl text-4xl drop-shadow-md'>
              📝 JournalMe
            </h1>
            <p className='text-md sm:text-lg text'>
              A simple Journaling service
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <Button className='flex' asChild>
            <Link href='/auth/login'>Start journaling here</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
