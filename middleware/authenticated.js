export default function ({ store, redirect }) {
    if (!store.state.auth.token) {
      return redirect('/login');
    }
  }