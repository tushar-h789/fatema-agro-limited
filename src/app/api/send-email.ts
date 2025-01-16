// pages/api/send-email.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, fullAddress, message } = req.body;

    try {
      // Sendinblue API Endpoint
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: { email: 'your-email@example.com', name: 'Your Name' }, // আপনার ইমেইল ও নাম
          to: [{ email: 'your-email@example.com' }], // রিসিভারের ইমেইল
          subject: 'নতুন যোগাযোগ বার্তা',
          htmlContent: `
            <h1>যোগাযোগের বিস্তারিত</h1>
            <p><strong>নাম:</strong> ${name}</p>
            <p><strong>ইমেইল:</strong> ${email}</p>
            <p><strong>ফোন:</strong> ${phone}</p>
            <p><strong>ঠিকানা:</strong> ${fullAddress}</p>
            <p><strong>বার্তা:</strong> ${message}</p>
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': 'your-sendinblue-api-key', // আপনার Sendinblue API Key এখানে বসান
          },
        }
      );

      if (response.status === 200) {
        res.status(200).json({ message: 'ইমেইল পাঠানো হয়েছে' });
      } else {
        res.status(400).json({ message: 'কিছু ভুল হয়েছে।' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'ইমেইল পাঠাতে ব্যর্থ হয়েছে' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
