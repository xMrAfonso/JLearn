<script>
    export let activeClass = "3gig";
</script>

<div>
    <h1 class="width-modifier mx-4 sm:mx-auto my-4 pt-4 md:my-6 text-2xl md:text-3xl text-gray-200 font-bold">Classes
        <span class="font-light text-slate-400 text-base">Sélectionnez une classe pour commencer votre aventure</span>
    </h1>
</div>

<div class="width-modifier sm:rounded-lg bg-transparent grid sm:mx-auto sm:grid-cols-5 mx-4 gap-3 ">

    {#if activeClass == "3gig"}
        <a href="/class/3gig" class="class-button border-0 bg-gradient-to-br from-orange-400 to-orange-600 hover:to-orange-400 hover:from-orange-600 text-white border-orange-400">
            3GIG
        </a>
    {:else}
        <a href="/class/3gig" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white text-orange-400 border-orange-400">
            3GIG
        </a>
    {/if}

    {#if activeClass == "2gig"}
        <a href="/class/2gig" class="class-button border-0 bg-gradient-to-br from-pink-500 to-pink-700 hover:to-pink-500 hover:from-pink-700 text-white border-pink-500">
            2GIG
        </a>
    {:else}
        <a href="/class/2gig" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 hover:text-white text-pink-500 border-pink-500">
            2GIG
        </a>
    {/if}

    {#if activeClass == "1gig"}
        <a href="/class/1gig" class="class-button border-0 bg-gradient-to-br from-pink-500 to-pink-700 hover:to-pink-500 hover:from-pink-700 text-white border-pink-500">
            1GIG
        </a>
    {:else}
        <a href="/class/1gig" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 hover:text-white text-pink-500 border-pink-500">
            1GIG
        </a>
    {/if}

    {#if activeClass == "2gin"}
        <a href="/class/2gin" class="class-button border-0 bg-gradient-to-br from-sky-500 to-sky-700 hover:to-sky-500 hover:from-sky-700 text-white border-sky-500">
            2GIN
        </a>
    {:else}
        <a href="/class/2gin" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-700 hover:text-white text-sky-500 border-sky-500">
            2GIN
        </a>
    {/if}

    {#if activeClass == "1gin"}
        <a href="/class/1gin" class="class-button border-0 bg-gradient-to-br from-sky-500 to-sky-700 hover:to-sky-500 hover:from-sky-700 text-white border-sky-500">
            1GIN
        </a>
    {:else}
        <a href="/class/1gin" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-700 hover:text-white text-sky-500 border-sky-500">
            1GIN
        </a>
    {/if}
</div>