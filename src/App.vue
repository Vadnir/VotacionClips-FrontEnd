<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SessionButtoms from './components/Utils/SessionButtoms.vue';
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
						</a>

						<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
							data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-start">
							<RouterLink to="/">
								<a class="navbar-item">
									Home
								</a>
							</RouterLink>
							<div class="navbar-item has-dropdown is-hoverable">
								<RouterLink to="/">
									<a class="navbar-link">
										Opciones
									</a>
								</RouterLink>
								<div class="navbar-dropdown">
									<a class="navbar-item">
										Contacto
									</a>
									<hr class="navbar-divider">
									<a class="navbar-item">
										Reportar un Error
									</a>
								</div>
							</div>
						</div>
						<SessionButtoms />
					</div>
				</nav>
			</nav>
		</div>
	</header>
	<RouterView>

	</RouterView>
</template>

<script>
	export default {
		methods: {			
		},
	}
</script>