const joi = require('joi');


const schema = joi.object().keys({
    username: joi.string().trim().require('tài khoản không được để trống!').max(30, 'Tối đa 30 ký tự').min(8, 'nhỏ hơn 8 ký tự'),
    password: joi.string().trim().required('password is require!').max(30, 'max 30 charator!').min(8, 'less than 8 charator!')
})
const loginValid = (req, res, ) =>  joi.validate()