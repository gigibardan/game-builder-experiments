
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample, ImageExample, BlockCodeExample } from '@/components/CodeExample';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Session5BeachBallBounce = () => {
  const sidebarItems = [
    { id: 'intro', title: 'Introducere', isActive: true },
    { id: 'obiective', title: 'Obiective' },
    { id: 'etapa1', title: 'Etapa 1: Mingea' },
    { id: 'etapa2', title: 'Etapa 2: Scena și controlul' },
    { id: 'etapa3', title: 'Etapa 3: Scorul' },
    { id: 'etapa4', title: 'Etapa 4: Efecte și sunet' },
    { id: 'provocare', title: 'Provocare' },
    { id: 'concluzii', title: 'Concluzii' }
  ];

  const resources = [
    { title: 'Platforma Scratch', url: 'https://scratch.mit.edu/' },
    { title: 'Tutoriale Scratch', url: 'https://scratch.mit.edu/projects/editor/?tutorial=all' },
    { title: 'Forum Scratch', url: 'https://scratch.mit.edu/discuss/' }
  ];

  return (
    <LessonLayout
      title="Beach Ball Bounce"
      subtitle="Lecția 5 • Scratch Programming"
      courseId="scratch"
      sessionId="5"
      heroColor="bg-gradient-to-r from-cyan-500 to-blue-500"
      sidebarItems={sidebarItems}
      resources={resources}
      previousLesson={{
        title: "Sesiunea 4: City Runner",
        path: "/scratch/session4cityrunner"
      }}
      nextLesson={{
        title: "Sesiunea 6: Stitch Beach Adventure",
        path: "/scratch/session6stitchbeach"
      }}
    >
      <div className="space-y-8">
        <section id="intro">
          <h2 className="text-2xl font-bold mb-4">Beach Ball Bounce</h2>
          <p className="mb-4">
            Bine ai venit la cursul despre "Beach Ball Bounce" în Scratch! Astăzi vom crea un joc distractiv în care vom controla o minge de plajă și o vom face să sară cât mai mult timp posibil fără să atingă solul.
          </p>
          
          <div className="bg-white border rounded-lg p-6 mb-6">
            <ImageExample 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-preview.png" 
              alt="Previzualizare joc Beach Ball Bounce" 
              caption="Jocul Beach Ball Bounce - Previzualizare"
            />
          </div>

          <LearningOutcome items={[
            "Cum să creezi animații în Scratch",
            "Cum să implementezi gravitație și sărituri",
            "Cum să creezi un sistem de scor",
            "Cum să adaugi efecte vizuale și sonore"
          ]} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Descrierea jocului</h3>
              <p>
                În acest joc, jucătorul controlează o minge de plajă și trebuie să o facă să sară cât mai mult timp posibil, atingând-o cu cursorul. Cu fiecare săritură, mingea câștigă puncte. Dacă mingea atinge solul, jocul se termină.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-blue-600">Elementele jocului:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>O minge de plajă care se mișcă</li>
                  <li>Gravitație care trage mingea în jos</li>
                  <li>Interacțiunea cu cursorul pentru a face mingea să sară</li>
                  <li>Un sistem de scor</li>
                  <li>Efecte vizuale și sonore</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-3">Începe proiectul</h3>
              <p className="mb-4">
                Pentru a începe să lucrezi la acest proiect, poți porni de la zero sau poți folosi proiectul starter care conține deja fundalul și personajele pregătite.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <a href="https://scratch.mit.edu/projects/editor/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <span>Începe de la zero</span>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
                  <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <span>Folosește proiectul starter</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="etapa1">
          <h2 className="text-2xl font-bold mb-4">Etapa 1: Creează și animează mingea de plajă</h2>
          
          <p className="mb-4">
            Primul pas este să creăm personajul principal al jocului nostru - mingea de plajă. Vom configura animația inițială și vom adăuga efecte de mișcare.
          </p>

          <StepItem number={1} title="Adaugă mingea de plajă">
            <p>În Scratch, vom căuta o minge de plajă în biblioteca de sprite-uri sau vom desena una nouă:</p>
            
            <ImageExample 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-step1.png" 
              alt="Adăugarea mingii de plajă" 
              caption="Selectarea sau desenarea unei mingi de plajă din biblioteca Scratch"
            />
          </StepItem>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>Dacă nu găsești o minge de plajă potrivită în biblioteca Scratch, poți căuta online o imagine cu o minge de plajă și să o încarci în proiect.</p>
          </InfoBox>
          
          <InfoBox title="Alternativă" icon="info" variant="secondary">
            <p>Poți crea propria minge de plajă folosind editorul de imagini din Scratch. Desenează un cerc și adaugă-i culori diferite pentru a obține efectul de minge de plajă.</p>
          </InfoBox>

          <StepItem number={2} title="Adaugă cod pentru gravitație">
            <p>Acum, vom adăuga cod mingii pentru a simula gravitația. Aceasta va face ca mingea să cadă constant:</p>
            
            <BlockCodeExample 
              title="Codul pentru gravitație" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-gravity.png" 
              alt="Codul pentru gravitație" 
              caption="Blocuri de cod pentru simularea gravitației în Scratch"
            />
          </StepItem>

          <StepItem number={3} title="Adaugă săritura la atingerea cursorului">
            <p>Adaugă acest cod pentru a face mingea să sară atunci când este atinsă de cursor:</p>
            
            <BlockCodeExample 
              title="Codul pentru săritură" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-bounce.png" 
              alt="Codul pentru săritură" 
              caption="Blocuri de cod pentru a face mingea să sară la atingerea cursorului"
            />
          </StepItem>
        </section>

        <section id="etapa2">
          <h2 className="text-2xl font-bold mb-4">Etapa 2: Creează scena și adaugă controlul</h2>
          
          <p className="mb-4">
            După ce am creat mingea și i-am adăugat mișcare, acum vom configura fundalul și vom îmbunătăți controlul jocului.
          </p>

          <StepItem number={1} title="Alege un fundal de plajă">
            <p>Selectează un fundal de plajă din biblioteca de fundaluri Scratch:</p>
            
            <ImageExample 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-background.png" 
              alt="Selectarea fundalului de plajă" 
              caption="Alegerea unui fundal de plajă potrivit din biblioteca Scratch"
            />
          </StepItem>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>Un fundal de plajă cu nisip în partea de jos și cer în partea de sus este ideal pentru jocul nostru.</p>
          </InfoBox>
          
          <InfoBox title="Alternativă" icon="info" variant="secondary">
            <p>Poți crea propriul fundal de plajă folosind editorul de imagini din Scratch sau poți încărca o imagine de pe internet.</p>
          </InfoBox>

          <StepItem number={2} title="Adaugă limite de margine">
            <p>Adaugă acest cod pentru a face mingea să ricoșeze când atinge marginile ecranului:</p>
            
            <BlockCodeExample 
              title="Codul pentru limitele de margine" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-edges.png" 
              alt="Codul pentru limitele de margine" 
              caption="Blocuri de cod pentru a face mingea să ricoșeze de marginile ecranului"
            />
          </StepItem>

          <StepItem number={3} title="Adaugă condiția de Game Over">
            <p>Acum, vom adăuga codul care va opri jocul când mingea atinge nisipul:</p>
            
            <BlockCodeExample 
              title="Codul pentru Game Over" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-gameover.png" 
              alt="Codul pentru Game Over" 
              caption="Blocuri de cod pentru a opri jocul când mingea atinge nisipul"
            />
          </StepItem>
        </section>

        <section id="etapa3">
          <h2 className="text-2xl font-bold mb-4">Etapa 3: Adaugă sistemul de scor</h2>
          
          <p className="mb-4">
            Acum vom adăuga un sistem de scor care va crește de fiecare dată când mingea sare după ce a fost atinsă de cursor.
          </p>

          <StepItem number={1} title="Creează variabila pentru scor">
            <p>Creează o variabilă numită "Scor" din secțiunea "Variabile":</p>
            
            <ImageExample 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-score-var.png" 
              alt="Crearea variabilei pentru scor" 
              caption="Crearea variabilei 'Scor' în Scratch"
            />
          </StepItem>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>Asigură-te că variabila "Scor" este vizibilă pe ecran pentru ca jucătorul să poată vedea punctajul curent.</p>
          </InfoBox>
          
          <InfoBox title="Alternativă" icon="info" variant="secondary">
            <p>Poți crea și alte variabile precum "Scor maxim" pentru a păstra cel mai bun scor obținut în joc.</p>
          </InfoBox>

          <StepItem number={2} title="Adaugă codul pentru actualizarea scorului">
            <p>Adaugă acest cod pentru a incrementa scorul de fiecare dată când mingea sare după atingerea cursorului:</p>
            
            <BlockCodeExample 
              title="Codul pentru actualizarea scorului" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-score-update.png" 
              alt="Codul pentru actualizarea scorului" 
              caption="Blocuri de cod pentru a incrementa scorul la fiecare săritură"
            />
          </StepItem>

          <StepItem number={3} title="Resetează scorul la început">
            <p>Adaugă acest cod pentru a reseta scorul la începutul jocului:</p>
            
            <BlockCodeExample 
              title="Codul pentru resetarea scorului" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-score-reset.png" 
              alt="Codul pentru resetarea scorului" 
              caption="Blocuri de cod pentru a reseta scorul la începutul jocului"
            />
          </StepItem>
        </section>

        <section id="etapa4">
          <h2 className="text-2xl font-bold mb-4">Etapa 4: Adaugă efecte vizuale și sonore</h2>
          
          <p className="mb-4">
            Pentru a face jocul mai interesant, vom adăuga efecte vizuale și sonore care se vor declanșa în timpul jocului.
          </p>

          <StepItem number={1} title="Adaugă efecte vizuale la săritură">
            <p>Adaugă efecte vizuale care se vor declanșa când mingea sare:</p>
            
            <BlockCodeExample 
              title="Codul pentru efecte vizuale" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-visual-effects.png" 
              alt="Codul pentru efecte vizuale" 
              caption="Blocuri de cod pentru a adăuga efecte vizuale la săritură"
            />
          </StepItem>

          <InfoBox title="Sfat" icon="info" variant="info">
            <p>Experimentează cu diferite efecte vizuale precum "culoare", "fantomă" sau "strălucire" pentru a găsi cel mai potrivit efect pentru jocul tău.</p>
          </InfoBox>
          
          <InfoBox title="Alternativă" icon="info" variant="secondary">
            <p>Poți adăuga și alte efecte vizuale precum schimbarea mărimii mingii sau rotirea acesteia pentru a face jocul mai dinamic.</p>
          </InfoBox>

          <StepItem number={2} title="Adaugă sunete la săritură și game over">
            <p>Acum, vom adăuga sunete care se vor auzi când mingea sare sau când jocul se termină:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <BlockCodeExample 
                title="Codul pentru sunetul de săritură" 
                src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-bounce-sound.png" 
                alt="Codul pentru sunetul de săritură" 
                caption="Adăugarea sunetului de săritură"
              />
              
              <BlockCodeExample 
                title="Codul pentru sunetul de game over" 
                src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-gameover-sound.png" 
                alt="Codul pentru sunetul de game over" 
                caption="Adăugarea sunetului de game over"
              />
            </div>
          </StepItem>

          <StepItem number={3} title="Adaugă mesajul de game over">
            <p>În final, vom adăuga un mesaj de game over care va apărea când jocul se termină și va afișa scorul final:</p>
            
            <BlockCodeExample 
              title="Codul pentru mesajul de game over" 
              src="https://elearning.techminds-academy.ro/assets/images/scratch-beachball-gameover-message.png" 
              alt="Codul pentru mesajul de game over" 
              caption="Blocuri de cod pentru a afișa mesajul de game over și scorul final"
            />
          </StepItem>
        </section>

        <section id="provocare" className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Provocări suplimentare</h2>
          
          <p className="mb-4">
            Felicitări! Ai creat jocul "Beach Ball Bounce". Pentru a-l face și mai interesant, încearcă aceste provocări suplimentare:
          </p>

          <div className="space-y-4">
            <Challenge title="Nivel de dificultate" difficulty="easy">
              <p>Adaugă un nivel de dificultate care crește pe măsură ce scorul crește, făcând mingea să cadă mai repede.</p>
            </Challenge>
            
            <Challenge title="Power-ups" difficulty="medium">
              <p>Adaugă power-ups care apar aleatoriu și oferă avantaje precum scor dublu sau sărituri mai înalte.</p>
            </Challenge>
            
            <Challenge title="Multiplayer" difficulty="hard">
              <p>Modifică jocul pentru a permite doi jucători să joace simultan, fiecare controlând propria minge.</p>
            </Challenge>
            
            <Challenge title="Niveluri" difficulty="hard">
              <p>Creează mai multe niveluri cu diferite fundaluri și obstacole.</p>
            </Challenge>
          </div>
        </section>

        <section id="concluzii">
          <h2 className="text-2xl font-bold mb-4">Concluzii</h2>
          
          <p className="mb-4">
            În această lecție, am învățat cum să creăm un joc simplu dar captivant în Scratch. Am implementat concepte importante precum:
          </p>

          <InfoBox title="Ce am învățat" icon="success" variant="success">
            <ul className="list-disc list-inside">
              <li>Cum să simulăm gravitația și săriturile</li>
              <li>Cum să implementăm interacțiunea cu cursorul</li>
              <li>Cum să folosim variabile pentru a ține scorul</li>
              <li>Cum să adăugăm efecte vizuale și sonore</li>
              <li>Cum să creăm condiții de game over</li>
            </ul>
          </InfoBox>

          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <Link to="/scratch/session6stitchbeach" className="flex items-center">
                <span>Continuă cu următoarea lecție: Stitch Beach Adventure</span>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Session5BeachBallBounce;
