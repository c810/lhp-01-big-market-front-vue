import http from './index.js';

/**
 * 装配抽奖
 * @param strategyId
 */
export const strategyArmory = (strategyId) => {
  return http({
    url: `/api/v1/raffle/strategy_armory`,
    method: 'get',
    params: { strategyId }
  });
};

/**
 * 查询抽奖奖品列表
 * @param strategyId 策略ID
 */
export const queryRaffleAwardList = (strategyId) => {
  return http({
    url: `/api/v1/raffle/query_raffle_award_list`,
    method: 'post',
    data: { strategyId }
  });
};

/**
 * 随机抽奖接口
 * @param strategyId 策略ID
 *
 * {
 * 	"code": "0000",
 * 	"info": "调用成功",
 * 	"data": {
 * 	    "awardIndex": 1, // awardIndex 获得的是列表中第几个奖品，方便测试使用
 * 		"awardId": 535,
 * 		"awardTitle": "一部手机"
 * 	}
 * }
 */
export const randomRaffle = (strategyId) => {
  return http({
    url: `/api/v1/raffle/random_raffle`,
    method: 'post',
    data: { strategyId }
  });
};