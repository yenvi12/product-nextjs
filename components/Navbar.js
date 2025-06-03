import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      marginBottom: '20px',
      padding: '10px 20px',
      backgroundColor: '#C6E7F8',
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      fontWeight: '600',
      color: 'white',
      borderRadius: '8px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <Link href="/" style={{ color: '#0288D1', textDecoration: 'none', fontSize: '18px' }}>
        🏠 Trang chủ
      </Link>
      <span style={{ color: '#0288D1' }}>|</span>
      <Link href="/add" style={{ color: '#0288D1', textDecoration: 'none', fontSize: '18px' }}>
        ➕ Thêm sản phẩm
      </Link>
    </nav>
  );
}
