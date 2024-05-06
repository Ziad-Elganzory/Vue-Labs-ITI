<template>
  <div>
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
        <tbody v-if="filterAdmins.length !== 0">
          <tr v-for="(admin, index) in filterAdmins" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ admin.name }}</td>
            <td>{{ admin.age }}</td>
            <td>{{ admin.role }}</td>
            <td>
              <button @click="$emit('deletingAdmin', index)">
                <i>Delete</i>
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
