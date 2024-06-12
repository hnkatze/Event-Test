import Link from "next/link";

export function Fotter() {
  return (
    <footer className='bg-gray-100 p-6 md:py-12 w-full dark:bg-darki h-1/6'>
      <div className='container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm'>
        <div className='grid gap-1'>
          <Link className='flex items-center gap-2' href='#'>
            <ComputerIcon className='h-6 w-6' />
            <span className='font-semibold'>Hector Henriquez (Katze)</span>
          </Link>
        </div>
        <div className='grid gap-1'>
          <h3 className='font-semibold'>Event Management</h3>
          <Link href='/'>All Event</Link>
          <Link href='/create'>Create One</Link>
        </div>
      </div>
      <div className='container max-w-7xl mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400'>
        <p>© 2024 Katze. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ComputerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect width='14' height='8' x='5' y='2' rx='2' />
      <rect width='20' height='8' x='2' y='14' rx='2' />
      <path d='M6 18h2' />
      <path d='M12 18h6' />
    </svg>
  );
}
