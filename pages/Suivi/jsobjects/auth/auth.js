export default {
	requireAuth() {
		if (!appsmith.store.user) {
			navigateTo('Login');
		}
	},
	logout() {
		clearStore();
		navigateTo('Login');
	},

	// Méthode correcte (avec majuscule) — tolérante à la casse/espaces
	isRole(...roles) {
		const role = (appsmith.store.user?.role || '').trim().toLowerCase();
		return roles
			.map(r => (r || '').trim().toLowerCase())
			.includes(role);
	},

	// Alias pour éviter "isrole is not defined" si tu l'as déjà utilisé en minuscules
	isrole(...roles) {
		return this.isRole(...roles);
	}
	
	
	
}
