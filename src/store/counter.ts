import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import { el } from 'element-plus/es/locale';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: <number>10,
    }),

    getters: {
        tripleCount: (state) => {
            return state.counter * 3;
        },
    },

    actions: {
        incremente() {
            this.counter += 10;
            if (this.counter > 100) {
                ElMessage({
                    type: 'success',
                    message: '100%',
                });
                this.counter = 100;
            }
        },

        decremente() {
            this.counter -= 10;
            if (this.counter < 0) {
                ElMessage({
                    type: 'error',
                    message: '0%',
                });
                this.counter = 0;
            }
        },
    },
});
