const User = require('../models/User');

class UserRepository {
    async findOrCreate(user_id, username, is_owner = false) {
        const [user] = await User.findOrCreate({
            where: { user_id },
            defaults: { username, is_owner },
        });
        return user;
    }
}

module.exports = new UserRepository();
