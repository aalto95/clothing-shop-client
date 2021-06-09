import axios from "axios";

const instance = axios.create({
    baseURL: 'https://60a0e51dd2855b00173b15c9.mockapi.io/products',
})

export const productsAPI = {
    getProducts: (currentPage = 1, pageSize = 8) => {
        return instance.get(`?p=${currentPage}&l=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}