import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link href={`/product/${product._id}`}>
              {product.name} - {product.price} VND
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}