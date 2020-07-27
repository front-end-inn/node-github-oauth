/**
 * 用来封装github OAuth的基本操作
 */

const axios = require('axios');

module.exports = (config) => {

  // 配置
  const client = {
    id: config.githubOAuthClientID,
    name: config.githubOAuthApplicationName,
    secret: config.githubOAuthClientSecret
  }

  return {

    // 获取accessToken
    getToken: (code) => {
      return axios.get(`https://github.com/login/oauth/access_token?client_id=${client.id}&client_secret=${client.secret}&code=${code}`, {
        headers: {
          Accept: 'application/json'
        }
      })
    },

    // 获取用户数据
    getUserInfo: (token) => {
      return axios.get(`https://api.github.com/user`, {
        headers: {
          'User-Agent': client.name,
          Authorization: `token ${token}`
        }
      })
    },

    //重定向到github OAuth登录的URI
    redirectUrl: `https://github.com/login/oauth/authorize?client_id=${client.id}`

  }
}