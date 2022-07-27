<template>
    <div id="desafio">
        <!-- 1) Exibir em "resultado" o texto 'Valor Diferente' enquanto
            "valor" for diferente de 37.
            Mostrar 'Valor Igual' quando "valor" for igual a 37 -->
        <!-- 2) Monitorar as mudança de "resultado" e reiniciar "valor"
            para 0 depois de 5 segundos (dica: setTimeout(..., 5000) -->
        <div>
            <p>Valor atual: {{ valor }}</p>
            <button @click="valor += 5">Somar 5</button>
            <button @click="valor += 1">Somar 1</button>
            <p>{{ resultado }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'desafio',
        data() {
            return {
                valor: 0
            }
        },
        computed: {
            resultado() {
                return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
            }
        },
        watch: {
            resultado() {
                setTimeout(() => {
                    this.valor = 0
                }, 5000)
            }
        }
    }
</script>

<style scoped>
</style>