const { ADMIN_USER_ID } = require('../config/config');

function isAdmin(user_id) {
    return user_id.toString() === ADMIN_USER_ID;
}

module.exports = { isAdmin };
