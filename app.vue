<script setup lang="ts">
import { useWindowSize } from 'vue-window-size';
const { width } = useWindowSize();

const panjangLayar = ref(width)

</script>

<template>
  <div class="mobile-layout">
    <div class="" v-if="panjangLayar <= 550">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div v-else class="flex justify-center items-center h-screen">
      <p class="text-center">Website ini hanya mendukung untuk layar mobile, Kecilkan lebar layar jika ingin mengakses website</p>
    </div>
  </div>
</template>

<style scoped>
.mobile-layout {
  max-width: 550px;
  margin: 0 auto;
}
</style>