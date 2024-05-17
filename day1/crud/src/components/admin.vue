<template>
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
                <tr v-for="admin in admins" :key="admin.name">
                    <td>{{ admin.name }}</td>
                    <td>{{ admin.age }}</td>
                    <td class="text-end">
                    <a @click="removeAdmin(admin)" class="btn btn-sm btn-outline-danger">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: 'AdminPage',
        props: ['admins'],
        methods: {
            removeAdmin(admin) {
                this.$emit('removeAdmin', admin);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>