<template>
    <header>
        <nav>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <div class="menu-item">
                        <dropdown-view title="acessórios" path="/acessorios" :items="acessories" @click.prevent="handleSound()"></dropdown-view>
                    </div>
                </li>
                <li>
                    <div class="menu-item">
                        <dropdown-view title="comidinhas" path="/comidinhas" :items="foods" @click.prevent="handleSound()"></dropdown-view>
                    </div>
                </li>
                <li>
                    <div class="menu-item">
                        <router-link to="/servicos" @click.prevent="handleSound()">serviços</router-link>
                    </div>
                </li>
                <li>
                    <div class="menu-item">
                        <router-link to="/" @click.prevent="handleSound()"><strong>meu amigo pet</strong></router-link>
                    </div>
                </li>
                <li v-if="authenticated">
                    <div class="menu-item">
                        <router-link to="/carrinho" @click.prevent="handleSound()">carrinho</router-link>
                    </div>
                </li>
                <li v-else>
                    <div class="menu-item">
                        <router-link class="disabled" to="/login" @click.prevent="handleSound()"> carrinho </router-link>
                    </div>
                </li>
                <li v-if="authenticated">
                    <div class="menu-item">
                        <router-link to="/perfil-cliente" @click.prevent="handleSound()">perfil</router-link>
                    </div>
                </li>
                <li v-else>
                    <div class="menu-item">
                        <router-link to="/login" @click.prevent="handleSound()">entrar</router-link>
                    </div>
                </li>
                <li v-if="authenticated">
                    <div class="menu-item">
                        <router-link class="disabled" to="/" @click="logout()" @click.prevent="handleSound()"> sair </router-link>
                    </div>
                </li>
                <li v-else>
                    <div class="menu-item">
                        <router-link to="/cadastro" @click.prevent="handleSound()">cadastrar</router-link>
                    </div>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars"
                    :class="{ 'icon-active': mobileNav }" @click.prevent="handleSound()"></i>
            </div>
            <router-link class="title-mobile" v-show="mobile" to="/"><strong>meu amigo pet</strong></router-link>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li class="menu-item">
                        <router-link to="/acessorios" @click.prevent="handleSound()">acessórios</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/comidinhas" @click.prevent="handleSound()">comidinhas</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/servicos" @click.prevent="handleSound()">serviços</router-link>
                    </li>
                    <li v-if="authenticated" class="menu-item">
                        <router-link  to="/carrinho" @click.prevent="handleSound()">carrinho</router-link>
                    </li>
                    <li v-else class="menu-item">
                        <router-link class="disabled" to="/login" @click.prevent="handleSound()"> carrinho </router-link>
                    </li>
                    <li v-if="authenticated" class="menu-item">
                        <router-link to="/perfil-cliente" @click.prevent="handleSound()">perfil</router-link>
                    </li>
                    <li v-else class="menu-item">
                        <router-link to="/login" @click.prevent="handleSound()">entrar</router-link>
                    </li>
                    <li v-if="authenticated" class="menu-item">
                        <router-link class="disabled" to="/" @click="logout()" @click.prevent="handleSound()"> sair </router-link>
                    </li>
                    <li v-else class="menu-item">
                        <router-link to="/cadastro" @click.prevent="handleSound()">cadastrar</router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>


<script>
import DropdownView from "./DropdownView.vue";
import sounds from "@/data/sounds.json";

export default {
    name: "HeaderView",

    components: {
        DropdownView,
    },

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        this.emitter.on("authenticated", (status) => {
            this.authenticated = status;
        });
    },

    methods: {
        logout() {
            this.authenticated = false;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 920) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
        },
        handleSound() {
            let objKey = Object.keys(sounds).map((key) => sounds[key]);
            let randomKey = objKey[Math.floor(Math.random() * objKey.length - 1)];
            let sound = new Audio(randomKey.sound)
            sound.play()
        }
    },

    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            authenticated: false,
            acessories: [
                {
                    title: "roupas",
                    link: "/acessorios",
                    hash: "#roupas",
                },
                {
                    title: "camas e casinhas",
                    link: "/acessorios",
                    hash: "#camas",
                },
                {
                    title: "brinquedos",
                    link: "/acessorios",
                    hash: "#brinquedos",
                },
                {
                    title: "alimentação",
                    link: "/acessorios",
                    hash: "#alimentacao",
                },
            ],
            foods: [
                {
                    title: "petiscos",
                    link: "/comidinhas",
                    hash: "#petiscos",
                },
                {
                    title: "rações",
                    link: "/comidinhas",
                    hash: "#racoes",
                },
            ],
        };
    },
};
</script>

<style>
@import "/public/assets/css/style.css";

header {
    transition: 0.5s ease all;
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    height: 20px;
    margin: 0 auto;

    @media (min-width: 1140px) {
        max-width: 1140px;
    }
}

ul,
router-link {
    font-weight: 600;
    color: #000000;
    list-style: none;
    text-decoration: none;
}

li {
    font-size: 15px;
    padding: 16px;
    margin: 0 8px 0 8px;
}

router-link {
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: solid transparent;
}

.menu-item a:active,
.menu-item a:hover,
#current_page.menu-item a:active,
#current_page.menu-item a:hover {
    color: #00c1c1;
    border-color: #00c1c1;
}

.menu-item a {
    text-decoration: none;
    color: #000000;
}


.menu-item>a.active-link {
    color: #d403b9;
}

.menu-item>a.disabled {
    color: black !important;
}

.navigation {
    display: flex;
    align-items: center;

}

.icon {
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    right: 24px;
    height: 100%;
}

i {
    cursor: pointer;
    font-size: 20px;
    transition: .8s ease all;
}

.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    max-width: 150px;
    height: 100%;
    background-color: #EDFFBD;
    top: 0;
    left: 0;
}

.dropdown-nav li {
    font-size: 18px;
    margin-left: 0;
    justify-content: center;
    align-items: center;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.title-mobile {
    font-size: 25px;
    margin-right: 75px;
    text-decoration: none;
    color: black;
}

</style>