<template>
  <section>
    <form @submit.prevent="onSubmit">
      <b-field label="username">
        <b-input type="text" v-model="username" maxlength="255" style="width:300px" required></b-input>
      </b-field>
      <b-field label="password">
        <b-input
          type="password"
          v-model="password"
          minlength="6"
          style="width:300px"
          password-reveal
        ></b-input>
      </b-field>
      <div v-if="apiError" class="error">{{apiError.message}}</div>
      <b-button native-type="submit" type="is-info">Login</b-button>
    </form>
  </section>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  layout:"menus",
  middleware: "guest",
  data() {
    return {
      username: "",
      password: "",
      errorMsg: null
    };
  },
  computed: {
    ...mapState({
      apiError: state => state.MODULE_AUTH.data
    })
  },
  methods: {
    ...mapActions({
      ACTION_LOADING: "MODULE_LOADING/ACTION_LOADING",
      ACTION_USER_AUTH: "MODULE_AUTH/ACTION_USER_AUTH"
    }),
    async onSubmit() {
      let context = this;
      context.ACTION_LOADING(true);
      try {
        let formData = new FormData();
        formData.append("email",context.username)
        formData.append("password",context.password)
        var request = {
          data: formData
        };
        var result = await context.ACTION_USER_AUTH(request);
      } catch (error) {
        return context.$nuxt.error({ statusCode: 500, message: error });
      } finally {
        context.ACTION_LOADING(false);
      }
    }
  }
};
</script>


  