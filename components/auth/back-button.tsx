import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton(props: BackButtonProps) {
  const { href, label } = props;
  return (
    <Button className='font-normal w-full' variant='link' size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
