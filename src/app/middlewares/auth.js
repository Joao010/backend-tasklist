import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { SECRET } from '../../config/auth';

export default
async(req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ error: 'Token não existe' });
  }

  const [, token] = authHeader.split(' ');

  try
  {
    const decoded = await promisify(jwt.verify)(token, SECRET);

    req.userId = decoded.id;

    return next();
  }
  catch(error)
  {
    return res.json(401).json({ error: 'Token invalido.' });
  }
}
