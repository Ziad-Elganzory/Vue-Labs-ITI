import axios from 'axios';


export default {

methods: {
    async getAllProducts() 
    {
        let products = await axios.get('http://localhost:3000/products')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        })
        return products;
    },

    async addProduct(product) 
    {
        let newProduct = await axios.post('http://localhost:3000/products', product)
        .then((res) => {
            console.log(product);
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        })
        return newProduct;
    },

    async deleteProduct(id) 
    {
        let deletedProduct = await axios.delete(`http://localhost:3000/products/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        })
        return deletedProduct;
    },

    async updateProduct(product) 
    {
        let updatedProduct = await axios.put(`http://localhost:3000/products/${product.id}`, product)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        })
        return updatedProduct;
    }
}
}
