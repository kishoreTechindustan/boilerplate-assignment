import {apiGet} from '../../utils'

export function userApi(data) {
    return apiGet('https://jsonplaceholder.typicode.com/users');
}