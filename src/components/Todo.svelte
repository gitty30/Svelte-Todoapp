<script>
	import { deleteTodo ,toggleTodoCompleted} from './../stores/todoStore.js';
    
    export let todo;
  console.log(todo.id)


</script>
<li class=" flex flex-row items-center justify-between mb-3 py-3 px-4 md:text-xl text-md  border border-gray-300">
<input name="completed" class="mr-2  h-8 w-6 " type="checkbox" checked={todo.completed} on:change={()=>toggleTodoCompleted(todo.id)}/>
<span class={`flex-1 font-bold ${todo.completed? 'line-through':''}`}>{todo.text}</span>
<button class="bg-red-600 text-white p-2 rounded-md" on:click={deleteTodo(todo.id)}>Delete</button>
</li>
