<script>
    import Template from "$components/Template.svelte";
    import Section from "$components/Section.svelte";
    import InfoCard from "$components/InfoCard.svelte";
    let color = "pink-500";
</script>

<Template activeClass="1gig" title="JLearn - 1GIG" >
    <Section title="Programme">
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=424" name="Programme" legend="16.09.2021 - 167.19 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=444" name="Conventions identificateurs et structogrammes " legend="17.09.2018 - 188.86 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=480" name="Solutions pour les problèmes types" legend="21.02.2021 - 30.8 KB" type="download"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=424" name="Liste de problèmes types" legend="21.02.2021 - 37.81 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=424" name="Liste des composants et classes connus" legend="19.05.2021 - 60.42 KB" type="pdf"/>
    </Section>
    
    <Section title="Logiciels">
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=441" name="Guide d'installation (JDK, Unimozer, NetBeans)" legend="22.07.2022 - 339.03 KB" type="pdf"/>
        <InfoCard color={color} href="https://adoptium.net/" name="Java Development Kit - OpenJDK 17 (Latest LTS)" legend="21.07.2022 - 244 B" type="external"/>
        <InfoCard color={color} href="https://cdn.azul.com/zulu/bin/zulu17.36.13-ca-jdk17.0.4-macosx_aarch64.dmg" name="Java Development Kit pour MacOS (M1/M2) - Azul Zulu 17" legend="21.07.2022 - 297 B" type="download"/>
        <InfoCard color={color} href="http://unimozer.fisch.lu/" name="Unimozer" legend="12.07.2012 - 248 B" type="external"/>
        <InfoCard color={color} href="https://netbeans.apache.org/download/nb14" name="NetBeans 14" legend="10.09.2022 - 264 B" type="external"/>
        <InfoCard color={color} href="https://www.oracle.com/java/technologies/javase-jdk17-doc-downloads.html" name="Java Development Kit Documentation (JavaDoc)" legend="21.07.2022 - 295 B" type="external"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=479" name="Java Source Printer v1.5.3" legend="18.12.2019 - 1.61 MB" type="download"/>
        <InfoCard color={color} href="https://web.microsoftstream.com/video/ec4e5d58-4f76-41ac-b245-731ae8283bd4" name="Utilisation de Java Source Printer sur Mac" legend="17.09.2022 - 297 B" type="video"/>
    </Section>

    <Section title="Cours et exercices">
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=466" name="COURS La programmation orientée objets 3" legend="19.03.2019 - 484.6 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=476" name="EXERCICES PARTIE D (récap) : Exercices de récapitulation" legend="03.12.2019 - 541.96 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=471" name="EXERCICES PARTIE E : Les événements de la souris" legend="03.12.2019 - 295.23 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=472" name="EXERCICES PARTIE F : Le chronomêtre" legend="10.12.2019 - 491.86 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=470" name="EXERCICES PARTIE G : La programmation ortientée objets" legend="24.02.2022 - 528.28 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=473" name="Sources - Bouncing Balls" legend="19.10.2012 - 329.91 KB" type="download"/>
    </Section>

    <Section title="Ressources disponibles sur le web">
        <InfoCard color={color} href="https://www.facebook.com/groups/JavaLU/" name="Groupe Facebook: Java am Informatiks-Cours" legend="08.04.2014 - 262 B" type="external"/>
        <InfoCard color={color} href="http://openbook.galileocomputing.de/javainsel/" name="Java ist auch eine Insel" legend="19.02.2013 - 269 B" type="external"/>
        <InfoCard color={color} href="https://informatique.ltett.lu/?page_id=770" name="Video Tutorials 1GIG du LTETT" legend="28.10.2017 - 264 B" type="external"/>
    </Section>
</Template>