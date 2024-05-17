<template>
    <div>
        <Register @addData="addData"/>
        <div class="d-flex justify-content-center mb-5">
            <button class="btn btn-outline-success me-3" @click="flag='user'" :users="users">User</button>
            <button class="btn btn-outline-danger" @click="flag='admin'" :admins="admins">Admin</button>
        </div>
        <KeepAlive>
            <component :is="flag" :users="users" :admins="admins" @removeUser="removeUser" @removeAdmin="removeAdmin"></component>
        </KeepAlive>
    </div>
</template>

<script>
    import user from './user.vue'
    import admin from './admin.vue'
    import Register from './Register.vue'
    export default {
        name: 'HomePage',
        components: {
            user,
            admin,
            Register
        },
        data() {
            return {
                flag: 'user',
                users: [
                    { name: 'Mohamed', age: 30 },
                    { name: 'Ahmed', age: 25 },
                ],
                admins: [
                    { name: 'Admin', age: 30 },
                    { name: 'Admin', age: 25 },
                ],
            }
        },
        methods:{
            addData(data) 
            {
                if (data.role === "admin") {
                    this.admins.push(data);
                } else {
                    this.users.push(data);
                }
            },
            removeUser(user) {
                this.users.splice(this.users.indexOf(user), 1);
            },
            removeAdmin(admin) {
                this.admins.splice(this.admins.indexOf(admin), 1);
            },
        }

    };
</script>

<style lang="scss" scoped>

</style>