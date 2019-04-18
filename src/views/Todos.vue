<template>
  <div class="todo-wrapper">
    <div class="todo-title">Todos</div>
    <div class="todo-box">
      <TodoInput
        :todoInput="this.todoInput"
        :todos="this.todos"
        :changeTodoInput="this.changeTodoInput"
        :addTodo="this.addTodo"
      />
      <div v-for="(todo) in todos" v-bind:key="todo.id">
        <Todo :todo="todo" :removeTodo="removeTodo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations, mapState, mapActions } from 'vuex';
import TodoInput from '../components/TodoInput.vue';
import Todo from '../components/Todo.vue';

@Component({
    components: {
        TodoInput,
        Todo,
    },
    computed: {
        ...mapState({
            todoInput: (state: any) => state.todo.todoInput,
            todos: (state: any) => state.todo.todos,
        }),
    },
    methods: {
        ...mapMutations({
            changeTodoInput: 'changeTodoInput',
            addTodo: 'addTodo',
            removeTodo: 'removeTodo',
        }),
    },
})
export default class Todos extends Vue {}
</script>

<style lang="scss">
@import '@/styles/common.scss';
.todo-wrapper {
    display: flex;
    flex-direction: column;
    .todo-title {
        font-size: 3rem;
        border-bottom: 1px solid $theme-color;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .todo-box {
        margin-top: 1rem;
        height: 400px;
        border: 1px solid $theme-color;
        width: 500px;
        overflow-x: scroll;
    }
}
</style>

