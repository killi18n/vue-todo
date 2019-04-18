<template>
  <div class="todo-item">
    <div class="todo">{{todo.todo}}</div>
    <div class="remove-todo" @click="handleRemove">&times;</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    props: ['todo', 'removeTodo'],
    methods: {
        handleRemove(e) {
            const { removeTodo } = this.$props;
            const { id } = this.$props.todo;
            removeTodo(id);
        },
    },
})
export default class Todo extends Vue {}
</script>

<style lang="scss">
@import '@/styles/common.scss';
.todo-item {
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:last-child {
        border-bottom: 1px solid $theme-color;
    }

    .remove-todo {
        margin-left: auto;
        font-size: 1.5rem;
        cursor: pointer;
        user-select: none;
    }
}

.todo-item + .todo-item {
    border-top: 1px solid $theme-color;
}
</style>
