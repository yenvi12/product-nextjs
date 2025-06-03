import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  const handleDelete = async () => {
    if (confirm('Bạn có chắc muốn xoá sản phẩm này?')) {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      router.push('/');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      {product.image && <img src={product.image} width={300} alt={product.name} />}
      <br />
      <Link href={`/edit/${product._id}`}>✏️ Sửa</Link>
      <button onClick={handleDelete}>🗑️ Xoá</button>
      <br />
      <Link href="/">← Về trang chủ</Link>
    </div>
  );
}