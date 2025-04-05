
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'control-nodes', title: 'Noduri Control' },
    { id: 'containers', title: 'Containere' },
    { id: 'theme', title: 'Sistemul de teme' },
    { id: 'ui-popup', title: 'Meniuri și ferestre' },
    { id: 'ui-interactiv', title: 'UI interactiv' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentație Godot - UI', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/index.html' },
    { title: 'User Interface Design in Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_theme_editor.html' },
    { title: 'Control Nodes Overview', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/control_node_gallery.html' },
    { title: 'UI Game Examples', url: 'https://github.com/godotengine/godot-demo-projects/tree/master/gui' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în UI și sisteme de meniuri',
      content: (
        <>
          <p className="mb-4">
            Interfața utilizator (UI) și sistemele de meniuri sunt componente esențiale ale oricărui joc, 
            oferind jucătorilor modalități de a interacționa cu jocul, de a naviga prin opțiuni, 
            și de a primi feedback despre progresul lor.
          </p>
          
          <p className="mb-4">
            În această sesiune, vom explora sistemul de UI din Godot Engine, 
            învățând cum să creăm și să personalizăm interfețe intuitive și atrăgătoare 
            pentru jocurile noastre.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea nodurilor Control pentru construirea UI",
            "Utilizarea containerelor pentru layout-uri responsive",
            "Crearea și personalizarea temelor pentru UI consistent",
            "Implementarea meniurilor și ferestrelor pop-up",
            "Animarea elementelor de interfață pentru feedback vizual",
            "Crearea unui HUD funcțional pentru joc"
          ]} />
          
          <h3 className="text-xl font-bold mb-3">Componentele sistemului de UI în Godot</h3>
          
          <p className="mb-4">
            Godot oferă un sistem robust pentru crearea interfețelor utilizator, bazat pe mai multe 
            componente cheie care lucrează împreună.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Noduri Control</h4>
              <p className="text-gray-700">
                Clasa de bază pentru toate elementele de UI. Toate componentele vizuale 
                de interfață derivă din această clasă și moștenesc proprietățile sale.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Containere</h4>
              <p className="text-gray-700">
                Organizează și aranjează alte noduri Control într-un layout specific
                (orizontal, vertical, grilă, etc.), facilitând UI-uri responsive.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Teme</h4>
              <p className="text-gray-700">
                Definesc aspectul vizual al elementelor UI (culori, fonturi, stiluri),
                permițând un design consistent în întreaga aplicație.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de interfețe pentru jocuri</h3>
          
          <p className="mb-4">
            În jocuri, avem nevoie de diferite tipuri de interfețe pentru scopuri variate:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Interfețe de joc (HUD):</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Afișează informații în timpul gameplay-ului</li>
                <li>Scor, viață, muniție, resurse, minimapă, etc.</li>
                <li>Trebuie să fie non-intruzive dar ușor de citit</li>
                <li>Adesea personalizate pentru stilul jocului</li>
                <li>Pot fi staționare sau pot urma gameplay-ul</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Meniuri și ecrane:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Meniu principal, selecție nivel, opțiuni</li>
                <li>Inventar, hartă, jurnal de misiuni</li>
                <li>Ecrane de pauză, game over, victorie</li>
                <li>Tutoriale și ferestre informative</li>
                <li>Meniuri de cumpărături/upgrade-uri</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Principii de design UI pentru jocuri" icon="info" variant="primary">
            <p>La crearea interfețelor pentru jocuri, ține cont de următoarele principii:</p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Claritate</strong> - Informațiile importante trebuie să fie ușor de citit și înțeles</li>
              <li><strong>Consistență</strong> - Menține un stil și comportament consistent în tot jocul</li>
              <li><strong>Feedback</strong> - Oferă feedback vizual și auditiv pentru acțiunile utilizatorului</li>
              <li><strong>Accesibilitate</strong> - Asigură-te că UI-ul este accesibil pentru toți jucătorii</li>
              <li><strong>Contextualitate</strong> - Afișează doar informațiile relevante pentru contextul curent</li>
              <li><strong>Estetică</strong> - UI-ul ar trebui să complementeze stilul vizual al jocului</li>
            </ul>
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
            Nodurile Control sunt elementele fundamentale ale sistemului de UI în Godot. 
            Ele derivă din clasa Control și formează blocurile de construcție pentru orice interfață.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Proprietăți comune ale nodurilor Control</h3>
          
          <p className="mb-4">
            Toate nodurile Control partajează un set de proprietăți de bază care le permit 
            să funcționeze în sistemul de UI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Proprietăți de dimensiune și poziție:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Rect</strong>: Poziția și dimensiunea dreptunghiului controlului</li>
                <li><strong>Min Size</strong>: Dimensiunea minimă a controlului</li>
                <li><strong>Size Flags</strong>: Cum controlul își ajustează dimensiunea în containere</li>
                <li><strong>Anchors</strong>: Punctele de ancorare pentru poziționarea relativă</li>
                <li><strong>Margins</strong>: Marginile față de ancorele respective</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Proprietăți de aspect și comportament:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Focus</strong>: Gestionarea focalizării pentru navigarea cu tastatura</li>
                <li><strong>Mouse</strong>: Cum controlul răspunde la input-ul mouse-ului</li>
                <li><strong>Theme</strong>: Suprascrierea aspectului specific acestui control</li>
                <li><strong>Visibility</strong>: Dacă controlul este vizibil sau nu</li>
                <li><strong>Modulate</strong>: Culoarea și transparența generală</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Noduri Control comune</h3>
          
          <p className="mb-4">
            Godot oferă o varietate de noduri Control pre-construite pentru diferite scopuri:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Label</h4>
              <p className="mb-2">Afișează text static, neinteractiv.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Text simplu sau cu formatare</li>
                <li>Aliniament și ștergere text</li>
                <li>Suport pentru fonturi personalizate</li>
                <li>Poate folosi efecte precum umbră</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Button</h4>
              <p className="mb-2">Element interactiv care poate fi apăsat.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Emite semnal când este apăsat</li>
                <li>Poate conține text sau icon</li>
                <li>Stări diferite: normal, hover, pressed</li>
                <li>Toggle sau buton normal</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">TextureRect</h4>
              <p className="mb-2">Afișează o textură/imagine.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Diverse moduri de redimensionare</li>
                <li>Poate fi interactiv sau nu</li>
                <li>Util pentru iconuri, fundaluri</li>
                <li>Suport pentru transparență</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">LineEdit</h4>
              <p className="mb-2">Câmp de text editabil pe o singură linie.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Pentru input de la utilizator</li>
                <li>Poate fi limitat sau validat</li>
                <li>Suport pentru text secret (parole)</li>
                <li>Placeholders și formatare</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Panel</h4>
              <p className="mb-2">Fundal stilizat pentru alte controale.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Container vizual</li>
                <li>Poate avea borduri și umbrele</li>
                <li>Fundal pentru grupuri de controale</li>
                <li>Util pentru organizarea vizuală</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">ProgressBar</h4>
              <p className="mb-2">Indicator vizual pentru progres.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Pentru viață, loading, progres</li>
                <li>Valoare minimă și maximă</li>
                <li>Poate fi orizontal sau vertical</li>
                <li>Complet stilizabil</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Crearea și configurarea unui buton">
            <p className="mb-2">Să creăm un buton simplu și să-l configurăm:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod Button la scena ta</li>
              <li>În Inspector, setează Text la "Start Game"</li>
              <li>Ajustează proprietățile de poziție și dimensiune
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Fie direct prin setarea Rect {'>'} Position și Rect {'>'} Size</li>
                  <li>Fie prin manipularea vizuală în editor</li>
                </ul>
              </li>
              <li>Personalizează aspectul butonului
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Modifică Custom Fonts dacă dorești un font specific</li>
                  <li>Ajustează Custom Colors pentru culorile textului</li>
                  <li>Opțional, adaugă un Icon și configurează-l</li>
                </ul>
              </li>
              <li>Conectează semnalul "pressed" la un script pentru a răspunde când butonul este apăsat</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru gestionarea butonului" language="gdscript">
{`extends Control

func _ready():
    # Conectăm semnalul butonului la o funcție din acest script
    $StartButton.connect("pressed", Callable(self, "_on_start_button_pressed"))
    
    # Sau alternativ, poți folosi editorul pentru a conecta semnalul
    # și apoi doar implementa funcția

func _on_start_button_pressed():
    print("Butonul de start a fost apăsat!")
    # Aici poți adăuga logica pentru începerea jocului
    # De exemplu:
    get_tree().change_scene_to_file("res://scenes/game.tscn")
    
    # Sau poți emite un semnal către un nod părinte
    emit_signal("game_started")`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Noduri complexe pentru UI avansat</h3>
          
          <p className="mb-4">
            Pe lângă controalele de bază, Godot oferă și noduri mai complexe pentru interfețe avansate:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Controale avansate:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>TabContainer</strong>: Pentru interfețe cu file/tab-uri</li>
              <li><strong>ItemList</strong>: Listă de elemente selectabile</li>
              <li><strong>Tree</strong>: Afișare ierarhică a datelor</li>
              <li><strong>RichTextLabel</strong>: Text formatat cu imagini, hyperlink-uri, etc.</li>
              <li><strong>SpinBox</strong>: Selector numeric cu butoane de increment/decrement</li>
              <li><strong>ColorPicker</strong>: Selector de culoare</li>
              <li><strong>Slider</strong>: Control glisant pentru valori</li>
              <li><strong>ScrollContainer</strong>: Container cu scroll pentru conținut mare</li>
            </ul>
          </div>
          
          <StepItem number={2} title="Crearea unui meniu de opțiuni">
            <p className="mb-2">Să creăm un meniu de opțiuni simplu folosind diferite controale:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un Panel ca fundal pentru opțiuni</li>
              <li>Adaugă un Label pentru titlul meniului ("Options")</li>
              <li>Pentru volumul muzicii:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă un Label ("Music Volume:")</li>
                  <li>Adaugă un HSlider (slider orizontal)</li>
                  <li>Configurează Range {'>'} Min Value la 0 și Max Value la 100</li>
                  <li>Setează o valoare inițială (ex: 80)</li>
                </ul>
              </li>
              <li>Pentru opțiuni de fullscreen:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă un CheckBox</li>
                  <li>Setează Text la "Fullscreen"</li>
                </ul>
              </li>
              <li>Adaugă un OptionButton pentru dificultate:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă elemente: "Easy", "Normal", "Hard"</li>
                </ul>
              </li>
              <li>La final, adaugă butoane "Save" și "Cancel"</li>
            </ol>
          </StepItem>
          
          <InfoBox title="Customizarea controalelor" icon="star" variant="secondary">
            <p>
              Fiecare control poate fi personalizat în multiple moduri:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Prin proprietăți direct în Inspector</li>
              <li>Prin suprascrierea proprietăților de temă specifice controlului</li>
              <li>Prin conectarea semnalelor pentru comportament personalizat</li>
              <li>Prin extinderea clasei controlului într-un script</li>
              <li>Prin crearea de stiluri personalizate în sistemul de teme (vom explora mai târziu)</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'containers',
      title: 'Containere și layout-uri',
      content: (
        <>
          <p className="mb-4">
            Containerele sunt noduri specializate care organizează și aranjează automat alte controale. 
            Ele sunt esențiale pentru crearea de interfețe responsive care se adaptează la diferite 
            rezoluții și dimensiuni de ecran.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de containere</h3>
          
          <p className="mb-4">
            Godot oferă mai multe tipuri de containere, fiecare cu propriul său mod de 
            organizare a conținutului:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">VBoxContainer / HBoxContainer</h4>
              <p className="mb-2">Aranjează controalele într-o coloană (V) sau linie (H).</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Elementele sunt plasate secvențial</li>
                <li>Controlează spațierea între elemente</li>
                <li>Util pentru meniuri, liste, butoane în rând</li>
                <li>Poate alinia conținutul (stânga, centru, dreapta)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">GridContainer</h4>
              <p className="mb-2">Aranjează controalele într-o grilă.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Definești numărul de coloane</li>
                <li>Umple rândurile de la stânga la dreapta</li>
                <li>Toate celulele au aceeași dimensiune</li>
                <li>Perfect pentru grile de butoane, inventare</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">CenterContainer</h4>
              <p className="mb-2">Centrează un singur control în spațiul disponibil.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Centrează copilul atât pe X cât și pe Y</li>
                <li>Util pentru dialoguri, ferestre pop-up</li>
                <li>Simplu dar foarte utilizat</li>
                <li>Poate conține alt container pentru grupuri centrate</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">MarginContainer</h4>
              <p className="mb-2">Adaugă margini în jurul conținutului.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Controlează spațiul din jurul conținutului</li>
                <li>Margini pot fi diferite pentru fiecare latură</li>
                <li>Combină-l cu alte containere pentru structură</li>
                <li>Util pentru padding consistent</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Crearea unui meniu folosind containere">
            <p className="mb-2">Să construim un meniu principal utilizând containere:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Începe cu un nod Control sau CanvasLayer ca rădăcină</li>
              <li>Adaugă un MarginContainer pentru a crea margini în jurul întregului UI</li>
              <li>În interiorul MarginContainer, adaugă un VBoxContainer</li>
              <li>La începutul VBoxContainer, adaugă un Label pentru titlul jocului</li>
              <li>Adaugă un CenterContainer pentru a centra butoanele</li>
              <li>În interiorul CenterContainer, adaugă un alt VBoxContainer pentru butoane</li>
              <li>Adaugă butoane pentru "Play", "Options", "Credits", "Quit"</li>
              <li>Configurează spațierea și marginile pentru a obține aspectul dorit</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Structura codului pentru un meniu principal" language="gdscript">
{`extends Control

func _ready():
    # Conectăm butoanele la funcțiile corespunzătoare
    $MarginContainer/VBoxContainer/CenterContainer/Buttons/PlayButton.connect("pressed", Callable(self, "_on_play_button_pressed"))
    $MarginContainer/VBoxContainer/CenterContainer/Buttons/OptionsButton.connect("pressed", Callable(self, "_on_options_button_pressed"))
    $MarginContainer/VBoxContainer/CenterContainer/Buttons/CreditsButton.connect("pressed", Callable(self, "_on_credits_button_pressed"))
    $MarginContainer/VBoxContainer/CenterContainer/Buttons/QuitButton.connect("pressed", Callable(self, "_on_quit_button_pressed"))

func _on_play_button_pressed():
    # Schimbăm la scena principală a jocului
    get_tree().change_scene_to_file("res://scenes/game.tscn")

func _on_options_button_pressed():
    # Afișăm meniul de opțiuni
    var options_menu = load("res://scenes/options_menu.tscn").instantiate()
    add_child(options_menu)

func _on_credits_button_pressed():
    # Afișăm creditele
    var credits_scene = load("res://scenes/credits.tscn").instantiate()
    add_child(credits_scene)

func _on_quit_button_pressed():
    # Ieșim din joc
    get_tree().quit()`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Flags de dimensiune și comportament responsive</h3>
          
          <p className="mb-4">
            Pentru ca interfețele să se adapteze la diferite dimensiuni de ecran, 
            containerele și controalele folosesc "size flags" pentru a defini comportamentul lor.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Size Flags principale:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Fill</strong>: Controlul se extinde pentru a umple spațiul disponibil</li>
              <li><strong>Expand</strong>: Controlul primește o pondere pentru distribuirea spațiului rămas</li>
              <li><strong>Shrink Begin/Center/End</strong>: Controlul se micșorează și se aliniază</li>
            </ul>
            <p className="mt-2">
              Size flags pot fi setate separat pentru direcția orizontală și verticală, 
              oferind control precis asupra modului în care elementele se comportă.
            </p>
          </div>
          
          <StepItem number={2} title="Crearea unui layout responsive">
            <p className="mb-2">Să creăm un HUD responsiv pentru un joc:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un CanvasLayer pentru a te asigura că UI-ul stă deasupra jocului</li>
              <li>Adaugă un MarginContainer pentru a crea margini în jurul ecranului</li>
              <li>Adaugă un VBoxContainer pentru organizarea verticală a elementelor</li>
              <li>Pentru bara de sus:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă un HBoxContainer</li>
                  <li>În stânga, adaugă un HBoxContainer pentru viață/energie</li>
                  <li>În dreapta, adaugă un Label pentru scor</li>
                  <li>Setează size_flags_horizontal = EXPAND | FILL pentru Label-ul de scor</li>
                  <li>Setează alignment = HORIZONTAL_ALIGNMENT_RIGHT pentru Label-ul de scor</li>
                </ul>
              </li>
              <li>Adaugă un Control cu size_flags_vertical = EXPAND pentru a umple spațiul central</li>
              <li>Pentru bara de jos:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Adaugă un HBoxContainer</li>
                  <li>Adaugă elementele necesare (muniție, inventar, etc.)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Noduri Control Layer pentru UI complex</h3>
          
          <p className="mb-4">
            Pentru interfețe mai complexe, Godot oferă noduri specializate pentru gestionarea layerelor:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">CanvasLayer</h4>
              <p className="mb-2">Creează un strat separat pentru elementele de UI.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Asigură că UI-ul se afișează deasupra jocului</li>
                <li>Poate avea prioritate diferită față de alte straturi</li>
                <li>Nu este afectat de camera jocului</li>
                <li>Util pentru HUD, meniuri pop-up</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Control</h4>
              <p className="mb-2">Nodul rădăcină pentru orice element de UI.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Poate funcționa ca un container generic</li>
                <li>Poate avea propriul său rect și ancorare</li>
                <li>Poate răspunde la input-uri</li>
                <li>Bază pentru toate elementele de interfață</li>
              </ul>
            </div>
          </div>
          
          <InfoBox title="Sfaturi pentru layout-uri responsive" icon="info" variant="primary">
            <p>
              Pentru a crea interfețe care se adaptează bine la diferite dimensiuni de ecran:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Folosește containere în loc de poziționare fixă</li>
              <li>Folosește ancorele pentru a defini cum se comportă elementele la redimensionare</li>
              <li>Utilizează size flags pentru a controla distribuirea spațiului</li>
              <li>Testează UI-ul la diferite rezoluții și orientări</li>
              <li>Folosește un MarginContainer extern pentru a asigura margini sigure</li>
              <li>Creează versiuni separate pentru desktop și mobile dacă este necesar</li>
              <li>Consideră utilizarea unui script care ajustează UI-ul în funcție de dimensiunea ecranului</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'theme',
      title: 'Sistemul de teme în Godot',
      content: (
        <>
          <p className="mb-4">
            Sistemul de teme în Godot permite personalizarea aspectului vizual al controalelor UI 
            într-un mod consistent și reutilizabil. În loc să stilizezi fiecare control individual, 
            poți defini o temă care se aplică automat la toate controalele.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Ce sunt temele?</h3>
          
          <p className="mb-4">
            O temă în Godot este o resursă care definește cum arată controalele UI, 
            incluzând culori, fonturi, stiluri, și texturi pentru diferite stări ale controalelor.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Componente ale unei teme:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Styles</strong>: Definesc aspectul vizual al controalelor (borduri, fundal, etc.)</li>
              <li><strong>Colors</strong>: Culorile utilizate de controale în diferite stări</li>
              <li><strong>Constants</strong>: Valori numerice constante (margini, spațiere, etc.)</li>
              <li><strong>Fonts</strong>: Fonturile utilizate pentru text</li>
              <li><strong>Icons</strong>: Iconițele utilizate de controale</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea unei teme personalizate">
            <p className="mb-2">Să creăm o temă de bază pentru jocul nostru:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În FileSystem, click dreapta {'>'} New Resource</li>
              <li>Caută și selectează "Theme"</li>
              <li>Salvează tema cu un nume (ex: "game_theme.tres")</li>
              <li>Deschide tema făcând dublu click pe ea</li>
              <li>În editorul de teme, poți acum să personalizezi diverse aspecte:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Selectează tipul de control (ex: Button) din dropdown</li>
                  <li>Modifică proprietățile pentru acel tip de control</li>
                  <li>Adaugă override-uri pentru culori, fonturi, etc.</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Personalizarea culorilor și fonturilor">
            <p className="mb-2">Să personalizăm culorile și fonturile temei:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În editorul de teme, mergi la secțiunea "Default"</li>
              <li>Pentru adăugarea unui font personalizat:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Click pe "Fonts" {'>'} "Add Item"</li>
                  <li>Numește-l "font" sau "default_font"</li>
                  <li>Apasă pe "[empty]" și alege "New DynamicFont"</li>
                  <li>În DynamicFont, la Font {'>'} FontData, încarcă fontul tău .ttf</li>
                  <li>Ajustează Size și alte proprietăți după necesități</li>
                </ul>
              </li>
              <li>Pentru adăugarea culorilor:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Click pe "Colors" {'>'} "Add Item"</li>
                  <li>Adaugă culori precum "font_color", "font_focus_color", etc.</li>
                  <li>Setează culorile potrivite pentru tema jocului tău</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Personalizarea stilurilor pentru butoane">
            <p className="mb-2">Să creăm stiluri personalizate pentru butoane:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În editorul de teme, selectează "Button" din dropdown</li>
              <li>Click pe "Styles" {'>'} "Add Item"</li>
              <li>Adaugă stiluri pentru diferitele stări ale butonului:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>"normal" - stilul în stare normală</li>
                  <li>"hover" - stilul când mouse-ul este deasupra</li>
                  <li>"pressed" - stilul când butonul este apăsat</li>
                  <li>"disabled" - stilul când butonul este dezactivat</li>
                </ul>
              </li>
              <li>Pentru fiecare stil, apasă pe "[empty]" și alege "New StyleBoxFlat" sau "New StyleBoxTexture"</li>
              <li>Pentru StyleBoxFlat, poți configura:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Bg Color - culoarea de fundal</li>
                  <li>Border Width - lățimea bordurii</li>
                  <li>Border Color - culoarea bordurii</li>
                  <li>Corner Radius - rotunjirea colțurilor</li>
                  <li>Shadow - umbre</li>
                </ul>
              </li>
              <li>Pentru StyleBoxTexture, poți utiliza texturi pentru un aspect mai personalizat</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Aplicarea temei prin script" language="gdscript">
{`extends Control

func _ready():
    # Încărcăm tema noastră
    var custom_theme = load("res://ui/themes/game_theme.tres")
    
    # O aplicăm la acest control (și toți copiii săi)
    theme = custom_theme
    
    # Alternativ, poți seta tema doar pentru un anumit control
    $MainMenu/PlayButton.theme = custom_theme
    
    # Sau poți suprascrie doar anumite proprietăți
    var button_style = StyleBoxFlat.new()
    button_style.bg_color = Color(0.2, 0.6, 0.8, 1.0)
    button_style.border_width_all = 2
    button_style.border_color = Color(0.1, 0.4, 0.6, 1.0)
    button_style.corner_radius_all = 5
    
    # Aplicăm stilul specific acestui buton
    $MainMenu/SpecialButton.add_theme_stylebox_override("normal", button_style)`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Hereditatea temelor și suprascrierea</h3>
          
          <p className="mb-4">
            Sistemul de teme în Godot urmează o ierarhie care permite suprascrierea selectivă 
            a proprietăților:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Ordinea de prioritate (de la cea mai înaltă):</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li><strong>Overrides la nivel de control</strong>: Setate direct pe control</li>
              <li><strong>Tema specifică a controlului</strong>: Setată prin proprietatea theme a controlului</li>
              <li><strong>Tema părintelui</strong>: Moștenită de la nodul părinte</li>
              <li><strong>Tema proiectului</strong>: Setată în Project Settings</li>
              <li><strong>Tema implicită a motorului</strong>: Stilul de bază Godot</li>
            </ol>
            <p className="mt-2">
              Aceasta înseamnă că poți avea o temă de bază pentru întregul proiect, 
              apoi să o personalizezi pentru secțiuni specifice, și în final să suprascrii 
              proprietăți individuale pentru controale specifice.
            </p>
          </div>
          
          <InfoBox title="Sfaturi pentru sistemul de teme" icon="star" variant="secondary">
            <p>
              Pentru a utiliza eficient sistemul de teme:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Creează o temă de bază pentru întregul joc care reflectă stilul vizual general</li>
              <li>Utilizează variante ale temei pentru secțiuni diferite ale jocului (meniu principal vs. HUD)</li>
              <li>Definește constante pentru spațiere și margini pentru a menține consistența</li>
              <li>Folosește variabile de culoare pentru a putea schimba ușor schema de culori</li>
              <li>Testează tema cu toate controalele pentru a asigura consistența</li>
              <li>Consideră adăugarea de versiuni alternative pentru diferite setări (mod întunecat/luminos)</li>
              <li>Exportă și importă teme pentru reutilizare între proiecte</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'ui-popup',
      title: 'Meniuri pop-up și ferestre modale',
      content: (
        <>
          <p className="mb-4">
            Meniurile pop-up și ferestrele modale sunt componente esențiale ale oricărei interfețe 
            de joc. Ele permit afișarea temporară a informațiilor sau opțiunilor fără a părăsi 
            ecranul curent.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri de ferestre pop-up</h3>
          
          <p className="mb-4">
            În jocuri, întâlnim diferite tipuri de ferestre pop-up, fiecare cu scopul său specific:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Dialoguri de confirmare</h4>
              <p className="mb-2">Cer utilizatorului să confirme o acțiune.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>"Ești sigur că vrei să ieși din joc?"</li>
                <li>"Vrei să ștergi acest profil?"</li>
                <li>De obicei au butoane "Da/Nu" sau "OK/Anulare"</li>
                <li>Pot bloca interacțiunea cu restul UI-ului</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Meniuri contextuale</h4>
              <p className="mb-2">Afișează opțiuni în funcție de context.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Apar când se face click dreapta pe un element</li>
                <li>Conțin acțiuni relevante pentru elementul selectat</li>
                <li>Dispar când se face click în altă parte</li>
                <li>Exemple: meniuri de inventar, opțiuni pentru obiecte</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Ferestre de notificare</h4>
              <p className="mb-2">Afișează informații importante.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Mesaje de succes sau eroare</li>
                <li>Notificări pentru realizări/achievement-uri</li>
                <li>De obicei dispar automat după un timp</li>
                <li>Pot fi semi-transparente pentru a nu întrerupe flow-ul</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Meniuri de pauză</h4>
              <p className="mb-2">Apar când jocul este pus pe pauză.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Conțin opțiuni precum "Resume", "Options", "Quit"</li>
                <li>De obicei acoperă întregul ecran sau îl întunecă</li>
                <li>Pun jocul pe pauză (opresc procesarea)</li>
                <li>Pot include sub-meniuri pentru setări diverse</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Crearea unui dialog de confirmare">
            <p className="mb-2">Să implementăm un dialog simplu de confirmare:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un Control ca rădăcină</li>
              <li>Adaugă un ColorRect care acoperă întregul ecran cu o culoare semi-transparentă (overlay)</li>
              <li>Adaugă un CenterContainer pentru a centra dialogul</li>
              <li>În interiorul CenterContainer, adaugă un Panel pentru fundalul dialogului</li>
              <li>În Panel, adaugă un VBoxContainer pentru a organiza conținutul</li>
              <li>Adaugă un Label pentru titlul dialogului</li>
              <li>Adaugă un alt Label pentru textul dialogului</li>
              <li>Adaugă un HBoxContainer pentru butoane</li>
              <li>Adaugă butoanele "Yes" și "No" sau "OK" și "Cancel"</li>
              <li>Asigură-te că dialogul are o dimensiune rezonabilă și este bine poziționat</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru dialogul de confirmare" language="gdscript">
{`extends Control

signal confirmed
signal cancelled

# Textul dialogului poate fi setat din exterior
@export var dialog_title = "Confirmare"
@export var dialog_text = "Ești sigur că vrei să continui?"

func _ready():
    # Setăm textul din proprietățile exportate
    $CenterContainer/Panel/VBoxContainer/TitleLabel.text = dialog_title
    $CenterContainer/Panel/VBoxContainer/MessageLabel.text = dialog_text
    
    # Conectăm butoanele
    $CenterContainer/Panel/VBoxContainer/Buttons/YesButton.connect("pressed", Callable(self, "_on_yes_pressed"))
    $CenterContainer/Panel/VBoxContainer/Buttons/NoButton.connect("pressed", Callable(self, "_on_no_pressed"))
    
    # Oprim procesarea în restul jocului (opțional)
    get_tree().paused = true
    
    # Facem overlay-ul să se poată da click pentru a închide dialogul (opțional)
    $Overlay.connect("gui_input", Callable(self, "_on_overlay_input"))

func _on_yes_pressed():
    # Emitem semnalul că utilizatorul a confirmat
    emit_signal("confirmed")
    _close_dialog()

func _on_no_pressed():
    # Emitem semnalul că utilizatorul a anulat
    emit_signal("cancelled")
    _close_dialog()
    
func _on_overlay_input(event):
    # Dacă se face click pe overlay, închidem dialogul (opțional)
    if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
        _close_dialog()
        emit_signal("cancelled")

func _close_dialog():
    # Reluăm procesarea jocului dacă am oprit-o
    get_tree().paused = false
    # Îndepărtăm dialogul
    queue_free()

# Funcție pentru a seta textul din exterior
func set_text(title, message):
    dialog_title = title
    dialog_text = message
    # Dacă dialogul este deja inițializat, actualizăm și textul vizibil
    if is_inside_tree():
        $CenterContainer/Panel/VBoxContainer/TitleLabel.text = title
        $CenterContainer/Panel/VBoxContainer/MessageLabel.text = message`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Meniuri de pauză și starea jocului</h3>
          
          <p className="mb-4">
            Meniurile de pauză necesită o atenție specială, deoarece implică oprirea temporară 
            a gameplay-ului. În Godot, acest lucru poate fi realizat folosind proprietatea "paused" 
            a arborelui de scenă.
          </p>
          
          <StepItem number={2} title="Implementarea unui meniu de pauză">
            <p className="mb-2">Să creăm un meniu de pauză funcțional:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă nouă cu un CanvasLayer ca rădăcină (pentru a fi deasupra gameplay-ului)</li>
              <li>Setează Layer la o valoare mare (ex: 10) pentru a fi deasupra altor UI</li>
              <li>Adaugă un ColorRect care acoperă ecranul cu un efect de întunecare (semi-transparent)</li>
              <li>Adaugă un CenterContainer pentru centrarea meniului</li>
              <li>În CenterContainer, adaugă un Panel pentru fundalul meniului</li>
              <li>În Panel, adaugă un VBoxContainer cu:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Label pentru titlul "Pauză"</li>
                  <li>Butoane pentru "Resume", "Settings", "Main Menu", "Quit"</li>
                </ul>
              </li>
              <li>Inițial, setează scena ca vizibilă = false</li>
              <li>Adaugă un script care gestionează afișarea/ascunderea meniului și pauza jocului</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru meniul de pauză" language="gdscript">
{`extends CanvasLayer

# Indică dacă jocul este în pauză
var is_paused = false

func _ready():
    # Inițial meniul este ascuns
    visible = false
    
    # Conectăm butoanele
    $CenterContainer/Panel/VBoxContainer/ResumeButton.connect("pressed", Callable(self, "_on_resume_pressed"))
    $CenterContainer/Panel/VBoxContainer/SettingsButton.connect("pressed", Callable(self, "_on_settings_pressed"))
    $CenterContainer/Panel/VBoxContainer/MainMenuButton.connect("pressed", Callable(self, "_on_main_menu_pressed"))
    $CenterContainer/Panel/VBoxContainer/QuitButton.connect("pressed", Callable(self, "_on_quit_pressed"))

func _input(event):
    # Verificăm dacă tasta Escape a fost apăsată
    if event.is_action_pressed("ui_cancel"):  # Sau o altă acțiune pentru pauză
        # Comutăm starea de pauză
        toggle_pause()

func toggle_pause():
    is_paused = !is_paused
    
    if is_paused:
        # Afișăm meniul și punem jocul pe pauză
        visible = true
        get_tree().paused = true
    else:
        # Ascundem meniul și reluăm jocul
        visible = false
        get_tree().paused = false

func _on_resume_pressed():
    # Reluăm jocul
    toggle_pause()

func _on_settings_pressed():
    # Afișăm meniul de setări
    # Poate fi implementat ca un sub-meniu sau o scenă separată
    var settings_menu = load("res://ui/settings_menu.tscn").instantiate()
    add_child(settings_menu)
    settings_menu.connect("closed", Callable(self, "_on_settings_closed"))

func _on_settings_closed():
    # Asigurăm că meniul de pauză rămâne vizibil după închiderea setărilor
    visible = true

func _on_main_menu_pressed():
    # Întrebăm utilizatorul dacă e sigur (opțional)
    var confirm_dialog = load("res://ui/confirm_dialog.tscn").instantiate()
    confirm_dialog.set_text("Părăsire nivel", "Ești sigur că vrei să te întorci la meniul principal? Progresul nesalvat va fi pierdut.")
    add_child(confirm_dialog)
    
    # Conectăm semnalele dialogului
    confirm_dialog.connect("confirmed", Callable(self, "_return_to_main_menu"))
    confirm_dialog.connect("cancelled", Callable(self, "_dialog_cancelled"))

func _return_to_main_menu():
    # Reluăm jocul (pentru a evita probleme cu pauza)
    get_tree().paused = false
    # Revenim la meniul principal
    get_tree().change_scene_to_file("res://ui/main_menu.tscn")

func _on_quit_pressed():
    # Întrebăm utilizatorul dacă e sigur
    var confirm_dialog = load("res://ui/confirm_dialog.tscn").instantiate()
    confirm_dialog.set_text("Ieșire", "Ești sigur că vrei să ieși din joc?")
    add_child(confirm_dialog)
    
    # Conectăm semnalele dialogului
    confirm_dialog.connect("confirmed", Callable(self, "_quit_game"))
    confirm_dialog.connect("cancelled", Callable(self, "_dialog_cancelled"))

func _quit_game():
    # Ieșim din joc
    get_tree().quit()

func _dialog_cancelled():
    # Ne asigurăm că meniul de pauză rămâne vizibil
    visible = true`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Ferestre modale și procesarea</h3>
          
          <p className="mb-4">
            Este important să înțelegem cum gestionăm procesarea când afișăm ferestre modale. 
            În Godot, avem câteva opțiuni:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Opțiuni pentru gestionarea stării jocului:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>get_tree().paused = true</strong>: Oprește toate nodurile care nu sunt configurate ca process_mode = PROCESS_MODE_ALWAYS</li>
              <li><strong>Grupuri de procesare</strong>: Poți pune nodurile în grupuri și să oprești/pornești procesarea pentru anumite grupuri</li>
              <li><strong>process_mode</strong>: Setează cum se comportă nodurile când arborele este pus pe pauză:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>PROCESS_MODE_PAUSABLE: Nodul se oprește când arborele este pe pauză (implicit)</li>
                  <li>PROCESS_MODE_ALWAYS: Nodul continuă să ruleze chiar și în pauză (util pentru UI)</li>
                  <li>PROCESS_MODE_DISABLED: Nodul nu procesează niciodată</li>
                  <li>PROCESS_MODE_INHERIT: Moștenește setarea de la părinte</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <InfoBox title="Animarea ferestrelor pop-up" icon="star" variant="secondary">
            <p>
              Pentru a face interfața mai dinamică și mai profesională, poți anima ferestrele pop-up:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Adaugă un AnimationPlayer la fereastra pop-up</li>
              <li>Creează animații pentru apariție (fade in, scale up) și dispariție (fade out, scale down)</li>
              <li>Redă animația de apariție în _ready()</li>
              <li>Redă animația de dispariție înainte de a închide fereastra</li>
              <li>Folosește easing pentru tranziții mai line</li>
              <li>Adaugă efecte sonore pentru deschidere/închidere</li>
              <li>Consideră efecte de blur sau desaturare pentru conținutul din fundal</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'ui-interactiv',
      title: 'UI interactiv și feedback vizual',
      content: (
        <>
          <p className="mb-4">
            Un UI interactiv și cu feedback vizual bun este esențial pentru o experiență de utilizator 
            plăcută. În această secțiune, vom explora cum să adăugăm interactivitate și feedback 
            vizual elementelor de interfață.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Principii de interactivitate UI</h3>
          
          <p className="mb-4">
            Interactivitatea de calitate urmează câteva principii cheie:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Feedback imediat</h4>
              <p className="mb-2">Utilizatorul trebuie să știe că acțiunea sa a fost recunoscută.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Schimbări vizibile când un buton este apăsat</li>
                <li>Efecte sonore pentru acțiuni</li>
                <li>Animații și efecte vizuale</li>
                <li>Confirmare vizuală pentru acțiuni complete</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Afordanță clară</h4>
              <p className="mb-2">Utilizatorul trebuie să înțeleagă ce elemente sunt interactive.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Stiluri distinctive pentru elemente interactive</li>
                <li>Cursoare diferite pentru zone interactive</li>
                <li>Highlighturi și efecte hover</li>
                <li>Iconițe și indicatori vizuali</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Consistență</h4>
              <p className="mb-2">Interacțiunile similare trebuie să funcționeze în mod similar.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Aceleași efecte pentru aceleași tipuri de interacțiuni</li>
                <li>Scheme de culori consistente pentru stări</li>
                <li>Timinguri similare pentru animații</li>
                <li>Comportament predictibil în tot jocul</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-bold text-course-purple mb-2">Accesibilitate</h4>
              <p className="mb-2">UI-ul trebuie să fie utilizabil de o gamă largă de jucători.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Contrast suficient pentru text și elemente</li>
                <li>Feedback multisenzorial (vizual + audio)</li>
                <li>Control prin tastatură și gamepad, nu doar mouse</li>
                <li>Texte și elemente suficient de mari</li>
              </ul>
            </div>
          </div>
          
          <StepItem number={1} title="Implementarea efectelor hover pentru butoane">
            <p className="mb-2">Să îmbunătățim feedbackul vizual pentru butoane:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În tema jocului, creează stiluri distincte pentru stările butonului:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>"normal": Stilul de bază</li>
                  <li>"hover": Când mouse-ul este deasupra (mai luminos sau cu bordură)</li>
                  <li>"pressed": Când butonul este apăsat (ușor mai mic sau mai întunecat)</li>
                  <li>"focus": Când butonul are focus (pentru navigare cu tastatură)</li>
                </ul>
              </li>
              <li>Adaugă un script la buton pentru efecte suplimentare:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Animație de scalare la hover</li>
                  <li>Efect sonor la hover și click</li>
                  <li>Posibil un efect de particule sau glow</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru efecte avansate de buton" language="gdscript">
{`extends Button

# Parametri pentru animație
@export var hover_scale = Vector2(1.1, 1.1)
@export var press_scale = Vector2(0.95, 0.95)
@export var animation_speed = 0.1

# Referințe la noduri
@onready var hover_sound = $HoverSound
@onready var click_sound = $ClickSound
@onready var original_scale = scale

# Stare
var is_hovered = false

func _ready():
    # Conectăm semnalele de mouse
    connect("mouse_entered", Callable(self, "_on_mouse_entered"))
    connect("mouse_exited", Callable(self, "_on_mouse_exited"))
    connect("button_down", Callable(self, "_on_button_down"))
    connect("button_up", Callable(self, "_on_button_up"))

func _on_mouse_entered():
    is_hovered = true
    
    # Playăm sunetul de hover
    if hover_sound:
        hover_sound.play()
    
    # Animăm scala butonului
    var tween = create_tween()
    tween.tween_property(self, "scale", original_scale * hover_scale, animation_speed).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_BACK)

func _on_mouse_exited():
    is_hovered = false
    
    # Revenim la scala normală
    var tween = create_tween()
    tween.tween_property(self, "scale", original_scale, animation_speed).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_BACK)

func _on_button_down():
    # Animăm apăsarea butonului
    var tween = create_tween()
    tween.tween_property(self, "scale", original_scale * press_scale, animation_speed / 2).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_SINE)

func _on_button_up():
    # Playăm sunetul de click
    if click_sound:
        click_sound.play()
    
    # Revenim la scala de hover sau normală
    var target_scale = original_scale * (hover_scale if is_hovered else Vector2.ONE)
    var tween = create_tween()
    tween.tween_property(self, "scale", target_scale, animation_speed).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_BACK)`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Animarea elementelor UI</h3>
          
          <p className="mb-4">
            Animațiile pot îmbunătăți semnificativ experiența de utilizare a UI-ului. 
            În Godot, avem mai multe modalități de a anima elementele de interfață:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Tehnici de animare pentru UI:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Tween</strong>: Pentru animații simple și programatice</li>
              <li><strong>AnimationPlayer</strong>: Pentru animații complexe și controlate vizual</li>
              <li><strong>Animații de shader</strong>: Pentru efecte vizuale speciale</li>
              <li><strong>Sprite animations</strong>: Pentru iconițe sau elemente animate frame-by-frame</li>
              <li><strong>Particle effects</strong>: Pentru efecte speciale și accente vizuale</li>
            </ul>
          </div>
          
          <StepItem number={2} title="Animarea unui meniu principal">
            <p className="mb-2">Să animăm intrarea elementelor într-un meniu principal:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un AnimationPlayer la scena meniului principal</li>
              <li>Creează o animație "intro" de ~1 secundă</li>
              <li>Pentru titlul jocului:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Animează-l să apară din partea de sus (position)</li>
                  <li>Începe cu opacitate 0 și crește la 1 (modulate)</li>
                  <li>Adaugă un mic efect de bounce (scale)</li>
                </ul>
              </li>
              <li>Pentru butoanele de meniu:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Animează-le să apară unul câte unul cu un mic delay</li>
                  <li>Poți folosi position sau scale pentru animația de intrare</li>
                  <li>Adaugă un efect de fade in (modulate)</li>
                </ul>
              </li>
              <li>Pentru elementele decorative:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Animează-le cu efecte subtile de plutire sau rotație continuă</li>
                  <li>Folosește call method tracks pentru a porni particule sau efecte</li>
                </ul>
              </li>
              <li>Redă animația în _ready() sau când meniul devine vizibil</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Implementarea unui indicator de notificare">
            <p className="mb-2">Să creăm un sistem de notificări toast pentru joc:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă pentru notificări cu un Panel și un Label</li>
              <li>Adaugă un Timer pentru a controla durata afișării</li>
              <li>Creează animații pentru apariție și dispariție</li>
              <li>Implementează un script pentru gestionarea notificărilor</li>
              <li>Adaugă funcționalitate pentru a stiva mai multe notificări dacă apar simultan</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Sistem de notificări toast" language="gdscript">
{`extends Control

# Parametri
@export var display_time = 2.0
@export var fade_time = 0.5
@export var toast_offset = Vector2(0, 10)

# Referințe la noduri
@onready var panel = $Panel
@onready var label = $Panel/Label
@onready var timer = $Timer

# Stare
var current_position = Vector2.ZERO
var target_position = Vector2.ZERO
var is_closing = false

# Semnal pentru când notificarea s-a închis
signal toast_finished

func _ready():
    # Configurăm timerul
    timer.wait_time = display_time
    timer.one_shot = true
    timer.connect("timeout", Callable(self, "_on_timer_timeout"))
    
    # Inițial ascundem notificarea
    modulate.a = 0
    
    # Salvăm poziția țintă
    target_position = position
    
    # Setăm poziția inițială mai jos
    position = target_position + toast_offset
    
    # Animăm apariția
    show_toast()

func show_toast():
    # Pornește timerul pentru auto-închidere
    timer.start()
    
    # Animează apariția
    var tween = create_tween()
    tween.parallel().tween_property(self, "modulate:a", 1.0, fade_time).set_ease(Tween.EASE_OUT)
    tween.parallel().tween_property(self, "position", target_position, fade_time).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_BACK)

func close_toast():
    if is_closing:
        return
        
    is_closing = true
    
    # Animează dispariția
    var tween = create_tween()
    tween.parallel().tween_property(self, "modulate:a", 0.0, fade_time).set_ease(Tween.EASE_IN)
    tween.parallel().tween_property(self, "position", target_position + toast_offset, fade_time).set_ease(Tween.EASE_IN)
    tween.tween_callback(Callable(self, "_on_close_finished"))

func _on_timer_timeout():
    close_toast()

func _on_close_finished():
    # Emitem semnalul că toast-ul s-a închis
    emit_signal("toast_finished")
    # Îndepărtăm notificarea
    queue_free()

# Funcție pentru a seta textul notificării
func set_text(text):
    label.text = text

# Funcție pentru a seta tipul notificării (info, success, warning, error)
func set_type(type):
    match type:
        "info":
            panel.add_theme_stylebox_override("panel", preload("res://ui/styles/toast_info.tres"))
        "success":
            panel.add_theme_stylebox_override("panel", preload("res://ui/styles/toast_success.tres"))
        "warning":
            panel.add_theme_stylebox_override("panel", preload("res://ui/styles/toast_warning.tres"))
        "error":
            panel.add_theme_stylebox_override("panel", preload("res://ui/styles/toast_error.tres"))`}
          </CodeExample>
          
          <CodeExample title="Manager pentru gestionarea mai multor notificări" language="gdscript">
{`extends CanvasLayer

# Parametri
@export var max_toasts = 3
@export var toast_scene : PackedScene
@export var toast_spacing = 10

# Stare
var active_toasts = []
var toast_queue = []

func _ready():
    # Poziționăm layer-ul pentru a fi deasupra jocului
    layer = 100

func show_toast(text, type = "info", duration = 2.0):
    # Creăm datele pentru toast
    var toast_data = {
        "text": text,
        "type": type,
        "duration": duration
    }
    
    # Verificăm dacă putem afișa toast-ul imediat
    if active_toasts.size() < max_toasts:
        _create_toast(toast_data)
    else:
        # Punem toast-ul în coadă
        toast_queue.append(toast_data)

func _create_toast(data):
    # Instanțiem scena toast
    var toast = toast_scene.instantiate()
    add_child(toast)
    
    # Configurăm toast-ul
    toast.set_text(data.text)
    toast.set_type(data.type)
    toast.display_time = data.duration
    
    # Poziționăm toast-ul
    var base_position = Vector2(get_viewport().size.x / 2, 100)
    base_position.y += (toast.size.y + toast_spacing) * active_toasts.size()
    toast.position = base_position
    toast.target_position = base_position
    
    # Conectăm semnalul pentru închidere
    toast.connect("toast_finished", Callable(self, "_on_toast_finished").bind(toast))
    
    # Adăugăm toast-ul la lista activă
    active_toasts.append(toast)

func _on_toast_finished(toast):
    # Eliminăm toast-ul din lista activă
    active_toasts.erase(toast)
    
    # Repoziționăm toast-urile rămase
    _reposition_toasts()
    
    # Verificăm dacă avem toast-uri în coadă
    if toast_queue.size() > 0:
        # Luăm următorul toast din coadă
        var next_toast = toast_queue.pop_front()
        _create_toast(next_toast)

func _reposition_toasts():
    # Repoziționăm toate toast-urile active
    for i in range(active_toasts.size()):
        var toast = active_toasts[i]
        var new_position = Vector2(get_viewport().size.x / 2, 100)
        new_position.y += (toast.size.y + toast_spacing) * i
        
        # Animăm mișcarea
        var tween = create_tween()
        tween.tween_property(toast, "position", new_position, 0.3).set_ease(Tween.EASE_OUT)
        toast.target_position = new_position`}
          </CodeExample>
          
          <h3 className="text-xl font-bold mt-6 mb-3">HUD interactiv pentru joc</h3>
          
          <p className="mb-4">
            Un HUD (Heads-Up Display) interactiv oferă informații importante jucătorului 
            și poate permite interacțiuni rapide în timp ce jocul continuă.
          </p>
          
          <StepItem number={4} title="Implementarea unui HUD interactiv">
            <p className="mb-2">Să creăm un HUD cu câteva elemente interactive:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă HUD cu un CanvasLayer ca rădăcină</li>
              <li>Organizează elementele în containere:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>VBoxContainer pentru structura verticală globală</li>
                  <li>HBoxContainer pentru bara de sus cu viață, scor, etc.</li>
                  <li>MarginContainer pentru a crea spațiu în jurul ecranului</li>
                </ul>
              </li>
              <li>Adaugă elemente interactive:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Buton de pauză în colțul ecranului</li>
                  <li>Inventar rapid cu slot-uri pentru obiecte</li>
                  <li>Mini-hartă care poate fi extinsă</li>
                  <li>Indicatori de misiuni clickable</li>
                </ul>
              </li>
              <li>Adaugă animații pentru tranziții și feedback:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Pulsează elementele importante</li>
                  <li>Animează schimbările de valori</li>
                  <li>Adaugă efecte de highlight</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <InfoBox title="Testarea și optimizarea UI" icon="info" variant="primary">
            <p>
              Un UI bun necesită testare și optimizare continuă:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Testează UI-ul pe diferite rezoluții și orientări de ecran</li>
              <li>Solicită feedback de la jucători cu privire la claritate și ușurință în utilizare</li>
              <li>Urmărește datele de utilizare pentru a identifica zonele problematice</li>
              <li>Optimizează performanța pentru a evita lag-ul sau întârzierile</li>
              <li>Iterează și îmbunătățește UI-ul în timp, bazat pe feedback</li>
              <li>Consideră diferite stiluri de joc și preferințe (ex: opțiuni de accesibilitate)</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'proiect',
      title: 'Proiect practic - Meniul principal complet',
      content: (
        <>
          <p className="mb-4">
            În acest proiect practic, vom construi un meniu principal complet pentru un joc, 
            îmbinând toate conceptele pe care le-am învățat. Meniul va include ecranul principal, 
            submeniuri, animații, teme personalizate și efecte interactive.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Planificarea meniului principal</h3>
          
          <p className="mb-4">
            Înainte de a începe implementarea, să planificăm structura meniului nostru:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h4 className="font-bold mb-2">Componente ale meniului principal:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Ecranul principal</strong>: Titlul jocului, butoane pentru navigare, fundal</li>
              <li><strong>Meniul de opțiuni</strong>: Setări pentru sunet, grafică, controale</li>
              <li><strong>Ecranul de selecție nivel/profil</strong>: Pentru a alege nivelul sau profilul</li>
              <li><strong>Credite</strong>: Informații despre creatorii jocului</li>
              <li><strong>Tutorial/Ajutor</strong>: Instrucțiuni de bază pentru joc</li>
            </ul>
          </div>
          
          <StepItem number={1} title="Crearea temei personalizate pentru meniu">
            <p className="mb-2">Începem prin a crea o temă personalizată:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o nouă resursă Theme</li>
              <li>Definește culori de bază:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Culoare primară: pentru elemente principale</li>
                  <li>Culoare secundară: pentru accente</li>
                  <li>Culoare de fundal: pentru panourile și fundalurile din meniu</li>
                  <li>Culoare de text: pentru text și etichete</li>
                </ul>
              </li>
              <li>Personalizează stilurile pentru butoane:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Normal: Culoare de fundal, borduri rotunjite</li>
                  <li>Hover: Versiune mai luminoasă, eventual cu un glow subtil</li>
                  <li>Pressed: Versiune mai întunecată, cu efect de "apăsare"</li>
                  <li>Disabled: Versiune desaturată sau gri</li>
                </ul>
              </li>
              <li>Definește fonturi pentru titluri și text normal</li>
              <li>Creează stiluri pentru panouri și containere</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Implementarea ecranului principal">
            <p className="mb-2">Acum, să construim ecranul principal al meniului:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o scenă cu un Control sau CanvasLayer ca rădăcină</li>
              <li>Adaugă un TextureRect pentru fundal, care acoperă întregul ecran</li>
              <li>Organizează elementele într-un layout centrat vertical:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Titlul jocului în partea de sus (TextureRect sau Label mare)</li>
                  <li>Spațiu pentru elementele decorative</li>
                  <li>Containere pentru butoanele principale</li>
                  <li>Informații sau credite în partea de jos</li>
                </ul>
              </li>
              <li>Adaugă butoane pentru:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>"Play" - pentru a începe jocul</li>
                  <li>"Options" - pentru meniul de opțiuni</li>
                  <li>"Credits" - pentru a afișa creditele</li>
                  <li>"Quit" - pentru a ieși din joc</li>
                </ul>
              </li>
              <li>Adaugă elemente decorative animate pentru a face meniul mai dinamic</li>
            </ol>
          </StepItem>
          
          <StepItem number={3} title="Crearea meniurilor secundare">
            <p className="mb-2">Implementăm meniurile secundare:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Meniul de opțiuni:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Creează un panel pentru fundal</li>
                  <li>Adaugă un titlu "Options"</li>
                  <li>Organizează opțiunile în categorii (Audio, Video, Gameplay)</li>
                  <li>Adaugă controlere pentru fiecare setare (slidere, checkboxes, dropdown-uri)</li>
                  <li>Adaugă butoane "Apply", "Reset", "Back"</li>
                </ul>
              </li>
              <li>Ecranul de selecție nivel:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Creează o grilă de niveluri</li>
                  <li>Fiecare nivel are o previzualizare, titlu, și informații</li>
                  <li>Marchează nivelurile blocate/deblocate</li>
                  <li>Adaugă navigație între pagini dacă sunt multe niveluri</li>
                </ul>
              </li>
              <li>Ecranul de credite:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Listează membrii echipei și rolurile lor</li>
                  <li>Includ mulțumiri și atribuții</li>
                  <li>Adaugă un buton "Back"</li>
                  <li>Opțional, fă-l să deruleze automat</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru gestionarea meniului principal" language="gdscript">
{`extends Control

# Referințe la noduri și scene
@onready var animation_player = $AnimationPlayer
@onready var options_menu_scene = preload("res://ui/options_menu.tscn")
@onready var level_select_scene = preload("res://ui/level_select.tscn")
@onready var credits_scene = preload("res://ui/credits.tscn")

# Referințe la butoane
@onready var play_button = $VBoxContainer/MenuButtons/PlayButton
@onready var options_button = $VBoxContainer/MenuButtons/OptionsButton
@onready var credits_button = $VBoxContainer/MenuButtons/CreditsButton
@onready var quit_button = $VBoxContainer/MenuButtons/QuitButton

# Starea curentă
var current_submenu = null

func _ready():
    # Conectăm butoanele
    play_button.connect("pressed", Callable(self, "_on_play_button_pressed"))
    options_button.connect("pressed", Callable(self, "_on_options_button_pressed"))
    credits_button.connect("pressed", Callable(self, "_on_credits_button_pressed"))
    quit_button.connect("pressed", Callable(self, "_on_quit_button_pressed"))
    
    # Redăm animația de intrare
    animation_player.play("intro")
    
    # Adăugăm sunet de fundal pentru meniu
    if not $BackgroundMusic.playing:
        $BackgroundMusic.play()

func _on_play_button_pressed():
    # Redăm animație și sunet de click
    play_button_animation()
    $ButtonClickSound.play()
    
    # Afișăm ecranul de selecție nivel după o scurtă pauză
    await get_tree().create_timer(0.2).timeout
    show_submenu(level_select_scene)

func _on_options_button_pressed():
    # Redăm animație și sunet de click
    play_button_animation()
    $ButtonClickSound.play()
    
    # Afișăm meniul de opțiuni
    await get_tree().create_timer(0.2).timeout
    show_submenu(options_menu_scene)

func _on_credits_button_pressed():
    # Redăm animație și sunet de click
    play_button_animation()
    $ButtonClickSound.play()
    
    # Afișăm creditele
    await get_tree().create_timer(0.2).timeout
    show_submenu(credits_scene)

func _on_quit_button_pressed():
    # Redăm animație și sunet de click
    play_button_animation()
    $ButtonClickSound.play()
    
    # Afișăm dialogul de confirmare
    var confirm_dialog = preload("res://ui/confirm_dialog.tscn").instantiate()
    confirm_dialog.set_text("Părăsire joc", "Ești sigur că vrei să ieși din joc?")
    add_child(confirm_dialog)
    
    # Conectăm semnalele dialogului
    confirm_dialog.connect("confirmed", Callable(self, "_quit_game"))
    confirm_dialog.connect("cancelled", Callable(self, "_dialog_cancelled"))

func _quit_game():
    # Redăm animația de ieșire
    animation_player.play("exit")
    await animation_player.animation_finished
    
    # Ieșim din joc
    get_tree().quit()

func show_submenu(submenu_scene):
    # Dacă există deja un submeniu, îl închidem
    if current_submenu:
        current_submenu.queue_free()
    
    # Instanțiem noul submeniu
    current_submenu = submenu_scene.instantiate()
    add_child(current_submenu)
    
    # Conectăm semnalul de închidere
    current_submenu.connect("closed", Callable(self, "_on_submenu_closed"))
    
    # Animăm intrarea submeniului
    if current_submenu.has_method("show_menu"):
        current_submenu.show_menu()

func _on_submenu_closed():
    # Resetăm referința la submeniu
    current_submenu = null

func _dialog_cancelled():
    # Nu facem nimic special când dialogul este anulat
    pass

func play_button_animation():
    # Animăm butonul apăsat pentru feedback vizual
    var pressed_button = get_viewport().gui_get_focus_owner()
    if pressed_button:
        var tween = create_tween()
        tween.tween_property(pressed_button, "scale", Vector2(0.95, 0.95), 0.1)
        tween.tween_property(pressed_button, "scale", Vector2(1.0, 1.0), 0.1)`}
          </CodeExample>
          
          <StepItem number={4} title="Adăugarea animațiilor și efectelor">
            <p className="mb-2">Acum, să îmbunătățim meniul cu animații și efecte:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un AnimationPlayer pentru controlul animațiilor:</li>
              <li>Creează animația "intro" pentru apariția meniului:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Titlul coboară din partea de sus și se mărește</li>
                  <li>Butoanele apar unul câte unul cu fade in</li>
                  <li>Elementele decorative își pornesc animațiile</li>
                </ul>
              </li>
              <li>Creează animația "exit" pentru ieșirea din meniu:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Toate elementele fac fade out</li>
                  <li>Eventual, un efect de transition pentru a merge la joc</li>
                </ul>
              </li>
              <li>Adaugă animații pentru tranziții între meniuri:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Slide-in pentru submeniuri</li>
                  <li>Fade pentru dialoguri</li>
                </ul>
              </li>
              <li>Implementează particule și efecte vizuale:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Particule care plutesc în fundal</li>
                  <li>Efecte de lumină sau glow pentru elemente importante</li>
                  <li>Animații subtile continue pentru elemente statice</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={5} title="Implementarea sistemului de salvare pentru opțiuni">
            <p className="mb-2">În final, să implementăm un sistem pentru salvarea setărilor:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un script singleton "SettingsManager" care gestionează toate setările</li>
              <li>Implementează funcții pentru a seta și obține valorile setărilor</li>
              <li>Adaugă funcționalitate pentru a salva setările pe disc și a le încărca la pornire</li>
              <li>Integrează acest manager cu meniul de opțiuni</li>
              <li>Asigură-te că setările sunt aplicate în joc când sunt modificate</li>
            </ol>
          </StepItem>
          
          <CodeExample title="Script pentru managerul de setări" language="gdscript">
{`extends Node

# Setările implicite
var default_settings = {
    "audio": {
        "master_volume": 0.8,
        "music_volume": 0.7,
        "sfx_volume": 0.9,
        "voices_volume": 1.0,
        "mute": false
    },
    "video": {
        "fullscreen": false,
        "vsync": true,
        "resolution": "1920x1080",
        "quality": "high"
    },
    "gameplay": {
        "difficulty": "normal",
        "camera_sensitivity": 0.5,
        "invert_y": false,
        "show_hints": true
    },
    "controls": {
        "keyboard_layout": "qwerty",
        "gamepad_enabled": true
    }
}

# Setările curente
var settings = {}

# Path-ul fișierului de setări
const SETTINGS_PATH = "user://settings.json"

func _ready():
    # Încărcăm setările la pornirea jocului
    load_settings()
    
    # Aplicăm setările
    apply_settings()

func load_settings():
    # Inițial, folosim setările implicite
    settings = default_settings.duplicate(true)
    
    # Încercăm să încărcăm setările salvate
    var file = FileAccess.open(SETTINGS_PATH, FileAccess.READ)
    if file:
        var json_text = file.get_as_text()
        file.close()
        
        var json = JSON.new()
        var error = json.parse(json_text)
        if error == OK:
            var loaded_settings = json.get_data()
            
            # Actualizăm setările cu cele încărcate
            # Folosim o funcție recursivă pentru a asigura că toate setările sunt prezente
            merge_settings(settings, loaded_settings)

func save_settings():
    # Salvăm setările curente pe disc
    var file = FileAccess.open(SETTINGS_PATH, FileAccess.WRITE)
    if file:
        var json_text = JSON.stringify(settings)
        file.store_string(json_text)
        file.close()

func merge_settings(target, source):
    # Funcție recursivă pentru a îmbina setările, păstrând structura
    for key in source:
        if key in target:
            if typeof(source[key]) == TYPE_DICTIONARY and typeof(target[key]) == TYPE_DICTIONARY:
                # Recursiv pentru dicționare imbricate
                merge_settings(target[key], source[key])
            else:
                # Pentru valori simple, copiem direct
                target[key] = source[key]

func apply_settings():
    # Aplicăm setările la joc
    
    # Audio
    set_volume("Master", settings.audio.master_volume)
    set_volume("Music", settings.audio.music_volume)
    set_volume("SFX", settings.audio.sfx_volume)
    set_volume("Voice", settings.audio.voices_volume)
    AudioServer.set_bus_mute(0, settings.audio.mute)
    
    # Video
    if settings.video.fullscreen:
        DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_FULLSCREEN)
    else:
        DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
    
    DisplayServer.window_set_vsync_mode(DisplayServer.VSYNC_ENABLED if settings.video.vsync else DisplayServer.VSYNC_DISABLED)
    
    # Aplicăm rezoluția
    var resolution = settings.video.resolution.split("x")
    if resolution.size() == 2:
        var width = int(resolution[0])
        var height = int(resolution[1])
        get_viewport().size = Vector2i(width, height)

func set_volume(bus_name, value):
    # Setăm volumul pentru un anumit bus audio
    var bus_idx = AudioServer.get_bus_index(bus_name)
    if bus_idx >= 0:
        # Convertim valoarea (0-1) la decibeli
        var db = linear_to_db(value)
        AudioServer.set_bus_volume_db(bus_idx, db)

# Funcții pentru a obține și seta valori specifice

func get_setting(category, key):
    if category in settings and key in settings[category]:
        return settings[category][key]
    return null

func set_setting(category, key, value):
    if category in settings:
        if key in settings[category]:
            settings[category][key] = value
            # Când o setare este modificată, o aplicăm și salvăm
            apply_settings()
            save_settings()
            return true
    return false`}
          </CodeExample>
          
          <Challenge title="Meniu principal cu tema personalizată" difficulty="hard">
            <p className="mb-2">
              Extinde proiectul meniului principal cu următoarele elemente:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează o temă personalizată completă cu cel puțin 3 variante de culoare</li>
              <li>Implementează un selector de teme în meniul de opțiuni</li>
              <li>Adaugă un efect de parallax pentru fundalul meniului principal</li>
              <li>Creează tranziții animate între toate submeniurile</li>
              <li>Implementează efecte de particule care reacționează la interacțiunile utilizatorului</li>
              <li>Adaugă un sistem de localizare pentru a suporta cel puțin 2 limbi</li>
              <li>Bonus: Creează un easter egg ascuns în meniu (o surpriză descoperită printr-o secvență specială de acțiuni)</li>
            </ol>
          </Challenge>
          
          <InfoBox title="Mai departe: Integrarea cu jocul" icon="star" variant="secondary">
            <p>
              După ce ai creat un meniu principal, următorul pas este integrarea acestuia cu jocul tău:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Asigură-te că toate setările din meniu sunt aplicate corect în joc</li>
              <li>Implementează tranziții line între meniu și joc</li>
              <li>Creează sisteme similare pentru alte ecrane (de pauză, game over, victorie)</li>
              <li>Menține o coerență vizuală între meniu și joc</li>
              <li>Testează fluxul complet din meniu în joc și înapoi</li>
              <li>Obține feedback de la utilizatori pentru a îmbunătăți experiența</li>
            </ul>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout 
      title="Sisteme de UI și meniuri în Godot" 
      description="Învață să creezi interfețe utilizator intuitive și meniuri dinamice pentru jocurile tale."
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session5;
