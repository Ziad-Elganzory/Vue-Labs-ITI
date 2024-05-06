<template>
  <div>
    <div>
      <div>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="value-1"
          :class="HeaderBtn"
          @click="checkValue('Form')"
        />
        <label for="value-1">Form</label>
        <input
          type="radio"
          id="value-2"
          name="value-radio"
          value="value-2"
          :class="HeaderBtn"
          @click="checkValue('Admins')"
        />
        <label for="value-2">Admin</label>
        <input
          type="radio"
          id="value-3"
          name="value-radio"
          value="value-3"
          :class="HeaderBtn"
          @click="checkValue('Users')"
        />
        <label for="value-3">User</label>
      </div>
    </div>
    <div v-if="btn === 'Admins'">
      <AdminsComponent
        :filterAdmins="filterAdmins"
        @deletingAdmin="DeleteAdmin"
      />
    </div>
    <div v-else-if="btn === 'Users'">
      <UsersComponent :filterUsers="filterUsers" @deletingUser="DeleteUser" />
    </div>
    <div v-else>
      <!-- Form Structure -->
      <form class="form card" @submit.prevent="AddNew">
        <div class="card_header">
          <h1 class="form_heading">Registration</h1>
        </div>
        <div class="field">
          <label for="name">Name</label>
          <input
            class="input"
            name="name"
            type="text"
            placeholder="Enter Name"
            id="name"
            v-model.trim.lazy="formValues.name"
          />
        </div>
        <div class="field">
          <label for="age">Age</label>
          <input
            class="input"
            name="age"
            type="number"
            placeholder="Enter Age"
            id="age"
            v-model.number.lazy="formValues.age"
          />
        </div>
        <div class="field">
          <label for="role">Role</label>
          <select
            v-model.lazy="formValues.role"
            placeholder="Choose Role"
            class="input"
            name="role"
          >
            <option disabled selected value="">Choose Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div class="field">
          <button class="button" id="add" type="submit">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminsComponent from "./AdminsComponent.vue";
import UsersComponent from "./UsersComponent.vue";

export default (await import("vue")).defineComponent({
  name: "FormComponent",
  components: {
    AdminsComponent,
    UsersComponent,
  },
  data() {
    return {
      btn: "Form",
      formDataArray: [],
      formValues: {
        name: "",
        age: "",
        role: "",
      },
    };
  },
  methods: {
    AddNew() {
      this.formDataArray.push(this.formValues);
      this.formValues = {
        name: "",
        age: "",
        role: "",
      };
    },
    checkValue(val) {
      if (val === "Form") this.btn = "Form";
      else if (val === "Admins") this.btn = "Admins";
      else if (val === "Users") this.btn = "Users";
      else this.btn = "Form";
    },
    DeleteAdmin(index) {
      this.filterAdmins.splice(index, 1);
    },
    DeleteUser(index) {
      this.filterUsers.splice(index, 1);
    },
  },
  computed: {
    filterAdmins() {
      return this.formDataArray.filter((d) => d.role === "Admin");
    },
    filterUsers() {
      return this.formDataArray.filter((d) => d.role === "User");
    },
  },
});
</script>