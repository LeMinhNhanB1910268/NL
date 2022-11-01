<script>
    export default {
        props: {
            modelValue: { type: String, default: "" },
        },
        emits: ["submit", "update:modelValue"],
        methods: {
            updateModelValue(e) {
                this.$emit("update:modelValue", e.target.value);
            },
            submit() {
                this.$emit("submit");
            },
        },
    };
</script>
<template>
    <div class="input-group" style="width: 500px; margin: 0 auto;">
        <input
        type="text"
        class="form-control"
        placeholder="Nhập thông tin cần tìm"
        :value="modelValue"
        @input="updateModelValue"
        @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
            class="btn"
            type="button"
            @click="submit"
            style="height:fit-content; background-color: #1dd1a1;"
            >
                <i class="fas fa-search"></i> Tìm kiếm
            </button>
        </div>
    </div>
</template>