<template>
    <div id="app">
        <h1>Projeto Vue</h1>
        <hr />
        <router-link to="/">Home</router-link>
        &nbsp;
        <router-link to="/desafio2">Desafio 2</router-link>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    };
</script>

<style>
</style>

