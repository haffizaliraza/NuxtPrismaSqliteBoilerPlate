import axios from 'axios';

export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
};

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      commit('setToken', token);
      return token;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  async register(_, { username, password }) {
    try {
      await axios.post('/api/register', { username, password });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },
};
