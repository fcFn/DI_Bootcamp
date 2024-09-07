const users = [
  { id: 1, name: 'Admin User', role: 'admin' },
  { id: 2, name: 'Regular User', role: 'user' }
];

const roles = {
  admin: ['/', '/user-profile', '/admin-panel'],
  user: ['/', '/user-profile']
};

module.exports = { users, roles };
