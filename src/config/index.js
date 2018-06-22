export default {
    httpConfig: {
        baseURL: '/api/c',//dev阶段
        //baseURL: '...',//build阶段
        timeout: 1000,
        headers: {
          'X-API-KEY': 'staff_mobile_lower_apikey'
        }
    }
}