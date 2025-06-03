import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });
  const [fileImage, setFileImage] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFileImage(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalImage = fileImage || form.image;

    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        description: form.description,
        price: Number(form.price),
        image: finalImage,
      }),
    });

    router.push('/');
  };

  return (
    <>
      <Navbar />
      <h1>Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Tên sản phẩm" onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Mô tả" onChange={handleChange} required />
        <br />
        <input name="price" type="number" placeholder="Giá" onChange={handleChange} required />
        <br />
        <label>Chọn ảnh từ máy:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br />
        <label>Hoặc nhập link ảnh:</label>
        <input name="image" placeholder="https://..." onChange={handleChange} />
        <br />
        {(fileImage || form.image) && (
          <Image
            src={fileImage || form.image}
            alt="Xem trước ảnh"
            width={150}
            height={150}
            unoptimized
            style={{ objectFit: 'cover' }}
          />
        )}
        <br />
        <button type="submit">Thêm</button>
      </form>
    </>
  );
}