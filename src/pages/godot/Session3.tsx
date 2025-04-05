
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'coliziuni', title: 'Coliziuni în Godot' },
    { id: 'rigidbody', title: 'RigidBody2D' },
    { id: 'characterbody', title: 'CharacterBody2D' },
    { id: 'area2d', title: 'Area2D' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentație Godot - Fizică 2D', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html' },
    { title: 'Tutorial RigidBody2D', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/rigid_body.html' },
    { title: 'Tutorial CharacterBody2D', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/kinematic_character_2d.html' },
    { title: 'Tutorial Area2D', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/using_area_2d.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în fizică și coliziuni',
      content: (
        <>
          <p className="mb-4">
            Fizica și coliziunile sunt componente esențiale în dezvoltarea jocurilor. 
            Acestea permit interacțiunea realistă între obiecte, detectarea contactului între entități, 
            și adaugă profunzime experienței de joc.
          </p>
          
          <p className="mb-4">
            În această sesiune, vom explora sistemul de fizică 2D din Godot Engine, 
            învățând cum să implementăm diferite tipuri de coliziuni și comportamente fizice 
            pentru personaje și obiecte.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea sistemului de fizică 2D din Godot",
            "Utilizarea diferitelor tipuri de noduri de coliziune",
            "Implementarea detectării coliziunilor și răspunsului la acestea",
            "Crearea unui personaj controlabil cu fizică realistă",
            "Implementarea interacțiunilor între obiecte utilizând forțe fizice"
          ]} />
          
          <h3 className="text-xl font-bold mb-3">Concepte de bază ale fizicii în Godot</h3>
          
          <p className="mb-4">
            Godot Engine oferă un sistem de fizică robust care simulează forțe, coliziuni, gravitație, și alte proprietăți fizice. 
            Sistemul de fizică 2D din Godot este separat de sistemul 3D, având propriile noduri și proprietăți.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Noduri fizice</h4>
              <p className="text-gray-700">
                Noduri specializate pentru simularea fizicii, cum ar fi RigidBody2D, CharacterBody2D, și Area2D.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Forme de coliziune</h4>
              <p className="text-gray-700">
                Definesc geometria obiectelor pentru detectarea coliziunilor (CircleShape2D, RectangleShape2D, etc.).
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Layers și Masks</h4>
              <p className="text-gray-700">
                Permit controlul precis asupra obiectelor care pot coliziona între ele.
              </p>
            </div>
          </div>
          
          <InfoBox title="Performanță și optimizare" icon="info" variant="primary">
            <p>
              Sistemul de fizică poate fi intens pentru procesor, mai ales cu multe obiecte în mișcare.
              Pentru optimizare:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Folosește forme de coliziune simple</li>
              <li>Utilizează layers pentru a limita verificările de coliziune</li>
              <li>Dezactivează nodurile fizice care nu sunt vizibile sau sunt departe de jucător</li>
              <li>Ajustează parametrii fizicii (ex: iterații de rezolvare) în Project Settings</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'coliziuni',
      title: 'Coliziuni în Godot',
      content: (
        <>
          <p className="mb-4">
            Înainte de a explora nodurile specifice pentru fizică, să înțelegem cum funcționează coliziunile în Godot. 
            Coliziunile sunt gestionate de două componente principale: noduri cu proprietăți fizice și forme de coliziune.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Forme de coliziune (CollisionShape2D)</h3>
          
          <p className="mb-4">
            CollisionShape2D este nodul utilizat pentru a defini forma geometrică a unei coliziuni. 
            Acesta trebuie adăugat ca nod copil la un nod fizic (RigidBody2D, CharacterBody2D, Area2D, etc.).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Tipuri de forme disponibile:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>RectangleShape2D</strong>: Formă dreptunghiulară, bună pentru platforme și pereți</li>
                <li><strong>CircleShape2D</strong>: Formă circulară, ideală pentru proiectile și monede</li>
                <li><strong>CapsuleShape2D</strong>: Formă de capsulă, potrivită pentru personaje</li>
                <li><strong>ConcavePolygonShape2D</strong>: Pentru forme concave complexe</li>
                <li><strong>ConvexPolygonShape2D</strong>: Pentru forme convexe personalizate</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Când să folosești fiecare tip:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Folosește forme simple (dreptunghi, cerc) când este posibil pentru performanță</li>
                <li>Pentru personaje, CapsuleShape2D este adesea cea mai bună alegere</li>
                <li>Pentru terenuri cu forme neregulate, folosește poligoane</li>
                <li>Pentru obiecte complexe, poți combina mai multe forme simple</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Adăugarea unei forme de coliziune">
            <p className="mb-2">Pentru a adăuga o formă de coliziune la un nod:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul fizic (ex: RigidBody2D)</li>
              <li>Apasă pe butonul "Add Child Node" sau Ctrl+A</li>
              <li>Caută și selectează "CollisionShape2D"</li>
              <li>Cu CollisionShape2D selectat, în panoul Inspector, la Shape, apasă pe "[empty]"</li>
              <li>Selectează tipul de formă dorit (ex: "New RectangleShape2D")</li>
              <li>Ajustează parametrii formei (dimensiuni, poziție) după necesități</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Layers și Masks de coliziune</h3>
          
          <p className="mb-4">
            Layers și Masks permit controlul detaliat asupra obiectelor care pot coliziona între ele. 
            Acestea sunt esențiale pentru optimizare și pentru logica jocului.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Cum funcționează:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Collision Layer</strong>: Definește "cine sunt eu" - pe ce layere există acest obiect</li>
              <li><strong>Collision Mask</strong>: Definește "cu cine interacționez" - cu ce layere poate coliziona acest obiect</li>
            </ul>
            <p className="mt-2">
              Pentru ca două obiecte să colizioneze, Layer-ul primului obiect trebuie să fie în Mask-ul celui de-al doilea, 
              și vice-versa.
            </p>
          </div>
          
          <StepItem number={2} title="Configurarea Layers și Masks">
            <p className="mb-2">Pentru a configura layers și masks:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mai întâi, definește layerele în Project Settings {'>'} Layer Names {'>'} 2D Physics</li>
              <li>Dă nume semnificative fiecărui layer (ex: "player", "enemies", "walls", "items")</li>
              <li>Pentru fiecare nod fizic, în Inspector, configurează Collision {'>'} Layer și Collision {'>'} Mask</li>
              <li>Selectează layerele corespunzătoare pentru fiecare obiect</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemple de configurare Layer/Mask pentru diferite obiecte" language="gdscript">
{`# Layer 1: "world" - Pentru teren, platforme, pereți
# Layer 2: "player" - Pentru personajul principal
# Layer 3: "enemies" - Pentru inamici
# Layer 4: "items" - Pentru obiecte colectabile
# Layer 5: "projectiles" - Pentru proiectile

# Configurare tipică pentru personaj (Layer = "player", Mask = "world", "enemies", "items")
# Configurare tipică pentru inamic (Layer = "enemies", Mask = "world", "player")
# Configurare tipică pentru proiectil (Layer = "projectiles", Mask = "world", "enemies")`}
          </CodeExample>
          
          <InfoBox title="Sfat de proiectare" icon="star" variant="secondary">
            <p>
              Planifică layerele de coliziune la începutul proiectului tău. Un sistem bun de layere 
              va face dezvoltarea mult mai ușoară și va preveni bug-urile legate de coliziuni.
            </p>
            <p className="mt-2">
              Exemplu de organizare tipică:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Layer 1: Mediu static (teren, platforme)</li>
              <li>Layer 2: Personaj jucător</li>
              <li>Layer 3: Inamici</li>
              <li>Layer 4: Obiecte interactive/colectabile</li>
              <li>Layer 5: Trigger zones (areas)</li>
              <li>Layer 6: Proiectile</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'rigidbody',
      title: 'RigidBody2D',
      content: (
        <>
          <p className="mb-4">
            RigidBody2D este un nod fizic care simulează complet fizica: gravitație, forță, moment, frecare. 
            Este ideal pentru obiecte care trebuie să se miște și să interacționeze realist cu mediul, 
            cum ar fi obiecte care cad, pot fi împinse, sau aruncate.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-bold text-lg mb-2">Caracteristici principale:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Simulare completă a fizicii (mișcare, rotație, coliziuni)</li>
              <li>Afectat de gravitație</li>
              <li>Poate reacționa la forțe și impulsuri</li>
              <li>Interacționează automat cu alte corpuri fizice</li>
              <li>Mișcarea este controlată de motorul de fizică, nu direct de cod</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea unui RigidBody2D">
            <p className="mb-2">Pentru a crea un obiect RigidBody2D:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod RigidBody2D (Ctrl+A {'>'} RigidBody2D)</li>
              <li>Adaugă un nod Sprite2D sau AnimatedSprite2D ca copil pentru vizualizare</li>
              <li>Adaugă un nod CollisionShape2D ca copil pentru coliziuni</li>
              <li>Configurează forma de coliziune potrivită pentru obiect</li>
              <li>Ajustează proprietățile fizice în Inspector</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Proprietăți importante</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Proprietăți de bază:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Mass</strong>: Masa obiectului, afectează cum reacționează la forțe</li>
                <li><strong>Gravity Scale</strong>: Factorul de gravitație aplicat acestui corp</li>
                <li><strong>Linear/Angular Velocity</strong>: Viteza de mișcare și rotație</li>
                <li><strong>Linear/Angular Damp</strong>: Amortizarea mișcării și rotației</li>
                <li><strong>Freeze</strong>: Blochează poziția sau rotația obiectului</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Moduri disponibile:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Rigid</strong>: Comportament fizic normal, complet</li>
                <li><strong>Static</strong>: Nu se mișcă, dar alte obiecte pot coliziona cu el</li>
                <li><strong>Character</strong>: Comportament special pentru personaje</li>
                <li><strong>Kinematic</strong>: Mișcat exclusiv prin cod, ignoră forțele externe</li>
              </ul>
            </div>
          </div>
          
          <CodeExample title="Aplicarea forțelor la un RigidBody2D" language="gdscript">
{`extends RigidBody2D

var throw_force = 500

func _ready():
    # Setăm masa și alte proprietăți
    mass = 2.0
    gravity_scale = 1.0
    
func throw_object(direction):
    # Aplicăm un impuls (forță instantanee)
    apply_impulse(Vector2.ZERO, direction * throw_force)
    
func push_object(direction, delta):
    # Aplicăm o forță continuă
    apply_force(direction * 100, Vector2.ZERO)
    
func _on_hit(collision_info):
    # Reacționăm la coliziune
    var collision_force = collision_info.get_collider_velocity().length()
    if collision_force > 10:
        print("Coliziune puternică detectată!")`}
          </CodeExample>
          
          <Challenge title="Crearea unui obiect fizic interactiv" difficulty="medium">
            <p className="mb-2">
              Creează un obiect RigidBody2D care poate fi împins de personajul jucătorului și care se comportă 
              realist când lovește alte obiecte sau cade.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un RigidBody2D cu un Sprite2D și CollisionShape2D</li>
              <li>Setează masa la 5, gravity_scale la 1, și linear_damp la 0.5</li>
              <li>Adaugă un script care detectează coliziunile și afișează un mesaj când obiectul 
              este lovit cu o forță mai mare decât un anumit prag</li>
              <li>Bonus: Adaugă sunet sau efecte vizuale când obiectul se lovește de ceva</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Când să folosești RigidBody2D" icon="info" variant="primary">
            <p>RigidBody2D este ideal pentru:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Obiecte care trebuie să aibă comportament fizic realist (cutii, pietre)</li>
              <li>Obiecte care pot fi aruncate, împinse sau care cad</li>
              <li>Vehicule sau obiecte care se rostogolesc</li>
              <li>Obstacole distructibile sau mobile</li>
            </ul>
            <p className="mt-2">
              Nu este recomandat pentru personaje controlate direct de jucător - pentru acestea, 
              CharacterBody2D oferă un control mai precis.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'characterbody',
      title: 'CharacterBody2D',
      content: (
        <>
          <p className="mb-4">
            CharacterBody2D este un nod fizic special proiectat pentru personaje controlate. 
            Spre deosebire de RigidBody2D, mișcarea unui CharacterBody2D este controlată complet prin cod, 
            dar păstrează detectarea coliziunilor și interacțiunea cu mediul.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-bold text-lg mb-2">Caracteristici principale:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Control complet asupra mișcării</li>
              <li>Detectarea și răspunsul la coliziuni</li>
              <li>Nu este afectat automat de gravitație (trebuie implementată în cod)</li>
              <li>Funcții dedicate pentru mișcarea pe suprafețe (podele, pereți)</li>
              <li>Ideal pentru personaje principale, inamici, sau NPC-uri</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea unui CharacterBody2D">
            <p className="mb-2">Pentru a crea un personaj folosind CharacterBody2D:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CharacterBody2D</li>
              <li>Adaugă un Sprite2D sau AnimatedSprite2D ca copil</li>
              <li>Adaugă un CollisionShape2D ca copil (de obicei CapsuleShape2D pentru personaje)</li>
              <li>Atașează un script pentru a controla mișcarea</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Implementarea mișcării personajului</h3>
          
          <p className="mb-4">
            Spre deosebire de RigidBody2D, un CharacterBody2D nu se mișcă automat. 
            Trebuie să implementăm mișcarea în script, inclusiv gravitația, saltul, și mișcarea laterală.
          </p>
          
          <CodeExample title="Script de bază pentru un personaj 2D platformer" language="gdscript">
{`extends CharacterBody2D

# Parametri pentru mișcare
var speed = 300.0
var jump_velocity = -400.0
var gravity = 980.0

# Obține direcția de input de la jucător
func get_input_direction():
    return Input.get_axis("ui_left", "ui_right")

func _physics_process(delta):
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += gravity * delta
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = jump_velocity
    
    # Obținem direcția de mișcare
    var direction = get_input_direction()
    
    # Controlăm mișcarea orizontală
    if direction:
        velocity.x = direction * speed
    else:
        # Oprim mișcarea orizontală când nu există input
        velocity.x = move_toward(velocity.x, 0, speed)
    
    # Aplicăm mișcarea și gestionăm coliziunile
    move_and_slide()
    
    # Funcționalitate opțională: verificăm dacă personajul a lovit ceva
    for i in get_slide_collision_count():
        var collision = get_slide_collision(i)
        print("Am lovit: ", collision.get_collider().name)`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Funcții esențiale pentru CharacterBody2D</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Funcții de mișcare:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>move_and_slide()</strong>: Mișcă personajul și gestionează coliziunile</li>
                <li><strong>move_and_collide()</strong>: Oferă control mai detaliat asupra coliziunilor</li>
                <li><strong>get_slide_collision()</strong>: Obține informații despre coliziuni</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Funcții de verificare a stării:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>is_on_floor()</strong>: Verifică dacă personajul este pe podea</li>
                <li><strong>is_on_wall()</strong>: Verifică dacă personajul atinge un perete</li>
                <li><strong>is_on_ceiling()</strong>: Verifică dacă personajul atinge tavanul</li>
                <li><strong>get_floor_normal()</strong>: Obține normala podelei (util pentru pante)</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={2} title="Îmbunătățirea controlului personajului">
            <p className="mb-2">Pentru a îmbunătăți controlul personajului, putem adăuga:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Accelerare și decelerare graduală</li>
              <li>Salt variabil în funcție de cât timp este apăsat butonul</li>
              <li>Detectarea pantelor și mișcarea corespunzătoare pe acestea</li>
              <li>Abilitatea de a se agăța de margini sau de a se cățăra pe pereți</li>
            </ul>
          </StepItem>
          
          <CodeExample title="Script avansat pentru personaj cu accelerare și decelerare" language="gdscript">
{`extends CharacterBody2D

# Parametri fizici
export var speed = 400.0
export var acceleration = 2000.0
export var friction = 1000.0
export var jump_velocity = -600.0
export var gravity = 980.0
export var air_control = 0.3

func _physics_process(delta):
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += gravity * delta
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = jump_velocity
    
    # Obținem direcția dorită
    var direction = Input.get_axis("ui_left", "ui_right")
    
    # Accelerare/decelerare
    if direction != 0:
        # Factor de control mai mic în aer pentru un sentiment mai realist
        var control_factor = 1.0 if is_on_floor() else air_control
        
        # Accelerăm în direcția dorită
        velocity.x = move_toward(velocity.x, direction * speed, acceleration * delta * control_factor)
    else:
        # Aplicăm frecare pentru a încetini
        velocity.x = move_toward(velocity.x, 0, friction * delta)
    
    move_and_slide()`}
          </CodeExample>
          
          <Challenge title="Implementarea unui personaj de platformer" difficulty="medium">
            <p className="mb-2">
              Creează un personaj de platformer 2D cu următoarele caracteristici:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mișcare stânga-dreapta cu accelerare și decelerare</li>
              <li>Salt cu înălțime variabilă (în funcție de cât timp este apăsat butonul)</li>
              <li>Animații pentru idle, alergare și salt</li>
              <li>Flip al sprite-ului în funcție de direcția de mișcare</li>
              <li>Bonus: Adaugă un efect de particule când personajul aterizează</li>
            </ul>
          </Challenge>
          
          <InfoBox title="Când să folosești CharacterBody2D" icon="info" variant="primary">
            <p>CharacterBody2D este ideal pentru:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Personajul principal controlat de jucător</li>
              <li>Inamici și NPC-uri care necesită mișcare precisă</li>
              <li>Orice entitate care necesită control complet asupra mișcării, dar trebuie să interacționeze cu mediul fizic</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'area2d',
      title: 'Area2D',
      content: (
        <>
          <p className="mb-4">
            Area2D este un nod specializat pentru detectarea intrării, ieșirii și prezenței altor noduri fizice într-o anumită zonă. 
            Spre deosebire de RigidBody2D și CharacterBody2D, Area2D nu are comportament fizic propriu, 
            ci este folosit pentru a detecta și răspunde la evenimente de suprapunere.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-bold text-lg mb-2">Utilizări tipice:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Zone de declanșare (trigger zones) pentru evenimente</li>
              <li>Detectarea obiectelor în raza de atac</li>
              <li>Obiecte colectabile</li>
              <li>Zone de damage (ex: capcane, acid)</li>
              <li>Zone de detecție pentru AI</li>
              <li>Hotspots interactive</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea unei Area2D">
            <p className="mb-2">Pentru a crea o zonă de detecție:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Area2D</li>
              <li>Opțional, adaugă un Sprite2D pentru vizualizare (poate fi transparentă sau invizibilă în joc)</li>
              <li>Adaugă un CollisionShape2D și configurează forma zonei</li>
              <li>Conectează semnalele relevante (body_entered, body_exited, etc.)</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Semnale importante</h3>
          
          <p className="mb-4">
            Area2D emite semnale când obiecte intră, ies, sau rămân în interiorul zonei. 
            Aceste semnale sunt esențiale pentru a răspunde la suprapuneri.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Semnale pentru corpuri fizice:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>body_entered</strong>: Emis când un PhysicsBody intră în zonă</li>
                <li><strong>body_exited</strong>: Emis când un PhysicsBody iese din zonă</li>
                <li><strong>body_shape_entered</strong>: Oferă informații detaliate despre forma care a intrat</li>
                <li><strong>body_shape_exited</strong>: Oferă informații detaliate despre forma care a ieșit</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Semnale pentru alte zone:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>area_entered</strong>: Emis când o altă Area2D intră în zonă</li>
                <li><strong>area_exited</strong>: Emis când o altă Area2D iese din zonă</li>
                <li><strong>area_shape_entered</strong>: Informații detaliate despre forma zonei care a intrat</li>
                <li><strong>area_shape_exited</strong>: Informații detaliate despre forma zonei care a ieșit</li>
              </ul>
            </div>
          </div>
          
          <CodeExample title="Exemple de utilizare Area2D" language="gdscript">
{`extends Area2D

# Exemplu de zonă colectabilă (monedă)
func _ready():
    connect("body_entered", Callable(self, "_on_body_entered"))

func _on_body_entered(body):
    if body.is_in_group("player"):
        # Jucătorul a colectat moneda
        body.collect_coin()
        # Ascundem și dezactivăm moneda
        hide()
        $CollisionShape2D.set_deferred("disabled", true)
        # Eventual, redăm o animație și un sunet
        # După finalizarea animației, eliberăm memoria
        queue_free()

# Exemplu de zonă de damage (capcană)
func _physics_process(delta):
    # Pentru zone care aplică damage continuu, putem verifica manual
    var bodies = get_overlapping_bodies()
    for body in bodies:
        if body.has_method("take_damage"):
            body.take_damage(10 * delta)

# Exemplu de zonă de detectare pentru un inamic
func _on_body_entered(body):
    if body.is_in_group("player"):
        # Jucătorul a intrat în raza de detectare
        # Informăm părintele (inamicul) că a detectat jucătorul
        get_parent().player_detected(body)
        
func _on_body_exited(body):
    if body.is_in_group("player"):
        # Jucătorul a ieșit din raza de detectare
        get_parent().player_lost()`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Proprietăți speciale ale Area2D</h3>
          
          <p className="mb-4">
            Area2D are proprietăți unice care îl fac versatil pentru diferite situații.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
            <h4 className="font-bold mb-2">Proprietăți notabile:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Monitoring</strong>: Dacă este activ, zona monitorizează corpurile care intră/ies</li>
              <li><strong>Monitorable</strong>: Dacă este activ, zona poate fi detectată de alte zone</li>
              <li><strong>Priority</strong>: Pentru zone suprapuse, prioritatea determină ordinea de procesare</li>
              <li><strong>Space Override</strong>: Permite zonei să modifice proprietățile fizice din interiorul ei</li>
              <li><strong>Gravity</strong>: Poate defini o gravitație personalizată în interiorul zonei</li>
              <li><strong>Linear/Angular Damp</strong>: Modifică amortizarea mișcării pentru corpurile din interior</li>
            </ul>
          </div>
          
          <StepItem number={2} title="Crearea unei zone de gravitație modificată">
            <p className="mb-2">Poți crea zone cu gravitație diferită:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o Area2D cu o formă de coliziune</li>
              <li>În Inspector, setează Space Override la "Replace"</li>
              <li>Modifică proprietatea Gravity {'>'} Point Force pentru a crea gravitație zero sau inversată</li>
              <li>Alternativ, poți folosi Gravity {'>'} Point pentru a crea un punct de atracție</li>
            </ol>
          </StepItem>
          
          <Challenge title="Crearea unui sistem de obiecte colectabile" difficulty="easy">
            <p className="mb-2">
              Implementează un sistem de obiecte colectabile utilizând Area2D:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă "Coin" cu Area2D și o animație de rotație</li>
              <li>Implementează codul pentru colectare când jucătorul intră în zonă</li>
              <li>Creează un sistem de scor care se actualizează când sunt colectate monede</li>
              <li>Adaugă efecte sonore și vizuale la colectare</li>
              <li>Bonus: Implementează diferite tipuri de colectabile (monede de diferite valori, power-ups)</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Când să folosești Area2D" icon="info" variant="primary">
            <p>Area2D este ideal pentru:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Obiecte colectabile (monede, power-ups)</li>
              <li>Zone de trigger pentru evenimente sau cutscenes</li>
              <li>Detectarea jucătorului în raza inamicilor</li>
              <li>Zone de modificare a fizicii (apă, noroi, gheață)</li>
              <li>Hitboxes pentru atacuri și abilități</li>
              <li>Hotspots interactive care declanșează acțiuni</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'proiect',
      title: 'Proiect practic',
      content: (
        <>
          <p className="mb-4">
            Acum că înțelegem diferitele noduri de fizică și coliziuni, 
            să le aplicăm într-un proiect practic simplu: un mic joc de platformă 
            cu obiecte fizice, colectabile și obstacole.
          </p>
          
          <StepItem number={1} title="Configurarea proiectului">
            <p className="mb-2">Începe prin crearea unui nou proiect și configurarea scenei principale:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un nou proiect 2D în Godot</li>
              <li>Configurează layerele de coliziune în Project Settings:</li>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Layer 1: "world" - pentru teren și platforme</li>
                  <li>Layer 2: "player" - pentru personajul principal</li>
                  <li>Layer 3: "objects" - pentru obiecte fizice</li>
                  <li>Layer 4: "collectibles" - pentru monede și power-ups</li>
                  <li>Layer 5: "hazards" - pentru capcane și pericole</li>
                </ul>
              <li>Creează o scenă principală cu un nod Node2D ca rădăcină</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea nivelului de test">
            <p className="mb-2">Adaugă platforme și terenul de bază:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod StaticBody2D pentru platforme</li>
              <li>Adaugă CollisionShape2D pentru fiecare platformă (RectangleShape2D)</li>
              <li>Adaugă Sprite2D pentru vizualizarea platformelor</li>
              <li>Setează layer-ul de coliziune la "world"</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Crearea personajului jucător">
            <p className="mb-2">Implementează personajul principal:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un nod CharacterBody2D ca rădăcină</li>
              <li>Adaugă un AnimatedSprite2D pentru vizualizare</li>
              <li>Adaugă un CollisionShape2D (CapsuleShape2D)</li>
              <li>Implementează un script de control bazat pe exemplele anterioare</li>
              <li>Setează layer-ul de coliziune la "player"</li>
              <li>Adaugă personajul la scena principală</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Adăugarea obiectelor fizice">
            <p className="mb-2">Adaugă obiecte cu care jucătorul poate interacționa:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă pentru cutii sau alte obiecte mobile</li>
              <li>Folosește RigidBody2D cu CollisionShape2D și Sprite2D</li>
              <li>Setează proprietățile fizice (masă, frecare, etc.)</li>
              <li>Setează layer-ul de coliziune la "objects"</li>
              <li>Adaugă mai multe instanțe la nivelul principal</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Implementarea colectabilelor">
            <p className="mb-2">Adaugă monede sau alte obiecte colectabile:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă pentru monede folosind Area2D</li>
              <li>Adaugă AnimatedSprite2D și CollisionShape2D (CircleShape2D)</li>
              <li>Implementează un script pentru detectarea coliziunilor cu jucătorul</li>
              <li>Setează layer-ul de coliziune la "collectibles"</li>
              <li>Adaugă un sistem de scor pentru a ține evidența monedelor colectate</li>
            </ol>
          </StepItem>
          
          <StepItem number={6} title="Adăugarea capcanelor și pericolelor">
            <p className="mb-2">Implementează capcane care pot răni jucătorul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă pentru capcane folosind Area2D</li>
              <li>Adaugă Sprite2D și CollisionShape2D</li>
              <li>Implementează un script pentru a aplica damage jucătorului</li>
              <li>Setează layer-ul de coliziune la "hazards"</li>
              <li>Adaugă un sistem de viață pentru personajul jucătorului</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Idei pentru extinderea proiectului</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Mecanici adiționale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Platforme în mișcare (folosind AnimationPlayer)</li>
                <li>Trambuline pentru sărituri înalte</li>
                <li>Zone cu gravitație modificată</li>
                <li>Inamici cu AI simplu care patrulează</li>
                <li>Checkpoint-uri pentru a salva progresul</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Îmbunătățiri de gameplay:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>UI pentru viață și scor</li>
                <li>Efecte sonore și muzică</li>
                <li>Efecte de particule pentru feedback vizual</li>
                <li>Tranziții între niveluri</li>
                <li>Sistem de power-ups temporare</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Sfaturi pentru dezvoltarea jocului" icon="star" variant="secondary">
            <p>Când construiești un joc bazat pe fizică, ține cont de următoarele:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Testează frecvent pentru a calibra parametrii fizici (gravitație, săritură, frecare)</li>
              <li>Începe simplu și adaugă complexitate treptat</li>
              <li>Folosește layere de coliziune pentru a optimiza performanța</li>
              <li>Organizează codul pentru a face sistemele reutilizabile</li>
              <li>Adaugă feedback vizual și sonor pentru toate interacțiunile (coliziuni, colectare)</li>
            </ul>
          </InfoBox>
          
          <Challenge title="Extinderea proiectului de platformer" difficulty="hard">
            <p className="mb-2">
              Extinde proiectul de platformer cu următoarele funcționalități:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un inamic care patrulează și poate răni jucătorul</li>
              <li>Implementează o mecanică de atac pentru jucător (ex: projectil, lovitură)</li>
              <li>Creează un sistem de viață cu UI</li>
              <li>Adaugă un power-up care oferă temporar o abilitate specială</li>
              <li>Implementează un obiectiv final (ex: o ușă care duce la nivelul următor)</li>
            </ol>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout 
      title="Fizică și coliziuni în Godot" 
      description="Explorează sistemul de fizică 2D din Godot și învață să creezi jocuri cu coliziuni și interacțiuni fizice realiste."
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3;
