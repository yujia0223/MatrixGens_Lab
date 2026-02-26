import type { VercelRequest, VercelResponse } from '@vercel/node';
import { teamData } from './_data';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(teamData);
}
