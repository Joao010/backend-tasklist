import jwt from 'jsonwebtoken';
import User from '../models/User';
import { SECRET, EXPIRESIN } from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Check if the email already exists
    const user = await User.findOne({
      where: { email }
    });
    if(!user) {
      return res.status(401).json({ error: 'Usuário não existe.' });
    }
    // Check that the password is correct
    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, SECRET, {
        expiresIn: EXPIRESIN,
      }),
    })
  }
}

export default new SessionController();
