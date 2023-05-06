var bcrypt = require('bcryptjs')

// 【同步加密和验证】
// 随机字符串
var salt = bcrypt.genSaltSync(10)
// 对明文加密
var pwd1 = bcrypt.hashSync('123456', salt)
// 验证比对,返回布尔值表示验证结果 true表示一致，false表示不一致
var isOk = bcrypt.compareSync('123456', pwd1)


// 【异步加密和验证】
// 随机字符串
bcrypt.genSalt(10, (err, salt) => {
    // 对明文加密
    bcrypt.hash('123456', salt, (err, pwd) => {
        console.log(pwd)
        // 验证
        bcrypt.compare('123456', pwd, (err, isOk) => {
            console.log(isOk)
        })
    })
})
