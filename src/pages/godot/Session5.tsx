import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'control-nodes', title: 'Noduri Control de bază' },
    { id: 'containers', title: 'Containere și layout' },
    { id: 'themes', title: 'Teme și stilizare' },
    { id: 'signals', title: 'Semnale și interacțiune' },
    { id: 'gameplay-ui', title: 'UI pentru gameplay' },
    { id: 'menus', title: 'Meniuri și ecrane' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentație Godot - UI', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/index.html' },
    { title: 'Tutorial Control Nodes', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/control_nodes_and_ui_introduction.html' },
    { title: 'Tutorial Containers', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/gui_containers.html' },
    { title: 'Tutorial Themes', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/gui_theme.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în interfața cu utilizatorul',
      content: (
        <>
          <p className="mb-4">
            Interfața cu utilizatorul (UI) este un element crucial în orice joc. 
            O interfață bine proiectată poate îmbunătăți semnificativ experiența jucătorului, 
            oferind informații clare, control intuitiv și feedback vizual.
          </p>
          
          <p className="mb-4">
            În această sesiune, vom explora nodurile și tehnicile de bază pentru crearea interfețelor 
            în Godot Engine. Vom învăța cum să creăm elemente vizuale, să le aranjăm pe ecran, 
            să le stilizăm și să le facem interactive.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea sistemului de UI din Godot",
            "Utilizarea nodurilor Control de bază",
            "Aranjarea elementelor cu containere",
            "Stilizarea interfeței cu teme",
            "Implementarea interacțiunii prin semnale",
            "Crearea unui UI funcțional pentru gameplay",
            "Proiectarea meniurilor și a ecranelor"
          ]} />
          
          <h3 className="text-xl font-bold mb-3">Concepte de bază ale UI în Godot</h3>
          
          <p className="mb-4">
            Sistemul de UI din Godot este bazat pe noduri de tip Control, care sunt elemente vizuale 
            rectangulare ce pot fi aranjate și stilizate. Aceste noduri pot fi combinate cu containere 
            pentru a crea layout-uri flexibile și responsive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Noduri Control</h4>
              <p className="text-gray-700">
                Elemente vizuale de bază (Label, Button, TextureRect, etc.)
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Containere</h4>
              <p className="text-gray-700">
                Aranjează automat nodurile Control (HBoxContainer, VBoxContainer, GridContainer, etc.)
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Teme</h4>
              <p className="text-gray-700">
                Stilizează aspectul nodurilor (fonturi, culori, texturi, etc.)
              </p>
            </div>
          </div>
          
          <InfoBox title="CanvasLayer" icon="info" variant="primary">
            <p>
              Nodurile de UI trebuie plasate într-un CanvasLayer pentru a fi afișate pe ecran. 
              CanvasLayer permite separarea UI de restul scenei și controlul ordinii de afișare.
            </p>
            <p className="mt-2">
              Pentru a crea un CanvasLayer, adaugă un nod CanvasLayer ca și copil al scenei principale. 
              Apoi, adaugă nodurile de UI ca și copii ai CanvasLayer.
            </p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'control-nodes',
      title: 'Noduri Control de bază',
      content: (
        <>
          <p className="mb-4">
            Nodurile Control sunt elementele de bază ale interfeței. Acestea includ etichete, butoane, 
            casete de text, imagini și alte elemente vizuale.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Label</h3>
          
          <p className="mb-4">
            Label este folosit pentru a afișa text static pe ecran. Poți modifica fontul, culoarea, 
            alinierea și alte proprietăți ale textului.
          </p>
          
          <StepItem number={1} title="Adăugarea unui Label">
            <p className="mb-2">Pentru a adăuga un Label:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Label (Ctrl+A {'>'} Label)</li>
              <li>În Inspector, setează proprietatea Text cu textul dorit</li>
              <li>Modifică fontul, culoarea și alte proprietăți în secțiunea Theme Overrides</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Button</h3>
          
          <p className="mb-4">
            Button este folosit pentru a crea butoane interactive. Poți conecta semnalele pressed sau 
            released pentru a executa cod când butonul este apăsat sau eliberat.
          </p>
          
          <StepItem number={2} title="Adăugarea unui Button">
            <p className="mb-2">Pentru a adăuga un Button:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Button (Ctrl+A {'>'} Button)</li>
              <li>În Inspector, setează proprietatea Text cu textul butonului</li>
              <li>Conectează semnalul pressed sau released la o funcție în script</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemplu de conectare a semnalului pressed la un Button" language="gdscript">
{`extends Control

func _on_button_pressed():
    # Această funcție va fi executată când butonul este apăsat
    print("Butonul a fost apăsat!")`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">TextureRect</h3>
          
          <p className="mb-4">
            TextureRect este folosit pentru a afișa imagini pe ecran. Poți folosi TextureRect pentru 
            a crea fundaluri, iconițe, sau alte elemente vizuale.
          </p>
          
          <StepItem number={3} title="Adăugarea unui TextureRect">
            <p className="mb-2">Pentru a adăuga un TextureRect:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod TextureRect (Ctrl+A {'>'} TextureRect)</li>
              <li>În Inspector, setează proprietatea Texture cu imaginea dorită</li>
              <li>Modifică proprietățile Stretch Mode și Stretch Margin pentru a controla cum este afișată imaginea</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">LineEdit</h3>
          
          <p className="mb-4">
            LineEdit este folosit pentru a crea câmpuri de text editabile. Poți folosi LineEdit pentru 
            a permite jucătorilor să introducă nume, parole, sau alte informații.
          </p>
          
          <StepItem number={4} title="Adăugarea unui LineEdit">
            <p className="mb-2">Pentru a adăuga un LineEdit:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod LineEdit (Ctrl+A {'>'} LineEdit)</li>
              <li>În Inspector, setează proprietatea Text cu textul inițial</li>
              <li>Conectează semnalul text_changed sau text_entered la o funcție în script</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Alte noduri Control utile" icon="info" variant="primary">
            <p>Există multe alte noduri Control disponibile în Godot, cum ar fi:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>TextureButton: Buton cu o imagine</li>
              <li>CheckBox: Caseta de selectare</li>
              <li>Slider: Glisor pentru a selecta o valoare</li>
              <li>ProgressBar: Bară de progres</li>
              <li>RichTextLabel: Etichetă cu text formatat</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'containers',
      title: 'Containere și layout',
      content: (
        <>
          <p className="mb-4">
            Containerele sunt noduri speciale care aranjează automat nodurile Control pe ecran. 
            Acestea permit crearea layout-urilor flexibile și responsive, care se adaptează la diferite 
            rezoluții și dimensiuni de ecran.
          </p>
          
          <h3 className="text-xl font-bold mb-3">HBoxContainer și VBoxContainer</h3>
          
          <p className="mb-4">
            HBoxContainer aranjează nodurile Control orizontal, în timp ce VBoxContainer le aranjează vertical.
          </p>
          
          <StepItem number={1} title="Utilizarea HBoxContainer și VBoxContainer">
            <p className="mb-2">Pentru a utiliza HBoxContainer sau VBoxContainer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod HBoxContainer sau VBoxContainer (Ctrl+A {'>'} HBoxContainer sau VBoxContainer)</li>
              <li>Adaugă nodurile Control ca și copii ai containerului</li>
              <li>Containerul va aranja automat nodurile</li>
              <li>Modifică proprietățile Alignment și Separation pentru a controla aspectul</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">GridContainer</h3>
          
          <p className="mb-4">
            GridContainer aranjează nodurile Control într-o grilă. Poți specifica numărul de coloane 
            și containerul va aranja automat nodurile în grilă.
          </p>
          
          <StepItem number={2} title="Utilizarea GridContainer">
            <p className="mb-2">Pentru a utiliza GridContainer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod GridContainer (Ctrl+A {'>'} GridContainer)</li>
              <li>În Inspector, setează proprietatea Columns cu numărul de coloane dorit</li>
              <li>Adaugă nodurile Control ca și copii ai containerului</li>
              <li>Containerul va aranja automat nodurile în grilă</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">MarginContainer</h3>
          
          <p className="mb-4">
            MarginContainer adaugă margini în jurul nodurilor Control. Poți folosi MarginContainer pentru 
            a crea spații între elementele UI și marginile ecranului.
          </p>
          
          <StepItem number={3} title="Utilizarea MarginContainer">
            <p className="mb-2">Pentru a utiliza MarginContainer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod MarginContainer (Ctrl+A {'>'} MarginContainer)</li>
              <li>Adaugă nodul Control ca și copil al containerului</li>
              <li>În Inspector, setează proprietățile Margin Left, Margin Top, Margin Right și Margin Bottom</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">AspectRatioContainer</h3>
          
          <p className="mb-4">
            AspectRatioContainer menține raportul de aspect al nodului Control. Poți folosi 
            AspectRatioContainer pentru a te asigura că imaginile și alte elemente vizuale sunt 
            afișate corect pe diferite rezoluții.
          </p>
          
          <StepItem number={4} title="Utilizarea AspectRatioContainer">
            <p className="mb-2">Pentru a utiliza AspectRatioContainer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod AspectRatioContainer (Ctrl+A {'>'} AspectRatioContainer)</li>
              <li>Adaugă nodul Control ca și copil al containerului</li>
              <li>În Inspector, setează proprietatea Ratio cu raportul de aspect dorit</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Sfaturi pentru layout-uri responsive" icon="info" variant="primary">
            <p>Pentru a crea layout-uri responsive, ține cont de următoarele:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește containere pentru a aranja nodurile Control</li>
              <li>Setează proprietățile Size Flags pentru a controla cum se adaptează nodurile la dimensiunea ecranului</li>
              <li>Folosește AspectRatioContainer pentru a menține raportul de aspect al imaginilor</li>
              <li>Testează layout-ul pe diferite rezoluții și dimensiuni de ecran</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'themes',
      title: 'Teme și stilizare',
      content: (
        <>
          <p className="mb-4">
            Temele sunt folosite pentru a stiliza aspectul nodurilor Control. Poți folosi teme pentru 
            a modifica fonturile, culorile, texturile și alte proprietăți vizuale.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Crearea unei teme</h3>
          
          <p className="mb-4">
            Poți crea o temă nouă sau poți folosi o temă existentă.
          </p>
          
          <StepItem number={1} title="Crearea unei teme noi">
            <p className="mb-2">Pentru a crea o temă nouă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În FileSystem, apasă click dreapta {'>'} New {'>'} Theme</li>
              <li>Redenumește tema (ex: "my_theme.tres")</li>
              <li>Deschide tema făcând dublu click pe ea</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Aplicarea unei teme</h3>
          
          <p className="mb-4">
            Poți aplica o temă la un nod Control sau la o scenă întreagă.
          </p>
          
          <StepItem number={2} title="Aplicarea unei teme la un nod Control">
            <p className="mb-2">Pentru a aplica o temă la un nod Control:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Control</li>
              <li>În Inspector, setează proprietatea Theme cu tema dorită</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Aplicarea unei teme la o scenă">
            <p className="mb-2">Pentru a aplica o temă la o scenă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul rădăcină al scenei</li>
              <li>În Inspector, setează proprietatea Theme con tema dorită</li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Modificarea proprietăților temei</h3>
          
          <p className="mb-4">
            Poți modifica proprietățile temei pentru a stiliza aspectul nodurilor Control.
          </p>
          
          <StepItem number={4} title="Modificarea proprietăților temei">
            <p className="mb-2">Pentru a modifica proprietățile temei:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide tema</li>
              <li>Selectează tipul de nod Control pe care vrei să-l stilizezi (ex: "Button")</li>
              <li>Modifică proprietățile din secțiunile Font, Colors, Styles, etc.</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemplu de modificare a fontului unui Button în temă" language="gdscript">
{`# Accesează tema
var theme = load("res://my_theme.tres")

# Accesează fontul Button
var button_font = theme.get_font("font", "Button")

# Modifică dimensiunea fontului
button_font.size = 20

# Aplică modificările
theme.set_font("font", "Button", button_font)`}
          </CodeExample>
          
          <InfoBox title="Theme Overrides" icon="info" variant="primary">
            <p>Poți suprascrie proprietățile temei pentru un nod Control specific folosind Theme Overrides.</p>
            <p className="mt-2">Pentru a suprascrie proprietățile temei:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Selectează nodul Control</li>
              <li>În Inspector, accesează secțiunea Theme Overrides</li>
              <li>Modifică proprietățile dorite</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'signals',
      title: 'Semnale și interacțiune',
      content: (
        <>
          <p className="mb-4">
            Semnalele sunt folosite pentru a implementa interacțiunea între nodurile UI și restul jocului. 
            Când un eveniment are loc (ex: un buton este apăsat), un semnal este emis și poate fi conectat 
            la o funcție în script.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Conectarea semnalelor</h3>
          
          <p className="mb-4">
            Poți conecta semnale în editor sau în script.
          </p>
          
          <StepItem number={1} title="Conectarea semnalelor în editor">
            <p className="mb-2">Pentru a conecta semnale în editor:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Control care emite semnalul (ex: Button)</li>
              <li>În Node dock, selectează tab-ul Signals</li>
              <li>Selectează semnalul pe care vrei să-l conectezi (ex: pressed)</li>
              <li>Apasă pe butonul Connect</li>
              <li>Selectează nodul care va primi semnalul și funcția care va fi executată</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Conectarea semnalelor în script">
            <p className="mb-2">Pentru a conecta semnale în script:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Obține o referință la nodul care emite semnalul</li>
              <li>Folosește funcția connect pentru a conecta semnalul la o funcție</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemplu de conectare a semnalului pressed la un Button în script" language="gdscript">
{`extends Control

@onready var my_button = $Button

func _ready():
    # Conectează semnalul pressed la funcția _on_button_pressed
    my_button.connect("pressed", _on_button_pressed)

func _on_button_pressed():
    # Această funcție va fi executată când butonul este apăsat
    print("Butonul a fost apăsat!")`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Semnale comune</h3>
          
          <p className="mb-4">
            Unele semnale comune includ:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Semnale pentru Button:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>pressed: Emis când butonul este apăsat</li>
                <li>released: Emis când butonul este eliberat</li>
                <li>mouse_entered: Emis când mouse-ul intră în zona butonului</li>
                <li>mouse_exited: Emis când mouse-ul iese din zona butonului</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Semnale pentru LineEdit:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>text_changed: Emis când textul este modificat</li>
                <li>text_entered: Emis când textul este introdus (apăsând Enter)</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Utilizarea semnalelor personalizate" icon="info" variant="primary">
            <p>Poți crea semnale personalizate pentru a implementa interacțiuni mai complexe.</p>
            <p className="mt-2">Pentru a crea un semnal personalizat:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Declară semnalul în script folosind cuvântul cheie signal</li>
              <li>Emițe semnalul folosind funcția emit_signal</li>
              <li>Conectează semnalul la o funcție în alt script</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'gameplay-ui',
      title: 'UI pentru gameplay',
      content: (
        <>
          <p className="mb-4">
            UI-ul pentru gameplay oferă informații esențiale jucătorului în timpul jocului, cum ar fi:
          </p>
          
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Scor</li>
            <li>Viață</li>
            <li>Energie</li>
            <li>Inventar</li>
            <li>Harta</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Crearea unui HUD (Heads-Up Display)</h3>
          
          <p className="mb-4">
            HUD-ul este o interfață care este afișată constant pe ecran și oferă informații importante.
          </p>
          
          <StepItem number={1} title="Crearea unui HUD">
            <p className="mb-2">Pentru a crea un HUD:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a HUD-ului</li>
              <li>Adaugă noduri Label pentru a afișa scorul, viața și alte informații</li>
              <li>Adaugă noduri TextureRect pentru a afișa iconițe</li>
              <li>Folosește containere pentru a aranja elementele</li>
              <li>Conectează semnalele din joc pentru a actualiza informațiile din HUD</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemplu de actualizare a scorului în HUD" language="gdscript">
{`extends Control

@onready var score_label = $ScoreLabel

func update_score(score):
    # Actualizează textul etichetei cu scorul
    score_label.text = "Scor: " + str(score)`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Crearea unei bare de viață</h3>
          
          <p className="mb-4">
            O bară de viață afișează vizual viața jucătorului.
          </p>
          
          <StepItem number={2} title="Crearea unei bare de viață">
            <p className="mb-2">Pentru a crea o bară de viață:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod ProgressBar</li>
              <li>Setează proprietățile Min Value și Max Value cu valorile minime și maxime ale vieții</li>
              <li>Setează proprietatea Value cu valoarea curentă a vieții</li>
              <li>Modifică proprietățile din secțiunea Stylebox pentru a stiliza bara</li>
              <li>Conectează semnalele din joc pentru a actualiza valoarea barei</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Sfaturi pentru un UI eficient" icon="info" variant="primary">
            <p>Pentru a crea un UI eficient, ține cont de următoarele:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește un font lizibil și o culoare contrastantă</li>
              <li>Aranjează elementele într-un mod logic și intuitiv</li>
              <li>Oferă feedback vizual pentru interacțiuni</li>
              <li>Testează UI-ul pe diferite rezoluții și dimensiuni de ecran</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'menus',
      title: 'Meniuri și ecrane',
      content: (
        <>
          <p className="mb-4">
            Meniurile și ecranele sunt folosite pentru a oferi jucătorului opțiuni și informații, cum ar fi:
          </p>
          
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Meniul principal</li>
            <li>Meniul de pauză</li>
            <li>Ecranul de game over</li>
            <li>Ecranul de setări</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Crearea unui meniu</h3>
          
          <p className="mb-4">
            Un meniu este o interfață care oferă jucătorului opțiuni.
          </p>
          
          <StepItem number={1} title="Crearea unui meniu">
            <p className="mb-2">Pentru a crea un meniu:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a meniului</li>
              <li>Adaugă noduri Button pentru fiecare opțiune</li>
              <li>Folosește containere pentru a aranja butoanele</li>
              <li>Conectează semnalele pressed ale butoanelor la funcții care execută acțiunile corespunzătoare</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Exemplu de conectare a unui buton la o funcție care încarcă o scenă" language="gdscript">
{`extends Control

func _on_play_button_pressed():
    # Încarcă scena jocului
    get_tree().change_scene_to_file("res://scenes/game.tscn")`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Crearea unui ecran</h3>
          
          <p className="mb-4">
            Un ecran este o interfață care afișează informații.
          </p>
          
          <StepItem number={2} title="Crearea unui ecran">
            <p className="mb-2">Pentru a crea un ecran:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a ecranului</li>
              <li>Adaugă noduri Label pentru a afișa text</li>
              <li>Adaugă noduri TextureRect pentru a afișa imagini</li>
              <li>Folosește containere pentru a aranja elementele</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Gestionarea meniurilor și a ecranelor" icon="info" variant="primary">
            <p>Pentru a gestiona meniurile și ecranele, ține cont de următoarele:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Creează scene separate pentru fiecare meniu și ecran</li>
              <li>Încarcă și descarcă scenele după necesități</li>
              <li>Folosește semnale pentru a comunica între meniuri, ecrane și restul jocului</li>
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
            Acum că am învățat despre nodurile Control, containere, teme și semnale, 
            să creăm un UI simplu pentru un joc.
          </p>
          
          <StepItem number={1} title="Crearea unui HUD">
            <p className="mb-2">Creează un HUD care afișează scorul și viața jucătorului.</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a HUD-ului</li>
              <li>Adaugă noduri Label pentru a afișa scorul și viața</li>
              <li>Adaugă un nod ProgressBar pentru a afișa vizual viața</li>
              <li>Folosește un HBoxContainer pentru a aranja elementele orizontal</li>
              <li>Conectează semnalele din joc pentru a actualiza scorul și viața</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Crearea unui meniu de pauză">
            <p className="mb-2">Creează un meniu de pauză care oferă jucătorului opțiuni.</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a meniului de pauză</li>
              <li>Adaugă noduri Button pentru opțiunile Resume, Settings și Quit</li>
              <li>Folosește un VBoxContainer pentru a aranja butoanele vertical</li>
              <li>Conectează semnalele pressed ale butoanelor la funcții care execută acțiunile corespunzătoare</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Crearea unui ecran de game over">
            <p className="mb-2">Creează un ecran de game over care afișează scorul final și oferă jucătorului opțiunea de a reîncepe jocul.</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Control ca rădăcină a ecranului de game over</li>
              <li>Adaugă noduri Label pentru a afișa scorul final și mesajul "Game Over"</li>
              <li>Adaugă un nod Button pentru opțiunea Restart</li>
              <li>Folosește un VBoxContainer pentru a aranja elementele vertical</li>
              <li>Conectează semnalul pressed al butonului Restart la o funcție care reîncarcă scena jocului</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Extinderea proiectului" icon="star" variant="secondary">
            <p>Poți extinde proiectul adăugând:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Un meniu principal</li>
              <li>Un ecran de setări</li>
              <li>Un sistem de inventar</li>
              <li>O hartă</li>
            </ul>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout 
      title="Interfața cu Utilizatorul în Godot" 
      subtitle="Creează interfețe intuitive și atractive pentru jocurile tale" 
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session5;
