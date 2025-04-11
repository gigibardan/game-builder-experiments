
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, LearningOutcome } from '@/components/LessonComponents';
import { Image } from '@/components/ui/image';
import { CodeBlock } from '@/components/CodeBlock';

const RubyArmor = () => {
  const sections = [
    {
      id: "introducere",
      title: "Introducere",
      content: (
        <>
          <p className="mb-4">
            În această lecție, vom crea un set de armură din rubin pentru Minecraft. Vom defini 
            materialul armurii, vom crea texturile necesare și vom configura proprietățile acesteia 
            în joc.
          </p>
          
          <Image 
            src="https://i.ytimg.com/vi/MnydhzeCK7o/maxresdefault.jpg"
            alt="Armură de rubin în Minecraft"
            className="w-full h-auto rounded-lg my-4"
          />
          
          <LearningOutcome items={[
            "Crearea unui material nou de armură",
            "Proiectarea texturilor pentru fiecare piesă de armură",
            "Configurarea proprietăților armurii (durabilitate, protecție)",
            "Testarea armurii în joc"
          ]} />
        </>
      )
    },
    {
      id: "configurare",
      title: "Configurarea mediului de lucru",
      content: (
        <>
          <p className="mb-4">
            Înainte de a începe, asigură-te că ai instalat următoarele:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Minecraft Java Edition</li>
            <li>MCreator (cea mai recentă versiune)</li>
            <li>Java Development Kit (JDK)</li>
          </ul>
          
          <InfoBox title="Notă importantă" icon="info">
            MCreator funcționează cel mai bine cu Minecraft Java Edition. Asigură-te că versiunile 
            sunt compatibile. Verifică pe site-ul MCreator ce versiune de Minecraft este suportată.
          </InfoBox>
          
          <StepItem number={1} title="Deschide MCreator și creează un nou proiect">
            <p className="mb-2">
              Deschide MCreator și creează un nou workspace folosind butonul "Create New Workspace".
            </p>
            <p className="mb-2">
              Completează numele proiectului (ex: "RubyArmorMod"), selectează directorul unde 
              vrei să salvezi proiectul și alege versiunea de Minecraft pe care o folosești.
            </p>
            <Image 
              src="https://mcreator.net/wiki/sites/default/files/2022-07/newworkspace_generator.png"
              alt="Crearea unui nou workspace în MCreator"
              className="w-full h-auto rounded-lg my-2"
            />
          </StepItem>
        </>
      )
    },
    {
      id: "materiale",
      title: "Crearea materialului de armură",
      content: (
        <>
          <p className="mb-4">
            Prima dată, trebuie să creăm materialul din care va fi făcută armura noastră.
          </p>
          
          <StepItem number={1} title="Creează noul material de armură">
            <p>
              În MCreator, dă click pe "Add Element" și selectează "Armor" din lista de elemente disponibile.
            </p>
            <Image 
              src="https://mcreator.net/wiki/sites/default/files/2021-06/element_add.png"
              alt="Adăugarea unui nou element în MCreator"
              className="w-full h-auto rounded-lg my-2"
            />
          </StepItem>
          
          <StepItem number={2} title="Configurează proprietățile materialului">
            <p className="mb-2">
              Completează informațiile pentru noul material de armură:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nume: <code>RubyArmor</code></li>
              <li>Textură: Vom crea texturi pentru cască, pieptar, pantaloni și cizme</li>
              <li>
                Durabilitate:
                <ul className="list-disc pl-6 mt-1">
                  <li>Cască: 15</li>
                  <li>Pieptar: 20</li>
                  <li>Pantaloni: 18</li>
                  <li>Cizme: 15</li>
                </ul>
              </li>
              <li>
                Protecție:
                <ul className="list-disc pl-6 mt-1">
                  <li>Cască: 3</li>
                  <li>Pieptar: 8</li>
                  <li>Pantaloni: 6</li>
                  <li>Cizme: 3</li>
                </ul>
              </li>
              <li>Enchantabilitate: 25</li>
              <li>Material pentru reparare: Rubin (dacă există în mod, altfel diamant)</li>
            </ul>
            <p>
              Setează culoarea materialului la un roșu rubiniu (poți folosi cod hexazecimal #C11B17).
            </p>
          </StepItem>
          
          <InfoBox title="Sfat" icon="star" variant="success">
            Pentru a face armura mai interesantă, poți adăuga efecte speciale când utilizatorul are 
            echipat întregul set. De exemplu, poți adăuga rezistență la foc sau viteză crescută.
          </InfoBox>
        </>
      )
    },
    {
      id: "texturi",
      title: "Crearea texturilor pentru armură",
      content: (
        <>
          <p className="mb-4">
            Acum trebuie să creăm texturile pentru fiecare piesă de armură. MCreator oferă un editor de texturi, 
            dar poți folosi și un program extern precum GIMP sau Photoshop.
          </p>
          
          <StepItem number={1} title="Deschide editorul de texturi">
            <p>
              În MCreator, mergi la secțiunea de armură și dă click pe butonul de editare a texturii pentru 
              fiecare piesă (cască, pieptar, pantaloni, cizme).
            </p>
          </StepItem>
          
          <StepItem number={2} title="Creează textura pentru model">
            <p className="mb-2">
              Pentru fiecare piesă de armură, vei avea nevoie de două texturi:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Textura pentru itemul din inventar</li>
              <li>Textura pentru cum arată armura pe jucător (layer 1 și layer 2)</li>
            </ul>
            <p className="mb-4">
              Iată dimensiunile standard pentru texturile de armură:
            </p>
            <CodeBlock language="plaintext">
              - Texturi item: 16x16 pixeli
              - Texturi layer (pe jucător): 64x32 pixeli
            </CodeBlock>
            <Image 
              src="https://static.planetminecraft.com/files/resource_media/screenshot/1314/Layers_5161626.jpg"
              alt="Structura texturii de armură în Minecraft"
              className="w-full h-auto rounded-lg my-4"
            />
          </StepItem>
          
          <InfoBox title="Recomandare" icon="info">
            Dacă nu ești sigur cum să creezi texturile de la zero, poți începe de la texturile de 
            armură de diamant din Minecraft și să le modifici pentru a arăta ca rubin.
          </InfoBox>
        </>
      )
    },
    {
      id: "retetecrafting",
      title: "Adăugarea rețetelor de crafting",
      content: (
        <>
          <p className="mb-4">
            După ce ai creat materialul de armură și texturile, trebuie să adăugăm rețetele de crafting 
            pentru fiecare piesă de armură.
          </p>
          
          <StepItem number={1} title="Adaugă un nou item: Rubin">
            <p className="mb-2">
              Înainte de a crea rețetele de crafting, vom avea nevoie de un item de rubin:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Dă click pe "Add Element" și selectează "Item"</li>
              <li>Numește itemul "Ruby"</li>
              <li>Alege o textură potrivită (roșie, strălucitoare)</li>
              <li>Setează raritatea la "RARE" și adaugă un efect de strălucire</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Creează rețetele de crafting">
            <p className="mb-2">
              Pentru fiecare piesă de armură, vom crea o rețetă de crafting:
            </p>
            
            <p className="font-bold mt-4 mb-1">Cască de Rubin:</p>
            <div className="grid grid-cols-3 gap-1 w-32 mb-4">
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
            </div>
            
            <p className="font-bold mt-4 mb-1">Pieptar de Rubin:</p>
            <div className="grid grid-cols-3 gap-1 w-32 mb-4">
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
            </div>
            
            <p className="font-bold mt-4 mb-1">Pantaloni de Rubin:</p>
            <div className="grid grid-cols-3 gap-1 w-32 mb-4">
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
            </div>
            
            <p className="font-bold mt-4 mb-1">Cizme de Rubin:</p>
            <div className="grid grid-cols-3 gap-1 w-32 mb-4">
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
              <div className="bg-gray-100 p-1 text-center border border-gray-300"></div>
              <div className="bg-red-100 p-1 text-center border border-gray-300">R</div>
            </div>
            
            <p className="mt-2">
              În MCreator, pentru fiecare piesă, creează o nouă rețetă de crafting prin click pe "Add Element" 
              și selectează "Recipe". Apoi configurează rețeta conform modelelor de mai sus, unde "R" reprezintă 
              rubinul.
            </p>
          </StepItem>
        </>
      )
    },
    {
      id: "testare",
      title: "Testarea în joc",
      content: (
        <>
          <p className="mb-4">
            Acum că ai creat setul de armură de rubin complet, este timpul să îl testezi în joc.
          </p>
          
          <StepItem number={1} title="Construiește și pornește jocul">
            <p className="mb-2">
              În MCreator, dă click pe butonul "Build and Run" pentru a compila modul și a porni 
              Minecraft cu modul instalat.
            </p>
            <p>
              Asteaptă ca jocul să pornească complet.
            </p>
          </StepItem>
          
          <StepItem number={2} title="Testează armura în Creative Mode">
            <p className="mb-2">
              Începe un joc în Creative Mode și caută piesele tale de armură în inventar.
              Echipează-le și verifică:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Aspectul armurii pe jucător</li>
              <li>Funcționalitatea corectă (protecție)</li>
              <li>Dacă există vreun bug sau problemă vizuală</li>
            </ul>
          </StepItem>
          
          <StepItem number={3} title="Testează armura în Survival Mode">
            <p className="mb-2">
              Pentru un test complet, creează o lume în Survival Mode și testează:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rețetele de crafting</li>
              <li>Durabilitatea armurii</li>
              <li>Protecția oferită în luptă</li>
              <li>Repararea folosind rubine</li>
            </ul>
          </StepItem>
          
          <InfoBox title="Depanare" icon="help" variant="warning">
            Dacă întâmpini probleme:
            <ul className="list-disc pl-6 mt-2">
              <li>Verifică log-urile pentru erori</li>
              <li>Asigură-te că texturile sunt în formatul corect</li>
              <li>Verifică dacă toate rețetele de crafting sunt configurate corect</li>
              <li>Verifică dacă materialul armurii este definit corespunzător</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: "distributie",
      title: "Exportarea și distribuirea modului",
      content: (
        <>
          <p className="mb-4">
            După ce ai testat modul și totul funcționează corect, poți să îl exporți și să îl distribui prietenilor sau comunității.
          </p>
          
          <StepItem number={1} title="Exportă modul ca fișier JAR">
            <p className="mb-2">
              În MCreator, dă click pe butonul "Build" din meniul principal și selectează "Export as JAR".
            </p>
            <p>
              Alege locația unde dorești să salvezi fișierul JAR.
            </p>
          </StepItem>
          
          <StepItem number={2} title="Distribuie modul">
            <p className="mb-2">
              Poți distribui modul tău în mai multe feluri:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Încarcă-l pe site-uri precum CurseForge sau Planet Minecraft</li>
              <li>Împărtășește-l cu prietenii prin transfer direct</li>
              <li>Creează un repository GitHub pentru proiectul tău</li>
            </ul>
          </StepItem>
          
          <InfoBox title="Idei de extindere" icon="star" variant="success">
            <p className="mb-2">Iată câteva idei pentru a extinde modul tău:</p>
            <ul className="list-disc pl-6">
              <li>Adaugă generare de minereuri de rubin în lume</li>
              <li>Creează unelte din rubin (săbii, târnăcoape, etc.)</li>
              <li>Adaugă efecte speciale când porți setul complet de armură</li>
              <li>Creează villager-i care fac tranzacții cu rubine</li>
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
      title: "Documentație oficială MCreator",
      url: "https://mcreator.net/wiki/"
    },
    {
      title: "Comunitatea MCreator",
      url: "https://mcreator.net/forum/"
    },
    {
      title: "Tutoriale video YouTube",
      url: "https://www.youtube.com/c/OfficialMCreator"
    },
    {
      title: "Inspirație pentru texturi",
      url: "https://www.planetminecraft.com/textures/"
    }
  ];

  return (
    <LessonLayout
      courseId="minecraft-modding"
      sessionId="2"
      title="Primul tău addon: Armură de rubin"
      subtitle="Învață să creezi o armură personalizată în Minecraft"
      heroColor="bg-gradient-to-r from-green-600 to-green-400"
      previousLesson={{
        title: "Introducere în Minecraft Modding",
        path: "/minecraftmodding/session1"
      }}
      nextLesson={{
        title: "Dimensiunea de cristal",
        path: "/minecraftmodding/crystal-realm"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RubyArmor;
