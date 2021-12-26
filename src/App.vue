<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/Contact">Contactus</router-link> -->

     
  <b-navbar toggleable="lg" type="light" variant="">
    <b-navbar-brand href="#"><img src="@/assets/logo.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"> <router-link to="/home">Home</router-link> |</b-nav-item>
        <b-nav-item href="#" > <router-link to="/about">About</router-link></b-nav-item>
         <b-nav-item href="#" > <router-link to="/services">services</router-link></b-nav-item>
         <b-nav-item href="#" > <router-link to="/Contactus">Contact</router-link></b-nav-item>
        <b-nav-item href="#" > <router-link to="/Clients">Clients</router-link></b-nav-item>
         <b-nav-item href="#" > <router-link to="/Pictures">Pictures</router-link></b-nav-item>
      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>
</div>
   
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
