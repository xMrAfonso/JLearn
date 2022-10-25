<script>
    import Template from "$components/Template.svelte";
    import Section from "$components/Section.svelte";
    import InfoCard from "$components/InfoCard.svelte";
</script>

<Template activeClass="3gig" title="JLearn - 3GIG" >
    <Section isPrime={true} title="Programme">
        <InfoCard href="http://java.cnpi.lu/download.php?id=408" name="Programme" legend="16.09.2021 - 178.08 KB" type="pdf"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=444" name="Conventions identificateurs et structogrammes " legend="17.09.2018 - 188.86 KB" type="pdf"/>
    </Section>
    
    <Section title="Logiciels">
        <InfoCard href="http://java.cnpi.lu/download.php?id=441" name="Guide d'installation (JDK, Unimozer, NetBeans)" legend="22.07.2022 - 339.03 KB" type="pdf"/>
        <InfoCard href="https://adoptium.net/" name="Java Development Kit - OpenJDK 17 (Latest LTS)" legend="21.07.2022 - 244 B" type="external"/>
        <InfoCard href="https://cdn.azul.com/zulu/bin/zulu17.36.13-ca-jdk17.0.4-macosx_aarch64.dmg" name="Java Development Kit pour MacOS (M1/M2) - Azul Zulu 17" legend="21.07.2022 - 297 B" type="download"/>
        <InfoCard href="http://unimozer.fisch.lu/" name="Unimozer" legend="12.07.2012 - 248 B" type="external"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=479" name="Java Source Printer v1.5.3" legend="18.12.2019 - 1.61 MB" type="download"/>
        <InfoCard href="https://web.microsoftstream.com/video/ec4e5d58-4f76-41ac-b245-731ae8283bd4" name="Utilisation de Java Source Printer sur Mac" legend="17.09.2022 - 297 B" type="video"/>
    </Section>

    <Section title="Cours et exercices">
        <InfoCard href="http://java.cnpi.lu/download.php?id=442" name="COURS - La programmation orientée objets 1" legend="15.11.2021 - 838.61 KB" type="pdf"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=443" name="EXERCICES 3GIG" legend="18.12.2019 - 595.1 KB" type="pdf"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=446" name="EXERCICES 3GIG - Fichiers donnés (pour élèves)" legend="18.12.2019 - 189.55 KB" type="download"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=447" name="Sources - Shapes" legend="13.07.2012 - 43.14 KB" type="download"/>
    </Section>

    <Section title="Exercices supplémentaires">
        <InfoCard href="http://java.cnpi.lu/download.php?id=512" name="Exercices supp. - Multiple Objects (M. Roger Feiereisen)" legend="29.04.2020 - 1.25 MB" type="download"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=528" name="Exercices supp. - BOUCLES (M. Georges Kugener)" legend="27.02.2021 - 799.94 KB" type="pdf"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=511" name="Exercices supp. (MM. Bourone et Dziadek) " legend="16.09.2022 - 2.95 MB" type="pdf"/>
        <InfoCard href="http://java.cnpi.lu/download.php?id=469" name="Exercices supp. - Java à l'école (M. Jens Getreu) " legend="01.09.2013 - 1.13 MB" type="pdf"/>
    </Section>

    <Section title="Ressources disponibles sur le web">
        <InfoCard href="https://www.facebook.com/groups/JavaLU/" name="Groupe Facebook: Java am Informatiks-Cours" legend="08.04.2014 - 262 B" type="external"/>
        <InfoCard href="http://informatique.ltett.lu/?page_id=20" name="Video Tutorials 3GIG du LTETT" legend="27.02.2021 - 799.94 KB" type="external"/>
        <InfoCard href="http://www.youtube.com/watch?v=0OARSHuZ95o" name="3GIG, Exercice 3 'Account' (Jim Schmit - GIN)" legend="18.12.2013 - 265 B" type="video"/>
        <InfoCard href="http://www.youtube.com/watch?v=e7bD5-dzSPQ" name="3GIG, Funktioun & Klass ('Daniellux' - 3GIG)" legend="18.12.2013 - 265 B" type="video"/>
        <InfoCard href="https://www.youtube.com/playlist?list=PLn_zHllqY7tMUwZIceFV_tymBQDOtD1iJ" name="Video Tutorials 3GIG/2GIG (M. Gilles Everling - LAM)" legend="18.03.2019 - 294 B" type="video"/>
    </Section>
</Template>