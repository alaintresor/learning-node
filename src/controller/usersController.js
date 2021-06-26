import User from '../models/userModel';
import bcrypt from 'bcryptjs';

export const getAllStudents = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    message: 'Successfully got all students',
    users: users,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = User.find({ email });
  if (!user) {
    res.status(404).json({
      message: 'User not found',
    });
  }
  if (!bcrypt.co) {
    res.status(404).json({
      message: 'User not found',
    });
  }

  const users = await User.find({});
  res.status(200).json({
    message: 'Successfully got all students',
    users: users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPwd = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPwd });

  res.status(200).json({
    message: 'Successfully got all students',
    user,
  });
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.create({ name, email, password: hashedPwd });

  res.status(200).json({
    message: 'Successfully got all students',
    user,
  });
};
