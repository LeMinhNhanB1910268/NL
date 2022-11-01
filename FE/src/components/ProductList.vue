<script>
    export default {
        props: {
            products: { type: Array, default: {} },
            activeIndex: { type: Number, default: -1 },
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index);
            }
        }
    };
</script>
<style>
    .show-detail {
        background-color: #54a0ff;
        border-radius: 10px;
        border-color: white;
    }
</style>
<template>
    <div 
        class="card" style="margin:1% 1%; width: 23%;"  
        v-for="(product, index) in products"
        :key="product._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
        >
        <img src="https://media.vov.vn/sites/default/files/styles/large/public/2021-08/man_city_0.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{ product.clb }}</p>
            <p class="card-text">{{ product.namepl}}</p>
            <p class="card-text">{{ product.number}}</p>
            <a href="#"><button class="show-detail">Xem chi tiết sản phẩm</button></a>
        </div>
    </div>
</template>