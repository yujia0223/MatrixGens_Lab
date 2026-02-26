import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, institution, message } = req.body || {};
    
    if (!name || !email || !institution || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // In production, you would save this to a database or send an email
    const id = Math.random().toString(36).substring(2, 15);
    res.status(200).json({ success: true, id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
}
