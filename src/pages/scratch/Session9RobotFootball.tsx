
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session9RobotFootball = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'roboti', title: 'Controlul Roboților' },
    { id: 'minge', title: 'Programarea Mingii' },
    { id: 'scor', title: 'Sistemul de Scor' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Robot Football in Scratch"
      subtitle="Lecția 9 • Scratch Programming"
      courseId="scratch"
      sessionId="9"
      heroColor="bg-emerald-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session8wizardsquest"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session10flappyminecraftpart1"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            În acest joc captivant, doi roboți simpatici joacă fotbal pe un teren virtual. Fiecare robot este 
            controlat de jucător cu ajutorul tastelor, iar mingea ricosează când lovește roboții sau marginile 
            terenului. Scopul este să marchezi cât mai multe goluri împotriva adversarului!
          </p>
          <p className="mb-6">
            Robot Football este un joc distractiv pentru doi jucători, permițându-le să concureze într-un 
            meci de fotbal virtual cu roboți. Acest proiect te va ajuta să înveți concepte importante de 
            programare, precum controlul personajelor cu taste diferite, detectarea coliziunilor și implementarea 
            unui sistem de scor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-emerald-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul personajelor cu tastele (W, S și săgeți)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0">✓</div>
                  <span>Programarea mingii cu coliziuni și direcție aleatoare</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea sistemului de scor pentru fiecare robot</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0">✓</div>
                  <span>Animația de start cu numărătoare inversă</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="../../assets/images/robotfootballpreview.png" 
                alt="Previzualizare joc Robot Football" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <a href="https://scratch.mit.edu/projects/1167143998/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Am pregătit un proiect starter cu decorul și personajele adăugate. Tu vei implementa logica mingii, 
              controlul roboților și scorul!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <a href="https://scratch.mit.edu/projects/1167159029/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține toate personajele necesare pentru meciul de fotbal dintre roboți:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/robotfootballcharacters.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🤖
              </div>
              <div>
                <h4 className="font-bold">Robot Roșu</h4>
                <p className="text-sm text-gray-600">Controlat cu tastele <strong>W</strong> și <strong>S</strong>, acesta încearcă să marcheze în poarta adversarului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🤖
              </div>
              <div>
                <h4 className="font-bold">Robot Albastru</h4>
                <p className="text-sm text-gray-600">Controlat cu săgețile <strong>sus</strong> și <strong>jos</strong>, el apără poarta opusă și atacă.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ⚽
              </div>
              <div>
                <h4 className="font-bold">Mingea</h4>
                <p className="text-sm text-gray-600">Se mișcă automat, ricoșează de roboți și margini, și pornește cu o animație 3-2-1 după fiecare gol.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🟥
              </div>
              <div>
                <h4 className="font-bold">Linie1</h4>
                <p className="text-sm text-gray-600">Linia de poartă a robotului roșu. Dacă mingea o atinge, robotul albastru marchează un punct.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🟥
              </div>
              <div>
                <h4 className="font-bold">Linie2</h4>
                <p className="text-sm text-gray-600">Linia de poartă a robotului albastru. Dacă mingea o atinge, robotul roșu marchează un punct.</p>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Despre personaje:</h4>
            <ul className="list-disc ml-5 space-y-2">
              <li>Mingea are mai multe costume (3, 2, 1 și mingea) pentru animația de start.</li>
              <li>Roboții sunt poziționați de o parte și de alta a terenului și se mișcă doar pe verticală.</li>
              <li>Scorul fiecărui robot este afișat permanent cu ajutorul variabilelor <strong>robot_roșu</strong> și <strong>robot_albastru</strong>.</li>
            </ul>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți modifica costumele mingii sau ale roboților din tab-ul "Costume" pentru a personaliza jocul și mai mult!
            </p>
          </InfoBox>
        </section>

        <section id="roboti">
          <h2 className="text-2xl font-bold mb-4">2. Controlul roboților</h2>
          <p className="mb-4">
            Roboții <strong>robot_roșu</strong> și <strong>robot_albastru</strong> sunt controlați cu taste diferite pentru a permite jocul multiplayer. 
            Selectează fiecare robot și adaugă codul corespunzător:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/robotcod.png" 
              alt="Codul pentru roboți" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Robot Roșu</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Folosește tastele <strong>W</strong> (sus) și <strong>S</strong> (jos) pentru a se deplasa vertical</li>
                  <li>Verifică în buclă dacă tastele sunt apăsate și modifică coordonata Y corespunzător</li>
                  <li>Se limitează mișcarea la marginile terenului pentru a nu ieși în afara acestuia</li>
                </ul>
              </li>
              <li><strong>Robot Albastru</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Folosește tastele <strong>săgeată sus</strong> și <strong>săgeată jos</strong> pentru a se deplasa vertical</li>
                  <li>Utilizează aceeași logică ca Robotul Roșu, dar cu taste diferite</li>
                  <li>Ambii roboți se mișcă doar pe verticală, poziția lor pe orizontală (X) rămânând fixă</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza roboților modificând valoarea de deplasare (10) din blocurile "modifică y cu...". 
              O valoare mai mare îi va face să se miște mai repede, crescând dificultatea jocului.
            </p>
          </InfoBox>
        </section>

        <section id="minge">
          <h2 className="text-2xl font-bold mb-4">3. Programarea mingii</h2>
          <p className="mb-4">
            Mingea este elementul central al jocului, ea se mișcă automat și ricoșează de roboți și margini. 
            Selectează personajul <strong>Minge</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/ballcod.png" 
              alt="Codul pentru minge" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare și animație de start</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când începe jocul, mingea apare în centru și pornește cu o animație de countdown (3,2,1)</li>
                  <li>După ce se termină numărătoarea inversă, mingea își schimbă costumul în minge normală</li>
                  <li>Mingea pornește în mișcare într-o direcție aleatoare</li>
                </ul>
              </li>
              <li><strong>Ricoșarea și coliziunile</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Mingea se mișcă constant în direcția în care este orientată</li>
                  <li>Când atinge marginile terenului, mingea ricoșează prin schimbarea direcției</li>
                  <li>La atingerea unui robot, mingea se orientează spre robot, se rotește 90 de grade, apoi înaintează câțiva pași (ricoșează)</li>
                </ul>
              </li>
              <li><strong>Sistem de gol și restart</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când mingea atinge una din liniile de gol (Linie1 sau Linie2), trimite mesajul "restart"</li>
                  <li>La primirea mesajului "restart", mingea revine la centru și începe din nou animația de countdown</li>
                  <li>După terminarea animației, jocul continuă cu mingea pornind într-o direcție aleatoare</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Ricoșarea mingii de roboți creează un efect realist. Când mingea atinge un robot, aceasta se orientează 
              spre robot, se rotește 90 de grade (schimbându-și astfel direcția) și apoi se deplasează, creând efectul 
              de ricoșare bazat pe unghiul de impact.
            </p>
          </InfoBox>
        </section>

        <section id="scor">
          <h2 className="text-2xl font-bold mb-4">4. Sistemul de scor</h2>
          <p className="mb-4">
            Fiecare linie de gol adaugă puncte jucătorului corespunzător. Selectează personajele 
            <strong> Linie1</strong> și <strong>Linie2</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="../../assets/images/scorecod.png" 
              alt="Codul pentru sistemul de scor" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Linie1</strong> (linia de gol a robotului roșu):
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când mingea atinge această linie, robotul albastru marchează un gol</li>
                  <li>Se incrementează variabila "robot_albastru" cu 1 punct</li>
                  <li>Se trimite mesajul "restart" pentru a reseta poziția mingii și a reporni jocul</li>
                </ul>
              </li>
              <li><strong>Linie2</strong> (linia de gol a robotului albastru):
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când mingea atinge această linie, robotul roșu marchează un gol</li>
                  <li>Se incrementează variabila "robot_roșu" cu 1 punct</li>
                  <li>Se trimite mesajul "restart" pentru a reseta poziția mingii și a reporni jocul</li>
                </ul>
              </li>
              <li><strong>Afișarea scorului</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Variabilele "robot_roșu" și "robot_albastru" sunt afișate permanent pe ecran</li>
                  <li>Jucătorii pot vedea în orice moment scorul actual al meciului</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Pentru a face jocul mai interesant, poți adăuga o animație sau un efect sonor special când se 
              marchează un gol. De asemenea, poți implementa un scor maxim pentru a determina când se termină meciul.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">5. Provocări pentru îmbunătățirea jocului</h2>
          <p className="mb-4">
            Acum că ai implementat jocul de bază, poți adăuga funcționalități suplimentare pentru a-l face și mai captivant:
          </p>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎵
                </div>
                <div>
                  <h4 className="font-bold">Adaugă efecte sonore</h4>
                  <p className="text-sm text-gray-600">Sunet la gol sau când mingea lovește marginile.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un cronometru</h4>
                  <p className="text-sm text-gray-600">Setează o durată de joc (ex: 2 minute) și anunță câștigătorul la final.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold">Adaugă power-up-uri</h4>
                  <p className="text-sm text-gray-600">Introdu obiecte care modifică viteza mingii sau roboților.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎮
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un final</h4>
                  <p className="text-sm text-gray-600">Setează un scor maxim la care unul dintre personaje să câștige.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat un joc distractiv de fotbal între roboți, învățând să controlezi personaje, să implementezi 
            coliziuni și să gestionezi scorul. Acest proiect ți-a permis să înveți despre controlul personajelor 
            cu taste diferite, ricoșarea obiectelor și implementarea unui sistem de scor pentru doi jucători.
          </p>
          <p className="mb-4">
            Acum poți împărtăși jocul cu prietenii și familia pentru a juca împreună, îl poți personaliza adăugând 
            propriile tale idei și îmbunătățiri, și poți folosi aceste concepte pentru a crea alte jocuri multiplayer.
          </p>
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
                                                    <Link to="/scratch/session10flappyminecraftpart1" className="flex items-center">
                                                      <span>Continuă cu următoarea lecție</span>
                                                    </Link>
                                                  </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session9RobotFootball;
