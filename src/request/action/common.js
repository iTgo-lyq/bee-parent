import request from '../index'
export function getSmsCode(phone) {
    return request({
        method: 'POST',
        url: `/common/send_sms_code`,
        data: { phone }
    })
}