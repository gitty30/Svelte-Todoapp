<script>
	import { addTodo } from './../stores/todoStore.js';

    let todoval="";
    const handleSubmit=()=>{
        console.log(todoval)
        if(todoval=="")
        {
            alert("enter data")
        }else{
        addTodo(todoval);
        }
        todoval="";
        console.log("submitting")
    }
</script>
<form class="my-8" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col gap-3">
    <label for="todo" class="font-bold text-xl">Todos</label>
    <input class="px-3 py-2 border text-md rounded-md border-gray-400 focus:outline-none" type="text" bind:value={todoval}  name="todo"  placeholder="Write here"/>
    </div>
   
<button type="submit" class="mt-3 w-full text-md sm:text-xl bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md" >Submit</button>
</form>