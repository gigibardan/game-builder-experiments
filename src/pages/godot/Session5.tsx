import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';

const Session5 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'control-nodes', title: 'Nodurile de Control' },
    { id: 'containers', title: 'Containere și layout-uri' },
    { id: 'teme-styling', title: 'Teme și stilizare' },
    { id: 'meniuri', title: 'Meniuri de joc' },
    { id: 'ui-animations', title: 'Animații UI' },
    { id: 'hud', title: 'HUD și interfețe în joc' },
    { id: 'proiect', title: 'Proiect practic' },
  ];

  const resources = [
    { title: 'Documentația Godot - UI', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/index.html' },
    { title: 'Tutorial video - UI în Godot', url: 'https://www.youtube.com/watch?v=_84ciG3XrN4' },
    { title: 'Despre Control nodes', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/control_node_gallery.html' },
    { title: 'Themes tutorial', url: 'https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_theme.html' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în UI și meniuri',
      content: (
        <>
          <p className="mb-4">
            Bine ai venit la a cincea lecție a cursului nostru de Godot! În această sesiune, vom explora sistemul 
            de interfață cu utilizatorul (UI) din Godot și vom învăța cum să creăm meniuri atractive și funcționale 
            pentru jocurile noastre.
          </p>
          
          <p className="mb-6">
            O interfață bine proiectată este esențială pentru orice joc. Aceasta permite jucătorilor să 
            navigheze, să interacționeze cu jocul și să primească feedback important. Godot oferă un sistem 
            UI puternic și flexibil, bazat pe noduri Control și containere.
          </p>
          
          <LearningOutcome items={[
            "Înțelegerea nodurilor Control și a proprietăților lor",
            "Utilizarea containerelor pentru layout-uri responsive",
            "Crearea și utilizarea temelor pentru stilizare consecventă",
            "Implementarea meniurilor principale și de pauză",
            "Animarea elementelor UI pentru feedback vizual",
            "Construirea unui HUD funcțional pentru jocuri"
          ]} />
        </>
      )
    },
    {
      id: 'control-nodes',
      title: 'Nodurile de Control',
      content: (
        <>
          <p className="mb-4">
            Sistemul UI din Godot se bazează pe <code>Control</code>, o clasă de bază pentru toate nodurile UI.
            Nodurile Control oferă proprietăți și funcționalități esențiale pentru poziționare, dimensionare, 
            focus, și interacțiune cu utilizatorul.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Noduri Control comune</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h4 className="font-bold text-indigo-700 mb-1">Label</h4>
              <p className="text-sm">Afișează text static. Folosit pentru titluri, descrieri și informații.</p>
              <CodeExample title="Label - Exemplu" language="gdscript" compact>
{`var label = Label.new()
label.text = "Scor: 100"
label.add_theme_font_size_override("font_size", 24)
add_child(label)`}
              </CodeExample>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">Button</h4>
              <p className="text-sm">Buton interactiv care poate fi apăsat. Emite semnalul "pressed".</p>
              <CodeExample title="Button - Exemplu" language="gdscript" compact>
{`var button = Button.new()
button.text = "Start Joc"
button.connect("pressed", _on_start_button_pressed)
add_child(button)`}
              </CodeExample>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-bold text-green-700 mb-1">LineEdit</h4>
              <p className="text-sm">Câmp pentru introducerea textului pe o singură linie.</p>
              <CodeExample title="LineEdit - Exemplu" language="gdscript" compact>
{`var input = LineEdit.new()
input.placeholder_text = "Introdu numele tău"
input.connect("text_submitted", _on_name_submitted)
add_child(input)`}
              </CodeExample>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-700 mb-1">TextureRect</h4>
              <p className="text-sm">Afișează o textură sau imagine. Util pentru fundaluri, pictograme.</p>
              <CodeExample title="TextureRect - Exemplu" language="gdscript" compact>
{`var icon = TextureRect.new()
icon.texture = preload("res://icon.png")
icon.expand = true
icon.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
add_child(icon)`}
              </CodeExample>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="font-bold text-purple-700 mb-1">ProgressBar / Slider</h4>
              <p className="text-sm">Afișarea valorilor într-un interval. Slider permite manipularea valorii.</p>
              <CodeExample title="ProgressBar - Exemplu" language="gdscript" compact>
{`var health_bar = ProgressBar.new()
health_bar.min_value = 0
health_bar.max_value = 100
health_bar.value = 75
add_child(health_bar)`}
              </CodeExample>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-700 mb-1">CheckBox / CheckButton</h4>
              <p className="text-sm">Elemente toggle pentru opțiuni booleene (pornit/oprit).</p>
              <CodeExample title="CheckBox - Exemplu" language="gdscript" compact>
{`var checkbox = CheckBox.new()
checkbox.text = "Sunet activat"
checkbox.pressed = true
checkbox.connect("toggled", _on_sound_toggled)
add_child(checkbox)`}
              </CodeExample>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Proprietăți importante ale nodurilor Control</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Poziționare și dimensionare</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>rect_position</strong>: Poziția relativă la părinte</li>
                <li><strong>rect_size</strong>: Dimensiunile nodului</li>
                <li><strong>rect_min_size</strong>: Dimensiunea minimă</li>
                <li><strong>rect_global_position</strong>: Poziția în coordonate globale</li>
                <li><strong>anchor_*</strong>: Ancore pentru poziționare relativă</li>
                <li><strong>margin_*</strong>: Margini față de ancore</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Comportament</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>focus_mode</strong>: Cum primește focus-ul</li>
                <li><strong>mouse_filter</strong>: Cum filtrează evenimentele de mouse</li>
                <li><strong>size_flags_*</strong>: Comportament de dimensionare în containere</li>
                <li><strong>visible</strong>: Dacă nodul este vizibil</li>
                <li><strong>modulate</strong>: Culoarea de modulare</li>
                <li><strong>hint_tooltip</strong>: Text tooltip la hover</li>
              </ul>
            </div>
          </div>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/ui_anchor.png" 
            alt="Ancore și margini în Godot UI" 
            caption="Sistemul de ancore și margini pentru poziționare în UI"
          />
          
          <InfoBox title="Focus și navigare în UI" icon="info" variant="primary">
            <p className="mb-2">Godot oferă un sistem de focus și navigare pentru UI, esențial pentru controlere și navigare cu tastatura:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Setează <code>focus_mode</code> la <code>Control.FOCUS_ALL</code> pentru elemente ce pot primi focus</li>
              <li>Folosește <code>focus_neighbor_*</code> pentru a defini ordinea de navigare</li>
              <li>Apelează <code>grab_focus()</code> pentru a seta focus-ul inițial</li>
              <li>Conectează-te la semnalul <code>focus_entered</code> pentru a detecta când un element primește focus</li>
            </ul>
          </InfoBox>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Crearea elementelor UI prin cod</h3>
          
          <CodeExample title="Crearea unui formular de login" language="gdscript">
{`extends Control

func _ready():
    # Creăm un container vertical pentru elementele formularului
    var vbox = VBoxContainer.new()
    vbox.alignment = BoxContainer.ALIGN_CENTER
    vbox.anchor_right = 1.0  # Extinde pe toată lățimea
    vbox.anchor_bottom = 1.0  # Extinde pe toată înălțimea
    vbox.add_theme_constant_override("separation", 20)
    add_child(vbox)
    
    # Adăugăm un titlu
    var title = Label.new()
    title.text = "Login"
    title.add_theme_font_size_override("font_size", 32)
    title.align = Label.ALIGN_CENTER
    vbox.add_child(title)
    
    # Adăugăm un spațiu
    var spacer = Control.new()
    spacer.custom_minimum_size.y = 40
    vbox.add_child(spacer)
    
    # Creăm câmpul pentru nume
    var username_container = HBoxContainer.new()
    username_container.alignment = BoxContainer.ALIGN_CENTER
    vbox.add_child(username_container)
    
    var username_label = Label.new()
    username_label.text = "Username:"
    username_container.add_child(username_label)
    
    var username_input = LineEdit.new()
    username_input.name = "username_input"
    username_input.custom_minimum_size.x = 200
    username_container.add_child(username_input)
    
    # Creăm câmpul pentru parolă
    var password_container = HBoxContainer.new()
    password_container.alignment = BoxContainer.ALIGN_CENTER
    vbox.add_child(password_container)
    
    var password_label = Label.new()
    password_label.text = "Password:"
    password_container.add_child(password_label)
    
    var password_input = LineEdit.new()
    password_input.name = "password_input"
    password_input.custom_minimum_size.x = 200
    password_input.secret = true  # Ascunde textul (*****)
    password_container.add_child(password_input)
    
    # Adăugăm un spațiu
    var spacer2 = Control.new()
    spacer2.custom_minimum_size.y = 20
    vbox.add_child(spacer2)
    
    # Adăugăm butonul de login
    var login_button = Button.new()
    login_button.text = "Login"
    login_button.custom_minimum_size.x = 150
    login_button.connect("pressed", _on_login_button_pressed)
    
    # Adăugăm butonul într-un container pentru centrare
    var button_container = HBoxContainer.new()
    button_container.alignment = BoxContainer.ALIGN_CENTER
    button_container.add_child(login_button)
    vbox.add_child(button_container)

func _on_login_button_pressed():
    var username = $VBoxContainer/username_input.text
    var password = $VBoxContainer/password_input.text
    
    print("Încercare de login: " + username)
    # Aici ai implementa logica de autentificare
`}
          </CodeExample>
        </>
      )
    },
    {
      id: 'containers',
      title: 'Containere și layout-uri',
      content: (
        <>
          <p className="mb-4">
            Containerele sunt noduri Control speciale care gestionează automat poziționarea și dimensionarea 
            copiilor lor. Acestea sunt esențiale pentru crearea layout-urilor responsive care se adaptează 
            la diferite rezoluții și dimensiuni de ecran.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Tipuri principale de containere</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-700 mb-2">BoxContainer</h3>
              <p className="mb-2">Aranjează nodurile copil într-o singură linie, vertical sau orizontal:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>VBoxContainer</strong>: Aranjare verticală</li>
                <li><strong>HBoxContainer</strong>: Aranjare orizontală</li>
                <li>Controlează spațierea cu <code>separation</code></li>
                <li>Folosește <code>alignment</code> pentru alinierea globală</li>
              </ul>
              <ImageExample 
                src="https://docs.godotengine.org/en/stable/_images/box_container.png" 
                alt="Box Container" 
                caption="HBoxContainer și VBoxContainer"
              />
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700 mb-2">GridContainer</h3>
              <p className="mb-2">Aranjează nodurile într-un grid cu rânduri și coloane.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Setează <code>columns</code> pentru a defini numărul de coloane</li>
                <li>Copiii sunt aranjați de la stânga la dreapta, de sus în jos</li>
                <li>Toate celulele au aceeași dimensiune</li>
                <li>Ideal pentru meniuri cu butoane, inventare, grile</li>
              </ul>
              <ImageExample 
                src="https://docs.godotengine.org/en/stable/_images/grid_container.png" 
                alt="Grid Container" 
                caption="GridContainer cu 3 coloane"
              />
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <h3 className="text-lg font-bold text-green-700 mb-2">MarginContainer</h3>
              <p className="mb-2">Adaugă margini în jurul unui singur copil.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Setează <code>margin_*</code> pentru marginile pe toate laturile</li>
                <li>Util pentru a adăuga spațiere în jurul elementelor UI</li>
                <li>Poate conține doar un singur copil direct</li>
              </ul>
              <ImageExample 
                src="https://docs.godotengine.org/en/stable/_images/margin_container.png" 
                alt="Margin Container" 
                caption="MarginContainer cu margini"
              />
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
              <h3 className="text-lg font-bold text-purple-700 mb-2">CenterContainer</h3>
              <p className="mb-2">Centrează un copil în spațiul disponibil.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Simplu de utilizat, fără parametri suplimentari</li>
                <li>Util pentru centrarea unui element în ecran</li>
                <li>De obicei, conține un singur copil</li>
              </ul>
              <ImageExample 
                src="https://docs.godotengine.org/en/stable/_images/center_container.png" 
                alt="Center Container" 
                caption="CenterContainer centrând un Label"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Controlul dimensionării cu size_flags</h3>
          <p className="mb-4">
            Proprietățile <code>size_flags</code> controlează cum se dimensionează elementele în containere:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">size_flags_horizontal</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>FILL</strong>: Umple spațiul disponibil (implicit)</li>
                <li><strong>EXPAND</strong>: Ia spațiu suplimentar dacă este disponibil</li>
                <li><strong>SHRINK_CENTER</strong>: Se micșorează și centrează</li>
                <li><strong>SHRINK_END</strong>: Se micșorează și aliniază la dreapta</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-1">size_flags_vertical</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>FILL</strong>: Umple spațiul disponibil (implicit)</li>
                <li><strong>EXPAND</strong>: Ia spațiu suplimentar dacă este disponibil</li>
                <li><strong>SHRINK_CENTER</strong>: Se micșorează și centrează</li>
                <li><strong>SHRINK_END</strong>: Se micșorează și aliniază în jos</li>
              </ul>
            </div>
          </div>
          
          <p className="mb-4">
            Flags-urile pot fi combinate folosind operatorul bitwise OR (<code>|</code>): 
            <code>SIZE_FILL | SIZE_EXPAND</code>
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Exemplu practic: Layout complex</h3>
          
          <CodeExample title="Crearea unui layout complex" language="gdscript">
{`extends Control

func _ready():
    # Creăm un container margin pentru a avea spațiu în jurul întregii interfețe
    var margin = MarginContainer.new()
    margin.anchor_right = 1.0
    margin.anchor_bottom = 1.0
    margin.add_theme_constant_override("margin_right", 20)
    margin.add_theme_constant_override("margin_top", 20)
    margin.add_theme_constant_override("margin_left", 20)
    margin.add_theme_constant_override("margin_bottom", 20)
    add_child(margin)
    
    # Creăm layout-ul principal - împărțim ecranul în stânga și dreapta
    var main_layout = HBoxContainer.new()
    margin.add_child(main_layout)
    
    # Panel-ul din stânga - lista de opțiuni
    var left_panel = VBoxContainer.new()
    left_panel.size_flags_horizontal = Control.SIZE_EXPAND_FILL
    left_panel.size_flags_stretch_ratio = 0.3  # 30% din lățime
    main_layout.add_child(left_panel)
    
    # Adăugăm titlul la panel-ul stâng
    var options_title = Label.new()
    options_title.text = "OPTIONS"
    options_title.align = Label.ALIGN_CENTER
    options_title.add_theme_font_size_override("font_size", 24)
    left_panel.add_child(options_title)
    
    # Adăugăm separator
    var separator = HSeparator.new()
    left_panel.add_child(separator)
    
    # Adăugăm butoane pentru opțiuni
    var option_buttons = ["Graphics", "Audio", "Controls", "Game", "Language"]
    for option in option_buttons:
        var button = Button.new()
        button.text = option
        button.alignment = Button.ALIGN_LEFT
        button.custom_minimum_size.y = 50
        left_panel.add_child(button)
    
    # Adăugăm un spacer pentru a împinge butonul de jos în partea inferioară
    var spacer = Control.new()
    spacer.size_flags_vertical = Control.SIZE_EXPAND_FILL
    left_panel.add_child(spacer)
    
    # Buton de revenire la meniul principal
    var back_button = Button.new()
    back_button.text = "Back to Main Menu"
    back_button.custom_minimum_size.y = 50
    left_panel.add_child(back_button)
    
    # Panel-ul din dreapta - conținutul opțiunilor
    var right_panel = PanelContainer.new()
    right_panel.size_flags_horizontal = Control.SIZE_EXPAND_FILL
    right_panel.size_flags_stretch_ratio = 0.7  # 70% din lățime
    main_layout.add_child(right_panel)
    
    # Conținutul panel-ului din dreapta
    var right_content = VBoxContainer.new()
    right_panel.add_child(right_content)
    
    # Titlul panel-ului din dreapta
    var content_title = Label.new()
    content_title.text = "GRAPHICS SETTINGS"
    content_title.align = Label.ALIGN_CENTER
    content_title.add_theme_font_size_override("font_size", 28)
    right_content.add_child(content_title)
    
    # Adăugăm separator
    var separator2 = HSeparator.new()
    right_content.add_child(separator2)
    
    # Adăugăm un spațiu
    var spacer2 = Control.new()
    spacer2.custom_minimum_size.y = 20
    right_content.add_child(spacer2)
    
    # Adăugăm opțiuni grafice în grid
    var settings_grid = GridContainer.new()
    settings_grid.columns = 2
    settings_grid.add_theme_constant_override("hseparation", 20)
    settings_grid.add_theme_constant_override("vseparation", 15)
    right_content.add_child(settings_grid)
    
    # Opțiuni - Label + Control
    var settings = [
        {"label": "Resolution:", "control": OptionButton},
        {"label": "Window Mode:", "control": OptionButton},
        {"label": "V-Sync:", "control": CheckButton},
        {"label": "Antialiasing:", "control": OptionButton},
        {"label": "Shadows:", "control": OptionButton},
        {"label": "Texture Quality:", "control": OptionButton}
    ]
    
    for setting in settings:
        var label = Label.new()
        label.text = setting.label
        label.size_flags_horizontal = Control.SIZE_EXPAND_FILL
        settings_grid.add_child(label)
        
        var control = setting.control.new()
        if control is OptionButton:
            control.custom_minimum_size.x = 200
            # Adăugăm opțiuni demo
            control.add_item("Low")
            control.add_item("Medium")
            control.add_item("High")
            control.add_item("Ultra")
            control.select(1)  # Selectăm "Medium" ca default
        settings_grid.add_child(control)
    
    # Adăugăm butoane pentru aplicare/resetare
    var button_container = HBoxContainer.new()
    button_container.alignment = BoxContainer.ALIGN_END
    button_container.add_theme_constant_override("separation", 15)
    
    # Adăugăm un spacer pentru a împinge butoanele în jos
    var spacer3 = Control.new()
    spacer3.size_flags_vertical = Control.SIZE_EXPAND_FILL
    right_content.add_child(spacer3)
    
    right_content.add_child(button_container)
    
    var reset_button = Button.new()
    reset_button.text = "Reset to Default"
    button_container.add_child(reset_button)
    
    var apply_button = Button.new()
    apply_button.text = "Apply Changes"
    button_container.add_child(apply_button)
`}
          </CodeExample>
          
          <InfoBox title="Sfaturi pentru layout-uri responsiv" icon="star" variant="secondary">
            <ul className="list-disc list-inside space-y-1">
              <li>Folosește containere imbricate pentru structuri de layout complexe</li>
              <li>Setează <code>size_flags</code> adecvat pentru a controla cum se distribuie spațiul</li>
              <li>Folosește <code>custom_minimum_size</code> pentru a controla dimensiunile minime</li>
              <li>Evită valorile hardcodate pentru poziții și dimensiuni când este posibil</li>
              <li>Testează UI-ul la diferite rezoluții pentru a verifica comportamentul responsiv</li>
              <li>Folosește <code>stretch_ratio</code> pentru a controla proporțiile între elementele unui container</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'teme-styling',
      title: 'Teme și stilizare',
      content: (
        <>
          <p className="mb-4">
            Godot oferă un sistem de teme puternic pentru a stiliza interfața utilizatorului. Teme permit 
            definirea aspectului vizual al elementelor UI într-un mod centralizat și reutilizabil.
          </p>
          
          <h3 className="text-xl font-bold mb-3">Ce sunt temele?</h3>
          <p className="mb-4">
            O temă este o resursă care conține informații despre stilizarea elementelor UI:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Fonturi</li>
            <li>Dimensiuni (font size, spacing)</li>
            <li>Culori</li>
            <li>Texturi (pentru fundaluri, butoane)</li>
            <li>Stiluri (pentru butoane, câmpuri de text)</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Avantajele utilizării temelor</h3>
          <p className="mb-4">
            Utilizarea temelor oferă mai multe avantaje:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
            <li>Stilizare consistentă în tot jocul</li>
            <li>Modificări rapide ale aspectului vizual</li>
            <li>Reutilizarea stilurilor</li>
            <li>Separarea stilului de logică</li>
            <li>Suport pentru diferite rezoluții</li>
          </ul>
          
          <StepItem number={1} title="Crearea unei teme">
            <p className="mb-2">Pentru a crea o temă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În FileSystem, fă click dreapta și selectează "New > Theme"</li>
              <li>Numește tema (ex: "game_theme.tres")</li>
              <li>Dublu click pe tema creată pentru a o deschide în editor</li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Aplicarea unei teme">
            <p className="mb-2">Pentru a aplica o temă:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul Control căruia vrei să-i aplici tema (sau un nod părinte)</li>
              <li>În Inspector, la proprietatea "Theme", trage tema creată</li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/theming_apply_theme.png" 
            alt="Aplicarea unei teme în Godot" 
            caption="Aplicarea unei teme la un nod Control"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Editarea temelor</h3>
          <p className="mb-4">
            Editorul de teme permite modificarea stilurilor pentru diferite tipuri de noduri Control.
          </p>
          
          <StepItem number={1} title="Modificarea proprietăților temei">
            <p className="mb-2">Pentru a modifica proprietățile temei:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează tema în editor</li>
              <li>În panoul "Inspector", poți modifica:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Fonturi (Theme > Default Font)</li>
                  <li>Dimensiuni (Theme > Default Font Size)</li>
                  <li>Culori (Theme > Default Color)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <StepItem number={2} title="Modificarea stilurilor pentru noduri specifice">
            <p className="mb-2">Pentru a modifica stilurile pentru un nod specific:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează tema în editor</li>
              <li>În panoul "Inspector", apasă pe "Add Type Item"</li>
              <li>Caută și selectează tipul de nod (ex: "Button")</li>
              <li>Acum poți modifica proprietățile specifice pentru butoane:
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Fonturi (Button > Font)</li>
                  <li>Culori (Button > Font Color, Button > Font Color Pressed)</li>
                  <li>Stiluri (Button > Styles > normal, Button > Styles > pressed)</li>
                </ul>
              </li>
            </ol>
          </StepItem>
          
          <ImageExample 
            src="https://docs.godotengine.org/en/stable/_images/theming_add_type_item.png" 
            alt="Adăugarea unui tip de nod în editorul de teme" 
            caption="Adăugarea unui tip de nod pentru a stiliza elemente specifice"
          />
          
          <h3 className="text-xl font-bold mt-6 mb-3">Stiluri</h3>
          <p className="mb-4">
            Stilurile sunt resurse care definesc aspectul vizual al unui nod Control. Godot oferă mai multe 
            tipuri de stiluri:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h
