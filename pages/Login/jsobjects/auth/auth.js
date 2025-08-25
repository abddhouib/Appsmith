export default {
  login: async () => {
    const res = await auth_user.run();
    // Debug minimal :
    console.log("username:", Input_Username.text, "rows:", res?.length);
    if (Array.isArray(res) && res.length === 1) {
      await storeValue('user', res[0], true);
      showAlert('Connexion réussie', 'success');
      navigateTo('Suivi');
    } else {
      showAlert('Nom dutilisateur ou mot de passe incorrect.', 'error');
    }
  },
  logout: async () => { await clearStore(); navigateTo('Login'); },
  isRole: (...roles) => roles.includes(appsmith.store.user?.role),
  requireAuth: () => { if (!appsmith.store.user) navigateTo('Login'); }
	
}
