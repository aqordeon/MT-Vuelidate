<template>
    <label for="">{{props.title}}</label>
    <br>
    <input type="text" placeholder="props.title">
    <br>
</template>

<script setup>
    const props = defineProps({
        title: String,
    })

</script>

<style>
label {
    margin-bottom: 10px;
}

</style>