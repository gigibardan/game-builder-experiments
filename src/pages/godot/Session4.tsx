
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'sprite-frames', title: 'SpriteFrames' },
    { id: 'animații-sprite', title: 'Animații de Sprite' },
    { id: 'animații-avansate', title: 'Animații avansate' },
    { id: 'efecte-particule', title: 'Efecte de particule' },
    { id: 'efecte-shader', title: 'Shaders' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentație Godot - Animații', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html' },
    { title: 'Tutorial AnimatedSprite2D', url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html' },
    { title: 'Tutorial Sistem de Particule', url: 'https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html' },
    { title: 'Introducere în Shadere', url: 'https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/index.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în animații și efecte vizuale',
      content: (
        <>
          <p className="mb-4">
            Animațiile și efectele vizuale sunt esențiale pentru a da viață jocurilor. 
            Ele fac interacțiunea mai plăcută, oferă feedback important jucătorului, 
            și contribuie semnificativ la atmosfera și stilul jocului.
          </p>
          
          <p className="mb-4">
            În această sesiune, vom explora diferitele metode de animare și creare a efectelor vizuale 
            în Godot Engine, de la simple animații de sprite-uri până la efecte complexe de particule 
            și shadere.
          </p>
          
          <LearningOutcome items={[
            "Crearea și gestionarea animațiilor de sprite-uri",
            "Utilizarea AnimatedSprite2D pentru personaje și obiecte",
            "Animarea proprietăților nodurilor cu AnimationPlayer",
            "Crearea sistemelor de particule pentru efecte vizuale",
            "Implementarea animațiilor bazate pe stări pentru personaje",
            "Introducere în shadere pentru efecte vizuale avansate"
          ]} />
          
          <h3 className="text-xl font-bold mb-3">Sistemele de animație în Godot</h3>
          
          <p className="mb-4">
            Godot oferă mai multe sisteme pentru crearea animațiilor și efectelor vizuale, 
            fiecare cu avantajele și cazurile sale de utilizare.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">AnimatedSprite2D</h4>
              <p className="text-gray-700">
                Ideal pentru animații bazate pe sprite-uri (frame-by-frame), 
                cum ar fi mișcările personajelor, obiectele animate, etc.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">AnimationPlayer</h4>
              <p className="text-gray-700">
                Oferă control complet pentru animarea oricărei proprietăți a nodurilor,
                permițând animații complexe și timeline-uri.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Sisteme de particule</h4>
              <p className="text-gray-700">
                Pentru efecte cum ar fi foc, fum, ploaie, magie, explozii,
                și multe alte efecte ambientale.
              </p>
            </div>
          </div>
          
          <InfoBox title="De ce sunt importante animațiile?" icon="info" variant="primary">
            <p>
              Animațiile și efectele vizuale îndeplinesc mai multe roluri esențiale în jocuri:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Feedback vizual</strong> - Indică jucătorului că acțiunile lor au un efect</li>
              <li><strong>Comunicare non-verbală</strong> - Transmit informații despre starea jocului</li>
              <li><strong>Îmbunătățirea imersiunii</strong> - Fac lumea jocului să pară mai vie și reactivă</li>
              <li><strong>Stilizare</strong> - Contribuie la identitatea vizuală unică a jocului</li>
              <li><strong>Satisfacție</strong> - Animațiile fluide și efectele bine executate sunt satisfăcătoare în sine</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'sprite-frames',
      title: 'SpriteFrames și AnimatedSprite2D',
      content: (
        <>
          <p className="mb-4">
            AnimatedSprite2D este un nod specializat în Godot pentru animații de sprite-uri frame-by-frame. 
            Acest nod utilizează resursa SpriteFrames pentru a organiza și reda secvențe de imagini.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Înțelegerea SpriteFrames</h3>
          
          <p className="mb-4">
            SpriteFrames este o resursă care conține una sau mai multe animații, 
            fiecare constând din cadre (frames) individuale și proprietăți cum ar fi viteza de redare 
            și dacă animația se repetă.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Componentele SpriteFrames:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Animations</strong>: Colecția de animații (idle, run, jump, etc.)</li>
              <li><strong>Frames</strong>: Cadre individuale ale fiecărei animații</li>
              <li><strong>FPS</strong>: Cadre pe secundă - determină viteza de redare</li>
              <li><strong>Loop</strong>: Dacă animația se repetă continuu</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea unui SpriteFrames">
            <p className="mb-2">Există două moduri principale de a crea un SpriteFrames:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong>În editor</strong>:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Selectează sau creează un nod AnimatedSprite2D</li>
                  <li>În Inspector, la SpriteFrames, apasă pe "[empty]" și alege "New SpriteFrames"</li>
                  <li>Se va deschide editorul SpriteFrames în partea de jos a ecranului</li>
                </ul>
              </li>
              <li><strong>Ca resursă separată</strong>:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>În FileSystem, click dreapta {'>'} New Resource</li>
                  <li>Caută și selectează "SpriteFrames"</li>
                  <li>Salvează resursa cu un nume relevant (ex: "player_animations.tres")</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea animațiilor în SpriteFrames">
            <p className="mb-2">După ce ai creat un SpriteFrames, poți adăuga animații:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În editorul SpriteFrames, apasă pe butonul "Add Animation"</li>
              <li>Redenumește animația (ex: "idle", "run", "jump")</li>
              <li>Setează proprietățile animației:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>FPS</strong>: De obicei între 8-24 pentru animații 2D</li>
                  <li><strong>Loop</strong>: Activat pentru animații continue (idle, run), dezactivat pentru animații unice (atac, moarte)</li>
                </ul>
              </li>
              <li>Adaugă cadre la animație:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Trage și plasează imagini în zona de frames</li>
                  <li>Sau folosește butonul "Add Frame from File/Sprite Sheet"</li>
                </ul>
              </li>
              <li>Repetă procesul pentru fiecare animație necesară</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Utilizarea AnimatedSprite2D</h3>
          
          <p className="mb-4">
            AnimatedSprite2D este nodul care utilizează SpriteFrames pentru a reda animațiile 
            și oferă control asupra redării.
          </p>
          
          <StepItem number={3} title="Crearea și configurarea unui AnimatedSprite2D">
            <p className="mb-2">Pentru a utiliza AnimatedSprite2D în jocul tău:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D la scena ta</li>
              <li>Atribuie-i un SpriteFrames (nou sau existent)</li>
              <li>Configurează proprietățile după necesități:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Animation</strong>: Animația inițială</li>
                  <li><strong>Playing</strong>: Dacă animația începe automat</li>
                  <li><strong>Frame</strong>: Cadrul inițial</li>
                  <li><strong>Offset</strong>: Poziția relativă a sprite-ului</li>
                  <li><strong>Flip H/V</strong>: Dacă sprite-ul este inversat orizontal/vertical</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <CodeExample title="Controlul AnimatedSprite2D prin script" language="gdscript">
{`extends Node2D

@onready var animated_sprite = $AnimatedSprite2D

func _ready():
    # Pornește animația "idle" la începutul scenei
    animated_sprite.play("idle")
    
    # Conecteză semnalul animation_finished pentru a putea reacționa când o animație se termină
    animated_sprite.connect("animation_finished", Callable(self, "_on_animation_finished"))

func start_running():
    # Schimbă la animația de alergare
    animated_sprite.play("run")
    
func jump():
    # Schimbă la animația de salt
    animated_sprite.play("jump")
    
func attack():
    # Dezactivează loop pentru animația de atac (dacă nu este deja dezactivat în SpriteFrames)
    animated_sprite.sprite_frames.set_animation_loop("attack", false)
    # Redă animația de atac
    animated_sprite.play("attack")

func _on_animation_finished():
    # Verifică ce animație tocmai s-a terminat
    if animated_sprite.animation == "attack":
        # După ce atacul s-a terminat, revenim la idle
        animated_sprite.play("idle")
    elif animated_sprite.animation == "jump":
        # După salt, revenim la animația de alergare sau idle, în funcție de stare
        if is_running:
            animated_sprite.play("run")
        else:
            animated_sprite.play("idle")`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Organizarea sprite-urilor pentru animații</h3>
          
          <p className="mb-4">
            Pentru a crea animații eficiente și ușor de gestionat, este important să organizezi 
            sprite-urile corect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Sprite sheets vs. Imagini individuale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Sprite sheets</strong>: Mai multe cadre într-o singură imagine, aranjate în grilă
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li>Avantaje: Încărcare mai rapidă, organizare mai bună</li>
                    <li>Dezavantaje: Necesită decupare corectă în Godot</li>
                  </ul>
                </li>
                <li><strong>Imagini individuale</strong>: Fiecare cadru într-un fișier separat
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li>Avantaje: Ușor de înlocuit/modificat cadre individuale</li>
                    <li>Dezavantaje: Mai multe fișiere de gestionat</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Convenții de denumire:</h4>
              <p className="mb-2">Este util să folosești un sistem de denumire consecvent:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><code>character_action_##.png</code> (ex: player_run_01.png)</li>
                <li><code>character_action.png</code> pentru sprite sheets</li>
                <li>Numerotarea de la 00 sau 01 pentru a menține ordinea în FileSystem</li>
                <li>Folosirea unor dimensiuni consistente pentru toate cadrele</li>
                <li>Asigurarea că punctul de referință (pivot) este consistent între cadre</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Optimizarea animațiilor" icon="star" variant="secondary">
            <p>Pentru animații eficiente și fluide:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește sprite sheets pentru mai multă eficiență</li>
              <li>Ajustează FPS-ul în funcție de necesități (nu folosi mai multe cadre decât e necesar)</li>
              <li>Folosește atlas textures pentru a minimiza state changes în GPU</li>
              <li>Pentru animații complexe cu multe sprite-uri, consideră utilizarea AnimationPlayer în loc</li>
              <li>Refolosește cadre sau secvențe când este posibil (ex: animația de alergare poate fi folosită și pentru animația de alergare înapoi prin inversare)</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animații-sprite',
      title: 'Animații de sprite pentru personaje',
      content: (
        <>
          <p className="mb-4">
            Unul dintre cele mai comune utilizări ale animațiilor în jocuri este pentru personaje. 
            Fie că este vorba despre personajul jucătorului, inamici, sau NPC-uri, animațiile bine 
            realizate fac personajele să pară vii și responsive.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Animații de bază pentru un personaj 2D</h3>
          
          <p className="mb-4">
            Un personaj de joc tipic are cel puțin câteva animații de bază. Să explorăm 
            cum să le implementăm folosind AnimatedSprite2D.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Animații esențiale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Idle</strong>: Când personajul stă pe loc</li>
                <li><strong>Run/Walk</strong>: Când personajul se mișcă</li>
                <li><strong>Jump</strong>: Pentru saltul personajului</li>
                <li><strong>Fall</strong>: Pentru căderea personajului (opțional)</li>
                <li><strong>Attack</strong>: Pentru acțiuni de atac</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Animații adiționale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Hurt</strong>: Când personajul primește damage</li>
                <li><strong>Death</strong>: Animația de moarte</li>
                <li><strong>Crouch</strong>: Pentru ghemuire</li>
                <li><strong>Climb</strong>: Pentru cățărare</li>
                <li><strong>Special abilities</strong>: Animații pentru abilități specifice</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Crearea unui personaj animat">
            <p className="mb-2">Să creăm un personaj cu animații de bază:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu CharacterBody2D ca nod rădăcină</li>
              <li>Adaugă un AnimatedSprite2D ca nod copil</li>
              <li>Adaugă un CollisionShape2D și configurează-l corespunzător</li>
              <li>Creează un nou SpriteFrames pentru AnimatedSprite2D</li>
              <li>Adaugă animațiile necesare (idle, run, jump, fall, etc.)</li>
              <li>Adaugă cadrele pentru fiecare animație</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Implementarea mașinii de stare pentru animații">
            <p className="mb-2">Un sistem de animație robust utilizează o mașină de stare:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Definește stările posibile ale personajului (idle, running, jumping, etc.)</li>
              <li>Implementează logica pentru tranzițiile între stări</li>
              <li>Conectează stările cu animațiile corespunzătoare</li>
              <li>Gestionează prioritatea stărilor (ex: animația de damage întrerupe alte animații)</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Mașină de stare pentru animațiile personajului" language="gdscript">
{`extends CharacterBody2D

# Stări posibile pentru personaj
enum {
    STATE_IDLE,
    STATE_RUN,
    STATE_JUMP,
    STATE_FALL,
    STATE_ATTACK,
    STATE_HURT,
    STATE_DEAD
}

# Starea curentă
var current_state = STATE_IDLE
var previous_state = STATE_IDLE

# Variabile pentru mișcare
var speed = 300
var jump_force = -600
var gravity = 980
var direction = 0

# Referențe la noduri
@onready var animated_sprite = $AnimatedSprite2D

func _ready():
    # Inițial începem cu animația idle
    change_state(STATE_IDLE)

func _physics_process(delta):
    # Aplicăm gravitație
    if not is_on_floor():
        velocity.y += gravity * delta
    
    # Obținem input de la jucător
    direction = Input.get_axis("ui_left", "ui_right")
    
    # Gestionăm mișcarea orizontală
    if direction != 0:
        velocity.x = direction * speed
    else:
        velocity.x = move_toward(velocity.x, 0, speed)
    
    # Actualizăm orientarea sprite-ului
    if direction < 0:
        animated_sprite.flip_h = true
    elif direction > 0:
        animated_sprite.flip_h = false
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("ui_up") and is_on_floor():
        velocity.y = jump_force
    
    # Gestionăm atacul
    if Input.is_action_just_pressed("attack") and current_state != STATE_ATTACK:
        change_state(STATE_ATTACK)
    
    # Aplicăm mișcarea
    move_and_slide()
    
    # Actualizăm starea în funcție de condițiile curente
    update_state()

func update_state():
    # Dacă suntem în starea de atac, așteptăm să se termine animația
    if current_state == STATE_ATTACK:
        return
    
    # Verificăm prioritar dacă personajul este în aer
    if not is_on_floor():
        if velocity.y < 0:
            change_state(STATE_JUMP)
        else:
            change_state(STATE_FALL)
    else:
        # Personajul este pe podea
        if abs(velocity.x) > 10:  # Valoare mică pentru a evita imprecizia float
            change_state(STATE_RUN)
        else:
            change_state(STATE_IDLE)

func change_state(new_state):
    if new_state == current_state:
        return
    
    previous_state = current_state
    current_state = new_state
    
    # Setăm animația corespunzătoare stării
    match current_state:
        STATE_IDLE:
            animated_sprite.play("idle")
        STATE_RUN:
            animated_sprite.play("run")
        STATE_JUMP:
            animated_sprite.play("jump")
        STATE_FALL:
            animated_sprite.play("fall")
        STATE_ATTACK:
            animated_sprite.play("attack")
        STATE_HURT:
            animated_sprite.play("hurt")
        STATE_DEAD:
            animated_sprite.play("death")

func _on_animation_finished():
    # Gestionăm terminarea animațiilor care nu se repetă
    if current_state == STATE_ATTACK:
        # Revenim la starea anterioară sau determinăm noua stare
        update_state()
    elif current_state == STATE_HURT:
        # După animația de hurt, verificăm dacă personajul mai are viață
        if health <= 0:
            change_state(STATE_DEAD)
        else:
            update_state()`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Tehnici pentru animații de calitate</h3>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Principii pentru animații fluide:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Anticipare</strong>: Sugerează acțiunea înainte să se întâmple (ex: personajul se ghemuiește înainte de salt)</li>
              <li><strong>Squash & Stretch</strong>: Deformarea pentru a accentua mișcarea și a adăuga personalitate</li>
              <li><strong>Follow-through</strong>: Părți ale personajului continuă să se miște după acțiunea principală</li>
              <li><strong>Easing</strong>: Accelerare și decelerare naturală în loc de mișcare liniară</li>
              <li><strong>Frame timing</strong>: Unele cadre pot dura mai mult decât altele pentru efect</li>
            </ul>
          </div>
          
          <StepItem number={3} title="Îmbunătățirea animațiilor personajului">
            <p className="mb-2">Pentru animații mai convingătoare:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Adaugă cadre-cheie cu exagerare pentru mișcări importante</li>
              <li>Folosește blending între animații pentru tranziții mai naturale</li>
              <li>Adaugă variații mici pentru animațiile repetitive (ex: multiple animații idle)</li>
              <li>Sincronizează animațiile cu efecte sonore</li>
              <li>Adaugă efecte de particule pentru accentuarea acțiunilor importante</li>
            </ul>
          </StepItem>
          
          <InfoBox title="Resurse pentru sprite-uri și animații" icon="info" variant="primary">
            <p>Dacă nu ești artist, iată câteva resurse utile pentru a găsi sprite-uri pentru personaje:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><a href="https://itch.io/game-assets/free/tag-sprites" className="text-blue-600 hover:underline">itch.io</a> - Multe sprite-uri gratuite și premium</li>
              <li><a href="https://opengameart.org/" className="text-blue-600 hover:underline">OpenGameArt</a> - Resurse gratuite pentru jocuri</li>
              <li><a href="https://www.kenney.nl/assets" className="text-blue-600 hover:underline">Kenney</a> - Asset-uri gratuite de înaltă calitate</li>
              <li><a href="https://www.spriters-resource.com/" className="text-blue-600 hover:underline">The Spriters Resource</a> - Sprite-uri din jocuri existente (pentru referință)</li>
              <li><a href="https://www.gameart2d.com/freebies.html" className="text-blue-600 hover:underline">GameArt2D</a> - Sprite-uri gratuite de calitate</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animații-avansate',
      title: 'Animații avansate cu AnimationPlayer',
      content: (
        <>
          <p className="mb-4">
            În timp ce AnimatedSprite2D este excelent pentru animații de cadre de sprite, 
            AnimationPlayer oferă un control mult mai detaliat, permițând animarea oricărei 
            proprietăți a oricărui nod din scena ta.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Introducere în AnimationPlayer</h3>
          
          <p className="mb-4">
            AnimationPlayer este un nod puternic care poate anima proprietăți precum:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>Poziție, rotație și scală</li>
                <li>Culoare și opacitate</li>
                <li>Texturi și materiale</li>
                <li>Proprietăți ale shader-elor</li>
                <li>Valori din scripturi (variabile exportate)</li>
              </ul>
            </div>
            
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>Vizibilitatea nodurilor</li>
                <li>Apeluri de metode</li>
                <li>Sprite frames și texturi</li>
                <li>Animații complexe cu multiple obiecte</li>
                <li>Aproape orice proprietate vizibilă în Inspector</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Adăugarea și configurarea unui AnimationPlayer">
            <p className="mb-2">Pentru a utiliza AnimationPlayer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimationPlayer la scena ta</li>
              <li>Selectează nodul AnimationPlayer</li>
              <li>În panoul de animație din partea de jos, apasă pe "Animation" {'>'} "New"</li>
              <li>Dă un nume animației (ex: "idle", "door_open", "fade_in")</li>
              <li>Configurează setările pentru animație:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Durata (în secunde)</li>
                  <li>Loop (pentru animații ciclice)</li>
                  <li>Step (pentru controlul preciziei timeline-ului)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Crearea animațiilor cu keyframes</h3>
          
          <p className="mb-4">
            Animațiile în AnimationPlayer sunt create folosind keyframes (cadre-cheie), 
            care definesc valoarea unei proprietăți la un moment specific.
          </p>
          
          <StepItem number={2} title="Adăugarea keyframes și animarea proprietăților">
            <p className="mb-2">Pentru a anima o proprietate:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul pe care vrei să-l animezi</li>
              <li>Mută timeline-ul la momentul dorit</li>
              <li>Setează proprietatea la valoarea dorită</li>
              <li>Click dreapta pe proprietate în Inspector și alege "Key..."</li>
              <li>Alternativ, apasă pe butonul cheie din timeline pentru a adăuga direct un keyframe</li>
              <li>Mută timeline-ul la un alt moment și modifică valoarea proprietății</li>
              <li>Adaugă un alt keyframe</li>
              <li>Repetă pentru a crea animația completă</li>
            </ol>
          </StepItem>
          
          <p className="mb-4 mt-4">
            Iată câteva exemple de animații comune care pot fi create cu AnimationPlayer:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Ușă care se deschide</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Animează proprietatea rotation a nodului ușă</li>
                <li>Adaugă un keyframe la momentul 0 cu rotația inițială</li>
                <li>Adaugă un keyframe la 1 secundă cu rotația deschisă</li>
                <li>Opțional, adaugă easing pentru o deschidere naturală</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Platformă mobilă</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Animează position a unei platforme</li>
                <li>Setează position la punctul de start (keyframe la 0)</li>
                <li>Setează position la punctul final (keyframe la 2 secunde)</li>
                <li>Activează loop pentru mișcare continuă</li>
                <li>Adaugă keyframe-uri intermediare pentru un traseu complex</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Fade in/out pentru UI</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Animează modulate:a (alfa/opacitate) a unui nod Control</li>
                <li>Pentru fade in: de la transparent (0) la opac (1)</li>
                <li>Pentru fade out: de la opac (1) la transparent (0)</li>
                <li>Adaugă easing pentru tranziții line</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Animarea unui shader</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Animează parametrii shader-ului unui material</li>
                <li>De exemplu, pentru un efect de dizolvare:</li>
                <li>Animează proprietatea shader_param/dissolve_amount</li>
                <li>De la 0 (solid) la 1 (dizolvat complet)</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Controlul animațiilor prin script</h3>
          
          <p className="mb-4">
            AnimationPlayer poate fi controlat complet prin script, permițând integrarea 
            animațiilor în logica jocului.
          </p>
          
          <CodeExample title="Controlul AnimationPlayer prin script" language="gdscript">
{`extends Node2D

@onready var animation_player = $AnimationPlayer

func _ready():
    # Pornește animația "idle" la începutul scenei
    animation_player.play("idle")
    
    # Conectăm semnalul animation_finished pentru a putea reacționa când o animație se termină
    animation_player.connect("animation_finished", Callable(self, "_on_animation_finished"))

func open_door():
    # Verificăm dacă ușa nu este deja în curs de deschidere
    if not animation_player.is_playing() or animation_player.current_animation != "door_open":
        animation_player.play("door_open")

func fade_in():
    animation_player.play("fade_in")
    
func fade_out():
    animation_player.play("fade_out")
    
func _on_animation_finished(anim_name):
    # Reacționăm în funcție de ce animație s-a terminat
    if anim_name == "door_open":
        print("Ușa s-a deschis complet!")
    elif anim_name == "fade_out":
        # De exemplu, după un fade out, putem schimba scena
        get_tree().change_scene_to_file("res://scenes/next_level.tscn")
        
# Exemple de controlul mai avansat

func play_animation_backwards(anim_name):
    # Redă o animație în sens invers
    animation_player.play_backwards(anim_name)
    
func blend_animations(from_anim, to_anim, blend_time):
    # Tranziție lină între două animații
    animation_player.play(to_anim)
    # Sau pentru mai mult control
    animation_player.get_animation(to_anim).loop = true
    animation_player.blend(from_anim, to_anim, blend_time, false)
    
func set_animation_speed(speed_scale):
    # Ajustează viteza de redare a animației curente
    animation_player.speed_scale = speed_scale`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Track-uri și proprietăți avansate</h3>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Tipuri de track-uri în AnimationPlayer:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Property Tracks</strong>: Animează orice proprietate a nodurilor</li>
              <li><strong>Method Tracks</strong>: Apelează metode la momente specifice</li>
              <li><strong>Bezier Tracks</strong>: Oferă control precis asupra curbelor de animație</li>
              <li><strong>Audio Tracks</strong>: Redă sunete la momente specifice</li>
              <li><strong>Animation Tracks</strong>: Redă alte animații (sub-animații)</li>
            </ul>
          </div>
          
          <StepItem number={3} title="Utilizarea track-urilor de apel de metode">
            <p className="mb-2">Track-urile de apel de metode sunt deosebit de utile:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează AnimationPlayer și deschide editorul de animație</li>
              <li>Selectează nodul care conține metoda pe care vrei să o apelezi</li>
              <li>Click dreapta pe timeline și alege "Add Track" {'>'} "Call Method Track"</li>
              <li>Mută timeline-ul la momentul dorit pentru apel</li>
              <li>Click dreapta pe track și alege "Insert Key"</li>
              <li>Selectează metoda din listă și adaugă orice parametri necesari</li>
            </ol>
            <p className="mt-2">Exemple de utilizare:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Apelarea unei metode spawn_effect() când un personaj atinge un anumit punct în animația de atac</li>
              <li>Redarea unui sunet play_sound("footstep") când piciorul atinge solul</li>
              <li>Activarea unui trigger trigger_event() la un moment specific</li>
            </ul>
          </StepItem>
          
          <Challenge title="Crearea unei platforme complexe" difficulty="medium">
            <p className="mb-2">
              Folosind AnimationPlayer, creează o platformă mobilă cu următoarele caracteristici:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Platformă care se mișcă pe un traseu cu mai multe puncte (cel puțin 4)</li>
              <li>La fiecare punct, platforma așteaptă 1 secundă înainte de a continua</li>
              <li>În timpul mișcării, platforma își schimbă ușor culoarea (hint: modulate)</li>
              <li>La fiecare oprire, platforma emite un sunet scurt (folosind un method track)</li>
              <li>Animația întreagă se repetă continuu (loop)</li>
            </ol>
          </Challenge>
          
          <InfoBox title="AnimationPlayer vs. AnimatedSprite2D" icon="info" variant="primary">
            <p>Când să folosești fiecare:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="font-bold">AnimatedSprite2D este ideal pentru:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Animații simple de sprite-uri (frame-by-frame)</li>
                  <li>Personaje și obiecte cu stări discrete</li>
                  <li>Când ai sprite sheets sau secvențe de imagini</li>
                  <li>Animații care trebuie schimbate frecvent în funcție de stare</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">AnimationPlayer este ideal pentru:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Animații complexe cu multiple proprietăți</li>
                  <li>Animații care implică mai multe noduri</li>
                  <li>Când ai nevoie de control precis asupra timing-ului</li>
                  <li>Animații de UI, capcane, platforme, efecte, etc.</li>
                </ul>
              </div>
            </div>
          </InfoBox>
        </>
      )
    },
    {
      id: 'efecte-particule',
      title: 'Efecte de particule',
      content: (
        <>
          <p className="mb-4">
            Sistemele de particule sunt esențiale pentru crearea efectelor vizuale dinamice și 
            atractive în jocuri. În Godot, nodurile GPUParticles2D (sau CPUParticles2D) permit 
            crearea unei varietăți de efecte precum foc, fum, ploaie, scântei, și multe altele.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Introducere în sisteme de particule</h3>
          
          <p className="mb-4">
            Un sistem de particule emite și gestionează un număr mare de imagini mici (particule) 
            care urmează reguli comune dar au variații individuale, creând efecte complexe și organice.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Noduri pentru particule în Godot:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>GPUParticles2D</strong>: Utilizează GPU-ul pentru performanță, recomandat pentru majoritatea cazurilor</li>
              <li><strong>CPUParticles2D</strong>: Rulează pe CPU, util când ai nevoie de control programatic detaliat sau pentru dispozitive cu GPU limitat</li>
            </ul>
            <p className="mt-2">
              Ambele tipuri de noduri partajează concepte și proprietăți similare, dar în acest tutorial 
              ne vom concentra pe GPUParticles2D, care este mai eficient pentru majoritatea jocurilor.
            </p>
          </div>
          
          <StepItem number={1} title="Crearea unui sistem de particule de bază">
            <p className="mb-2">Pentru a crea un efect de particule simplu:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod GPUParticles2D la scena ta</li>
              <li>În Inspector, la Process Material, apasă pe "[empty]" și selectează "New ParticleProcessMaterial"</li>
              <li>La Texture, poți adăuga o textură pentru particule (sau lasă-l gol pentru particule pătrate)</li>
              <li>Ajustează proprietățile de bază:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li><strong>Amount</strong>: Numărul total de particule</li>
                  <li><strong>Lifetime</strong>: Durata de viață a fiecărei particule</li>
                  <li><strong>One Shot</strong>: Dacă activat, emite particule o singură dată</li>
                  <li><strong>Preprocess</strong>: Timp de pre-procesare pentru a umple efectul inițial</li>
                  <li><strong>Explosiveness</strong>: Controlează cât de "exploziv" sunt emise particulele (0 = continuu, 1 = toate odată)</li>
                  <li><strong>Randomness</strong>: Variația timpului de emitere</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Configurarea ParticleProcessMaterial</h3>
          
          <p className="mb-4">
            ParticleProcessMaterial definește cum se comportă particulele și este cheia pentru 
            crearea efectelor vizuale diverse.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Proprietăți de mișcare:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Direction</strong>: Direcția inițială a particulelor</li>
                <li><strong>Spread</strong>: Dispersarea particulelor în jurul direcției</li>
                <li><strong>Initial Velocity</strong>: Viteza inițială</li>
                <li><strong>Angular Velocity</strong>: Viteza de rotație</li>
                <li><strong>Gravity</strong>: Forța gravitațională aplicată particulelor</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Proprietăți vizuale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Scale</strong>: Dimensiunea particulelor</li>
                <li><strong>Color</strong>: Culoarea particulelor (poate fi gradient)</li>
                <li><strong>Color Ramp</strong>: Schimbarea culorii pe durata de viață</li>
                <li><strong>Transparency</strong>: Opacitatea particulelor</li>
                <li><strong>Emission Shape</strong>: Forma din care sunt emise particulele</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={2} title="Crearea diferitelor tipuri de efecte">
            <p className="mb-2">Setări pentru efecte comune:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 mb-4">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <h5 className="font-bold text-orange-600">Foc:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Direction: 0, -1, 0 (în sus)</li>
                  <li>Spread: 15-30°</li>
                  <li>Initial Velocity: 30-50</li>
                  <li>Scale: 1-3, descrescând în timp</li>
                  <li>Color Ramp: De la galben la roșu la negru</li>
                  <li>Lifetime: 0.5-1.5 secunde</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <h5 className="font-bold text-blue-600">Fum:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Direction: 0, -1, 0 (în sus)</li>
                  <li>Spread: 10-20°</li>
                  <li>Initial Velocity: 20-40</li>
                  <li>Scale: 1-4, crescând în timp</li>
                  <li>Color: De la gri deschis la gri închis</li>
                  <li>Lifetime: 1-3 secunde</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <h5 className="font-bold text-yellow-600">Scântei:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Direction: 0, -1, 0</li>
                  <li>Spread: 180° (în toate direcțiile)</li>
                  <li>Initial Velocity: 100-200</li>
                  <li>Gravity: Pozitivă pentru a cădea</li>
                  <li>Color: Galben, portocaliu, sau alb</li>
                  <li>Lifetime: 0.3-0.8 secunde</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <h5 className="font-bold text-blue-400">Ploaie:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Direction: 0, 1, 0 (în jos)</li>
                  <li>Spread: 5-10°</li>
                  <li>Initial Velocity: 200-400</li>
                  <li>Scale: Alungit vertical</li>
                  <li>Emission Shape: Rectangle (zonă largă)</li>
                  <li>Color: Albastru deschis transparent</li>
                </ul>
              </div>
            </div>
          </StepItem>
          
          <StepItem number={3} title="Texturi pentru particule">
            <p className="mb-2">Textura particulelor afectează semnificativ aspectul efectului:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pentru foc/fum: Textură circulară soft (gradient de la centru spre margini)</li>
              <li>Pentru scântei: Puncte sau linii mici, stele</li>
              <li>Pentru ploaie/zăpadă: Picături alungite sau fulgi</li>
              <li>Pentru magie/energie: Forme abstracte luminoase, spirale</li>
              <li>Pentru explozii: Cercuri, blobs, sau forme neregulate</li>
            </ul>
            <p className="mt-2">Poți crea texturi cu canal alfa (transparență) pentru forme complexe.</p>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Integrarea efectelor de particule în joc</h3>
          
          <p className="mb-4">
            Efectele de particule pot fi integrate în joc în diverse moduri, fie permanent, 
            fie declanșate de evenimente.
          </p>
          
          <CodeExample title="Controlul sistemelor de particule prin script" language="gdscript">
{`extends Node2D

@onready var explosion_particles = $ExplosionParticles
@onready var trail_particles = $TrailParticles
@onready var rain_particles = $RainParticles

func _ready():
    # Sistemul de ploaie poate rula continuu
    rain_particles.emitting = true
    
    # Trail-ul este oprit inițial, va fi pornit când se mișcă
    trail_particles.emitting = false
    
    # Explozia este configurată ca one-shot și pornită doar la comandă
    explosion_particles.emitting = false
    explosion_particles.one_shot = true

func create_explosion_at(position):
    # Poziționează sistemul de particule la locația dorită
    explosion_particles.global_position = position
    
    # Pornește emiterea particulelor
    explosion_particles.restart()
    explosion_particles.emitting = true
    
    # Opțional, redă un sunet
    $ExplosionSound.play()

func toggle_rain(enabled):
    # Pornește/oprește ploaia
    rain_particles.emitting = enabled

func _process(delta):
    # Trail-ul urmărește poziția jucătorului
    trail_particles.global_position = $Player.global_position
    
    # Activează trail-ul doar când jucătorul se mișcă
    trail_particles.emitting = $Player.is_moving()

# Exemplu pentru particule care se adaptează la viteza personajului
func update_trail_based_on_speed(speed):
    var process_material = trail_particles.process_material
    
    # Ajustează viteza inițială în funcție de viteza personajului
    process_material.initial_velocity = 20 + speed * 0.5
    
    # Ajustează și culoarea sau scale-ul dacă dorești
    if speed > 100:
        process_material.color = Color(1, 0.5, 0, 1)  # Orange pentru viteză mare
    else:
        process_material.color = Color(0.5, 0.5, 0.5, 1)  # Gray pentru viteză normală`}
          </CodeExample>
          
          <StepItem number={4} title="Cazuri de utilizare comune pentru particule">
            <p className="mb-2">Efectele de particule sunt utile în multe situații:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Efecte ambientale</strong>: Ploaie, zăpadă, frunze în vânt, praf</li>
              <li><strong>Feedback pentru jucător</strong>: Scântei la coliziuni, efecte de damage</li>
              <li><strong>Abilități și puteri</strong>: Magie, foc, electricitate, aură</li>
              <li><strong>Urme de mișcare</strong>: Trail-uri pentru rachete, săbii, personaje rapide</li>
              <li><strong>Efecte de interfață</strong>: Scântei pentru butoane, particule pentru highlight</li>
              <li><strong>Distrugeri și explozii</strong>: Când obiecte sunt distruse sau abilități impactează</li>
            </ul>
          </StepItem>
          
          <Challenge title="Crearea unui efect de trail pentru personaj" difficulty="medium">
            <p className="mb-2">
              Creează un efect de trail pentru personajul jucătorului cu următoarele caracteristici:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Trail-ul apare doar când personajul se mișcă rapid</li>
              <li>Particulele au o culoare care se schimbă în funcție de direcția de mișcare (ex: albastru pentru stânga, roșu pentru dreapta)</li>
              <li>Particulele dispar treptat (fade out)</li>
              <li>Trail-ul este mai intens când personajul se mișcă mai repede</li>
              <li>Bonus: Adaugă un efect special când personajul sare (ex: particule în formă de stea la picioare)</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Optimizarea sistemelor de particule" icon="info" variant="primary">
            <p>Sistemele de particule pot afecta performanța dacă sunt folosite excesiv:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Limitează numărul de particule active simultan (ajustează Amount)</li>
              <li>Utilizează texturi mai mici și optimizate</li>
              <li>Dezactivează sistemele de particule când nu sunt vizibile</li>
              <li>Pentru dispozitive mobile, folosește mai puține particule și efecte mai simple</li>
              <li>Testează performanța pe dispozitive cu specificații mai slabe</li>
              <li>Utilizează tehnica "object pooling" pentru efecte care apar frecvent, în loc să creezi și să distrugi sisteme</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'efecte-shader',
      title: 'Introducere în shadere pentru efecte vizuale',
      content: (
        <>
          <p className="mb-4">
            Shaderele sunt programe care rulează pe GPU și determină cum sunt desenate pixelii pe ecran. 
            Ele sunt un instrument puternic pentru crearea unor efecte vizuale avansate care ar fi 
            imposibil de realizat prin metode tradiționale.
          </p>
          
          <p className="mb-4">
            În Godot, poți utiliza shadere pentru a crea efecte precum distorsiuni, iluminare dinamică, 
            apă animată, dizolvare, și multe altele.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Concepte de bază despre shadere</h3>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Tipuri de shadere în Godot:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Shader-e canvas item</strong>: Pentru noduri 2D (Sprite2D, TextureRect, etc.)</li>
              <li><strong>Shader-e spatial</strong>: Pentru noduri 3D (non-relevant pentru acest curs)</li>
              <li><strong>Shader-e particles</strong>: Pentru sisteme de particule</li>
            </ul>
            <p className="mt-2">
              În acest tutorial, ne vom concentra pe shader-ele canvas item pentru efecte 2D.
            </p>
          </div>
          
          <p className="mb-4">
            Godot oferă două moduri de a scrie shadere:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">ShaderMaterial:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Creezi un shader personalizat folosind limbajul Godot Shader Language</li>
                <li>Oferă control complet și flexibilitate maximă</li>
                <li>Necesită cunoștințe de programare shader</li>
                <li>Ideal pentru efecte complexe și personalizate</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">VisualShader:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Editor vizual cu noduri pentru crearea shader-elor</li>
                <li>Mai accesibil pentru începători</li>
                <li>Nu necesită cunoștințe de cod</li>
                <li>Util pentru prototipare rapidă și efecte simple</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Crearea unui shader simplu">
            <p className="mb-2">Pentru a crea și aplica un shader simplu:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează un nod vizual (ex: Sprite2D)</li>
              <li>În Inspector, la Material, apasă pe "[empty]" și alege "New ShaderMaterial"</li>
              <li>La Shader, apasă pe "[empty]" și alege "New Shader"</li>
              <li>Se va deschide editorul de shader</li>
              <li>Scrie codul shader-ului (sau încarcă un exemplu)</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exemple de shadere simple</h3>
          
          <p className="mb-4">
            Iată câteva exemple de shadere simple dar eficiente pentru efecte 2D:
          </p>
          
          <CodeExample title="Shader de culoare pulsatorie" language="shader">
{`shader_type canvas_item;

uniform vec4 color : source_color = vec4(1.0, 0.0, 0.0, 1.0); // culoare roșie implicită
uniform float speed : hint_range(0.0, 10.0) = 2.0; // viteza pulsației
uniform float intensity : hint_range(0.0, 1.0) = 0.5; // intensitatea efectului

void fragment() {
    // Obținem culoarea originală a texturii
    vec4 original_color = texture(TEXTURE, UV);
    
    // Calculăm factorul de pulsație bazat pe timp
    float pulse = sin(TIME * speed) * intensity + (1.0 - intensity);
    
    // Amestecăm culoarea originală cu culoarea pulsatorie
    COLOR = original_color * mix(vec4(1.0), color, pulse);
}`}
          </CodeExample>
          
          <CodeExample title="Shader de dizolvare" language="shader">
{`shader_type canvas_item;

uniform float dissolve_amount : hint_range(0.0, 1.0) = 0.5;
uniform sampler2D noise_texture;
uniform vec4 edge_color : source_color = vec4(1.0, 0.5, 0.0, 1.0);
uniform float edge_thickness : hint_range(0.0, 0.3) = 0.1;

void fragment() {
    // Obținem culoarea originală
    vec4 original_color = texture(TEXTURE, UV);
    
    // Obținem valoarea de zgomot pentru efectul de dizolvare
    float noise_value = texture(noise_texture, UV).r;
    
    // Calculăm marginea de dizolvare
    float edge = step(noise_value, dissolve_amount) - step(noise_value, dissolve_amount - edge_thickness);
    
    // Aplicăm efectul de dizolvare cu margine colorată
    if (noise_value < dissolve_amount) {
        // În interiorul zonei dizolvate
        if (noise_value > dissolve_amount - edge_thickness) {
            // Pe marginea efectului
            COLOR = edge_color;
        } else {
            // Complet dizolvat
            COLOR = vec4(0.0);
        }
    } else {
        // În afara zonei dizolvate - culoarea originală
        COLOR = original_color;
    }
    
    // Păstrăm canalul alfa pentru transparență corectă
    COLOR.a *= original_color.a;
}`}
          </CodeExample>
          
          <StepItem number={2} title="Utilizarea parametrilor uniformi">
            <p className="mb-2">Parametrii uniformi permit controlul shader-elor din GDScript:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Definește parametrii uniformi în shader cu cuvântul cheie "uniform"</li>
              <li>Specifică tipul și valoarea implicită</li>
              <li>Opțional, adaugă hint-uri pentru editor (range, color)</li>
              <li>Accesează și modifică acești parametri din cod:</li>
            </ol>
            
            <CodeExample title="Controlul parametrilor shader din GDScript" language="gdscript">
{`extends Sprite2D

func _ready():
    # Asigură-te că materialul este un ShaderMaterial
    material = ShaderMaterial.new()
    material.shader = preload("res://shaders/pulse.gdshader")
    
    # Setează parametrii inițiali
    material.set_shader_parameter("color", Color(0.0, 0.5, 1.0, 1.0))  # Albastru
    material.set_shader_parameter("speed", 3.0)
    material.set_shader_parameter("intensity", 0.7)

func change_color(new_color):
    material.set_shader_parameter("color", new_color)

func _process(delta):
    # Exemplu: modifică un parametru în timp real
    var current_intensity = material.get_shader_parameter("intensity")
    current_intensity = sin(Time.get_ticks_msec() / 1000.0) * 0.25 + 0.5  # Variază între 0.25 și 0.75
    material.set_shader_parameter("intensity", current_intensity)`}
            </CodeExample>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Efecte shader practice pentru jocuri 2D</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Efect de damage/hit</h4>
              <p className="mb-2">Flash alb sau roșu când un personaj primește damage:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Shader simplu care înlocuiește temporar culoarea</li>
                <li>Activat printr-un AnimationPlayer sau direct din cod</li>
                <li>Durată scurtă (0.1-0.3 secunde)</li>
                <li>Poate varia în intensitate în funcție de damage</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Efect de apă</h4>
              <p className="mb-2">Distorsiune ondulată pentru simularea apei:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Folosește funcții sinusoidale pentru deplasarea UV-urilor</li>
                <li>Combină mai multe unde pentru un aspect natural</li>
                <li>Adaugă reflecții și transparență</li>
                <li>Poate interacționa cu alte obiecte (splash effects)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Contururi/Highlights</h4>
              <p className="mb-2">Contururi pentru selectare sau evidențiere:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Detectează marginile prin compararea pixelilor vecini</li>
                <li>Adaugă un contur colorat în jurul obiectului</li>
                <li>Poate pulsa sau schimba culoarea în timp</li>
                <li>Util pentru UI și gameplay (obiecte interactive)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Efecte de tranziție</h4>
              <p className="mb-2">Tranziții între scene sau stări:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Fade, wipe, dissolve, pixelate, etc.</li>
                <li>Aplicat pe un ColorRect sau TextureRect fullscreen</li>
                <li>Controlat printr-un parametru uniform (progress)</li>
                <li>Poate folosi texturi de zgomot pentru efecte organice</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={3} title="Aplicarea shader-elor în joc">
            <p className="mb-2">Integrează shader-ele în jocul tău:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Efecte permanente</strong>: Aplicate direct pe sprite-uri sau obiecte (foc, apă, etc.)</li>
              <li><strong>Efecte temporare</strong>: Activate în anumite momente (damage, power-ups)</li>
              <li><strong>Efecte globale</strong>: Aplicate pe întregul ecran (vreme, stări, tranziții)</li>
              <li><strong>Efecte condiționale</strong>: Activate în funcție de starea jocului</li>
            </ul>
          </StepItem>
          
          <Challenge title="Crearea unui efect de shield/scut" difficulty="hard">
            <p className="mb-2">
              Creează un shader pentru un efect de scut/shield cu următoarele caracteristici:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Un contur hexagonal sau circular în jurul personajului</li>
              <li>O pulsație constantă care radiază din centru spre exterior</li>
              <li>Efect de "impact" când scutul este lovit (flash mai intens)</li>
              <li>Culoare care se schimbă în funcție de "sănătatea" scutului</li>
              <li>Bonus: Adaugă un efect de "shatter/spargere" când scutul se distruge</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Resurse pentru învățarea shader-elor" icon="info" variant="primary">
            <p>Shader-ele pot părea intimidante la început, dar există multe resurse pentru a învăța:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><a href="https://docs.godotengine.org/en/stable/tutorials/shaders/index.html" className="text-blue-600 hover:underline">Documentația oficială Godot</a> - Tutoriale și referințe pentru shader-e</li>
              <li><a href="https://thebookofshaders.com/" className="text-blue-600 hover:underline">The Book of Shaders</a> - Un ghid excelent pentru începători</li>
              <li><a href="https://godotshaders.com/" className="text-blue-600 hover:underline">Godot Shaders</a> - Bibliotecă de shadere gata de utilizat</li>
              <li><a href="https://www.shadertoy.com/" className="text-blue-600 hover:underline">Shadertoy</a> - Inspirație și exemple (deși folosește GLSL standard)</li>
            </ul>
            <p className="mt-2">
              Începe cu shader-e simple și progresează treptat spre efecte mai complexe. 
              Experimentarea este cheia învățării!
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'proiect',
      title: 'Proiect practic - Animarea unei scene complete',
      content: (
        <>
          <p className="mb-4">
            Acum că am explorat diferitele tehnici de animație și efecte vizuale în Godot, 
            să le aplicăm într-un proiect practic. Vom crea o scenă animată care combină 
            sprite-uri animate, efecte de particule și shadere.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Planificarea proiectului</h3>
          
          <p className="mb-4">
            Vom crea o scenă de platformer dinamică cu mai multe elemente animate:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Componentele proiectului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Personaj animat</strong>: Cu stări de idle, run, jump</li>
              <li><strong>Platforme dinamice</strong>: Platforme care se mișcă utilizând AnimationPlayer</li>
              <li><strong>Obiecte colectabile</strong>: Monede animate cu efecte de particule</li>
              <li><strong>Efecte ambientale</strong>: Ploaie, ceață, particule în aer</li>
              <li><strong>Efecte de shader</strong>: Pentru apă, lumină, sau alte elemente vizuale</li>
              <li><strong>Animații de UI</strong>: Scor, viață, și alte elemente de interfață</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Configurarea scenei de bază">
            <p className="mb-2">Începem prin configurarea scenei principale:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu Node2D ca rădăcină</li>
              <li>Adaugă platforme statice utilizând StaticBody2D</li>
              <li>Configurează un fundal cu sprite-uri (eventual cu paralax)</li>
              <li>Adaugă elemente de decor (arbori, nori, etc.)</li>
              <li>Configurează camera pentru a urmări jucătorul</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Implementarea personajului animat">
            <p className="mb-2">Creează personajul principal cu animații complete:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Utilizează CharacterBody2D cu AnimatedSprite2D</li>
              <li>Implementează mașina de stare pentru animații</li>
              <li>Adaugă sistem de control responsive</li>
              <li>Adaugă efecte de particule pentru acțiuni precum:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Praf când aterizează</li>
                  <li>Trail când aleargă rapid</li>
                  <li>Efecte pentru sărituri sau abilități speciale</li>
                </ul>
              </li>
              <li>Implementează shadere pentru efecte precum:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Flash la damage</li>
                  <li>Strălucire pentru power-ups</li>
                  <li>Efect de umbră sau iluminare</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Crearea platformelor animate">
            <p className="mb-2">Adaugă platforme dinamice pentru gameplay interesant:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează platforme care se mișcă utilizând AnimationPlayer</li>
              <li>Adaugă platforme care apar și dispar</li>
              <li>Creează platforme care reacționează la jucător (ex: se clatină când jucătorul stă pe ele)</li>
              <li>Implementează capcane animate (ex: spike-uri care apar și dispar)</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Adăugarea obiectelor colectabile">
            <p className="mb-2">Integrează obiecte colectabile cu animații și efecte:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează monede sau cristale utilizând AnimatedSprite2D</li>
              <li>Adaugă efecte de particule când sunt colectate</li>
              <li>Implementează animații de plutire sau rotație</li>
              <li>Adaugă efecte de shader pentru strălucire sau highlight</li>
              <li>Creează animații pentru scoruri pop-up când sunt colectate</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Implementarea efectelor ambientale">
            <p className="mb-2">Adaugă efecte pentru atmosferă și imersiune:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Implementează sisteme de particule pentru ploaie, zăpadă, sau frunze</li>
              <li>Adaugă nori animați în fundal</li>
              <li>Creează efecte pentru timp și vreme (ex: fulgere, ceață)</li>
              <li>Implementează shader-e pentru apă sau alte elemente de mediu</li>
              <li>Adaugă animații subtile pentru elementele de fundal</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Combinarea tuturor elementelor</h3>
          
          <p className="mb-4">
            Când combini toate aceste elemente animate, obții o scenă dinamică și plină de viață. 
            Iată câteva sfaturi pentru a le integra armonios:
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
            <h4 className="font-bold mb-2">Sfaturi pentru integrare:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Coerență vizuală</strong>: Menține un stil vizual consistent între toate elementele</li>
              <li><strong>Echilibru</strong>: Nu supra-anima scena - prea multe mișcări pot distrage</li>
              <li><strong>Prioritizare</strong>: Elementele importante (personaj, obiecte interactive) ar trebui să aibă cele mai evidente animații</li>
              <li><strong>Timing</strong>: Variază timing-ul animațiilor pentru a evita sincronizarea artificială</li>
              <li><strong>Optimizare</strong>: Monitorizează performanța și optimizează când este necesar</li>
              <li><strong>Testare</strong>: Observă cum percep jucătorii animațiile și ajustează în consecință</li>
            </ul>
          </div>
          
          <CodeExample title="Script pentru coordonarea animațiilor globale" language="gdscript">
{`extends Node2D

# Referințe la noduri
@onready var player = $Player
@onready var rain_particles = $Environment/RainParticles
@onready var platforms = $Platforms
@onready var collectibles = $Collectibles
@onready var water_shader = $Environment/Water.material

# Stare globală (pentru sincronizarea elementelor)
var environment_state = "normal"  # normal, stormy, magical
var day_cycle_progress = 0.0  # 0.0 (dimineață) -> 1.0 (noapte)

func _ready():
    # Inițializăm starea inițială
    set_environment_state("normal")
    
    # Pornim un timer pentru ciclul zi/noapte
    $DayCycleTimer.start()

func _process(delta):
    # Actualizăm ciclul zi/noapte
    day_cycle_progress += delta * 0.01  # O zi completă durează ~100 secunde
    if day_cycle_progress >= 1.0:
        day_cycle_progress = 0.0
    
    # Actualizăm shaderele în funcție de ora zilei
    update_lighting(day_cycle_progress)

func set_environment_state(state):
    environment_state = state
    
    match state:
        "normal":
            # Ploaie ușoară, ambient calm
            rain_particles.amount = 100
            rain_particles.emitting = true
            # Platformele se mișcă normal
            platforms.get_node("AnimationPlayer").play("normal_movement")
            # Apa este calmă
            water_shader.set_shader_parameter("wave_speed", 0.5)
            water_shader.set_shader_parameter("wave_amplitude", 0.01)
            
        "stormy":
            # Ploaie intensă, fulgere
            rain_particles.amount = 500
            rain_particles.emitting = true
            # Adăugăm fulgere ocazionale
            $Environment/LightningTimer.start()
            # Platformele sunt mai agitate
            platforms.get_node("AnimationPlayer").play("stormy_movement")
            # Apa este agitată
            water_shader.set_shader_parameter("wave_speed", 2.0)
            water_shader.set_shader_parameter("wave_amplitude", 0.05)
            
        "magical":
            # Particule magice, fără ploaie
            rain_particles.emitting = false
            # Activăm particulele magice
            $Environment/MagicParticles.emitting = true
            # Platformele plutesc
            platforms.get_node("AnimationPlayer").play("floating_movement")
            # Apa strălucește
            water_shader.set_shader_parameter("glow_intensity", 0.5)

func update_lighting(time_progress):
    # 0.0 = dimineață, 0.25 = zi, 0.5 = apus, 0.75 = noapte
    var ambient_color
    var light_intensity
    
    if time_progress < 0.25:
        # Dimineață -> Zi
        ambient_color = Color(0.8, 0.7, 0.6).linear_interpolate(Color(1.0, 1.0, 1.0), time_progress * 4.0)
        light_intensity = lerp(0.7, 1.0, time_progress * 4.0)
    elif time_progress < 0.5:
        # Zi -> Apus
        ambient_color = Color(1.0, 1.0, 1.0).linear_interpolate(Color(1.0, 0.6, 0.3), (time_progress - 0.25) * 4.0)
        light_intensity = 1.0
    elif time_progress < 0.75:
        # Apus -> Noapte
        ambient_color = Color(1.0, 0.6, 0.3).linear_interpolate(Color(0.1, 0.1, 0.3), (time_progress - 0.5) * 4.0)
        light_intensity = lerp(1.0, 0.3, (time_progress - 0.5) * 4.0)
    else:
        # Noapte -> Dimineață
        ambient_color = Color(0.1, 0.1, 0.3).linear_interpolate(Color(0.8, 0.7, 0.6), (time_progress - 0.75) * 4.0)
        light_intensity = lerp(0.3, 0.7, (time_progress - 0.75) * 4.0)
    
    # Aplicăm valorile la elementele scenei
    $Environment/WorldEnvironment.environment.ambient_light_color = ambient_color
    $Environment/GlobalLight.energy = light_intensity
    
    # Actualizăm și alte elemente în funcție de ora zilei
    # De exemplu, luminile de stradă se aprind noaptea
    $Environment/StreetLights.visible = time_progress > 0.6 or time_progress < 0.2

func create_lightning():
    # Creăm un efect de fulger
    $Environment/LightningFlash.visible = true
    $Environment/LightningSound.play()
    
    # Așteptăm puțin și apoi ascundem fulgerul
    await get_tree().create_timer(0.1).timeout
    $Environment/LightningFlash.visible = false
    
    # Posibil să mai avem un flash secundar
    if randf() > 0.5:
        await get_tree().create_timer(0.1).timeout
        $Environment/LightningFlash.visible = true
        await get_tree().create_timer(0.05).timeout
        $Environment/LightningFlash.visible = false`}
          </CodeExample>
          
          <Challenge title="Scenă animată completă" difficulty="hard">
            <p className="mb-2">
              Implementează o scenă completă care îmbină toate tehnicile de animație învățate:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Un personaj complet animat cu cel puțin 5 stări diferite (idle, run, jump, attack, hurt)</li>
              <li>Cel puțin 3 platforme cu comportamente animate distincte</li>
              <li>Obiecte colectabile cu animații și efecte de particule</li>
              <li>Un efect ambiental major (ploaie, zăpadă, etc.) și 2 efecte ambientale minore</li>
              <li>Cel puțin un shader personalizat pentru un element din scenă</li>
              <li>O interfață animată care reacționează la acțiunile jucătorului</li>
              <li>Bonus: Implementează un ciclu zi/noapte cu efecte vizuale care se schimbă</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Perfecționarea animațiilor" icon="star" variant="secondary">
            <p>
              Animațiile și efectele vizuale sunt un domeniu în care poți continua să te perfecționezi constant. 
              Iată câteva direcții pentru dezvoltarea ulterioară:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Studiază principiile animației tradiționale (cele 12 principii Disney)</li>
              <li>Analizează jocurile pe care le admiri și observă cum sunt implementate animațiile lor</li>
              <li>Experimentează cu shadere mai complexe pentru efecte avansate</li>
              <li>Învață să creezi animații procedurale care se adaptează la situații</li>
              <li>Explorează tehnici de animație cu schelet (skeleton animation) pentru personaje mai complexe</li>
              <li>Combină animații cu sisteme de fizică pentru rezultate mai dinamice</li>
            </ul>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout 
      title="Animații și efecte vizuale în Godot" 
      description="Explorează tehnicile de animare și efecte vizuale pentru a adăuga viață și impact jocurilor tale."
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4;
