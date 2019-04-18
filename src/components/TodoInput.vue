<template>
  <div class="todo-input">
    <input
      type="text"
      :value="todoInput"
      @input="handleChangeInput"
      @keypress.enter="handleClickSubmit"
    >
    <div class="input-button" @click="handleClickSubmit">Add</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    props: ['todoInput', 'todos', 'changeTodoInput', 'addTodo'],
    methods: {
        handleChangeInput(e) {
            const { value } = e.target;
            this.$props.changeTodoInput({ value });
        },
        handleClickSubmit(e) {
            const { todos, todoInput, addTodo } = this.$props;
            if (todoInput === '') {
                return;
            }
            addTodo({
                todo: {
                    id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
                    todo: todoInput,
                },
            });
        },
    },
})
export default class TodoInput extends Vue {}
</script>

<style lang="scss">
@import '@/styles/common.scss';
.todo-input {
    width: 100%;
    border-bottom: 1px solid $theme-color;
    display: flex;
    align-items: center;
    height: 3rem;
    input {
        height: 1.5rem;
        font-size: 1.25rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border: none;
        outline: none;
        flex: 1;
    }

    .input-button {
        width: 150px;
        background: $theme-color;
        height: 100%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.25rem;
        cursor: pointer;
        user-select: none;

        &:hover {
            background: #233140;
        }

        &:active {
            background: $theme-color;
        }
    }
}
</style>
