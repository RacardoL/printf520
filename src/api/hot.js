import http from './http'

export const getDetailList = (params) => {
  return http({
    url: 'GetTypeInfo',
    method: 'get',
    params: params
  })
}

export const getTypeList = (params) => {
  return http.get('GetType', params)
}
