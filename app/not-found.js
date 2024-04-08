import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" h-screen">
      <h1 className="p-20 text-4xl text-center text-black-700 tracking-widest font-semibold " >404 | Page Not Found</h1>
      <p className='text-center p-10 text-2xl'> Please return <Link href="/" className='text-xl font-bold text-blue-700'> Home </Link></p>
    </div>
  );
};
