import { useCart } from '../contexts/CartContext';

const ShopItem = ({ name, description, price, image, onAddToCart }) => (
  <div style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
    <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
    <h2>{name}</h2>
    <p>{description}</p>
    <p>價格: {price}</p>
    <button onClick={onAddToCart}>添加到購物車</button> {/* 新增按鈕 */}
  </div>
);

export default function Shop() {
  const { addToCart } = useCart();

  const shopItems = [
    { name: '餐廳紀念T恤', description: '高品質棉質T恤，限量發售', price: 'NT$600', image: '/images/tshirt.jpg' },
    { name: '紀念杯', description: '精美印花紀念杯', price: 'NT$300', image: '/images/mug.jpg' },
    // 可依需求新增更多商品
  ];

  return (
    <div>
      <h1>線上商店</h1>
      {shopItems.map((item, index) => (
        <ShopItem
          key={index}
          {...item}
          onAddToCart={() => addToCart(item)} // 傳入 addToCart 功能
        />
      ))}
    </div>
  );
}
