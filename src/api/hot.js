import http from './http'

export const getDetailList = (params) => {
  return http.get('GetTypeInfo', params)
}
