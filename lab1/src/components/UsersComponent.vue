<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="filterUsers.length !== 0">
        <tr v-for="(user, index) in filterUsers" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="$emit('deletingUser', index)">
              <i>Delete</i>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td :class="emptyRowStyle" colspan="4">No Data in User Table</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default (await import("vue")).defineComponent({
  name: "UsersComponent",
  props: ["filterUsers"],
  data() {
    return {
      emptyRowStyle: "emptyRow",
    };
  },
});
</script>