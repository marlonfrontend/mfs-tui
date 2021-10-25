<template>
  <div id="app-core">
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader'
import AppFooter from './components/layout/AppFooter'

export default {
  name: 'Core',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app-core {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.nav-core { margin-bottom: 30px; }
</style>
