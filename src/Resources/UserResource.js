// resources/UserResource.js
class UserResource {
    static toJson(user) {
        return {
            type: "Users",
            id: user._id,
            attributes: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                created_at: new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'short', day: '2-digit', year: 'numeric'
                })
            }
        };
    }

    static collection(users) {
        return users.map(user => this.toJson(user));
    }
}

module.exports = UserResource;
