<template>
    <div>
        <span class="mr-5">
            <el-progress
                type="dashboard"
                :percentage="counterStore.counter"
                :color="colors"
            />
        </span>

        <el-button @click="counterStore.decremente" size="small" type="danger">
            <i-ep-minus />
        </el-button>
        <el-button @click="counterStore.incremente" size="small" type="primary">
            <i-ep-plus />
        </el-button>

        <div class="mt-4">
            Счетчик х3: <span>{{ counterStore.tripleCount }}</span>
        </div>

        <el-button
            :loading="isLoading"
            @click="handleLoadData"
            class="mt-10"
            type="warning"
        >
            FAKE REQUEST</el-button
        >

        <p v-for="p in 4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            facilis praesentium qui itaque ipsam, quidem aut magni commodi. Hic
            at quo, iusto quia laboriosam quae similique corporis obcaecati
            necessitatibus eligendi ipsa accusantium odio mollitia ab dolorum
            laborum eaque debitis exercitationem architecto inventore quibusdam
            aspernatur. Et, neque? Nam placeat eligendi iure repudiandae velit
            quo! Quia, a iure nesciunt mollitia delectus doloribus ab, corporis
            sint explicabo ducimus et ipsam quo repellendus dolore dolor qui
            quis exercitationem atque voluptatem? Ad dolore perspiciatis labore
            error illo placeat quidem temporibus harum? Incidunt, praesentium
            dolor molestias quae commodi voluptatibus deserunt eum numquam
            exercitationem doloremque odit nesciunt deleniti dicta maxime eos
            illo eius tenetur quo. Corrupti perspiciatis eveniet maxime quae
            quasi dolorem voluptatibus dicta eligendi quidem soluta incidunt
            libero explicabo sed nihil eos, repellendus enim. Fugit aut
            voluptatum quas perspiciatis iste laborum velit iure quibusdam in
            voluptate a, aperiam labore nisi corrupti eaque! Sed ipsa
            perferendis tempore asperiores repudiandae est commodi ea debitis,
            ipsam soluta molestias? Voluptates, odio vel! Ipsa cupiditate ex
            facilis veniam officiis alias recusandae cum reiciendis veritatis
            aliquid unde provident quidem soluta, neque numquam mollitia
            corporis obcaecati voluptas deleniti quis doloremque laudantium nisi
            sint perferendis. Libero perferendis fuga explicabo enim atque
            magnam dolor cumque, commodi repellendus sunt laboriosam harum
            facere quos velit animi quaerat ea, veritatis repellat autem
            voluptatibus est a! Dolores veritatis dolorem rerum reiciendis,
            corrupti quas molestias consectetur amet? Iure laborum perferendis
            maxime pariatur dolorum alias deleniti voluptate molestiae, quo eum
            blanditiis facilis voluptatum, dolorem aut velit dignissimos sit
            beatae at adipisci totam quidem atque explicabo libero sunt. Impedit
            fugiat aliquid eum tenetur, distinctio similique exercitationem sed
            laborum eveniet minima iure doloremque quam porro harum id officiis
            corporis vero aspernatur tempore, nam sit eligendi at. Laudantium
            suscipit, ad doloribus fugit, explicabo quisquam alias tempora autem
            qui iure repudiandae magni obcaecati! Ex, at?
        </p>
    </div>
</template>

<script setup lang="ts">
import API from '~/api';
import { useCounterStore } from '~/store/counter';
const counterStore = useCounterStore();

const isLoading = ref<boolean>(false);

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
];

const handleLoadData = (): void => {
    isLoading.value = true;
    API.getUsers().catch(() => {
        isLoading.value = false;
    });
};
</script>

<style></style>
