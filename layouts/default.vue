<template>
  <div>
   <b-navbar class="navbar header has-shadow is-info">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            
          <img
            src="~assets/images.jpeg"
            alt="admin"
            height="28"
          >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item >
                Home
            </b-navbar-item>
            <b-navbar-item href="/list"> Lawyer list
            </b-navbar-item>
            <b-navbar-item href="/list1" >
                Client
            </b-navbar-item>
            <b-navbar-item >
                Case Details
            </b-navbar-item>
            <b-navbar-item >
                Solution for Case
            </b-navbar-item>
            <b-navbar-item>
                Logout
            </b-navbar-item>
            
             </template>
    </b-navbar>

    <section class="main-content columns">
      <aside class="column is-2 section">
    
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        
      ]
    }
  }
}
</script>
