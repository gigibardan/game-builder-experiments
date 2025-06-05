import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson6 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'animare-rig-builder', title: 'Animează un RIG Builder' },
    { id: 'animare-caracter', title: 'Animează caracterul tău' },
    { id: 'resurse', title: 'Link-uri utile' },
  ];

  const resources = [
    { title: 'Documentație Roblox Studio', url: 'https://developer.roblox.com/en-us/' },
    { title: 'Tutorial Animații Roblox', url: 'https://www.youtube.com/watch?v=xNjVrK7UXiQ' },
    { title: 'Tutorial Adăugare Animații', url: 'https://www.youtube.com/watch?v=lB80xeKGbwI&t=160s' },
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
              Lecția de față vă va învăța cum să animați un <span className="font-bold">RIG Builder</span> și cum să adăugați animații caracterului vostru. Veți învăța să creați animații personalizate și să le implementați în jocurile voastre Roblox.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să generezi un RIG Builder identic cu avatarul tău",
            "Cum să creezi o animație personalizată de salut în Animation Editor",
            "Cum să setezi și să testezi animații pentru mișcări fluide",
            "Cum să imporți și să aplici animații din Toolbox pentru caracterul tău",
            "Cum să publici și să integrezi animații în joc folosind AnimationId",
          ]} />
        </>
      ),
    },
    {
      id: 'animare-rig-builder',
      title: 'Animează un RIG Builder',
      content: (
        <>
          <p className="mb-4">
            Animația pe care o vom crea împreună este mișcarea de salut, însă după ce veți învăța cum se face, veți putea anima RIG Builderi după bunul plac și imaginația voastră.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.1 Generarea RIG Builder-ului</h3>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <ol className="list-decimal list-inside space-y-2">
                <li>Deschideți un proiect nou</li>
                <li>În acel proiect navigați la secțiunea <span className="font-bold">Avatar</span></li>
                <li>Apoi apăsați pe <span className="font-bold">Rig Builder</span></li>
                <li>Selectați <span className="font-bold">RigType R6</span></li>
                <li>Alegeți <span className="font-bold">Body Shape-ul</span> dorit</li>
                <li>Iar apoi <span className="font-bold">My Avatar</span></li>
              </ol>
              <p className="mt-4">Această configurație vă va genera un caracter identic cu al vostru.</p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.1.png"
              alt="Interfața pentru generarea RIG Builder-ului în Roblox Studio"
              caption="Opțiunile Avatar, Rig Builder, RigType R6, Body Shape și My Avatar"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">1.2 Animarea RIG Builder-ului</h3>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                După ce a fost generat, animăm RIG-ul. Navigăm la secțiunea <span className="font-bold">AVATAR</span>, apoi apăsăm pe <span className="font-bold">Animation Editor</span>. După ce se deschide secțiunea de animare, modificăm numele animației, în loc de <span className="path">Untitled Animation</span> vom pune <span className="path">HI Animation</span>.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.1.png"
              alt="Deschiderea Animation Editor în Roblox Studio"
              caption="Setarea numelui animației la HI Animation"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Vom face salutul cu mâna dreaptă a personajului, așa că vom selecta mâna dreaptă, vom apăsa pe <span className="font-bold">Rotate</span> și apăsăm o dată pe cercul de rotire verticală (cea roșie) fără să îl rotim. Astfel, animația va porni cu mâna în poziție normală.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.2.png"
              alt="Selectarea mâinii drepte pentru animație în Roblox Studio"
              caption="Setarea poziției inițiale a mâinii folosind cercul roșu de rotire"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Pentru a trece la pasul următor trebuie să mișcăm bara albastră la 0.07s prin apăsarea Click dreapta la poziția pe care o vedeți în imaginea de mai jos.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.3.png"
              alt="Setarea barei albastre la 0.07s în Animation Editor"
              caption="Poziționarea barei albastre la 0.07s"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Următoarea mișcare este ridicarea mâinii, treptat pentru a crea o mișcare lină și ușor observabilă. Această mișcare se face prin rotirea mâinii pe plan vertical (cercul roșu), după cum se observă în imagine.
              </p>
            </div>
            <InfoBox title="Notă" icon="info" variant="warning">
              A se observa cum se adaugă în Animation Editor romburile care reprezintă mișcarea realizată.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.4.png"
              alt="Ridicarea mâinii în Animation Editor"
              caption="Rotirea mâinii pe plan vertical cu cercul roșu"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Următorul pas este de a trece bara albastră la 0.13s și de a mișca mâna încă puțin.
              </p>
            </div>
            <InfoBox title="Notă" icon="info" variant="warning">
              Este foarte important să fie mutată bara albastră apoi să fie realizată mișcarea mâinii.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.5.png"
              alt="Setarea barei albastre la 0.13s în Animation Editor"
              caption="Mutarea barei albastre la 0.13s"
            />
            <ImageModal
              src="/assets/images/roblox/RobloxL6.6.png"
              alt="Mișcarea suplimentară a mâinii în Animation Editor"
              caption="Mișcarea suplimentară a mâinii la 0.13s"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Următorii pași sunt similari, mutăm bara albastră (lăsând spațiu de o linie gri între ele) și executând mișcarea corespunzătoare.
              </p>
              <p>
                Următorul pas este de a ridica încă puțin mâna vertical, apoi după ce mutăm bara albastră, executăm mișcarea orizontală a mâinii (cercul albastru), iar în final coborâm mâna treptat cum am făcut-o când am ridicat-o.
              </p>
              <p>
                În cazul în care vreți o animație mai clară, puteți repeta animația orizontală a mâinii. Mai jos aveți pas cu pas mișcările care urmează pentru animația simplă de salut.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.7.png"
              alt="Mișcarea verticală suplimentară a mâinii"
              caption="Ridicarea suplimentară a mâinii pe verticală"
            />
            <ImageModal
              src="/assets/images/roblox/RobloxL6.8.png"
              alt="Mișcarea orizontală a mâinii în Animation Editor"
              caption="Mișcarea orizontală a mâinii cu cercul albastru"
            />
            <InfoBox title="Notă" icon="info" variant="warning">
              În cazul în care vreți să modificați ceva în animație sau să o ștergeți când ceva nu a ieșit bine, o puteți face apăsând Click dreapta pe bara pe care vreți să o ștergeți apoi <span className="font-bold">Delete Selected</span>.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.9.png"
              alt="Ștergerea unei poziții din Animation Editor"
              caption="Ștergerea unei poziții folosind Delete Selected"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                După ce terminați animația, vă recomandăm să o testați apăsând pe butonul <span className="font-bold">PLAY</span> așa cum observați în imagine. De asemenea ar fi bine să testați animația la fiecare mișcare nouă adăugată.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.1.png"
              alt="Testarea animației în Roblox Studio"
              caption="Testarea animației folosind butonul PLAY"
            />
          </div>
        </>
      ),
    },
    {
      id: 'animare-caracter',
      title: 'Animează caracterul tău',
      content: (
        <>
          <div className="mb-8">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Vom începe prin a adăuga un RIG din Toolbox. Din tab-ul <span className="font-bold">HOME</span> deschidem <span className="font-bold">TOOLBOX-ul</span> și căutăm <span className="path">R6 Walk Animations</span> și îl selectăm pe cel din imagine.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.10.png"
              alt="Adăugarea R6 Walk Animations din Toolbox"
              caption="Selectarea R6 Walk Animations din Toolbox"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                După adăugarea acestuia, îl poziționăm pe scenă urmând să folosim animația acestuia.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.11.png"
              alt="Poziționarea RIG-ului pe scenă"
              caption="Poziționarea R6 Walk Animations pe scenă"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Navigăm la TAB-ul <span className="font-bold">AVATAR</span>, apăsăm pe <span className="font-bold">ANIMATION EDITOR</span> selectăm opțiunea <span className="font-bold">Migrate</span> și apăsăm <span className="font-bold">OK</span>, urmând să se deschidă TAB-ul cu animațiile lui R6 Walk Animations.
              </p>
              <p>
                În <span className="font-bold">Animation Editor</span> apăsăm pe <span className="font-bold">...</span>, apoi <span className="font-bold">Load</span> și <span className="font-bold">Jump</span>, încărcând astfel animația de săritură.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.12.png"
              alt="Încărcarea animației Jump în Animation Editor"
              caption="Selectarea opțiunii Migrate și încărcarea animației Jump"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Verificăm de asemenea ca prioritatea animației să fie setată <span className="font-bold">Action</span>.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.13.png"
              alt="Setarea priorității animației la Action"
              caption="Verificarea priorității animației ca Action"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Publicăm animația pe Roblox Studio, tot din meniul <span className="font-bold">...</span> apoi <span className="path">Publish to Roblox</span>. Apăsăm pe butonul <span className="font-bold">SAVE</span> și apoi copiem ID-ul animației.
              </p>
            </div>
            <InfoBox title="Notă" icon="info" variant="warning">
              Lipește/notează undeva acel ID pentru a nu îl pierde.
            </InfoBox>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.14.png"
              alt="Publicarea animației pe Roblox Studio"
              caption="Publicarea animației și salvarea ID-ului"
            />
            <ImageModal
              src="/assets/images/roblox/RobloxL6.15.png"
              alt="Copierea ID-ului animației"
              caption="Copierea ID-ului animației publicate"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Revenind în Roblox Studio, apăsăm pe butonul albastru de <span className="font-bold">PLAY</span>.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.16.png"
              alt="Testarea jocului în Roblox Studio"
              caption="Apăsarea butonului PLAY pentru testare"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Vom copia animația personajului după traseul următor. Mergem în TAB-ul <span className="font-bold">VIEW</span> și deschidem <span className="font-bold">EXPLORER</span>-ul.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.17.png"
              alt="Deschiderea Explorer-ului în Roblox Studio"
              caption="Navigarea în TAB-ul VIEW pentru a deschide Explorer-ul"
            />
            <ImageModal
              src="/assets/images/roblox/RobloxL6.18.png"
              alt="Selectarea modulului Animate în Explorer"
              caption="Localizarea modulului Animate în Explorer"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Apoi, din Explorer: <span className="path">Workspace → numele tău din Roblox Studio (în cazul meu trainer_TechMinds) → Animate</span> și copiem modulul Animate prin Click dreapta apoi <span className="font-bold">Copy</span>, urmând să lipim conținutul în <span className="path">StarterCharacterScripts</span> din folderul <span className="path">StarterPlayer</span>.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.19.png"
              alt="Copierea modulului Animate în StarterCharacterScripts"
              caption="Copierea și lipirea modulului Animate în StarterCharacterScripts"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Următorul pas este să deschidem animația personajului extinzând <span className="path">Animate</span>, iar apoi <span className="path">#jump</span>, urmat de <span className="path">JumpAnim</span>. Deschidem Properties din TAB-ul VIEW și lipim în <span className="path">AnimationId</span> id-ul copiat mai devreme, cel al animației <span className="font-bold">Jump</span>.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.20.png"
              alt="Setarea AnimationId pentru JumpAnim"
              caption="Lipirea ID-ului animației în AnimationId"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                De asemenea, apăsând dublu Click pe <span className="path">"Animate"</span> se va deschide script-ul de animare a personajului. Căutăm proprietatea <span className="path">jump</span> (în cazul meu linia 54), iar în locul id-ului existent, lipim id-ul animației noastre.
              </p>
            </div>
            <ImageModal
              src="/assets/images/roblox/RobloxL6.21.png"
              alt="Editarea script-ului Animate pentru animația Jump"
              caption="Modificarea ID-ului în script-ul Animate"
            />
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-blue-200 mb-6">
              <p>
                Așadar, atunci când veți testa jocul, o dată cu apăsarea tastei <span className="font-bold">SPACE</span> se va executa noua animație a săriturii.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'resurse',
      title: 'Link-uri utile',
      content: (
        <>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-400 rounded-full opacity-30 -translate-y-6 translate-x-6"></div>
            <h3 className="text-xl font-bold mb-4">🔗 Link-uri utile</h3>
            <ul className="space-y-2 text-green-50">
              <li><a href="https://www.youtube.com/watch?v=xNjVrK7UXiQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=xNjVrK7UXiQ</a></li>
              <li><a href="https://www.youtube.com/watch?v=lB80xeKGbwI&t=160s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=lB80xeKGbwI&t=160s</a></li>
            </ul>
          </div>

          <Challenge title="Provocare finală: Animație complexă" difficulty="medium">
            <p>
              Creează o animație personalizată care combină mai multe mișcări (ex. salut cu mâna și o rotație a corpului). Public-o pe Roblox și aplic-o caracterului tău, apoi testeaz-o în joc. Ajustează timing-ul pentru a face animația cât mai fluidă!
            </p>
          </Challenge>
        </>
      ),
    },
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="6"
      title="Lecția 6 Crează o animație și animează-ți personajul"
      subtitle="Crearea și implementarea animațiilor personalizate în Roblox Studio"
      heroColor="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/robloxlua/session5npccreator",
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "//robloxlua/session7shop",
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson6;