<template>
  <div>
    <LuckyGrid
        ref="myLucky"
        width="300px"
        height="300px"
        :rows="3"
        :cols="3"
        :prizes="prizes"
        :activeStyle="activeStyle"
        :blocks="blocks"
        :buttons="buttons"
        @start="startCallback"
        @end="endCallback"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { queryRaffleAwardList, randomRaffle } from '../api/raffle.js';

const myLucky = ref(null);
const prizes = ref([]);
const blocks = [{ padding: '10px', background: '#869cfa', borderRadius: '20px' }]; // 九宫格的背景色
const buttons = [
  { x: 1, y: 1, background: "#b8c5f2", fonts: [{ text: '开始', top: '35%' }] }
];
const activeStyle = { background: '#617df2' };


// 查询奖品列表
const fetchPrizes = async (strategyId) => {
  try {
    const response = await queryRaffleAwardList(strategyId);
    const { code, info, data } = response.data;
    if (code !== "0000") {
      alert("获取抽奖奖品列表失败 code:" + code + " info:" + info);
      return;
    }

    // 创建一个新的奖品数组，并保持原始顺序
    prizes.value = data.map((award, index) => {
      const positions = [
        { x: 0, y: 0, background: '#e9e8fe' },
        { x: 1, y: 0, background: '#e9e8fe' },
        { x: 2, y: 0, background: '#e9e8fe' },
        { x: 2, y: 1, background: '#e9e8fe' },
        { x: 2, y: 2, background: '#e9e8fe' },
        { x: 1, y: 2, background: '#e9e8fe' },
        { x: 0, y: 2, background: '#e9e8fe' },
        { x: 0, y: 1, background: '#e9e8fe' },
      ];

      return {
        ...positions[index],
        fonts: [{ id: award.awardId, text: award.awardTitle, top: '35%' }]
      };
    });
  } catch (error) {
    console.error('查询奖品列表失败:', error);
  }
};

// 调用随机抽奖
const fetchRandomRaffle = async (strategyId) => {
  try {
    const response = await randomRaffle(strategyId);
    const { code, info, data } = response.data;
    if (code !== "0000") {
      alert("随机抽奖失败 code:" + code + " info:" + info);
      return;
    }
    // 为了方便测试，mock 的接口直接返回 awardIndex 也就是奖品列表中第几个奖品。
    return data.awardIndex - 1;
  } catch (error) {
    console.error('随机抽奖失败:', error);
  }
};

// 页面加载时调用查询奖品列表
onMounted(() => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const strategyId = Number(queryParams.get('strategyId'));
  const strategyId = 100006;
  if (strategyId) {
    fetchPrizes(strategyId);
  }
});

// 点击抽奖按钮会触发start回调
const startCallback = () => {
  myLucky.value.play();
  setTimeout(async () => {
    // const queryParams = new URLSearchParams(window.location.search);
    // const strategyId = Number(queryParams.get('strategyId'));
    const strategyId = 100006;
    const prizeIndex = await fetchRandomRaffle(strategyId);
    if (prizeIndex !== undefined) {
      myLucky.value.stop(prizeIndex);
    }
  }, 2500);
};

// 抽奖结束会触发end回调
const endCallback = (prize) => {
  alert('恭喜你抽到【' + prize.fonts[0].text + '】奖品ID【' + prize.fonts[0].id + '】');
};
</script>