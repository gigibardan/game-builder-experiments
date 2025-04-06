
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, LearningOutcome } from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';

const Session3 = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'input', title: 'Sistemul de Input' },
    { id: 'controller', title: 'Controllerul de Player' },
    { id: 'signals', title: 'Semnale și Events' },
    { id: 'exercises', title: 'Exerciții' }
  ];

  const resources = [
    { title: 'Documentația Godot', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Tutoriale Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/index.html' },
    { title: 'Input Map în Godot', url: 'https://docs.godotengine.org/en/stable/tutorials/inputs/input_examples.html' }
  ];

  // Defining learning outcomes as an array for the LearningOutcome component
  const learningOutcomes = [
    'Să configurezi sistemul de input pentru a detecta apăsările de taste',
    'Să creezi un controller de player care să permită mișcarea personajului',
    'Să folosești semnale și evenimente pentru a interacționa cu lumea jocului',
    'Să gestionezi coliziunile dintre personaj și alte obiecte'
  ];

  return (
    <LessonLayout
      title="Godot 4: Controlul Caracterelor"
      subtitle="Lecția 3 • Godot Engine"
      courseId="godot"
      sessionId="3"
      heroColor="bg-indigo-700"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/godot/session2"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/godot/session4"
      }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Controlul Caracterelor în Godot 4</h2>
          <p>
            În această lecție, vom explora cum să controlăm un personaj în Godot 4. Vom învăța despre sistemul de input,
            cum să creăm un controller de player și cum să folosim semnale și evenimente pentru a interacționa cu
            lumea jocului.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3">Ce vom învăța</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Configurarea sistemului de input</li>
                <li>Crearea unui controller de player</li>
                <li>Folosirea funcțiilor <code>_physics_process</code> și <code>move_and_slide</code></li>
                <li>Implementarea semnalelor și evenimentelor</li>
                <li>Gestionarea coliziunilor</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3">Concepte cheie</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Sistemul de input în Godot</li>
                <li>Funcțiile <code>_physics_process</code> și <code>move_and_slide</code></li>
                <li>Semnale și evenimente</li>
                <li>Coliziuni și zone</li>
                <li>Input Actions</li>
              </ul>
            </div>
          </div>
        </section>

        <LearningOutcome items={learningOutcomes} />

        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Introducere</h2>
          <p>
            Controlul personajului este un aspect fundamental al multor jocuri. În Godot, avem la dispoziție
            mai multe instrumente și tehnici pentru a implementa un control precis și intuitiv.
          </p>
          <InfoBox title="Notă importantă">
            Asigură-te că ai configurat corect proiectul Godot și că ai importat resursele necesare înainte de a
            începe această lecție.
          </InfoBox>
        </section>

        <section id="input">
          <h2 className="text-2xl font-bold mb-4">Sistemul de Input</h2>
          <p>
            Sistemul de input în Godot ne permite să detectăm apăsările de taste, mișcările mouse-ului și alte
            tipuri de input. Pentru a configura sistemul de input, trebuie să mergem la <code>Project Settings {'>'} Input Map</code>.
          </p>
          <StepItem number={1} title="Definirea Input Actions">
            <p>
              În <code>Input Map</code>, putem defini acțiuni de input (Input Actions) care corespund unor taste sau
              butoane. De exemplu, putem defini o acțiune <code>move_right</code> care corespunde tastei <code>D</code> sau săgeții dreapta.
            </p>
          </StepItem>
          <StepItem number={2} title="Adăugarea de evenimente">
            <p>
              Pentru fiecare acțiune de input, putem adăuga evenimente care corespund unor taste sau butoane.
              Pentru a adăuga un eveniment, apasă pe butonul <code>+</code> din dreptul acțiunii de input și alege
              tipul de eveniment pe care vrei să-l adaugi.
            </p>
          </StepItem>
        </section>

        <section id="controller">
          <h2 className="text-2xl font-bold mb-4">Controllerul de Player</h2>
          <p>
            Controllerul de player este un script care se ocupă de controlul personajului. În acest script, vom
            detecta apăsările de taste și vom modifica poziția personajului în funcție de acestea.
          </p>
          <StepItem number={1} title="Crearea scriptului">
            <p>
              Creează un script nou numit <code>player_controller.gd</code> și atașează-l la nodul personajului.
            </p>
          </StepItem>
          <StepItem number={2} title="Implementarea funcției _physics_process">
            <p>
              În script, implementează funcția <code>_physics_process</code>. Această funcție este apelată de Godot
              de mai multe ori pe secundă și este locul ideal pentru a detecta apăsările de taste și a modifica
              poziția personajului.
            </p>
            <CodeBlock language="gdscript">{`
extends KinematicBody2D

var speed = 200
var velocity = Vector2()

func _physics_process(delta):
    velocity = Vector2()
    if Input.is_action_pressed("move_right"):
        velocity.x += 1
    if Input.is_action_pressed("move_left"):
        velocity.x -= 1
    if Input.is_action_pressed("move_down"):
        velocity.y += 1
    if Input.is_action_pressed("move_up"):
        velocity.y -= 1

    velocity = velocity.normalized() * speed
    velocity = move_and_slide(velocity)
`}</CodeBlock>
          </StepItem>
          <StepItem number={3} title="Folosirea funcției move_and_slide">
            <p>
              Funcția <code>move_and_slide</code> este o funcție importantă în Godot care se ocupă de mișcarea
              personajului și de coliziunile cu alte obiecte. Această funcție primește ca parametru un vector care
              reprezintă viteza personajului și returnează un vector care reprezintă viteza reală a personajului
              după ce au fost luate în considerare coliziunile.
            </p>
          </StepItem>
        </section>

        <section id="signals">
          <h2 className="text-2xl font-bold mb-4">Semnale și Events</h2>
          <p>
            Semnalele și evenimentele sunt un mecanism important în Godot care ne permite să interacționăm cu lumea
            jocului. Un semnal este un eveniment care este emis de un nod atunci când se întâmplă ceva. De exemplu,
            un nod poate emite un semnal atunci când este lovit de un alt obiect.
          </p>
          <StepItem number={1} title="Conectarea la un semnal">
            <p>
              Pentru a conecta un script la un semnal, trebuie să folosim funcția <code>connect</code>. Această
              funcție primește ca parametru numele semnalului și numele funcției care va fi apelată atunci când
              semnalul este emis.
            </p>
            <CodeBlock language="gdscript">{`
func _ready():
    get_node("Area2D").connect("body_entered", self, "_on_body_entered")

func _on_body_entered(body):
    print("Am intrat in zona!")
`}</CodeBlock>
          </StepItem>
        </section>

        <section id="exercises">
          <h2 className="text-2xl font-bold mb-4">Exerciții</h2>
          <ul className="list-decimal ml-5 space-y-4">
            <li>
              <p>Implementează un sistem de sănătate pentru personaj. Atunci când personajul este lovit de un
              inamici, scade-i din viață. Când ajunge la 0 viata, distruge personajul.</p>
            </li>
            <li>
              <p>Adaugă animații pentru personaj. Când personajul se mișcă spre dreapta, rulează animația de mers
              spre dreapta. Când personajul stă pe loc, rulează animația de stat pe loc.</p>
            </li>
            <li>
              <p>Implementează un sistem de colectare a obiectelor. Atunci când personajul intră în contact cu un
              obiect, colectează-l și adaugă-l la inventar.</p>
            </li>
          </ul>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session3;
