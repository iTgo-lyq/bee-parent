import request from '../index'
export function getRecognition() {
    return request({
        method: 'POST',
        url: `/image_recognition/get_recognition`
    })
}
