
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';

const Session5 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'joc-arcade', title: 'Joc Arcade' },
    { id: 'interfata', title: 'Design-ul interfeței' },
    { id: 'sprite-uri', title: 'Gestionarea sprite-urilor' },
    { id: 'controlul-jocului', title: 'Controlul jocului' },
    { id: 'coliziuni', title: 'Detectarea coliziunilor' },
    { id: 'scor', title: 'Sistem de scor' },
    { id: 'exercitiu', title: 'Exercițiu pentru acasă' },
  ];

  const resources = [
    { title: 'Documentație App Inventor - Canvas', url: 'https://appinventor.mit.edu/explore/ai2/canvas' },
    { title: 'Documentație App Inventor - Sprites', url: 'https://appinventor.mit.edu/explore/ai2/sprites' },
    { title: 'Tutorial video - Game Development', url: 'https://www.youtube.com/watch?v=IA2qBajGjJ0' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <LearningOutcome items={[
            "Înțelegerea conceptului de joc arcade și a elementelor principale",
            "Utilizarea sprite-urilor și a canvas-ului pentru jocuri",
            "Implementarea controalelor pentru jucător și a mișcării obiectelor",
            "Detectarea coliziunilor și implementarea unui sistem de scor"
          ]} />
          
          <p className="mt-4 text-gray-700">
            În această lecție vom învăța să creăm un joc arcade simplu folosind App Inventor. Vom folosi componenta 
            Canvas și sprite-uri pentru a crea un joc în care jucătorul trebuie să evite obstacolele și să colecteze 
            obiecte pentru a obține puncte.
          </p>
        </>
      )
    },
    {
      id: 'joc-arcade',
      title: 'Joc Arcade',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Jocul nostru arcade va fi un joc simplu în care jucătorul controlează un personaj care trebuie să 
            evite obstacolele și să colecteze obiecte pentru a obține puncte. Jocul include următoarele elemente:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Un personaj controlat de jucător</li>
            <li>Obstacole care se deplasează pe ecran</li>
            <li>Obiecte de colectat pentru a obține puncte</li>
            <li>Un sistem de scor</li>
            <li>Vieți pentru jucător</li>
            <li>Un ecran de "Game Over" când jucătorul pierde toate viețile</li>
          </ul>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://appinventor.mit.edu/explore/sites/all/files/Tutorials/raindrop/figure3.png" 
              alt="Game Example" 
              className="w-full"
            />
          </div>
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Design-ul interfeței',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Interfața jocului nostru va consta într-un Canvas pentru zona de joc și etichete pentru afișarea 
            scorului și a numărului de vieți.
          </p>

          <InfoBox title="Structura interfeței" variant="primary">
            <p>Interfața jocului va fi organizată astfel:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Un VerticalArrangement pentru întregul ecran</li>
              <li>Un HorizontalArrangement pentru afișarea scorului și a vieților</li>
              <li>Un Canvas pentru zona de joc</li>
              <li>Un buton pentru a începe jocul</li>
              <li>Un buton pentru a reseta jocul</li>
            </ol>
          </InfoBox>

          <StepItem number={1} title="Configurarea Designer-ului">
            <p>Pentru a crea interfața jocului, vom folosi următoarea structură în Designer:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Adaugă un VerticalArrangement care va ocupa întregul ecran</li>
              <li>Adaugă un HorizontalArrangement în partea de sus pentru scor și vieți</li>
              <li>Adaugă două etichete (Label) în HorizontalArrangement pentru a afișa scorul și viețile</li>
              <li>Adaugă un Canvas sub HorizontalArrangement pentru zona de joc</li>
              <li>Adaugă un alt HorizontalArrangement în partea de jos pentru butoane</li>
              <li>Adaugă un buton "Start" și un buton "Reset" în acest HorizontalArrangement</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'sprite-uri',
      title: 'Gestionarea sprite-urilor',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Sprite-urile sunt obiecte grafice care se pot deplasa pe Canvas. În jocul nostru, vom avea trei 
            tipuri de sprite-uri: jucătorul, obstacolele și obiectele de colectat.
          </p>

          <InfoBox title="Tipuri de sprite-uri în App Inventor" variant="secondary">
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>ImageSprite</strong> - un sprite bazat pe o imagine</li>
              <li><strong>Ball</strong> - un sprite circular care poate ricosa</li>
              <li><strong>AnimatedSprite</strong> - un sprite cu animație (mai multe cadre)</li>
            </ul>
            <p className="mt-2">Pentru jocul nostru, vom folosi ImageSprite pentru toate elementele.</p>
          </InfoBox>

          <StepItem number={2} title="Adăugarea sprite-urilor în Canvas">
            <p>Vom adăuga următoarele sprite-uri în Canvas:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Din categoria "Drawing and Animation", adaugă un ImageSprite în Canvas pentru jucător</li>
              <li>Adaugă încă două ImageSprite pentru un obstacol și un obiect de colectat</li>
              <li>Pentru fiecare sprite, setează proprietățile Picture, Width, Height, X, Y și Interval</li>
              <li>Setează poziția inițială a jucătorului în partea de jos a ecranului</li>
              <li>Setează pozițiile inițiale ale obstacolelor și obiectelor de colectat în afara ecranului (vor fi generate dinamic)</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'controlul-jocului',
      title: 'Controlul jocului',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Vom implementa controlul jocului folosind butoanele de start și reset, precum și accelerometrul 
            pentru a mișca jucătorul.
          </p>

          <StepItem number={1} title="Inițializarea jocului">
            <p>La inițializarea ecranului, trebuie să setăm valorile implicite:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Screen1.Initialize<br/>
                &nbsp;&nbsp;set global score to 0<br/>
                &nbsp;&nbsp;set global lives to 3<br/>
                &nbsp;&nbsp;set ScoreLabel.Text to join "Score: " score<br/>
                &nbsp;&nbsp;set LivesLabel.Text to join "Lives: " lives<br/>
                &nbsp;&nbsp;set PlayerSprite.Visible to false<br/>
                &nbsp;&nbsp;set ObstacleSprite.Visible to false<br/>
                &nbsp;&nbsp;set CollectibleSprite.Visible to false<br/>
                &nbsp;&nbsp;set Clock1.TimerEnabled to false<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={2} title="Implementarea butonului Start">
            <p>Când utilizatorul apasă butonul Start, trebuie să inițiem jocul:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when StartButton.Click<br/>
                &nbsp;&nbsp;set PlayerSprite.Visible to true<br/>
                &nbsp;&nbsp;set PlayerSprite.X to divide Canvas1.Width by 2<br/>
                &nbsp;&nbsp;set PlayerSprite.Y to subtract Canvas1.Height by 50<br/>
                &nbsp;&nbsp;call generateObstacle<br/>
                &nbsp;&nbsp;call generateCollectible<br/>
                &nbsp;&nbsp;set Clock1.TimerEnabled to true<br/>
                &nbsp;&nbsp;set StartButton.Enabled to false<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={3} title="Implementarea butonului Reset">
            <p>Când utilizatorul apasă butonul Reset, trebuie să reinițializăm jocul:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when ResetButton.Click<br/>
                &nbsp;&nbsp;set global score to 0<br/>
                &nbsp;&nbsp;set global lives to 3<br/>
                &nbsp;&nbsp;set ScoreLabel.Text to join "Score: " score<br/>
                &nbsp;&nbsp;set LivesLabel.Text to join "Lives: " lives<br/>
                &nbsp;&nbsp;set PlayerSprite.Visible to false<br/>
                &nbsp;&nbsp;set ObstacleSprite.Visible to false<br/>
                &nbsp;&nbsp;set CollectibleSprite.Visible to false<br/>
                &nbsp;&nbsp;set Clock1.TimerEnabled to false<br/>
                &nbsp;&nbsp;set StartButton.Enabled to true<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={4} title="Implementarea controlului jucătorului">
            <p>Pentru a controla jucătorul, vom folosi accelerometrul:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when AccelerometerSensor1.AccelerationChanged<br/>
                &nbsp;&nbsp;if Clock1.TimerEnabled then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set PlayerSprite.X to add PlayerSprite.X multiply xAccel by -10<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if PlayerSprite.X &lt; 0 then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set PlayerSprite.X to 0<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if PlayerSprite.X &gt; subtract Canvas1.Width by PlayerSprite.Width then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set PlayerSprite.X to subtract Canvas1.Width by PlayerSprite.Width<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>
        </>
      )
    },
    {
      id: 'coliziuni',
      title: 'Detectarea coliziunilor',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            În jocul nostru, trebuie să detectăm coliziunile între jucător și alte sprite-uri (obstacole și 
            obiecte de colectat) pentru a implementa logica jocului.
          </p>

          <StepItem number={1} title="Detectarea coliziunii cu obstacolele">
            <p>Când jucătorul se ciocnește de un obstacol, acesta pierde o viață:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when ObstacleSprite.CollidedWith<br/>
                &nbsp;&nbsp;if other = PlayerSprite then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set global lives to subtract lives by 1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set LivesLabel.Text to join "Lives: " lives<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call Sound1.Vibrate with millisecs 300<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set ObstacleSprite.Visible to false<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call generateObstacle<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if lives = 0 then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;call gameOver<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={2} title="Detectarea coliziunii cu obiectele de colectat">
            <p>Când jucătorul colectează un obiect, acesta primește puncte:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when CollectibleSprite.CollidedWith<br/>
                &nbsp;&nbsp;if other = PlayerSprite then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set global score to add score by 10<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set ScoreLabel.Text to join "Score: " score<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set CollectibleSprite.Visible to false<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call generateCollectible<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>
        </>
      )
    },
    {
      id: 'scor',
      title: 'Sistem de scor',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Vom implementa un sistem de scor și vieți pentru a ține evidența progresului jucătorului. De asemenea, 
            vom implementa logica pentru sfârșitul jocului.
          </p>

          <StepItem number={1} title="Generarea obstacolelor și a obiectelor de colectat">
            <p>Vom crea două proceduri pentru a genera obstacole și obiecte de colectat:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                to generateObstacle<br/>
                &nbsp;&nbsp;set ObstacleSprite.Visible to true<br/>
                &nbsp;&nbsp;set ObstacleSprite.X to random integer from 0 to subtract Canvas1.Width by ObstacleSprite.Width<br/>
                &nbsp;&nbsp;set ObstacleSprite.Y to 0<br/>
                &nbsp;&nbsp;set ObstacleSprite.Speed to add 5 by divide score by 50<br/>
                <br/>
                to generateCollectible<br/>
                &nbsp;&nbsp;set CollectibleSprite.Visible to true<br/>
                &nbsp;&nbsp;set CollectibleSprite.X to random integer from 0 to subtract Canvas1.Width by CollectibleSprite.Width<br/>
                &nbsp;&nbsp;set CollectibleSprite.Y to 0<br/>
                &nbsp;&nbsp;set CollectibleSprite.Speed to add 3 by divide score by 100<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={2} title="Implementarea ceasului pentru mișcarea sprite-urilor">
            <p>Vom folosi un Clock pentru a deplasa obstacolele și obiectele de colectat în jos:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Clock1.Timer<br/>
                &nbsp;&nbsp;set ObstacleSprite.Y to add ObstacleSprite.Y by ObstacleSprite.Speed<br/>
                &nbsp;&nbsp;set CollectibleSprite.Y to add CollectibleSprite.Y by CollectibleSprite.Speed<br/>
                <br/>
                &nbsp;&nbsp;if ObstacleSprite.Y &gt; Canvas1.Height then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call generateObstacle<br/>
                &nbsp;&nbsp;end if<br/>
                <br/>
                &nbsp;&nbsp;if CollectibleSprite.Y &gt; Canvas1.Height then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call generateCollectible<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={3} title="Implementarea sfârșitului jocului">
            <p>Când jucătorul pierde toate viețile, jocul se termină:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                to gameOver<br/>
                &nbsp;&nbsp;set Clock1.TimerEnabled to false<br/>
                &nbsp;&nbsp;set PlayerSprite.Visible to false<br/>
                &nbsp;&nbsp;set ObstacleSprite.Visible to false<br/>
                &nbsp;&nbsp;set CollectibleSprite.Visible to false<br/>
                &nbsp;&nbsp;call Notifier1.ShowAlert with message join "Game Over! Your score: " score<br/>
                &nbsp;&nbsp;set StartButton.Enabled to true<br/>
              </p>
            </div>
          </StepItem>

          <InfoBox title="Sfat important" variant="warning">
            <p>Nu uita să adaugi un ceas (Clock) din categoria "Sensors" pentru a controla mișcarea sprite-urilor.</p>
            <p className="mt-2">De asemenea, adaugă un AccelerometerSensor pentru a controla jucătorul și un Sound pentru feedback.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitiu',
      title: 'Exercițiu pentru acasă',
      content: (
        <>
          <Challenge title="Extinde jocul arcade cu următoarele funcționalități" difficulty="medium">
            <p className="text-gray-700 mb-4">
              Extinde jocul arcade creat în timpul lecției adăugând:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">Adaugă mai multe tipuri de obstacole cu comportamente diferite</li>
              <li className="text-gray-700">Implementează power-up-uri care oferă jucătorului abilități speciale (invincibilitate temporară, viteză mărită, etc.)</li>
              <li className="text-gray-700">Adaugă un sistem de nivele cu dificultate crescătoare</li>
              <li className="text-gray-700">Implementează efecte sonore pentru diferite acțiuni (colectare obiecte, coliziune cu obstacole, etc.)</li>
              <li className="text-gray-700">Adaugă un sistem de high scores pentru a păstra evidența celor mai bune scoruri</li>
              <li className="text-gray-700">Implementează controale alternative (touch sau butoane) pe lângă accelerometru</li>
            </ul>
          </Challenge>

          <InfoBox title="Nu uita!" variant="success">
            <p>Încarcă jocul pe dispozitivul tău Android pentru a-l testa. Verifică toate funcționalitățile și asigură-te că jocul este distractiv și provocator.</p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="appinventor"
      sessionId="5"
      title="Joc Arcade"
      subtitle="Învățăm să creăm un joc arcade cu sprite-uri și detecție de coliziuni"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/appinventor/session4"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/appinventor/session6"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session5;
