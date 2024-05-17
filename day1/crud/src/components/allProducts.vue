<template>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="card m-3 p-0" v-for="product in allProducts" :key="product.id" style="width: 18rem;">
              <img :src="product.image" class="card-img-top w-100" height="200px" required/>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <div>
                  <a
                    type="button"
                    class="me-3 text-decoration-none text-warning"
                    @click="editProduct(product)"
                  >
                    Edit
                  </a>
  
                  <a
                    type="button"
                    @click="delete_product(product.id)"
                    class="text-decoration-none text-danger"
                  >
                    Delete
                  </a>
                </div>
                <p class="card-text text-end">${{ product.price }}</p>
              </div>
            </div>                      
          </div>
        </div>
      </div>
      
      <!-- Modal for editing product -->
      <div class="modal" :class="{ 'show': isModalVisible }">
      <div class="modal-dialog p-0">
        <div class="modal-content card">
          <!-- Modal Header -->
          <div class="card-header">
            <h4 class="modal-title">Edit Product</h4>
            <a type="button" class="close text-decoration-none text-danger" @click="hideModal">
                <h1 class="m-0 p-0">&times;</h1>
            </a>
          </div>
  
          <!-- Modal body -->
          <div class="modal-body p-0">
            <form @submit.prevent="update_product">
                <div class="mx-4 me-4 mt-3">
                    <div class="form-group mb-2">
                        <label for="editTitle">Title</label>
                        <input type="text" class="form-control" id="editTitle" v-model="editedProduct.title">
                    </div>
                    <div class="form-group mb-2">
                        <label for="editDescription">Description</label>
                        <textarea class="form-control" id="editDescription" rows="3" v-model="editedProduct.description"></textarea>
                    </div>
                    <div class="form-group mb-4">
                        <label for="editPrice">Price</label>
                        <input type="text" class="form-control" id="editPrice" v-model="editedProduct.price">
                    </div>
                </div>

                <div class="card-footer text-end">
                    <button type="submit" class="text-info text-decoration-none update">Update</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import service from "../../public/Mixins/service.js";
  
  export default {
    name: "allProducts",
    mixins: [service],
    data() {
      return {
        allProducts: [],
        editedProduct: {
          id: null,
          title: "",
          description: "",
          price: ""
        },
        isModalVisible: false
      };
    },
    methods: {
      async getProducts() {
        this.allProducts = await this.getAllProducts();
      },
      async delete_product(id) {
        if (confirm("Are you sure you want to delete this product?")) {
          await this.deleteProduct(id);
          alert("Product deleted successfully");
          this.getProducts();
        }   
      },
      editProduct(product) {
        this.editedProduct = { ...product };
        this.isModalVisible = true;
      },
      async update_product() {
        await this.updateProduct(this.editedProduct);
        alert("Product updated successfully");
        this.hideModal(); 
        this.getProducts();
      },
      hideModal() {
        this.isModalVisible = false;
      }
    },
    created() {
      this.getProducts();
    }
  };
  </script>
  
  <style lang="scss" scoped>
\    .modal {
      display: none; 
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%; 
      overflow: auto; 
    
    }
  
    .modal-dialog {
      position: relative;
      margin: 10% auto;
      padding: 30px;
      width: 60%;
      border-radius: 5px;
    }
  
    .card-header {
      padding: 0px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
    }
  
    .modal-body {
      padding: 2px 16px;
    }
  
    .show {
      display: block;
    }

    .update{
        transition: 0.5s;
        border: none;
        background: none;
    }
    .update:hover{
      letter-spacing: 3px;
    }
  </style>
  