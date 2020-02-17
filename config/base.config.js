var api = {
    BASE_URL: process.env.PRODUCTION_TYPE == 'dev' ? process.env.LARAVEL_URL_DEV :
        process.env.PRODUCTION_TYPE == 'pro' ? process.env.LARAVEL_URL_PRO : process.env.LARAVEL_URL_LIVE
}
export default api;