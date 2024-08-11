'use client';
import Container from '@/components/shared/Container';
import { toast } from 'react-toastify';

export default function Home() {
  const notify = () => {
    toast.success('Wow so easy!');
  };
  return (
    <main>
      <Container>
        <h1 className='mx-auto text-4xl font-black'>Hello world</h1>
        <button
          onClick={notify}
          className='rounded-lg bg-gray-200 p-3 text-neutral-900'
        >
          Notify!
        </button>
      </Container>
    </main>
  );
}
