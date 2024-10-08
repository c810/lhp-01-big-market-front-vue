<template>
  <div class="home">
    <div class="title">大营销平台 - 抽奖系统</div>
    <div class="raffle-box">
      <div>
        <LuckyWheelComponent/>
      </div>
      <div>
        <LuckyGridComponent/>
      </div>
    </div>
  </div>
</template>

<script setup>
import LuckyWheelComponent from '@/components/LuckyWheel.vue';
import LuckyGridComponent from '@/components/LuckyGrid.vue';
</script>

<style lang="less" scoped>
.home {
  .title {
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .raffle-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 150px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
  color: #333;
  background: url('@/assets/bg.jpg') no-repeat center center/cover;
}
</style>