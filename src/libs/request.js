import axios from 'axios'
import qs from 'qs'

const g = (option) => {
    const {
        url,
        params
    } = option
    return axios.get(url, {
        params: {
            ...params
        }
    })
}

const p = (option) => {
    const {
        url,
        headers,
        shuju
    } = option
    return axios.post(url, qs.stringify(shuju))
}

const modify = (option) => {
    const {
        url,
        headers,
        shuju
    } = option
    return axios.put(url, qs.stringify(shuju))
}

export default {
    g,
    p,
    modify
}

