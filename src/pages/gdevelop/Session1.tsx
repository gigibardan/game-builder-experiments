import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const GDevelopLesson3 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'initiere-proiect', title: 'Inițiere proiect' },
    { id: 'configurarea-scenei', title: 'Configurarea scenei' },
    { id: 'configurarea-player-ului', title: 'Configurarea jucatorului' },
    { id: 'configurarea-text-ului', title: 'Configurarea textului' },
    { id: 'configurarea-armei', title: 'Configurarea armei' },
    { id: 'configurarea-adversarului', title: 'Configurarea adversarului' },
    { id: 'evenimentele-jocului', title: 'Evenimentele jocului' },
    { id: 'logica-tragerii', title: 'Logica tragerii' },
    { id: 'miscarea-personajului', title: 'Mișcarea personajului' },
    { id: 'enemy', title: 'Configurarea adversarului' },
    { id: 'game-over', title: 'Sistemul Game Over' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutorial Objects și Events', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials' },
    { title: 'Ghid Sprites și Animații', url: 'https://wiki.gdevelop.io/gdevelop5/objects/sprite' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>

          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white p-6 rounded-xl mb-6">
            <p className="text-lg leading-relaxed">
              În această lecție vei învăța să construiești un joc de tip <strong>shoot 'em up</strong> 2D în GDevelop. 
              Jucătorul va controla un personaj care se mișcă pe o hartă fixă și va trage cu o armă în direcția 
              mouse-ului pentru a elimina inamicii. La coliziunea cu inamicul, acestuia i se scade viața, iar după 3 astfel de coliziuni inamicul moare.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să creezi și să configurezi un proiect de joc 2D în GDevelop",
            "Configurarea scenei cu personaj, armă, inamici și background",
            "Implementarea mecanicii de tragere cu mouse-ul",
            "Configurarea mișcării jucătorului cu animații",
            "Detectarea coliziunilor și sistemul de Game Over",
            "Sistem de punctaj și afișare scor în timp real"
          ]} />
        </>
      )
    },
    {
      id: 'initiere-proiect',
      title: 'Inițiere proiect în GDevelop',
      content: (
        <>
        <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_GamePreview.png" 
            alt="Imagine de asamblu al jocului" 
            caption="Imagine de asamblu al jocului"
          />

          <p className="mb-4">
            Deschide GDevelop și creează un proiect nou pentru jocul nostru de acțiune 2D.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>Deschide GDevelop și selectează <strong className="text-red-600">Create a new project</strong>.</p>
            <p className="mt-2">Alege opțiunea <strong className="text-red-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">VaneazaInamicii</code>.</p>
          </StepItem>

          <InfoBox title="Tip de proiect recomandat" icon="info" variant="primary">
            Pentru acest tutorial vom folosi un proiect gol care ne oferă libertatea completă de a construi jocul nostru de la zero.
          </InfoBox>

          <StepItem number={2} title="Creează obiectele necesare">
            <p>Navighează în dreapta, în zona <strong className="text-blue-600">Scene Objects</strong>, și adaugă următoarele obiecte:</p>
            
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Nume obiect</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tip</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Descriere</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Costum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Player</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Personajul controlat de jucător</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/GDevelop_S1_Player1.png" download className="text-blue-600 underline">Descarcă Costum 1</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Player2.png" download className="text-blue-600 underline">Descarcă Costum 2</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Player3.png"download className="text-blue-600 underline">Descarcă Costum 3</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Player4.png" download className="text-blue-600 underline">Descarcă Costum 4</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gun</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Arma atașată de Player care trage în direcția mouse-ului</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/GDevelop_S1_Gun.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Bullet</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Glonțul care va fi lansat din armă</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/GDevelop_S1_Bullet.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Enemy</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Inamicii care trebuie eliminați</td>
                  <td className="border border-gray-300 px-4 py-2">
                     <a href="/assets/images/gdevelop/GDevelop_S1_Enemy1.png" download className="text-blue-600 underline">Descarcă Costum 1</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Enemy2.png" download className="text-blue-600 underline">Descarcă Costum 2</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Enemy3.png"download className="text-blue-600 underline">Descarcă Costum 3</a><br></br>
                    <a href="/assets/images/gdevelop/GDevelop_S1_Enemy4.png" download className="text-blue-600 underline">Descarcă Costum 4</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Floor</td>
                  <td className="border border-gray-300 px-4 py-2">Tiled Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Fundalul hărții (pattern repetat)</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/GDevelop_S1_Floor.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">txt_coins</td>
                  <td className="border border-gray-300 px-4 py-2">Text</td>
                  <td className="border border-gray-300 px-4 py-2">Afișează scorul (ex: "Points: 0")</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-400 italic">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">SpawnObjects</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Locul de spawn al inamicilor</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-400">
                    <a href="/assets/images/gdevelop/GDevelop_S1_Center.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Enemy Health Bar</td>
                  <td className="border border-gray-300 px-4 py-2">Sprite</td>
                  <td className="border border-gray-300 px-4 py-2">Bara de viață a inamicilor</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-400">
                    <a href="/assets/images/gdevelop/EnemyHealthBar.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                </tr>
              </tbody>
            </table>

            </div>
          </StepItem>
        </>
      )
    },
    {
      id: 'configurarea-scenei',
      title: 'Configurarea scenei',
      content: (
        <>
          <p className="mb-4">
            Acum că avem toate obiectele create, să le pozițioinăm pe scenă pentru a forma jocul nostru.
          </p>

          <StepItem number={1} title="Adaugă fundalul">
            <p>Trage obiectul <code className="bg-purple-100 px-2 py-1 rounded">Floor</code> pe scenă și extinde-l să acopere întreaga suprafață ca fundal.</p>
          </StepItem>

          <StepItem number={2} title="Pozitionează jucătorul">
            <p>Adaugă <code className="bg-blue-100 px-2 py-1 rounded">Player</code> în mijlocul scenei. Acesta va fi punctul de control principal.</p>
          </StepItem>

          <StepItem number={3} title="Atașează arma">
            <p>Pune <code className="bg-green-100 px-2 py-1 rounded">Gun</code> puțin deasupra jucătorului. Poziția va fi repoziționată automat prin evenimente.</p>
          </StepItem>

          <StepItem number={4} title="Plasează inamicii">
            <p>Adaugă câteva instanțe de <code className="bg-red-100 px-2 py-1 rounded">Enemy</code> în jurul jucătorului, la distanțe variate.</p>
          </StepItem>

          <StepItem number={5} title="Adaugă interfața de scor">
            <p>Adaugă obiectul text <code className="bg-orange-100 px-2 py-1 rounded">txt_coins</code> în colțul din dreapta sus cu valoarea inițială: <strong>"Points: 0"</strong>.</p>
          </StepItem>

          <InfoBox title="Salvare recomandată" icon="info" variant="warning">
            Salvează proiectul tău cu <strong>Ctrl+S</strong> sau din butonul <strong>Save project</strong>, apoi navighează la tab-ul <strong>Events</strong> pentru a începe programarea logicii jocului.
          </InfoBox>
        </>
      )
    },
    {
      id: 'configurarea-player-ului',
      title: 'Configurarea Player-ului',
      content: (
        <>
          <p className="mb-4">
           Player-ul are două animații de joc. Acestea se creează prin apăsarea de două ori pe obiectul din partea dreaptă numit <strong className="text-blue-600">Player</strong>. În tab-ul  <strong className="text-blue-600">Properties</strong> adăugați două animații și numiți-le <strong className="text-blue-600">Idle</strong> și <strong className="text-blue-600">Run</strong>.
           Apoi, adăugați costumele personajului, prin butonul <strong>Add a sprite</strong> astfel încât să se realizeze mișcare personajului.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_PlayerPreview.png" 
            alt="Adăugare animații Player" 
            caption="Adăugare animații Player"
          />

          <p className="mb-4">
           De asemenea, vom avea nevoie de niște puncte fixe ale personajului. Pentru a edita punctele fixe apăsăm pe <strong className="text-blue-600">Edit points</strong> care se află în josul paginii afișate mai sus, adică în josul paginii <strong>Edit Player.</strong>
           Se va deschide o pagină nouă numită Edit points. Centrăm punctele existente <code className="bg-blue-100 px-2 py-1 rounded text-sm">Origin</code> și <code className="bg-blue-100 px-2 py-1 rounded text-sm">Center</code> în mijlocul personajului și adăugăm un nou punct(prin butonul <strong>Add a point</strong>) numit <code className="bg-blue-100 px-2 py-1 rounded text-sm">Gun</code> pe care îl poziționăm de asemenea în mijlocul personajului <code className="bg-blue-100 px-2 py-1 rounded text-sm">X: 128.5,  Y: 235.5</code>.
           Acest nou punct situează arma în poziția în care l-am fixat. Apoi apăsăm pe butonul <strong className="text-blue-600">Apply</strong> pentru a salva modificările.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_Player_points.png" 
            alt="Punctele Player-ului" 
            caption="Punctele Player-ului"
          />
        </>
      )
    },
     {
      id: 'configurarea-text-ului',
      title: 'Configurarea Text-ului',
      content: (
        <>
          <p className="mb-4">
           Apăsăm pe <code className="bg-blue-100 px-2 py-1 rounded text-sm">txt_coins</code> de două ori pentru a intra în meniul de editare. Acolo rămane doar de editat conținutul câmpului <code className="bg-blue-100 px-2 py-1 rounded text-sm">Initial text to display</code> în <strong>Points: 0 </strong>.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_TextPreview.png" 
            alt="Setarea textului inițial" 
            caption="Setarea textului inițial"
          />

        </>
      )
    },
     {
      id: 'configurarea-armei',
      title: 'Configurarea Armei',
      content: (
        <>
          <p className="mb-4">
           Apăsăm pe <code className="bg-blue-100 px-2 py-1 rounded text-sm">Gun</code> de două ori pentru a intra în meniul de editare. În acest meniu accesăm pagina de editare a punctelor armei prin butonul <strong>Edit points</strong>. În această fereastră poziționăm punctele <code className="bg-blue-100 px-2 py-1 rounded text-sm">Origin</code> și <code className="bg-blue-100 px-2 py-1 rounded text-sm">Center</code> în mijlocul armei, iar punctul <code className="bg-blue-100 px-2 py-1 rounded text-sm">BulletPoint</code> îl poziționăm în vârful armei. <code className="bg-blue-100 px-2 py-1 rounded text-sm">X: 807.5, Y: 422.5</code>. După aceste modificări, apăsăm butonul <strong>Apply</strong> pentru a le salva.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_GunPreview.png" 
            alt="Setarea textului inițial" 
            caption="Setarea textului inițial"
          />

        </>
      )
    },
    {
      id: 'configurarea-adversarului',
      title: 'Configurarea Adversarului',
      content: (
        <>
          <p className="mb-4">
           Adversarul are două animații de joc. Acestea se creează prin apăsarea de două ori pe obiectul din partea dreaptă numit <strong className="text-blue-600">Enemy</strong>. În tab-ul  <strong className="text-blue-600">Properties</strong> adăugați două animații și numiți-le <strong className="text-blue-600">Walking</strong> și <strong className="text-blue-600">Hurt</strong>.
           Apoi, adăugați costumele personajului, prin butonul <strong>Add a sprite</strong> astfel încât să se realizeze animarea personajului. Salvați modificările apăsând pe butonul <strong>Apply</strong>.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_EnemyPreview.png" 
            alt="Adăugare animații Enemy" 
            caption="Adăugare animații Enemy"
          />

          <p className="mb-4">
           De asemenea, vom avea nevoie de niște puncte fixe ale personajului. Pentru a edita punctele fixe apăsăm pe <strong className="text-blue-600">Edit points</strong> care se află în josul paginii afișate mai sus, adică în josul paginii <strong>Edit Enemy.</strong>
           Se va deschide o pagină nouă numită Edit points. Centrăm punctul <code className="bg-blue-100 px-2 py-1 rounded text-sm">Center</code>, iar punctul <code className="bg-blue-100 px-2 py-1 rounded text-sm">Origin</code> îl poziționăm desupra personajului, având coordonatele: <code className="bg-blue-100 px-2 py-1 rounded text-sm">X: 13,  Y: 0</code>. În acest punct <strong>Origin</strong> va fi situat bara de viață a personajului.
           Apăsăm butonul <strong className="text-blue-600">Apply</strong> pentru a salva modificările.
          </p>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_EnemyPoints.png" 
            alt="Punctele Enemy-ului" 
            caption="Punctele Enemy-ului"
          />
        </>
      )
    },
    {
      id: 'evenimentele-jocului',
      title: 'Evenimentele jocului (Gameplay Logic)',
      content: (
        <>
        <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_Preview_Events.png" 
            alt="Preview comenzi" 
            caption="Preview comenzi"
          />
          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_EnemyCode.png" 
            alt="Preview comenzi adversar" 
            caption="Preview comenzi adversar"
          />

          <p className="mb-4">
            Accesează tab-ul <strong className="text-blue-600">„Untitled scene (Events)"</strong> din partea de sus. 
            Aici vom adăuga logica jocului în secțiuni organizate pentru o dezvoltare clară și eficientă.
          </p>

          <InfoBox title="Organizarea evenimentelor" icon="star" variant="secondary">
            Vom împărți logica jocului în secțiuni clare: Beginning of scene, Enemy, Player (cu subsecțiunile Gun și Movement) și Game Over.<br />
            <br />
            Pentru a grupa evenimentele apăsăm <strong>Click dreapta</strong> pe un eveniment, apoi <strong>Add</strong> și în cele din urmă <strong>Event group</strong>.<br />
           <br />
            De asemenea, pentru subsecțiunile <strong>Gun</strong> și <strong>Movement</strong> urmați pașii următori: <strong>Click dreapta pe Event group {'->'} Add {'->'} Sub Event</strong>
          </InfoBox>


          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_EventGroup.png" 
            alt="Grupare comenzi" 
            caption="Grupare comenzi"
          />

          <h3 className="text-lg font-semibold mb-4 text-gray-800"> Beginning of scene (La începutul scenei)</h3>
          <p className="mb-4">
            Evenimentele din această secțiune se execută <strong className="text-green-600">o singură dată</strong>, 
            când începe jocul, pentru a inițializa setările de bază.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-800 mb-2">Evenimente de adăugat:</h4>
            <div className="space-y-2">
              <div className="border-l-4 border-blue-500 pl-3">
                <p><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded text-sm">At the beginning of the scene</code></p>
                <p><strong>Acțiuni:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                  <li>Change camera zoom to <code className="bg-gray-100 px-1 py-0.5 rounded">2</code> (pe layer: Base layer)</li>
                  <li>Center camera on: <code className="bg-gray-100 px-1 py-0.5 rounded">Floor</code></li>
                  <li>Set variable <code className="bg-gray-100 px-1 py-0.5 rounded">Points</code> la <code className="bg-gray-100 px-1 py-0.5 rounded">0</code></li>
                </ul>
              </div>
            </div>
          </div>

          <InfoBox title="Scop" icon="info" variant="primary">
            Aceste setări inițiale configurează zoom-ul camerei pentru o vizibilitate optimă și inițializează sistemul de punctaj.
          </InfoBox>
        </>
      )
    },
    {
      id: 'logica-tragerii',
      title: 'Logica tragerii (Gun Mechanics)',
      content: (
        <>
          <p className="mb-4">
            Implementăm mecanica de tragere care se declanșează când jucătorul apasă click stânga pe mouse. 
            Arma va trage gloanțe în direcția cursorului.
          </p>

          <div className="bg-red-50 p-4 rounded-lg mb-6">
      <h4 className="font-semibold text-red-800 mb-3">Configurația Gun System:</h4>
      
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h5 className="font-medium text-blue-700">Poziționarea și rotația Gun:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Acțiuni permanente:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Poziționează arma: <code className="bg-blue-100 px-1 py-0.5 rounded">Change the position of Gun: set to Player.PointX("Gun") (x axis), set to Player.PointY("Gun") (y axis)</code></li>
              <li>Rotește arma către cursor: <code className="bg-blue-100 px-1 py-0.5 rounded">Rotate Gun towards CursorX();CursorY() at speed 0 deg/second</code></li>
            </ul>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h5 className="font-medium text-green-700">Tragerea cu arma:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-green-100 px-2 py-1 rounded">Touch or "Left" mouse button is released</code></li>
            <li><strong>Acțiuni:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Creează glonț: <code className="bg-green-100 px-1 py-0.5 rounded">Fire Bullet from Gun, at position Gun.PointX("BulletPoint"); Gun.PointY("BulletPoint"), toward angle Gun.Angle() and speed 200 px/s</code></li>
            </ul>
          </ul>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h5 className="font-medium text-orange-700">Orientarea Player-ului în funcție de cursor:</h5>
          <div className="space-y-3">
            <div className="border-l-2 border-orange-300 pl-3">
              <h6 className="font-medium text-orange-600">Când cursorul este în stânga:</h6>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>Condiție:</strong> <code className="bg-orange-100 px-2 py-1 rounded">The X position of Player {'<'} CursorX()</code></li>
                <li><strong>Acțiuni:</strong></li>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nu întoarce Player-ul: <code className="bg-orange-100 px-1 py-0.5 rounded">Flip horizontally Player: no</code></li>
                  <li>Nu întoarce Gun-ul: <code className="bg-orange-100 px-1 py-0.5 rounded">Flip vertically Gun: no</code></li>
                </ul>
              </ul>
            </div>

            <div className="border-l-2 border-orange-300 pl-3">
              <h6 className="font-medium text-orange-600">Când cursorul este în dreapta:</h6>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>Condiție:</strong> <code className="bg-orange-100 px-2 py-1 rounded">The X position of Player {'>'} CursorX()</code></li>
                <li><strong>Acțiuni:</strong></li>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Întoarce Player-ul: <code className="bg-orange-100 px-1 py-0.5 rounded">Flip horizontally Player: yes</code></li>
                  <li>Întoarce Gun-ul: <code className="bg-orange-100 px-1 py-0.5 rounded">Flip vertically Gun: yes</code></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h5 className="font-medium text-red-700">Ștergerea glonțului la distanță:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded">Player distance to Bullet is below 400 pixels</code></li>
            <li><strong>Acțiune:</strong> Șterge glonțul: <code className="bg-red-100 px-2 py-1 rounded">Delete Bullet</code></li>
          </ul>
        </div>
      </div>
    </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4">Explicația logicii de tragere:</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium text-purple-700">Detectarea input-ului</h5>
                <p className="text-gray-700 text-sm">Evenimentul se declanșează când jucătorul eliberează butonul stâng al mouse-ului, oferind control precis asupra tragerii.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-medium text-orange-700">Poziționarea armei</h5>
                <p className="text-gray-700 text-sm">Arma se atașează automat la un punct specific al jucătorului și se rotește către poziția cursorului.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-medium text-red-700">Lansarea glonțului</h5>
                <p className="text-gray-700 text-sm">Glonțul se creează la vârful armei și primește direcția și viteza necesare pentru a se deplasa către țintă.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'miscarea-personajului',
      title: 'Mișcarea personajului (Movement)',
      content: (
        <>
          <p className="mb-4">
            Configurăm sistemul de mișcare al jucătorului cu animații corespunzătoare pentru a crea o experiență de joc fluidă.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-3">Configurația mișcării:</h4>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-medium text-blue-700">Pentru mișcare activă:</h5>
                <p className="text-sm mb-2"><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded">Player is moving</code></p>
                <p className="text-sm"><strong>Acțiune:</strong> Schimbă animația în <code className="bg-green-100 px-2 py-1 rounded">"Run"</code></p>
              </div>
              
              <div className="border-l-4 border-gray-500 pl-4">
                <h5 className="font-medium text-gray-700">Pentru starea de repaus:</h5>
                <p className="text-sm mb-2"><strong>Condiție:</strong> <code className="bg-gray-100 px-2 py-1 rounded">Player is NOT moving</code></p>
                <p className="text-sm"><strong>Acțiune:</strong> Schimbă animația în <code className="bg-orange-100 px-2 py-1 rounded">"Idle"</code></p>
              </div>
            </div>
          </div>

          <InfoBox title="Cerințe pentru animații" icon="warning" variant="warning">
            Sprite-ul jucătorului trebuie să aibă cel puțin două animații configurate:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li><strong>"Run"</strong> - pentru mișcare</li>
              <li><strong>"Idle"</strong> - pentru starea de repaus</li>
            </ul>
          </InfoBox>

          <StepItem number={1} title="Configurează comportamentul de mișcare">
            <p>În obiectul <code className="bg-blue-100 px-2 py-1 rounded">Player</code>, adaugă comportamentul <strong className="text-blue-600">Top-down movement (4 or 8 directions)</strong> pentru control cu tastatura.</p>
          </StepItem>

          <StepItem number={2} title="Setează viteza de mișcare">
            <p>În proprietățile comportamentului, configurează viteza la <strong>150-200 pixels/secundă</strong> pentru o mișcare optimă.</p>
          </StepItem>
        </>
      )
    },   {
  id: 'enemy',
  title: 'Enemy',
  content: (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white">
        
        <p className="mb-6 text-gray-700">
          Implementăm logica completă pentru sistemul de inamici, incluzând spawn-ul, mișcarea, 
          coliziunile și sistemul de game over.
        </p>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-red-800 mb-3">Configurația Enemy System:</h4>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h5 className="font-medium text-green-700">Spawn și Inițializare:</h5>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>La începutul scenei:</strong> Pornește timer-ul <code className="bg-green-100 px-2 py-1 rounded">"Enemy Spawn"</code></li>
                <li><strong>Scalare:</strong> Setează scara Enemy la <code className="bg-gray-100 px-1 py-0.5 rounded">0.01</code></li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h5 className="font-medium text-red-700">Setarea animației "Hurt"</h5>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>Condiție: </strong><code className="bg-red-100 px-2 py-1 rounded">The animation of Enemy = "Hurt"</code></li>
                <li><strong>Acțiune: </strong> Mișcă inamicul spre jucător <code className="bg-red-100 px-2 py-1 rounded">Move Enemy toward Player with an instant force of 10 pixels</code></li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-medium text-blue-700">Spawn Logic:</h5>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>Timer:</strong> <code className="bg-blue-100 px-2 py-1 rounded">"Enemy Spawn" {'>'} 1 secunde</code></li>
                <li><strong>Condiție suplimentară:</strong> Alege un obiect random din <code className="bg-gray-100 px-1 py-0.5 rounded">SpawnObjects</code>: <code className="bg-blue-100 px-1 py-0.5 rounded">Pick a random SpawnObjects</code></li>
                <li><strong>Acțiuni:</strong></li>
                
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Creează obiect Enemy la pozițiile SpawnObject-ului: </li><code className="bg-blue-100 px-1 py-0.5 rounded">Create object <strong>Enemy</strong> at position <strong>Enemy.X();Enemy.Y()</strong> (layer: Base Layer)</code>
                  <li>Restartează timer-ul "Enemy Spawn": </li><code className="bg-blue-100 px-1 py-0.5 rounded"> Start(or reset) the timer <strong>"Enemy Spawn"</strong></code>
                  <li>Crează si așează obiectul <strong>HealthBar_Enemy</strong></li><code className="bg-blue-100 px-1 py-0.5 rounded">Create object <strong>HealthBar_Enemy</strong> at position <strong>Enemy.X(); Enemy.Y()</strong> (layer: Base Layer)</code>
                  <li>Crează o legătura între HealthBar și Enemy</li><code className="bg-blue-100 px-1 py-0.5 rounded">Link <strong>HealthBar_Enemy</strong> and <strong>Enemy</strong></code>
                  
                </ul>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 mt-6">
              <h5 className="font-medium text-purple-700">Orientează inamicul în funcție de jucător:</h5>
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium text-purple-700">Pentru mișcare activă:</h5>
                <p className="text-sm mb-2"><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded">The X position of <strong>Enemy</strong> {'>='} <strong>Player.X()</strong></code></p>
                <p className="text-sm"><strong>Acțiune:</strong><code className="bg-orange-100 px-2 py-1 rounded">Flip horizontally <strong>Enemy: <span className="text-green-600">yes</span></strong></code></p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 mt-6">
                <h5 className="font-medium text-purple-700">Pentru starea de repaus:</h5>
                <p className="text-sm mb-2"><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded">The X position of <strong>Enemy</strong> {'<='} <strong>Player.X()</strong></code></p>
<p className="text-sm"><strong>Acțiune:</strong><code className="bg-orange-100 px-2 py-1 rounded">Flip horizontally <strong>Enemy: <span className="text-red-600">no</span></strong></code></p>
              </div>
            </div>
          </div>
        </div>
        
         <div className="bg-red-50 p-4 rounded-lg mb-6">
      
      <div className="space-y-4">
        <div className="border-l-4 border-purple-500 pl-4">
          <h5 className="font-medium text-purple-700">Când Enemy moare:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-purple-100 px-2 py-1 rounded">Enemy is dead</code></li>
            <li><strong>Acțiuni:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Schimbă variabila Points: <code className="bg-purple-100 px-1 py-0.5 rounded">Change the variable Points: add 1</code></li>
              <li>Schimbă textul: <code className="bg-purple-100 px-1 py-0.5 rounded">Change the text of txt_coins: set to "Points: " + Points</code></li>
              
            </ul>
          </ul>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h5 className="font-medium text-purple-700">Sub-eveniment </h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-purple-100 px-2 py-1 rounded">Take it account all <strong>"HealthBar_Enemy"</strong> linked to <strong>Enemy</strong></code></li>
            <li><strong>Acțiuni:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
             
              <li>Șterge HealthBar_Enemy: <code className="bg-purple-100 px-1 py-0.5 rounded">Delete HealthBar_Enemy</code></li>
              <li>Șterge Enemy: <code className="bg-purple-100 px-1 py-0.5 rounded">Delete Enemy</code></li>
            </ul>
          </ul>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h5 className="font-medium text-yellow-700">Când Bullet lovește Enemy:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-yellow-100 px-2 py-1 rounded">Bullet is in collision with Enemy</code></li>
            <li><strong>Acțiuni:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Șterge glonțul: <code className="bg-yellow-100 px-1 py-0.5 rounded">Delete Bullet</code></li>
              <li>Aplică damage: <code className="bg-yellow-100 px-1 py-0.5 rounded">Apply 1 points of damage to Enemy (Damage can be reduced by Shield: yes, Armor: yes)</code></li>
              <li>Schimbă animația: <code className="bg-yellow-100 px-1 py-0.5 rounded">Change the animation of Enemy: set to "Hurt"</code></li>
            </ul>
          </ul>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h5 className="font-medium text-yellow-700">Sub-eveniment</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-yellow-100 px-1 py-0.5 rounded">Take it account all <strong>"HealthBar_Enemy"</strong> linked to <strong>Enemy</strong></code></li>
            <li><strong>Acțiune:</strong></li>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ajustează bara de viață: <code className="bg-yellow-100 px-1 py-0.5 rounded">Change the width of HealthBar_Enemy: set to (Enemy.Health:health()/Enemy.Health:MaxHealth())*12</code></li>
            </ul>
          </ul>
        </div>

        

        <div className="border-l-4 border-green-500 pl-4">
          <h5 className="font-medium text-green-700">Când animația Enemy se termină:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-green-100 px-2 py-1 rounded">The animation of Enemy is finished</code></li>
            <li><strong>Acțiune:</strong> Schimbă animația la Walking: <code className="bg-green-100 px-2 py-1 rounded">Change the animation of Enemy: set to "Walking"</code></li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h5 className="font-medium text-blue-700">Repetă pentru fiecare Enemy:</h5>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
            <li><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded">Take it account all <strong>"HealthBar_Enemy"</strong> linked to <strong>Enemy</strong></code></li>
            <li><strong>Acțiune:</strong> Poziționează HealthBar: <code className="bg-blue-100 px-2 py-1 rounded">Change the position of HealthBar_Enemy: set to Enemy.PointX("HealthBar") (x axis), Enemy.PointY("HealthBar") (y axis)</code></li>
          </ul>
        </div>

        <InfoBox title="Petru a repeta pentru fiecare personaj" icon="warning" variant="warning">
            Petru a repeta pentru fiecare personaj un set de condiții și acțiuni trebuie urmați următorii pași:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li><strong>Click dreapta</strong> pe eveniment</li>
              <li><strong>Add</strong> - din meniul deschis</li>
              <li><strong>For each object</strong> - selectați obiectul (personajul) dorit</li>
            </ul>
          </InfoBox>
          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S1_ForEachObject.png" 
            alt="For each Object" 
          />
      </div>
    </div>

        

        
      </div>
    </>
  )
},
    {
      id: 'game-over',
      title: 'Sistemul Game Over',
      content: (
        <>
         <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-red-800 mb-3">Sistemul Game Over:</h4>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-4">
              <h5 className="font-medium text-red-700">Player vs Enemy Collision:</h5>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>Condiții:</strong></li>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><code className="bg-red-100 px-2 py-1 rounded">Enemy is in collision with Player</code></li>
                  <li>Poziția X a Enemy {'>'} Player.X() (pentru verificare direcție)</li>
                  <li>Poziția X a Enemy {'<'} Player.X() (pentru verificare direcție)</li>
                </ul>
                <li><strong>Acțiuni Game Over:</strong></li>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Schimbă poziția HealthBar_Enemy la Enemy.Point.X("HealthBar") (x axis), Enemy.Point.Y("HealthBar") (y axis)</li>
                  <li>Schimbă animația Enemy la <code className="bg-red-100 px-2 py-1 rounded">"Walking"</code></li>
                </ul>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h5 className="font-medium text-orange-700">Reset și Restart:</h5>
              <p className="text-sm mb-2">Bazat pe screenshot-ul tău, pare că sistemul folosește o logică de restart în loc de game over tradițional. Pentru un sistem complet de game over, adaugă:</p>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li>Verifică dacă <code className="bg-gray-100 px-1 py-0.5 rounded">Points {'>'} Best</code></li>
                <li>Dacă da, setează <code className="bg-gray-100 px-1 py-0.5 rounded">Best = Points</code></li>
                <li>Actualizează textul pentru best score</li>  
                <li>Resetează <code className="bg-gray-100 px-1 py-0.5 rounded">Points = 0</code></li>
                <li>Schimbă scena sau restartează scena curentă</li>
              </ul>
            </div>
          </div>
        </div>

        <StepItem number={1} title="Verifică configurația de spawn">
          <p>Asigură-te că ai:</p>
          <div className="bg-green-50 p-3 rounded mt-2">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Obiectele <code className="bg-green-100 px-2 py-1 rounded">SpawnObjects</code> plasate în punctele dorite de spawn</li>
              <li>Timer-ul <code className="bg-blue-100 px-2 py-1 rounded">"Enemy Spawn"</code> configurat corect</li>
              <li>Animațiile <code className="bg-gray-100 px-1 py-0.5 rounded">"Hurt"</code> și <code className="bg-gray-100 px-1 py-0.5 rounded">"Walking"</code> pentru Enemy</li>
            </ul>
          </div>
        </StepItem>

        <StepItem number={2} title="Testează sistemul de sănătate">
          <p>Verifică:</p>
          <div className="bg-yellow-50 p-3 rounded mt-2">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>HealthBar_Enemy se creează și se leagă corect de fiecare Enemy</li>
              <li>Lățimea se actualizează corect când Enemy primește damage</li>
              <li>HealthBar dispare când Enemy moare</li>
            </ul>
          </div>
        </StepItem>

        <StepItem number={3} title="Implementează Game Over complet">
          <p>Pentru un sistem mai robust, adaugă:</p>
          <div className="bg-red-50 p-3 rounded mt-2">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Oprește toate timer-ele active</li>
              <li>Afișează un mesaj de Game Over</li>
              <li>Salvează scorul în variabile persistente</li>
              <li>Oferă opțiunea de restart</li>
            </ul>
          </div>
        </StepItem>

        <InfoBox title="Optimizări recomandate" icon="star" variant="secondary">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Limitează numărul de Enemy activi pe scenă pentru performanță</li>
            <li>Adaugă un sistem de dificultate crescândă (spawn rate mai rapid)</li>
            <li>Implementează power-up-uri pentru varietate</li>
            <li>Consideră un sistem de wave-uri pentru structură</li>
          </ul>
        </InfoBox>
        </>
      )
    },
 
    
     {
      id: 'concluzii',
      title: 'Concluzii și extensii',
      content: (
        <>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">🎓 Ce ai învățat în această lecție</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Cum să creezi un joc 2D de acțiune complet în GDevelop
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Să configurezi o scenă cu personaj, armă, inamici și background
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Să implementezi logica de tragere controlată cu mouse-ul
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Să gestionezi coliziunile și sistemul de Game Over
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Să afișezi și actualizezi scorul în timp real
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Să organizezi evenimentele pentru o dezvoltare eficientă
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-3">💡 Sfaturi și bune practici</h4>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Organizează obiectele în grupuri pentru o scenă mai curată
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Testează evenimentele după fiecare modificare
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Folosește nume sugestive pentru obiecte și variabile
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">🚀 Extensii și îmbunătățiri</h3>
            <p className="text-purple-700 mb-4">Pentru a face jocul mai interesant și mai provocator, poți adăuga următoarele:</p>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Inamici care urmăresc jucătorul folosind pathfinding sau direcție simplă</li>
              <li>Un sistem de viață pentru jucător și bară de sănătate</li>
              <li>Nivele multiple sau creșterea dificultății în timp</li>
              <li>Sunete pentru tragere, lovituri și Game Over</li>
              <li>O scenă dedicată pentru ecranul final cu scorul și buton de restart</li>
            </ul>
          </div>

          <Challenge title="Provocare practică: Creează o versiune extinsă" difficulty="medium">
            <p className="mb-3">Aplică tot ce ai învățat și extinde jocul cu următoarele cerințe:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Adaugă 3 valuri de inamici care apar treptat</li>
              <li>Include o bară de viață pentru jucător</li>
              <li>Creează un sistem de scor care salvează cel mai bun rezultat</li>
              <li>Adaugă decoruri, sunete și efecte vizuale</li>
            </ul>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="gdevelop"
      sessionId="3"
      title="Vânează inamicii"
      subtitle="Creează un joc de acțiune 2D cu logică de tragere și scor în timp real"
      heroColor="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500"

      previousLesson={{ title: "Vezi toate cursurile", path: "../courses/gdevelop/"}}
      nextLesson={{ title: "Lecția următoare", path: "/gdevelop/session2" }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default GDevelopLesson3;
