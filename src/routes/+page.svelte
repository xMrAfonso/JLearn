<script>
    import InfoCard from "$components/InfoCard.svelte";
</script>

<svelte:head>
    <title>JLearn - 3GIG</title>
</svelte:head> 
<body class="background scroll-smooth scroll w-screen sm:w-full">
    <div class="h-screen flex flex-col justify-between">
        <div class="">
            <header class="width-modifier h-20 mx-auto pt-6 text-white text-4xl text-center font-poppins font-bold">
                JLearn 
            </header>

            <div class="width-modifier sm:rounded-lg md:h-44 h-36 mt-1 background-header mx-auto pl-2 sm:pl-6 bg-center flex flex-row items-center justify-between gap-2">
                <div class="flex flex-col justify-center gap-2">
                    <h1 href="#" class="px-2 text-xl sm:text-2xl md:text-4xl text-white font-bold">
                        Chaque histoire a un début...
                    </h1>
                    <h2 href="#" class="px-2 text-gray-100 text-sm sm:text-md md:text-lg">
                        ...et vôtre commence ici par l'apprentissage de Java.
                    </h2>
                </div>
                <div class="hidden sm:block icon-java w-20 h-20 bg-cover mr-14"></div>
            </div> 

            <div>
                <h1 class="width-modifier mx-4 sm:mx-auto my-4 pt-4 md:my-6 text-2xl md:text-3xl text-gray-200 font-bold">Classes
                    <span class="font-light text-slate-400 text-base">Sélectionnez une classe pour commencer votre aventure</span>
                </h1>
            </div>
        
            <div class="width-modifier sm:rounded-lg bg-transparent grid sm:mx-auto sm:grid-cols-5 mx-4 gap-3 ">
                <a href="/" class="class-button border-0 bg-gradient-to-br from-orange-400 to-orange-600 hover:to-orange-400 hover:from-orange-600 text-white border-orange-400">
                    3GIG
                </a>
                <!--
                <a href="#" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white text-orange-400 border-orange-400">
                    3GIG
                </a>
                -->
                <a href="/class/2gig.html" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 hover:text-white text-pink-500 border-pink-500">
                    2GIG
                </a>
                <a href="/class/1gig.html" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 hover:text-white text-pink-500 border-pink-500">
                    1GIG
                </a>
                <a href="/class/2gin.html" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-700 hover:text-white text-sky-500 border-sky-500">
                    2GIN
                </a>
                <a href="/class/1gin.html" class="class-button hover:border-0 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-700 hover:text-white text-sky-500 border-sky-500">
                    1GIN
                </a>
            </div>
            
            <div class="width-modifier sm:mx-auto mt-4 flex items-center justify-center mx-4">
                <div class="h-full w-full">

                    <h1 class="width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">Programme</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InfoCard href="http://java.cnpi.lu/download.php?id=408" name="Programme" legend="16.09.2021 - 178.08 KB" type="pdf"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=444" name="Conventions identificateurs et structogrammes " legend="17.09.2018 - 188.86 KB" type="pdf"/>
                    </div>
                    
                    <h1 class="mt-6 width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">Logiciels</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <InfoCard href="http://java.cnpi.lu/download.php?id=441" name="Guide d'installation (JDK, Unimozer, NetBeans)" legend="22.07.2022 - 339.03 KB" type="pdf"/>
                        <InfoCard href="https://adoptium.net/" name="Java Development Kit - OpenJDK 17 (Latest LTS)" legend="21.07.2022 - 244 B" type="external"/>
                        <InfoCard href="https://cdn.azul.com/zulu/bin/zulu17.36.13-ca-jdk17.0.4-macosx_aarch64.dmg" name="Java Development Kit pour MacOS (M1/M2) - Azul Zulu 17" legend="21.07.2022 - 297 B" type="download"/>
                        <InfoCard href="http://unimozer.fisch.lu/" name="Unimozer" legend="12.07.2012 - 248 B" type="external"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=479" name="Java Source Printer v1.5.3" legend="18.12.2019 - 1.61 MB" type="download"/>
                        <InfoCard href="https://web.microsoftstream.com/video/ec4e5d58-4f76-41ac-b245-731ae8283bd4" name="Utilisation de Java Source Printer sur Mac" legend="17.09.2022 - 297 B" type="video"/>
                    </div>

                    <h1 class="mt-6 width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">Cours et exercices</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <InfoCard href="http://java.cnpi.lu/download.php?id=442" name="COURS - La programmation orientée objets" legend="15.11.2021 - 838.61 KB" type="pdf"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=443" name="EXERCICES 3GIG" legend="18.12.2019 - 595.1 KB" type="pdf"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=446" name="EXERCICES 3GIG - Fichiers donnés (pour élèves)" legend="18.12.2019 - 189.55 KB" type="download"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=447" name="Sources - Shapes" legend="13.07.2012 - 43.14 KB" type="download"/>
                    </div>

                    <h1 class="mt-6 width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">Exercices supplémentaires</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <InfoCard href="http://java.cnpi.lu/download.php?id=512" name="Exercices supp. - Multiple Objects (M. Roger Feiereisen)" legend="29.04.2020 - 1.25 MB" type="download"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=528" name="Exercices supp. - BOUCLES <br>(M. Georges Kugener)" legend="27.02.2021 - 799.94 KB" type="pdf"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=511" name="Exercices supp. <br>(MM. Bourone et Dziadek) " legend="16.09.2022 - 2.95 MB" type="pdf"/>
                        <InfoCard href="http://java.cnpi.lu/download.php?id=469" name="Exercices supp. - Java à l'école (M. Jens Getreu) " legend="01.09.2013 - 1.13 MB" type="pdf"/>
                    </div>

                    <h1 class="mt-6 width-modifier mx-auto mb-2 text-xl md:text-2xl text-gray-200 font-bold">Ressources disponibles sur le web</h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <InfoCard href="https://www.facebook.com/groups/JavaLU/" name="Groupe Facebook: Java am Informatiks-Cours" legend="08.04.2014 - 262 B" type="external"/>
                        <InfoCard href="http://informatique.ltett.lu/?page_id=20" name="Video Tutorials 3GIG du LTETT" legend="27.02.2021 - 799.94 KB" type="external"/>
                        <InfoCard href="http://www.youtube.com/watch?v=0OARSHuZ95o" name="3GIG, Exercice 3 'Account' <br>(Jim Schmit - GIN)" legend="18.12.2013 - 265 B" type="video"/>
                        <InfoCard href="http://www.youtube.com/watch?v=e7bD5-dzSPQ" name="3GIG, Funktioun & Klass <br> ('Daniellux' - 3GIG)" legend="18.12.2013 - 265 B" type="video"/>
                        <InfoCard href="https://www.youtube.com/playlist?list=PLn_zHllqY7tMUwZIceFV_tymBQDOtD1iJ" name="Video Tutorials 3GIG/2GIG <br>(M. Gilles Everling - LAM)" legend="18.03.2019 - 294 B" type="video"/>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-gray-300 w-full py-6 text-center font-poppins text-xs">
            Copyright © 2022 CNPI.lu - All rights reserved. <br> Made with 💗 by Afonso.
        </footer>
    </div>
</body>