<template>
  <div class="container-fluid">
    <div class="row" id="adminsec">
      <p id="admin">User<br>Administration</p>
    </div>
    <div class="row" style="padding: 3%;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">userID</th>
            <th scope="col">Profile</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <th scope="row">{{ user.userID }}</th>
            <td>{{ user.profile }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row" id="productsec">
      <p id="admin">Product<br>Administration</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>

<style>
#adminsec{
    background-image: url("https://i.postimg.cc/Xv4TxfyJ/business-man-looking-data-chart-stock-market-analysis-company-growth-laptop-entrepreneur-looking-glo.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#admin{
    font-size: 5rem;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 3%;
}

#productsec{
    background-image: url("https://i.postimg.cc/GmzPxRmS/Fit-Gifts-Promotional-Products-for-Gyms-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
  