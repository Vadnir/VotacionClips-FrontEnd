<script setup>
    import {isLoginApi, logOutApi} from '../../api/api.js'
</script>

<template>
    <div class="navbar-end">
        <div class="navbar-item">

            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Cuenta</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div v-show="!isLogin()" class="dropdown-item">
                            <RouterLink to="/user/register">
                                <a class="button is-light">
                                    <strong>Registrarse</strong>
                                </a>
                            </RouterLink>
                        </div>
                    </div>
                    <div v-show="!isLogin()" class="dropdown-content is-align-content-center">
                        <div class="dropdown-item">
                            <RouterLink to="/user/login">
                                <a class="button is-light">
                                    <strong>Ingresar</strong>
                                </a>
                            </RouterLink>
                        </div>
                    </div>
                    <div v-show="isLogin()" class="dropdown-content">
                        <div class="dropdown-item">
                            <p v-on:click="logOut()">Cerrar Sesion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-item"><h1></h1></div>
    </div>
</template>

<script>

import router from '../../router/index.js'

export default {
    methods: {
        isLogin(){
            return isLoginApi()
        },
        logOut() {
            logOutApi()
            router.push({ name: "home" })
            this.$forceUpdate()
        }
    },
}

</script>