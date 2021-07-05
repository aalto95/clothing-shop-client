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
    },
    getPagesQuantity: () => {
        return instance.get('')
            .then(response => {
                return response.data.length
            })
    },
    searchProducts: (input, currentPage = 1, pageSize = 50) => {
        if (input === 'men') {
            return instance.get(`?sex=m&p=${currentPage}&l=${pageSize}`)
                .then(response => {
                    return response.data
                })
        }
        else if (input === 'women') {
            return instance.get(`?sex=f&p=${currentPage}&l=${pageSize}`)
                .then(response => {
                    return response.data
                })
        }
        else {
            return instance.get(`?search=${input}&p=${currentPage}&l=${pageSize}`)
                .then(response => {
                    return response.data
                })
        }
    },
    getSpecificItem: (id) => {
        return instance.get(`/${id}`)
            .then(response => {
                return response.data
            })
    }
}
