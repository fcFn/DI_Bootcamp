const { users, roles } = require('../mockData');

const verifyRole = (role) => (req, res, next) => {
  const userId = req.headers['user-id'];
  const user = users.find(u => u.id == userId);

  if (!user) {
    return res.status(401).send('User not found');
  }

  if (!roles[user.role].includes(req.path)) {
    return res.status(403).send('Access denied');
  }

  next();
};

module.exports = { verifyRole };
