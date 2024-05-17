<template>
    <div class="myForm">
        <div class="main-form-div d-flex flex-column align-items-center">
            <h2 class="mt-2">Register</h2>
            <form class="row g-3 p-3 needs-validation" @submit.prevent="submitForm">
                <div class="mb-1">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" v-model.lazy.trim="name" required>
                    <span v-if="!name" class="text-danger">Name is required</span>
                </div>
                
                <div class="mb-1">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age" v-model.lazy.number="age" required>
                    <span v-if="!age" class="text-danger">Age is required</span>
                </div>

                <div>
                    <label for="age" class="form-label">Role</label>
                    <select class="form-select" id="role" v-model="role" required>
                        <option value="" disabled selected>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <span v-if="!role" class="text-danger">Role is required</span>
                </div>
                
                <div class="col-12 text-center">
                    <button class="btn btn-outline-success" type="submit">ADD</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterApp',
        data() {
            return {
                name: '',
                age: null,
                role: '',
            }
        },
        methods: {
            submitForm() {
                if (this.name && this.age && this.role) {
                    const data = {
                        name: this.name,
                        age: this.age,
                        role: this.role,
                    }
                    this.$emit('addData', data);
                    console.log(data);
                } else {
                    alert('Please fill in all required fields.');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.needs-validation {
    border-radius: 10px;
    width: 78%;
}

.myForm {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
}

.main-form-div {
    height: 55vh;
    width: 60vh;
    background-color: beige;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(207, 207, 207);
}
</style>
