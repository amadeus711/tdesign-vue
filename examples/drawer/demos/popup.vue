<template>
  <div>
    <t-drawer
      :visible.sync="visible"
      attach="body"
      :mode="mode"
      :placement="placement"
      header="抽屉标题"
    >
      <p>抽屉的内容</p>
    </t-drawer>

    <!-- 状态控制区 -->
    <div class="tdesign-radio-button">
      抽屉弹出模式：
      <t-radio-group v-model="mode">
        <t-radio-button value="overlay">overlay</t-radio-button>
        <t-radio-button value="push">push</t-radio-button>
      </t-radio-group>
    </div>
    <br><br>
    <t-button variant="outline" @click="visible = true" >打开抽屉</t-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      mode: 'push',
      placement: 'right',
    };
  },
});
</script>
