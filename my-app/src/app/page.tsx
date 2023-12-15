"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(result => {
      setData(result);
    });
  }, []);

  return (
    <div>
      <h1>Главная страница</h1>
      {data.map((el: { id: string, title:string, body:string}) => (
        <div key={el.id} className='post'>
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/${el.id}`}>Подробнее...</Link>
        </div>
      ))}
    </div>
  );
}