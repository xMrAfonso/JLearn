<script>
    export let isPrime = false;
    export let title = "";
</script>

<h1 class="mt-6 width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">{title}</h1>
{#if isPrime == true}
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <slot></slot>  
    </div>
{:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <slot></slot>   
    </div>
{/if}