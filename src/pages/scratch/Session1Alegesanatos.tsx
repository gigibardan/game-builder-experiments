
import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star } from 'lucide-react';

const Session1Alegesanatos = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'controlbowl', title: 'Controlarea Bolului' },
    { id: 'apple', title: 'Programarea Mărului' },
    { id: 'donut', title: 'Programarea Gogoșii' },
    { id: 'victorie', title: 'Condiții de Victorie' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Jocul Alege Sănătos în Scratch"
      subtitle="Lecția 1 • Scratch Programming"
      courseId="scratch"
      sessionId="1"
      heroColor="bg-yellow-500"
      sidebarItems={sidebarItems}
      resources={resources}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session2spacedodge"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Într-o lume plină de tentații culinare, e tot mai important să facem alegeri sănătoase! În această aventură digitală, 
            tu vei controla un bol care trebuie să prindă mere delicioase ce cad din cer, evitând în același timp gogoșile dulci dar nesănătoase.
          </p>
          <p className="mb-6">
            Jocul "Alege Sănătos" este perfect pentru începători în programare și combină distracția cu un mesaj important despre 
            alimentația sănătoasă. Vei învăța să creezi personaje interactive, să programezi mișcări, să detectezi coliziuni și să ții scorul!
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
                  <span>Controlul personajelor cu săgețile de pe tastatură</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Generarea de obiecte care cad aleatoriu</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Folosirea variabilelor pentru a ține scorul</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Crearea condițiilor de victorie și înfrângere</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src="https://elearning.techminds-academy.ro/assets/images/scratch-alegesanatos-preview.png" 
                alt="Previzualizare joc Alege Sănătos" 
                className="w-full object-cover h-48"
              />
              <div className="p-4 flex flex-col items-center">
                <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600">
                  <a href="https://scratch.mit.edu/projects/1144176373" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    <span>Încearcă jocul final</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              Proiectul starter conține deja personajele "win", "lose" si "linie". Va trebui să adăugăm personajul "apple", "bowl" si "donut" din biblioteca Scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <a href="https://scratch.mit.edu/projects/1144200451/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Deschide proiectul starter</span>
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm flex items-start">
              <Lightbulb className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul starter conține deja toate personajele de care ai nevoie:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect1personaje.png" 
              alt="Personajele jocului" 
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🥣
              </div>
              <div>
                <h4 className="font-bold">Bowl (Bolul)</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl vei controla cu săgețile stânga-dreapta.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🍎
              </div>
              <div>
                <h4 className="font-bold">Apple (Mărul)</h4>
                <p className="text-sm text-gray-600">Aliment sănătos care îți aduce 1 punct când îl prinzi.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🍩
              </div>
              <div>
                <h4 className="font-bold">Donut (Gogoașa)</h4>
                <p className="text-sm text-gray-600">Aliment nesănătos care îți scade 2 puncte când îl prinzi.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                📊
              </div>
              <div>
                <h4 className="font-bold">Win și Lose</h4>
                <p className="text-sm text-gray-600">Mesaje de victorie și înfrângere care vor apărea la sfârșitul jocului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ➖
              </div>
              <div>
                <h4 className="font-bold">Linie</h4>
                <p className="text-sm text-gray-600">O linie invizibilă la baza ecranului pentru a detecta când obiectele ating pământul.</p>
              </div>
            </div>
          </div>

          <p>Decorul folosit este "Blue Sky", care este deja disponibil în biblioteca Scratch.</p>
        </section>

        <section id="controlbowl">
          <h2 className="text-2xl font-bold mb-4">2. Controlarea bolului</h2>
          <p className="mb-4">
            Primul pas este să facem bolul să se miște stânga-dreapta folosind săgețile de pe tastatură. 
            Selectează personajul <strong>Bowl</strong> și adaugă următorul cod:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect1codbowl.png" 
              alt="Codul pentru controlul bolului" 
              className="w-full"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începerea jocului</strong> - setăm scorul la 0 și poziționăm bolul în partea de jos a ecranului.</li>
              <li><strong>Controlul mișcării</strong> - verificăm continuu dacă săgețile stânga sau dreapta sunt apăsate și mișcăm bolul cu 10 pași în direcția corespunzătoare.</li>
              <li><strong>Limitarea mișcării</strong> - ne asigurăm că bolul nu iese din marginile ecranului folosind blocul "dacă atinge marginea, ricoșează".</li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="lightbulb" variant="warning">
            <p>
              Poți ajusta viteza bolului modificând numărul de pași (10) din blocurile "modifică x cu..." 
              pentru o mișcare mai lentă sau mai rapidă.
            </p>
          </InfoBox>
        </section>

        <section id="apple">
          <h2 className="text-2xl font-bold mb-4">3. Programarea mărului</h2>
          <p className="mb-4">
            Acum vom face mărul să cadă din partea de sus a ecranului și să aducă puncte când este prins. 
            Selectează personajul <strong>Apple</strong> și adaugă acest cod:
          </p>

          <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect1codapple.png" 
              alt="Codul pentru măr" 
              className="w-full"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>La începutul jocului</strong> - ascundem mărul și îl facem să se rotească.</li>
              <li><strong>Bucla infinită</strong> - creăm un ciclu continuu în care mărul:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Apare în partea de sus a ecranului la o poziție aleatoare</li>
                  <li>Cade în jos până atinge bolul sau linia de jos</li>
                  <li>Adaugă 1 punct când atinge bolul (și face un sunet)</li>
                  <li>Se repoziționează pentru o nouă cădere</li>
                </ul>
              </li>
              <li><strong>Temporizarea</strong> - așteaptă între 1 și 2 secunde înainte de a genera un nou măr, pentru a face jocul interesant.</li>
            </ol>
          </div>
        </section>

        <section id="donut">
          <h2 className="text-2xl font-bold mb-4">4. Programarea gogoșii</h2>
          <p className="mb-4">
            Gogoașa va funcționa similar cu mărul, dar va scădea puncte în loc să adauge. 
            Selectează personajul <strong>Donut</strong> și adaugă cod similar cu cel al mărului, dar cu aceste diferențe:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <ul className="list-disc ml-5 space-y-2">
              <li>Când gogoașa atinge bolul, scade scorul cu 2 puncte în loc să-l crească</li>
              <li>Setează intervalul de așteptare între 2 și 3 secunde pentru a face jocul mai echilibrat</li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold mb-2">Pentru măr:</h5>
                <div className="bg-white p-2 rounded-md border border-green-300 text-sm">
                  modifică [Scor] cu [1]
                </div>
                <div className="bg-white p-2 rounded-md border border-green-300 mt-2 text-sm">
                  așteaptă [alege aleator între (1) și (2)] secunde
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold mb-2">Pentru gogoașă:</h5>
                <div className="bg-white p-2 rounded-md border border-red-300 text-sm">
                  modifică [Scor] cu [-2]
                </div>
                <div className="bg-white p-2 rounded-md border border-red-300 mt-2 text-sm">
                  așteaptă [alege aleator între (2) și (3)] secunde
                </div>
              </div>
            </div>
          </div>

          <InfoBox title="Sfat pentru echilibrare" icon="lightbulb" variant="info">
            <p>
              Poți face jocul mai ușor sau mai dificil ajustând valorile pentru punctaj și intervalele de timp. 
              Mai puține puncte negative sau intervale mai lungi = joc mai ușor.
            </p>
          </InfoBox>
        </section>

        <section id="victorie">
          <h2 className="text-2xl font-bold mb-4">5. Condiții de victorie și înfrângere</h2>
          <p className="mb-4">
            În final, trebuie să adăugăm condiții pentru a ști când jucătorul câștigă sau pierde. 
            Vom folosi personajele "win" și "lose" pentru a afișa mesajele corespunzătoare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Pentru personajul "win":</h4>
              <div className="bg-white border rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://elearning.techminds-academy.ro/assets/images/scratchproiect1codwin.png" 
                  alt="Codul pentru victorie" 
                  className="w-full"
                />
              </div>
              <p className="mt-2 text-center text-sm">Când scorul depășește 49, jucătorul câștigă!</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Pentru personajul "lose":</h4>
              <div className="bg-white border rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://elearning.techminds-academy.ro/assets/images/scratchproiect1codlose.png" 
                  alt="Codul pentru înfrângere" 
                  className="w-full"
                />
              </div>
              <p className="mt-2 text-center text-sm">Când scorul scade sub -5, jucătorul pierde!</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <p className="mb-2">Ambele personaje sunt ascunse la început. Ele verifică constant scorul și apar doar când sunt îndeplinite condițiile:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Win</strong> apare când scorul &gt; 49, afișând un mesaj de felicitare</li>
              <li><strong>Lose</strong> apare când scorul &lt; -5, afișând un mesaj de încurajare pentru a încerca din nou</li>
            </ul>
            <p className="mt-2">Când apare oricare dintre ele, toate celelalte acțiuni din joc sunt oprite folosind blocul "stop [totul]".</p>
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
                  <p className="text-sm text-gray-600">Adaugă sunete diferite pentru prinderea mărului, gogoșii sau pentru victorie/înfrângere.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold">Adaugă nivele de dificultate</h4>
                  <p className="text-sm text-gray-600">Fă obiectele să cadă mai repede pe măsură ce scorul crește.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🥦
                </div>
                <div>
                  <h4 className="font-bold">Adaugă mai multe alimente</h4>
                  <p className="text-sm text-gray-600">Creează noi personaje cu alimente sănătoase și nesănătoase.</p>
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

        <section className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="text-xl font-bold mb-3">Felicitări!</h2>
          <p className="mb-4">
            Ai creat jocul "Alege Sănătos" care îmbină distracția cu un mesaj educațional despre alimentația sănătoasă! 
            Acum poți împărtăși creația ta cu prietenii și familia sau poți continua să îmbunătățești jocul adăugând mai multe funcționalități.
          </p>
          <Button asChild className="bg-amber-500 hover:bg-amber-600">
            <Link to="/scratch/session2spacedodge" className="flex items-center">
              <span>Continuă cu următoarea lecție</span>
            </Link>
          </Button>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session1Alegesanatos;
