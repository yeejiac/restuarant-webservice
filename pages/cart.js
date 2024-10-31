import { useCart } from '../contexts/CartContext';
import { useRouter } from 'next/router';

export default function Cart() {
  const { cartItems } = useCart();
  const router = useRouter();

  const handleCheckout = async () => {
    const response = await fetch('/api/linepay/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems, currency: 'TWD' }),
    });
    const data = await response.json();
    if (data.url) {
      router.push(data.url); // Redirect to Line Pay
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout with Line Pay</button>
    </div>
  );
}
