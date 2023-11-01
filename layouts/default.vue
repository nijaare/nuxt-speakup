<template>
    <div class="min-h-screen bg-slate-50 flex flex-col">
        <Transition name="fade">
            <div class="w-screen h-screen bg-black/25 absolute" @click="showNav = false" v-if="showNav"></div>
        </Transition>
        <div :class="{ '-translate-x-[32rem]': showNav == false }"
            class="bg-white transition-all duration-500 ease-in-out absolute top-0 left-0 h-screen w-1/2 flex flex-col items-center py-8 text-lg gap-2">
            <!-- <NuxtLink to="/" @click="keBeranda">Beranda</NuxtLink>
            <NuxtLink to="/konsultasi" @click="keKonsultasi">Konsultasi</NuxtLink>
            <NuxtLink to="/video" @click="keVideo">Video</NuxtLink>
            
            <a href="#">Game</a>
            <a href="#">Laporan</a> -->
            <NuxtLink v-for="page in pages" @click="pindahPage(page)" :key="page" :to="page=='Beranda' ? '/' : '/'+page" class="cursor-pointer" :class="{'text-purple-600': currentPage==page}">{{ page }}</NuxtLink>
        </div>
        <div class="navigation flex items-center justify-between px-6 bg-white h-16">
            <div class="flex items-center gap-4">
                <Icon @click="showNav = true" name="iconamoon:menu-burger-horizontal-fill" color="black" size="1.5rem" />
                <h2 class="text-lg text-purple-500 font-semibold">{{ currentPage }}</h2>
            </div>
            <div class="flex items-center gap-4">
                <img src="~/assets/img/icons8_visual_game_boy1.png" alt="">
                <NuxtLink to="/auth/login" class="text-lg">Login</NuxtLink>
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup>
var showNav = ref(false)

const pages = [
    "Beranda",
    "Konsultasi",
    "Video",
    "Games",
    "Laporan",
]

var currentPage = ref('Beranda')

function pindahPage(page) {
    showNav.value=false
    currentPage.value = page
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
</style>