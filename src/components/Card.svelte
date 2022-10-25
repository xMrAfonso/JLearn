<script>
    import InfoCard from "$components/InfoCard.svelte";
    
    export let href = "/";
    export let name = "";
    export let legend = "";
    export let type = "download";
    export let color = "orange";
</script>

{#if color == "orange"}
    <a rel=noreferrer href="{href}" target="_blank" class="border-orange-400 hover:text-orange-400">
        <InfoCard name={name} legend={legend} type={type} /> 
    </a>
{:else if color == "orange"}
    <a rel=noreferrer href="{href}" target="_blank" class="border-pink-600 hover:text-orange-600">
        <InfoCard name={name} legend={legend} type={type} /> 
    </a>
{:else}
    <a rel=noreferrer href="{href}" target="_blank" class="border-sky-500 hover:text-sky-500">
        <InfoCard name={name} legend={legend} type={type} /> 
    </a>
{/if}