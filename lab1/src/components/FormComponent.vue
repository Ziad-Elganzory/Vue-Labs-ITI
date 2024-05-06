<template>
  <div>
    <div class="text-center mt-5">
      <div class="radio-input justify-content-center">
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
    <div v-else class="d-flex justify-content-center">
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

<!-- <style scoped>
.radio-input {
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #001734;
  font-weight: 600;
}

.radio-input input[type="radio"] {
  display: none;
}

.radio-input label {
  color: #001734;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #001734;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.radio-input label:hover {
  background-color: rgba(106, 96, 166, 0.149);
}

.radio-input label:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #ccc;
  transition: all 0.3s ease-in-out;
}

.radio-input input[type="radio"]:checked + label:before {
  background-color: #fff;
  top: 0;
}

.radio-input input[type="radio"]:checked + label {
  background-color: #001734;
  color: #fff;
  border-color: rgb(237, 237, 240);
  animation: radio-translate 0.5s ease-in-out;
}

@keyframes radio-translate {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateX(0);
  }
}

.card {
  width: 25%;
  height: auto;
  background: #f4f6fb;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px #ccc;
}

.form {
  background-color: #001734;
  color: #fff;
  padding: 25px;
}

.card_header {
  display: flex;
  align-items: center;
}

.card svg {
  color: #fff;
  margin-bottom: 20px;
  margin-right: 5px;
}

.form_heading {
  padding-bottom: 20px;
  font-size: 21px;
  color: #fff;
}

.field {
  padding-bottom: 10px;
}

.input {
  border-radius: 5px;
  background-color: #001734;
  padding: 5px;
  width: 100%;
  color: #fff;
  border: 1px solid #fff;
}

.input:focus-visible {
  outline: 1px solid #fff;
}

.input::placeholder {
  color: #fff;
}

label {
  color: #fff;
  font-size: 14px;
  display: block;
  padding-bottom: 4px;
}

button {
  background-color: #fff;
  margin-top: 10px;
  font-size: 14px;
  padding: 7px 30px;
  height: auto;
  font-weight: 500;
  color: #001734;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #fff;
}
</style> -->
