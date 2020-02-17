export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/list');
  } else {
    return redirect('/');
  }
}