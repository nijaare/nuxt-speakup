<template>
    <div>
        <div class="bg-bgGames h-screen flex flex-col items-center justify-center px-10 py-10">
            <div class="bg-white px-4 py-3 rounded-lg flex flex-col gap-8">
                <div class="text-center">
                    <h2 class="text-2xl">Pertanyaan</h2>
                    <p>(deskripsi mengenai pertanyaan atau clue untuk siswa) Lorem ipsum dolor sit amet consectetur. Sed arcu lectus id sed. Cursus id morbi tristique cras at quis ullamcorper diam. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div class="flex flex-col items-center">
                    <Icon name="mdi:microphone" class="text-orange-500" size="3.5rem" />
                    <p>Tekan mic untuk menjawab</p>
                </div>
                <div class="flex justify-between px-6">
                    <div class="flex flex-col">
                        <div class="bg-orange-400 w-12 h-12 flex items-center justify-center rounded-full">
                            <Icon name="material-symbols:arrow-back-ios-new-rounded" class=""/>
                        </div>
                        <p>Kembali</p>
                    </div>
                    <div class="flex flex-col">
                        <div class="bg-orange-400 w-12 h-12 flex items-center justify-center rounded-full">
                            <Icon name="material-symbols:arrow-back-ios-new-rounded" class="rotate-180"/>
                        </div>
                        <p>Lanjut</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>