<script>
    export default {
        props: {
            product: { type: Object, required: true },
        },
    };
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ product.name }}
        </div>
        <div class="p-1">
            <strong>CLB:</strong>
            {{ product.clb }}
        </div>
        <div class="p-1">
            <strong>So ao:</strong>
            {{ product.number }}
        </div>
        <div class="p-1">
            <strong>ten cau thu:</strong>
            {{ product.namepl }}
        </div>
        <div class="p-1">
            <strong>San pham yêu thích:&nbsp;</strong>
            <i v-if="product.shopping" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>
