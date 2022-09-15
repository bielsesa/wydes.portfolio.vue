<!-- <script setup>
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
</script> -->

<script>
export default {
    props: {
        cover: String,
        title: String,
        desc: String,
        url: String,
    },
    methods: {
        getUrl(file) {
            return new URL(`/src/assets/img/${file}`, import.meta.url).href;
        }
    }
    // created() {
    //     // import coverURLimport from this.cover;
    //     // props are exposed on `this`
    //     console.log(this.cover);
    //     const coverURL = new URL(this.cover, import.meta.url).href
    //     console.log(coverURL);
    // }
}
</script>

<template>
    <div class="card m-2" style="width: 20rem;">
        <img :src="getURL(cover)" class="card-img-top" alt="Personal work">
        <div class="card-body">
            <h5 class="card-title text-primary">{{title}}</h5>
            <p class="card-text">{{desc}}</p>
            <a href="{{url}}" class="btn btn-danger">See full project</a>
        </div>
    </div>
</template>