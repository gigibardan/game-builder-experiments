
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, LearningOutcome, Challenge } from '@/components/LessonComponents';
import { Image } from '@/components/ui/image';
import { CodeBlock } from '@/components/CodeBlock';

const CrystalRealm = () => {
  const sections = [
    {
      id: "introducere",
      title: "Introducere",
      content: (
        <>
          <p className="mb-4">
            În acest proiect avansant, vom crea o dimensiune complet nouă pentru Minecraft numită "Tărâmul de Cristal". 
            Aceasta va avea propriile blocuri, structuri procedurale, reguli de generare și un portal special 
            pentru a o accesa.
          </p>
          
          <Image 
            src="https://i.ytimg.com/vi/3TnTdCGsmbg/maxresdefault.jpg"
            alt="Dimensiune personalizată în Minecraft"
            className="w-full h-auto rounded-lg my-4"
          />
          
          <LearningOutcome items={[
            "Crearea unei dimensiuni noi în Minecraft",
            "Definirea proprietăților dimensiunii și a generării de teren",
            "Crearea de blocuri personalizate de cristal",
            "Implementarea unui portal pentru accesarea dimensiunii",
            "Generarea de structuri procedurale"
          ]} />
          
          <InfoBox title="Proiect avansat" icon="warning" variant="warning">
            Acest proiect este mai complex și necesită înțelegere bună a MCreator. Asigură-te că ai 
            parcurs proiectele anterioare și ești familiarizat cu conceptele de bază.
          </InfoBox>
        </>
      )
    },
    {
      id: "blocuri",
      title: "Crearea blocurilor de cristal",
      content: (
        <>
          <p className="mb-4">
            Înainte de a crea dimensiunea, vom avea nevoie de câteva blocuri personalizate care vor fi specifice 
            pentru Tărâmul de Cristal.
          </p>
          
          <StepItem number={1} title="Creează blocul de Cristal de bază">
            <p className="mb-2">
              În MCreator, adaugă un nou element de tip "Block":
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Block</code></li>
              <li>Textură: Creează o textură translucidă cu aspect de cristal (albastru deschis)</li>
              <li>Material: Glass</li>
              <li>Luminozitate: 7 (din 15)</li>
              <li>Rezistență: 3.0</li>
              <li>Tărie: 1.0</li>
              <li>Unealta necesară: Pickaxe</li>
              <li>Sound: Glass</li>
              <li>Bifează opțiunea "Translucent" pentru un efect semitransparent</li>
            </ul>
            <p>
              Asigură-te că blocul are un aspect frumos, deoarece va fi foarte prezent în dimensiunea noastră.
            </p>
          </StepItem>
          
          <StepItem number={2} title="Creează variante de blocuri de cristal">
            <p className="mb-2">
              Pentru diversitate, vom crea mai multe variante de blocuri de cristal cu culori diferite:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Crystal Block Purple (violet)</li>
              <li>Crystal Block Pink (roz)</li>
              <li>Crystal Block Green (verde)</li>
            </ul>
            <p className="mb-2">
              Aceste blocuri vor avea aceleași proprietăți de bază, dar texturi diferite.
            </p>
            <Image 
              src="https://i.ytimg.com/vi/OCJomKDVJ1s/maxresdefault.jpg"
              alt="Exemple de blocuri de cristal"
              className="w-full h-auto rounded-lg my-2"
            />
          </StepItem>
          
          <StepItem number={3} title="Creează blocul de Crystal Ore">
            <p className="mb-2">
              Vom crea un bloc de minereu special pentru dimensiunea noastră:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Ore</code></li>
              <li>Textură: Crează o textură de piatră cu cristale încorporate</li>
              <li>Material: Rock</li>
              <li>Luminozitate: 3 (slab luminos)</li>
              <li>Drop: Vom crea un item "Crystal Shard" care va cădea din acest minereu</li>
              <li>Drop amount: 1-4 bucăți</li>
              <li>Rezistență: 5.0</li>
              <li>Unealta necesară: Pickaxe (preferabil Iron sau mai bun)</li>
            </ul>
          </StepItem>
          
          <InfoBox title="Sfat" icon="star" variant="success">
            Pentru a face blocurile de cristal mai interesante, poți adăuga efecte de particule în jurul lor.
            Acest lucru se poate face în secțiunea "Additional properties" a blocului în MCreator.
          </InfoBox>
        </>
      )
    },
    {
      id: "itemuri",
      title: "Crearea itemurilor pentru dimensiune",
      content: (
        <>
          <p className="mb-4">
            Vom crea câteva itemuri specifice dimensiunii noastre de cristal, inclusiv un item special
            pentru a activa portalul.
          </p>
          
          <StepItem number={1} title="Creează Crystal Shard">
            <p className="mb-2">
              Acest item va cădea din Crystal Ore:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Shard</code></li>
              <li>Textură: Un fragment mic și strălucitor de cristal</li>
              <li>Raritate: Uncommon (cyan)</li>
              <li>Adaugă efect de strălucire (glowing effect)</li>
              <li>
                Properties:
                <ul className="list-disc pl-6 mt-1">
                  <li>Max stack size: 64</li>
                  <li>Poate fi folosit ca ingredient pentru rețete de crafting</li>
                </ul>
              </li>
            </ul>
          </StepItem>
          
          <StepItem number={2} title="Creează Crystal Key">
            <p className="mb-2">
              Acest item special va fi folosit pentru a activa portalul către dimensiunea noastră:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Key</code></li>
              <li>Textură: O cheie elaborată, cu cristale încorporate</li>
              <li>Raritate: Epic (purple)</li>
              <li>Adaugă efect de strălucire (glowing effect)</li>
              <li>
                Properties:
                <ul className="list-disc pl-6 mt-1">
                  <li>Max stack size: 1</li>
                  <li>Animation: Spinning (dacă este disponibil)</li>
                </ul>
              </li>
            </ul>
            <p>
              Acest item va avea o interacțiune specială cu blocurile de portal pe care le vom crea ulterior.
            </p>
          </StepItem>
          
          <StepItem number={3} title="Adaugă o rețetă de crafting pentru Crystal Key">
            <p className="mb-2">
              Adaugă o nouă rețetă de crafting pentru a crea Crystal Key folosind Crystal Shards și alte materiale:
            </p>
            <div className="grid grid-cols-3 gap-1 w-32 mb-4">
              <div className="bg-blue-100 p-1 text-center border border-gray-300">C</div>
              <div className="bg-blue-100 p-1 text-center border border-gray-300">C</div>
              <div className="bg-blue-100 p-1 text-center border border-gray-300">C</div>
              <div className="bg-yellow-100 p-1 text-center border border-gray-300">G</div>
              <div className="bg-yellow-100 p-1 text-center border border-gray-300">G</div>
              <div className="bg-blue-100 p-1 text-center border border-gray-300">C</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-yellow-100 p-1 text-center border border-gray-300">G</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
            </div>
            <p className="mb-2">
              Unde C = Crystal Shard și G = Gold Ingot
            </p>
          </StepItem>
        </>
      )
    },
    {
      id: "portal",
      title: "Crearea portalului",
      content: (
        <>
          <p className="mb-4">
            Pentru a accesa dimensiunea noastră, vom crea un portal special, similar cu portalul Nether 
            din Minecraft, dar cu un design și mecanică unică.
          </p>
          
          <StepItem number={1} title="Creează blocul de portal">
            <p className="mb-2">
              Adaugă un nou element de tip "Block" pentru portalul dimensiunii:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Portal Frame</code></li>
              <li>Textură: O textură de piatră cu încrustrații de cristal de culoare albastru închis</li>
              <li>Material: Stone</li>
              <li>Luminozitate: 1</li>
              <li>Rezistență: 50.0 (foarte puternic, similar End Portal Frame)</li>
              <li>Tărie: -1 (indestructibil în Survival)</li>
            </ul>
          </StepItem>
          
          <StepItem number={2} title="Creează blocul interior al portalului">
            <p className="mb-2">
              Adaugă un nou element de tip "Block" pentru interiorul portalului:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Portal</code></li>
              <li>Textură: O textură animată, translucidă, cu efect de vortex (similar portalului Nether, dar albastru deschis)</li>
              <li>Material: Portal</li>
              <li>Luminozitate: 15 (maxim)</li>
              <li>Drop: None</li>
              <li>Collision: false (jucătorii pot trece prin el)</li>
              <li>
                Adaugă particule custom:
                <ul className="list-disc pl-6 mt-1">
                  <li>Portal particles</li>
                  <li>Culoare: albastru deschis</li>
                </ul>
              </li>
            </ul>
          </StepItem>
          
          <StepItem number={3} title="Implementează logica portalului">
            <p className="mb-2">
              În MCreator, vom adăuga proceduri pentru funcționalitatea portalului:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Când un jucător click-dreapta pe Crystal Portal Frame cu Crystal Key în mână, verifică dacă structura portalului este validă</li>
              <li>Dacă structura este validă (un dreptunghi de 4x5 de Crystal Portal Frame), umple interiorul cu blocuri Crystal Portal</li>
              <li>Când un jucător intră în contactul cu blocul Crystal Portal, teleportează-l în dimensiunea Crystal Realm</li>
            </ol>
            <p className="mb-2">
              Poți implementa această logică folosind proceduri MCreator sau, pentru utilizatori avansați, folosind codul Java direct.
            </p>
            <Image 
              src="https://i.ytimg.com/vi/Mx5nQYhzAF8/maxresdefault.jpg"
              alt="Portal de dimensiune personalizat în Minecraft"
              className="w-full h-auto rounded-lg my-4"
            />
          </StepItem>
          
          <InfoBox title="Testare" icon="info" variant="info">
            Asigură-te că testezi funcționalitatea portalului înainte de a merge mai departe. Poți face 
            acest lucru în modul Creative, construind manual structura portalului și încercând să o activezi cu Crystal Key.
          </InfoBox>
        </>
      )
    },
    {
      id: "dimensiune",
      title: "Crearea dimensiunii Crystal Realm",
      content: (
        <>
          <p className="mb-4">
            Acum vom crea dimensiunea propriu-zisă, definind caracteristicile și generarea terenului.
          </p>
          
          <StepItem number={1} title="Definește dimensiunea în MCreator">
            <p className="mb-2">
              Adaugă un nou element de tip "Dimension":
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>Crystal Realm</code></li>
              <li>
                World Type:
                <ul className="list-disc pl-6 mt-1">
                  <li>Type: Normal</li>
                  <li>Generator Type: Noise (pentru generare personalizată)</li>
                </ul>
              </li>
              <li>Portal block: Crystal Portal (blocul pe care l-am creat mai devreme)</li>
              <li>
                Sky și Lighting:
                <ul className="list-disc pl-6 mt-1">
                  <li>Sky color: Albastru deschis (#8CFFFB)</li>
                  <li>Fog color: Albastru-violet deschis (#B8C5FF)</li>
                  <li>Has weather: Nu (fără vreme)</li>
                  <li>Cloud height: 128</li>
                </ul>
              </li>
            </ul>
          </StepItem>
          
          <StepItem number={2} title="Configurează generarea terenului">
            <p className="mb-2">
              În secțiunea de generare a terenului, setează:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Base block: Crystal Block (pentru stratul principal)</li>
              <li>Fluid block: None sau Water (dacă vrei lacuri)</li>
              <li>
                Terrain generation:
                <ul className="list-disc pl-6 mt-1">
                  <li>Terrain height: 50-100 (pentru un teren relativ plat cu dealuri)</li>
                  <li>Terrain volatility: 0.3-0.8 (pentru forme interesante de teren)</li>
                  <li>Terrain density: 0.7 (pentru terenuri solide cu peșteri ocazionale)</li>
                </ul>
              </li>
              <li>
                Features:
                <ul className="list-disc pl-6 mt-1">
                  <li>Trees: Custom (vom crea "copaci" de cristal)</li>
                  <li>Plants: Custom sau None</li>
                  <li>Structures: Custom (vom adăuga temple de cristal)</li>
                  <li>Ores: Crystal Ore (cu o rată de spawn moderată)</li>
                </ul>
              </li>
            </ul>
          </StepItem>
          
          <StepItem number={3} title="Adaugă entități și spawning">
            <p className="mb-2">
              Deși nu am creat entități personalizate în această lecție, poți decide ce mob-uri din Minecraft 
              vor apărea în dimensiunea ta:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Mobs de bază:
                <ul className="list-disc pl-6 mt-1">
                  <li>Enderman (potrivit pentru atmosfera dimensiunii)</li>
                  <li>Phantom (pentru cerul dimensiunii)</li>
                </ul>
              </li>
              <li>
                Restricții:
                <ul className="list-disc pl-6 mt-1">
                  <li>No Passive Mobs (fără animale)</li>
                  <li>Mobs specifici pentru dimensiunea noastră (dacă ai creat)</li>
                </ul>
              </li>
            </ul>
          </StepItem>
          
          <Challenge title="Creează formațiuni unice de cristal" difficulty="medium">
            <p>
              Folosind procedurile MCreator pentru generarea structurilor, încearcă să creezi 
              formațiuni unice de cristal care să apară în dimensiune. De exemplu, cristale gigantice
              care ies din sol sau poduri naturale de cristal între dealuri.
            </p>
          </Challenge>
        </>
      )
    },
    {
      id: "structuri",
      title: "Adăugarea structurilor procedurale",
      content: (
        <>
          <p className="mb-4">
            Pentru a face dimensiunea noastră mai interesantă, vom adăuga structuri care se generează procedural, 
            cum ar fi temple sau formațiuni geologice speciale.
          </p>
          
          <StepItem number={1} title="Creează un templu de cristal">
            <p className="mb-2">
              Folosind Structure Editor din MCreator:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Creează o structură de templu folosind blocurile de cristal pe care le-am definit</li>
              <li>Adaugă un chest în centru cu loot special</li>
              <li>Definește regulile de spawn pentru structură (raritate, condiții de teren)</li>
            </ol>
            <p className="mb-2">
              Un templu simplu poate fi de forma:
            </p>
            <CodeBlock language="plaintext">
              - Platformă pătrată de 11x11 blocuri
              - Piloni de cristal în cele 4 colțuri
              - Un altar central cu un cufăr
              - Treptele sau scări care conduc la altar
            </CodeBlock>
          </StepItem>
          
          <StepItem number={2} title="Adaugă loot tables">
            <p className="mb-2">
              Pentru cufărul din templu, definește un tabel de loot cu:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Crystal Shards (5-10 bucăți, 100% șansă)</li>
              <li>Crystal Key (1 bucată, 20% șansă)</li>
              <li>Enchanted items (armură, unelte, 30-50% șansă)</li>
              <li>Materiale rare din Minecraft (diamante, emeralde, 40-60% șansă)</li>
            </ul>
          </StepItem>
          
          <StepItem number={3} title="Creează formațiuni naturale">
            <p className="mb-2">
              Adaugă diverse formațiuni naturale specifice dimensiunii:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cristale gigantice care cresc din sol (ca niște stalagmite)</li>
              <li>Insule plutitoare de cristal</li>
              <li>Peșteri de cristal cu Crystal Ore</li>
            </ul>
            <p>
              Pentru formațiuni complexe, poți folosi Structure Editor sau proceduri personalizate în MCreator.
            </p>
            <Image 
              src="https://static.planetminecraft.com/files/resource_media/screenshot/1816/2018-04-21-16-36-55-1524337069.png"
              alt="Structuri de cristal în Minecraft"
              className="w-full h-auto rounded-lg my-4"
            />
          </StepItem>
          
          <InfoBox title="Sfat pentru performanță" icon="info" variant="warning">
            Când creezi structuri procedurale, fii atent la densitatea și complexitatea lor. 
            Prea multe structuri complexe pot afecta performanța jocului, în special pe calculatoare 
            mai slabe. Folosește opțiunea "generation probability" pentru a controla cât de des apar.
          </InfoBox>
        </>
      )
    },
    {
      id: "testare",
      title: "Testare și finalizare",
      content: (
        <>
          <p className="mb-4">
            Este timpul să testezi dimensiunea ta și să te asiguri că totul funcționează corect.
          </p>
          
          <StepItem number={1} title="Compilează și pornește jocul">
            <p className="mb-2">
              În MCreator, dă click pe butonul "Build and Run" pentru a compila modul și a porni 
              Minecraft cu modul instalat.
            </p>
          </StepItem>
          
          <StepItem number={2} title="Testează în Creative Mode">
            <p className="mb-2">
              În Creative Mode, construiește cadrul portalului și activează-l cu Crystal Key.
              Explorează dimensiunea și verifică:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Generarea corectă a terenului</li>
              <li>Spawning-ul structurilor</li>
              <li>Aspectul vizual general (cerul, lumina, particule)</li>
              <li>Mob spawning</li>
            </ul>
          </StepItem>
          
          <StepItem number={3} title="Testează în Survival Mode">
            <p className="mb-2">
              Pentru un test complet, joacă în Survival Mode și:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Colectează resurse pentru a crea Crystal Key</li>
              <li>Construiește portalul</li>
              <li>Explorează dimensiunea și luptă-te cu mob-urile</li>
              <li>Caută temple și deschide cufere</li>
              <li>Minează Crystal Ore</li>
            </ul>
          </StepItem>
          
          <StepItem number={4} title="Debusează și ajustează">
            <p className="mb-2">
              După testare, fă ajustări și corectează probleme:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ajustează raritatea structurilor dacă apar prea des sau prea rar</li>
              <li>Modifică generarea terenului dacă nu arată bine</li>
              <li>Corectează bug-uri sau probleme de funcționalitate</li>
              <li>Echilibrează drop-urile și loot-ul</li>
            </ul>
          </StepItem>
          
          <InfoBox title="Idei de extindere" icon="star" variant="success">
            <p className="mb-2">
              Iată câteva moduri prin care poți extinde acest proiect:
            </p>
            <ul className="list-disc pl-6">
              <li>Adaugă un boss unic pentru dimensiunea Crystal Realm</li>
              <li>Creează efecte speciale care apar doar în această dimensiune</li>
              <li>Implementează mecanici noi de joc specifice pentru dimensiune</li>
              <li>Adaugă arme și unelte speciale din cristal cu abilități unice</li>
              <li>Creează o misiune sau un quest legat de dimensiune</li>
            </ul>
          </InfoBox>
        </>
      )
    }
  ];

  const sidebarItems = sections.map(section => ({
    id: section.id,
    title: section.title
  }));

  const resources = [
    {
      title: "Documentație MCreator - Dimensions",
      url: "https://mcreator.net/wiki/creating-dimensions"
    },
    {
      title: "Tutoriale video despre portale custom",
      url: "https://www.youtube.com/results?search_query=mcreator+custom+portal+tutorial"
    },
    {
      title: "Generarea proceduală în Minecraft",
      url: "https://minecraft.fandom.com/wiki/Customized_world_generation"
    },
    {
      title: "Comunitatea modderilor Minecraft",
      url: "https://www.minecraftforum.net/forums/mapping-and-modding-java-edition"
    }
  ];

  return (
    <LessonLayout
      courseId="minecraft-modding"
      sessionId="3"
      title="Creează o dimensiune nouă: Tărâmul de cristal"
      subtitle="Construiește o lume nouă cu propriile reguli, blocuri și structuri"
      heroColor="bg-gradient-to-r from-green-600 to-green-400"
      previousLesson={{
        title: "Armură de rubin",
        path: "/minecraftmodding/ruby-armor"
      }}
      nextLesson={{
        title: "Înapoi la curs",
        path: "/courses/minecraft-modding"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default CrystalRealm;
