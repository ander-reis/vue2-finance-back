const jwt = require('jsonwebtoken')

function getUserId(context) {
    // Authorization: Bearer <token>
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const {userId} = jwt.verify(token, process.env.JWT_SECRET)
        return userId
    }

    throw new Error('Not autheticated!')
}

module.exports = {
    getUserId
}
