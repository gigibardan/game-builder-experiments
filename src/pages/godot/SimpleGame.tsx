
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { 
  InfoBox, 
  StepItem as StepItemComponent, 
  Challenge, 
  LearningOutcome 
} from '@/components/LessonComponents';
import { CodeBlock } from '@/components/CodeBlock';
import { AlertTriangle } from 'lucide-react';

// Create a wrapper for StepItem to allow children
const StepItem = ({ number, title, children }) => {
  return (
    <StepItemComponent number={number} title={title}>
      {children}
    </StepItemComponent>
  );
};

const SimpleGame = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'setup', title: 'Configurarea proiectului' },
    { id: 'player', title: 'Crearea personajului' },
    { id: 'enemies', title: 'Inamici și obstacole' },
    { id: 'ui', title: 'Interfața utilizator' },
    { id: 'export', title: 'Exportarea jocului' }
  ];

  const resources = [
    { title: 'Documentația Godot', url: 'https://docs.godotengine.org/en/stable/' },
    { title: 'Godot Asset Library', url: 'https://godotengine.org/asset-library/' },
    { title: 'Comunitatea Godot', url: 'https://godotengine.org/community/' }
  ];

  // Define learning outcomes as an array
  const learningOutcomes = [
    'Să configurezi un proiect Godot de la zero',
    'Să creezi și să controlezi un personaj într-un joc',
    'Să implementezi inamici și obstacole care interacționează cu personajul',
    'Să creezi o interfață de utilizator simplă pentru a afișa informații despre joc',
    'Să exporți jocul pentru diferite platforme'
  ];

  return (
    <LessonLayout
      title="Crearea unui Joc Simplu în Godot"
      subtitle="Proiect practic • Godot Engine"
      courseId="godot" 
      sessionId="game"
      heroColor="bg-indigo-700"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Lecția anterioară",
        path: "/godot/session5"
      }}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Crearea unui Joc Simplu în Godot</h2>
          <p>
            În acest proiect practic, vom crea un joc simplu în Godot Engine. Acest joc va include un personaj
            controlabil, inamici, obstacole și o interfață de utilizator. Scopul este de a oferi o experiență
            practică în utilizarea Godot și de a înțelege cum funcționează diferitele componente ale unui joc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3">Ce vom învăța</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Configurarea unui proiect Godot</li>
                <li>Crearea și controlul unui personaj</li>
                <li>Implementarea inamicilor și obstacolelor</li>
                <li>Crearea unei interfețe de utilizator simple</li>
                <li>Exportarea jocului</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-bold text-lg mb-3">Concepte cheie</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Scene și noduri</li>
                <li>Scripturi GDScript</li>
                <li>Input și controlul personajului</li>
                <li>Coliziuni și fizică</li>
                <li>Interfața utilizator (UI)</li>
              </ul>
            </div>
          </div>
        </section>

        <LearningOutcome items={learningOutcomes} />

        <section>
          <h2 className="text-2xl font-bold mb-4">Configurarea proiectului</h2>
          <p className="mb-6">
            Primul pas este configurarea proiectului în Godot Engine. Vom crea un nou proiect și vom importa
            resursele necesare.
          </p>

          <StepItem number={1} title="Crearea unui nou proiect">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Deschide Godot Engine.</li>
              <li>Apasă pe "New Project".</li>
              <li>Alege un nume și un director pentru proiect.</li>
              <li>Apasă pe "Create & Edit".</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Importarea resurselor">
            <p className="mb-2">Importă resursele necesare (imagini, sunete etc.) în proiect:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Creează un director "assets" în directorul proiectului.</li>
              <li>Copiază resursele în directorul "assets".</li>
              <li>În Godot, resursele vor apărea automat în panoul "FileSystem".</li>
            </ol>
          </StepItem>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Crearea personajului</h2>
          <p className="mb-6">
            Vom crea un personaj controlabil care se poate mișca și interacționa cu mediul.
          </p>

          <StepItem number={1} title="Crearea scenei personajului">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Scene" {">"} "New Scene".</li>
              <li>Alege "KinematicBody2D" ca nod rădăcină.</li>
              <li>Salvează scena ca "player.tscn".</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Adăugarea unui sprite">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod "Sprite" ca copil al nodului "KinematicBody2D".</li>
              <li>În panoul "Inspector", setează textura sprite-ului la imaginea personajului.</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Adăugarea unei coliziuni">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod "CollisionShape2D" ca copil al nodului "KinematicBody2D".</li>
              <li>În panoul "Inspector", setează forma coliziunii la un dreptunghi sau cerc.</li>
              <li>Ajustează dimensiunile coliziunii pentru a se potrivi cu sprite-ul personajului.</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Adăugarea unui script">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe nodul "KinematicBody2D".</li>
              <li>Apasă pe butonul "Attach Script" din panoul "Inspector".</li>
              <li>Alege un nume și un director pentru script.</li>
              <li>Apasă pe "Create".</li>
            </ol>
          </StepItem>

          <StepItem number={5} title="Scrierea scriptului personajului">
            <p className="mb-2">Adaugă următorul cod în scriptul personajului:</p>
            <CodeBlock language="gdscript">{`extends KinematicBody2D

export var speed = 200

func _physics_process(delta):
\tvar velocity = Vector2()
\tif Input.is_action_pressed("ui_right"):
\t\tvelocity.x += 1
\tif Input.is_action_pressed("ui_left"):
\t\tvelocity.x -= 1
\tif Input.is_action_pressed("ui_down"):
\t\tvelocity.y += 1
\tif Input.is_action_pressed("ui_up"):
\t\tvelocity.y -= 1
\t
\tvelocity = velocity.normalized() * speed
\tvelocity = move_and_slide(velocity)
`}</CodeBlock>
          </StepItem>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Inamici și obstacole</h2>
          <p className="mb-6">
            Vom adăuga inamici și obstacole care vor interacționa cu personajul.
          </p>

          <StepItem number={1} title="Crearea scenei inamicului">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Scene" {">"} "New Scene".</li>
              <li>Alege "KinematicBody2D" ca nod rădăcină.</li>
              <li>Salvează scena ca "enemy.tscn".</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Adăugarea unui sprite și a unei coliziuni">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Adaugă un nod "Sprite" ca copil al nodului "KinematicBody2D".</li>
              <li>În panoul "Inspector", setează textura sprite-ului la imaginea inamicului.</li>
              <li>Adaugă un nod "CollisionShape2D" ca copil al nodului "KinematicBody2D".</li>
              <li>În panoul "Inspector", setează forma coliziunii la un dreptunghi sau cerc.</li>
              <li>Ajustează dimensiunile coliziunii pentru a se potrivi cu sprite-ul inamicului.</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Adăugarea unui script">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe nodul "KinematicBody2D".</li>
              <li>Apasă pe butonul "Attach Script" din panoul "Inspector".</li>
              <li>Alege un nume și un director pentru script.</li>
              <li>Apasă pe "Create".</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Scrierea scriptului inamicului">
            <p className="mb-2">Adaugă următorul cod în scriptul inamicului:</p>
            <CodeBlock language="gdscript">{`extends KinematicBody2D

export var speed = 100

func _physics_process(delta):
\tvar direction = (get_node("../Player").position - position).normalized()
\tvar velocity = direction * speed
\tvelocity = move_and_slide(velocity)
`}</CodeBlock>
          </StepItem>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Interfața utilizator</h2>
          <p className="mb-6">
            Vom crea o interfață de utilizator simplă pentru a afișa informații despre joc, cum ar fi scorul sau
            viața personajului.
          </p>

          <StepItem number={1} title="Crearea scenei UI">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Scene" {">"} "New Scene".</li>
              <li>Alege "CanvasLayer" ca nod rădăcină.</li>
              <li>Adaugă un nod "Label" ca copil al nodului "CanvasLayer".</li>
              <li>Salvează scena ca "ui.tscn".</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Configurarea etichetei">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>În panoul "Inspector", setează textul etichetei la "Score: 0".</li>
              <li>Ajustează fontul, dimensiunea și culoarea etichetei.</li>
              <li>Poziționează eticheta în colțul din stânga sus al ecranului.</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Adăugarea unui script">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe nodul "Label".</li>
              <li>Apasă pe butonul "Attach Script" din panoul "Inspector".</li>
              <li>Alege un nume și un director pentru script.</li>
              <li>Apasă pe "Create".</li>
            </ol>
          </StepItem>

          <StepItem number={4} title="Scrierea scriptului UI">
            <p className="mb-2">Adaugă următorul cod în scriptul UI:</p>
            <CodeBlock language="gdscript">{`extends Label

var score = 0

func _ready():
\tupdate_score()

func update_score():
\ttext = "Score: %s" % score
`}</CodeBlock>
          </StepItem>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Exportarea jocului</h2>
          <p className="mb-6">
            Ultimul pas este exportarea jocului pentru diferite platforme.
          </p>

          <StepItem number={1} title="Deschiderea panoului de export">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Project" {">"} "Export".</li>
            </ol>
          </StepItem>

          <StepItem number={2} title="Configurarea setărilor de export">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Add" și alege platforma pentru care vrei să exporți (Windows, macOS, Linux, Web).</li>
              <li>Configurează setările de export, cum ar fi numele jocului, versiunea și pictograma.</li>
            </ol>
          </StepItem>

          <StepItem number={3} title="Exportarea jocului">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Apasă pe "Export Project".</li>
              <li>Alege un director pentru a salva jocul exportat.</li>
              <li>Apasă pe "Save".</li>
            </ol>
          </StepItem>
        </section>
      </div>
    </LessonLayout>
  );
};

export default SimpleGame;
