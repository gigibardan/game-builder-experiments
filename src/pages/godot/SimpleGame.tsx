import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const SimpleGame = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'proiect-setup', title: 'Configurare proiect' },
    { id: 'personaj', title: 'Crearea personajului' },
    { id: 'nivel', title: 'Designul nivelului' },
    { id: 'colectabile', title: 'Obiecte colectabile' },
    { id: 'inamici', title: 'Adăugarea inamicilor' },
    { id: 'ui', title: 'Interfața de utilizator' },
    { id: 'finalizare', title: 'Finalizarea jocului' },
  ];

  const resources = [
    { title: 'Godot Documentation', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Godot Assets Library', url: 'https://godotengine.org/asset-library/' },
    { title: 'Platformer Tutorial', url: 'https://www.youtube.com/watch?v=xFEKIWpd0sU' },
    { title: 'Godot Forum', url: 'https://godotforums.org/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în crearea jocului',
      content: (
        <>
          <p className="mb-4">
            În acest tutorial practic, vom crea un joc simplu de tip platformer 2D folosind Godot Engine. 
            Acest joc va include elementele fundamentale pe care le-am învățat în sesiunile anterioare: 
            fizică, coliziuni, animații, input, și interfață cu utilizatorul.
          </p>
          
          <p className="mb-6">
            Jocul nostru va consta dintr-un personaj controlat de jucător care poate alerga și sări, 
            colecta monede și evita inamici. Vom implementa și un sistem simplu de scor și vieți.
          </p>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Ce vom învăța</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1">
                <li>Cum să configurăm un proiect de joc complet</li>
                <li>Cum să creăm și animăm un personaj controlabil</li>
                <li>Implementarea fizicii și coliziunilor</li>
                <li>Crearea nivelurilor cu tile maps</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Adăugarea de obiecte colectabile</li>
                <li>Programarea inteligenței artificiale pentru inamici</li>
                <li>Crearea unei interfețe HUD funcționale</li>
                <li>Gestionarea stărilor de joc (start, gameplay, game over)</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Privire de ansamblu asupra jocului</h3>
          <p className="mb-4">
            Iată ce funcționalități va avea jocul nostru:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-indigo-700 mb-2">Personajul principal</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Mișcare stânga-dreapta</li>
                <li>Salt</li>
                <li>Animații pentru idle, mers și salt</li>
                <li>Sprite orientat în direcția de mișcare</li>
                <li>Fizică realistă (greutate, frecare)</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-blue-700 mb-2">Lumea jocului</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Platforme create cu TileMap</li>
                <li>Monede și power-ups de colectat</li>
                <li>Inamici cu pattern-uri simple de mișcare</li>
                <li>Zone capcană (spikes, gropi)</li>
                <li>Punct de start și finish</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-green-700 mb-2">Interfața jocului</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>HUD cu scor și vieți</li>
                <li>Ecran de titlu</li>
                <li>Ecran game over</li>
                <li>Ecran de victorie</li>
                <li>Buton de pauză și meniu</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Resursele necesare" icon="info" variant="primary">
            <p className="mb-2">Pentru acest proiect, vom avea nevoie de următoarele resurse:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sprite-uri pentru personaj (idle, run, jump)</li>
              <li>Tileset pentru niveluri (platforme, fundal)</li>
              <li>Sprite-uri pentru monede și obiecte colectabile</li>
              <li>Sprite-uri pentru inamici</li>
              <li>Efecte sonore și muzică de fundal</li>
              <li>Fonturi pentru text</li>
            </ul>
            <p className="mt-2">Poți folosi resurse gratuite de pe site-uri precum OpenGameArt, Kenney.nl sau din Godot Asset Library.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'proiect-setup',
      title: 'Configurarea proiectului',
      content: (
        <>
          <p className="mb-4">
            Să începem prin configurarea proiectului nostru în Godot. Vom seta structura de bază și 
            vom importa resursele necesare.
          </p>
          
          <StepItem number={1} title="Crearea unui nou proiect">
            <p className="mb-2">Deschide Godot Engine și creează un nou proiect:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Din Project Manager, apasă pe "New Project"</li>
              <li>Alege un nume (ex: "PlatformerGame") și un director</li>
              <li>Selectează "2D" ca renderer</li>
              <li>Apasă "Create & Edit"</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Configurarea structurii de fișiere">
            <p className="mb-2">Organizează proiectul tău creând următoarele directoare:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>scenes</strong>: Pentru scenele principale ale jocului</li>
              <li><strong>scripts</strong>: Pentru toate fișierele GDScript</li>
              <li><strong>assets</strong>: Pentru resurse</li>
                <ul className="list-disc list-inside space-y-1 ml-8">
                  <li><strong>sprites</strong>: Pentru imaginile personajelor și obiectelor</li>
                  <li><strong>tilesets</strong>: Pentru tileset-uri</li>
                  <li><strong>audio</strong>: Pentru efecte sonore și muzică</li>
                  <li><strong>fonts</strong>: Pentru fonturi</li>
                </ul>
            </ul>
            <p className="mt-2">Pentru a crea directoare, fă click dreapta în File System și selectează "New Folder".</p>
          </StepItem>
          
          <StepItem number={3} title="Importarea resurselor">
            <p className="mb-2">Importă resursele necesare pentru joc:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Descarcă sprite-uri pentru personaj și inamici, tileset-uri, etc.</li>
              <li>Trage fișierele în directorele corespunzătoare din Godot</li>
              <li>Pentru tileset-uri, asigură-te că ai un sprite sheet cu platforme</li>
              <li>Pentru personaj, organizează sprite-urile pe animații (idle, run, jump)</li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Configurarea proiectului">
            <p className="mb-2">Setează configurațiile de bază ale proiectului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la Project > Project Settings</li>
              <li>În secțiunea "Display > Window", setează rezoluția implicită (ex: 1280x720)</li>
              <li>În "Input Map", configurează acțiunile de control:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă "move_left" și mapează-l la săgeata stânga și tasta A</li>
                  <li>Adaugă "move_right" și mapează-l la săgeata dreapta și tasta D</li>
                  <li>Adaugă "jump" și mapează-l la space și săgeata sus</li>
                  <li>Adaugă "pause" și mapează-l la tasta Escape sau P</li>
                </ul>
              </li>
              <li>În "Layer Names", configurează layer-uri de coliziune:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Layer 1: "world" (platforme, teren)</li>
                  <li>Layer 2: "player" (personajul)</li>
                  <li>Layer 3: "enemies" (inamici)</li>
                  <li>Layer 4: "collectibles" (monede, power-ups)</li>
                  <li>Layer 5: "hazards" (capcane, pericole)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Crearea scenei principale">
            <p className="mb-2">Creează scena principală a jocului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe butonul "+" din Scene dock sau Ctrl+N</li>
              <li>Selectează "Node2D" ca nod rădăcină al scenei</li>
              <li>Redenumește nodul la "Main"</li>
              <li>Salvează scena în directorul "scenes" (File > Save As) ca "main.tscn"</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Structura scenei principale" language="gdscript">
{`Main (Node2D)
 |
 |-- Player (CharacterBody2D) - va fi adăugat mai târziu
 |
 |-- Level (Node2D)
 |    |
 |    |-- TileMap (platforme, decorații)
 |    |
 |    |-- Collectibles (Node2D)
 |    |    |-- Coins, PowerUps etc.
 |    |
 |    |-- Enemies (Node2D)
 |         |-- Enemy1, Enemy2 etc.
 |
 |-- Camera2D (urmărește jucătorul)
 |
 |-- UI (CanvasLayer)
      |-- HUD (Control)
      |-- PauseMenu (Control)
      |-- GameOverScreen (Control)
`}
          </CodeExample>
          
          <InfoBox title="Configurarea ferestrei de joc" icon="star" variant="secondary">
            <p>Este important să setezi rezoluția potrivită și să gândești modul în care jocul se va scala pe diferite dispozitive. Poți seta modul de scalare în Project Settings > Display > Window > Stretch > Mode și Aspect.</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Stretch Mode</strong>: "2d" este adesea cel mai bun pentru jocuri 2D, permițând ca elementele să se scaleze proporțional</li>
              <li><strong>Stretch Aspect</strong>: "keep" pentru a menține raportul de aspect, "expand" pentru a umple ecranul</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'personaj',
      title: 'Crearea personajului',
      content: (
        <>
          <p className="mb-4">
            Acum vom crea personajul jucătorului, care va fi controlat de utilizator. 
            Vom folosi un CharacterBody2D pentru a beneficia de fizica integrată și vom adăuga 
            animații pentru diferitele stări ale personajului.
          </p>
          
          <StepItem number={1} title="Crearea scenei pentru personaj">
            <p className="mb-2">Vom crea personajul într-o scenă separată:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe butonul "+" din Scene dock sau Ctrl+N pentru o nouă scenă</li>
              <li>Selectează "CharacterBody2D" ca nod rădăcină</li>
              <li>Redenumește nodul la "Player"</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Adăugarea nodurilor necesare">
            <p className="mb-2">Adaugă nodurile necesare pentru personajul nostru:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D ca copil al Player</li>
              <li>Adaugă un nod CollisionShape2D ca copil al Player</li>
              <li>Adaugă un nod Camera2D ca copil al Player (pentru a urmări personajul)</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Configurarea sprite-urilor și animațiilor">
            <p className="mb-2">Configurează AnimatedSprite2D cu animațiile personajului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul AnimatedSprite2D</li>
              <li>În Inspector, la SpriteFrames, apasă pe "[empty]" și alege "New SpriteFrames"</li>
              <li>Se va deschide panoul SpriteFrames în partea de jos</li>
              <li>Adaugă animațiile de bază:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>idle - pentru când personajul stă pe loc</li>
                  <li>run - pentru când personajul aleargă</li>
                  <li>jump - pentru când personajul sare</li>
                  <li>fall - (opțional) pentru când personajul cade</li>
                </ul>
              </li>
              <li>Pentru fiecare animație:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Selectează animația din listă</li>
                  <li>Ajustează proprietățile (FPS, loop)</li>
                  <li>Drag & drop sprite-urile corespunzătoare sau folosește butonul "Add frames from file"</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={4} title="Configurarea formei de coliziune">
            <p className="mb-2">Setează forma de coliziune a personajului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul CollisionShape2D</li>
              <li>În Inspector, la Shape, apasă pe "[empty]" și alege "New CapsuleShape2D" (forma potrivită pentru personaje)</li>
              <li>Ajustează dimensiunile formei pentru a se potrivi cu sprite-ul personajului</li>
              <li>Poziționează forma astfel încât să se alinieze corect cu sprite-ul</li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Configurarea camerei">
            <p className="mb-2">Configurează Camera2D pentru a urmări jucătorul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Camera2D</li>
              <li>Activează "Current" în Inspector pentru a face această cameră activă</li>
              <li>Ajustează proprietățile precum:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Drag Margins - pentru a controla cât de repede camera urmărește jucătorul</li>
                  <li>Smoothing - pentru tranziții line ale camerei</li>
                  <li>Limit - pentru a seta limite pentru cameră (opțional)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={6} title="Scrierea codului pentru controlul personajului">
            <p className="mb-2">Acum, să adăugăm un script pentru a controla personajul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Player</li>
              <li>Apasă pe butonul "Attach Script" sau tastele Alt+S</li>
              <li>Păstrează setările implicite și apasă "Create"</li>
            </ol>
            <p className="mt-2">Vei edita scriptul pentru a implementa controlul personajului:</p>
          </StepItem>
          
          <CodeExample title="player.gd - Script pentru controlul personajului" language="gdscript">
{`extends CharacterBody2D

# Parametri pentru mișcare și fizică
@export var speed = 400.0
@export var jump_velocity = -600.0
@export var gravity = 980.0
@export var acceleration = 2000.0
@export var friction = 1000.0

# Referințe la noduri
@onready var animated_sprite = $AnimatedSprite2D

# Stări pentru animații
var is_jumping = false
var is_falling = false

func _physics_process(delta):
    # Adăugăm gravitația
    if not is_on_floor():
        velocity.y += gravity * delta
        
        # Verificăm dacă personajul urcă sau coboară
        if velocity.y < 0:
            is_jumping = true
            is_falling = false
        else:
            is_jumping = false
            is_falling = true
    else:
        # Resetăm stările de salt/cădere când suntem pe podea
        is_jumping = false
        is_falling = false

    # Gestionăm saltul
    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = jump_velocity

    # Obținem direcția de intrare
    var direction = Input.get_axis("move_left", "move_right")
    
    # Gestionăm mișcarea orizontală
    if direction != 0:
        # Accelerăm în direcția de intrare
        velocity.x = move_toward(velocity.x, direction * speed, acceleration * delta)
    else:
        # Aplicăm frecare pentru a încetini
        velocity.x = move_toward(velocity.x, 0, friction * delta)

    # Actualizăm poziția
    move_and_slide()
    
    # Actualizăm sprite-ul pentru a se orienta în direcția de mișcare
    if direction > 0:
        animated_sprite.flip_h = false
    elif direction < 0:
        animated_sprite.flip_h = true
    
    # Actualizăm animațiile
    update_animations()

func update_animations():
    if is_jumping:
        animated_sprite.play("jump")
    elif is_falling:
        # Dacă am creat o animație de cădere, o folosim
        if animated_sprite.sprite_frames.has_animation("fall"):
            animated_sprite.play("fall")
        else:
            animated_sprite.play("jump")  # Alternativ, folosim animația de salt
    elif abs(velocity.x) > 10:  # Dacă ne mișcăm orizontal
        animated_sprite.play("run")
    else:
        animated_sprite.play("idle")

func take_damage():
    # Va fi implementat mai târziu
    pass

func collect_coin():
    # Va fi implementat mai târziu
    pass
`}
          </CodeExample>
          
          <StepItem number={7} title="Salvarea și testarea personajului">
            <p className="mb-2">Să salvăm și să testăm personajul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Salvează scena personajului în directorul "scenes" (File > Save As) ca "player.tscn"</li>
              <li>Pentru testare, poți adăuga temporar un TileMap cu câteva platforme</li>
              <li>Apasă F5 sau butonul de "Play" pentru a testa personajul</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Ajustarea parametrilor de mișcare" icon="info" variant="primary">
            <p>Parametrii pentru mișcare pot necesita ajustări pentru a obține un sentiment bun de control:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Dacă personajul se mișcă prea repede sau prea lent, ajustează <code>speed</code></li>
              <li>Dacă saltul pare prea înalt sau prea scurt, modifică <code>jump_velocity</code> (valori negative mai mari = salt mai înalt)</li>
              <li>Pentru un control mai strâns, mărește <code>acceleration</code> și <code>friction</code></li>
              <li>Pentru un sentiment mai "plutitor", micșorează <code>gravity</code></li>
            </ul>
            <p className="mt-2">Nu ezita să experimentezi cu acești parametri până când controlul se simte natural și plăcut!</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'nivel',
      title: 'Designul nivelului',
      content: (
        <>
          <p className="mb-4">
            Acum vom crea nivelul jocului folosind un TileMap. TileMap-urile permit crearea rapidă și 
            eficientă a nivelurilor prin plasarea de "tiles" (imagini mici) pe o grilă.
          </p>

          <StepItem number={1} title="Crearea unui TileSet">
            <p className="mb-2">Înainte de a crea nivelul, trebuie să creăm un TileSet:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la directorul "assets/tilesets"</li>
              <li>Creează un nou TileSet apăsând click dreapta > New > TileSet</li>
              <li>Redenumește-l la "level_tileset.tres"</li>
              <li>Deschide TileSet-ul făcând dublu click pe el</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Adăugarea de Tiles la TileSet">
            <p className="mb-2">Adaugă tiles la TileSet:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul TileSet, trage sprite sheet-ul cu tiles în secțiunea "Texture"</li>
              <li>Selectează "New Single Tile" din meniul "Create Tile"</li>
              <li>Desenează dreptunghiuri peste fiecare tile din sprite sheet pentru a le defini</li>
              <li>Setează proprietățile fizice pentru fiecare tile (Collision > New RectangleShape2D)</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Crearea unui TileMap">
            <p className="mb-2">Acum vom crea TileMap-ul în scena principală:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide scena "main.tscn"</li>
              <li>Selectează nodul "Level"</li>
              <li>Adaugă un nod TileMap ca și copil (apăsă Ctrl+A și caută TileMap)</li>
              <li>În Inspector, la TileSet, trage TileSet-ul creat anterior (level_tileset.tres)</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Desenarea nivelului">
            <p className="mb-2">Desenează nivelul folosind TileMap:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul TileMap</li>
              <li>În partea de sus a editorului, apasă pe butonul "TileSet" pentru a deschide panoul de tiles</li>
              <li>Selectează un tile din panoul TileSet</li>
              <li>Desenează tile-uri pe grilă pentru a crea platforme, pereți și alte elemente ale nivelului</li>
              <li>Folosește instrumentele de desenare (creion, dreptunghi, umplere) pentru a accelera procesul</li>
            </ol>
          </StepItem>

          <StepItem number={5} title="Adăugarea coliziunilor">
            <p className="mb-2">Asigură-te că tile-urile au coliziuni corecte:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează TileMap</li>
              <li>În panoul TileSet, selectează fiecare tile și adaugă o formă de coliziune (Collision > New RectangleShape2D)</li>
              <li>Ajustează dimensiunile formei pentru a se potrivi cu tile-ul</li>
            </ol>
          </StepItem>

          <StepItem number={6} title="Adăugarea personajului la scenă">
            <p className="mb-2">Adaugă personajul la scena principală:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul "Main"</li>
              <li>Trage scena "player.tscn" din FileSystem în scena "Main"</li>
              <li>Poziționează personajul la punctul de start al nivelului</li>
            </ol>
          </StepItem>

          <StepItem number={7} title="Testarea nivelului">
            <p className="mb-2">Testează nivelul:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă F5 sau butonul de "Play" pentru a testa jocul</li>
              <li>Verifică dacă personajul se mișcă corect și interacționează cu platformele</li>
              <li>Ajustează poziția și dimensiunile coliziunilor dacă este necesar</li>
            </ol>
          </StepItem>

          <CodeExample title="level.gd - Script pentru controlul nivelului" language="gdscript">
{`extends Node2D

# Referință la TileMap
@onready var tilemap = $TileMap

func _ready():
    # Poți adăuga cod aici pentru a inițializa nivelul
    pass

func get_tile_data(position):
    # Funcție pentru a obține date despre un tile la o anumită poziție
    var tile_id = tilemap.get_cell_tile_data(0, position)
    return tile_id
`}
          </CodeExample>

          <InfoBox title="Sfaturi pentru designul nivelului" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Planifică nivelul pe hârtie înainte de a începe să desenezi în Godot</li>
              <li>Folosește culori și texturi variate pentru a face nivelul mai atractiv</li>
              <li>Adaugă elemente de fundal pentru a crea profunzime</li>
              <li>Testează nivelul frecvent pentru a te asigura că este distractiv și provocator</li>
              <li>Folosește variații de tile-uri pentru a evita repetiția</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'colectabile',
      title: 'Obiecte colectabile',
      content: (
        <>
          <p className="mb-4">
            Acum vom adăuga obiecte colectabile la nivel, cum ar fi monede sau power-ups. 
            Aceste obiecte vor oferi jucătorului un scop și vor adăuga valoare jocului.
          </p>

          <StepItem number={1} title="Crearea scenei pentru obiectul colectabil">
            <p className="mb-2">Vom crea un obiect colectabil într-o scenă separată:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe butonul "+" din Scene dock sau Ctrl+N pentru o nouă scenă</li>
              <li>Selectează "Area2D" ca nod rădăcină</li>
              <li>Redenumește nodul la "Coin" (sau alt nume relevant)</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Adăugarea nodurilor necesare">
            <p className="mb-2">Adaugă nodurile necesare pentru obiectul colectabil:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AnimatedSprite2D ca copil al Coin</li>
              <li>Adaugă un nod CollisionShape2D ca copil al Coin</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Configurarea sprite-urilor și animațiilor">
            <p className="mb-2">Configurează AnimatedSprite2D cu animațiile obiectului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul AnimatedSprite2D</li>
              <li>În Inspector, la SpriteFrames, apasă pe "[empty]" și alege "New SpriteFrames"</li>
              <li>Adaugă o animație (ex: "spin")</li>
              <li>Adaugă sprite-urile corespunzătoare pentru animație</li>
              <li>Setează FPS și loop</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Configurarea formei de coliziune">
            <p className="mb-2">Setează forma de coliziune a obiectului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul CollisionShape2D</li>
              <li>În Inspector, la Shape, apasă pe "[empty]" și alege "New CircleShape2D"</li>
              <li>Ajustează raza cercului pentru a se potrivi cu sprite-ul</li>
            </ol>
          </StepItem>

          <StepItem number={5} title="Scrierea codului pentru colectare">
            <p className="mb-2">Adaugă un script pentru a gestiona colectarea obiectului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Coin</li>
              <li>Apasă pe butonul "Attach Script" sau tastele Alt+S</li>
              <li>Păstrează setările implicite și apasă "Create"</li>
            </ol>
            <p className="mt-2">Vei edita scriptul pentru a implementa logica de colectare:</p>
          </StepItem>

          <CodeExample title="coin.gd - Script pentru obiectul colectabil" language="gdscript">
{`extends Area2D

# Semnal emis când obiectul este colectat
signal collected

func _ready():
    # Pornim animația
    $AnimatedSprite2D.play("spin")

func _on_body_entered(body):
    # Verificăm dacă obiectul care a intrat în zonă este jucătorul
    if body.name == "Player":
        # Emițăm semnalul de colectare
        emit_signal("collected")
        
        # Ne ascundem și dezactivăm coliziunile
        hide()
        $CollisionShape2D.disabled = true
        
        # Eliberăm memoria după un timp
        queue_free()
`}
          </CodeExample>

          <StepItem number={6} title="Adăugarea obiectelor la nivel">
            <p className="mb-2">Adaugă obiectele colectabile la nivel:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide scena "main.tscn"</li>
              <li>Selectează nodul "Collectibles"</li>
              <li>Trage scena "coin.tscn" din FileSystem în scena "Main" pentru a crea instanțe ale obiectului</li>
              <li>Poziționează obiectele în locuri strategice pe nivel</li>
            </ol>
          </StepItem>

          <StepItem number={7} title="Gestionarea colectării în codul jucătorului">
            <p className="mb-2">Modifică scriptul jucătorului pentru a gestiona colectarea obiectelor:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide scriptul "player.gd"</li>
              <li>Adaugă cod pentru a conecta semnalul "collected" al obiectelor</li>
            </ol>
          </StepItem>

          <CodeExample title="player.gd - Gestionarea colectării" language="gdscript">
{`func _ready():
    # ... cod existent ...
    
    # Conectăm semnalul "collected" al obiectelor
    for coin in get_tree().get_nodes_in_
