
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5BeachBallBounce = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'inelul', title: 'Programarea Inelului' },
    { id: 'obiecte', title: 'Programarea Obiectelor' },
    { id: 'peștele', title: 'Programarea Peștelui Balon' },
    { id: 'conditii', title: 'Condiții de Victorie și Înfrângere' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Beach Ball Bounce in Scratch"
      subtitle="Lecția 5 • Scratch Programming"
      courseId="scratch"
      sessionId="5"
      heroColor="bg-cyan-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session4cityrunner"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session6stitchbeach"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-o zi însorită de vară, te afli pe o plajă frumoasă și te distrezi în apă cu un inel de înot. 
            Scopul tău este să colectezi mingi de plajă și scoici care plutesc pe apă pentru a obține puncte, 
            dar să eviți peștii balon care îți pot sparge inelul și astfel să pierzi jocul.
          </p>
          <p className="mb-6">
            Jocul "Beach Ball Bounce" este perfect pentru începători în programare și te învață să controlezi 
            un personaj, să generezi obiecte aleatorii, să detectezi coliziuni și să implementezi un sistem de 
            punctaj captivant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-cyan-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul inelului de înot cu tastele săgeți</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea de obiecte aleatorii în apă</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de punctaj</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea condițiilor de victorie și înfrângere</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4preview.png" 
                alt="Previzualizare joc Beach Ball Bounce" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600">
                  <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Pentru a crea acest joc mai ușor, vom începe cu un proiect nou în Scratch și vom adăuga elementele necesare pe parcurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <a href="https://scratch.mit.edu/projects/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide Scratch Editor</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Dacă ai deja un cont Scratch, autentifică-te pentru a-ți salva proiectul automat.</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Pentru jocul nostru, vom avea nevoie de următoarele personaje:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-cyan-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏊
              </div>
              <div>
                <h4 className="font-bold">Inelul de înot</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl vei controla cu săgețile stânga-dreapta.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏐
              </div>
              <div>
                <h4 className="font-bold">Mingea de plajă</h4>
                <p className="text-sm text-gray-600">Obiect bun care aduce 1 punct când este colectat.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🐚
              </div>
              <div>
                <h4 className="font-bold">Scoica</h4>
                <p className="text-sm text-gray-600">Obiect bun care aduce 3 puncte când este colectată.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🐡
              </div>
              <div>
                <h4 className="font-bold">Peștele balon</h4>
                <p className="text-sm text-gray-600">Obiect periculos care termină jocul când este atins.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏆
              </div>
              <div>
                <h4 className="font-bold">Ecranele de victorie/înfrângere</h4>
                <p className="text-sm text-gray-600">Mesaje care apar la sfârșitul jocului.</p>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Adăugarea personajelor:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Pentru <strong>Inelul de înot</strong>, caută "swim ring" sau "life buoy" în biblioteca Scratch</li>
              <li>Pentru <strong>Mingea de plajă</strong>, caută "beach ball" în biblioteca Scratch</li>
              <li>Pentru <strong>Scoică</strong>, caută "shell" sau "seashell" în biblioteca Scratch</li>
              <li>Pentru <strong>Peștele balon</strong>, caută "pufferfish" sau "blowfish" în biblioteca Scratch</li>
              <li>Pentru <strong>Fundalul</strong>, alege un fundal de ocean sau apă din biblioteca Scratch</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Dacă nu găsești exact personajele de care ai nevoie, poți folosi alternative similare 
              sau poți desena propriile personaje utilizând editorul de costume din Scratch.
            </p>
          </InfoBox>
        </section>

        <section id="inelul">
          <h2 className="text-2xl font-bold mb-4">2. Programarea inelului de înot</h2>
          <p className="mb-4">
            Primul pas este să facem inelul de înot să se miște stânga-dreapta folosind tastele săgeți. 
            Selectează personajul <strong>Inelul de înot</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4swimring.png" 
              alt="Codul pentru inelul de înot" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începerea jocului</strong> - setăm scorul la 0, poziționăm inelul în partea de jos a ecranului și îl facem vizibil.</li>
              <li><strong>Controlul mișcării</strong> - verificăm continuu dacă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Săgeata stânga este apăsată - deplasăm inelul la stânga</li>
                  <li>Săgeata dreapta este apăsată - deplasăm inelul la dreapta</li>
                </ul>
              </li>
              <li><strong>Limitarea mișcării</strong> - ne asigurăm că inelul nu iese din marginile ecranului folosind blocul "dacă atinge marginea, ricoșează".</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza inelului modificând numărul de pași (10) din blocurile "modifică x cu..." 
              pentru o mișcare mai lentă sau mai rapidă.
            </p>
          </InfoBox>
        </section>

        <section id="obiecte">
          <h2 className="text-2xl font-bold mb-4">3. Programarea obiectelor</h2>
          <p className="mb-4">
            Acum vom programa mingea de plajă și scoica să apară aleatoriu și să cadă din partea de sus a ecranului. 
            Vom începe cu <strong>Mingea de plajă</strong>:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4beachball.png" 
              alt="Codul pentru mingea de plajă" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează mingea de plajă:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem mingea originală (vom folosi clone).</li>
              <li><strong>Generarea mingilor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm o clonă a mingii</li>
                  <li>Așteptăm un interval aleatoriu pentru a varia timpii de apariție</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - fiecare clonă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea de sus a ecranului la o poziție x aleatoare</li>
                  <li>Cade în jos până atinge inelul sau marginea de jos</li>
                  <li>Adaugă 1 punct când atinge inelul și face un sunet</li>
                  <li>Dispare când atinge marginea de jos sau inelul</li>
                </ul>
              </li>
            </ol>
          </div>

          <p className="mb-4 mt-6">
            Acum, pentru <strong>Scoică</strong>, vom folosi un cod similar dar cu câteva diferențe:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4shell.png" 
              alt="Codul pentru scoică" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează scoica:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem scoica originală (vom folosi clone).</li>
              <li><strong>Generarea scoicilor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm o clonă a scoicii</li>
                  <li>Așteptăm un interval aleatoriu mai lung (scoicile sunt mai rare)</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - fiecare clonă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea de sus a ecranului la o poziție x aleatoare</li>
                  <li>Cade în jos până atinge inelul sau marginea de jos</li>
                  <li>Adaugă 3 puncte când atinge inelul (scoicile valorează mai mult)</li>
                  <li>Dispare când atinge marginea de jos sau inelul</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold mb-2">Pentru mingea de plajă:</h5>
              <div className="bg-white p-2 rounded-md border border-green-300 text-sm">
                așteaptă [alege aleator între (2) și (4)] secunde
              </div>
              <div className="bg-white p-2 rounded-md border border-green-300 mt-2 text-sm">
                modifică [Scor] cu [1]
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold mb-2">Pentru scoică:</h5>
              <div className="bg-white p-2 rounded-md border border-blue-300 text-sm">
                așteaptă [alege aleator între (4) și (7)] secunde
              </div>
              <div className="bg-white p-2 rounded-md border border-blue-300 mt-2 text-sm">
                modifică [Scor] cu [3]
              </div>
            </div>
          </div>
        </section>

        <section id="peștele">
          <h2 className="text-2xl font-bold mb-4">4. Programarea peștelui balon</h2>
          <p className="mb-4">
            Acum vom programa peștele balon, care reprezintă obstacolul din joc. Când inelul atinge peștele balon, 
            jocul se va termina. Selectează personajul <strong>Peștele balon</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4pufferfish.png" 
              alt="Codul pentru peștele balon" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează peștele balon:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem peștele original (vom folosi clone).</li>
              <li><strong>Generarea peștilor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm o clonă a peștelui</li>
                  <li>Așteptăm un interval aleatoriu - peștii apar mai rar la început și mai des pe măsură ce scorul crește</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - fiecare clonă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea de sus a ecranului la o poziție x aleatoare</li>
                  <li>Cade în jos până atinge inelul sau marginea de jos</li>
                  <li>Când atinge inelul, trimite mesajul "game over" și oprește jocul</li>
                  <li>Dispare când atinge marginea de jos sau inelul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Pentru a face jocul progresiv mai dificil, poți face ca peștii balon să apară mai des pe măsură 
              ce scorul crește. Poți face acest lucru folosind o formulă pentru intervalul de așteptare care 
              depinde de scor (de exemplu: "7 - (scor ÷ 10)" secunde).
            </p>
          </InfoBox>
        </section>

        <section id="conditii">
          <h2 className="text-2xl font-bold mb-4">5. Condiții de victorie și înfrângere</h2>
          <p className="mb-4">
            În final, trebuie să adăugăm condiții pentru a ști când jucătorul câștigă sau pierde. 
            Vom crea două personaje pentru a afișa mesajele de victorie și înfrângere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Condiția de victorie:</h4>
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4win.png" 
                alt="Codul pentru victorie" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-2 text-center text-sm">Când scorul ajunge la 30, jucătorul câștigă!</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Condiția de înfrângere:</h4>
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect4lose.png" 
                alt="Codul pentru înfrângere" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-2 text-center text-sm">Când inelul atinge un pește balon, jucătorul pierde!</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează condițiile de final:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Condiția de victorie</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm un personaj "Win" care este ascuns la început</li>
                  <li>Verificăm constant dacă scorul a ajuns la 30</li>
                  <li>Când scorul atinge 30, afișăm personajul "Win" și oprim jocul</li>
                </ul>
              </li>
              <li><strong>Condiția de înfrângere</strong>:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm un personaj "Lose" care este ascuns la început</li>
                  <li>Când primește mesajul "game over" (trimis de peștele balon), acest personaj devine vizibil</li>
                  <li>Afișăm scorul final și oprim jocul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Poți personaliza mesajele de victorie și înfrângere pentru a face jocul mai captivant. 
              De asemenea, poți adăuga efecte sonore și vizuale pentru a sărbători victoria sau a marca înfrângerea.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">6. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum ai toate elementele necesare pentru a face jocul funcțional! Apasă steagul verde pentru a testa jocul și vezi cum funcționează.
          </p>

          <Challenge title="Provocări pentru îmbunătățirea jocului" difficulty="medium">
            <p>După ce ai terminat jocul de bază, încearcă aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🔊
                </div>
                <div>
                  <h4 className="font-bold">Adaugă efecte sonore</h4>
                  <p className="text-sm text-gray-600">Adaugă sunete pentru colectarea obiectelor, lovirea peștelui balon și pentru victoria/înfrângerea jucătorului.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⭐
                </div>
                <div>
                  <h4 className="font-bold">Adaugă obiecte speciale</h4>
                  <p className="text-sm text-gray-600">Creează stele de mare care oferă puncte bonus sau efecte speciale când sunt colectate.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-bold">Sistem de niveluri</h4>
                  <p className="text-sm text-gray-600">Adaugă niveluri de dificultate care se schimbă pe măsură ce scorul crește.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un timer</h4>
                  <p className="text-sm text-gray-600">Implementează un cronometru care limitează timpul de joc pentru un plus de provocare.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat jocul "Beach Ball Bounce", un joc distractiv în care colectezi mingi de plajă și scoici, evitând peștii balon! 
            Acest proiect ți-a permis să înveți despre controlul personajelor, generarea de obiecte aleatorii, detectarea 
            coliziunilor și implementarea unui sistem de punctaj cu condiții de victorie și înfrângere.
          </p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
            <Link to="/scratch/session6stitchbeach" className="flex items-center">
              <span>Continuă cu următoarea lecție</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session5BeachBallBounce;