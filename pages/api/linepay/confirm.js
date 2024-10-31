import axios from 'axios';

export default async function handler(req, res) {
  const { transactionId } = req.query;
  const { orderId, amount, currency } = req.body;

  try {
    const response = await axios.post(
      `${process.env.LINE_PAY_CONFIRM_URL}${transactionId}/confirm`,
      { amount, currency },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-LINE-ChannelId': process.env.LINE_PAY_CHANNEL_ID,
          'X-LINE-ChannelSecret': process.env.LINE_PAY_CHANNEL_SECRET,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Line Pay confirmation error:', error);
    res.status(500).json({ error: 'Line Pay confirmation failed' });
  }
}
