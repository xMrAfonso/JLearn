<script>
    import Template from "$components/Template.svelte";
    import Section from "$components/Section.svelte";
    import InfoCard from "$components/InfoCard.svelte";
    let color = "pink-500";
</script>

<Template activeClass="2gig" title="JLearn - 2GIG" >
    <Section isPrime={true} title="Programme">
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=422" name="Programme" legend="02.12.2021 - 204.29 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=444" name="Conventions identificateurs et structogrammes " legend="17.09.2018 - 188.86 KB" type="pdf"/>
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
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=451" name="COURS La programmation orientée objets 2" legend="10.09.2020 - 1.66 MB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=457" name="Bonnes pratiques en Java" legend="16.07.2016 - 210.7 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=454" name="EXERCICES PARTIE A : Récapitulation" legend="14.12.2019 - 394.72 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=453" name="EXERCICES PARTIE B : Interfaces graphiques" legend="15.12.2019 - 896.82 KB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=452" name="EXERCICES PARTIE C : Listes" legend="08.04.2021 - 1.72 MB" type="pdf"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=455" name="EXERCICES PARTIE D : Dessin et graphisme" legend="24.01.2021 - 1.01 KB" type="pdf"/>
    </Section>

    <Section isPrime={true} title="Exercices et ressources supplémentaires">
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=530" name="Exercices supplémentaires 2GIG (M. Laurent Kirsch) - énoncés" legend="21.03.2021 - 7.79 MB" type="download"/>
        <InfoCard color={color} href="http://java.cnpi.lu/download.php?id=532" name="Explications alternatives et supplémentaires - (M. Laurent Kirsch LAM)" legend="10.04.2021 - 7.87 MB" type="download"/>
    </Section>

    <Section title="Ressources disponibles sur le web">
        <InfoCard color={color} href="https://www.facebook.com/groups/JavaLU/" name="Groupe Facebook: Java am Informatiks-Cours" legend="08.04.2014 - 262 B" type="external"/>
        <InfoCard color={color} href="http://openbook.galileocomputing.de/javainsel/" name="Java ist auch eine Insel" legend="19.02.2013 - 269 B" type="external"/>
        <InfoCard color={color} href="http://tutorials.lnbd.lu/?page_id=2" name="Video Tutorials 2GIG du LNB (Kugener G. et Kohnen A.)" legend="28.04.2020 - 258 B" type="external"/>
        <InfoCard color={color} href="http://informatique.ltett.lu/?page_id=462" name="Video Tutorials 2GIG du LTETT " legend="23.01.2017 - 264 B" type="external"/>
        <InfoCard color={color} href="https://www.youtube.com/playlist?list=PLn_zHllqY7tMUwZIceFV_tymBQDOtD1iJ" name="Video Tutorials 3GIG/2GIG (par M. Gilles Everling LAM)" legend="18.03.2019 - 294 B" type="video"/>
        <InfoCard color={color} href="http://informatique.ltett.lu/?page_id=462" name="Programme de visualisation du tri par sélection" legend="24.03.2019 - 714.55 KB" type="java"/>
    </Section>
</Template>