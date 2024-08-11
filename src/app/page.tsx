'use client'
import { toast } from "react-toastify";

export default function Home() {

  const notify = () => {
    toast.success('Wow so easy!');
  };
  return (
    <main>
      <h1 className='mx-auto w-1/2 text-4xl font-black'>Hello world</h1>
      <button onClick={notify} className="bg-gray-200 text-neutral-900 p-3 rounded-lg">Notify!</button>
    </main>
  );
}
