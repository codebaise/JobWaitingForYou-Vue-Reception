<template>
  <div id="filter-box">
    <div class="inner home-inner">
      <header-search></header-search>
      <header-select></header-select>
    </div>
  </div>
</template>

<script>
import HeaderSelect from '@/views/Positions/HeaderSelect'
import HeaderSearch from '@/views/Positions/HeaderSearch'

export default {
  name: 'SelectHeader',
  components: {
    HeaderSelect, HeaderSearch
  }
}
</script>

<style scoped>

</style>
