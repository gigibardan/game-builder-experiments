
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session2 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'ce-este-gdscript', title: 'Ce este GDScript?' },
    { id: 'primul-script', title: 'Primul tău script' },
    { id: 'variabile', title: 'Variabile și tipuri de date' },
    { id: 'functii', title: 'Funcții și metode' },
    { id: 'input', title: 'Procesarea Input-ului' },
    { id: 'miscare', title: 'Mișcarea obiectelor' },
    { id: 'exercitii', title: 'Exerciții practice' },
  ];

  const resources = [
    { title: 'Documentația GDScript', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/index.html' },
    { title: 'Cheatsheet GDScript', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html' },
    { title: 'Tutorial Video GDScript', url: 'https://www.youtube.com/watch?v=UcdwP1Q2UlU' },
    { title: 'Forum Godot', url: 'https://godotforums.org/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în GDScript',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la a doua lecție a cursului nostru de Godot! În această sesiune, vom explora GDScript, 
            limbajul de programare principal folosit în Godot Engine. Vom învăța cum să scriem primul script 
            și cum să adăugăm interactivitate jocurilor noastre.
          </p>
          
          <p className="mb-6">
            GDScript este un limbaj de scripting puternic, dar ușor de învățat, special creat pentru Godot. 
            Dacă ai experiență cu Python, vei observa multe similitudini, deoarece sintaxa este inspirată 
            din acest limbaj popular.
          </p>
          
          <LearningOutcome items={[
            "Ce este GDScript și de ce a fost creat pentru Godot",
            "Cum să creezi și să atașezi scripturi la noduri",
            "Variabile, tipuri de date și funcții în GDScript",
            "Cum să detectezi și să procesezi input-ul utilizatorului",
            "Cum să miști obiecte pe ecran folosind scripturi",
            "Aplicații practice ale scripturilor într-un proiect de joc"
          ]} />
        </>
      )
    },
    {
      id: 'ce-este-gdscript',
      title: 'Ce este GDScript?',
      content: (
        <>
          <p className="mb-4">
            GDScript este limbajul de programare principal folosit în Godot Engine. Este un limbaj de scripting 
            dinamic, cu o sintaxă clară și concisă, special conceput pentru a face dezvoltarea jocurilor cât mai 
            eficientă și plăcută.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Caracteristici GDScript</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Sintaxă similară cu Python (indentare, fără punct și virgulă)</li>
                <li>Integrat perfect cu motorul Godot</li>
                <li>Performanță optimizată pentru dezvoltarea jocurilor</li>
                <li>Tipizare dinamică, dar suportă și tipizare statică</li>
                <li>Orientat pe obiecte, cu clase și moștenire</li>
                <li>Managementul automat al memoriei</li>
                <li>API bogat pentru accesul la funcționalitățile Godot</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">De ce GDScript?</h3>
              <p className="mb-2">Godot suportă mai multe limbaje, inclusiv C# și Visual Script, dar GDScript oferă avantaje specifice:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Creat special pentru munca cu nodul și scena sistemului Godot</li>
                <li>Ușor de învățat pentru începători</li>
                <li>Rapid de scris și testat (fără compilare)</li>
                <li>Dimensiune mică a fișierelor compilate</li>
                <li>Integrare perfectă cu editorul Godot</li>
                <li>Comunitate activă și multe resurse disponibile</li>
              </ul>
            </div>
          </div>
          
          <CodeExample title="Exemplu simplu de GDScript" language="gdscript">
{`# Acesta este un comentariu
extends Node2D  # Toate scripturile extind un tip de nod

# Proprietăți (variabile)
var scor = 0
var viteza = 400
var activ = true

# Funcția _ready() este apelată atunci când nodul este gata
func _ready():
    print("Nodul este gata!")
    scor = 10
    
# Funcția _process() este apelată în fiecare cadru
func _process(delta):
    # delta este timpul trecut de la ultimul cadru
    position.x += viteza * delta
    
# O funcție personalizată
func reset_scor():
    scor = 0
    print("Scorul a fost resetat!")
`}
          </CodeExample>
          
          <InfoBox title="Comparație cu Python" icon="info" variant="primary">
            <p>Dacă ești familiarizat cu Python, tranziția la GDScript va fi naturală. Ambele folosesc indentare pentru blocuri de cod, sintaxă similară pentru funcții și variabile, și mult cod va arăta aproape identic. Principalele diferențe sunt câteva cuvinte cheie specifice Godot și API-ul integrat pentru lucrul cu motorul de joc.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'primul-script',
      title: 'Crearea primului script GDScript',
      content: (
        <>
          <p className="mb-4">
            Hai să începem prin a crea un script simplu și a-l atașa unui nod. Vom lucra cu proiectul 
            creat în lecția anterioară sau vom crea unul nou.
          </p>
          
          <StepItem number={1} title="Deschiderea proiectului">
            <p className="mb-2">Deschide Godot Engine și încarcă proiectul din lecția anterioară sau creează unul nou dacă este necesar.</p>
            <p>Asigură-te că ai o scenă simplă cu cel puțin un nod (de exemplu, un Sprite2D cu icon-ul Godot).</p>
          </StepItem>
          
          <StepItem number={2} title="Crearea unui script nou">
            <p className="mb-2">Pentru a adăuga un script la un nod:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul (Sprite2D) în ierarhia de scene</li>
              <li>În partea de sus a editorului, apasă pe butonul "Attach Script" (arată ca o foaie de hârtie cu un simbol "+" sau apasă tastele Alt+S)</li>
              <li>În fereastra care se deschide, menține setările implicite:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Language: GDScript</li>
                  <li>Template: Empty</li>
                  <li>Path: locația implicită (de obicei același nume ca al nodului)</li>
                </ul>
              </li>
              <li>Apasă pe "Create"</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/script_create.png" 
            alt="Fereastra de creare a unui script nou în Godot" 
            caption="Fereastra de creare a unui script nou în Godot"
          />
          
          <StepItem number={3} title="Examinarea scriptului generat">
            <p className="mb-2">După crearea scriptului, se va deschide editorul de script. Vei vedea un cod minimal generat automat:</p>
            <CodeExample title="Script implicit generat" language="gdscript">
{`extends Sprite2D

# Called when the node enters the scene tree for the first time.
func _ready():
    pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
    pass # Replace with function body.
`}
            </CodeExample>
            <p className="mt-2">Acest script conține:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><code>extends Sprite2D</code> - Specifică că acest script extinde funcționalitatea unui nod Sprite2D</li>
              <li><code>func _ready()</code> - O funcție specială care este apelată când nodul este inițializat</li>
              <li><code>func _process(delta)</code> - O funcție care rulează în fiecare cadru (frame) al jocului</li>
              <li><code>pass</code> - Un cuvânt cheie care înseamnă "nu face nimic" (placeholders)</li>
            </ul>
          </StepItem>
          
          <StepItem number={4} title="Modificarea scriptului">
            <p className="mb-2">Hai să modificăm scriptul pentru a face ceva simplu - să afișăm un mesaj când nodul este gata și să rotim sprite-ul:</p>
            <CodeExample title="Primul nostru script funcțional" language="gdscript">
{`extends Sprite2D

# Variable to control rotation speed
var rotation_speed = 1.0

# Called when the node enters the scene tree for the first time.
func _ready():
    print("Sprite-ul este gata!")
    print("Hai să-l facem să se rotească!")

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
    # Rotate the sprite
    rotation += rotation_speed * delta
`}
            </CodeExample>
          </StepItem>
          
          <StepItem number={5} title="Salvarea și testarea scriptului">
            <p className="mb-2">După modificarea scriptului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Salvează scriptul apăsând Ctrl+S sau File > Save</li>
              <li>Revino la editorul scenei</li>
              <li>Rulează scena apăsând butonul Play sau F5</li>
              <li>Observă cum sprite-ul începe să se rotească</li>
              <li>Verifică consola de output (de obicei în partea de jos a editorului) pentru a vedea mesajele print</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Explicația codului" icon="book" variant="primary">
            <ul className="list-disc list-inside space-y-1">
              <li><code>var rotation_speed = 1.0</code> - Definim o variabilă care controlează viteza de rotație</li>
              <li><code>print()</code> - Funcție pentru afișarea mesajelor în consolă (utile pentru debugging)</li>
              <li><code>rotation += rotation_speed * delta</code> - Incrementăm rotația sprite-ului în fiecare cadru
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li><code>rotation</code> este o proprietate încorporată a nodurilor 2D</li>
                  <li><code>delta</code> reprezintă timpul trecut de la ultimul cadru (important pentru mișcare constantă)</li>
                </ul>
              </li>
            </ul>
          </InfoBox>
          
          <InfoBox title="Ce este delta?" icon="info" variant="secondary">
            <p>Parametrul <code>delta</code> din funcția <code>_process</code> reprezintă timpul în secunde care a trecut de la ultimul cadru. Folosind delta în calculele de mișcare asigură că jocul tău va rula la fel indiferent de framerate-ul dispozitivului. Este o practică esențială pentru dezvoltarea jocurilor.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'variabile',
      title: 'Variabile și tipuri de date în GDScript',
      content: (
        <>
          <p className="mb-4">
            În GDScript, ca în orice limbaj de programare, variabilele sunt folosite pentru a stoca date. 
            Să explorăm tipurile de date disponibile și cum să declarăm și să folosim variabile.
          </p>
          
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
            <h3 className="text-lg font-bold text-indigo-700 mb-2">Declararea variabilelor</h3>
            <p className="mb-2">Variabilele sunt declarate folosind cuvântul cheie <code>var</code>:</p>
            <CodeExample title="Declararea variabilelor" language="gdscript">
{`var scor = 0            # Un număr întreg
var nume = "Jucător"     # Un șir de caractere
var viteza = 5.5         # Un număr cu zecimale
var activ = true         # O valoare booleană
var pozitie = Vector2(100, 200)  # Un vector 2D
var culori = ["roșu", "verde", "albastru"]  # Un array (listă)
`}
            </CodeExample>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Tipuri de date de bază</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>int</strong> - Numere întregi (42, -7)</li>
                <li><strong>float</strong> - Numere cu zecimale (3.14, -0.5)</li>
                <li><strong>bool</strong> - Valori booleene (true, false)</li>
                <li><strong>String</strong> - Șiruri de caractere ("Hello World")</li>
                <li><strong>null</strong> - Reprezintă lipsa unei valori</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Tipuri de date complexe</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Array</strong> - Liste de valori [1, 2, 3]</li>
                <li><strong>Dictionary</strong> - Perechi cheie-valoare {"{"}"cheie": "valoare"{"}"}</li>
                <li><strong>Vector2/Vector3</strong> - Coordonate 2D/3D</li>
                <li><strong>Rect2/AABB</strong> - Dreptunghiuri 2D/3D</li>
                <li><strong>Color</strong> - Valori de culoare</li>
                <li><strong>NodePath</strong> - Căi către noduri</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Tipizare statică (opțională)" icon="code" variant="primary">
            <p className="mb-2">GDScript permite și tipizarea statică, care poate îmbunătăți performanța și detectarea erorilor:</p>
            <CodeExample title="Variabile cu tipizare statică" language="gdscript">
{`var scor: int = 0
var nume: String = "Jucător"
var viteza: float = 5.5
var activ: bool = true
var pozitie: Vector2 = Vector2(100, 200)
var inamic_pozitii: Array[Vector2] = []
`}
            </CodeExample>
          </InfoBox>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Constante</h3>
          <p className="mb-3">
            Pentru valorile care nu se schimbă, poți folosi constante cu cuvântul cheie <code>const</code>:
          </p>
          
          <CodeExample title="Declararea constantelor" language="gdscript">
{`const VITEZA_MAXIMA = 500
const GRAVITATIE = 9.8
const NUME_JOC = "Aventura Spațială"
`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exportarea variabilelor</h3>
          <p className="mb-3">
            O caracteristică puternică în GDScript este posibilitatea de a "exporta" variabile, 
            ceea ce le face vizibile și editabile în Inspector:
          </p>
          
          <CodeExample title="Variabile exportate" language="gdscript">
{`@export var viteza = 200  # Apare în Inspector
@export var vieti = 3
@export var culoare: Color = Color(1, 0, 0)  # Roșu
@export_range(0, 100) var volum = 80  # Slider între 0 și 100
`}
          </CodeExample>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/scripting_exports.webp" 
            alt="Variabile exportate în Inspector" 
            caption="Variabilele exportate apar în Inspector și pot fi modificate fără a schimba codul"
          />
        </>
      )
    },
    {
      id: 'functii',
      title: 'Funcții și metode în GDScript',
      content: (
        <>
          <p className="mb-4">
            Funcțiile sunt blocuri de cod reutilizabile care efectuează anumite sarcini. În GDScript, 
            funcțiile sunt definite folosind cuvântul cheie <code>func</code>.
          </p>
          
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
            <h3 className="text-lg font-bold text-indigo-700 mb-2">Funcții de bază</h3>
            <p className="mb-2">Iată cum declarăm o funcție simplă:</p>
            <CodeExample title="Declararea funcțiilor" language="gdscript">
{`# O funcție simplă fără parametri
func salut():
    print("Salut, jucătorule!")
    
# O funcție cu parametri
func aduna(a, b):
    var suma = a + b
    return suma
    
# Apelarea funcțiilor
func _ready():
    salut()
    var rezultat = aduna(5, 3)
    print("Rezultatul adunării: " + str(rezultat))
`}
            </CodeExample>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Funcții speciale în Godot</h3>
          <p className="mb-3">
            Godot are câteva funcții speciale care sunt apelate automat în anumite momente. 
            Le numim "callbacks" sau "funcții virtuale":
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_ready()</h4>
              <p className="text-sm">Apelată când nodul este adăugat în scenă și gata de utilizare. Folosită pentru inițializări.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_process(delta)</h4>
              <p className="text-sm">Apelată în fiecare cadru. Folosită pentru actualizări continue (mișcare, logică).</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_physics_process(delta)</h4>
              <p className="text-sm">Similar cu _process, dar rulează la un framerate fix. Pentru fizică și mișcări exacte.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_input(event)</h4>
              <p className="text-sm">Apelată când se detectează un eveniment de input (tastatură, mouse, etc).</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_unhandled_input(event)</h4>
              <p className="text-sm">Similar cu _input, dar apelată doar pentru evenimente netratate.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">_draw()</h4>
              <p className="text-sm">Apelată când nodul trebuie să se deseneze. Pentru desenare personalizată.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Parametri și valori de returnare</h3>
          <p className="mb-3">
            Funcțiile pot avea parametri (date de intrare) și pot returna valori:
          </p>
          
          <CodeExample title="Funcții cu parametri și valori returnate" language="gdscript">
{`# Funcție cu parametri tipizați și valoare de returnare
func calculeaza_daunele(putere: int, nivel: int) -> int:
    var daune_de_baza = putere * 2
    var bonus_nivel = nivel * 1.5
    var daune_totale = daune_de_baza + bonus_nivel
    return int(daune_totale)
    
# Funcție cu parametri opționali (cu valori implicite)
func creaza_inamic(tip = "basic", viata = 100, viteza = 50):
    print("Inamic creat: " + tip)
    print("Viață: " + str(viata))
    print("Viteză: " + str(viteza))
`}
          </CodeExample>
          
          <InfoBox title="Practici bune" icon="star" variant="primary">
            <ul className="list-disc list-inside space-y-1">
              <li>Folosește nume descriptive pentru funcții care indică ce fac acestea</li>
              <li>Menține funcțiile scurte și concentrate pe o singură sarcină</li>
              <li>Adaugă comentarii pentru a explica logica complexă</li>
              <li>Utilizează tipizarea parametrilor și valorilor de returnare pentru cod mai robust</li>
              <li>Organizează codul în funcții mici și reutilizabile</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'input',
      title: 'Procesarea Input-ului',
      content: (
        <>
          <p className="mb-4">
            Un aspect important al oricărui joc este procesarea input-ului de la jucător. Godot oferă 
            mai multe metode pentru a detecta și răspunde la acțiunile utilizatorului.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Metode de preluare a input-ului</h3>
          <p className="mb-3">
            Există mai multe moduri de a prelua input-ul în Godot:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Verificarea directă a tastelor</h3>
              <p className="mb-2">Putem verifica starea tastelor în funcția <code>_process</code>:</p>
              <CodeExample title="Verificarea input-ului în _process" language="gdscript">
{`func _process(delta):
    if Input.is_key_pressed(KEY_RIGHT):
        position.x += 300 * delta
    if Input.is_key_pressed(KEY_LEFT):
        position.x -= 300 * delta
    if Input.is_key_pressed(KEY_UP):
        position.y -= 300 * delta
    if Input.is_key_pressed(KEY_DOWN):
        position.y += 300 * delta
`}
              </CodeExample>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Folosind funcția _input</h3>
              <p className="mb-2">Putem procesa evenimentele de input în funcția <code>_input</code>:</p>
              <CodeExample title="Procesarea input-ului cu _input" language="gdscript">
{`func _input(event):
    if event is InputEventKey:
        if event.pressed and event.keycode == KEY_SPACE:
            sari()
            
    if event is InputEventMouseButton:
        if event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
            trage()
`}
              </CodeExample>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Sisteme de acțiuni de input</h3>
          <p className="mb-3">
            Godot oferă un sistem de "Acțiuni de Input" care permite să mapăm acțiuni la diferite controale 
            (tastatură, mouse, gamepad) și să le schimbăm ușor:
          </p>
          
          <StepItem number={1} title="Configurarea acțiunilor de input">
            <p className="mb-2">Înainte de a folosi acțiunile de input, trebuie să le definim în Project Settings:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Mergi la Project &gt; Project Settings</li>
              <li>Selectează tab-ul "Input Map"</li>
              <li>Adaugă o nouă acțiune (ex: "move_right") în câmpul din partea de sus</li>
              <li>Apasă pe "Add"</li>
              <li>Fă click pe "+" lângă acțiunea creată pentru a adăuga o tastă sau alt control</li>
              <li>Selectează tasta dorită (ex: săgeată dreapta)</li>
              <li>Repetă pentru toate acțiunile necesare (move_left, move_up, move_down, jump, attack etc.)</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/input_event_actions_sections.webp" 
            alt="Input Map în Project Settings" 
            caption="Configurarea acțiunilor de input în Project Settings"
          />
          
          <StepItem number={2} title="Utilizarea acțiunilor de input în cod">
            <p className="mb-2">După configurare, putem utiliza acțiunile în cod:</p>
            <CodeExample title="Utilizarea acțiunilor de input" language="gdscript">
{`func _process(delta):
    var direction = Vector2.ZERO
    
    if Input.is_action_pressed("move_right"):
        direction.x += 1
    if Input.is_action_pressed("move_left"):
        direction.x -= 1
    if Input.is_action_pressed("move_up"):
        direction.y -= 1
    if Input.is_action_pressed("move_down"):
        direction.y += 1
        
    # Normalizare pentru a evita viteza mai mare pe diagonală
    if direction.length() > 0:
        direction = direction.normalized()
        
    # Aplicarea mișcării
    position += direction * 300 * delta
    
    # Detectare de acțiuni care tocmai au fost apăsate
    if Input.is_action_just_pressed("jump"):
        sari()
        
    # Detectare de acțiuni care tocmai au fost eliberate
    if Input.is_action_just_released("attack"):
        termina_atac()
`}
            </CodeExample>
          </StepItem>
          
          <InfoBox title="Avantajele sistemului de acțiuni" icon="info" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Permite jucătorilor să-și personalizeze controalele</li>
              <li>Facilitează suportul pentru multiple dispozitive de input (tastatură, gamepad, etc.)</li>
              <li>Face codul mai curat și mai ușor de citit</li>
              <li>Permite schimbarea controalelor fără a modifica codul</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'miscare',
      title: 'Mișcarea obiectelor',
      content: (
        <>
          <p className="mb-4">
            Acum că știm cum să procesăm input-ul, să învățăm cum să folosim aceste informații pentru a mișca 
            obiecte în jocul nostru. Există mai multe abordări pentru mișcare în Godot.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Mișcarea de bază a unui Sprite</h3>
          <p className="mb-3">
            Cel mai simplu mod de a mișca un obiect este prin modificarea proprietății <code>position</code>:
          </p>
          
          <CodeExample title="Mișcarea de bază a unui sprite" language="gdscript">
{`extends Sprite2D

var viteza = 300

func _process(delta):
    var direction = Vector2.ZERO
    
    if Input.is_action_pressed("move_right"):
        direction.x += 1
    if Input.is_action_pressed("move_left"):
        direction.x -= 1
    if Input.is_action_pressed("move_up"):
        direction.y -= 1
    if Input.is_action_pressed("move_down"):
        direction.y += 1
        
    if direction.length() > 0:
        direction = direction.normalized()
        
    # Aplicăm mișcarea
    position += direction * viteza * delta
`}
          </CodeExample>
          
          <InfoBox title="Ce este un Vector2?" icon="info" variant="primary">
            <p>Un <code>Vector2</code> este o structură de date care conține două valori: x și y. Este folosit frecvent pentru a reprezenta poziții 2D, direcții sau viteze. <code>Vector2.ZERO</code> este echivalent cu <code>Vector2(0, 0)</code>.</p>
          </InfoBox>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Mișcarea nodurilor fizice</h3>
          <p className="mb-3">
            Pentru jocuri care necesită fizică, putem folosi noduri precum <code>CharacterBody2D</code>, 
            <code>RigidBody2D</code> sau <code>Area2D</code>:
          </p>
          
          <CodeExample title="Mișcarea unui CharacterBody2D" language="gdscript">
{`extends CharacterBody2D

@export var viteza = 400
@export var gravitatie = 980
@export var putere_salt = 600

func _physics_process(delta):
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += gravitatie * delta
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = -putere_salt
    
    # Obținem direcția de mișcare orizontală
    var direction = Input.get_axis("move_left", "move_right")
    velocity.x = direction * viteza
    
    # Aplicăm mișcarea
    move_and_slide()
`}
          </CodeExample>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">CharacterBody2D</h3>
              <p className="mb-2">Perfect pentru personaje controlate de jucător:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Controlat complet prin cod</li>
                <li>Detectează și răspunde la coliziuni</li>
                <li>Nu este afectat automat de gravitație</li>
                <li>Funcții utile precum is_on_floor(), is_on_wall()</li>
                <li>Mișcare prin move_and_slide()</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">RigidBody2D</h3>
              <p className="mb-2">Ideal pentru obiecte guvernate de fizică:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Afectat automat de gravitație</li>
                <li>Interacționează fizic cu alte obiecte</li>
                <li>Poate fi controlat prin aplicarea de forțe sau impulsuri</li>
                <li>Bun pentru obiecte care se mișcă natural</li>
                <li>Mai puțin control direct decât CharacterBody2D</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Sfaturi pentru mișcare" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Întotdeauna folosește delta time pentru mișcări independente de framerate</li>
              <li>Normalizează vectorii de direcție pentru a evita viteze mai mari pe diagonală</li>
              <li>Pentru personaje, CharacterBody2D este de obicei cea mai bună alegere</li>
              <li>Pentru obiecte care cad, se rostogolesc sau sunt aruncate, folosește RigidBody2D</li>
              <li>Folosește _physics_process() pentru orice mișcare bazată pe fizică</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitii',
      title: 'Exerciții practice',
      content: (
        <>
          <p className="mb-4">
            Să consolidăm ce am învățat cu câteva exerciții practice. Aceste exerciții te vor ajuta 
            să aplici conceptele de GDScript în proiecte reale.
          </p>
          
          <Challenge title="Creează un sprite care urmărește mouse-ul" difficulty="easy">
            <p className="mb-3">În acest exercițiu, vei crea un sprite care se mișcă în direcția cursorului mouse-ului:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează o nouă scenă cu un nod Sprite2D</li>
              <li>Adaugă o textură sprite-ului (poți folosi icon-ul Godot sau orice altă imagine)</li>
              <li>Atașează un script nou la sprite</li>
              <li>Implementează mișcarea către mouse folosind acest cod:</li>
            </ol>
            <CodeExample title="Urmărirea cursorului mouse" language="gdscript">
{`extends Sprite2D

var viteza = 200

func _process(delta):
    # Obținem poziția mouse-ului în coordonatele ferestrei
    var pozitie_mouse = get_global_mouse_position()
    
    # Calculăm direcția către mouse
    var directie = pozitie_mouse - global_position
    
    # Verificăm dacă sprite-ul nu e deja la poziția mouse-ului
    if directie.length() > 5:
        directie = directie.normalized()
        # Mișcăm sprite-ul către mouse
        position += directie * viteza * delta
`}
            </CodeExample>
          </Challenge>
          
          <Challenge title="Creează un personaj cu animație" difficulty="medium">
            <p className="mb-3">În acest exercițiu, vei crea un personaj simplu care se poate mișca și are animații diferite:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează o scenă nouă cu un nod CharacterBody2D ca rădăcină</li>
              <li>Adaugă un nod AnimatedSprite2D ca și copil</li>
              <li>Adaugă un nod CollisionShape2D și configurează-l</li>
              <li>Configurează sprite-urile și animațiile pentru stări precum "idle", "walking", "jumping"</li>
              <li>Implementează mișcarea și animațiile cu un script asemănător cu:</li>
            </ol>
            <CodeExample title="Personaj cu animații" language="gdscript">
{`extends CharacterBody2D

@export var viteza = 300
@export var gravitatie = 980
@export var putere_salt = 600

@onready var sprite = $AnimatedSprite2D

func _physics_process(delta):
    # Aplicăm gravitația
    if not is_on_floor():
        velocity.y += gravitatie * delta
    
    # Gestionăm saltul
    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = -putere_salt
    
    # Obținem direcția de mișcare orizontală
    var direction = Input.get_axis("move_left", "move_right")
    velocity.x = direction * viteza
    
    # Aplicăm mișcarea
    move_and_slide()
    
    # Actualizăm animațiile
    actualizeaza_animatii(direction)

func actualizeaza_animatii(direction):
    if not is_on_floor():
        sprite.play("jumping")
    elif direction != 0:
        sprite.play("walking")
        # Întoarcem sprite-ul în funcție de direcție
        sprite.flip_h = direction < 0
    else:
        sprite.play("idle")
`}
            </CodeExample>
          </Challenge>
          
          <Challenge title="Creează o minge care ricoșează" difficulty="medium">
            <p className="mb-3">În acest exercițiu, vei crea o minge care se mișcă și ricoșează de pereții ecranului:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Creează o nouă scenă cu un nod Sprite2D</li>
              <li>Adaugă o textură circulară pentru sprite (poți folosi și icon-ul Godot)</li>
              <li>Atașează un script nou care implementează mișcarea și ricoșarea:</li>
            </ol>
            <CodeExample title="Minge care ricoșează" language="gdscript">
{`extends Sprite2D

var viteza = Vector2(200, 150)
var dimensiuni_ecran

func _ready():
    # Obținem dimensiunile ecranului la inițializare
    dimensiuni_ecran = get_viewport_rect().size

func _process(delta):
    # Actualizăm poziția
    position += viteza * delta
    
    # Verificăm coliziuni cu marginile ecranului
    var dimensiune = texture.get_size() * scale / 2
    
    # Coliziune cu marginea din dreapta sau stânga
    if position.x <= dimensiune.x or position.x >= dimensiuni_ecran.x - dimensiune.x:
        viteza.x = -viteza.x
    
    # Coliziune cu marginea de sus sau jos
    if position.y <= dimensiune.y or position.y >= dimensiuni_ecran.y - dimensiune.y:
        viteza.y = -viteza.y
        
    # Ne asigurăm că mingea rămâne în ecran
    position.x = clamp(position.x, dimensiune.x, dimensiuni_ecran.x - dimensiune.x)
    position.y = clamp(position.y, dimensiune.y, dimensiuni_ecran.y - dimensiune.y)
`}
            </CodeExample>
          </Challenge>
          
          <InfoBox title="Continuă să experimentezi!" icon="success" variant="success">
            <p>Acestea sunt doar exemple de bază pentru a începe. Încearcă să modifici parametrii, să combini concepte și să adaugi funcționalități noi. Experimentarea este cea mai bună metodă de a învăța programarea jocurilor!</p>
          </InfoBox>
          
          <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Concluzie</h3>
            <p className="mb-3">
              Felicitări! Ai învățat elementele de bază ale GDScript și cum să adaugi interactivitate în jocurile tale. 
              Ai explorat concepte precum variabile, funcții, procesarea input-ului și mișcarea obiectelor.
            </p>
            <p className="mb-3">
              În lecția următoare, vom învăța despre fizică și coliziuni în Godot, esențiale pentru 
              crearea jocurilor interactive și realiste.
            </p>
            <p>
              Nu uita să experimentezi cu exemplele prezentate și să încerci exercițiile pentru a-ți consolida 
              cunoștințele proaspăt dobândite.
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="godot"
      sessionId="2"
      title="Concepte de bază în GDScript"
      subtitle="Învață limbajul GDScript și cum să implementezi funcționalități simple."
      heroColor="bg-gradient-to-r from-indigo-700 to-indigo-500"
      previousLesson={{
        title: "Sesiunea 1: Introducere în Godot Engine",
        path: "/godot/session1"
      }}
      nextLesson={{
        title: "Sesiunea 3: Fizică și coliziuni",
        path: "/godot/session3"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session2;
