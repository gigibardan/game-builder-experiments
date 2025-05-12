
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session3MotoRacer = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'control', title: 'Controlul Motocicletei' },
    { id: 'obstacole', title: 'Programarea Obstacolelor' },
    { id: 'stele', title: 'Programarea Stelelor' },
    { id: 'conditii', title: 'Condiții de Joc' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Jocul Moto Racer in Scratch"
      subtitle="Lecția 3 • Scratch Programming"
      courseId="scratch"
      sessionId="3"
      heroColor="bg-green-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session2spacedodge"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session4cityrunner"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-o zi însorită de vară, un motociclist curajos pornește într-o aventură plină de obstacole și provocări. 
            Misiunea ta este să-l ajuți să navigheze pe șosea, evitând pietrele periculoase și colectând stelele strălucitoare 
            pentru a acumula cât mai multe puncte!
          </p>
          <p className="mb-6">
            Jocul "Moto Racer" combină elemente de îndemânare, reflexe rapide și strategie într-o experiență captivantă pentru 
            începători în programare. Vei învăța să controlezi personaje, să generezi obstacole aleatorii, să implementezi un 
            sistem de punctaj și să creezi condiții de victorie și înfrângere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                Ce vei învăța
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Controlul motocicletei cu tastele săgeți sus și jos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea obstacolelor aleatorii (pietre)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea elementelor de colectat (stele)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de punctaj</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea condițiilor de victorie și înfrângere</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2preview.png" 
                alt="Previzualizare joc Moto Racer" 
                className="w-full"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                  <a href="https://elearning.techminds-academy.ro/content/scratch/motoracer.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Proiectul starter conține deja fundalul și personajele principale. Va trebui să adăugăm codul pentru a le face să funcționeze!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <a href="https://scratch.mit.edu/projects/1144402513/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja personajele de care ai nevoie:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2personaje.png" 
              alt="Personajele jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏍️
              </div>
              <div>
                <h4 className="font-bold">Motocicleta</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl vei controla cu săgețile sus și jos.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🪨
              </div>
              <div>
                <h4 className="font-bold">Piatra</h4>
                <p className="text-sm text-gray-600">Obstacol pe care trebuie să-l eviți pentru a nu pierde jocul.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ⭐
              </div>
              <div>
                <h4 className="font-bold">Steaua</h4>
                <p className="text-sm text-gray-600">Element de colectat pentru a acumula puncte (10 puncte per stea).</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2decor.png" 
              alt="Fundalul jocului" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
          <p>Fundalul folosit este un drum perfect pentru motocicleta noastră!</p>
        </section>

        <section id="control">
          <h2 className="text-2xl font-bold mb-4">2. Controlul motocicletei</h2>
          <p className="mb-4">
            Primul pas este să facem motocicleta să se miște în sus și în jos folosind săgețile de pe tastatură. 
            Selectează personajul <strong>Motocicletă</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2moto.png" 
              alt="Codul pentru controlul motocicletei" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începerea jocului</strong> - setăm scorul la 0, poziționăm motocicleta în partea stângă a ecranului și o facem vizibilă.</li>
              <li><strong>Controlul mișcării</strong> - creăm două scripturi separate pentru:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Când se apasă săgeata sus: motocicleta se deplasează în sus</li>
                  <li>Când se apasă săgeata jos: motocicleta se deplasează în jos</li>
                </ul>
              </li>
              <li><strong>Limitarea mișcării</strong> - ne asigurăm că motocicleta nu iese din marginile ecranului verificând poziția ei y.</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Poți ajusta viteza motocicletei modificând numărul de pași (10) din blocurile "modifică y cu..." 
              pentru o mișcare mai lentă sau mai rapidă.
            </p>
          </InfoBox>
        </section>

        <section id="obstacole">
          <h2 className="text-2xl font-bold mb-4">3. Programarea obstacolelor (pietrelor)</h2>
          <p className="mb-4">
            Acum vom programa pietrele să apară aleatoriu din dreapta ecranului și să se deplaseze spre stânga. 
            Selectează personajul <strong>Piatră</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2rocks.png" 
              alt="Codul pentru pietre" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem piatra originală (vom folosi clone).</li>
              <li><strong>Generarea pietrelor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm o clonă a pietrei</li>
                  <li>Așteptăm un interval aleatoriu pentru a varia timpii de apariție</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - fiecare clonă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea dreaptă a ecranului la o înălțime aleatoare</li>
                  <li>Se deplasează spre stânga</li>
                  <li>Verifică dacă atinge motocicleta - în acest caz jocul se termină</li>
                  <li>Dispare când ajunge la marginea din stânga a ecranului</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section id="stele">
          <h2 className="text-2xl font-bold mb-4">4. Programarea stelelor</h2>
          <p className="mb-4">
            Similar cu pietrele, vom programa stelele să apară aleatoriu și să se deplaseze spre stânga. 
            Diferența este că stelele vor adăuga puncte când sunt atinse de motocicletă. 
            Selectează personajul <strong>Stea</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2stars.png" 
              alt="Codul pentru stele" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La început</strong> - ascundem steaua originală (vom folosi clone).</li>
              <li><strong>Generarea stelelor</strong> - într-o buclă infinită:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Creăm o clonă a stelei</li>
                  <li>Așteptăm un interval aleatoriu pentru a varia timpii de apariție</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - fiecare clonă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea dreaptă a ecranului la o înălțime aleatoare</li>
                  <li>Se deplasează spre stânga</li>
                  <li>Verifică dacă atinge motocicleta - în acest caz adaugă 10 puncte la scor și dispare</li>
                  <li>Dispare când ajunge la marginea din stânga a ecranului</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Punct important" icon="info" variant="info">
            <p>
              Pentru a face jocul mai interesant, poți face ca viteza obstacolelor să crească treptat 
              pe măsură ce jocul avansează sau scorul crește. Acest lucru va crește dificultatea jocului 
              și va păstra interesul jucătorului.
            </p>
          </InfoBox>
        </section>

        <section id="conditii">
          <h2 className="text-2xl font-bold mb-4">5. Condiții de victorie și înfrângere</h2>
          <p className="mb-4">
            În final, trebuie să adăugăm condiții pentru a ști când jucătorul câștigă sau pierde.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Condiția de înfrângere:</h4>
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2lost.png" 
                alt="Codul pentru înfrângere" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-2 text-center text-sm">Când motocicleta atinge o piatră, jocul se termină!</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Condiția de victorie:</h4>
              <ImageModal 
                src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2win.png" 
                alt="Codul pentru victorie" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-2 text-center text-sm">Când scorul depășește 100, jucătorul câștigă!</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <p className="mb-2">Avem două tipuri de condiții:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Înfrângere</strong>: când piatra atinge motocicleta, oprim toate scripturile, arătăm un mesaj de game over și oprim jocul</li>
              <li><strong>Victorie</strong>: verificăm continuu dacă scorul a depășit 100, iar când se întâmplă acest lucru, afișăm un mesaj de felicitare și oprim jocul</li>
            </ul>
          </div>
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
                  <p className="text-sm text-gray-600">Adaugă sunete pentru colectarea stelelor, lovirea pietrelor sau pentru victoria/înfrângerea jucătorului.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold">Viteză crescătoare</h4>
                  <p className="text-sm text-gray-600">Fă pietrele și stelele să se miște mai rapid pe măsură ce scorul crește pentru a face jocul mai dificil.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ❤️
                </div>
                <div>
                  <h4 className="font-bold">Adaugă un sistem de vieți</h4>
                  <p className="text-sm text-gray-600">În loc să pierzi imediat când atingi o piatră, dă jucătorului 3 vieți și scade câte una la fiecare coliziune.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎮
                </div>
                <div>
                  <h4 className="font-bold">Crează un ecran de start</h4>
                  <p className="text-sm text-gray-600">Adaugă un ecran de titlu și un buton de "Start" înainte de începerea jocului.</p>
                </div>
              </div>
            </div>
          </Challenge>
        </section>

        <section className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat jocul "Moto Racer", un joc captivant în care controlezi o motocicletă, eviți obstacole și colectezi stele! 
            Acest proiect ți-a permis să înveți despre controlul personajelor, detectarea coliziunilor, generarea de obiecte aleatorii 
            și implementarea unui sistem de punctaj.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600">
            <Link to="/scratch/session4cityrunner" className="flex items-center">
              <span>Continuă cu următoarea lecție</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session3MotoRacer;