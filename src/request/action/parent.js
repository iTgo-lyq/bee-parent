import request from '../index'
export function parentLogin(phone, password) {
    return request({
        method: 'POST',
        url: `/parent_user/login_by_password`,
        data: { phone, password }
    })
}
