<script>
    import Template from "$components/Template.svelte";
    import Section from "$components/Section.svelte";
    import Card from "$components/Card.svelte";
    import { fade } from 'svelte/transition';
    let color = "sky-500";
</script>

<Template activeClass="1gin" title="JLearn - 1GIN" >
    <Section isPrime={true} title="Programme">
        <Card color={color} href="http://java.cnpi.lu/download.php?id=425" name="Programme" legend="16.09.2021 - 200.73 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=444" name="Conventions identificateurs et structogrammes " legend="17.09.2018 - 188.86 KB" type="pdf"/>
    </Section>
    
    <Section title="Logiciels">
        <Card color={color} href="http://java.cnpi.lu/download.php?id=441" name="Guide d'installation (JDK, Unimozer, NetBeans)" legend="22.07.2022 - 339.03 KB" type="pdf"/>
        <Card color={color} href="https://adoptium.net/" name="Java Development Kit - OpenJDK 17 (Latest LTS)" legend="21.07.2022 - 244 B" type="external"/>
        <Card color={color} href="https://cdn.azul.com/zulu/bin/zulu17.36.13-ca-jdk17.0.4-macosx_aarch64.dmg" name="Java Development Kit pour MacOS (M1/M2) - Azul Zulu 17" legend="21.07.2022 - 297 B" type="download"/>
        <Card color={color} href="http://unimozer.fisch.lu/" name="Unimozer" legend="12.07.2012 - 248 B" type="external"/>
        <Card color={color} href="https://netbeans.apache.org/download/nb14" name="NetBeans 14" legend="10.09.2022 - 264 B" type="external"/>
        <Card color={color} href="https://www.oracle.com/java/technologies/javase-jdk17-doc-downloads.html" name="Java Development Kit Documentation (JavaDoc)" legend="21.07.2022 - 295 B" type="external"/>
        <Card color={color} href="http://alexdp.free.fr/violetumleditor/page.php" name="Violet UML Editor" legend="08.11.2012 - 269 B" type="external"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=479" name="Java Source Printer v1.5.3" legend="18.12.2019 - 1.61 MB" type="download"/>
        <Card color={color} href="https://web.microsoftstream.com/video/ec4e5d58-4f76-41ac-b245-731ae8283bd4" name="Utilisation de Java Source Printer sur Mac" legend="17.09.2022 - 297 B" type="video"/>
    </Section>

    <Section title="Cours et exercices">
        <Card color={color} href="http://java.cnpi.lu/download.php?id=485" name="COURS La programmation orientée objets 4" legend="29.06.2022 - 711.26 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=486" name="EXERCICES 1GIN (A) Récapitulation" legend="17.09.2018 - 189.61 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=487" name="EXERCICES 1GIN (B) Strings" legend="05.02.2020 - 184 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=488" name="EXERCICES 1GIN (C) Exceptions" legend="11.10.2019 - 104.23 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=489" name="EXERCICES 1GIN (D) Files" legend="23.01.2020 - 93.33 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=490" name="EXERCICES 1GIN (E) Interfaces" legend="23.01.2020 - 196.53 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=491" name="EXERCICES 1GIN (F) Récursivité" legend="11.12.2020 - 1.08 MB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=492" name="EXERCICES 1GIN (G) Structures de données" legend="24.01.2021 - 603.16 KB" type="pdf"/>
        <Card color={color} href="http://java.cnpi.lu/download.php?id=493" name="EXERCICES 1GIN (H) Collections Maps" legend="19.01.2021 - 74.79 KB" type="pdf"/>
    </Section>

    <Section isPrime={true} title="Ressources disponibles sur le web">
        <Card color={color} href="https://www.facebook.com/groups/JavaLU/" name="Groupe Facebook: Java am Informatiks-Cours" legend="08.04.2014 - 262 B" type="external"/>
        <Card color={color} href="http://openbook.galileocomputing.de/javainsel/" name="Java ist auch eine Insel" legend="19.02.2013 - 269 B" type="external"/>
    </Section>
</Template>