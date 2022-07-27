<template>
    <div id="desafio">
        <p>Usando VueJS - {{ nome }} ({{ idade }})</p>

        <p>{{ idade * 3 }} = {{ idadeVezes3() }}</p>

        <p>{{ Math.random() }} / {{ random() }}</p>

        <div>
            <img v-bind:src="imagem" height="200">
        </div>

        <br>

        <div>
            <input type="text" v-bind:value="nome">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'desafio',
        data () {
            return {
                nome: 'Guilherme Neves',
                idade: 20,
                imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
            }
        },
        methods: {
            idadeVezes3() {
                return this.idade * 3
            },
            random() {
                return Math.random()
            }
        }
    }
</script>

<style scoped>
</style>