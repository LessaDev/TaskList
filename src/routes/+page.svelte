<script lang="ts">
    import Task from "../lib/Task.svelte";

    let titulo: string;

    interface ITask {
        id: number;
        text: string;
        completed: boolean;
        date: Date | string;
    }
    let tasks: ITask[] = [];

    function addTask() {
        tasks = [
            ...tasks,
            {
                id: tasks.length,
                text: titulo,
                completed: false,
                date: "Not termined",
            },
        ];
    }

    function removeTask(id: number) {
        const index = tasks.findIndex((obj) => obj.id === id);
        tasks.splice(index, 1);
        tasks = [...tasks];

        return null;
    }
</script>

<div
    class=" flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-stone-400 from-10% via-zinc-300 via-40% to-neutral-50 to-90% pb-8"
>
    <div class="flex justify-center items-center p-16 h-24 w-full mb-12">
        <h1 class="text-5xl font-pacifico">Cria sua lista de tarefas</h1>
    </div>

    <div>
        <input
            class="w-96 h-12 mb-2 shadow-sm rounded text-center placeholder:text-violet-500/30"
            placeholder="O que vai fazer hoje?"
            type="text"
            bind:value={titulo}
        />
        <button
            class="flex justify-center shadow-sm mb-12 p-3 gap-2 bg-pink-50/30 w-96 rounded border-2 border-dashed border-neutral-200/70 font-semibold text-neutral-500/70 hover:bg-pink-50/60"
            on:click={addTask}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    clip-rule="evenodd"
                />
            </svg>
            <span>Add Task</span>
        </button>
    </div>

    <div
        class="gap-3 space-y-3 items-center justify-center h-96 py-2 overflow-y-auto"
    >
        {#each tasks as task}
            <div class="flex flex-row items-center w-full mt-2">
                <div>
                    <Task
                        bind:id={task.id}
                        bind:content={task.text}
                        bind:completed={task.completed}
                        bind:date={task.date}
                    />
                </div>
                <div class="items-center pt-3 justify-center">
                    <button on:click={removeTask(task.id)}>
                        <svg
                            class="hover:fill-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="#000000"
                            viewBox="0 0 256 256"
                            ><path
                                d="M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"
                            /></svg
                        >
                    </button>
                </div>
            </div>
        {/each}
    </div>
</div>
