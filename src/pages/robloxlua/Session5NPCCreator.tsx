import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson5 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'creare-customizare-npc', title: 'Crearea și customizarea NPC-ului' },
    { id: 'dialog-npc', title: 'Dialog NPC' },
    { id: 'sfaturi', title: 'Sfaturi și bune practici' },
  ];

  const resources = [
    { title: 'Documentație Roblox Studio', url: 'https://developer.roblox.com/en-us/' },
    { title: 'Roblox Scripting Tutorial', url: 'https://developer.roblox.com/en-us/learn-roblox/coding-scripts' },
    { title: 'Roblox Catalog', url: 'https://www.roblox.com/catalog' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-30 -translate-y-6 translate-x-6"></div>
            <h2 className="text-2xl font-bold mb-4">Introducere</h2>
            <p className="text-lg text-blue-50">
              În această lecție veți învăța să creați un <span className="font-bold">NPC</span> (Non-Player Character) și să îl faceți să poarte un dialog interactiv cu jucătorii. Vom explora crearea și customizarea unui personaj non-jucător, precum și implementarea unui sistem de dialog complex folosind structuri arborescente în Roblox Studio.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să creezi un NPC folosind Rig Builder",
            "Cum să customizezi aspectul NPC-ului (culoare, îmbrăcăminte, păr, față)",
            "Cum să implementezi un sistem de dialog fără cod",
            "Cum să folosești structuri arborescente pentru dialoguri interactive",
            "Cum să testezi și să optimizezi interacțiunile cu NPC-ul",
          ]} />
        </>
      ),
    },
    {
      id: 'creare-customizare-npc',
      title: 'Crearea și customizarea NPC-ului',
      content: (
        <>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.1 Creare NPC</h3>
            <p className="mb-4">
              Pentru a crea un NPC adăugați un <span className="font-bold">Rig Builder</span>, din TAB-ul <span className="path">AVATAR</span>, selectăm <span className="font-bold">R6</span> și <span className="font-bold">Block Avatar</span>. Așezăm Rig-ul pe scenă.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.2.png"
              alt="Creare NPC folosind Rig Builder în Roblox Studio"
              caption="Așezarea Rig-ului pe scenă"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.2 Customizare</h3>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.3.png"
              alt="Explorarea Rig-ului în Roblox Studio"
              caption="Selectarea Body Colors din Rig"
            />
            <p className="mb-4">
              Deschideți <span className="font-bold">Explorer</span> din <span className="path">VIEW</span>, apoi din <span className="font-bold">Rig</span> selectați <span className="font-bold">Body Colors</span>. Alegeți o culoare cu care veți colora pielea NPC-ului. Pentru modelul pe care l-am creat am folosit culoarea <span className="font-bold">"Cool Yellow"</span>.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.4.png"
              alt="Setarea culorii NPC-ului în Roblox Studio"
              caption="Culoare Cool Yellow aplicată NPC-ului"
            />
            <p className="mb-4">
              Pentru a îi adăuga îmbrăcăminte apăsați pe <u>butonul</u> <span className="font-bold">+</span> din dreapta "Rig" și adăugați pe rând <span className="font-bold">Pants</span> și <span className="font-bold">Shirt</span>, urmând să redenumiți din Clothing în <span className="font-bold">Pants</span> respectiv <span className="font-bold">Shirt</span>.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.5.png"
              alt="Adăugarea îmbrăcămintei în Roblox Studio"
              caption="Adăugarea Pants și Shirt în Rig"
            />
            <p className="mb-4">
              Nu vrem să "reinventăm roata" așa că vă sugerez să navigați pe Marketplace-ul Roblox:<br />
              <span className="path">https://www.roblox.com/catalog</span>, căutați un tricou și o pereche de pantaloni pe care o vom atribui NPC-ului nostru.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.6.png"
              alt="Navigarea pe Roblox Marketplace"
              caption="Selectarea îmbrăcămintei din Marketplace"
            />
            <p className="mb-4">
              Accesați pagina tricoului/pantalonilor și copiați din URL id-ul îmbrăcăminții.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.7.png"
              alt="Copierea ID-ului îmbrăcămintei din Roblox Marketplace"
              caption="Copierea ID-ului din URL"
            />
            <p className="mb-4">
              Apoi, lipiți ID-ul în <span className="font-bold">ShirtTemplate</span> din <span className="font-bold">Properties</span>.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.8.png"
              alt="Setarea ShirtTemplate în Roblox Studio"
              caption="Lipirea ID-ului în ShirtTemplate"
            />
            <InfoBox title="Notă" icon="info" variant="warning">
              În cazul în care ați copiat ID-ul și pe NPC nu s-a afișat îmbrăcămintea, încercați cu ID-ul alteia.<br /><br />
              De asemenea, pentru a modifica fața NPC-ului mergeți în secțiunea <strong>Head</strong>, iar în <strong>face</strong> modificați <strong>Texture</strong> cu ID-ul din URL-ul feței alese din Marketplace.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.9.png"
              alt="Modificarea feței NPC-ului în Roblox Studio"
              caption="Setarea texturii feței NPC-ului"
            />
            <p className="mb-4">
              Mai departe, pentru a adăuga păr NPC-ului deschideți Command Bar-ul și executați următoarea comandă:
            </p>
            <CodeExample title="Comandă pentru adăugarea părului" language="lua">
              {`game:GetService("InsertService"):LoadAsset(0).Parent=game.Workspace`}
            </CodeExample>
            <p className="mb-4">
              În loc de <span className="font-bold">0</span> puneți ID-ul părului pe care vreți să i-l atribuiți NPC-ului.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.10.png"
              alt="Deschiderea Command Bar în Roblox Studio"
              caption="Executarea comenzii în Command Bar"
            />
            <ImageModal
              src="/assets/images/roblox/RobloxL5.11.png"
              alt="Modelul părului în Workspace"
              caption="Modelul părului adăugat în Workspace"
            />
            <p className="mb-4">
              În Workspace va apărea un Model, scoateți conținutul Modelului în afara acestuia, apoi ștergeți modelul.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.12.png"
              alt="Mutarea părului în Rig"
              caption="Mutarea conținutului modelului în Rig"
            />
            <p className="mb-4">
              Copiați conținutul modelului și lipiți-l în Rig, astfel părul se va așeza perfect pe NPC.
            </p>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.13.png"
              alt="Părul așezat pe NPC în Roblox Studio"
              caption="Părul așezat corect pe NPC"
            />
            <InfoBox title="Notă" icon="info" variant="warning">
              Nu uitați să setați proprietatea <strong>Anchored</strong> la <strong>TRUE</strong>. Puteți face asta prin selectarea Rig-ului apoi apăsând <strong>Anchor</strong>.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL5.14.png"
              alt="Setarea proprietății Anchored în Roblox Studio"
              caption="Setarea proprietății Anchored la TRUE"
            />
          </div>
        </>
      ),
    },
    {
      id: 'dialog-npc',
      title: 'Dialog NPC',
      content: (
        <>
          <p className="mb-4">
            Crearea dialogului cu NPC-ul se va face fără cod. Algoritmul este unul repetitiv și are o structură arborescentă după caz.
          </p>
          <ImageModal
            src="/assets/images/roblox/RobloxL5.15.png"
            alt="Structura arborescentă a dialogului în Roblox Studio"
            caption="Exemplu de structură arborescentă pentru dialog"
          />
          <p className="mb-4">
            Vom începe prin a adăuga <span className="font-bold">Dialog</span> NPC-ului în secțiunea <span className="font-bold">Head</span>. Deschideți Properties și apăsați pe Dialog. Modificați <span className="font-bold">InitialPrompt</span> și <span className="font-bold">GoodByeDialog</span> după preferințe. <span className="font-bold">InitialPrompt</span> va apărea ca prim mesaj al NPC-ului.
          </p>
          <ImageModal
            src="/assets/images/roblox/RobloxL5.16.png"
            alt="Setarea proprietăților Dialog în Roblox Studio"
            caption="Configurarea InitialPrompt și GoodByeDialog"
          />
          <p className="mb-4">
            Următorul pas facilitează conversația dintre utilizator și NPC. În <span className="font-bold">Dialog</span> adăugați <span className="font-bold">DialogChoice</span>.
          </p>
          <ImageModal
            src="/assets/images/roblox/RobloxL5.17.png"
            alt="Adăugarea DialogChoice în Roblox Studio"
            caption="Adăugarea unui DialogChoice în structura dialogului"
          />
          <p className="mb-4">
            În proprietățile <span className="font-bold">DialogChoice</span>-ului modificați <span className="font-bold">UserDialog</span> care va fi răspunsul Userului și <span className="font-bold">ResponseDialog</span> care este răspunsul NPC-ului. De asemenea, puteți oferi mai multe variante de răspuns <span className="font-bold">User</span>-ului adăugând încă un <span className="font-bold">DialogChoice</span>.
          </p>
          <ImageModal
            src="/assets/images/roblox/RobloxL5.17.png"
            alt="Configurarea DialogChoice în Roblox Studio"
            caption="Setarea UserDialog și ResponseDialog"
          />
          <p className="mb-4">
            De asemenea, unui <span className="font-bold">DialogChoice</span> puteți adăuga un alt <span className="font-bold">DialogChoice</span> realizând astfel un dialog continuu cu NPC-ul.
          </p>
          <ImageModal
            src="/assets/images/roblox/RobloxL5.18.png"
            alt="Dialog continuu în Roblox Studio"
            caption="Adăugarea unui DialogChoice sub un alt DialogChoice"
          />
        </>
      ),
    },
    {
      id: 'sfaturi',
      title: 'Sfaturi și bune practici',
      content: (
        <>
          <div className="bg-blue-500 text-white p-6 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-full opacity-30 -translate-y-4 translate-x-4"></div>
            <h3 className="text-xl font-bold mb-4">💡 Sfaturi și bune practici</h3>
            <ul className="space-y-2 text-blue-50">
              <li>Testați dialogul în mod Play pentru a verifica fluxul conversației.</li>
              <li>Organizați DialogChoice-urile într-o structură logică și ușor de urmărit.</li>
              <li>Folosiți nume descriptive pentru DialogChoice-uri în Explorer.</li>
              <li>Asigurați-vă că NPC-ul este Anchored pentru a nu se mișca în timpul dialogului.</li>
              <li>Experimentați cu diferite răspunsuri pentru a crea conversații interactive.</li>
            </ul>
          </div>

          <Challenge title="Provocare finală: Dialog complex" difficulty="medium">
            <p>
              Creează un NPC cu un dialog arborescent care să includă cel puțin 3 niveluri de DialogChoice-uri. Asigură-te că dialogul are răspunsuri variate și o structură logică. Testează-l în mod Play și ajustează-l pentru a fi cât mai interactiv!
            </p>
          </Challenge>
        </>
      ),
    },
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="5"
      title="Lecția 5 - NPC Creator and Talking NPC"
      subtitle="Crearea și customizarea unui NPC cu dialog interactiv în Roblox Studio"
      heroColor="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/robloxlua/session4obby",
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/robloxlua/session6createanimations",
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson5;