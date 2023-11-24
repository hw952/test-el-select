<template>
  <div>
    <el-select :suffix-icon="ArrowDown" v-for="i in 500">
      <el-option :label="'common.low'" :value="0" />
      <el-option :label="'common.middle'" :value="1" />
      <el-option :label="'common.high'" :value="2" />
      <el-option :label="'common.ext_high'" :value="3" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from "vue-material-design-icons/chevrondown.vue";
</script>

<style scoped></style>
