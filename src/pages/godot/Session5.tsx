
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';

const Session5 = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'particles', title: 'Sisteme de Particule' },
    { id: 'shaders', title: 'Efecte Shader' },
    { id: 'camera', title: 'Efecte de Cameră' },
    { id: 'audio', title: 'Efecte Audio' },
    { id: 'exercises', title: 'Exerciții' }
  ];

  const resources = [
    { title: 'Documentația Godot', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Tutoriale Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/index.html' },
    { title: 'Sisteme de Particule', url: 'https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html' }
  ];

  // Define learning outcomes as an array
  const learningOutcomes = [
    'Să creezi sisteme de particule pentru efecte vizuale',
    'Să aplici efecte shader pentru a modifica aspectul obiectelor',
    'Să implementezi efecte de cameră pentru a crea senzații dinamice',
    'Să adaugi efecte audio pentru a îmbunătăți atmosfera jocului'
  ];

  return (
    <LessonLayout
      title="Godot 4: Efecte Vizuale și Audio"
      subtitle="Lecția 5 • Godot Engine"
      courseId="godot"
      sessionId="5"
      heroColor="bg-indigo-700"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/godot/session4"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/godot/game"
      }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Efecte Vizuale și Audio în Godot 4</h2>
          <p>
            În această lecție, vom explora cum să adăugăm efecte vizuale și audio pentru a îmbunătăți experiența
            jocului. Vom învăța despre sistemele de particule, efectele shader, efectele de cameră și efectele audio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3">Ce vom învăța</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Crearea și utilizarea sistemelor de particule</li>
                <li>Aplicarea efectelor shader pentru a modifica aspectul vizual</li>
                <li>Implementarea efectelor de cameră pentru a crea senzații dinamice</li>
                <li>Adăugarea efectelor audio pentru a îmbunătăți atmosfera jocului</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3">Concepte cheie</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Nodul CPUParticles2D</li>
                <li>Shader-e de vertex și fragment</li>
                <li>Camera2D și efecte de zoom</li>
                <li>Nodul AudioStreamPlayer</li>
                <li>Mixarea și efectele audio</li>
              </ul>
            </div>
          </div>
        </section>

        <LearningOutcome items={learningOutcomes} />

        <section id="particles">
          <h2 className="text-2xl font-bold mb-4">Sisteme de Particule</h2>
          <p className="mb-6">
            Sistemele de particule sunt folosite pentru a crea efecte vizuale complexe, cum ar fi fum, foc, explozii
            și multe altele. În Godot, putem folosi nodul CPUParticles2D pentru a crea sisteme de particule.
          </p>

          <StepItem number={1} title="Crearea unui nod CPUParticles2D">
            <p className="mb-2">Pentru a crea un sistem de particule, adaugă un nod CPUParticles2D la scena ta:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul părinte în scena ta</li>
              <li>Click dreapta {'>'} Add Child Node</li>
              <li>Caută și selectează "CPUParticles2D"</li>
              <li>Dă un nume nodului (ex: "ExplosionParticles")</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Configurarea sistemului de particule">
            <p className="mb-2">
              Acum, configurează proprietățile sistemului de particule în panoul Inspector:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Texture</strong>: Setează textura pentru particule (ex: o imagine cu o pată de culoare)</li>
              <li><strong>Amount</strong>: Numărul de particule emise</li>
              <li><strong>Lifetime</strong>: Durata de viață a unei particule în secunde</li>
              <li><strong>Speed</strong>: Viteza inițială a particulelor</li>
              <li><strong>Angle</strong>: Unghiul de emisie a particulelor</li>
              <li><strong>Gravity</strong>: Gravitația aplicată particulelor</li>
              <li><strong>Color</strong>: Culoarea inițială a particulelor</li>
            </ul>
          </StepItem>

          <StepItem number={3} title="Activarea sistemului de particule">
            <p className="mb-2">
              Pentru a activa sistemul de particule, setează proprietatea "Emitting" la true:
            </p>
            <CodeBlock language="gdscript">{`
func _ready():
    $ExplosionParticles.emitting = true
            `}</CodeBlock>
          </StepItem>
        </section>

        <section id="shaders">
          <h2 className="text-2xl font-bold mb-4">Efecte Shader</h2>
          <p className="mb-6">
            Shader-ele sunt programe care rulează pe placa grafică și pot modifica aspectul vizual al obiectelor.
            Putem folosi shader-e pentru a crea efecte speciale, cum ar fi distorsiuni, culori schimbătoare și multe
            altele.
          </p>

          <StepItem number={1} title="Crearea unui nou shader">
            <p className="mb-2">Pentru a crea un nou shader, urmează acești pași:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul File System, click dreapta {'>'} New {'>'} Shader</li>
              <li>Dă un nume shader-ului (ex: "ColorShift.gdshader")</li>
              <li>Dublu click pe fișier pentru a-l deschide în editor</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Scrierea codului shader">
            <p className="mb-2">
              Acum, scrie codul shader în editor. Un shader simplu care schimbă culoarea unui obiect arată astfel:
            </p>
            <CodeBlock language="glsl">{`
shader_type canvas_item;

uniform float time_scale : hint_range(0.0, 10.0) = 1.0;

void fragment() {
    vec4 color = texture(TEXTURE, UV);
    float time = TIME * time_scale;
    color.r = sin(time);
    color.g = cos(time);
    COLOR = color;
}
            `}</CodeBlock>
          </StepItem>

          <StepItem number={3} title="Aplicarea shader-ului la un obiect">
            <p className="mb-2">
              Pentru a aplica shader-ul la un obiect, urmează acești pași:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează obiectul în scena ta (ex: un Sprite2D)</li>
              <li>În panoul Inspector, mergi la Material {'>'} Material</li>
              <li>Click pe dropdown și selectează "New ShaderMaterial"</li>
              <li>Click pe ShaderMaterial pentru a-l deschide</li>
              <li>În proprietatea Shader, trage fișierul shader creat anterior</li>
            </ol>
          </StepItem>
        </section>

        <section id="camera">
          <h2 className="text-2xl font-bold mb-4">Efecte de Cameră</h2>
          <p className="mb-6">
            Efectele de cameră pot fi folosite pentru a crea senzații dinamice și interesante în joc. Putem folosi
            efecte de zoom, shake și multe altele.
          </p>

          <StepItem number={1} title="Adăugarea unui nod Camera2D">
            <p className="mb-2">Pentru a adăuga un efect de cameră, adaugă un nod Camera2D la scena ta:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul părinte în scena ta</li>
              <li>Click dreapta {'>'} Add Child Node</li>
              <li>Caută și selectează "Camera2D"</li>
              <li>Dă un nume nodului (ex: "MainCamera")</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Implementarea unui efect de zoom">
            <p className="mb-2">
              Pentru a implementa un efect de zoom, modifică proprietatea "Zoom" a nodului Camera2D:
            </p>
            <CodeBlock language="gdscript">{`
func _process(delta):
    # Zoom in
    if Input.is_action_pressed("zoom_in"):
        $MainCamera.zoom += Vector2(0.1, 0.1) * delta

    # Zoom out
    if Input.is_action_pressed("zoom_out"):
        $MainCamera.zoom -= Vector2(0.1, 0.1) * delta
            `}</CodeBlock>
          </StepItem>
        </section>

        <section id="audio">
          <h2 className="text-2xl font-bold mb-4">Efecte Audio</h2>
          <p className="mb-6">
            Efectele audio sunt esențiale pentru a îmbunătăți atmosfera jocului și a oferi feedback jucătorului.
            Putem folosi nodul AudioStreamPlayer pentru a reda efecte audio.
          </p>

          <StepItem number={1} title="Adăugarea unui nod AudioStreamPlayer">
            <p className="mb-2">Pentru a adăuga un efect audio, adaugă un nod AudioStreamPlayer la scena ta:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Selectează nodul părinte în scena ta</li>
              <li>Click dreapta {'>'} Add Child Node</li>
              <li>Caută și selectează "AudioStreamPlayer"</li>
              <li>Dă un nume nodului (ex: "ExplosionSound")</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Setarea fișierului audio">
            <p className="mb-2">
              Acum, setează fișierul audio în proprietatea "Stream" a nodului AudioStreamPlayer:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul Inspector, mergi la proprietatea "Stream"</li>
              <li>Click pe dropdown și selectează "Load"</li>
              <li>Selectează fișierul audio din proiectul tău</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Redarea efectului audio">
            <p className="mb-2">
              Pentru a reda efectul audio, apelează metoda "play()" a nodului AudioStreamPlayer:
            </p>
            <CodeBlock language="gdscript">{`
func _ready():
    $ExplosionSound.play()
            `}</CodeBlock>
          </StepItem>
        </section>

        <section id="exercises">
          <h2 className="text-2xl font-bold mb-4">Exerciții</h2>
          <Challenge title="Sistem de Particule Avansat">
            <p>
              Creează un sistem de particule avansat care simulează o ploaie de meteoriți. Adaugă efecte de coliziune
              și sunete pentru a face efectul mai realist.
            </p>
          </Challenge>

          <Challenge title="Efect Shader Interactiv">
            <p>
              Creează un efect shader interactiv care reacționează la input-ul jucătorului. De exemplu, poți crea un
              efect de distorsiune care se activează când jucătorul apasă un buton.
            </p>
          </Challenge>

          <Challenge title="Efecte de Cameră Dinamice">
            <p>
              Implementează efecte de cameră dinamice care se activează în anumite momente ale jocului. De exemplu,
              poți crea un efect de shake al camerei când jucătorul este lovit de un inamic.
            </p>
          </Challenge>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session5;
