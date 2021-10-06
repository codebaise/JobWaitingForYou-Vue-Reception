const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  fillLevel: state => state.user.fillLevel,
  homeLink: state => state.user.homeLink,
  roles: state => state.user.roles,
  name: state => state.user.name,
  userType: state => state.user.userType
}
export default getters
