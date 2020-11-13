export function dateToString(date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1)
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}

export function timeProcessor(timeString) {
    return dateToString(new Date(timeString))
}