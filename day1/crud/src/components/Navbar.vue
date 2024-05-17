<template>
    <nav class="navbar navbar-expand-lg navbar-scroll">
    <div class="container">
        <router-link to="/">
            <img src="../assets/store.png" height="70"
        loading="lazy" />
        </router-link>
      <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link
            class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
            class="nav-link" to="/products"
            >Products</router-link>
          </li>
          <li class="nav-item">
            <router-link
            class="nav-link"
            to="/addProduct"
            >Add Product</router-link>
          </li>
        </ul>
      </div>
    </div>
</nav>
</template>

<script>
    export default {
        name: 'NavBar',
    };
</script>

<style scoped>

.navbar-scroll{
    border: 1px solid rgb(198, 198, 198);
    box-shadow: 0px 0px 5px grey;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;

  position: relative;
}

.nav-link {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

.nav-link:hover {
  color: #000;
}

.nav-link::before {
  content: '';
  display: block;
  height: 5px;
  background-color: rgb(231, 231, 178);

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

.nav-link:hover::before {
  width: 100%;
}

.link-acite{
    background-color: rgb(231, 231, 178);
    color: black !important;
    border-radius: 10px;
    font-size: 18px !important;
}
</style>