<template>
    <div class="menu-item" @mouseover="onOver" @mouseleave="onLeave">
        <router-link :to="path">{{ title }}</router-link>

        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <div v-for="(item, i) in items" :key="i" class="menu-item-inside-drop">
                    <router-link :to="{ path: item.link, hash: item.hash }">{{
                            item.title
                    }}</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DropdownView",
    props: ["title", "items", "path"],

    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        onOver() {
            this.isOpen = true;
        },
        onLeave() {
            this.isOpen = false;
        },
    },
};
</script>

<style>
.menu-item {
    position: relative;
}

.menu-item-inside-drop {
    margin: auto;
    padding: 15px 25px 15px 25px;
    font-size: 14px;
    font-weight: 560;
    text-transform: none;
    color: #000000;
}


nav .menu-item .sub-menu {
    position: absolute;
    top: calc(100% + 3px);
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    transition: ease all 0.2s;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    z-index: 2;
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}


</style>