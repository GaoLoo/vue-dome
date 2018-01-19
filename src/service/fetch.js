import fetch from '../config/fetch'

// 商品
export const commodityApi = {
  async list (params) {
    return fetch.get('/demo', params)
  }
}
