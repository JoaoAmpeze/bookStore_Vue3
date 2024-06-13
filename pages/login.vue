<template>
	<body style="background-color: white; height: 100dvh">
	  <div>
		<v-img
		  class="mx-auto my-6"
		  max-width="228"
		/>
  
		<v-row>
		  <v-col class="mt-12">
			<v-card
			  class="mx-auto bg-white pa-12 pb-8"
			  elevation="8"
			  max-width="448"
			  rounded="lg"
			  style=""
			>
			  <div class="text-subtitle-1 text-medium-emphasis">Account</div>
	  
			  <v-text-field
				v-model="sigin.email"
				density="compact"
				placeholder="Email address"
				prepend-inner-icon="mdi-email-outline"
				variant="outlined"
			  />
	  
			  <div
				class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
			  >
				Password
				<a
				  class="text-caption text-decoration-none text-blue"
				  href="#"
				  rel="noopener noreferrer"
				  target="_blank"
				>
				  Forgot login password?</a
				>
			  </div>
	  
			  <v-text-field
				v-model="sigin.password"
				:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
				:type="visible ? 'text' : 'password'"
				density="compact"
				placeholder="Enter your password"
				prepend-inner-icon="mdi-lock-outline"
				variant="outlined"
				@click:append-inner="visible = !visible"
			  />
	  
			  <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="pegaToken">
				Log In
			  </v-btn>
	  
			  <v-card-text class="text-center">
				<v-btn
				  class="text-blue text-decoration-none"
				  to="/cadastro/"
				  rel="noopener noreferrer"
				  variant="tonal"
				>
				Inscreva-se agora <v-icon icon="mdi-chevron-right" />
				</v-btn>
			</v-card-text>
			  <v-btn class="text-capitalize" variant="tonal" to="/">
				Voltar
			  </v-btn>
			</v-card>
		  </v-col>
		</v-row>
	  </div>
	</body>
  </template>
  
  <script>
  definePageMeta({
  layout: "null",
});
  export default {
	name: 'Login',
	data: () => ({
	  sigin: {
		email: '',
		password: '',
	  },
	  visible: false,
	}),
	methods: {
	  async pegaToken() {
		if(this.sigin.email || this.sigin.password) {
		  try {
			const response = await this.$api.post(`/users/login/`, {...this.sigin});
			if(response.token) {
			  localStorage.setItem('token', response.token);
			  this.$toast.success('Login efetuado com sucesso!');
			  this.$router.push('/');
			}
		  } catch (error) {
			console.error('Erro ao fazer login:', error);
			this.$toast.error('Erro ao fazer login. Por favor, tente novamente.');
		  }
		}
	  },
	},
  };
  </script>