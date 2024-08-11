'use client';
import { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const Location = () => {
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getLocationName = async () => {
      try {
        setLoading(true);
        setCity('Loading...');
        const resonse = await fetch(
          `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_LOCATION_TOKEN}`,
        );
        const data = await resonse.json();
        if (data.status === 403 || data.status) {
          setCity(data.error.title);
          return;
        }
        setCity(data.city);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getLocationName();
  }, []);

  return (
    <div className='flex items-center justify-center gap-2'>
      <FaLocationArrow className='text-xl text-crimson-red-600' />
      <span className='text-sm'>{loading ? 'Loading...' : city}</span>
    </div>
  );
};

export default Location;
