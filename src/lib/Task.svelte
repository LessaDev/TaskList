<script lang="ts">
    export let id: number;
    export let content: string;
    export let completed: boolean;
    export let date: Date | string;
</script>

<div class="flex justify-center items-center ml-6">
    <div
        class="flex justify-between items-center w-[26rem] rounded shadow-md mx-2 p-2 px-4 bg-neutral-50"
    >
        <input
            type="checkbox"
            bind:checked={completed}
            class="cursor-pointer accent-purple-300"
        />
        <input
            type="text"
            bind:value={content}
            disabled={completed}
            class="w-64 h-8 disabled:opacity-50 disabled:line-through bg-neutral-50"
        />
        <span class=" font-light text-sm opacity-50"
            >{completed ? new Date().toLocaleTimeString() : date}</span
        >
    </div>
</div>
