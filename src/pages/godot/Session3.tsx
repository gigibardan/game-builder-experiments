import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'fizica-godot', title: 'Sistemul de fizică în Godot' },
    { id: 'coliziuni', title: 'Forme de coliziune' },
    { id: 'detectare-coliziuni', title: 'Detectarea coliziunilor' },
    { id: 'noduri-fizica', title: 'Noduri pentru fizică' },
    { id: 'proiect', title: 'Proiect practic' },
    { id: 'optimizare', title: 'Optimizarea fizicii' },
    { id: 'exercitii', title: 'Exerciții practice' },
  ];

  const resources = [
    { title: 'Documentația de fizică Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/index.html' },
    { title: 'Tutorial Video Fizică 2D', url: 'https://www.youtube.com/watch?v=Lsj0WzkQfgI' },
    { title: 'Exemplu Proiect Platformer', url: 'https://github.com/godotengine/godot-demo-projects/tree/master/2d/physics_platformer' },
    { title: 'Forum Godot - Fizică și coliziuni', url: 'https://godotforums.org/c/tutorial-resources/physics/28' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în Fizică și Coliziuni',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la a treia lecție a cursului nostru de Godot! În această sesiune, vom explora sistemul 
            de fizică și coliziuni din Godot Engine, componente esențiale pentru crearea jocurilor interactive.
          </p>
          
          <p className="mb-6">
            Fizica și coliziunile sunt fundamentale pentru aproape toate genurile de jocuri - de la platformere 
            și jocuri de curse, până la shootere și jocuri de puzzle. Godot oferă un sistem de fizică robust 
            și ușor de utilizat, care ne permite să adăugăm comportamente realiste obiectelor din jocurile noastre.
          </p>
          
          <LearningOutcome items={[
            "Cum funcționează sistemul de fizică în Godot",
            "Tipuri de forme de coliziune și când să le folosim",
            "Detectarea și răspunsul la coliziuni",
            "Diferențele între tipurile de corpuri fizice (RigidBody2D, CharacterBody2D, etc)",
            "Implementarea unui joc simplu de platformă cu fizică",
            "Tehnici de optimizare a fizicii pentru performanță mai bună"
          ]} />
        </>
      )
    },
    {
      id: 'fizica-godot',
      title: 'Sistemul de fizică în Godot',
      content: (
        <>
          <p className="mb-4">
            Godot are un sistem de fizică complet care suportă atât simulări 2D, cât și 3D. Pentru dezvoltarea jocurilor 2D, 
            vom folosi API-ul Physics2D, care este optimizat pentru performanță și ușurință în utilizare.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Concepte de bază</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Motorul de fizică simulează forțe, greutate, frecare, etc.</li>
                <li>Coliziunile sunt detectate folosind forme de coliziune</li>
                <li>Corpurile fizice pot fi statice, rigide sau controlate de caracter</li>
                <li>Spațiile de fizică organizează și optimizează simularea</li>
                <li>Semnalele permit răspunsul la evenimente fizice</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Componentele cheie</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Forme de coliziune</strong>: CollisionShape2D, CollisionPolygon2D</li>
                <li><strong>Corpuri fizice</strong>: StaticBody2D, RigidBody2D, CharacterBody2D, Area2D</li>
                <li><strong>Proprietăți fizice</strong>: masă, gravitație, frecare, amortizare</li>
                <li><strong>Detectoare de coliziuni</strong>: raycast, shape cast, overlap tests</li>
                <li><strong>Jointuri</strong>: pentru conectarea corpurilor fizice</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Spații de fizică</h3>
          <p className="mb-4">
            În Godot, fizica este organizată în "spații de fizică" (physics spaces). Fiecare scenă are propriul său 
            spațiu de fizică 2D. Motorul simulează toate corpurile din acest spațiu împreună.
          </p>
          
          <p className="mb-2">
            Simularea fizicii are loc într-un pas fix de timp, separat de framerate-ul jocului, ceea ce asigură
            consistența, indiferent de performanța dispozitivului. Acest lucru se face în funcția de callback 
            <code>_physics_process(delta)</code>, care este apelată la un interval fix (implicit 60 de ori pe secundă).
          </p>
          
          <InfoBox title="Physics vs Process" icon="info" variant="primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-1">_process(delta)</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Rulează o dată per frame</li>
                  <li>Framerate variabil</li>
                  <li>Bun pentru: UI, efecte vizuale, input</li>
                  <li>Delta time variabil</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">_physics_process(delta)</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Rulează la un interval fix (60Hz implicit)</li>
                  <li>Framerate constant</li>
                  <li>Bun pentru: fizică, mișcare, coliziuni</li>
                  <li>Delta time constant</li>
                </ul>
              </div>
            </div>
            <p className="mt-2 text-sm">Este recomandat să folosești <code>_physics_process</code> pentru orice logică legată de fizică!</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'coliziuni',
      title: 'Forme de coliziune',
      content: (
        <>
          <p className="mb-4">
            Pentru a detecta coliziunile între obiecte, acestea trebuie să aibă forme de coliziune atașate. 
            Godot oferă mai multe tipuri de forme, fiecare potrivită pentru cazuri de utilizare specifice.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de forme de coliziune</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h4 className="font-bold text-indigo-700 mb-2">CollisionShape2D</h4>
              <p className="text-sm mb-2">Forma de coliziune de bază, suportă mai multe tipuri de forme predefinite:</p>
              <ul className="list-disc list-inside text-sm">
                <li>RectangleShape2D (dreptunghi)</li>
                <li>CircleShape2D (cerc)</li>
                <li>CapsuleShape2D (capsulă)</li>
                <li>ConvexPolygonShape2D (poligon convex)</li>
                <li>ConcavePolygonShape2D (poligon concav)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">CollisionPolygon2D</h4>
              <p className="text-sm mb-2">Permite crearea de forme poligonale personalizate prin definirea vârfurilor.</p>
              <ul className="list-disc list-inside text-sm">
                <li>Bun pentru forme complexe și neregulate</li>
                <li>Eficient pentru obiecte statice</li>
                <li>Permite editare vizuală în editor</li>
                <li>Trebuie să fie convexă sau va fi împărțită</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-bold text-green-700 mb-2">RayCast2D</h4>
              <p className="text-sm mb-2">Nu este o formă propriu-zisă, dar permite detectarea coliziunilor prin lansarea unei raze.</p>
              <ul className="list-disc list-inside text-sm">
                <li>Util pentru verificări de coliziune simple</li>
                <li>Bun pentru detectarea obiectelor la distanță</li>
                <li>Eficient pentru weapon hits sau sight checks</li>
                <li>Personalizabil prin lungime și direcție</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Adăugarea unei forme de coliziune">
            <p className="mb-2">Iată cum să adăugăm o formă de coliziune la un nod:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul părinte (ex: RigidBody2D, StaticBody2D)</li>
              <li>Apasă pe butonul "Add Child Node" sau folosește scurtătura Ctrl+A</li>
              <li>Caută și selectează "CollisionShape2D"</li>
              <li>Cu nodul CollisionShape2D selectat, în Inspector, găsește proprietatea "Shape"</li>
              <li>Apasă pe "[empty]" și alege "New RectangleShape2D" (sau alt tip de formă)</li>
              <li>Ajustează dimensiunile formei pentru a se potrivi cu sprite-ul</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/physics_collision_shapes.webp" 
            alt="Forme de coliziune în Godot" 
            caption="Exemple de forme de coliziune în Godot"
          />
          
          <InfoBox title="Sfaturi pentru alegerea formelor de coliziune" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Simplitate</strong>: Folosește forme simple (cerc, dreptunghi) când este posibil pentru performanță mai bună</li>
              <li><strong>Precizie vs. Performanță</strong>: Formele complexe sunt mai precise dar consumă mai multe resurse</li>
              <li><strong>Convex vs. Concav</strong>: Formele convexe sunt mai eficiente; cele concave sunt împărțite automat în convexe</li>
              <li><strong>Layer-uri de coliziune</strong>: Organizează coliziunile pe layer-uri pentru a controla ce interacționează cu ce</li>
              <li><strong>Mărime</strong>: Pentru personaje, folosește o formă puțin mai mică decât sprite-ul pentru un gameplay mai fluid</li>
            </ul>
          </InfoBox>
          
          <CodeExample title="Crearea unei forme de coliziune prin cod" language="gdscript">
{`extends RigidBody2D

func _ready():
    # Creăm o nouă formă circulară
    var forma = CircleShape2D.new()
    forma.radius = 32  # Setăm raza la 32 pixeli
    
    # Obținem nodul de coliziune
    var collision_shape = $CollisionShape2D
    
    # Dacă nu există, îl creăm
    if not collision_shape:
        collision_shape = CollisionShape2D.new()
        add_child(collision_shape)
    
    # Atribuim forma
    collision_shape.shape = forma
`}
          </CodeExample>
        </>
      )
    },
    {
      id: 'detectare-coliziuni',
      title: 'Detectarea și răspunsul la coliziuni',
      content: (
        <>
          <p className="mb-4">
            Godot oferă mai multe metode pentru a detecta coliziuni și a răspunde la acestea. Vom explora 
            abordările principale și cum să le implementăm în jocurile noastre.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Metode de detectare a coliziunilor</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">1. Semnale de coliziune</h3>
              <p className="mb-2">Cea mai comună metodă. Nodurile emit semnale când coliziunile apar:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><code>body_entered</code>/<code>body_exited</code> (RigidBody2D)</li>
                <li><code>area_entered</code>/<code>area_exited</code> (Area2D)</li>
                <li><code>body_shape_entered</code> (informații detaliate)</li>
              </ul>
              <CodeExample title="Exemplu de semnal de coliziune" language="gdscript" compact>
{`extends Area2D

func _ready():
    connect("body_entered", _on_body_entered)
    
func _on_body_entered(body):
    if body.is_in_group("jucatori"):
        print("Jucătorul a intrat în zonă!")
        # Implementează logica aici
`}
              </CodeExample>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">2. Raycast și shape casting</h3>
              <p className="mb-2">Verificarea activă a coliziunilor prin lansarea de raze sau forme:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>RayCast2D: lansează o rază într-o direcție</li>
                <li>ShapeCast2D: similar, dar folosește o formă</li>
                <li>Physics2DDirectSpaceState: API avansat de querying</li>
              </ul>
              <CodeExample title="Exemplu de raycast" language="gdscript" compact>
{`extends Node2D

func _physics_process(delta):
    var space = get_world_2d().direct_space_state
    var query = PhysicsRayQueryParameters2D.new()
    query.from = global_position
    query.to = global_position + Vector2(100, 0)
    query.collision_mask = 1
    
    var result = space.intersect_ray(query)
    if result:
        print("Raza a lovit: ", result.collider.name)
`}
              </CodeExample>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Lucrul cu layer-uri de coliziune</h3>
          <p className="mb-4">
            Layer-urile de coliziune sunt esențiale pentru organizarea și optimizarea detectării coliziunilor. 
            Ele permit specificarea ce tipuri de obiecte pot interacționa între ele.
          </p>
          
          <StepItem number={1} title="Configurarea layer-urilor de coliziune">
            <p className="mb-2">Pentru a configura layer-urile de coliziune:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la Project {'>'} Project Settings</li>
              <li>Selectează tab-ul "Layer Names"</li>
              <li>Găsește secțiunea "2D Physics"</li>
              <li>Setează nume pentru layer-urile de coliziune (ex: "player", "enemy", "item", "wall")</li>
              <li>Configurează matricea de coliziune pentru a specifica ce layer-uri interacționează</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/physics_layers.webp" 
            alt="Configurarea layer-urilor de coliziune în Godot" 
            caption="Configurarea layer-urilor și matricei de coliziune în Project Settings"
          />
          
          <p className="mt-4 mb-4">
            După configurarea layer-urilor, poți seta proprietățile "Collision Layer" și "Collision Mask" 
            pentru fiecare nod în Inspector:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-1">Collision Layer</h4>
                <p className="text-sm mb-2">Definește "ce este" acest obiect</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Layer-ul pe care există obiectul</li>
                  <li>Poate fi pe multiple layer-uri</li>
                  <li>Ex: Un inamic poate fi pe layer-ul "enemies"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">Collision Mask</h4>
                <p className="text-sm mb-2">Definește "cu ce" interacționează acest obiect</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Layer-urile cu care verifică coliziunile</li>
                  <li>Poate verifica multiple layer-uri</li>
                  <li>Ex: Un proiectil poate verifica doar "enemies" și "walls"</li>
                </ul>
              </div>
            </div>
          </div>
          
          <InfoBox title="Exemplu practic de layer-uri" icon="example" variant="primary">
            <p className="mb-2">Iată un exemplu de organizare a layer-urilor pentru un joc platformer:</p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Layer 1:</strong> Teren/Platforme - Cu ce jucătorul și inamicii stau</li>
              <li><strong>Layer 2:</strong> Jucător - Personajul principal</li>
              <li><strong>Layer 3:</strong> Inamici - Adversarii</li>
              <li><strong>Layer 4:</strong> Proiectile jucător - Atacurile jucătorului</li>
              <li><strong>Layer 5:</strong> Proiectile inamici - Atacurile inamicilor</li>
              <li><strong>Layer 6:</strong> Colectabile - Items, power-ups</li>
              <li><strong>Layer 7:</strong> Zone trigger - Pentru evenimente, checkpoint-uri</li>
            </ul>
            <p className="text-sm">Exemple de măști: Proiectilele jucătorului detectează doar inamicii, proiectilele inamicilor detectează doar jucătorul, jucătorul detectează terenul, inamicii și colectabilele.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'noduri-fizica',
      title: 'Noduri pentru fizică',
      content: (
        <>
          <p className="mb-4">
            Godot oferă mai multe tipuri de noduri pentru a simula fizica, fiecare cu caracteristici și 
            utilizări specifice. Să explorăm cele mai importante noduri și cum să le folosim.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de noduri fizice</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">StaticBody2D</h3>
              <p className="mb-2">Corp static care nu se mișcă și nu este afectat de forțe.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ideal pentru platforme, pereți, podele</li>
                <li>Nu se mișcă, dar detectează coliziuni</li>
                <li>Poate emite semnale de coliziune</li>
                <li>Nu are proprietăți de masă sau frecare</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">RigidBody2D</h3>
              <p className="mb-2">Corp rigid care este afectat de forțe și coliziuni.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ideal pentru obiecte care cad, se rostogolesc, sunt aruncate</li>
                <li>Simulează gravitație, frecare, amortizare</li>
                <li>Poate fi controlat prin aplicarea de forțe</li>
                <li>Are proprietăți de masă, frecare, amortizare</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <h3 className="text-lg font-bold text-green-700 mb-2">CharacterBody2D</h3>
              <p className="mb-2">Corp controlat de cod, ideal pentru personaje.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Controlat complet prin cod</li>
                <li>Detectează și răspunde la coliziuni</li>
                <li>Nu este afectat automat de gravitație</li>
                <li>Funcții utile precum is_on_floor(), is_on_wall()</li>
                <li>Mișcare prin move_and_slide()</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
              <h3 className="text-lg font-bold text-amber-700 mb-2">Area2D</h3>
              <p className="mb-2">Zonă care detectează când alte corpuri intră sau ies.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Nu are proprietăți fizice</li>
                <li>Detectează coliziuni prin semnale</li>
                <li>Ideal pentru trigger-e, zone de damage, colectabile</li>
                <li>Poate fi folosit pentru a modifica proprietățile altor corpuri</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Proprietăți importante ale corpurilor fizice</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Proprietăți RigidBody2D</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>mass</strong>: Masa corpului (influențează inerția)</li>
                <li><strong>gravity_scale</strong>: Scala gravitației (1.0 = gravitație normală)</li>
                <li><strong>linear_damp</strong>: Amortizarea mișcării liniare</li>
                <li><strong>angular_damp</strong>: Amortizarea mișcării de rotație</li>
                <li><strong>friction</strong>: Frecarea corpului</li>
                <li><strong>bounce</strong>: Cât de mult ricoșează corpul</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Proprietăți CharacterBody2D</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>velocity</strong>: Viteza corpului (setată prin cod)</li>
                <li><strong>up_direction</strong>: Direcția "în sus" (pentru detectarea podelei)</li>
                <li><strong>floor_max_angle</strong>: Unghiul maxim pentru a considera o suprafață ca podea</li>
                <li><strong>wall_max_angle</strong>: Unghiul maxim pentru a considera o suprafață ca perete</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exemplu: Crearea unei platforme mobile</h3>
          <p className="mb-4">
            Să creăm o platformă care se mișcă orizontal între două puncte:
          </p>
          
          <CodeExample title="platforma_mobila.gd - Script pentru platforma mobilă" language="gdscript">
{`extends StaticBody2D

@export var viteza = 100
@export var distanta = 200
var pozitie_initiala
var directie = 1

func _ready():
    pozitie_initiala = position

func _physics_process(delta):
    # Calculăm noua poziție
    position.x += viteza * directie * delta
    
    # Verificăm dacă am ajuns la capăt
    if abs(position.x - pozitie_initiala.x) > distanta:
        # Schimbăm direcția
        directie = -directie
        
    # Ne asigurăm că platforma rămâne în limite
    position.x = clamp(position.x, pozitie_initiala.x - distanta, pozitie_initiala.x + distanta)
`}
          </CodeExample>
          
          <StepItem number={1} title="Crearea scenei pentru platformă">
            <p className="mb-2">Creează o scenă nouă cu un StaticBody2D ca rădăcină.</p>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea unui sprite și a unei forme de coliziune">
            <p className="mb-2">Adaugă un Sprite2D și un CollisionShape2D ca și copii.</p>
          </StepItem>
          
          <StepItem number={3} title="Atașarea scriptului">
            <p className="mb-2">Atașează scriptul de mai sus la nodul StaticBody2D.</p>
          </StepItem>
          
          <StepItem number={4} title="Setarea proprietăților">
            <p className="mb-2">Setează proprietățile <code>viteza</code> și <code>distanta</code> în Inspector.</p>
          </StepItem>
          
          <StepItem number={5} title="Testarea platformei">
            <p className="mb-2">Adaugă platforma în scena principală și testează mișcarea.</p>
          </StepItem>
          
          <InfoBox title="Sfaturi pentru noduri fizice" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Folosește StaticBody2D pentru obiecte care nu se mișcă</li>
              <li>Folosește RigidBody2D pentru obiecte care trebuie simulate fizic</li>
              <li>Folosește CharacterBody2D pentru personaje controlate de jucător</li>
              <li>Folosește Area2D pentru zone de trigger și efecte speciale</li>
              <li>Ajustează proprietățile fizice pentru a obține comportamentul dorit</li>
              <li>Folosește layer-uri de coliziune pentru a optimiza coliziunile</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'proiect',
      title: 'Proiect practic: Joc de platformă simplu',
      content: (
        <>
          <p className="mb-4">
            Să aplicăm ce am învățat creând un joc de platformă simplu. Vom folosi noduri fizice, 
            coliziuni și scripturi pentru a crea un joc interactiv.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Obiectivele proiectului</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Crearea unui personaj care se poate mișca și sări</li>
            <li>Crearea unui nivel cu platforme și obstacole</li>
            <li>Implementarea coliziunilor între personaj și nivel</li>
            <li>Adăugarea de inamici care se mișcă și atacă</li>
            <li>Crearea unei interfețe simple pentru scor și vieți</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Pașii proiectului</h3>
          
          <StepItem number={1} title="Configurarea proiectului">
            <p className="mb-2">Urmează pașii din secțiunea "Configurarea proiectului" pentru a crea un nou proiect și a importa resursele necesare.</p>
          </StepItem>
          
          <StepItem number={2} title="Crearea personajului">
            <p className="mb-2">Urmează pașii din secțiunea "Crearea personajului" pentru a crea un personaj care se poate mișca și sări.</p>
          </StepItem>
          
          <StepItem number={3} title="Crearea nivelului">
            <p className="mb-2">Creează un nivel cu platforme și obstacole:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod TileMap ca și copil al nodului Level din scena principală</li>
              <li>Creează un nou TileSet în Inspector</li>
              <li>Adaugă tile-uri din sprite sheet-ul tău în TileSet</li>
              <li>Desenează platforme și obstacole pe TileMap</li>
              <li>Adaugă un CollisionShape2D la fiecare tile pentru a crea coliziuni</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Adăugarea inamicilor">
            <p className="mb-2">Adaugă inamici care se mișcă și atacă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă separată pentru inamic (folosește CharacterBody2D sau RigidBody2D)</li>
              <li>Adaugă un Sprite2D și un CollisionShape2D</li>
              <li>Atașează un script pentru a controla mișcarea inamicului</li>
              <li>Adaugă inamici în scena principală</li>
              <li>Implementează coliziuni între inamici și personaj (pentru a lua damage)</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Crearea interfeței">
            <p className="mb-2">Creează o interfață simplă pentru scor și vieți:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CanvasLayer ca și copil al nodului Main</li>
              <li>Adaugă un nod Control ca și copil al nodului CanvasLayer (pentru HUD)</li>
              <li>Adaugă noduri Label pentru scor și vieți</li>
              <li>Atașează un script pentru a actualiza scorul și viețile</li>
            </ol>
          </StepItem>
          
          <StepItem number={6} title="Implementarea logicii jocului">
            <p className="mb-2">Implementează logica jocului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Detectează coliziunile între personaj și inamici (pentru a lua damage)</li>
              <li>Detectează coliziunile între personaj și monede (pentru a colecta)</li>
              <li>Actualizează scorul și viețile</li>
              <li>Implementează un ecran de game over când viețile ajung la zero</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Provocări suplimentare" icon="challenge" variant="primary">
            <ul className="list-disc list-inside space-y-1">
              <li>Adaugă mai multe tipuri de inamici cu comportamente diferite</li>
              <li>Implementează power-ups (ex: invincibilitate, viteză)</li>
              <li>Adaugă efecte sonore și muzică</li>
              <li>
