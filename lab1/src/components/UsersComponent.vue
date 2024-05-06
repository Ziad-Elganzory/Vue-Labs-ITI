<template>
  <div class="container col-8 col-md-6">
    <table class="table table-bordered text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
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
              <i class="fa fa-trash text-danger"></i>
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

<!-- <style scoped>
.table {
  font-family: Avenir, Helvetica, Arial, sans-serif, Poppins;
  background: #001734;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  border-radius: 7px;
}

th {
  color: #fff;
  font-size: larger;
}

tr {
  color: #fff;
}

.emptyRow {
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
  border: none;
  background: transparent;
}
</style> -->
