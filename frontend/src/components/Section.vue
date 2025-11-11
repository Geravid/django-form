<template>
  <section class="py-5 mt-5 bg-light">
    <div class="container text-center">
      <h2 class="mb-3">{{ title }}</h2>
      <p class="lead mb-4">{{ description }}</p>

      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(img, index) in images" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <img :src="img" class="d-block w-100 rounded" alt="carousel image">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="mt-4">
        <canvas id="chart" width="400" height="200"></canvas>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  title: String,
  description: String,
  images: Array
})

onMounted(() => {
  const ctx = document.getElementById('chart')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [{
        label: 'Scientific Data',
        data: [3, 7, 5, 9],
        borderColor: '#007bff',
        tension: 0.3
      }]
    }
  })
})
</script>