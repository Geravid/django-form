<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="menu in menus" :key="menu.name" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{{ menu.name }}</a>
            <ul class="dropdown-menu">
              <li v-for="sublink in menu.sublinks" :key="sublink" class="dropdown-item">
                <router-link :to="`/${menu.name.toLowerCase()}/${sublink.toLowerCase().replace(' ','-')}`">{{ sublink }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menus = [
  { name: 'Home', sublinks: ['Overview', 'Welcome', 'Highlights'] },
  { name: 'Venue', sublinks: ['Map', 'Accommodation', 'Travel'] },
  { name: 'Sessions', sublinks: ['Schedule', 'Speakers', 'Workshops'] },
  { name: 'Committees', sublinks: ['Scientific', 'Organizing', 'Advisory'] },
  { name: 'REDISYT Registration', sublinks: ['Form', 'Instructions'] },
  { name: 'Previous Events', sublinks: ['2023', '2022', '2021'] },
  { name: 'Program', sublinks: ['Day 1', 'Day 2', 'Day 3'] },
  { name: 'Poster', sublinks: ['Guidelines', 'Templates'] },
  { name: 'Tribute', sublinks: ['In Memoriam', 'Awards'] },
];
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
  letter-spacing: 1px;
}
.nav-link, .dropdown-item {
  text-transform: capitalize;
}
</style>