import axios from 'axios'

export const auth = axios.create({
    baseURL: "https://tenderpark.uz/api/v1/",
})
// export const main = axios.create({
//     baseURL: "https://tenderpark.uz/api/v1/",
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem('user_token')}`
//       }
// })
