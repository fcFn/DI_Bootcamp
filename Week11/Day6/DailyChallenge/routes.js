const express = require('express');
const router = express.Router();
const { verifyRole } = require('./middleware/rbac');

router.get('/', (req, res) => res.send('Public Route'));
router.get('/user-profile', verifyRole('user'), (req, res) => res.send('User Profile'));
router.get('/admin-panel', verifyRole('admin'), (req, res) => res.send('Admin Panel'));

module.exports = router;
