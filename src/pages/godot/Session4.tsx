import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'sprite-frames', title: 'SpriteFrames și AnimatedSprite2D' },
    { id: 'animation-player', title: 'AnimationPlayer' },
    { id: 'animation-tree', title: 'AnimationTree' },
    { id: 'particle-effects', title: 'Efecte de particule' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentație Godot - Animații', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/index.html' },
    { title: 'Tutorial AnimationPlayer', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/animation_player.html' },
    { title: 'Tutorial AnimationTree', url: 'https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html' },
    { title: 'Tutorial Particles', url: 'https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în animații și efecte vizuale',
      content: (
        <>
          <p className="mb-4">
            Animațiile și efectele vizuale sunt esențiale pentru a aduce viață și dinamism jocurilor. 
            Acestea pot îmbunătăți semnificativ experiența jucătorului, oferind feedback vizual, 
            creând atmosferă și ghidând atenția.
          </p>
          
          <p className="mb-4">
            În această sesiune, vom explora diferitele tehnici de animație și efecte vizuale disponibile în Godot Engine, 
            învățând cum să le implementăm și să le folosim eficient în proiectele noastre.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea conceptelor de bază ale animației în Godot",
            "Utilizarea nodurilor AnimatedSprite2D și SpriteFrames",
            "Crearea animațiilor cu AnimationPlayer",
            "Implementarea animațiilor complexe cu AnimationTree",
            "Adăugarea efectelor de particule pentru a îmbunătăți vizual jocurile"
          ]} />
          
          <h3 className="text-xl font-bold mb-3">Tipuri de animații în Godot</h3>
          
          <p className="mb-4">
            Godot oferă mai multe metode pentru a crea animații, fiecare având avantaje și dezavantaje. 
            Vom explora cele mai comune tehnici:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">SpriteFrames și AnimatedSprite2D</h4>
              <p className="text-gray-700">
                Animații simple bazate pe o succesiune de imagini (sprite sheets).
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">AnimationPlayer</h4>
              <p className="text-gray-700">
                Animații mai complexe, bazate pe keyframes, care pot controla proprietăți ale nodurilor.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">AnimationTree</h4>
              <p className="text-gray-700">
                Sistem avansat pentru animații procedurale și tranziții complexe între animații.
              </p>
            </div>
          </div>
          
          <InfoBox title="Considerații de performanță" icon="info" variant="primary">
            <p>
              Animațiile pot afecta performanța, mai ales dacă sunt multe sprite-uri sau animații complexe.
              Pentru optimizare:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Folosește sprite sheets optimizate (dimensiuni potrivite, compresie)</li>
              <li>Limitează numărul de animații simultane</li>
              <li>Dezactivează animațiile care nu sunt vizibile</li>
              <li>Folosește AnimationTree doar când este necesar (pentru animații complexe)</li>
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
            AnimatedSprite2D este un nod care afișează o animație bazată pe o succesiune de imagini stocate într-un obiect SpriteFrames. 
            Este cea mai simplă metodă de a crea animații în Godot, ideală pentru efecte simple și animații de bază.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Crearea unui SpriteFrames</h3>
          
          <p className="mb-4">
            SpriteFrames este un resursă care conține o listă de animații, fiecare animație fiind o succesiune de imagini (cadre).
          </p>
          
          <StepItem number={1} title="Crearea unui SpriteFrames">
            <p className="mb-2">Pentru a crea un SpriteFrames:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul File System, mergi la directorul unde vrei să salvezi SpriteFrames</li>
              <li>Click dreapta {'>'} New {'>'} Resource</li>
              <li>Caută și selectează "SpriteFrames"</li>
              <li>Dă un nume resursiei (ex: "player_animations.tres")</li>
              <li>Dublu click pe resursă pentru a o deschide în panoul de jos</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea animațiilor">
            <p className="mb-2">Pentru a adăuga animații la SpriteFrames:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul SpriteFrames, apasă pe butonul "Add" pentru a crea o nouă animație</li>
              <li>Dă un nume animației (ex: "idle", "run", "jump")</li>
              <li>Selectează animația din listă</li>
              <li>Trage sprite-urile corespunzătoare pentru animație în lista de cadre</li>
              <li>Ajustează FPS (cadre pe secundă) pentru a controla viteza animației</li>
              <li>Bifează "Loop" dacă vrei ca animația să se repete</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Utilizarea AnimatedSprite2D</h3>
          
          <p className="mb-4">
            AnimatedSprite2D este nodul care afișează animațiile definite în SpriteFrames.
          </p>
          
          <StepItem number={3} title="Adăugarea unui AnimatedSprite2D">
            <p className="mb-2">Pentru a adăuga un AnimatedSprite2D:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D (Ctrl+A {'>'} AnimatedSprite2D)</li>
              <li>În panoul Inspector, la SpriteFrames, trage resursa SpriteFrames creată anterior</li>
              <li>Apasă pe "Playing" pentru a porni animația implicită</li>
              <li>Selectează animația dorită din lista de animații</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Controlul animațiilor prin cod" language="gdscript">
{`extends Sprite2D

@onready var animated_sprite = $AnimatedSprite2D

func _ready():
    # Redăm animația "run"
    animated_sprite.play("run")
    
    # Oprim animația
    #animated_sprite.stop()
    
    # Verificăm dacă animația se repetă
    #var is_looping = animated_sprite.is_playing()
    
    # Obținem animația curentă
    #var current_animation = animated_sprite.animation`}
          </CodeExample>
          
          <Challenge title="Crearea unui personaj animat cu AnimatedSprite2D" difficulty="easy">
            <p className="mb-2">
              Creează un personaj animat folosind AnimatedSprite2D:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Descarcă un sprite sheet cu animații pentru un personaj (idle, run, jump)</li>
              <li>Creează un SpriteFrames și adaugă animațiile corespunzătoare</li>
              <li>Adaugă un AnimatedSprite2D și setează SpriteFrames-ul creat</li>
              <li>Implementează un script care schimbă animația în funcție de input-ul jucătorului</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Sfaturi pentru SpriteFrames" icon="info" variant="primary">
            <p>
              Când folosești SpriteFrames:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Organizează sprite-urile într-un sprite sheet pentru eficiență</li>
              <li>Folosește nume descriptive pentru animații</li>
              <li>Ajustează FPS pentru a obține viteza dorită</li>
              <li>Folosește semnale pentru a sincroniza animațiile cu alte evenimente</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animation-player',
      title: 'AnimationPlayer',
      content: (
        <>
          <p className="mb-4">
            AnimationPlayer este un nod puternic care permite crearea de animații complexe bazate pe keyframes. 
            Poți anima orice proprietate a unui nod, inclusiv poziție, rotație, scalare, culoare, textură, și multe altele.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Crearea unei animații cu AnimationPlayer</h3>
          
          <StepItem number={1} title="Adăugarea unui AnimationPlayer">
            <p className="mb-2">Pentru a adăuga un AnimationPlayer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimationPlayer (Ctrl+A {'>'} AnimationPlayer)</li>
              <li>Selectează nodul AnimationPlayer</li>
              <li>În panoul de jos, apasă pe butonul "Animation" {'>'} "New" pentru a crea o nouă animație</li>
              <li>Dă un nume animației (ex: "fade_in", "move_left", "rotate")</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea de track-uri și keyframes">
            <p className="mb-2">Pentru a adăuga track-uri și keyframes:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul pe care vrei să-l animezi</li>
              <li>În panoul AnimationPlayer, apasă pe butonul "Add Track" {'>'} "Property Track"</li>
              <li>Selectează proprietatea pe care vrei să o animezi (ex: "position", "rotation", "modulate")</li>
              <li>Poziționează cursorul de timp la momentul dorit</li>
              <li>Modifică valoarea proprietății în panoul Inspector</li>
              <li>Apasă pe butonul cu cheie ("Insert Key") pentru a adăuga un keyframe</li>
              <li>Repetă pașii pentru a adăuga mai multe keyframes și a crea animația</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Controlul animației prin cod">
            <p className="mb-2">Pentru a controla animația prin cod:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Obține o referință la nodul AnimationPlayer</li>
              <li>Folosește funcțiile <code>play()</code>, <code>stop()</code>, <code>seek()</code>, etc. pentru a controla animația</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Controlul animațiilor prin cod" language="gdscript">
{`extends Sprite2D

@onready var animation_player = $AnimationPlayer

func _ready():
    # Redăm animația "fade_in"
    animation_player.play("fade_in")
    
    # Oprim animația
    #animation_player.stop()
    
    # Mergem la un anumit moment în animație (în secunde)
    #animation_player.seek(1.5)
    
    # Verificăm dacă animația se repetă
    #animation_player.animation_set_loop("fade_in", true)
    
    # Obținem durata animației
    #var duration = animation_player.get_current_animation_length()
    
    # Conectăm semnalul animation_finished pentru a executa cod când animația se termină
    animation_player.animation_finished.connect(_on_animation_finished)

func _on_animation_finished(anim_name):
    print("Animația s-a terminat: ", anim_name)`}
          </CodeExample>
          
          <Challenge title="Crearea unei animații de ușă care se deschide" difficulty="medium">
            <p className="mb-2">
              Creează o animație pentru o ușă care se deschide folosind AnimationPlayer:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Sprite2D pentru ușa</li>
              <li>Adaugă un nod CollisionShape2D pentru ușa (pentru a bloca accesul)</li>
              <li>Adaugă un nod AnimationPlayer</li>
              <li>Creează o animație care rotește ușa pentru a se deschide</li>
              <li>Creează o animație care dezactivează CollisionShape2D când ușa este deschisă</li>
              <li>Implementează un script care pornește animația când jucătorul interacționează cu ușa</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Sfaturi pentru AnimationPlayer" icon="info" variant="primary">
            <p>
              Când folosești AnimationPlayer:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește nume descriptive pentru animații</li>
              <li>Organizează animațiile pe noduri pentru a face proiectul mai ușor de gestionat</li>
              <li>Folosește easing functions pentru a crea animații mai naturale</li>
              <li>Folosește semnale pentru a sincroniza animațiile cu alte evenimente</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'animation-tree',
      title: 'AnimationTree',
      content: (
        <>
          <p className="mb-4">
            AnimationTree este un sistem avansat pentru gestionarea animațiilor complexe, cum ar fi animațiile procedurale, 
            tranzițiile între animații, și amestecarea animațiilor. Este ideal pentru personaje cu animații realiste și variate.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Concepte de bază ale AnimationTree</h3>
          
          <p className="mb-4">
            AnimationTree folosește un graf de noduri pentru a defini logica animațiilor. 
            Fiecare nod reprezintă o animație, o tranziție, sau o operație de amestecare.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Noduri importante:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>AnimationNodeAnimation</strong>: Redă o animație simplă</li>
                <li><strong>AnimationNodeBlend2</strong>: Amestecă două animații</li>
                <li><strong>AnimationNodeBlendTree</strong>: Graf complex de animații și tranziții</li>
                <li><strong>AnimationNodeStateMachine</strong>: Mașină de stări pentru tranziții automate</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Pași pentru a crea un AnimationTree:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Adaugă un nod AnimationTree</li>
                <li>Setează AnimationPlayer-ul care conține animațiile</li>
                <li>Creează un graf de noduri pentru a defini logica animațiilor</li>
                <li>Conectează nodurile între ele</li>
                <li>Controlează AnimationTree prin cod</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Adăugarea unui AnimationTree">
            <p className="mb-2">Pentru a adăuga un AnimationTree:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimationTree</li>
              <li>În panoul Inspector, setează AnimationPlayer-ul care conține animațiile</li>
              <li>Apasă pe "Tree Root" {'>'} "New AnimationNodeStateMachine" pentru a crea o mașină de stări</li>
              <li>Dublu click pe nodul "AnimationNodeStateMachine" pentru a deschide editorul de graf</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea stărilor și tranzițiilor">
            <p className="mb-2">Pentru a crea stări și tranziții:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În editorul de graf, click dreapta {'>'} "Add Node" {'>'} "Animation" pentru a adăuga o animație</li>
              <li>Selectează animația dorită din lista de animații</li>
              <li>Repetă pentru a adăuga mai multe animații</li>
              <li>Click dreapta pe o animație {'>'} "Set as Start Node" pentru a seta starea inițială</li>
              <li>Trage de la o animație la alta pentru a crea o tranziție</li>
              <li>Selectează tranziția și ajustează parametrii (timp de tranziție, condiții)</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Controlul AnimationTree prin cod">
            <p className="mb-2">Pentru a controla AnimationTree prin cod:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Obține o referință la nodul AnimationTree</li>
              <li>Folosește funcțiile <code>set()</code> și <code>get()</code> pentru a controla parametrii nodurilor</li>
              <li>Folosește funcția <code>travel()</code> pentru a schimba starea curentă</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Controlul AnimationTree prin cod" language="gdscript">
{`extends Sprite2D

@onready var animation_tree = $AnimationTree
@onready var animation_state_machine = animation_tree.tree_root

func _ready():
    # Activează AnimationTree
    animation_tree.active = true

func _physics_process(delta):
    # Obține input-ul jucătorului
    var direction = Input.get_axis("ui_left", "ui_right")
    
    # Setează parametrul "speed" în AnimationTree
    animation_tree.set("parameters/move/blend_amount", abs(direction))
    
    # Schimbă starea în funcție de input
    if direction != 0:
        animation_state_machine.travel("run")
    else:
        animation_state_machine.travel("idle")`}
          </CodeExample>
          
          <Challenge title="Crearea unui personaj cu AnimationTree" difficulty="hard">
            <p className="mb-2">
              Creează un personaj cu animații complexe folosind AnimationTree:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Descarcă animații pentru idle, run, jump, attack</li>
              <li>Creează un AnimationPlayer cu toate animațiile</li>
              <li>Creează un AnimationTree cu o mașină de stări</li>
              <li>Adaugă stări pentru fiecare animație</li>
              <li>Creează tranziții între stări (ex: idle -> run, run -> jump)</li>
              <li>Implementează un script care controlează AnimationTree în funcție de input-ul jucătorului</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Sfaturi pentru AnimationTree" icon="info" variant="primary">
            <p>
              Când folosești AnimationTree:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Planifică graficul de animații înainte de a începe</li>
              <li>Folosește nume descriptive pentru stări și tranziții</li>
              <li>Ajustează parametrii tranzițiilor pentru a obține un aspect natural</li>
              <li>Folosește funcții de amestecare (blend) pentru a crea tranziții line</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'particle-effects',
      title: 'Efecte de particule',
      content: (
        <>
          <p className="mb-4">
            Efectele de particule sunt folosite pentru a crea efecte vizuale dinamice, cum ar fi fum, foc, ploaie, explozii, etc. 
            Godot oferă un sistem de particule flexibil și puternic, care permite crearea de efecte vizuale spectaculoase.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Utilizarea CPUParticles2D</h3>
          
          <p className="mb-4">
            CPUParticles2D este un nod care emite particule folosind procesorul (CPU). 
            Este ideal pentru efecte simple și medii, care nu necesită performanță extremă.
          </p>
          
          <StepItem number={1} title="Adăugarea unui CPUParticles2D">
            <p className="mb-2">Pentru a adăuga un CPUParticles2D:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CPUParticles2D</li>
              <li>În panoul Inspector, setează textura particulelor (Texture)</li>
              <li>Ajustează parametrii de emisie (Amount, Lifetime, Emission Shape)</li>
              <li>Ajustează parametrii de aspect (Color, Scale, Rotation)</li>
              <li>Ajustează parametrii de mișcare (Gravity, Velocity, Angle)</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Parametri importanți</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Parametri de emisie:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Amount</strong>: Numărul de particule emise pe secundă</li>
                <li><strong>Lifetime</strong>: Durata de viață a unei particule (în secunde)</li>
                <li><strong>Emission Shape</strong>: Forma zonei de emisie (Point, Line, Circle, Rectangle)</li>
                <li><strong>Spread</strong>: Unghiul de dispersie al particulelor</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Parametri de aspect:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Texture</strong>: Textura particulelor</li>
                <li><strong>Color</strong>: Culoarea particulelor</li>
                <li><strong>Scale</strong>: Dimensiunea particulelor</li>
                <li><strong>Rotation</strong>: Rotația particulelor</li>
                <li><strong>Initial Velocity</strong>: Viteza inițială a particulelor</li>
              </ul>
            </div>
          </div>
          
          <CodeExample title="Controlul efectelor de particule prin cod" language="gdscript">
{`extends Sprite2D

@onready var cpu_particles = $CPUParticles2D

func _ready():
    # Pornește efectul de particule
    cpu_particles.emitting = true
    
    # Oprește efectul de particule după un timp
    #await get_tree().create_timer(2).timeout
    #cpu_particles.emitting = false
    
    # Modifică culoarea particulelor
    #cpu_particles.color = Color(1, 0, 0)
    
    # Modifică viteza inițială a particulelor
    #cpu_particles.initial_velocity = 200`}
          </CodeExample>
          
          <Challenge title="Crearea unui efect de foc de tabără" difficulty="medium">
            <p className="mb-2">
              Creează un efect de foc de tabără folosind CPUParticles2D:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CPUParticles2D</li>
              <li>Setează o textură pentru flăcări (poți folosi o imagine simplă sau un sprite sheet)</li>
              <li>Ajustează parametrii de emisie pentru a crea un flux constant de flăcări</li>
              <li>Ajustează parametrii de aspect pentru a da flăcărilor un aspect realist (culoare, scalare, rotație)</li>
              <li>Adaugă un efect de fum folosind un alt CPUParticles2D</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Sfaturi pentru efecte de particule" icon="info" variant="primary">
            <p>
              Când folosești efecte de particule:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește texturi optimizate pentru performanță</li>
              <li>Limitează numărul de particule pentru a evita încetinirea jocului</li>
              <li>Folosește gradient colors pentru a crea efecte vizuale interesante</li>
              <li>Folosește animații pentru a da viață particulelor</li>
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
            Acum că am explorat diferitele tehnici de animație și efecte vizuale, 
            să le aplicăm într-un proiect practic: un mic joc de platformă cu un personaj animat, 
            efecte de particule și tranziții animate.
          </p>
          
          <StepItem number={1} title="Configurarea proiectului">
            <p className="mb-2">Începe prin crearea unui nou proiect și configurarea scenei principale:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un nou proiect 2D în Godot</li>
              <li>Importă resursele necesare (sprite-uri, animații, sunete)</li>
              <li>Creează o scenă principală cu un nod Node2D ca rădăcină</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea personajului animat">
            <p className="mb-2">Implementează personajul principal cu animații:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un nod CharacterBody2D ca rădăcină</li>
              <li>Adaugă un nod AnimatedSprite2D pentru animații simple (idle, run, jump)</li>
              <li>Alternativ, folosește un AnimationTree pentru animații mai complexe</li>
              <li>Implementează un script de control bazat pe input-ul jucătorului</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Adăugarea efectelor de particule">
            <p className="mb-2">Adaugă efecte de particule pentru a îmbunătăți vizual jocul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod CPUParticles2D pentru efecte simple (ex: praf la aterizare)</li>
              <li>Adaugă un nod GPUParticles2D pentru efecte mai complexe (ex: explozii)</li>
              <li>Ajustează parametrii pentru a obține efectele dorite</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Crearea tranzițiilor animate">
            <p className="mb-2">Adaugă tranziții animate între scene sau stări:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Folosește AnimationPlayer pentru a crea animații de tranziție (ex: fade in/out)</li>
              <li>Folosește semnale pentru a sincroniza tranzițiile cu alte evenimente</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Idei pentru extinderea proiectului</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Mecanici adiționale:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Inamici cu animații</li>
                <li>Obiecte interactive cu animații</li>
                <li>Efecte de particule pentru atacuri și abilități</li>
                <li>Animații de cutscene</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Îmbunătățiri de gameplay:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>UI animat</li>
                <li>Efecte sonore sincronizate cu animațiile</li>
                <li>Animații de feedback pentru jucător</li>
                <li>Sistem de power-ups cu efecte vizuale</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Sfaturi pentru animații și efecte vizuale" icon="star" variant="secondary">
            <p>Când adaugi animații și efecte vizuale, ține cont de următoarele:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește animații și efecte vizuale pentru a îmbunătăți experiența jucătorului</li>
              <li>Nu exagera cu efectele vizuale, deoarece pot distrage atenția</li>
              <li>Optimizează animațiile și efectele vizuale pentru a menține performanța</li>
              <li>Folosește semnale pentru a sincroniza animațiile cu alte evenimente</li>
            </ul>
          </InfoBox>
          
          <Challenge title="Extinderea proiectului de platformer" difficulty="hard">
            <p className="mb-2">
              Extinde proiectul de platformer cu următoarele funcționalități:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un inamic cu animații și AI</li>
              <li>Implementează o mecanică de atac pentru jucător cu efecte vizuale</li>
              <li>Creează un sistem de power-ups cu efecte vizuale</li>
              <li>Adaugă o animație de cutscene la începutul sau sfârșitul nivelului</li>
            </ol>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout 
      title="Animații și Efecte Vizuale în Godot" 
      subtitle="Adaugă mișcare și viață proiectelor tale prin animații și efecte" 
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4;
