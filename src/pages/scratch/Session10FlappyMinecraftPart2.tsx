import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session10FlappyMinecraftPart2 = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'flappypig1', title: 'FlappyPig (Partea 1)' },
    { id: 'flappypig2', title: 'FlappyPig (Partea 2)' },
    { id: 'flappypig3', title: 'FlappyPig (Partea 3)' },
    { id: 'flappypig4', title: 'FlappyPig (Partea 4)' },
    { id: 'effects', title: 'Efecte Vizuale' },
    { id: 'music', title: 'Muzică și Sunete' },
    { id: 'final', title: 'Finalizare și Testare' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Flappy Minecraft în Scratch (Partea 2)"
      subtitle="Lecția 10 • Scratch Programming"
      courseId="scratch"
      sessionId="10"
      heroColor="bg-green-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Partea 1",
        path: "/scratch/session10flappyminecraftpart1"
      }}
       nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session11"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Continuăm jocul Flappy Minecraft</h2>
          <p className="mb-4">
            Bine ai revenit! În prima parte a acestui proiect, am configurat scena, logo-ul, platforma și 
            obstacolele pentru jocul nostru Flappy Minecraft. Acum, în partea a doua, vom adăuga elementul 
            cel mai important: personajul principal FlappyPig, împreună cu efectele vizuale și sunetele care 
            vor face jocul complet.
          </p>
          <p className="mb-6">
            În această parte, vom învăța cum să implementăm mecanica de bază a zborului, inclusiv gravitația și salturile, 
            cum să detectăm coliziunile pentru a finaliza jocul, și cum să adăugăm efecte vizuale și sonore 
            pentru a îmbunătăți experiența de joc.
          </p>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să continuăm!</h2>
            <p className="mb-4">
              Asigură-te că ai finalizat partea întâi a proiectului înainte de a continua. Dacă nu ai făcut acest lucru, 
              te rugăm să te întorci și să completezi prima parte pentru a avea toate elementele necesare pentru această parte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <a href="https://scratch.mit.edu/projects/1174204623/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Dacă nu ai finalizat partea întâi, poți folosi proiectul starter care include deja elementele din prima parte.</p>
            </div>
          </div>
        </section>

        <section id="flappypig1">
          <h2 className="text-2xl font-bold mb-4">1. Programarea lui FlappyPig (Partea 1)</h2>
          <p className="mb-4">
            FlappyPig este personajul principal al jocului nostru, pe care jucătorul îl va controla. 
            Programarea acestui personaj este mai complexă, așa că o vom împărți în mai multe părți.
            Mai întâi, să configurăm poziția inițială și animația înainte de începerea jocului.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajFlappyPigMinecraft1.png" 
              alt="Codul pentru FlappyPig (Partea 1)" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea poziției</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setăm variabilele "rotation" și "ySpeed" la 0 (acestea vor controla fizica porcușorului)</li>
                  <li>Poziționăm porcușorul pe partea stângă a ecranului (x=-20, y=0)</li>
                  <li>Îl orientăm spre dreapta (90 de grade)</li>
                  <li>Setăm variabilele Rotation și ySpeed la 0 pentru a începe cu valori neutre</li>
                </ul>
              </li>
              <li><strong>Animația de așteptare</strong> - În buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Porcușorul se mișcă ușor în sus și în jos, schimbând coordonata y cu +1 și -1</li>
                  <li>Schimbă costumul pentru a crea o animație de zbor</li>
                  <li>Această animație continuă până când jocul începe</li>
                </ul>
              </li>
              <li><strong>Pregătirea pentru începerea jocului</strong> - Când primește mesajul "Begin":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Porcușorul devine vizibil (dacă nu era deja)</li>
                  <li>Difuzează mesajul "Begin2" pentru a declanșa următoarea fază a jocului</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Variabilele de fizică" icon="info" variant="info">
            <p>
              Variabilele "rotation" și "ySpeed" sunt cruciale pentru simularea fizicii zborului. "rotation" 
              va controla unghiul de înclinare al porcușorului, iar "ySpeed" va controla viteza sa verticală, 
              simulând efectele gravitației și ale bătăilor din aripi.
            </p>
          </InfoBox>
        </section>

        <section id="flappypig2">
          <h2 className="text-2xl font-bold mb-4">2. Programarea lui FlappyPig (Partea 2)</h2>
          <p className="mb-4">
            Acum vom adăuga codul care permite controlul porcușorului prin apăsarea tastelor sau a 
            mouse-ului. Acest cod va implementa mecanica de bază a zborului.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajFlappyPigMinecraft2.png" 
              alt="Codul pentru FlappyPig (Partea 2)" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea jocului activ</strong> - Când primește mesajul "Begin2":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setăm mărimea porcușorului la 80% din dimensiunea originală</li>
                  <li>Setăm variabila ySpeed la 0 pentru a începe cu o viteză verticală neutră</li>
                </ul>
              </li>
              <li><strong>Implementarea controlului</strong> - În buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verificăm dacă jucătorul apasă butonul mouse-ului sau orice tastă</li>
                  <li>Când una dintre aceste acțiuni este detectată, se produce un salt</li>
                  <li>Pentru salt, redăm un sunet "High Whoosh" pentru efect audio</li>
                  <li>Setăm ySpeed la 10 pentru a propulsa porcușorul în sus</li>
                  <li>Setăm Rotation la 10 pentru a-l orienta ușor în sus</li>
                </ul>
              </li>
              <li><strong>Menținerea stării de zbor</strong> - În continuare:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Așteptăm până când jucătorul nu mai apasă nicio tastă sau mouse</li>
                  <li>Acest lucru va permite porcușorului să cadă din nou sub efectul gravitației</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Mecanism de salt din Flappy Minecraft este simplu dar eficient: apăsarea unei taste sau a mouse-ului 
              propulsează porcușorul în sus, iar eliberarea controlului îl lasă să cadă sub efectul gravitației. 
              Acest sistem simplu creează un gameplay captivant care necesită sincronizare precisă.
            </p>
          </InfoBox>
        </section>

        <section id="flappypig3">
          <h2 className="text-2xl font-bold mb-4">3. Programarea lui FlappyPig (Partea 3)</h2>
          <p className="mb-4">
            În această parte, vom adăuga efectele gravitației și fizica de rotație pentru a face mișcarea 
            porcușorului să pară mai naturală și mai fluidă.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajFlappyPigMinecraft3.png" 
              alt="Codul pentru FlappyPig (Partea 3)" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Implementarea gravitației</strong> - Când primește mesajul "Begin2":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, verificăm și ajustăm direcția porcușorului în funcție de viteza verticală</li>
                  <li>Dacă "direcția" (calculată din viteza verticală) este mai mare de 100, orientăm porcușorul la 100 de grade (aproape drept în sus)</li>
                  <li>Dacă "direcția" este mai mică de 70, orientăm porcușorul la 70 de grade (ușor în jos)</li>
                  <li>Modificăm Rotation cu -0.8 în fiecare iterație pentru a simula rotația naturală datorată gravitației</li>
                  <li>Modificăm ySpeed cu -1 în fiecare iterație pentru a simula accelerația gravitațională</li>
                </ul>
              </li>
              <li><strong>Limitarea rotației</strong> - În aceeași buclă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verificăm dacă Rotation a devenit prea negativă (mai mică de -8) și o limităm la -8 pentru a evita o rotație excesivă</li>
                  <li>Verificăm dacă Rotation a devenit prea pozitivă (mai mare de 8) și o limităm la 8 pentru a evita o rotație excesivă</li>
                  <li>Aceste limite asigură că porcușorul nu se va roti complet, ceea ce ar părea nerealist</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Despre fizica jocului" icon="info" variant="info">
            <p>
              Simularea fizicii este un aspect crucial al jocurilor de tip "flappy". Observă cum folosim două 
              variabile (ySpeed și Rotation) pentru a crea o mișcare fluidă și realistă. ySpeed controlează 
              mișcarea verticală, iar Rotation controlează unghiul porcușorului, făcându-l să se încline în jos 
              când cade și în sus când sare.
            </p>
          </InfoBox>
        </section>

        <section id="flappypig4">
          <h2 className="text-2xl font-bold mb-4">4. Programarea lui FlappyPig (Partea 4)</h2>
          <p className="mb-4">
            În ultima parte a programării lui FlappyPig, vom adăuga codul pentru detectarea coliziunilor și 
            pentru finalizarea jocului atunci când porcușorul lovește un obstacol sau platforma.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajFlappyPigMinecraft4.png" 
              alt="Codul pentru FlappyPig (Partea 4)" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Detectarea coliziunilor</strong> - Când primește mesajul "Begin2":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, verificăm dacă porcușorul atinge un obstacol sau platforma</li>
                  <li>Dacă se detectează o coliziune, se declanșează animația de final de joc</li>
                </ul>
              </li>
              <li><strong>Animația de final</strong> - Când se detectează o coliziune:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se redau două sunete pentru efect: "Minecraft pig death" și "Clang"</li>
                  <li>Se difuzează mesajul "ded" pentru a informa toate celelalte personaje că jocul s-a încheiat</li>
                  <li>Setăm ySpeed la o valoare mare (15) pentru a simula un "salt" după coliziune</li>
                  <li>Schimbăm costumul la "pigboifailed" pentru a arăta un porcușor "învins"</li>
                  <li>Adăugăm o secvență de animație cu repetarea unor efecte de rotație și cădere</li>
                  <li>Modificăm efectul "fantomă" pentru a face porcușorul să dispară treptat</li>
                  <li>Difuzăm mesajul "PlayAgain" pentru a permite reînceperea jocului</li>
                  <li>Ascundem porcușorul și oprim scriptul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Animația de final de joc este un element important pentru experiența jucătorului. În loc să încheiem 
              brusc jocul, adăugăm o secvență de efecte vizuale și sonore care face finalul mai satisfăcător și 
              oferă un feedback clar că jocul s-a încheiat.
            </p>
          </InfoBox>
        </section>

        <section id="effects">
          <h2 className="text-2xl font-bold mb-4">5. Adăugarea efectelor vizuale</h2>
          <p className="mb-4">
            Pentru a îmbunătăți experiența vizuală a jocului, vom adăuga efecte speciale care apar 
            atunci când jucătorul obține puncte. Vom folosi personajul <strong>Effect</strong> pentru acest lucru.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prima parte a codului pentru Effect:</h3>
              <ImageModal 
                src="/assets/images/scratch/personajEffectMinecraft1.png" 
                alt="Codul pentru Effect (Partea 1)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">A doua parte a codului pentru Effect:</h3>
              <ImageModal 
                src="/assets/images/scratch/personajEffectMinecraft2.png" 
                alt="Codul pentru Effect (Partea 2)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea personajului Effect</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Ascundem personajul Effect original, deoarece vom folosi doar clonele sale</li>
                </ul>
              </li>
              <li><strong>Crearea efectelor pentru puncte</strong> - Când primește mesajul "point":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creează o clonă care va afișa efectul vizual pentru obținerea unui punct</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Devinje vizibilă</li>
                  <li>Se poziționează la coordonatele x=0, y=0 (centrul ecranului)</li>
                  <li>Repetă o secvență în care modifică x cu -5 pixeli pentru a se deplasa spre stânga</li>
                </ul>
              </li>
              <li><strong>Efectele vizuale pentru început și sfârșit</strong> - Când primește mesajul "Begin" sau "ded":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setează efectul "fantomă" la 0 (transparent) și apoi îl crește treptat</li>
                  <li>Modifică mărimea personajului pentru a crea un efect de "pulsație"</li>
                  <li>La final, oprește alte scripturi și ascunde personajul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Efectele vizuale adaugă profunzime și feedback vizual jocului. Când jucătorul obține un punct, 
              un efect vizual apare, oferind o satisfacție imediată și o confirmare vizuală a succesului.
            </p>
          </InfoBox>
        </section>

        <section id="music">
          <h2 className="text-2xl font-bold mb-4">6. Adăugarea muzicii și sunetelor</h2>
          <p className="mb-4">
            În ultimul pas, vom adăuga muzica de fundal și vom coordona sunetele jocului folosind 
            personajul <strong>Music</strong>.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajMusicMinecraft.png" 
              alt="Codul pentru Music" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea muzicii</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Într-o buclă infinită, verificăm dacă jucătorul apasă o tastă sau butonul mouse-ului</li>
                  <li>Când una dintre aceste acțiuni este detectată, difuzăm mesajul "Begin" pentru a începe jocul</li>
                  <li>Oprim scriptul curent pentru a evita redeclanșarea acestuia</li>
                </ul>
              </li>
              <li><strong>Comportamentul la începerea jocului</strong> - Când primește mesajul "Begin":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setăm efectul "fantomă" la 0 (fără transparență)</li>
                  <li>Repetăm de 10 ori o secvență în care creștem efectul "fantomă" și mărimea personajului</li>
                  <li>Aceste efecte creează o tranziție vizuală la începutul jocului</li>
                  <li>Oprim alte scripturi pentru a evita interferențele</li>
                  <li>Ascundem personajul Music, deoarece nu mai are nevoie să fie vizibil</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Sunetele sunt o parte esențială a experienței de joc. Ele oferă feedback imediat pentru acțiunile 
              jucătorului și creează o atmosferă imersivă. În Flappy Minecraft, am adăugat sunete pentru salturi, 
              colectarea punctelor și game over, toate contribuind la experiența generală.
            </p>
          </InfoBox>
        </section>

        <section id="final">
          <h2 className="text-2xl font-bold mb-4">7. Finalizarea și testarea jocului</h2>
          <p className="mb-4">
            Acum că ai programat toate personajele și componentele, este timpul să testezi jocul și să 
            faci eventuale ajustări. Apasă steagul verde pentru a începe jocul și testează toate funcționalitățile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="/assets/images/scratch/previewminecraft.png" 
                alt="Previzualizare joc Flappy Minecraft" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                  <a href="https://scratch.mit.edu/projects/1167729729" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Puncte cheie de verificat:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Porcușorul răspunde corect la comenzile tale (apăsarea tastelor sau a mouse-ului)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Obstacolele apar regulat și se mișcă uniform spre stânga</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Scorul crește când treci cu succes prin obstacole</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Jocul se termină corect când lovești un obstacol sau platforma</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Efectele vizuale și sonore funcționează așa cum te aștepți</span>
                </li>
              </ul>
            </div>
          </div>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai finalizat jocul de bază, poți încerca aceste îmbunătățiri avansate:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🚀
                </div>
                <div>
                  <h4 className="font-bold">Niveluri de dificultate</h4>
                  <p className="text-sm text-gray-600">Adaugă opțiuni pentru diferite niveluri de dificultate, modificând viteza sau frecvența obstacolelor.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Scor maxim</h4>
                  <p className="text-sm text-gray-600">Implementează un sistem care să rețină și să afișeze recordul personal al jucătorului.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎁
                </div>
                <div>
                  <h4 className="font-bold">Bonusuri speciale</h4>
                  <p className="text-sm text-gray-600">Adaugă obiecte bonus care pot fi colectate pentru puncte extra sau abilități speciale.</p>
                </div>
                </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎨
                </div>
                <div>
                  <h4 className="font-bold">Personaje alternative</h4>
                  <p className="text-sm text-gray-600">Permite jucătorului să aleagă între diferite personaje Minecraft, fiecare cu propriile caracteristici.</p>
                </div>
              </div>
            </div>
          </Challenge>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold mb-3">Felicitări!</h3>
            <p className="mb-4">
              Ai finalizat cu succes jocul Flappy Minecraft! Acest proiect ți-a permis să înveți și să pui în practică 
              numeroase concepte importante în programare, cum ar fi fizica de bază, detectarea coliziunilor, gestionarea 
              scorului și crearea de efecte vizuale și sonore.
            </p>
            <p className="mb-4">
              Acum că stăpânești aceste concepte, poți crea propriile versiuni ale jocului, adăugând elemente noi sau 
              modificând cele existente pentru a crea o experiență unică. De asemenea, poți folosi aceste cunoștințe 
              pentru a dezvolta alte tipuri de jocuri în Scratch.
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="https://scratch.mit.edu/projects/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  <span>Creează propriul tău joc!</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session10FlappyMinecraftPart2;