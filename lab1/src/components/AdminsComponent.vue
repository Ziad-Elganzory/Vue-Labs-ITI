<template>
  <div>
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
        <tbody v-if="filterAdmins.length !== 0">
          <tr v-for="(admin, index) in filterAdmins" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ admin.name }}</td>
            <td>{{ admin.age }}</td>
            <td>{{ admin.role }}</td>
            <td>
              <button @click="$emit('deletingAdmin', index)">
                <i class="fa fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td :class="emptyRowStyle" colspan="4">No Data in Admin Table</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default (await import("vue")).defineComponent({
  name: "AdminsComponent",
  props: ["filterAdmins"],
  data() {
    return {
      emptyRowStyle: "emptyRow",
    };
  },
});
</script>
