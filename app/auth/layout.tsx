interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <div className='min-h-full flex items-center justify-center'>
      {children}
    </div>
  );
}
