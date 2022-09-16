<script setup>
import { RouterLink } from "vue-router";

defineProps({
    cover: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

function getUrl(file) {
    return new URL(`/src/assets/img/${file}`, import.meta.url).href;
}
</script>

<template>
    <div class="card m-2" style="width: 20rem;">
        <img :src="getUrl(cover)" class="card-img-top" alt="Personal work">
        <div class="card-body">
            <h5 class="card-title text-primary">{{title}}</h5>
            <p class="card-text">{{desc}}</p>
            <!-- <a href="{{url}}" class="btn btn-danger">See full project</a> -->
            <RouterLink to="/summary"><button class="btn btn-danger">See full project</button></RouterLink>

        </div>
    </div>
</template>

<style>
nav li {
    text-decoration: none;
}
</style>
