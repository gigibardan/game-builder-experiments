
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'sisteme-fizica', title: 'Sisteme de Fizică' },
    { id: 'noduri-coliziune', title: 'Noduri de Coliziune' },
    { id: 'forte-impulsuri', title: 'Forțe și Impulsuri' },
    { id: 'detectare-coliziuni', title: 'Detectarea Coliziunilor' },
    { id: 'proiect-practic', title: 'Proiect Practic' },
    { id: 'optimizare', title: 'Optimizarea Fizicii' },
    { id: 'exercitii', title: 'Exerciții' },
  ];

  const resources = [
    { title: 'Documentația Godot despre Fizică 2D', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html' },
    { title: 'Tutoriale despre Coliziuni', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html' },
    { title: 'Forumul Godot - Secțiunea Fizică', url: 'https://godotforums.org/c/help/physics/12' },
    { title: 'Video Tutorial despre Fizică în Godot', url: 'https://www.youtube.com/watch?v=ewbr8r1WvUE' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în Fizică și Coliziuni',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la a treia lecție a cursului nostru de Godot! În această sesiune, vom explora 
            sistemele de fizică și coliziuni din Godot Engine, componente esențiale pentru crearea jocurilor 
            interactive și realiste.
          </p>
          
          <p className="mb-6">
            Fizica în jocuri permite obiectelor să interacționeze într-un mod veridic, respectând reguli 
            asemănătoare cu cele din lumea reală. Fie că este vorba despre un personaj care sare pe platforme, 
            o minge care se rostogolește sau un proiectil care lovește o țintă, sistemele de fizică ne ajută 
            să creăm aceste interacțiuni în mod eficient.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea sistemelor de fizică din Godot",
            "Configurarea și utilizarea diferitelor noduri de coliziune",
            "Aplicarea forțelor și impulsurilor asupra obiectelor",
            "Detectarea și răspunsul la coliziuni",
            "Implementarea unui mini-joc de fizică",
            "Optimizarea performanței sistemelor de fizică"
          ]} />
        </>
      )
    },
    {
      id: 'sisteme-fizica',
      title: 'Sisteme de Fizică în Godot',
      content: (
        <>
          <p className="mb-4">
            Godot oferă un sistem de fizică robust și flexibil, separat pentru 2D și 3D. În această lecție, 
            ne vom concentra pe fizica 2D, deși multe concepte se aplică și în 3D.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Motoarele de fizică în Godot</h3>
          <p className="mb-4">
            Godot folosește motorul de fizică open-source Box2D pentru simularea fizicii 2D. Acesta este un 
            motor de fizică matur și eficient, utilizat în multe jocuri populare.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Tipuri de corpuri fizice 2D</h3>
              <p className="mb-3">
                Godot oferă mai multe tipuri de noduri pentru simularea fizicii, fiecare cu 
                comportament specific:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>StaticBody2D</strong> - Corpuri statice, nu se mișcă (podele, pereți)</li>
                <li><strong>RigidBody2D</strong> - Corpuri rigide cu fizică completă (obiecte în mișcare)</li>
                <li><strong>CharacterBody2D</strong> - Corpuri controlate scriptic (personaje)</li>
                <li><strong>Area2D</strong> - Zone de detecție, nu pentru coliziuni fizice</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Concepte fundamentale de fizică</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Coliziuni</strong> - Detectarea și răspunsul la contacte între obiecte</li>
                <li><strong>Gravitație</strong> - Forța care trage obiectele în jos</li>
                <li><strong>Masă</strong> - Afectează cum reacționează obiectele la forțe</li>
                <li><strong>Forțe</strong> - Împing obiectele în anumite direcții</li>
                <li><strong>Atenuare</strong> - Încetinirea obiectelor în timp (frecare, rezistență)</li>
                <li><strong>Restitutie</strong> - Cât de mult "ricoșează" obiectele la coliziune</li>
                <li><strong>Forme de coliziune</strong> - Definesc forma fizică a obiectelor</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Când să folosești fiecare tip de corp fizic</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Tip de nod</th>
                  <th className="py-2 px-4 border-b text-left">Când să-l folosești</th>
                  <th className="py-2 px-4 border-b text-left">Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">StaticBody2D</td>
                  <td className="py-2 px-4 border-b">Pentru obiecte care nu se mișcă și nu reacționează la forțe externe</td>
                  <td className="py-2 px-4 border-b">Podele, pereți, platforme fixe, obstacole</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">RigidBody2D</td>
                  <td className="py-2 px-4 border-b">Pentru obiecte care se mișcă realist sub influența forțelor fizice</td>
                  <td className="py-2 px-4 border-b">Mingi, cutii, proiectile, obiecte care cad</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">CharacterBody2D</td>
                  <td className="py-2 px-4 border-b">Pentru personaje controlate de jucător sau AI, cu comportament specific</td>
                  <td className="py-2 px-4 border-b">Personajul principal, inamici, NPC-uri</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Area2D</td>
                  <td className="py-2 px-4 border-b">Pentru detectarea intrării altor obiecte, fără coliziuni fizice</td>
                  <td className="py-2 px-4 border-b">Triggere, zone de daunare, checkpoint-uri, senzori</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <InfoBox title="Exemplu de utilizare" icon="book" variant="primary">
            <p className="mb-2">Într-un joc platformer tipic, ai putea folosi:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>CharacterBody2D</strong> pentru personajul jucătorului</li>
              <li><strong>StaticBody2D</strong> pentru platformele și podeaua</li>
              <li><strong>RigidBody2D</strong> pentru obiecte care pot fi împinse sau care cad</li>
              <li><strong>Area2D</strong> pentru comori de colectat sau capcane care declanșează evenimente</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'noduri-coliziune',
      title: 'Noduri și forme de coliziune',
      content: (
        <>
          <p className="mb-4">
            Pentru ca obiectele să poată interacționa fizic, ele au nevoie de forme de coliziune. Acestea definesc 
            granițele fizice ale obiectelor și determină cum vor interacționa.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de forme de coliziune</h3>
          <p className="mb-4">
            Godot oferă mai multe tipuri de forme de coliziune pentru a se potrivi diferitelor necesități:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <div className="h-12 w-12 bg-indigo-500 rounded"></div>
              </div>
              <h4 className="font-bold mb-1">RectangleShape2D</h4>
              <p className="text-sm text-center">Perfect pentru forme rectangulare: platforme, pereți, cutii</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <div className="h-12 w-12 bg-indigo-500 rounded-full"></div>
              </div>
              <h4 className="font-bold mb-1">CircleShape2D</h4>
              <p className="text-sm text-center">Ideal pentru obiecte rotunde: mingi, proiectile, monede</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="#6366F1" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">CapsuleShape2D</h4>
              <p className="text-sm text-center">Bun pentru personaje: combină un dreptunghi cu capete semicirculare</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#6366F1" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">ConvexPolygonShape2D</h4>
              <p className="text-sm text-center">Pentru forme poligonale convexe arbitrare</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L8 8L4 12L8 16L4 20H20V4H4Z" fill="#6366F1" />
                </svg>
              </div>
              <h4 className="font-bold mb-1">ConcavePolygonShape2D</h4>
              <p className="text-sm text-center">Pentru forme complexe, neregulate (terenuri, nivele)</p>
            </div>
          </div>
          
          <StepItem number={1} title="Adăugarea unei forme de coliziune">
            <p className="mb-2">Iată cum să adaugi o formă de coliziune la un nod fizic:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul fizic (StaticBody2D, RigidBody2D, etc.)</li>
              <li>Fă click dreapta și selectează "Add Child Node"</li>
              <li>Caută și selectează "CollisionShape2D"</li>
              <li>În Inspector, la proprietatea "Shape", apasă pe "[empty]"</li>
              <li>Selectează "New CircleShape2D" (sau alt tip de formă)</li>
              <li>Ajustează parametrii formei (radius pentru cercuri, size pentru dreptunghiuri, etc.)</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/collision_shapes.webp" 
            alt="Forme de coliziune în Godot" 
            caption="Diferite tipuri de forme de coliziune disponibile în Godot"
          />
          
          <InfoBox title="CollisionPolygon2D" icon="info" variant="secondary">
            <p>Pe lângă CollisionShape2D, poți folosi și nodul CollisionPolygon2D pentru a crea forme de coliziune complexe, desenând punctele poligonului direct în editor. Este deosebit de util pentru terenuri cu forme neregulate sau platforme complexe.</p>
          </InfoBox>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Straturi și măști de coliziune</h3>
          <p className="mb-4">
            Godot permite controlul fin asupra interacțiunilor dintre obiecte prin straturi și măști de coliziune:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Straturi de coliziune</h3>
              <p className="mb-2">
                Definesc categoria (sau "layer") de care aparține un obiect. Poți configura până la 32 de straturi 
                diferite. Exemple:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Stratul "Personaj"</li>
                <li>Stratul "Inamic"</li>
                <li>Stratul "Teren"</li>
                <li>Stratul "Obiect Interactiv"</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Măști de coliziune</h3>
              <p className="mb-2">
                Determină cu ce straturi poate interacționa un obiect. Un obiect va coliziona doar cu 
                straturi incluse în masca sa. Exemple:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Personajul poate coliziona cu straturi "Teren" și "Obiect Interactiv"</li>
                <li>Proiectilele jucătorului pot coliziona doar cu stratul "Inamic"</li>
                <li>Proiectilele inamicilor pot coliziona doar cu stratul "Personaj"</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={2} title="Configurarea straturilor de coliziune">
            <p className="mb-2">Pentru a configura straturile și măștile de coliziune:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la Project > Project Settings</li>
              <li>Selectează tab-ul "Layer Names"</li>
              <li>Găsește secțiunea "2D Physics"</li>
              <li>Definește numele pentru straturile pe care le vei folosi (ex: "player", "enemy", "world")</li>
              <li>În nodurile tale de coliziune, setează proprietățile "Collision Layer" și "Collision Mask" corespunzător</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Setarea straturilor și măștilor din cod" language="gdscript">
{`# Setarea unui obiect să fie în stratul 2 și să colizioneze doar cu straturile 1 și 3
func _ready():
    # Setează stratul de coliziune (bitul 1, adică al doilea strat)
    collision_layer = 1 << 1
    
    # Setează masca de coliziune (biturile 0 și 2, adică primul și al treilea strat)
    collision_mask = (1 << 0) | (1 << 2)
    
    # Alternativ, poți folosi și aceste metode:
    set_collision_layer_value(2, true)  # Activează stratul 2
    set_collision_mask_value(1, true)   # Colizionează cu stratul 1
    set_collision_mask_value(3, true)   # Colizionează cu stratul 3
`}
          </CodeExample>
        </>
      )
    },
    {
      id: 'forte-impulsuri',
      title: 'Forțe și impulsuri',
      content: (
        <>
          <p className="mb-4">
            Pentru RigidBody2D, putem aplica forțe și impulsuri pentru a crea mișcări realiste. Aceste concepte 
            sunt fundamentale pentru a simula fizica într-un mod convingător.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Forțe</h3>
              <p>
                Forțele sunt aplicate continuu și acumulează efect în timp. Sunt afectate de masa obiectului 
                și crează accelerație.
              </p>
              <CodeExample title="Aplicarea unei forțe" language="gdscript">
{`# Aplicarea unei forțe de 100 unități în sus
func _physics_process(delta):
    var force = Vector2(0, -100)
    apply_force(force)
    
# Forță în direcția în care "privește" obiectul
func aplica_propulsie(putere):
    var directie = Vector2.RIGHT.rotated(rotation)
    apply_force(directie * putere)
`}
              </CodeExample>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Impulsuri</h3>
              <p>
                Impulsurile sunt aplicate instantaneu, ca un "push" imediat. Sunt bune pentru sărituri, 
                împușcături sau lovituri.
              </p>
              <CodeExample title="Aplicarea unui impuls" language="gdscript">
{`# Aplicarea unui impuls de săritură
func sari():
    var impuls = Vector2(0, -500)
    apply_impulse(impuls)

# Impuls în direcția mouse-ului
func impinge_spre_mouse():
    var mouse_pos = get_global_mouse_position()
    var directie = (mouse_pos - global_position).normalized()
    apply_impulse(directie * 500)
`}
              </CodeExample>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Aplicarea forțelor și impulsurilor la un punct specific</h3>
          <p className="mb-4">
            Poți aplica forțe și impulsuri la un punct specific al obiectului, ceea ce poate crea și rotație:
          </p>
          
          <CodeExample title="Forțe și impulsuri cu poziție" language="gdscript">
{`# Aplicarea unei forțe la marginea obiectului
func _physics_process(delta):
    var pozitie = Vector2(30, 0)  # 30 pixeli la dreapta de centru
    var forta = Vector2(0, -100)  # Forță în sus
    apply_force(forta, pozitie)

# Simularea unei lovituri laterale
func loveste_lateral():
    var pozitie = Vector2(0, -20)  # 20 pixeli deasupra centrului
    var impuls = Vector2(400, 0)   # Impuls lateral
    apply_impulse(pozitie, impuls)
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Lucrul cu torque (cuplu de rotație)</h3>
          <p className="mb-4">
            Poți aplica cuplu de rotație pentru a face obiectele să se rotească:
          </p>
          
          <CodeExample title="Aplicarea cuplului de rotație" language="gdscript">
{`# Aplicarea unui cuplu continuu
func _physics_process(delta):
    apply_torque(50)  # Rotație în sensul acelor de ceasornic

# Aplicarea unui impuls de rotație
func rotatie_brusca():
    apply_torque_impulse(500)  # Impuls puternic de rotație
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Alte proprietăți fizice</h3>
          <p className="mb-4">
            RigidBody2D are multe proprietăți fizice care pot fi ajustate:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Proprietate</th>
                  <th className="py-2 px-4 border-b text-left">Descriere</th>
                  <th className="py-2 px-4 border-b text-left">Efect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">mass</td>
                  <td className="py-2 px-4 border-b">Masa obiectului</td>
                  <td className="py-2 px-4 border-b">Obiectele mai grele sunt mai greu de mișcat și au inerție mai mare</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">gravity_scale</td>
                  <td className="py-2 px-4 border-b">Multiplicatorul pentru gravitație</td>
                  <td className="py-2 px-4 border-b">Controlează cât de puternic este afectat obiectul de gravitație</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">linear_damp</td>
                  <td className="py-2 px-4 border-b">Amortizarea mișcării liniare</td>
                  <td className="py-2 px-4 border-b">Cât de repede încetinește obiectul (frecare, aer)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">angular_damp</td>
                  <td className="py-2 px-4 border-b">Amortizarea rotației</td>
                  <td className="py-2 px-4 border-b">Cât de repede încetinește rotația obiectului</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">custom_integrator</td>
                  <td className="py-2 px-4 border-b">Permite integrarea manuală a fizicii</td>
                  <td className="py-2 px-4 border-b">Pentru control fin asupra mișcării</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">contact_monitor</td>
                  <td className="py-2 px-4 border-b">Activează monitorizarea coliziunilor</td>
                  <td className="py-2 px-4 border-b">Necesar pentru a detecta contacte</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">freeze</td>
                  <td className="py-2 px-4 border-b">Oprește toate forțele fizice</td>
                  <td className="py-2 px-4 border-b">Utile pentru a îngheța temporar obiectele</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <InfoBox title="Sfat de optimizare" icon="star" variant="primary">
            <p>Pentru obiectele care se mișcă doar ocazional, poți seta mode la RigidBody2D.FREEZE_MODE_STATIC. Acest mod dezactivează calculele fizice când obiectul nu se mișcă, economisind resurse de procesare, și le reactivează automat când este aplicată o forță.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'detectare-coliziuni',
      title: 'Detectarea și răspunsul la coliziuni',
      content: (
        <>
          <p className="mb-4">
            Detectarea coliziunilor este esențială în jocuri pentru a răspunde când obiectele interacționează. 
            Godot oferă mai multe metode pentru a detecta și răspunde la coliziuni.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Metoda 1: Semnale de coliziune</h3>
          <p className="mb-4">
            Cel mai simplu mod de a detecta coliziuni este folosind semnalele (signals) emise de nodurile fizice:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Semnale Area2D</h3>
              <p className="mb-2">
                Area2D emite semnale atunci când alte obiecte intră sau ies din zona sa:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><code>body_entered</code> - Când un corp fizic intră în zonă</li>
                <li><code>body_exited</code> - Când un corp fizic iese din zonă</li>
                <li><code>area_entered</code> - Când altă Area2D intră în zonă</li>
                <li><code>area_exited</code> - Când altă Area2D iese din zonă</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Semnale RigidBody2D</h3>
              <p className="mb-2">
                RigidBody2D poate emite semnale de coliziune dacă activăm <code>contact_monitor</code>:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><code>body_entered</code> - Când un alt corp fizic intră în contact</li>
                <li><code>body_exited</code> - Când un alt corp fizic iese din contact</li>
                <li><code>body_shape_entered</code> - Similar, dar include și informații despre forma</li>
                <li><code>body_shape_exited</code> - Similar, dar include și informații despre forma</li>
              </ul>
            </div>
          </div>
          
          <CodeExample title="Exemplu de utilizare a semnalelor de coliziune" language="gdscript">
{`extends Area2D

func _ready():
    # Conectăm semnalele de coliziune la funcțiile corespunzătoare
    body_entered.connect(_on_body_entered)
    body_exited.connect(_on_body_exited)

func _on_body_entered(body):
    print("Un corp a intrat în zonă: " + body.name)
    
    # Verificăm dacă corpul este un inamic
    if body.is_in_group("inamici"):
        player_health.take_damage(10)
    
    # Verificăm dacă corpul este un obiect colectabil
    if body.is_in_group("colectabile"):
        collect_item(body)

func _on_body_exited(body):
    print("Un corp a ieșit din zonă: " + body.name)

func collect_item(item):
    # Logica pentru colectarea unui obiect
    score += item.value
    item.queue_free()  # Ștergem obiectul din scenă
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Metoda 2: Verificarea coliziunilor cu raycast</h3>
          <p className="mb-4">
            Raycast-ul este o tehnică de a "trage" o rază invizibilă într-o direcție și a verifica ce obiecte lovește:
          </p>
          
          <CodeExample title="Exemplu de raycast" language="gdscript">
{`extends CharacterBody2D

func _physics_process(delta):
    # Creăm un obiect RayCast2D în cod
    var space_state = get_world_2d().direct_space_state
    
    # Definim punctul de start și end
    var start_position = global_position
    var end_position = start_position + Vector2(100, 0)  # 100 pixeli la dreapta
    
    # Executăm raycast-ul
    var query = PhysicsRayQueryParameters2D.create(start_position, end_position)
    query.exclude = [self]  # Excludem obiectul curent
    query.collision_mask = 1  # Doar pentru obiecte pe primul strat
    
    var result = space_state.intersect_ray(query)
    
    # Verificăm dacă raza a lovit ceva
    if result:
        print("Raza a lovit: " + result["collider"].name)
        print("La poziția: " + str(result["position"]))
        
        # Dacă am lovit un inamic, atacăm
        if result["collider"].is_in_group("inamici"):
            attack(result["collider"])
`}
          </CodeExample>
          
          <InfoBox title="Tipuri de interogări de fizică" icon="info" variant="secondary">
            <p className="mb-2">Pe lângă raycast, Godot oferă și alte tipuri de interogări de fizică:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>intersect_shape</strong> - Verifică dacă o formă colizionează cu altele</li>
              <li><strong>intersect_point</strong> - Verifică ce obiecte sunt la un punct specific</li>
              <li><strong>cast_motion</strong> - Simulează mișcarea unui obiect și verifică coliziunile</li>
              <li><strong>get_rest_info</strong> - Obține informații despre punctele de contact</li>
            </ul>
          </InfoBox>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Metoda 3: Utilizarea nodului RayCast2D</h3>
          <p className="mb-4">
            Godot oferă și un nod dedicat pentru raycast, care este mai ușor de folosit și vizualizat în editor:
          </p>
          
          <StepItem number={1} title="Adăugarea unui nod RayCast2D">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod RayCast2D ca și copil al nodului tău de caracter sau obiect</li>
              <li>În Inspector, setează Cast To pentru a defini direcția și lungimea razei</li>
              <li>Activează raycast-ul bifând Enabled</li>
              <li>Opțional, bifând Debug Shape poți vizualiza raza în editor</li>
              <li>Ajustează Collision Mask pentru a specifica cu ce straturi va interacționa</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Utilizarea nodului RayCast2D" language="gdscript">
{`extends CharacterBody2D

@onready var ray = $RayCast2D

func _physics_process(delta):
    # Verificăm dacă raycast-ul a lovit ceva
    if ray.is_colliding():
        var object = ray.get_collider()
        var collision_point = ray.get_collision_point()
        var collision_normal = ray.get_collision_normal()
        
        print("Raycast a lovit: " + object.name)
        print("La poziția: " + str(collision_point))
        print("Cu normala: " + str(collision_normal))
        
        # Reacționăm la coliziune
        if object.is_in_group("butoane"):
            object.press()
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Răspunsul la coliziuni</h3>
          <p className="mb-4">
            Odată ce ai detectat o coliziune, poți implementa diferite tipuri de răspunsuri:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">Colectarea obiectelor</h4>
              <CodeExample title="Colectare item" language="gdscript">
{`func _on_body_entered(body):
    if body.is_in_group("colectabile"):
        # Adăugăm valoarea obiectului la scor
        score += body.value
        # Afișăm un efect
        spawn_collect_effect(body.global_position)
        # Eliminăm obiectul din scenă
        body.queue_free()
`}
              </CodeExample>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">Aplicarea de daune</h4>
              <CodeExample title="Damage la coliziune" language="gdscript">
{`func _on_body_entered(body):
    if body.is_in_group("jucator") and body.has_method("take_damage"):
        # Aplicăm daune jucătorului
        body.take_damage(damage_amount)
        # Eliminăm proiectilul
        queue_free()
`}
              </CodeExample>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">Declanșarea mecanismelor</h4>
              <CodeExample title="Activare mecanism" language="gdscript">
{`func _on_area_entered(area):
    if area.is_in_group("jucator"):
        # Activăm un mecanism
        door.open()
        # Afișăm un mesaj
        ui.show_message("Ușa s-a deschis!")
        # Dezactivăm trigger-ul pentru a nu se declanșa din nou
        monitoring = false
`}
              </CodeExample>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">Schimbarea nivelelui</h4>
              <CodeExample title="Schimbare nivel" language="gdscript">
{`func _on_area_entered(area):
    if area.is_in_group("jucator"):
        # Afișăm un efect de tranziție
        transition_animation.play("fade_out")
        # Așteptăm terminarea animației
        await transition_animation.animation_finished
        # Încărcăm următorul nivel
        get_tree().change_scene_to_file("res://levels/level2.tscn")
`}
              </CodeExample>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'proiect-practic',
      title: 'Proiect practic: Mini-joc de fizică',
      content: (
        <>
          <p className="mb-4">
            Acum să punem în practică ceea ce am învățat, creând un mini-joc simplu bazat pe fizică. 
            Vom crea un joc în care jucătorul trebuie să arunce o minge pentru a doborî o stivă de cutii.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Pas cu pas: Crearea jocului de aruncat mingi</h3>
          
          <StepItem number={1} title="Configurarea proiectului">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un nou proiect Godot</li>
              <li>Creează o scenă nouă cu un nod Node2D ca rădăcină și numește-o "Main"</li>
              <li>Salvează scena ca "main.tscn"</li>
              <li>Setează această scenă ca scenă principală în Project Settings</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea terenului de joc">
            <p className="mb-2">Vom crea un teren simplu cu podea și pereți:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod StaticBody2D ca copil al nodului Main</li>
              <li>Adaugă un nod CollisionShape2D ca copil al StaticBody2D</li>
              <li>Setează Shape la RectangleShape2D cu o dimensiune mare pentru podea (ex: 1000x50)</li>
              <li>Poziționează podeaua în partea de jos a ecranului</li>
              <li>Adaugă un Sprite2D ca copil al StaticBody2D pentru a vizualiza podeaua</li>
              <li>Repetă acești pași pentru a crea pereții laterali</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/physics_example.webp" 
            alt="Exemplu de configurare fizică" 
            caption="Exemplu de configurare a unui mediu fizic în Godot"
          />
          
          <StepItem number={3} title="Crearea mingii de aruncat">
            <p className="mb-2">Acum vom crea mingea pe care jucătorul o va arunca:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un nod RigidBody2D ca rădăcină</li>
              <li>Adaugă un nod CollisionShape2D și setează Shape la CircleShape2D</li>
              <li>Adaugă un Sprite2D cu o textură circulară</li>
              <li>Ajustează proprietățile fizice în Inspector:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Mass: 2</li>
                  <li>Bounce: 0.5 (pentru a avea ricoșeu)</li>
                  <li>Contact Monitor: On</li>
                  <li>Contacts Reported: 4</li>
                </ul>
              </li>
              <li>Adaugă un script la RigidBody2D:</li>
            </ol>
            <CodeExample title="Script pentru Mingea jucătorului (ball.gd)" language="gdscript">
{`extends RigidBody2D

var being_dragged = false
var drag_start = Vector2()
var drag_end = Vector2()
var maximum_drag_distance = 200
var impulse_multiplier = 20.0

func _ready():
    contact_monitor = true
    max_contacts_reported = 4
    # Conectăm semnalul pentru a detecta când mingea lovește ceva
    body_entered.connect(_on_body_entered)

func _input(event):
    if event is InputEventMouseButton:
        if event.button_index == MOUSE_BUTTON_LEFT:
            if event.pressed:
                # Verificăm dacă click-ul a fost pe minge
                var distance = global_position.distance_to(event.global_position)
                if distance < 50:  # 50 este aproximativ raza mingii
                    being_dragged = true
                    drag_start = global_position
                    # Oprim mișcarea mingii cât timp este trasă
                    freeze = true
            else:  # Mouse-ul a fost eliberat
                if being_dragged:
                    being_dragged = false
                    drag_end = event.global_position
                    launch_ball()
    
    if being_dragged and event is InputEventMouseMotion:
        # Limităm distanța de tragere
        var drag_current = event.global_position
        var drag_distance = drag_start.distance_to(drag_current)
        if drag_distance > maximum_drag_distance:
            var drag_direction = (drag_current - drag_start).normalized()
            drag_current = drag_start + drag_direction * maximum_drag_distance
        
        # Actualizăm poziția mingii (opțional, pentru un efect vizual)
        global_position = drag_current

func launch_ball():
    # Calculăm direcția și puterea lansării
    var direction = (drag_start - drag_end).normalized()
    var power = min(drag_start.distance_to(drag_end), maximum_drag_distance)
    
    # Aplicăm impulsul pentru a lansa mingea
    freeze = false
    apply_impulse(direction * power * impulse_multiplier)

func _on_body_entered(body):
    # Verificăm dacă am lovit o cutie
    if body.is_in_group("boxes"):
        # Adăugăm un punctaj sau alt efect
        print("Am lovit o cutie!")
`}
            </CodeExample>
            <li>Salvează această scenă ca "ball.tscn"</li>
          </StepItem>
          
          <StepItem number={4} title="Crearea cutiilor pentru a fi doborâte">
            <p className="mb-2">Acum vom crea cutiile care vor fi aranjate într-o stivă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un nod RigidBody2D ca rădăcină</li>
              <li>Adaugă un nod CollisionShape2D și setează Shape la RectangleShape2D</li>
              <li>Adaugă un Sprite2D cu o textură de cutie</li>
              <li>Ajustează proprietățile fizice în Inspector:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Mass: 1</li>
                  <li>Bounce: 0.1</li>
                </ul>
              </li>
              <li>Adaugă cutia la grupul "boxes" (din Inspector, secțiunea Node, Groups)</li>
              <li>Salvează această scenă ca "box.tscn"</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Aranjarea nivelului">
            <p className="mb-2">Revenim la scena principală pentru a aranja nivelul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide scena "main.tscn"</li>
              <li>Adaugă mai multe instanțe ale scenei "box.tscn", aranjându-le într-o stivă</li>
              <li>Adaugă o instanță a scenei "ball.tscn" pe partea stângă a ecranului</li>
              <li>Adaugă un script la nodul Main pentru a gestiona jocul:</li>
            </ol>
            <CodeExample title="Script pentru Main (main.gd)" language="gdscript">
{`extends Node2D

var score = 0
@onready var score_label = $ScoreLabel
@onready var ball_scene = preload("res://ball.tscn")
var current_ball = null

func _ready():
    # Inițializăm scorul
    score = 0
    update_score_display()
    
    # Creăm prima minge
    spawn_ball()

func update_score_display():
    score_label.text = "Scor: " + str(score)

func add_score(points):
    score += points
    update_score_display()

func spawn_ball():
    # Creăm o nouă minge
    current_ball = ball_scene.instantiate()
    current_ball.position = Vector2(100, 400)  # Poziția de start
    add_child(current_ball)
    
    # Conectăm semnalul body_entered al mingii la funcția noastră
    current_ball.body_entered.connect(_on_ball_hit_box)

func _on_ball_hit_box(body):
    if body.is_in_group("boxes"):
        # Adăugăm un punct pentru fiecare cutie lovită
        add_score(1)
        
        # Verificăm dacă toate cutiile au fost doborâte
        check_game_state()

func check_game_state():
    # Verificăm după o scurtă întârziere dacă toate cutiile au fost doborâte
    await get_tree().create_timer(3.0).timeout
    
    var boxes = get_tree().get_nodes_in_group("boxes")
    var all_boxes_down = true
    
    for box in boxes:
        # Considerăm o cutie doborâtă dacă rotația sa este semnificativă
        # sau dacă poziția sa y este peste un anumit prag
        if abs(box.rotation) < 0.3 and box.position.y < 500:
            all_boxes_down = false
            break
    
    if all_boxes_down:
        print("Nivel completat!")
        # Aici poți adăuga o funcție pentru a trece la următorul nivel
        # sau pentru a reseta nivelul curent
`}
            </CodeExample>
          </StepItem>
          
          <StepItem number={6} title="Adăugarea UI-ului">
            <p className="mb-2">În final, adăugăm un UI simplu pentru a afișa scorul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CanvasLayer la scena Main</li>
              <li>Adaugă un nod Label ca copil al CanvasLayer</li>
              <li>Configurează Label-ul cu un font vizibil și poziționează-l în colțul ecranului</li>
              <li>Numește-l "ScoreLabel" pentru a putea fi accesat din scriptul Main</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Provocare extinsă" icon="star" variant="primary">
            <p className="mb-2">Odată ce ai jocul de bază funcțional, încearcă să adaugi următoarele îmbunătățiri:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Multiple nivele cu aranjamente diferite de cutii</li>
              <li>Un număr limitat de mingi pentru fiecare nivel</li>
              <li>Efecte sonore la coliziuni</li>
              <li>Efecte de particule când cutiile sunt doborâte</li>
              <li>Cutii cu proprietăți diferite (mai grele, mai fragile, etc.)</li>
              <li>O traiectorie vizuală pentru a ajuta jucătorul să vizeze</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'optimizare',
      title: 'Optimizarea sistemelor de fizică',
      content: (
        <>
          <p className="mb-4">
            Simularea fizicii poate fi costisitoare din punct de vedere al resurselor, mai ales cu multe obiecte. 
            Iată câteva tehnici pentru a optimiza performanța sistemelor de fizică în Godot.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Tehnici generale de optimizare</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Folosește forme de coliziune simple</strong> - Cercurile și dreptunghiurile sunt cele mai eficiente</li>
                <li><strong>Limitează numărul de obiecte fizice active</strong> - Dezactivează obiectele când nu sunt necesare</li>
                <li><strong>Folosește straturi de coliziune</strong> - Limitează ce obiecte pot interacționa între ele</li>
                <li><strong>Ajustează configurația fizicii globale</strong> - În Project Settings &gt; Physics</li>
                <li><strong>Folosește tehnici de dezactivare automată</strong> - RigidBody2D.FREEZE_MODE_STATIC</li>
                <li><strong>Ajustează procesarea fizicii</strong> - Frecvența pașilor de fizică în Project Settings</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Tehnici specifice Godot</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Folosește Area2D pentru detecție fără fizică</strong> - Mai eficient decât noduri complete de fizică</li>
                <li><strong>Spațiu fizic 2D separat</strong> - Creează un PhysicsServer2D separat pentru simulări izolate</li>
                <li><strong>Folosește contact_monitor cu înțelepciune</strong> - Activează doar când e necesar</li>
                <li><strong>Limitează max_contacts_reported</strong> - Setează la minimul necesar</li>
                <li><strong>Folosește continuous_cd doar când e necesar</strong> - Pentru obiecte care se mișcă foarte repede</li>
                <li><strong>Grupează obiectele statice</strong> - Combină mai multe StaticBody2D în unul singur cu mai multe forme</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Setări de fizică la nivel de proiect</h3>
          <p className="mb-4">
            Godot permite configurarea multor parametri de fizică la nivel de proiect:
          </p>
          
          <StepItem number={1} title="Accesarea setărilor de fizică">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la Project &gt; Project Settings</li>
              <li>Selectează tab-ul "General"</li>
              <li>Navighează la "Physics" &gt; "2d"</li>
            </ol>
          </StepItem>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Setare</th>
                  <th className="py-2 px-4 border-b text-left">Descriere</th>
                  <th className="py-2 px-4 border-b text-left">Recomandare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Physics Ticks per Second</td>
                  <td className="py-2 px-4 border-b">Frecvența de actualizare a fizicii</td>
                  <td className="py-2 px-4 border-b">60 pentru jocuri normale, poate fi redus pentru economisirea resurselor</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Default Gravity</td>
                  <td className="py-2 px-4 border-b">Gravitația implicită pe axa Y</td>
                  <td className="py-2 px-4 border-b">980 pentru simulări realiste, ajustează după necesități</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Default Linear Damp</td>
                  <td className="py-2 px-4 border-b">Atenuarea mișcării liniare implicite</td>
                  <td className="py-2 px-4 border-b">0.1 pentru atenuare ușoară, valori mai mari pentru mai multă frecare</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Default Angular Damp</td>
                  <td className="py-2 px-4 border-b">Atenuarea rotației implicite</td>
                  <td className="py-2 px-4 border-b">1.0 pentru rotație naturală, valori mai mari pentru oprire mai rapidă</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Sleep Threshold Linear</td>
                  <td className="py-2 px-4 border-b">Pragul pentru adormirea obiectelor (mișcare)</td>
                  <td className="py-2 px-4 border-b">Valori mici (0.1-0.5) pentru economisirea resurselor</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">Sleep Threshold Angular</td>
                  <td className="py-2 px-4 border-b">Pragul pentru adormirea obiectelor (rotație)</td>
                  <td className="py-2 px-4 border-b">Valori mici (0.1-0.5) pentru economisirea resurselor</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Evaluarea performanței</h3>
          <p className="mb-4">
            Godot oferă instrumente pentru a evalua performanța sistemelor de fizică:
          </p>
          
          <CodeExample title="Evaluarea performanței fizicii" language="gdscript">
{`extends Node

func _ready():
    # Setăm un timer pentru a evalua performanța la fiecare secundă
    var timer = Timer.new()
    add_child(timer)
    timer.wait_time = 1.0
    timer.timeout.connect(_on_timer_timeout)
    timer.start()

func _on_timer_timeout():
    # Obținem statistici despre performanța fizicii
    var physics_2d = Engine.get_physics_frames()
    var active_objects = get_tree().get_nodes_in_group("physics_objects").size()
    
    # Afișăm informațiile
    print("Cadre de fizică per secundă: " + str(physics_2d))
    print("Obiecte fizice active: " + str(active_objects))
    
    # Verificăm pentru numere mari de coliziuni
    var collisions = 0
    for obj in get_tree().get_nodes_in_group("physics_objects"):
        if obj is RigidBody2D and obj.contact_monitor:
            collisions += obj.get_contact_count()
    
    print("Număr total de coliziuni: " + str(collisions))
`}
          </CodeExample>
          
          <InfoBox title="Practici avansate de optimizare" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Pooling de obiecte</strong> - Reutilizarea obiectelor în loc de crearea și distrugerea lor constantă</li>
              <li><strong>Niveluri de detaliu fizic</strong> - Simplifică fizica pentru obiectele îndepărtate</li>
              <li><strong>Dezactivarea temporară a fizicii</strong> - Când nu este necesară (ex: în meniuri)</li>
              <li><strong>Folosirea threadurilor</strong> - Pentru calculele fizice complexe în jocuri avansate</li>
              <li><strong>Optimizarea formelor de coliziune</strong> - Utilizează doar formele necesare, simplifică poligoanele complexe</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitii',
      title: 'Exerciții și provocări',
      content: (
        <>
          <p className="mb-4">
            Să consolidăm cunoștințele despre fizică și coliziuni prin câteva exerciții practice de dificultate variată.
          </p>
          
          <Challenge title="Creează un sistem de platforme care se mișcă" difficulty="medium">
            <p className="mb-3">Implementează platforme care se mișcă între două puncte:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează o scenă nouă cu un nod AnimatableBody2D</li>
              <li>Adaugă o formă de coliziune și un sprite</li>
              <li>Implementează un script care mișcă platforma între două puncte</li>
              <li>Asigură-te că jucătorul poate sta pe platformă și se mișcă odată cu ea</li>
            </ol>
            <CodeExample title="Script pentru platformă mobilă" language="gdscript">
{`extends AnimatableBody2D

@export var pozitie_start = Vector2(100, 100)
@export var pozitie_final = Vector2(500, 100)
@export var viteza = 2.0
@export var timp_pauza = 0.5

var timp = 0.0
var directie = 1
var in_pauza = false
var timp_pauza_current = 0.0

func _physics_process(delta):
    if in_pauza:
        timp_pauza_current += delta
        if timp_pauza_current >= timp_pauza:
            in_pauza = false
            timp_pauza_current = 0.0
            directie *= -1  # Schimbăm direcția după pauză
        return
    
    timp += delta * directie * viteza
    timp = clamp(timp, 0.0, 1.0)
    
    # Interpolăm între pozițiile de start și final
    position = pozitie_start.lerp(pozitie_final, timp)
    
    # Verificăm dacă am ajuns la un capăt
    if timp >= 1.0 or timp <= 0.0:
        in_pauza = true
`}
            </CodeExample>
          </Challenge>
          
          <Challenge title="Implementează un sistem de frânghii fizice" difficulty="hard">
            <p className="mb-3">Creează un sistem de frânghii care folosește fizica pentru a se comporta realist:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează o scenă cu mai multe RigidBody2D conectate prin noduri PinJoint2D</li>
              <li>Ancorează primul nod pentru a crea o frânghie suspendată</li>
              <li>Ajustează proprietățile fizice pentru a obține un comportament realist</li>
              <li>Permite jucătorului să se cațere pe frânghie sau să o balanseze</li>
            </ol>
            <CodeExample title="Script pentru crearea unei frânghii" language="gdscript">
{`extends Node2D

@export var lungime_franghie = 10
@export var segment_size = Vector2(8, 2)
@export var pozitie_start = Vector2(400, 100)

func _ready():
    create_rope()

func create_rope():
    var previous_body = null
    var first_body = null
    
    for i in range(lungime_franghie):
        # Creăm segmentul de frânghie
        var segment = RigidBody2D.new()
        segment.position = pozitie_start + Vector2(0, i * segment_size.y)
        segment.mass = 1.0
        segment.gravity_scale = 1.0
        segment.linear_damp = 1.0
        segment.angular_damp = 1.0
        
        # Adăugăm coliziunea
        var shape = CollisionShape2D.new()
        var rectangle = RectangleShape2D.new()
        rectangle.size = segment_size
        shape.shape = rectangle
        segment.add_child(shape)
        
        # Adăugăm sprite-ul
        var sprite = Sprite2D.new()
        # Aici ar trebui să setezi textura pentru sprite
        sprite.scale = segment_size / 10.0  # Ajustează în funcție de textura ta
        segment.add_child(sprite)
        
        add_child(segment)
        
        # Salvăm prima parte pentru a o ancora
        if i == 0:
            first_body = segment
            # Facem primul segment static (ancorat)
            segment.freeze = true
        
        # Conectăm acest segment la cel anterior folosind PinJoint2D
        if previous_body:
            var joint = PinJoint2D.new()
            joint.position = previous_body.position + Vector2(0, segment_size.y / 2)
            joint.node_a = previous_body.get_path()
            joint.node_b = segment.get_path()
            joint.bias = 0.5  # Ajustează pentru rigiditate
            joint.softness = 1.0  # Ajustează pentru flexibilitate
            add_child(joint)
        
        previous_body = segment
`}
            </CodeExample>
          </Challenge>
          
          <Challenge title="Creează un sistem de obiecte distructibile" difficulty="medium">
            <p className="mb-3">Implementează obiecte care se sparg în bucăți mai mici când sunt lovite cu suficientă forță:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează un obiect RigidBody2D principal</li>
              <li>Implementează logica pentru a-l "sparge" în mai multe bucăți când primește un impact puternic</li>
              <li>Fiecare bucată ar trebui să aibă propriile proprietăți fizice și să interacționeze cu mediul</li>
            </ol>
            <CodeExample title="Script pentru obiect distructibil" language="gdscript">
{`extends RigidBody2D

@export var fragmente = 4
@export var prag_distrugere = 500.0
@export var scena_fragment = preload("res://fragment.tscn")
var distrus = false

func _ready():
    contact_monitor = true
    max_contacts_reported = 4
    body_entered.connect(_on_body_entered)

func _on_body_entered(body):
    # Calculăm impactul bazat pe vitezele relative
    var viteza_relativa = linear_velocity - body.linear_velocity
    var impact = viteza_relativa.length()
    
    if impact > prag_distrugere and not distrus:
        distrus = true
        sparge()

func sparge():
    # Creăm fragmentele
    for i in range(fragmente):
        var fragment = scena_fragment.instantiate()
        fragment.position = global_position
        fragment.rotation = randf_range(0, TAU)  # Rotație aleatoare
        
        # Aplicăm o forță aleatoare pentru a împrăștia fragmentele
        var directie = Vector2(randf_range(-1, 1), randf_range(-1, 1)).normalized()
        var forta = randf_range(100, 300)
        fragment.apply_impulse(directie * forta)
        
        # Adăugăm fragmentul la scena curentă
        get_parent().add_child(fragment)
    
    # Eliminăm obiectul original
    queue_free()
`}
            </CodeExample>
          </Challenge>
          
          <InfoBox title="Continuă să experimentezi!" icon="success" variant="success">
            <p className="mb-2">Fizica în Godot oferă posibilități nelimitate pentru jocuri creative. Continuă să experimentezi cu diferite configurații și combinații de noduri fizice. Iată alte idei de proiecte pentru a practica:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Un joc de bowling simplu</li>
              <li>Un simulator de mașini cu suspensii realizate din PinJoint2D</li>
              <li>Un joc de biliard</li>
              <li>Un joc de tip "bridge builder" unde jucătorul construiește poduri</li>
              <li>O clonă a jocului "Angry Birds" folosind fizica proiectilelor</li>
            </ul>
          </InfoBox>
          
          <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Concluzie</h3>
            <p className="mb-3">
              Felicitări! Ai parcurs cu succes lecția despre fizică și coliziuni în Godot. Aceste concepte 
              sunt fundamentale pentru crearea jocurilor interactive și realiste.
            </p>
            <p className="mb-3">
              Ai învățat despre diferitele tipuri de corpuri fizice, cum să configurezi forme de coliziune, 
              cum să aplici forțe și impulsuri, și cum să detectezi și să răspunzi la coliziuni. De asemenea, 
              ai creat un mini-joc practic care utilizează aceste concepte.
            </p>
            <p>
              În lecția următoare, vom explora animațiile și efectele vizuale în Godot, care te vor ajuta 
              să aduci jocurile tale la viață cu mișcări fluide și efecte impresionante.
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="godot"
      sessionId="3"
      title="Fizică și coliziuni"
      subtitle="Aplicarea fizicii și gestionarea coliziunilor în jocurile 2D."
      heroColor="bg-gradient-to-r from-indigo-700 to-indigo-500"
      previousLesson={{
        title: "Sesiunea 2: Concepte de bază în GDScript",
        path: "/godot/session2"
      }}
      nextLesson={{
        title: "Sesiunea 4: Animații și efecte vizuale",
        path: "/godot/session4"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3;
