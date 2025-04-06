
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';

const Session4 = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'spritesheet', title: 'Spritesheet-uri' },
    { id: 'animation', title: 'Animații Frame-by-Frame' },
    { id: 'state-machine', title: 'Mașină de Stări' },
    { id: 'procedural', title: 'Animații Procedurale' },
    { id: 'exercises', title: 'Exerciții' }
  ];

  const resources = [
    { title: 'Documentația Godot', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Tutoriale Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/index.html' },
    { title: 'Animații în Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/index.html' }
  ];

  // Define learning outcomes as an array
  const learningOutcomes = [
    'Să creezi și să configurezi animații 2D pentru personaje și obiecte',
    'Să implementezi tranziții între diferite animații bazate pe input sau starea jocului',
    'Să sincronizezi animațiile cu sunetele și efectele din joc',
    'Să dezvolți o mașină de stări simplă pentru gestionarea animațiilor personajului'
  ];

  return (
    <LessonLayout
      title="Godot 4: Animații 2D"
      subtitle="Lecția 4 • Godot Engine"
      courseId="godot"
      sessionId="4"
      heroColor="bg-indigo-700"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/godot/session3"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/godot/session5"
      }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Animații 2D în Godot 4</h2>
          <p>
            Animațiile sunt esențiale pentru a adăuga viață jocurilor tale. În această lecție, vom explora
            cum să creăm și să gestionăm animații 2D în Godot 4 pentru a face personajele și obiectele din joc
            să se miște într-un mod dinamic și convingător.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3">Ce vom învăța</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Crearea spritesheet-urilor pentru animații</li>
                <li>Utilizarea nodului AnimatedSprite2D</li>
                <li>Configurarea și gestionarea animațiilor</li>
                <li>Tranziții între animații bazate pe starea jocului</li>
                <li>Animații procedurale și efecte vizuale</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3">Concepte cheie</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Spritesheet-uri și frame-uri de animație</li>
                <li>SpriteFrames și resurse de animație</li>
                <li>Mașină de stări pentru animații</li>
                <li>Interpolări și tweening</li>
                <li>Sincronizarea animațiilor cu acțiunile din joc</li>
              </ul>
            </div>
          </div>
        </section>

        <LearningOutcome items={learningOutcomes} />

        <section id="spritesheet">
          <h2 className="text-2xl font-bold mb-4">Spritesheet-uri și animații frame-by-frame</h2>
          <p className="mb-4">
            Un <strong>spritesheet</strong> este o imagine care conține mai multe frame-uri separate 
            pentru o animație. Când aceste frame-uri sunt afișate rapid unul după altul, creează iluzia 
            de mișcare - la fel ca în filmele de animație clasice.
          </p>
          
          <div className="bg-white border rounded-md overflow-hidden mb-6">
            <img 
              src="https://docs.godotengine.org/en/stable/_images/sprite_sheet.png" 
              alt="Exemplu de Spritesheet" 
              className="w-full"
            />
            <div className="p-3 text-sm text-center text-gray-600 bg-gray-50">
              Un exemplu de spritesheet cu frame-uri pentru o animație de alergare
            </div>
          </div>

          <p>
            În Godot, putem folosi aceste spritesheet-uri pentru a crea animații pentru personajele și obiectele din joc.
            Godot oferă două abordări principale pentru animații 2D:
          </p>
          
          <ul className="list-disc ml-5 space-y-2 my-4">
            <li>
              <strong>AnimatedSprite2D</strong> - Un nod specializat pentru animații sprite care folosește resursa SpriteFrames
            </li>
            <li>
              <strong>Sprite2D + AnimationPlayer</strong> - Folosirea unui Sprite2D normal și controlarea frame-urilor cu un nod AnimationPlayer
            </li>
          </ul>

          <p>
            În această lecție, ne vom concentra pe abordarea cu AnimatedSprite2D, care este mai simplă și potrivită 
            pentru începători.
          </p>
        </section>

        <InfoBox title="Resurse pentru animații" variant="info">
          <p>
            Pentru această lecție, vei putea folosi propriile tale sprite-uri sau poți descărca resurse gratuite 
            de pe site-uri precum:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li><a href="https://opengameart.org/" className="text-blue-600 hover:underline">OpenGameArt</a></li>
            <li><a href="https://kenney.nl/" className="text-blue-600 hover:underline">Kenney Assets</a></li>
            <li><a href="https://itch.io/game-assets/free" className="text-blue-600 hover:underline">Itch.io (resurse gratuite)</a></li>
          </ul>
          <p className="mt-2">
            Asigură-te că verifici licența resurselor înainte de a le folosi în proiectele tale.
          </p>
        </InfoBox>

        <section id="creare-animatii">
          <h2 className="text-2xl font-bold mb-4">Crearea și utilizarea animațiilor în Godot</h2>
          <p className="mb-6">
            Să exploram pas cu pas cum să implementăm animații pentru un personaj 2D în Godot:
          </p>

          <StepItem number={1} title="Importarea spritesheet-ului">
            <p className="mb-2">Pentru a începe, trebuie să importăm spritesheet-ul în proiectul Godot:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Copiază imaginea spritesheet în directorul proiectului tău</li>
              <li>În Godot, imaginea va apărea automat în panoul FileSystem</li>
              <li>Selectează imaginea și verifică setările de import în panoul Import</li>
              <li>Pentru spritesheet-uri, asigură-te că "Filter" este dezactivat pentru a evita estomparea pixelilor</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Crearea unei resurse SpriteFrames">
            <p className="mb-2">Pentru a crea un SpriteFrames:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul File System, mergi la directorul unde vrei să salvezi SpriteFrames</li>
              <li>Click dreapta {'>'}New {'>'}Resource</li>
              <li>Caută și selectează "SpriteFrames"</li>
              <li>Dă un nume resursiei (ex: "player_animations.tres")</li>
              <li>Dublu click pe resursă pentru a o deschide în panoul de jos</li>
            </ol>

            <div className="mt-4 mb-6">
              <p className="mb-2">În editorul SpriteFrames:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Apasă butonul "Add Animation" pentru a adăuga o nouă animație (ex: "idle", "run", "jump")</li>
                <li>Selectează animația creată</li>
                <li>Ajustează proprietățile animației (FPS, loop)</li>
                <li>Apasă butonul "Add Frame(s) from Sprite Sheet"</li>
                <li>Selectează spritesheet-ul tău</li>
                <li>În fereastra care apare, configurează dimensiunea frame-ului și selectează frame-urile dorite</li>
                <li>Repetă procesul pentru toate animațiile necesare</li>
              </ol>
            </div>

            <div className="bg-white border rounded-md overflow-hidden mb-6">
              <img 
                src="https://docs.godotengine.org/en/stable/_images/sprite_animation_frames.png" 
                alt="Editor SpriteFrames" 
                className="w-full"
              />
              <div className="p-3 text-sm text-center text-gray-600 bg-gray-50">
                Editorul SpriteFrames în Godot
              </div>
            </div>
          </StepItem>

          <StepItem number={3} title="Adăugarea unui AnimatedSprite2D">
            <p className="mb-2">Pentru a adăuga un AnimatedSprite2D:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D (Ctrl+A {'>'}AnimatedSprite2D)</li>
              <li>În panoul Inspector, la SpriteFrames, trage resursa SpriteFrames creată anterior</li>
              <li>Apasă pe "Playing" pentru a porni animația implicită</li>
              <li>Selectează animația dorită din lista de animații</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Controlarea animațiilor prin script">
            <p className="mb-2">Pentru a controla animațiile din cod, adaugă un script la nodul AnimatedSprite2D:</p>
            
            <CodeBlock language="gdscript">{`func _process(delta):
    # Detectează input și schimbă animațiile în consecință
    if Input.is_action_pressed("ui_right") or Input.is_action_pressed("ui_left"):
        animation = "run"
    else:
        animation = "idle"
    
    # Întoarce sprite-ul când se mișcă la stânga
    if Input.is_action_pressed("ui_left"):
        flip_h = true
    elif Input.is_action_pressed("ui_right"):
        flip_h = false
    
    # Verifică dacă jucătorul sare
    if Input.is_action_just_pressed("ui_up"):
        animation = "jump"`}</CodeBlock>
            
            <p className="mt-4">
              Prin acest script simplu, animația personajului se va schimba în funcție de tastele apăsate:
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>"run" când te miști la stânga sau la dreapta</li>
              <li>"jump" când sari</li>
              <li>"idle" când nu faci nicio acțiune</li>
            </ul>
          </StepItem>
        </section>

        <section id="state-machine">
          <h2 className="text-2xl font-bold mb-4">Mașină de stări pentru animații</h2>
          <p className="mb-4">
            Pentru jocuri mai complexe, este util să implementezi o mașină de stări pentru a gestiona animațiile. 
            Aceasta permite tranziții mai controlate între animații și evită probleme cum ar fi întreruperea animațiilor.
          </p>

          <CodeBlock language="gdscript">{`extends AnimatedSprite2D

# Stările posibile
enum State {IDLE, RUN, JUMP, FALL, ATTACK}

# Starea curentă
var current_state = State.IDLE

func _process(delta):
    # Determină starea următoare bazată pe input și fizică
    var next_state = determine_next_state()
    
    # Dacă starea s-a schimbat, actualizează animația
    if next_state != current_state:
        current_state = next_state
        play_animation_for_state(current_state)

func determine_next_state():
    # Logica pentru determinarea stării
    # Aceasta va depinde de cum este structurat jocul tău
    # Exemplu simplu:
    
    if Input.is_action_just_pressed("attack"):
        return State.ATTACK
    
    if not is_on_floor():
        if velocity.y < 0:
            return State.JUMP
        else:
            return State.FALL
    
    if Input.is_action_pressed("ui_right") or Input.is_action_pressed("ui_left"):
        return State.RUN
    
    return State.IDLE

func play_animation_for_state(state):
    match state:
        State.IDLE:
            animation = "idle"
        State.RUN:
            animation = "run"
        State.JUMP:
            animation = "jump"
        State.FALL:
            animation = "fall"
        State.ATTACK:
            animation = "attack"
            # Asigură-te că atacul se termină înainte de a trece la altă animație
            # Poți folosi semnalul "animation_finished" pentru asta`}</CodeBlock>

          <p className="mt-4">
            Această abordare este mai robustă și permite gestionarea mai precisă a stărilor și animațiilor, 
            inclusiv pentru cazuri speciale cum ar fi asigurarea că o animație de atac se termină înainte 
            de a trece la altă stare.
          </p>
        </section>

        <section id="procedural">
          <h2 className="text-2xl font-bold mb-4">Animații procedurale și efecte vizuale</h2>
          <p className="mb-4">
            Pe lângă animațiile frame-by-frame, Godot oferă și posibilitatea de a crea animații procedurale
            și efecte vizuale folosind funcții matematice și noduri specifice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Animații procedurale cu noduri</h3>
              <p className="mb-2">Poți crea efecte precum:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Oscilații și mișcări pendulare folosind funcții sin/cos</li>
                <li>Efecte de leagăn sau balansare cu CPUParticles2D și GPUParticles2D</li>
                <li>Efecte de lumină cu noduri Light2D și CanvasModulate</li>
                <li>Distorsiuni de shader cu noduri ShaderMaterial</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Interpolări și Tweening</h3>
              <p className="mb-2">Pentru tranziții line între poziții, rotații, scale:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Utilizeză noduri Tween pentru animații predefinite</li>
                <li>Implementează interpolarea liniară sau smoothstep în script</li>
                <li>Combină multiple proprietăți pentru efecte complexe</li>
                <li>Folosește curbe de animație pentru control precis</li>
              </ul>
            </div>
          </div>

          <CodeBlock language="gdscript">{`extends Node2D

# Pentru o oscilație simplă
func _process(delta):
    # Oscilație pe axa Y cu sin()
    $Sprite2D.position.y = sin(Time.get_ticks_msec() * 0.005) * 10
    
    # Pulsație cu scala folosind cos()
    var scale_factor = 1.0 + 0.1 * cos(Time.get_ticks_msec() * 0.003)
    $Sprite2D.scale = Vector2(scale_factor, scale_factor)

# Pentru Tweening
func start_animation():
    var tween = create_tween()
    tween.tween_property($Sprite2D, "position", Vector2(100, 100), 1.0)
    tween.tween_property($Sprite2D, "rotation", PI/2, 0.5)
    tween.tween_property($Sprite2D, "scale", Vector2(2, 2), 0.5)
    tween.tween_property($Sprite2D, "modulate", Color(1, 0, 0, 1), 1.0)`}</CodeBlock>
        </section>

        <Challenge title="Provocare: Animează un personaj 2D" difficulty="medium">
          <p>Creează un personaj 2D animat cu următoarele caracteristici:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>Cel puțin 3 animații: idle, run și jump</li>
            <li>Tranziții fluide între animații bazate pe input</li>
            <li>Efecte vizuale adăugate (ex: particule de praf când aleargă)</li>
            <li>Implementarea unei mașini de stări simplificate pentru gestionarea animațiilor</li>
            <li>Bonus: adaugă sunete sincronizate cu animațiile</li>
          </ul>
        </Challenge>

        <section className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Sinteză și Continuare</h2>
          <p className="mb-4">
            În această lecție, am învățat cum să creăm și să gestionăm animații 2D în Godot 4. 
            Am explorat utilizarea SpriteFrames, nodului AnimatedSprite2D, și am implementat 
            o mașină de stări de bază pentru animații. De asemenea, am discutat despre animații 
            procedurale și efecte vizuale.
          </p>
          <p>
            În următoarea lecție, vom explora sisteme de particule și efecte vizuale avansate 
            pentru a adăuga și mai multă viață jocurilor noastre.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session4;
