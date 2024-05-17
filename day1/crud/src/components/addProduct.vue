<template>
    <div class="myForm w-25 mt-5">
        <form class="main-form-div" @submit.prevent="addNewProduct">
            <div class="mb-3">
                <label for="images" class="form-label">Image</label>
                <input type="text" class="form-control" id="images" v-model="image" required>
                <span v-if="!image" class="text-danger">Image is required</span>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
                <span v-if="!name" class="text-danger">Name is required</span>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" v-model="price" required>
                <span v-if="!price" class="text-danger">Price is required</span>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" v-model="description" required></textarea>
                <span v-if="!description" class="text-danger">Description is required</span>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-outline-success">ADD</button>
            </div>
        </form>
    </div>
</template>

<script>
    import service from '../../public/Mixins/service.js';

    export default {
        name: 'AddProductApp',
        mixins: [service],
        data() {
            return {
                name: '',
                price: '',
                description: '',
                image: '',
                defaultImageUrl: 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
            }
        },
        methods: {
            async addNewProduct() {

                if (!this.name && !this.price && !this.description && !this.image)
                {
                    return;
                }

                let imageUrl = this.image
                if (!this.isValidImageUrl(imageUrl)) 
                {
                    imageUrl = this.defaultImageUrl;
                }
                // console.log(imageUrl);

                const product = {
                    title: this.name,
                    description: this.description,
                    price: parseFloat(this.price),
                    image: imageUrl,
                };
                await this.addProduct(product);
                alert("Product added successfully");
                this.$router.push('/products');
            },

            isValidImageUrl(url) 
            {
                return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
            },
        },
        
    }
</script>

<style lang="scss" scoped>
.myForm {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
}

.main-form-div {
    width: 100%;
    background-color: beige;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(207, 207, 207);
    padding: 20px;
}
</style>
