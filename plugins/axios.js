export default function ({
  $axios,
  redirect
}) {
  $axios.defaults.baseURL = process.env.PRODUCTION_TYPE === 'dev' ? process.env.LARAVEL_URL_DEV :
    process.env.PRODUCTION_TYPE === 'pro' ? process.env.LARAVEL_URL_PRO : process.env.LARAVEL_URL_LIVE

  // $axios.onRequest(config => {
  //     console.log('Making request to ' + config.url)
  // })

  // $axios.onError(error => {
  //     const code = parseInt(error.response && error.response.status)
  //     if (code === 400) {
  //         redirect('/400')
  //     } else {
  //         console.log('onError ' + JSON.stringify(error.response))
  //     }
  // })
}
