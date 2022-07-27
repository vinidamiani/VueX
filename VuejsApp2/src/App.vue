<template>
    <div id="app">
        <h1>Projeto Vue</h1>
        <hr />
        <router-link to="/">Home</router-link>
        &nbsp;
        <router-link to="/desafio1">Desafio 1</router-link>
        &nbsp;
        <router-link to="/desafio2">Desafio 2</router-link>
        &nbsp;
        <router-link to="/desafio3">Desafio 3</router-link>
        &nbsp;
        <router-link to="/desafio4">Desafio 4</router-link>
        &nbsp;
        <router-link to="/desafio5">Desafio 5</router-link>
        &nbsp;
        <router-link to="/projeto1">Projeto 1</router-link>
        &nbsp;
        <router-link to="/game">Game</router-link>
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

