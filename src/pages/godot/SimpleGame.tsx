import React from 'react';
import { Accordion } from "@/components/ui/accordion"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, CheckCircle, CircleSlash, ExclamationTriangle } from 'lucide-react';
import { CodeBlock } from "@/components/CodeBlock";

interface StepItemProps {
  number: number;
  title: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">
        Pasul {number}: {title}
      </h3>
      {children}
    </div>
  );
};

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, children }) => {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  );
};

const SimpleGame = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Crearea unui Joc Simplu în Godot</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="introducere">
          <AccordionTrigger>Introducere</AccordionTrigger>
          <AccordionContent>
            <p className="mb-4">
              Acest ghid te va ajuta să creezi un joc simplu în Godot Engine. Vom acoperi pașii de bază,
              de la configurarea proiectului până la adăugarea de interacțiuni simple.
            </p>
            <Badge variant="secondary">Nivel: Începător</Badge>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cerinte">
          <AccordionTrigger>Cerințe</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Godot Engine (versiunea 4.x) instalat</li>
              <li>Cunoștințe de bază despre interfața Godot</li>
              <li>Un editor de text pentru scripturi (opțional)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="configurareProiect">
          <AccordionTrigger>Configurarea Proiectului</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Crearea unui nou proiect">
              <p className="mb-2">Deschide Godot Engine și creează un nou proiect. Alege un nume și un director pentru proiect.</p>
            </StepItem>

            <StepItem number={2} title="Crearea scenei principale">
              <p className="mb-2">Creează o nouă scenă (Scene) și alege un nod rădăcină. Pentru un joc 2D simplu, poți folosi un Node2D ca nod rădăcină.</p>
            </StepItem>

            <StepItem number={3} title="Salvarea scenei">
              <p className="mb-2">Salvează scena principală cu un nume relevant, de exemplu "main.tscn".</p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="adaugarePlayer">
          <AccordionTrigger>Adăugarea Player-ului</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Crearea scenei pentru player">
              <p className="mb-2">Creează o nouă scenă pentru player. Alege un nod adecvat, cum ar fi KinematicBody2D pentru mișcare bazată pe fizică sau Sprite pentru un player static.</p>
            </StepItem>

            <StepItem number={2} title="Adăugarea unui sprite">
              <p className="mb-2">Adaugă un nod Sprite ca și copil al nodului player-ului. Setează textura sprite-ului cu o imagine a player-ului.</p>
            </StepItem>

            <StepItem number={3} title="Adăugarea coliziunii">
              <p className="mb-2">Adaugă un nod CollisionShape2D ca și copil al nodului player-ului. Configurează forma coliziunii (de obicei un dreptunghi sau un cerc) pentru a se potrivi cu sprite-ul.</p>
            </StepItem>

            <StepItem number={4} title="Adăugarea scriptului pentru player">
              <p className="mb-2">Adaugă un script la nodul player-ului pentru a controla mișcarea. Iată un exemplu simplu de script GDScript:</p>
              <CodeBlock
                language="gdscript"
                code={`extends KinematicBody2D

export var speed = 200

func _physics_process(delta):
    var velocity = Vector2()
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    if Input.is_action_pressed("ui_down"):
        velocity.y += 1
    if Input.is_action_pressed("ui_up"):
        velocity.y -= 1

    velocity = velocity.normalized() * speed
    velocity = move_and_slide(velocity)
`}
              />
            </StepItem>

            <StepItem number={5} title="Instanțierea player-ului în scena principală">
              <p className="mb-2">În scena principală, adaugă o instanță a scenei player-ului (click dreapta pe nodul principal și selectează "Instanțiate Child Scene").</p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="adaugareInamici">
          <AccordionTrigger>Adăugarea Inamicilor</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Crearea scenei pentru inamic">
              <p className="mb-2">Creează o nouă scenă pentru inamic, similar cu player-ul. Folosește un KinematicBody2D sau un alt nod adecvat.</p>
            </StepItem>

            <StepItem number={2} title="Adăugarea unui sprite și a coliziunii">
              <p className="mb-2">Adaugă un sprite și un CollisionShape2D la scena inamicului, similar cu player-ul.</p>
            </StepItem>

            <StepItem number={3} title="Adăugarea scriptului pentru inamic">
              <p className="mb-2">Adaugă un script pentru a controla comportamentul inamicului. De exemplu, poți face inamicul să se miște spre player:</p>
              <CodeBlock
                language="gdscript"
                code={`extends KinematicBody2D

export var speed = 100
var player = null

func _ready():
    player = get_tree().get_nodes_in_group("Player")[0]

func _physics_process(delta):
    if player == null:
        return

    var direction = (player.global_position - global_position).normalized()
    var velocity = direction * speed
    velocity = move_and_slide(velocity)
`}
              />
            </StepItem>

            <StepItem number={4} title="Instanțierea inamicilor în scena principală">
              <p className="mb-2">În scena principală, adaugă mai multe instanțe ale scenei inamicului.</p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="coliziuniSiInteractiuni">
          <AccordionTrigger>Coliziuni și Interacțiuni</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Detectarea coliziunilor">
              <p className="mb-2">
                Pentru a detecta coliziunile între player și inamici, poți folosi semnalele oferite de nodurile KinematicBody2D sau Area2D.
                De exemplu, poți conecta semnalul body_entered al unui Area2D la o funcție din scriptul player-ului.
              </p>
            </StepItem>

            <StepItem number={2} title="Implementarea interacțiunilor">
              <p className="mb-2">
                În funcția de coliziune, poți implementa diverse interacțiuni, cum ar fi reducerea vieții player-ului, distrugerea inamicului sau afișarea unui mesaj de game over.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="interfataUtilizator">
          <AccordionTrigger>Interfața Utilizator (UI)</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Adăugarea unui CanvasLayer">
              <p className="mb-2">Pentru a crea o interfață utilizator, adaugă un nod CanvasLayer ca și copil al nodului principal.</p>
            </StepItem>

            <StepItem number={2} title="Adăugarea elementelor UI">
              <p className="mb-2">
                Adaugă elemente UI, cum ar fi Label pentru afișarea scorului sau a vieții player-ului, și Button pentru a oferi opțiuni de meniu.
                Poți folosi noduri Control pentru a organiza elementele UI.
              </p>
            </StepItem>

            <StepItem number={3} title="Script pentru UI">
              <p className="mb-2">Adaugă un script pentru a actualiza elementele UI în funcție de evenimentele din joc. De exemplu, poți actualiza scorul atunci când player-ul colectează un obiect.</p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="optimizareSiExtindere">
          <AccordionTrigger>Optimizare și Extindere</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Optimizarea performanței">
              <p className="mb-2">
                Pentru a optimiza performanța jocului, poți folosi tehnici cum ar fi gruparea obiectelor, reducerea numărului de coliziuni și utilizarea de resurse optimizate.
              </p>
            </StepItem>

            <StepItem number={2} title="Extinderea jocului">
              <p className="mb-2">
                Pentru a extinde jocul, poți adăuga noi elemente, cum ar fi power-ups, nivele multiple, inamici mai inteligenți și o poveste mai complexă.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resurseSuplimentare">
          <AccordionTrigger>Resurse Suplimentare</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="https://docs.godotengine.org/en/stable/" target="_blank" rel="noopener noreferrer">Documentația Godot Engine</a></li>
              <li><a href="https://godotengine.org/asset-library/" target="_blank" rel="noopener noreferrer">Godot Asset Library</a></li>
              <li><a href="https://www.youtube.com/watch?v=MeRogPpjBEE" target="_blank" rel="noopener noreferrer">Tutoriale video pe YouTube</a></li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="concluzie">
          <AccordionTrigger>Concluzie</AccordionTrigger>
          <AccordionContent>
            <p className="mb-4">
              Acest ghid a acoperit pașii de bază pentru crearea unui joc simplu în Godot Engine.
              Cu aceste cunoștințe, poți începe să experimentezi și să creezi propriile jocuri.
            </p>
            <CheckCircle className="text-green-500 inline-block mr-2" />
            <span className="text-green-500">Felicitări! Ai creat un joc simplu în Godot.</span>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sfaturi">
          <AccordionTrigger>Sfaturi Utile</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Folosește noduri adecvate pentru fiecare element al jocului (ex: KinematicBody2D pentru player, Sprite pentru imagini).</li>
              <li>Organizează-ți scenele și scripturile pentru a facilita gestionarea proiectului.</li>
              <li>Experimentează cu diferite setări și parametri pentru a obține efectele dorite.</li>
              <li>Consultă documentația Godot Engine pentru informații detaliate despre fiecare funcție și nod.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="depanare">
          <AccordionTrigger>Depanare</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Verifică erorile din consola Godot pentru a identifica problemele din scripturi.</li>
              <li>Folosește funcția print() pentru a afișa valori și a urmări fluxul de execuție al scripturilor.</li>
              <li>Asigură-te că nodurile sunt conectate corect și că semnalele sunt emise și recepționate.</li>
              <li>Caută soluții pe forumurile și comunitățile Godot pentru probleme comune.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="stilizare">
          <AccordionTrigger>Stilizare</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Adăugarea unui fundal">
              <p className="mb-2">
                Pentru a adăuga un fundal, poți folosi un nod Sprite și să-i setezi textura cu o imagine de fundal.
                Asigură-te că fundalul este poziționat în spatele celorlalte elemente ale jocului.
              </p>
            </StepItem>

            <StepItem number={2} title="Folosirea de culori și gradienti">
              <p className="mb-2">
                Poți folosi culori și gradienti pentru a stiliza elementele UI și pentru a crea efecte vizuale interesante.
                Experimentează cu diferite combinații de culori pentru a obține aspectul dorit.
              </p>
            </StepItem>

            <StepItem number={3} title="Adăugarea de efecte vizuale">
              <p className="mb-2">
                Poți adăuga efecte vizuale, cum ar fi umbre, lumini și particule, pentru a îmbunătăți aspectul jocului.
                Folosește nodurile adecvate pentru fiecare efect și ajustează parametrii pentru a obține rezultate optime.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sunet">
          <AccordionTrigger>Sunet</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Adăugarea efectelor sonore">
              <p className="mb-2">
                Pentru a adăuga efecte sonore, poți folosi nodul AudioStreamPlayer.
                Încarcă un fișier audio și apelează funcția play() pentru a reda sunetul.
              </p>
            </StepItem>

            <StepItem number={2} title="Adăugarea muzicii de fundal">
              <p className="mb-2">
                Pentru a adăuga muzică de fundal, poți folosi un nod AudioStreamPlayer și să-l setezi să se repete.
                Asigură-te că muzica de fundal nu este prea tare și că se potrivește cu atmosfera jocului.
              </p>
            </StepItem>

            <StepItem number={3} title="Controlul volumului">
              <p className="mb-2">
                Poți controla volumul efectelor sonore și al muzicii de fundal folosind funcțiile oferite de nodul AudioStreamPlayer.
                Permite jucătorului să ajusteze volumul din meniul de opțiuni.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="animatii">
          <AccordionTrigger>Animații</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Crearea unui AnimationPlayer">
              <p className="mb-2">
                Pentru a crea animații, adaugă un nod AnimationPlayer ca și copil al nodului pe care vrei să-l animezi.
              </p>
            </StepItem>

            <StepItem number={2} title="Crearea unei animații">
              <p className="mb-2">
                Creează o nouă animație în AnimationPlayer și adaugă keyframes pentru proprietățile pe care vrei să le animezi.
                Poți anima poziția, rotația, scala, culoarea și alte proprietăți ale nodurilor.
              </p>
            </StepItem>

            <StepItem number={3} title="Controlul animațiilor">
              <p className="mb-2">
                Poți controla animațiile din scripturi folosind funcțiile oferite de AnimationPlayer.
                Apelează funcția play() pentru a reda o animație și funcția stop() pentru a opri o animație.
              </p>
            </StepItem>

            <StepItem number={4} title="Animații complexe">
              <p className="mb-2">
                Pentru animații mai complexe, poți folosi noduri AnimationTree și StateMachine.
                Aceste noduri permit crearea de animații bazate pe stări și tranziții între stări.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="optimizareGrafica">
          <AccordionTrigger>Optimizare Grafică</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Folosirea de texturi optimizate">
              <p className="mb-2">
                Folosește texturi optimizate pentru a reduce consumul de memorie și a îmbunătăți performanța jocului.
                Comprimă texturile și folosește formate adecvate (ex: PNG pentru imagini cu transparență, JPG pentru imagini fără transparență).
              </p>
            </StepItem>

            <StepItem number={2} title="Folosirea de atlasuri de texturi">
              <p className="mb-2">
                Folosește atlasuri de texturi pentru a reduce numărul de draw calls și a îmbunătăți performanța jocului.
                Un atlas de texturi este o imagine care conține mai multe texturi mai mici.
              </p>
            </StepItem>

            <StepItem number={3} title="Folosirea de LOD (Level of Detail)">
              <p className="mb-2">
                Folosește LOD (Level of Detail) pentru a reduce complexitatea grafică a obiectelor aflate la distanță.
                LOD implică folosirea de modele mai simple pentru obiectele aflate la distanță și modele mai detaliate pentru obiectele aflate aproape.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="inteligentaArtificiala">
          <AccordionTrigger>Inteligența Artificială (AI)</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Folosirea de State Machines">
              <p className="mb-2">
                Folosește State Machines pentru a controla comportamentul inamicilor și al altor personaje non-player (NPC).
                Un State Machine este un model de comportament care definește stările posibile ale unui personaj și tranzițiile între stări.
              </p>
            </StepItem>

            <StepItem number={2} title="Folosirea de Pathfinding">
              <p className="mb-2">
                Folosește Pathfinding pentru a permite inamicilor să navigheze prin nivel și să urmărească player-ul.
                Godot oferă noduri Navigation2D și NavigationAgent2D pentru a facilita implementarea pathfinding-ului.
              </p>
            </StepItem>

            <StepItem number={3} title="Comportamente avansate">
              <p className="mb-2">
                Pentru comportamente mai avansate, poți folosi tehnici cum ar fi Behavior Trees și Goal-Oriented Action Planning (GOAP).
                Aceste tehnici permit crearea de AI mai complexă și mai adaptabilă.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="generareProcedurala">
          <AccordionTrigger>Generare Procedurală</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Generarea de nivele">
              <p className="mb-2">
                Poți folosi generarea procedurală pentru a crea nivele aleatorii.
                Generarea procedurală implică folosirea de algoritmi pentru a crea conținut în mod automat.
              </p>
            </StepItem>

            <StepItem number={2} title="Generarea de texturi">
              <p className="mb-2">
                Poți folosi generarea procedurală pentru a crea texturi aleatorii.
                Generarea procedurală de texturi implică folosirea de algoritmi pentru a crea imagini în mod automat.
              </p>
            </StepItem>

            <StepItem number={3} title="Avantaje și dezavantaje">
              <p className="mb-2">
                Generarea procedurală poate reduce timpul de dezvoltare și poate crea conținut variat, dar poate fi dificil de controlat și poate duce la rezultate neașteptate.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="multiplayer">
          <AccordionTrigger>Multiplayer</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Arhitectura multiplayer">
              <p className="mb-2">
                Pentru a crea un joc multiplayer, trebuie să alegi o arhitectură adecvată (ex: client-server sau peer-to-peer).
                Arhitectura client-server implică un server central care gestionează starea jocului și comunică cu clienții.
                Arhitectura peer-to-peer implică comunicarea directă între clienți.
              </p>
            </StepItem>

            <StepItem number={2} title="Implementarea rețelei">
              <p className="mb-2">
                Godot oferă noduri NetworkedMultiplayerENet și WebSocketPeer pentru a facilita implementarea rețelei.
                Aceste noduri permit trimiterea și primirea de date între clienți și server.
              </p>
            </StepItem>

            <StepItem number={3} title="Sincronizarea stării jocului">
              <p className="mb-2">
                Pentru a crea un joc multiplayer funcțional, trebuie să sincronizezi starea jocului între clienți și server.
                Sincronizarea stării jocului implică trimiterea de date despre poziția, rotația, viața și alte proprietăți ale obiectelor din joc.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exportare">
          <AccordionTrigger>Exportare</AccordionTrigger>
          <AccordionContent>
            <StepItem number={1} title="Configurarea exportului">
              <p className="mb-2">
                Pentru a exporta jocul, trebuie să configurezi setările de export.
                Setările de export includ platforma țintă (ex: Windows, macOS, Linux, Android, iOS, HTML5), iconița jocului, numele jocului și alte opțiuni.
              </p>
            </StepItem>

            <StepItem number={2} title="Testarea exportului">
              <p className="mb-2">
                Înainte de a distribui jocul, testează exportul pentru a te asigura că funcționează corect.
                Testează jocul pe diferite platforme și dispozitive pentru a identifica eventualele probleme.
              </p>
            </StepItem>

            <StepItem number={3} title="Distribuirea jocului">
              <p className="mb-2">
                După ce ai testat exportul și te-ai asigurat că funcționează corect, poți distribui jocul.
                Poți distribui jocul pe diferite platforme, cum ar fi Steam, Itch.io, Google Play Store și App Store.
              </p>
            </StepItem>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colectabile">
          <AccordionTrigger>Obiecte colectabile</AccordionTrigger>
          <AccordionContent>
            <>
              <p className="mb-4">
                Acum vom adăuga obiecte colectabile la nivel, cum ar fi monede sau power-ups. 
                Aceste obiecte vor oferi jucătorului un scop și vor adăuga valoare jocului.
              </p>

              <StepItem number={1} title="Crearea scenei pentru obiectul colectabil">
                <p className="mb-2">Vom crea un obiect colectabil într-o scenă separată:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Apasă pe butonul "+" din Scene dock sau Ctrl+N pentru o nouă scenă</li>
                  <li>Adaugă un nod Area2D și numește-l "Coin"</li>
                  <li>Adaugă un nod Sprite2D ca și copil pentru Area2D</li>
                  <li>Setează textura sprite-ului cu o imagine de monedă</li>
                  <li>Adaugă un nod CollisionShape2D ca și copil pentru Area2D</li>
                  <li>Configurează forma coliziunii (de obicei un CircleShape2D)</li>
                  <li>Salvează scena (ex: "coin.tscn")</li>
                </ol>
              </StepItem>

              <StepItem number={2} title="Adăugarea scriptului la obiectul colectabil">
                <p className="mb-2">Acum vom adăuga un script la nodul Area2D pentru a detecta când jucătorul colectează moneda:</p>
                <CodeBlock
                  language="gdscript"
                  code={`extends Area2D

signal collected

func _ready():
    # Conectăm semnalul body_entered la funcția _on_body_entered
    body_entered.connect(_on_body_entered)

func _on_body_entered(body):
    if body.is_in_group("Player"):
        # Emitem semnalul collected
        collected.emit()
        # Adăugăm un efect de animație înainte de a șterge moneda
        $AnimationPlayer.play("collected")
        # Așteptăm terminarea animației
        await $AnimationPlayer.animation_finished
        # Ștergem moneda din scenă
        queue_free()`}
                />
              </StepItem>

              <StepItem number={3} title="Adăugarea animației de colectare">
                <p className="mb-2">Adăugăm un nod AnimationPlayer și creăm o animație pentru momentul colectării:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Adaugă un nod AnimationPlayer ca și copil al nodului Area2D</li>
                  <li>Creează o nouă animație numită "collected"</li>
                  <li>Adaugă keyframes pentru a scala sprite-ul și pentru a-l face să dispară treptat</li>
                  <li>Setează durata animației la aproximativ 0.5 secunde</li>
                </ol>
              </StepItem>

              <StepItem number={4} title="Instanțierea monedelor în nivelul principal">
                <p className="mb-2">Acum putem adăuga mai multe instanțe ale monedei în nivelul principal:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>În scena principală, adaugă un nod Node2D numit "Coins"</li>
                  <li>Click dreapta pe nodul "Coins" și selectează "Instanțiate Child Scene"</li>
                  <li>Selectează scena "coin.tscn"</li>
                  <li>Poziționează moneda în locul dorit din nivel</li>
                  <li>Repetă procesul pentru a adăuga mai multe monede</li>
                </ol>
              </StepItem>

              <InfoBox title="Sfat">
                Grupează monedele într-un nod separat pentru a facilita gestionarea lor. 
                Poziționează-le strategic în nivel pentru a ghida jucătorul și a-l recompensa 
                pentru explorare.
              </InfoBox>
            </>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SimpleGame;
