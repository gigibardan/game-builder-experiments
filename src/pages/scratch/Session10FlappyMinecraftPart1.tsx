import React from 'react';
import { Link } from 'react-router-dom';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Play, Rocket, Lightbulb, Check, Star, Code, Flag, ArrowRight } from 'lucide-react';
import ImageModal from '@/components/ImageModal';
import { ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session10FlappyMinecraftPart1 = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personajele Jocului' },
    { id: 'start', title: 'Personajul Start' },
    { id: 'logo', title: 'Personajul Logo' },
    { id: 'platform', title: 'Personajul Platform' },
    { id: 'obstacle', title: 'Personajul Obstacle' },
    { id: 'challenge', title: 'Provocări' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch Oficiale', url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' }
  ];

  return (
    <LessonLayout
      title="Flappy Minecraft în Scratch (Partea 1)"
      subtitle="Lecția 10 • Scratch Programming"
      courseId="scratch"
      sessionId="10"
      heroColor="bg-green-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session9robotfootball"
      }}
      nextLesson={{
        title: "Partea 2",
        path: "/scratch/session10flappyminecraftpart2"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Povestea jocului</h2>
          <p className="mb-4">
            Bine ai venit în lumea Minecraft, dar cu o provocare nouă și captivantă! În acest proiect, vom crea o 
            versiune personalizată a popularului joc Flappy Bird, adaptat cu personaje și elemente din universul Minecraft.
          </p>
          <p className="mb-6">
            În Flappy Minecraft, vei controla un porcușor pixelat care trebuie să zboare printre obstacole specifice lumii 
            Minecraft. Fiecare pereche de obstacole depășită îți aduce un punct, dar ai grijă - dacă te lovești de obstacole 
            sau cazi pe platformă, jocul se termină! Este un joc simplu, dar provocator, care îți va testa reflexele și coordonarea.
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
                  <span>Crearea și gestionarea clonelor în Scratch</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea fizicii de bază (gravitație și mișcare)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Detectarea coliziunilor între personaje</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Implementarea unui sistem de scor</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-2 flex-shrink-0">✓</div>
                  <span>Utilizarea mesajelor pentru comunicarea între personaje</span>
                </li>
              </ul>
            </div>

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
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Să începem!</h2>
            <p className="mb-4">
              În prima parte a acestui proiect, vom configura scena și vom programa personajele de bază ale jocului.
              În partea a doua, vom adăuga porcușorul principal și efectele vizuale.
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
              <p>Sfat: Apasă butonul "Vezi în interior" pentru a putea edita proiectul, apoi "Remixează" pentru a salva propria versiune!</p>
            </div>
          </div>
        </section>

        <section id="personaje">
          <h2 className="text-2xl font-bold mb-4">1. Personajele jocului</h2>
          <p className="mb-4">
            Proiectul nostru va conține mai multe personaje (sprite-uri), fiecare cu un rol specific în joc. În 
            această primă parte vom configura personajele Start, Logo, Platform și Obstacle.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajeMinecraft.png" 
              alt="Personajele jocului Flappy Minecraft" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🏁
              </div>
              <div>
                <h4 className="font-bold">Start</h4>
                <p className="text-sm text-gray-600">Afișează mesajul de început și gestionează începerea jocului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                📋
              </div>
              <div>
                <h4 className="font-bold">Logo</h4>
                <p className="text-sm text-gray-600">Afișează logo-ul jocului în partea superioară a ecranului.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ⬛
              </div>
              <div>
                <h4 className="font-bold">Platform</h4>
                <p className="text-sm text-gray-600">Creează platforma de jos, specifică lumii Minecraft.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🧱
              </div>
              <div>
                <h4 className="font-bold">Obstacle</h4>
                <p className="text-sm text-gray-600">Generează obstacole prin care porcușorul trebuie să zboare.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                🐷
              </div>
              <div>
                <h4 className="font-bold">FlappyPig</h4>
                <p className="text-sm text-gray-600">Personajul principal pe care îl controlezi (vom programa în partea 2).</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4 flex items-start">
              <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                ✨
              </div>
              <div>
                <h4 className="font-bold">Effect & Music</h4>
                <p className="text-sm text-gray-600">Efecte vizuale și sunet (vom programa în partea 2).</p>
              </div>
            </div>
          </div>

          <InfoBox title="Important" icon="info" variant="info">
            <p>
              Proiectul starter conține deja toate personajele și fundalurile necesare. În această lecție, 
              ne vom concentra pe adăugarea scripturilor pentru a face jocul funcțional.
            </p>
          </InfoBox>
        </section>

        <section id="start">
          <h2 className="text-2xl font-bold mb-4">2. Programarea personajului Start</h2>
          <p className="mb-4">
            Primul personaj pe care îl vom programa este <strong>Start</strong>, care va afișa mesajul de început
            și va gestiona pornirea jocului când apăsăm orice tastă sau dăm click pe ecran.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Prima parte a codului:</h3>
              <ImageModal 
                src="/assets/images/scratch/personajstartMinecraftParea1.png" 
                alt="Codul pentru personajul Start (partea 1)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-3 text-sm text-gray-600">
                Aceste blocuri gestionează aspectul vizual al mesajului de start, cu efecte de mărire și micșorare.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">A doua parte a codului:</h3>
              <ImageModal 
                src="/assets/images/scratch/personajstartMinecraftParea2.png" 
                alt="Codul pentru personajul Start (partea 2)" 
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              />
              <p className="mt-3 text-sm text-gray-600">
                Aceste blocuri detectează apăsarea tastelor sau click-ul mouse-ului pentru a începe jocul.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Efectul vizual</strong> - La începutul jocului, sprite-ul Start:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se afișează în centrul ecranului</li>
                  <li>Își schimbă mărimea în mod repetat (de la 100% la 110% și înapoi) pentru a atrage atenția</li>
                  <li>Continuă această animație până când jocul începe</li>
                </ul>
              </li>
              <li><strong>Detectarea începerii jocului</strong> - În paralel:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică constant dacă utilizatorul apasă o tastă sau face click cu mouse-ul</li>
                  <li>Când una dintre aceste acțiuni este detectată, difuzează mesajul "Begin" către toate celelalte personaje</li>
                  <li>Acest mesaj va informa toate celelalte personaje că jocul a început</li>
                  <li>După trimiterea mesajului, sprite-ul Start se ascunde, deoarece nu mai este necesar</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Utilizarea mesajelor (difuzarea) este o modalitate excelentă de a sincroniza acțiunile 
              diferitelor personaje din joc, permițându-le să reacționeze la anumite evenimente.
            </p>
          </InfoBox>
        </section>

        <section id="logo">
          <h2 className="text-2xl font-bold mb-4">3. Programarea logo-ului</h2>
          <p className="mb-4">
            Acum vom programa <strong>Logo</strong>-ul jocului, care afișează titlul "FLAPPY MINECRAFT" în partea 
            superioară a ecranului. Acest logo va avea o animație subtilă și va dispărea când jocul începe.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajLogoMinecraft.png" 
              alt="Codul pentru Logo" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializare</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Logo-ul se poziționează în partea superioară a ecranului (x: 0, y: 100)</li>
                  <li>Începe să se miște ușor în sus și în jos folosind un efect de repetiție</li>
                </ul>
              </li>
              <li><strong>Animația logo-ului</strong> - În buclă:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Logo-ul se deplasează în jos cu 0.4 pixeli de 10 ori</li>
                  <li>Apoi se deplasează în sus cu 0.4 pixeli de 10 ori</li>
                  <li>Acest efect creează o animație subtilă de plutire</li>
                </ul>
              </li>
              <li><strong>Reacția la începerea jocului</strong> - Când primește mesajul "Begin":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Logo-ul își anulează efectele grafice</li>
                  <li>Repetă un efect de estompare (fantomă) și mărește dimensiunea cu 10%</li>
                  <li>Apoi se ascunde, dispărând din joc</li>
                </ul>
              </li>
              <li><strong>Reacția la sfârșitul jocului</strong> - Când primește mesajul "ded" (game over):
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Logo-ul reapare</li>
                  <li>Își anulează efectele grafice</li>
                  <li>Se repoziționează în partea superioară a ecranului</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>
              Animațiile subtile, cum ar fi plutirea logo-ului, adaugă un plus de dinamism jocului tău și îl 
              fac să pară mai profesionist, fără a distrage jucătorul de la mecanica principală.
            </p>
          </InfoBox>
        </section>

        <section id="platform">
          <h2 className="text-2xl font-bold mb-4">4. Programarea platformei</h2>
          <p className="mb-4">
            Acum vom programa <strong>Platform</strong>, care va crea platforma de jos a jocului. În loc să folosim 
            o singură imagine mare, vom folosi clone ale unei imagini mici pentru a crea o platformă care se mișcă, 
            oferind iluzia de deplasare continuă.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajPlatformMinecraft.png" 
              alt="Codul pentru Platform" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Pregătirea sprite-ului original</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Sprite-ul Platform original se ascunde, deoarece vom folosi doar clonele sale</li>
                </ul>
              </li>
              <li><strong>Crearea clonelor inițiale</strong> - În același timp:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Sprite-ul va crea clone la fiecare secundă</li>
                  <li>Numărul "0" din setarea Clona asigură că nu se vor crea mai multe clone decât este necesar</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Clona devine vizibilă</li>
                  <li>Se setează costumul următor pentru a crea variație</li>
                  <li>Se poziționează la x=0, y=-70 (partea de jos a ecranului)</li>
                  <li>Într-o buclă infinită, clona așteaptă 0.01 secunde și apoi schimbă costumul pentru animație</li>
                </ul>
              </li>
              <li><strong>Controlul creării de clone suplimentare</strong> - Când se primește mesajul "Begin":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setăm Clona la 1 pentru a permite crearea de clone suplimentare în timpul jocului</li>
                  <li>Setăm stilul de rotație "nu te roti" pentru a menține orientarea corectă</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor în timpul jocului</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Se poziționează aleatoriu pe axa X între -70 și 70</li>
                  <li>Se orientează către personajul principal (FlappyPig)</li>
                  <li>Se mișcă 5 pași în acea direcție</li>
                  <li>Aplică un efect de "fantomă" pentru a crea iluzia de mișcare</li>
                  <li>După aceea, clona se șterge pentru a permite crearea altora noi</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Sfat" icon="info" variant="warning">
            <p>
              Utilizarea clonelor este o tehnică eficientă pentru a crea multe obiecte similare fără a supraîncărca 
              proiectul. În acest caz, clonele platformei creează iluzia unui teren în mișcare continuă.
            </p>
          </InfoBox>
        </section>

        <section id="obstacle">
          <h2 className="text-2xl font-bold mb-4">5. Programarea obstacolelor</h2>
          <p className="mb-4">
            Acum vom programa <strong>Obstacle</strong>, care va genera obstacole prin care porcușorul trebuie să 
            zboare. Aceste obstacole vor apărea din partea dreaptă a ecranului și se vor deplasa spre stânga, iar 
            când porcușorul trece prin ele, jucătorul primește puncte.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="/assets/images/scratch/personajObstacleMinecraft.png" 
              alt="Codul pentru Obstacle" 
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Inițializarea variabilelor</strong> - La apăsarea steagului verde:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Setăm scorul la 0</li>
                  <li>Ascundem obstacolul original (vom folosi doar clonele)</li>
                </ul>
              </li>
              <li><strong>Generarea de obstacole</strong> - Când primește mesajul "Begin":
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Începe să creeze clone la intervale regulate (1.5 secunde)</li>
                  <li>Acest lucru va crea un flux constant de obstacole</li>
                </ul>
              </li>
              <li><strong>Comportamentul clonelor</strong> - Când o clonă începe:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Clona devine vizibilă</li>
                  <li>Se poziționează în afara ecranului în dreapta (x=259) la o înălțime aleatorie între -60 și 60</li>
                  <li>Începe să se deplaseze spre stânga cu o viteză constantă (-5 pixeli)</li>
                  <li>Continuă deplasarea până ajunge la marginea stângă a ecranului (x=-250)</li>
                  <li>Când iese din ecran, clona se șterge</li>
                </ul>
              </li>
              <li><strong>Sistemul de scor</strong> - În cadrul clonei:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Verifică dacă obstacolul a trecut de poziția personajului principal (x=-17)</li>
                  <li>Când acest lucru se întâmplă, incrementează scorul cu 1 punct</li>
                  <li>Difuzează mesajul "point" pentru a activa efectele vizuale</li>
                  <li>Redă un sunet de colectare a punctului</li>
                </ul>
              </li>
              <li><strong>Finalul jocului</strong> - Când primește mesajul "ded" (game over):
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Așteaptă 1.2 secunde pentru a permite animația de final</li>
                  <li>Oprește toate scripturile pentru a finaliza jocul</li>
                </ul>
              </li>
            </ol>
          </div>

          <InfoBox title="Important" icon="info" variant="warning">
            <p>
              Detectarea corectă a momentului în care personajul trece prin obstacole este crucială pentru 
              sistemul de scor. Observă cum folosim poziția x=-17 pentru a determina când porcușorul a trecut 
              cu succes prin obstacol.
            </p>
          </InfoBox>
        </section>

        <section id="challenge">
          <h2 className="text-2xl font-bold mb-4">6. Testează și îmbunătățește</h2>
          <p className="mb-4">
            Acum ai programat personajele de bază ale jocului! Poți testa ceea ce ai făcut până acum, dar 
            jocul nu va fi complet funcțional până când nu vom adăuga personajul principal și efectele în 
            partea a doua.
          </p>

          <Challenge title="Provocări pentru îmbunătățirea primei părți" difficulty="medium">
            <p>Înainte de a trece la partea a doua, poți încerca aceste îmbunătățiri:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  🧱
                </div>
                <div>
                  <h4 className="font-bold">Variază obstacolele</h4>
                  <p className="text-sm text-gray-600">Modifică obstacolele pentru a avea înălțimi diferite sau tipuri diferite de blocuri Minecraft.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 flex items-start">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3 shrink-0">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-bold">Ajustează dificultatea</h4>
                  <p className="text-sm text-gray-600">Modifică frecvența de apariție a obstacolelor (1.5 secunde) pentru a face jocul mai ușor sau mai dificil.</p>
                </div>
              </div>
            </div>
          </Challenge>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold mb-3">Continuă cu Partea 2!</h3>
            <p className="mb-4">
              Ai finalizat prima parte a jocului Flappy Minecraft! Ai configurat logo-ul, platforma și sistemul de 
              obstacole care vor sta la baza jocului nostru. În partea a doua, vom adăuga personajul principal (FlappyPig) 
              și efectele vizuale și sonore pentru a finaliza jocul.
            </p>
          <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link to="/scratch/session10flappyminecraftpart2" className="flex items-center">
                <span>Continuă cu Partea 2</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session10FlappyMinecraftPart1;