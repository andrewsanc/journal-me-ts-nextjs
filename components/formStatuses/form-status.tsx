import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

interface FormStatusProps {
  message?: string;
  variant?: "error" | "success";
}

export default function FormStatus(props: FormStatusProps) {
  const { message, variant } = props;

  const icon =
    variant === "error" ? (
      <ExclamationTriangleIcon className='h-4 w-4' />
    ) : (
      <CheckCircledIcon className='h-4 w-4' />
    );

  const color =
    variant === "error"
      ? "bg-destructive/15 text-destructive"
      : "bg-emerald-500/15 text-emerald-500";

  return !message ? null : (
    <div
      className={`${color} p-3 rounded-md flex items-center gap-x-2 text-sm `}
    >
      {icon}
      <p>{message}</p>
    </div>
  );
}
