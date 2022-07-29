<template>
    <div>
        <ul>
            <li v-for="(nota,index) in notas" :key="index">{{nota}}</li>
        </ul>
        <input type="text" v-model="titulo" @keypress.enter="salvar" />
        <p>Total de Notas: {{totalNotas}}</p>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import { computed, ref } from "vue";

    export default {
        setup() {
            const store = useStore();

            const notas = computed(() => store.state.notas)
            const totalNotas = computed(() => store.getters.totalNotas)

            const titulo = ref("");

            function salvar() {
                store.dispatch('salvarNota', titulo.value);
                titulo.value = "";
            }

            return {
                notas,
                totalNotas,
                titulo,
                salvar
            };
        }
    };
</script>

<style scoped>
</style>