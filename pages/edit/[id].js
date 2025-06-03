import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => setForm(data));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: Number(form.price) })
    });
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} required />
        <br />
        <textarea name="description" value={form.description} onChange={handleChange} required />
        <br />
        <input name="price" type="number" value={form.price} onChange={handleChange} required />
        <br />
        <input name="image" value={form.image} onChange={handleChange} />
        <br />
        <button type="submit">Lưu</button>
      </form>
      <br />
      <a href="/">← Về trang chủ</a>
    </div>
  );
}