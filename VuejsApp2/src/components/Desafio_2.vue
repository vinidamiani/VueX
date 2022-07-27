<template>
    <div id="desafio">
        <!-- 1) Exiba um alert quando o botão for clicado -->
        <div>
            <button v-on:click="exibirAlerta">Exibir Alerta</button>
        </div>

        <!-- 2) Escute o evento "keyup" e armazene "valor" na propriedade
            data (dica: event.target.value) -->
        <div>
            <input type="text" v-on:keyup="valor = $event.target.value">
            <p>{{ valor }}</p>
        </div>

        <!-- 3) Ajuste o exemplo 2 para disparar o evento "keydown" somente
            quando a tecla for ENTER -->
        <div>
            <input type="text" v-on:keydown.enter="alterarValor">
            <p>{{ valor }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'desafio',
        data() {
            return {
                valor: ''
            }
        },
        methods: {
            exibirAlerta() {
                alert('Estou alertando agora!');
            },
            alterarValor(event) {
                this.valor = event.target.value;
            }
        }
    }
</script>

<style scoped>
</style>