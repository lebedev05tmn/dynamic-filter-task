'use client';

import { useParams } from 'next/navigation';

const Page = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Page;
