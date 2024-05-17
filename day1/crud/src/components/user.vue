<template>
    <div>
        <div class="table-responsive">
        <table class="table table-striped">
            <thead class="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col" class="text-end">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.name">
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td class="text-end">
                <a href="#" @click="removeUser(user)" class="btn btn-sm btn-outline-danger">Remove</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'UserPage',
        props: ['users'],
        methods: {
            removeUser(user) {
                this.$emit('removeUser', user);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>