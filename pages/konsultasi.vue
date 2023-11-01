<template>
    <div>
        <div class="bg-purple-200">
            <div class="px-8">
                <div class="flex flex-col gap-5 py-8">
                    <h2 class="text-3xl">Konsultasi mudah dengan kakak mentor yang ramah!</h2>
                    <p>Kakak mentor yang berpengalaman dalam berbicara di depan umum, siap untuk mendengarkan, memberikan saran, dan mengevaluasi kemampuan anak</p>
                    <button class="bg-orange-400 w-fit px-6 py-2 rounded-lg">Konsultasi Sekarang</button>
                    <img src="~/assets/img/image_5-removebg-preview1.png" alt="">
                </div>
                <div class="flex flex-col gap-5 py-8">
                    <h2 class="text-3xl">Bagaimana Cara Konsultasi dengan Kakak Mentor?</h2>
                    <p>Kakak mentor yang berpengalaman dalam berbicara di depan umum, siap untuk mendengarkan, memberikan saran, dan mengevaluasi kemampuan anak</p>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-6">
                        <div class="flex flex-col items-center">
                            <img src="~/assets/img/ri_game-line.png" alt="" class="bg-orange-300 px-6 py-6 rounded-full w-[5.5rem]">
                            <h2>1. Cari Kakak Mentor</h2>
                            <p>Pilih mentor pilihanmu</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/img/ri_game-line.png" alt="" class="bg-orange-300 px-6 py-6 rounded-full w-[5.5rem]">
                            <h2>1. Cari Kakak Mentor</h2>
                            <p>Pilih mentor pilihanmu</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/img/ri_game-line.png" alt="" class="bg-orange-300 px-6 py-6 rounded-full w-[5.5rem]">
                            <h2>1. Cari Kakak Mentor</h2>
                            <p>Pilih mentor pilihanmu</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/img/ri_game-line.png" alt="" class="bg-orange-300 px-6 py-6 rounded-full w-[5.5rem]">
                            <h2>1. Cari Kakak Mentor</h2>
                            <p>Pilih mentor pilihanmu</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 py-8">
                    <h2 class="text-3xl">Form Penjadwalan Konsultasi</h2>
                    <p>Jadwalkan konsultasi dengan kakak mentor untuk melatih dan mengevaluasi kemampuan berbicara di depan umum</p>
                    <form action="" class="grid gap-5">
                        <div class="">
                            <p class="text-xl">Nama Lengkap</p>
                            <input type="text" class="mt-2 w-full px-3 py-2 rounded-lg" placeholder="Masukkan Nama Lengkap ">
                        </div>
                        <button class="bg-orange-400 px-6 py-2 rounded-lg w-full text-white font-semibold">Kirim</button>
                    </form>
                </div>

                <div class="flex flex-col gap-5 py-8">
                    <h2 class="text-3xl">Daftar Kakak Mentor</h2>
                    <p>Mereka dapat membantu anak untuk mencapai kemudahan dalam berlatih berbicara di depan umum.</p>
                    <div class="flex justify-end">
                        <button class="text-orange-500 underline">Lihat semua</button>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <a :href="'https://api.whatsapp.com/send?phone='+mentor.noTelp" class="bg-white px-4 py-2 rounded-lg" v-for="mentor of semuaMentor">
                            <NuxtImg :src="'/img/'+mentor.img" class="object-cover w-full h-[9rem] rounded-lg mb-2"/>
                            <h2 class="font-semibold">{{ mentor.nama }}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const semuaMentor = [
    {
        nama: 'Fathan Zhafiri',
        noTelp: '628111113043',
        img: 'a.jpg'
    },
    {
        nama: 'Inka Puspadharma',
        noTelp: '6282115863629',
        img: 'b.jpg'
    },
    {
        nama: 'Sofiyatun Hasanah',
        noTelp: '6281288053190',
        img: 'c.jpg'
    },
    {
        nama: 'Muhammad Nizar Ali',
        noTelp: '6285245561226',
        img: 'd.jpg'
    },
]
</script>