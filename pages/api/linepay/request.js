import axios from 'axios';

export default async function handler(req, res) {
  const { cartItems, currency } = req.body;

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const orderId = `order_${Date.now()}`;

  try {
    const response = await axios.post(
      process.env.LINE_PAY_API_URL,
      {
        productName: 'Your Order',
        amount: totalAmount,
        currency,
        orderId,
        confirmUrl: `${process.env.YOUR_SITE_URL}/api/linepay/confirm`,
        confirmUrlType: 'CLIENT',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-LINE-ChannelId': process.env.LINE_PAY_CHANNEL_ID,
          'X-LINE-ChannelSecret': process.env.LINE_PAY_CHANNEL_SECRET,
        },
      }
    );

    res.status(200).json({ url: response.data.info.paymentUrl.web });
  } catch (error) {
    console.error('Line Pay request error:', error);
    res.status(500).json({ error: 'Line Pay request failed' });
  }
}
