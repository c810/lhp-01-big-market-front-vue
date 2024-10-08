import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userInfo: {},
        }
    },
    getters: {
        
    },
    actions: {
        async getUserInfo() {
            // this.userInfo = await fetchUserInfo();
            this.userInfo = {
                name: '张三',
                age: 18
            };
        }
    }
});