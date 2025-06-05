import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';
import { Link } from 'react-router-dom';

const RobloxLesson1 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'accesare-terrain', title: 'Accesare Terrain Editor' },
    { id: 'unelte-edit', title: 'Unelte de editare' },
    { id: 'setari-pensula', title: 'Setări pensulă' },
    { id: 'creare-teren', title: 'Crearea terenului' },
    { id: 'vopsire-texturi', title: 'Vopsire și texturi' },
    { id: 'nivelare', title: 'Nivelare teren' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentația oficială Roblox Studio', url: 'https://create.roblox.com/docs/studio' },
    { title: 'Tutorial Terrain Editor', url: 'https://create.roblox.com/docs/building-and-visuals/modeling-with-parts/terrain' },
    { title: 'Ghid complet Roblox Development', url: 'https://developer.roblox.com' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <p className="text-lg leading-relaxed">
              <strong>Roblox Studio</strong> este un mediu de dezvoltare gratuit în care poți construi jocuri și experiențe 3D 
              folosind blocuri, teren și interfețe grafice. Prin limbajul de scripting <strong>Lua</strong> poți adăuga reguli 
              de joc, mișcare a personajelor, efecte vizuale și sunet, precum și funcții multiplayer. Cu unelte precum 
              <strong> Terrain Editor</strong>, ToolBox, Properties și Explorer, îți modelezi lumea după bunul plac și o faci interactivă.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să accesezi și să navighezi în Terrain Editor",
            "Principalele unelte pentru editarea terenului",
            "Configurarea setărilor pensulei pentru diferite efecte",
            "Crearea și modelarea terenului folosind uneltele Sculpt și Fill",
            "Aplicarea texturilor și materialelor pe teren",
            "Tehnici de nivelare și netezire a suprafețelor"
          ]} />
        </>
      )
    },
    {
      id: 'accesare-terrain',
      title: 'Deschidere și accesare Terrain Editor',
      content: (
        <>
          <p className="mb-4">
            Pentru a începe să lucrezi cu terenul în Roblox Studio, primul pas este să accesezi Terrain Editor-ul.
          </p>

          <StepItem number={1} title="Lansarea unui proiect">
            <p>Deschide Roblox Studio și lansează un proiect nou sau unul existent.</p>
          </StepItem>

          <StepItem number={2} title="Navigarea la Terrain Editor">
            <p>Din bara superioară, dă clic pe tab-ul <code className="bg-gray-100 px-2 py-1 rounded">Home → Editor</code>.</p>
          </StepItem>

          <StepItem number={3} title="Explorarea panoului">
            <p>Se afișează panoul Terrain Editor cu două file principale: <strong className="text-blue-600">Create</strong> și <strong className="text-blue-600">Edit</strong>.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL1.1.png" 
            alt="Accesarea Terrain Editor din bara de unelte" 
            caption="Accesarea Terrain Editor din bara principală de unelte în Roblox Studio"
          />

          <InfoBox title="Notă importantă" icon="info" variant="primary">
            Terrain Editor-ul este disponibil doar în modul Edit al Roblox Studio, nu în timpul testării jocului.
          </InfoBox>
        </>
      )
    },
    {
      id: 'unelte-edit',
      title: 'Navigarea interfeței și principalele unelte (Edit)',
      content: (
        <>
          <p className="mb-6">
            Tab-ul <strong>Edit</strong> din Terrain Editor conține toate uneltele necesare pentru modificarea terenului existent. 
            Fiecare unealtă are un scop specific în procesul de modelare:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-2">Select</h4>
              <p className="text-blue-700 text-sm">Alege și modifică selecții de volum</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-800 mb-2">Transform</h4>
              <p className="text-purple-700 text-sm">Mută, rotește sau scalează zone de teren</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-2">Fill</h4>
              <p className="text-green-700 text-sm">Umple spații goale cu volum (echivalent vechiului Add)</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-bold text-cyan-800 mb-2">Sea Level</h4>
              <p className="text-cyan-700 text-sm">Setezi înălțimea apei peste care nu se sculptează</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-2">Draw</h4>
              <p className="text-orange-700 text-sm">Trasezi forme lineare (cursuri de apă, șanțuri)</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2">Sculpt</h4>
              <p className="text-red-700 text-sm">Adaugi sau îndepărtezi volum (Add/Subtract)</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-800 mb-2">Smooth</h4>
              <p className="text-indigo-700 text-sm">Netezești denivelările</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-bold text-pink-800 mb-2">Paint</h4>
              <p className="text-pink-700 text-sm">Aplici materiale (iarbă, nisip, rocă)</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800 mb-2">Flatten</h4>
              <p className="text-yellow-700 text-sm">Nivelezi la o înălțime fixă (echivalent Resize)</p>
            </div>
          </div>

          <ImageModal 
            src="/assets/images/roblox/RobloxL1.2.png" 
            alt="Interfața Terrain Editor cu uneltele de editare" 
            caption="Interfața completă a Terrain Editor-ului cu toate uneltele disponibile"
          />

          <InfoBox title="Sfat pentru începători" icon="star" variant="secondary">
            Începe cu uneltele de bază: Sculpt pentru formarea terenului, Paint pentru texturi și Smooth pentru finisare.
          </InfoBox>
        </>
      )
    },
    {
      id: 'setari-pensula',
      title: 'Setări ale pensulei (Brush Settings)',
      content: (
        <>
          <p className="mb-4">
            Sub fiecare unealtă, poți configura setările pensulei pentru a controla precizia și efectul modificărilor tale:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Forme și dimensiuni
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Brush Shape:</span>
                    <span className="text-gray-600">Sferă, Cub, Cilindru</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Brush Size:</span>
                    <span className="text-gray-600">Diametrul zonei (unități Roblox)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Intensitate și mod
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Strength:</span>
                    <span className="text-gray-600">Intensitatea efectului (0-1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Flatten Mode:</span>
                    <span className="text-gray-600">Soft, Medium, Hard</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Poziționare
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Pivot Position:</span>
                    <span className="text-gray-600">Bottom, Center, Top</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Snapping:</span>
                    <span className="text-gray-600">Off sau Voxel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InfoBox title="Recomandare pentru setări" icon="info" variant="primary">
            Pentru începători, recomand să folosești Brush Shape = Sphere, Size = 16-32, Strength = 0.5-0.8 și Snapping = Off pentru control mai fin.
          </InfoBox>
        </>
      )
    },
    {
      id: 'creare-teren',
      title: 'Crearea și modelarea terenului',
      content: (
        <>
          <p className="mb-4">
            Procesul de creare a terenului implică combinarea mai multor unelte pentru a obține rezultatul dorit:
          </p>

          <StepItem number={1} title="Selectarea uneltei Sculpt">
            <p>Alege <strong className="text-blue-600">Sculpt</strong> pentru a adăuga sau îndepărta volum de teren.</p>
          </StepItem>

          <StepItem number={2} title="Adăugarea de volum">
            <p>Ține apăsat click stânga și trasează în spațiul 3D pentru a adăuga volum. Pentru a îndepărta volum, folosește click dreapta sau modifică setările.</p>
          </StepItem>

          <StepItem number={3} title="Ajustarea parametrilor">
            <p>Modifică <strong className="text-blue-600">Brush Size</strong> și <strong className="text-blue-600">Strength</strong> în funcție de necesități - valori mari pentru formațiuni ample, valori mici pentru detalii fine.</p>
          </StepItem>

          <StepItem number={4} title="Netezirea suprafețelor">
            <p>Combină cu <strong className="text-blue-600">Smooth</strong> pentru a netezi marginile aspre și a crea tranziții naturale.</p>
          </StepItem>

          <StepItem number={5} title="Crearea suprafețelor plate">
            <p>Folosește <strong className="text-blue-600">Fill</strong> și <strong className="text-blue-600">Sea Level</strong> pentru câmpii uniforme sau suprafețe de apă.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/roblox/RobloxL1.3.png" 
            alt="Exemplu de teren modelat cu Sculpt" 
            caption="Exemplu de teren creat folosind uneltele Sculpt și Smooth"
          />

          <InfoBox title="Flux de lucru recomandat" icon="star" variant="success">
            Urmează această ordine: Sculpt (formă de bază) → Smooth (netezire) → Fill (completări) → Paint (texturi finale).
          </InfoBox>
        </>
      )
    },
    {
      id: 'vopsire-texturi',
      title: 'Vopsirea și texturarea terenului',
      content: (
        <>
          <p className="mb-4">
            După ce ai creat forma terenului, următorul pas este să aplici texturi și materiale pentru un aspect realist:
          </p>

          <StepItem number={1} title="Selectarea uneltei Paint">
            <p>Activează <strong className="text-green-600">Paint</strong> din bara de unelte.</p>
          </StepItem>

          <StepItem number={2} title="Alegerea materialului">
            <p>În lista de materiale, alege din opțiunile disponibile: <strong>Grass</strong>, <strong>Rock</strong>, <strong>Sand</strong>, <strong>Snow</strong>, <strong>Wood</strong>, și multe altele.</p>
          </StepItem>

          <StepItem number={3} title="Configurarea pensulei">
            <p>Ajustează <strong className="text-green-600">Brush Size</strong> și <strong className="text-green-600">Strength</strong> în funcție de suprafața pe care lucrezi.</p>
          </StepItem>

          <StepItem number={4} title="Aplicarea texturii">
            <p>Apasă pe suprafața terenului și trasează pentru a aplica textura selectată.</p>
          </StepItem>

          <StepItem number={5} title="Tehnica de aplicare">
            <p>Începe cu zone largi folosind un brush mare, apoi detaliază cu un brush mic pentru tranziții naturale.</p>
          </StepItem>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mt-6">
            <h4 className="font-bold text-gray-800 mb-3">Materiale populare și utilizările lor:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div><strong>Grass:</strong> Câmpii, părcuri, zone verzi</div>
                <div><strong>Rock:</strong> Munți, pereți, structuri naturale</div>
                <div><strong>Sand:</strong> Plaje, deșerturi, zone aride</div>
              </div>
              <div className="space-y-2">
                <div><strong>Snow:</strong> Vârfuri montane, zone arctice</div>
                <div><strong>Water:</strong> Lacuri, râuri, oceane</div>
                <div><strong>Mud:</strong> Zone umede, mlaștini</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'nivelare',
      title: 'Nivelare fixă a terenului',
      content: (
        <>
          <p className="mb-4">
            Unealta Flatten este esențială pentru crearea suprafețelor plane și uniforme în terenul tău:
          </p>

          <StepItem number={1} title="Activarea uneltei Flatten">
            <p>Selectează <strong className="text-orange-600">Flatten</strong> din bara de unelte.</p>
          </StepItem>

          <StepItem number={2} title="Configurarea modului de nivelare">
            <p>Alege <strong className="text-orange-600">Flatten Mode</strong>:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Hard:</strong> Nivelare completă, fără tranziții</li>
              <li><strong>Medium:</strong> Tranziții moderate</li>
              <li><strong>Soft:</strong> Tranziții blânde și naturale</li>
            </ul>
          </StepItem>

          <StepItem number={3} title="Setarea punctului de referință">
            <p>Configurează <strong className="text-orange-600">Pivot Position</strong> și <strong className="text-orange-600">Flatten Plane</strong> pentru a stabili înălțimea de referință.</p>
          </StepItem>

          <StepItem number={4} title="Aplicarea nivelării">
            <p>Apasă și glisează cursorul peste zona pe care dorești să o nivelezi la înălțimea stabilită.</p>
          </StepItem>

          <InfoBox title="Cazuri de utilizare Flatten" icon="info" variant="secondary">
            Flatten este perfect pentru crearea fundațiilor de clădiri, drumurilor, pistelor de aterizare sau oricăror suprafețe care necesită uniformitate.
          </InfoBox>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii și bune practici',
      content: (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">💡 Sfaturi și bune practici</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Urmează secvența: <strong>Sculpt</strong> → <strong>Smooth</strong> → <strong>Paint</strong> → <strong>Flatten</strong> (dacă este necesar)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Salvează frecvent proiectul folosind <code className="bg-white bg-opacity-20 px-2 py-1 rounded">Ctrl+S</code>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Experimentează cu <strong>Snapping Voxel</strong> pentru aliniere precisă
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Folosește <strong>Draw</strong> pentru crearea cursurilor de apă și râurilor
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Combină mai multe materiale în Paint pentru aspect realist
              </li>
            </ul>
          </div>

          <InfoBox title="Ce ai învățat în această lecție" icon="success" variant="success">
            <ul className="list-disc list-inside space-y-2">
              <li>Accesarea și navigarea în Terrain Editor</li>
              <li>Utilizarea uneltelor principale: Sculpt, Paint, Smooth, Flatten</li>
              <li>Configurarea setărilor pensulei pentru rezultate optime</li>
              <li>Tehnici de creare și modelare a terenului</li>
              <li>Aplicarea texturilor și materialelor</li>
              <li>Metode de nivelare și netezire</li>
            </ul>
          </InfoBox>

          <ImageModal 
            src="/assets/images/roblox/RobloxL1.4.png" 
            alt="Exemplu de teren finalizat" 
            caption="Exemplu de teren complet, cu texturi și detalii aplicate"
          />

          <div className="mt-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Pregătire pentru lecția următoare</h3>
            <p className="text-purple-700">
              În lecția următoare vom explora lucrul cu obiecte și părți în Roblox Studio, inclusiv cum să plasezi, să rotești și să scalezi 
              obiecte pentru a crea structuri complexe. Asigură-te că te simți confortabil cu uneltele Terrain Editor înainte de a continua.
            </p>
          </div>

          <Challenge title="Provocare practică: Creează-ți primul peisaj" difficulty="medium">
            <p className="mb-3">Pune în practică ceea ce ai învățat creând un mic peisaj care să includă:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Un deal cu iarbă și câteva zone stâncoase</li>
              <li>O vale cu nisip</li>
              <li>O suprafață plană pentru o construcție viitoare</li>
              <li>Un mic curs de apă folosind Draw</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Experimentează cu diferite combinații de materiale și observă cum influențează aspectul final al terenului.
            </p>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="1"
      title="Terrain Editor & Basics Info About Roblox"
      subtitle="Învață să creezi și să modelezi teren în Roblox Studio folosind uneltele avansate de editare"
      heroColor="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600"
      previousLesson={{
        title: "Lecția anterioară",
        path: "#"
      }}
      nextLesson={{
        title: "Lecția 2 - Obiecte și Părți",
        path: "/robloxlua/session2quizgame"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson1;