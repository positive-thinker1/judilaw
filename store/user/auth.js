import baseUrl from "~/config/base.config";
import Cookie from "js-cookie";
export default {
    namespaced: true,
    state: {
        data: {}
    },
    mutations: {
        SET_DATA(state, payload) { state.data = payload; },
    },
    actions: {
        async ACTION_USER_AUTH(vueContext, inputDatas) {
            try {
                var response = "";
                this.$auth
                    .loginWith("local", inputDatas)
                    .then(response => {
                        this.$router.push("/list");
                    })
                    .catch(error => {
                        // console.log("onError " + JSON.stringify(error.response));
                        if (error.response != null && error.response != undefined)
                            vueContext.commit("SET_DATA", error.response.data);
                        else
                            vueContext.commit("SET_DATA", { status: "0", message: "Please Check your Internet connection" })
                        return error.response;
                    });
                // var response = await this.$auth.loginWith("local", inputDatas)
                // return Promise.resolve(JSON.parse(JSON.stringify(response)))
            } catch (error) {
                vueContext.commit("SET_DATA", error.response);
                return error.response;
            }
        },
        ACTION_USER_LOGOUT(vueContext, context) {
            try {
                // this.$auth.logout(/* .... */);
                Cookie.remove("auth._refresh_token.local");
                Cookie.remove("auth._token.local");
                Cookie.remove('auth.strategy');
                if (process.browser) {
                    localStorage.clear();
                }
                context.$router.go();
            } catch (e) {
                console.log(e);
            }
        },

    }
}
