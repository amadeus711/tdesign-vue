<template>
  <div>
    <div class="demo-checkbox-row-desc">
      选中值: {{ checked }}
    </div>
    <div class="demo-checkbox-row">
      <!-- name 非必需 -->
      <t-checkbox-group v-model="checked" :options="['选项一', '选项二', '选项三']" name='city'></t-checkbox-group>
    </div>
    <div class="demo-checkbox-row">
      <t-button @click="checked = ['选项二']" size="small">重置</t-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: ['选项二'],
    };
  },
};
</script>

<style scoped>
.demo-checkbox-row + .demo-checkbox-row {
  margin-top: 16px;
}
.demo-checkbox-row-desc {
  margin-bottom: 24px;
}
.t-checkbox + .t-checkbox,
.t-button + .t-button {
  margin-left: 16px;
}
</style>
