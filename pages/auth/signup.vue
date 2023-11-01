<template>
    <div>
        <div class="relative px-12 z-0 h-screen w-screen overflow-hidden flex flex-col items-center justify-center">
            <div class="bg-bgLogin z-10 h-[46rem] w-[46rem] aspect-auto bg-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div class="z-20 bg-white w-full px-4 py-4 rounded-lg flex flex-col gap-5 border border-stone-300">
                <img src="~/assets/img/LogoSPEAK-UPMendatar.png" alt="" class="w-[10rem]">
                <form class="flex flex-col gap-3">
                    <h1 class="text-2xl">Silahkan Daftar</h1>
                    <div class="flex flex-col gap-1">
                        <p>Nama lengkap anak</p>
                        <input type="text" class="border border-stone-400 w-full rounded-md px-3 py-2" placeholder="Masukkan nama lengkap">
                    </div>
                    <div class="flex flex-col gap-1">
                        <p>Nomor Whatsapp</p>
                        <input type="text" class="border border-stone-400 w-full rounded-md px-3 py-2" placeholder="Masukkan nama lengkap">
                    </div>
                    <div class="flex flex-col gap-1">
                        <p>Kata Sandi</p>
                        <input type="text" class="border border-stone-400 w-full rounded-md px-3 py-2" placeholder="Masukkan nama lengkap">
                    </div>
                    <div class="flex flex-col gap-1">
                        <p>Ulangi Kata Sandi</p>
                        <input type="password" class="border border-stone-400 w-full rounded-md px-3 py-2" placeholder="Masukkan kata sandi">
                    </div>
                    <button class="bg-orange-400 w-full px-6 py-2 rounded-lg">Daftar</button>
                </form>
                <div class="flex gap-3 justify-center">
                    <p>Sudah punya akun?</p>
                    <NuxtLink to="/auth/login" class="text-orange-500">Masuk sekarang</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "layout1",
});
</script>