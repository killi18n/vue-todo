<template>
  <div class="home">
    You Wanna Add Some Todos?
    <button class="goButton" v-on:click="this.goToAdd">Go To Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
    methods: {
        goToAdd() {
            this.$router.push('/todos');
        },
    },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/styles/common.scss';
.home {
    display: flex;
    flex-direction: column;
    width: 325px;
    margin: 0 auto;
    padding: 3rem;
    border: 1px solid $theme-color;
    border-radius: 3px;

    .goButton {
        width: 70%;
        margin: 0 auto;
        margin-top: 1rem;
    }
}
</style>

