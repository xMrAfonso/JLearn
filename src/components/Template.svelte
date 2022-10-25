<script>
    import Header from "$components/Header.svelte";
    import Hero from "$components/Hero.svelte";
    import Classes from "$components/Classes.svelte";
    export let title = "JLearn";
    export let activeClass = "3gig";    
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head> 

<body class="background scroll-smooth scroll w-screen sm:w-full">
    <div class="h-screen flex flex-col justify-between">
        <div class="">
            <Header />
            <Hero />
            <Classes activeClass={activeClass} />
            <div class="width-modifier sm:mx-auto mt-4 flex items-center justify-center mx-4">
                <div class="h-full w-full">
                    <slot></slot>
                </div>
            </div>
        </div>
        <footer class="text-gray-300 w-full py-6 text-center font-poppins text-xs">
            Copyright © 2022 CNPI.lu - All rights reserved. <br> Made with 💗 by Afonso.
        </footer>
    </div>
</body>