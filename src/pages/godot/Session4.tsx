import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'sprites-animatii', title: 'Sprite-uri și animații' },
    { id: 'animation-player', title: 'Animation Player' },
    { id: 'animation-tree', title: 'Animation Tree' },
    { id: 'efecte-particule', title: 'Efecte de particule' },
    { id: 'shader-intro', title: 'Introducere în shadere' },
    { id: 'efecte-camera', title: 'Efecte de cameră' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentația Godot - Animații', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/index.html' },
    { title: 'Tutorial Video - Animații în Godot', url: 'https://www.youtube.com/watch?v=LgMpzRDQvHQ' },
    { title: 'Godot Particles Tutorial', url: 'https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html' },
    { title: 'Introducere în Shadere Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/shaders/index.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în animații și efecte vizuale',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la a patra lecție a cursului nostru de Godot! În această sesiune, vom explora animațiile 
            și efectele vizuale, elemente cruciale pentru a da viață jocurilor tale și a le face mai atractive și interactive.
          </p>
          
          <p className="mb-6">
            Animațiile și efectele vizuale adaugă dinamism, feedback vizual pentru jucători și pot transforma 
            un joc simplu într-o experiență captivantă. Godot oferă instrumente puternice și flexibile 
            pentru a crea animații de toate tipurile și efecte vizuale impresionante.
          </p>
          
          <LearningOutcome items={[
            "Cum să creezi și să controlezi animații de sprite-uri",
            "Utilizarea AnimationPlayer pentru animații complexe",
            "Combinarea și tranziția între animații cu AnimationTree",
            "Crearea sistemelor de particule pentru efecte speciale",
            "Noțiuni de bază despre shadere și cum pot îmbunătăți aspectul jocului",
            "Implementarea efectelor de cameră pentru un gameplay mai dinamic"
          ]} />
        </>
      )
    },
    {
      id: 'sprites-animatii',
      title: 'Sprite-uri și animații',
      content: (
        <>
          <p className="mb-4">
            Animațiile de sprite sunt unul dintre cele mai fundamentale tipuri de animații în jocurile 2D. 
            Ele implică schimbarea secvențială a imaginilor (frame-uri) pentru a crea iluzia de mișcare.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Pregătirea sprite-urilor pentru animație</h3>
          <p className="mb-4">
            Înainte de a începe animația, trebuie să avem sprite-uri pregătite. Acestea pot fi:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Sprite Sheets</h3>
              <p className="mb-2">O singură imagine care conține toate frame-urile animației aranjate în rânduri și coloane.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Eficiente din punct de vedere al memoriei</li>
                <li>Reduc numărul de încărcări de texturi</li>
                <li>Pot fi împărțite în regiuni (AtlasTexture)</li>
                <li>Ideale pentru personaje cu multe animații</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Imagini individuale</h3>
              <p className="mb-2">Fiecare frame este o imagine separată.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Mai ușor de editat individual</li>
                <li>Bune pentru animații cu frame-uri de dimensiuni diferite</li>
                <li>Pot ocupa mai multă memorie</li>
                <li>Potrivite pentru animații simple sau proiecte mici</li>
              </ul>
            </div>
          </div>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/sprite_sheet.webp" 
            alt="Exemplu de Sprite Sheet" 
            caption="Un sprite sheet tipic conținând mai multe frame-uri de animație"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Utilizarea AnimatedSprite2D</h3>
          <p className="mb-4">
            Godot oferă un nod specializat pentru animații de sprite: <code>AnimatedSprite2D</code>. 
            Acesta simplifică procesul de creare și redare a animațiilor de sprite.
          </p>
          
          <StepItem number={1} title="Crearea unui nod AnimatedSprite2D">
            <p className="mb-2">Pentru a crea un sprite animat:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D în scena ta</li>
              <li>În Inspector, sub proprietatea "Sprite Frames", apasă pe "[empty]" și selectează "New SpriteFrames"</li>
              <li>Va apărea panoul SpriteFrames în partea de jos a editorului</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Configurarea animațiilor">
            <p className="mb-2">În panoul SpriteFrames:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe butonul "Add Animation" pentru a crea noi animații (ex: "idle", "run", "jump")</li>
              <li>Selectează o animație din listă</li>
              <li>Poți ajusta proprietăți precum:</li>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>FPS: viteza de redare</li>
                  <li>Loop: dacă animația se repetă</li>
                </ul>
              <li>Apasă "Add Frame(s) from Sprite Sheet" sau trage imagini în panoul de frame-uri</li>
              <li>Organizează frame-urile în ordinea corectă</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/animation_add_frame.webp" 
            alt="Configurarea SpriteFrames în Godot" 
            caption="Panoul SpriteFrames pentru configurarea animațiilor"
          />
          
          <StepItem number={3} title="Controlarea animațiilor prin cod">
            <p className="mb-2">Poți controla animațiile prin GDScript:</p>
            <CodeExample title="Controlarea AnimatedSprite2D" language="gdscript">
{`extends CharacterBody2D

@onready var animated_sprite = $AnimatedSprite2D

func _physics_process(delta):
    # Detectăm mișcarea
    var direction = Input.get_axis("ui_left", "ui_right")
    velocity.x = direction * 300
    
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += 20
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = -500
        
    move_and_slide()
    
    # Actualizăm animațiile
    update_animations(direction)
    
func update_animations(direction):
    if not is_on_floor():
        animated_sprite.play("jump")
    elif direction != 0:
        animated_sprite.play("run")
        # Întoarcem sprite-ul în funcție de direcție
        animated_sprite.flip_h = direction < 0
    else:
        animated_sprite.play("idle")
`}
            </CodeExample>
          </StepItem>
          
          <InfoBox title="Utilizarea eficientă a animațiilor de sprite" icon="star" variant="primary">
            <ul className="list-disc list-inside space-y-1">
              <li>Creează animații separate pentru fiecare stare a personajului (idle, run, jump, attack etc.)</li>
              <li>Menține un număr consistent de frame-uri pe secundă (FPS) între animații pentru tranziții fluide</li>
              <li>Folosește animații cu mai puține frame-uri pentru mișcări rapide și mai multe pentru cele lente</li>
              <li>Adaugă frame-uri de "anticipare" și "recuperare" pentru mișcări mai naturale</li>
              <li>Sincronizează efectele sonore cu frame-uri specifice pentru impact maxim</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animation-player',
      title: 'Animation Player',
      content: (
        <>
          <p className="mb-4">
            Deși AnimatedSprite2D este perfect pentru animații simple de sprite, Godot oferă un sistem 
            mai puternic și flexibil pentru animații complexe: <code>AnimationPlayer</code>. Acesta permite 
            animarea oricărei proprietăți a oricărui nod, nu doar sprite-uri.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Ce putem anima cu AnimationPlayer?</h3>
          <p className="mb-2">Practic orice proprietate a oricărui nod:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Poziție, rotație, scală</li>
            <li>Culori, opacitate</li>
            <li>Texturi și frame-uri</li>
            <li>Proprietăți ale materialelor</li>
            <li>Vizibilitatea nodurilor</li>
            <li>Apeluri de metode (pentru sincronizare)</li>
            <li>Audio (pentru sincronizarea sunetelor)</li>
            <li>... și multe altele</li>
          </ul>
          
          <StepItem number={1} title="Crearea unui AnimationPlayer">
            <p className="mb-2">Pentru a adăuga un AnimationPlayer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul pe care vrei să-l animezi (sau părintele nodurilor de animat)</li>
              <li>Adaugă un nod AnimationPlayer ca și copil</li>
              <li>Selectează AnimationPlayer și vei vedea panoul de animație în partea de jos a editorului</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea și editarea animațiilor">
            <p className="mb-2">În panoul de animație:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Animation" din panel și selectează "New"</li>
              <li>Numește animația (ex: "run", "fade_in", "door_open")</li>
              <li>Setează durata animației și alte proprietăți</li>
              <li>Cu animația selectată, activează modul de înregistrare apăsând butonul roșu "Record"</li>
              <li>Selectează un nod și modifică proprietățile pe care vrei să le animezi</li>
              <li>Mută cursorul timeline-ului la diferite poziții pentru a seta keyframe-uri</li>
              <li>Dezactivează înregistrarea când ai terminat</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/animation_animation_panel.webp" 
            alt="Panoul AnimationPlayer în Godot" 
            caption="Panoul AnimationPlayer pentru editarea animațiilor"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Controlarea AnimationPlayer prin cod</h3>
          <p className="mb-4">
            AnimationPlayer poate fi controlat prin GDScript pentru a reda, opri sau mixa animațiile:
          </p>
          
          <CodeExample title="Controlarea AnimationPlayer" language="gdscript">
{`extends Node2D

@onready var animation_player = $AnimationPlayer

func _ready():
    # Pornește o animație la inițializare
    animation_player.play("idle")
    
func _input(event):
    if event.is_action_pressed("ui_right"):
        # Redă animația de alergare
        animation_player.play("run_right")
    elif event.is_action_pressed("ui_left"):
        # Redă animația de alergare spre stânga
        animation_player.play("run_left")
    elif event.is_action_pressed("ui_up"):
        # Redă animația de salt
        animation_player.play("jump")
    elif event.is_action_pressed("attack"):
        # Redă animația de atac și apoi revino la idle
        animation_player.queue("attack")
        animation_player.queue("idle")
    elif event.is_action_pressed("ui_cancel"):
        # Oprește toate animațiile
        animation_player.stop()

# Funcție care va fi apelată de AnimationPlayer
# prin keyframe-uri de tip "Call Method"
func _on_attack_hit():
    print("Atacul a lovit la acest frame!")
    # Logica pentru aplicarea daunelor, etc.
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Funcții utile ale AnimationPlayer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h4 className="font-bold text-indigo-700 mb-1">Redare și control</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><code>play(name, blend, speed, from_end)</code></li>
                <li><code>stop(reset)</code></li>
                <li><code>queue(name)</code></li>
                <li><code>seek(seconds)</code></li>
                <li><code>advance(delta)</code></li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">Informații de stare</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><code>is_playing()</code></li>
                <li><code>current_animation</code></li>
                <li><code>assigned_animation</code></li>
                <li><code>current_animation_position</code></li>
                <li><code>current_animation_length</code></li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-bold text-green-700 mb-1">Parametri de redare</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><code>playback_speed</code></li>
                <li><code>playback_active</code></li>
                <li><code>playback_default_blend_time</code></li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="font-bold text-purple-700 mb-1">Semnale</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><code>animation_finished</code></li>
                <li><code>animation_started</code></li>
                <li><code>animation_changed</code></li>
                <li><code>cue_point</code></li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Avantajele AnimationPlayer" icon="info" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Oferă control precis asupra animațiilor, inclusiv curbe de interpolare personalizate</li>
              <li>Permite animarea oricărei proprietăți, nu doar sprite-uri</li>
              <li>Suportă apeluri de metode pentru sincronizarea logicii jocului cu animațiile</li>
              <li>Permite adăugarea de track-uri audio sincronizate cu animațiile</li>
              <li>Poate mixa (blend) între animații pentru tranziții fluide</li>
              <li>Editorul vizual face ușoară crearea și ajustarea animațiilor</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animation-tree',
      title: 'Animation Tree',
      content: (
        <>
          <p className="mb-4">
            AnimationTree este un nod avansat care extinde funcționalitatea AnimationPlayer, permițând 
            crearea de mașini de stare pentru animații, mixare între animații și tranziții 
            complexe. Este ideal pentru personaje cu multe animații și stări.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Când să folosești AnimationTree?</h3>
          <p className="mb-4">
            AnimationTree este util în următoarele situații:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Personaje cu multe animații și stări (jucător, inamici complexi)</li>
            <li>Când ai nevoie de tranziții fluide între animații</li>
            <li>Pentru mixarea între animații (ex: blend între alergare și țintire)</li>
            <li>Pentru controlarea animațiilor bazate pe parametri (viteză, direcție)</li>
            <li>Când logica animațiilor devine prea complexă pentru AnimationPlayer</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Noduri de bază ale AnimationTree</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Animation</h3>
              <p className="mb-2">Referință la o animație existentă.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Cel mai simplu nod</li>
                <li>Redă o singură animație</li>
                <li>Poate avea parametri de timp și viteză</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Blend2</h3>
              <p className="mb-2">Mixează între două animații sau sub-arbori.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Controlat printr-un parametru (0.0 - 1.0)</li>
                <li>Ideal pentru tranziții (ex: idle -> run)</li>
                <li>Poate configura timpul de blend</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <h3 className="text-lg font-bold text-green-700 mb-2">BlendSpace2D</h3>
              <p className="mb-2">Mixează între mai multe animații în spațiu 2D.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Controlat prin coordonate x și y</li>
                <li>Bun pentru direcție+viteză (ex: mers/alergare în 8 direcții)</li>
                <li>Permite poziționarea liberă a punctelor de animație</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
              <h3 className="text-lg font-bold text-purple-700 mb-2">StateMachine</h3>
              <p className="mb-2">Mașină de stare cu tranziții între animații.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Definește stări (idle, walk, jump, attack)</li>
                <li>Tranziții condiționate între stări</li>
                <li>Poate avea stări imbricate</li>
                <li>Cel mai complex dar și cel mai flexibil</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Configurarea unui AnimationTree">
            <p className="mb-2">Pentru a crea și configura un AnimationTree:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Asigură-te că ai deja un AnimationPlayer cu animațiile tale</li>
              <li>Adaugă un nod AnimationTree ca și copil în scena ta</li>
              <li>În inspectorul AnimationTree, setează:</li>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>"Tree Root" - tipul de nod rădăcină (ex: StateMachine)</li>
                  <li>"Anim Player" - referința la AnimationPlayer-ul tău</li>
                  <li>"Active" - bifează pentru a activa arborele</li>
                </ul>
              <li>Apasă pe "Edit Tree" pentru a deschide editorul de arbore</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/animation_tree_blend2.webp" 
            alt="Editor AnimationTree în Godot" 
            caption="Exemplu de AnimationTree cu nod de tip Blend2"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exemplu: Mașină de stare pentru un personaj</h3>
          <p className="mb-4">
            Iată un exemplu de cod pentru controlarea unui AnimationTree cu o mașină de stare:
          </p>
          
          <CodeExample title="Controlarea unei mașini de stare AnimationTree" language="gdscript">
{`extends CharacterBody2D

@onready var animation_tree = $AnimationTree
var state_machine

# Parametri pentru mașina de stare
var is_jumping = false
var is_attacking = false

func _ready():
    # Obținem statemachine-ul din AnimationTree
    state_machine = animation_tree.get("parameters/playback")
    
    # Activăm AnimationTree
    animation_tree.active = true
    
    # Setăm starea inițială
    state_machine.travel("idle")

func _physics_process(delta):
    # Detectăm mișcarea
    var direction = Input.get_axis("ui_left", "ui_right")
    velocity.x = direction * 300
    
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += 20
    else:
        is_jumping = false
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = -500
        is_jumping = true
        
    # Detectăm atacul
    if Input.is_action_just_pressed("attack"):
        is_attacking = true
        
    move_and_slide()
    
    # Actualizăm stările animației
    update_animation_state(direction)
    
func update_animation_state(direction):
    # Atacul are prioritate peste alte animații
    if is_attacking:
        state_machine.travel("attack")
        return
        
    # Apoi, verificăm saltul
    if is_jumping:
        state_machine.travel("jump")
        return
        
    # Mișcare sau idle
    if direction != 0:
        # Actualizăm Blend2D cu direcția
        animation_tree.set("parameters/run/blend_position", direction)
        state_machine.travel("run")
        
        # Întoarcem sprite-ul
        scale.x = 1 if direction > 0 else -1
    else:
        state_machine.travel("idle")

# Funcție apelată la finalul animației de atac
func _on_animation_finished(anim_name):
    if anim_name == "attack":
        is_attacking = false
`}
          </CodeExample>
          
          <InfoBox title="Sfaturi pentru AnimationTree" icon="star" variant="primary">
            <ul className="list-disc list-inside space-y-1">
              <li>Începe cu AnimationPlayer și treci la AnimationTree doar când ai nevoie de control mai complex</li>
              <li>Folosește noduri StateMachine pentru a organiza logic animațiile bazate pe stări</li>
              <li>Utilizează BlendSpace2D pentru mișcări directionale (ex: mers în toate direcțiile)</li>
              <li>Setează timpuri de tranziție potrivite pentru a evita tranziții bruște între animații</li>
              <li>Folosește parametri pentru a controla comportamentul arborelui din cod</li>
              <li>Testează fiecare tranziție pentru a te asigura că arată natural</li>
            </ul>
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
            Sistemele de particule sunt ideale pentru crearea unei game largi de efecte vizuale - foc, fum, 
            scântei, ploaie, magie și multe altele. Godot oferă un sistem robust de particule 2D pentru a 
            crea astfel de efecte.
          </p>
          
          <h3 className="text-xl font-bold mb-3">GPUParticles2D</h3>
          <p className="mb-4">
            În Godot, nodul principal pentru sisteme de particule 2D este <code>GPUParticles2D</code>. 
            Acesta folosește GPU-ul pentru a procesa particulele, permițând un număr mare de particule 
            cu impact minim asupra performanței.
          </p>
          
          <StepItem number={1} title="Crearea unui sistem de particule">
            <p className="mb-2">Pentru a crea un sistem de particule în Godot:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod GPUParticles2D în scena ta</li>
              <li>În Inspector, la proprietatea "Process Material", apasă pe "[empty]" și selectează "New ParticleProcessMaterial"</li>
              <li>Pentru a seta textura particulei, găsește proprietatea "Texture" din secțiunea "Drawing" și adaugă o textură</li>
              <li>Ajustează proprietățile materialului de particule pentru a obține efectul dorit</li>
            </ol>
          </StepItem>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Proprietăți de bază</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Amount</strong>: Numărul de particule</li>
                <li><strong>Lifetime</strong>: Durata de viață a particulelor</li>
                <li><strong>One Shot</strong>: Emite particulele o singură dată</li>
                <li><strong>Explosiveness</strong>: Cât de "exploziv" apar particulele</li>
                <li><strong>Randomness</strong>: Variația aleatoare</li>
                <li><strong>Local Coords</strong>: Particulele se mișcă relativ la emițător</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Proprietăți de proces</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Direction</strong>: Direcția inițială</li>
                <li><strong>Spread</strong>: Răspândirea pe direcție</li>
                <li><strong>Gravity</strong>: Forța și direcția gravitației</li>
                <li><strong>Initial Velocity</strong>: Viteza inițială</li>
                <li><strong>Color/Color Ramp</strong>: Culorile particulelor</li>
                <li><strong>Scale</strong>: Dimensiunea particulelor</li>
              </ul>
            </div>
          </div>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/particles_material.webp" 
            alt="Setări pentru GPUParticles2D în Godot" 
            caption="Editarea proprietăților unui material de particule"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exemple comune de efecte de particule</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-700 mb-1">Foc</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Direcție: în sus</li>
                <li>Culori: roșu la galben la transparent</li>
                <li>Scală: scade pe măsură ce particulele urcă</li>
                <li>Lifetime: 1-2 secunde</li>
                <li>Emisie continuă cu randomness mediu</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">Scântei</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Direcție: explozie în toate direcțiile</li>
                <li>Gravitate: medie spre puternică</li>
                <li>Culori: galben strălucitor la roșu</li>
                <li>Lifetime: scurt (0.5-1 secundă)</li>
                <li>One shot cu explosiveness ridicată</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-700 mb-1">Fum</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Direcție: în sus cu spread mare</li>
                <li>Viteză: lentă</li>
                <li>Culori: gri închis la transparent</li>
                <li>Scală: crește pe măsură ce particulele urcă</li>
                <li>Lifetime: mai lung (2-4 secunde)</li>
                <li>Randomness ridicat</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-emerald-700 mb-1">Aură magică</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Mișcare circulară sau orbit</li>
                <li>Gravitate: zero sau negativă</li>
                <li>Culori: albastru/verde strălucitor</li>
                <li>Scale: pulsant (variabil)</li>
                <li>Emisie continuă cu randomness mediu</li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <h4 className="font-bold text-cyan-700 mb-1">Ploaie</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Direcție: în jos cu unghi ușor</li>
                <li>Gravitate: medie</li>
                <li>Formă emițător: dreptunghiulară, lată</li>
                <li>Culori: albastru transparent</li>
                <li>Randomness mediu</li>
                <li>Cantitate mare de particule</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <h4 className="font-bold text-yellow-700 mb-1">Explozie</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>One shot cu explosiveness maximă</li>
                <li>Direcție: în toate direcțiile</li>
