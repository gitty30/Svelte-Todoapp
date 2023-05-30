<script>
  import { todos } from "./../stores/todoStore.js";
  import "../app.css";
  import Todoform from "../components/Todoform.svelte";
  import Todo from "../components/Todo.svelte";
</script>

<div class="container mx-auto my-6 max-w-2xl px-5">
  <slot>
    <main>
      <h1
        class="text-3xl font-bold text-slate-600 text-center text-gray-800 md:text-5xl"
      >
        My Todos
      </h1>
      <Todoform />
    </main>
    {#each $todos as todo}
      <Todo {todo} />
    {/each}
  </slot>
</div>
