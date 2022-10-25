<script>
    export let name = "";
    export let legend = "";
    export let type = "download";
</script>

<div class="h-32 w-full hover:scale-[1.02] duration-300 border-2 rounded mt-2 flex flex-row items-center font-poppins text-white">
    <div class="w-16 h-16 bg-cover ml-6 px-8 icon-{type}"></div>
    <div class="ml-6 flex flex-col justify-center pr-1">
        <h1 class="text-sm font-medium text-white">
            {name}
        </h1>
        <h2 class="text-xs text-slate-400">
            {legend}
        </h2>
        {#if type == "download" || type == "java" || type == "pdf"}
            <div class="text-sm">Télécharger</div>
        {:else if type == "video"}
            <div class="text-sm">Voir vidéo</div>
        {:else}
            <div class="text-sm">Visiter</div>
        {/if}
    </div>
</div>