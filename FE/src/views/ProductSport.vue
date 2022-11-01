<template>
    <div class="row">
      <div class="container">
    <Slideshow />
        <div class="row">
            <ProductList
                v-if="filteredProductsCount > 0"
                :products="filteredProducts"
                v-model:activeIndex="activeIndex"
            />
        </div>
    </div>
      </div>
        
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import Slideshow from "@/components/Slideshow.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        ProductCard,
        InputSearch,
        ProductList,
        Slideshow,
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { name, clb, number, namepl } = product;
                return [name, clb, number, namepl].join("");
            });
        },
    // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredProducts() {
            if (!this.searchText) return this.products;
                return this.products.filter((_product, index) =>
                    this.productStrings[index].includes(this.searchText)

                );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ProductService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddContact() {
            this.$router.push({ name: "product.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    }
</style>