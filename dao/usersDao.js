const mongoose = require("mongoose")

module.exports.login = async user => {
    try {
        const movieModel = mongoose.model("users")
        const result = await movieModel.find(user)
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("")
            }, 2000)
        })
        return result;
    } catch (e) {
        console.log('=============== login 异常: =====================');
        console.log(e);
        console.log('====================================');
    }
}

