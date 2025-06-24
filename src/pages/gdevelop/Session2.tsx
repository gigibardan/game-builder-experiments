import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const GDevelopLessonRomania = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'initiere-proiect', title: 'Inițiere proiect' },
    { id: 'configurarea-scenei', title: 'Configurarea scenei' },
    { id: 'evenimentele-jocului', title: 'Evenimentele jocului' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentația oficială GDevelop', url: 'https://docs.gdevelop.io/' },
    { title: 'Tutorial Objects și Events', url: 'https://wiki.gdevelop.io/gdevelop5/tutorials' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white p-6 rounded-xl mb-6">
            <p className="text-lg leading-relaxed">
              În această lecție vei învăța să creezi un joc simplu în GDevelop unde trebuie să tragi obiectele colorate în forma lor pentru a câștiga puncte. Obiectivul este să aduni cât mai multe puncte și să schimbi scena la "Victorie" când ajungi la 4 puncte.
            </p>
          </div>

          <LearningOutcome items={[
            "Cum să configurezi obiecte și scene în GDevelop",
            "Cum să detectezi coliziuni și să actualizezi scorul",
            "Cum să schimbi scena bazat pe condiții"
          ]} />

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Scene2Preview.png" 
            alt="Imagine de asamblu al jocului" 
            caption="Imagine de asamblu al jocului"
          />
        </>
      )
    },
    {
      id: 'initiere-proiect',
      title: 'Inițiere proiect în GDevelop',
      content: (
        <>
          <p className="mb-4">
            Să începem prin a crea un proiect nou pentru jocul nostru.
          </p>

          <StepItem number={1} title="Creează un proiect nou">
            <p>Deschide GDevelop și selectează <strong className="text-red-600">Create a new project</strong>.</p>
            <p className="mt-2">Alege opțiunea <strong className="text-red-600">Empty Game</strong> și salvează-l cu numele <code className="bg-gray-100 px-2 py-1 rounded">JocAventură</code>.</p>
          </StepItem>

          <StepItem number={2} title="Adaugă trei scene">
            <p>Apasă pe butonul de meniu din partea stânga sus a ecranului, apoi mergeți la secțiunea  <strong className="text-red-600">Scenes</strong>.</p>
            <p className="mt-2">Adăugați trei scene noi: <strong className="text-red-600">Acasa</strong>, <strong className="text-red-600">Joc</strong> și <strong className="text-red-600">Victorie</strong>.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_NewScene.png" 
            alt="newscene" 
            caption="Adaugă o scenă nouă"
          />

          <StepItem number={3} title="Adaugă obiectele necesare">
            <p>Navighează în dreapta, în zona <strong className="text-blue-600">Scene Objects</strong>, și pentru fiecare scenă în parte adaugă obiectele de mai jos.</p>
            <p></p>
            <p style={{marginTop: 20}}>În scena<strong> Acasa</strong> adaugă următorul tip de obiecte și denumeștele după cum urmează:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                  <li>Text: <code className="bg-blue-100 px-1 py-0.5 rounded">TitluJoc</code> </li>
                  <li>Text: <code className="bg-blue-100 px-1 py-0.5 rounded">TextJoaca</code> </li>
                  <li>Sprite: <code className="bg-blue-100 px-1 py-0.5 rounded">ButonJoaca</code> (folosește costumul pătratului roșu) </li>
                </ul>

                <p style={{marginTop: 20}}>În scena<strong> Joc</strong> adaugă următorul tip de obiecte și denumeștele după cum urmează:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                  <li>Text: <code className="bg-grey-100 px-1 py-0.5 rounded">Scor</code> </li>
                  <li>Sprite: <code className="bg-orange-100 px-1 py-0.5 rounded">Cerc</code> </li>
                  <li>Sprite: <code className="bg-orange-100 px-1 py-0.5 rounded">TintaCerc</code> </li>
                  <li>Sprite: <code className="bg-red-100 px-1 py-0.5 rounded">Patrat</code> </li>
                  <li>Sprite: <code className="bg-red-100 px-1 py-0.5 rounded">TintaPatrat</code> </li>
                  <li>Sprite: <code className="bg-yellow-100 px-1 py-0.5 rounded">Triunghi</code> </li>
                  <li>Sprite: <code className="bg-yellow-100 px-1 py-0.5 rounded">TintaTriunghi</code> </li>
                  <li>Sprite: <code className="bg-yellow-100 px-1 py-0.5 rounded">Stea</code> </li>
                  <li>Sprite: <code className="bg-yellow-100 px-1 py-0.5 rounded">TintaStea</code> </li>

                </ul>

                <p style={{marginTop: 20}}>În scena<strong> Victorie</strong> adaugă următorul tip de obiect și denumeștele după cum urmează:</p>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                  <li>Sprite: <code className="bg-blue-100 px-1 py-0.5 rounded">Victorie</code> </li>
                </ul>

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
                    <td className="border border-gray-300 px-4 py-2">Stea</td>
                    <td className="border border-gray-300 px-4 py-2">Sprite</td>
                    <td className="border border-gray-300 px-4 py-2">Stea galbenă</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/Stea.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Triunghi</td>
                    <td className="border border-gray-300 px-4 py-2">Sprite</td>
                    <td className="border border-gray-300 px-4 py-2">Triunghi galben</td>
                   <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/Triunghi.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Patrat</td>
                    <td className="border border-gray-300 px-4 py-2">Sprite</td>
                    <td className="border border-gray-300 px-4 py-2">Pătrat roșu</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/Patrat.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Cerc</td>
                    <td className="border border-gray-300 px-4 py-2">Sprite</td>
                    <td className="border border-gray-300 px-4 py-2">Cerc portocaliu</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/Cerc.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Victorie</td>
                    <td className="border border-gray-300 px-4 py-2">Sprite</td>
                    <td className="border border-gray-300 px-4 py-2">Imagine victorie</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <a href="/assets/images/gdevelop/Victorie4.png" download className="text-blue-600 underline">Descarcă</a>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Scor</td>
                    <td className="border border-gray-300 px-4 py-2">Text</td>
                    <td className="border border-gray-300 px-4 py-2">Afișează scorul</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <a >-</a>
                  </td>
                  </tr>
                  
                </tbody>
              </table>

              <div style={{ display: 'flex', gap: 16, marginTop: 20}}>
                    <ImageModal src="/assets/images/gdevelop/GDevelop_S2_Scene1.png" alt="newscene" caption="Scena 1"/>
                    <ImageModal src="/assets/images/gdevelop/GDevelop_S2_Scene2Preview.png" alt="newscene" caption="Scena 2"/>
                    <ImageModal src="/assets/images/gdevelop/GDevelop_S2_Scene3Preview.png" alt="newscene" caption="Scena 3"/>
                  </div>
            </div>
          </StepItem>
        </>
      )
    },
    {
      id: 'configurarea-scenei Acasa',
      title: 'Configurarea scenei Acasa',
      content: (
        <>
          <p className="mb-4">
            Poziționează obiectele pe scenă pentru a începe jocul.
          </p>

          <StepItem number={1} title="Adaugă obiectele pe scenă">
            <p>Trage obiectul `ButonJoaca` în centrul scenei.</p>
          </StepItem>

          <StepItem number={2} title="Adaugă textele">
            <p>Plasează obiectul `TitluJoc` în centru sus cu valoarea inițială: <strong>"Învață formele și culorile"</strong> și obiectul `TextJoaca` cu valoarea: <strong>"Joacă"</strong> </p>
          </StepItem>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_InitialText.png" 
            alt="newscene" 
            caption="Adaugă un text"
          />

          <InfoBox title="Sfat" icon="info" variant="primary">
            Pentru a adăuga valori inițiale textului apasă de două ori click stânga pe text și modifică valoarea secțiunii 'Initial text to display'.
            Asigură-te că obiectele sunt vizibile și distribuite uniform pe scenă pentru o experiență de joc plăcută.
          </InfoBox>
        </>
      )
    },
    
    { id: 'evenimente-scena-acasa', title: 'Evenimente și acțiuni scenă Acasă', content: ( <> <p className="mb-4"> Accesează tab-ul <strong className="text-blue-600">„Events"</strong> pentru a adăuga logica butonului. </p>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Interacțiunea cu butonul</h3>
      <p className="mb-4">
        Evenimentele din această secțiune gestionează hover-ul și click-ul pe buton.
      </p>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">Evenimente de adăugat:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-purple-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-purple-100 px-2 py-1 rounded text-sm">The cursor/touch is on ButonJoaca</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the opacity of <code className="bg-gray-100 px-1 py-0.5 rounded">ButonJoaca</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">255</code></li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-purple-100 px-2 py-1 rounded text-sm">The cursor/touch is on ButonJoaca</code> (inversată)</p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the opacity of <code className="bg-gray-100 px-1 py-0.5 rounded">ButonJoaca</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">100</code></li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-purple-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is down</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change to scene <code className="bg-gray-100 px-1 py-0.5 rounded">"Joc"</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Note importante:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
          <li>Pentru al doilea eveniment, bifează opțiunea de inversare a condiției</li>
          <li>Asigură-te că ai o scenă numită "Joc" creată în proiect</li>
          <li>Efectul de hover va face butonul să devină mai transparent/opac când treci cu mouse-ul peste el</li>
        </ul>
      </div>

      <div  style={{marginTop: 20}}>
          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Scene1Code.png" 
            alt="scene1code" 
            caption="Codul primei scene"
          />
      </div>
    </>
    
  )
},
          
{
      id: 'configurarea-scenei-joc',
      title: 'Configurarea scenei Joc',
      content: (
        <>
          <p className="mb-4">
            Poziționează obiectele pe scenă pentru a începe jocul.
          </p>

          <StepItem number={1} title="Adaugă obiectele pe scenă">
            <p>Trage obiectele `Stea`, `Triunghi`, `Patrat`, și `Cerc` pe scenă în poziții diferite, asemenea și omologul fiecărei forme geometrice (ex. TintaCerc).</p>
          </StepItem>

          <StepItem number={2} title="Adaugă textul scorului">
            <p>Plasează obiectul `Scor` în colțul din dreapta sus cu valoarea inițială: <strong>"Scor: 0"</strong>.</p>
          </StepItem>

          <StepItem number={3} title="Adaugă variabla 'esteTras' la fiecare personaj">
            <p>Pentru personajele <strong>Cerc, Patrat, Triunghi și Stea</strong> adaugă variabila 'esteTras'. Apăsați de două ori peste personaj, iar din tab-ul <strong>Variables</strong> adăugați variabila de tip <code>Boolean</code> și setați-i valoarea <code>False</code>.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Variable.png" 
            alt="scene1code" 
            caption="Adăugarea variabilei"
          />

          <InfoBox title="Sfat" icon="info" variant="primary">
            Asigură-te că obiectele sunt vizibile și distribuite uniform pe scenă pentru o experiență de joc plăcută.
          </InfoBox>
        </>
      )
    },
    {
      id: 'evenimentele-jocului',
      title: 'Evenimentele jocului',
      content: (
        <>
          <p className="mb-4">
            Accesează tab-ul sceenei <strong className="text-blue-600">„Joc"</strong> pentru a adăuga logica jocului.
          </p>


      <h3 className="text-lg font-semibold mb-4 text-gray-800">La eliberarea butonului mouse-ului</h3>
      <p className="mb-4">
        Acest eveniment resetează toate variabilele când utilizatorul eliberează butonul mouse-ului.
      </p>
      <div className="bg-red-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-red-800 mb-2">Eveniment de reset:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is released</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-yellow-100 px-1 py-0.5 rounded">⭐Stea</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-orange-100 px-1 py-0.5 rounded">🔺Triunghi</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-red-100 px-1 py-0.5 rounded">🟥Patrat</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-blue-100 px-1 py-0.5 rounded">🔵Cerc</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">false</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Selectarea formelor pentru drag</h3>
      <p className="mb-4">
        Aceste evenimente activează variabila "esteTras" pentru fiecare formă când este selectată.
      </p>
      
      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-green-800 mb-2">Evenimente de selectare:</h4>
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-3">
            <p><strong>Pentru Stea:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-yellow-100 px-2 py-1 rounded text-sm">The cursor/touch is on ⭐Stea</code></li>
              <li><code className="bg-yellow-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is down</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-yellow-100 px-1 py-0.5 rounded">⭐Stea</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-3">
            <p><strong>Pentru Triunghi:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-orange-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is down</code></li>
              <li><code className="bg-orange-100 px-2 py-1 rounded text-sm">The cursor/touch is on 🔺Triunghi</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-orange-100 px-1 py-0.5 rounded">🔺Triunghi</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Pentru Patrat:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is down</code></li>
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">The cursor/touch is on 🟥Patrat</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-red-100 px-1 py-0.5 rounded">🟥Patrat</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
            </ul>
          </div>
          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Pentru Patrat:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">Touch or "Left" mouse button is down</code></li>
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">The cursor/touch is on 🔵Cerc</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">esteTras</code> of <code className="bg-red-100 px-1 py-0.5 rounded">🔵Cerc</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">true</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Note importante:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
          <li>Variabila "esteTras" controlează dacă o formă poate fi trasă</li>
          <li>La eliberarea mouse-ului, toate formele sunt resetate</li>
          <li>Fiecare formă are propriul eveniment de selectare</li>
          <li>Asigură-te că toate obiectele au variabila "esteTras" definită</li>
        </ul>
      </div>
        
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Mișcarea formelor (Drag & Drop)</h3>
      <p className="mb-4">
        Aceste evenimente permit mișcarea formelor când variabila "esteTras" este activă.
      </p>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">Evenimente de mișcare:</h4>
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-3">
            <p><strong>Pentru Stea:</strong></p>
            <p><strong>Condiție:</strong> <code className="bg-yellow-100 px-2 py-1 rounded text-sm">The variable esteTras of ⭐Stea is true</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the position of <code className="bg-yellow-100 px-1 py-0.5 rounded">⭐Stea</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorX() (x axis)</code>, set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorY() (y axis)</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-3">
            <p><strong>Pentru Triunghi:</strong></p>
            <p><strong>Condiție:</strong> <code className="bg-orange-100 px-2 py-1 rounded text-sm">The variable esteTras of 🔺Triunghi is true</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the position of <code className="bg-orange-100 px-1 py-0.5 rounded">🔺Triunghi</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorX() (x axis)</code>, set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorY() (y axis)</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Pentru Patrat:</strong></p>
            <p><strong>Condiție:</strong> <code className="bg-red-100 px-2 py-1 rounded text-sm">The variable esteTras of 🟥Patrat is true</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the position of <code className="bg-red-100 px-1 py-0.5 rounded">🟥Patrat</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorX() (x axis)</code>, set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorY() (y axis)</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-3">
            <p><strong>Pentru Cerc:</strong></p>
            <p><strong>Condiție:</strong> <code className="bg-blue-100 px-2 py-1 rounded text-sm">The variable esteTras of 🔵Cerc is true</code></p>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the position of <code className="bg-blue-100 px-1 py-0.5 rounded">🔵Cerc</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorX() (x axis)</code>, set to <code className="bg-gray-100 px-1 py-0.5 rounded">CursorY() (y axis)</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Note importante:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
          <li>Variabila "esteTras" controlează dacă o formă poate fi trasă</li>
          <li>CursorX() și CursorY() returnează pozițiile cursorului pe ecran</li>
          <li>Formele se vor mișca în timp real cu cursorul când sunt selectate</li>
          <li>La eliberarea mouse-ului, toate formele sunt resetate și se opresc din mișcare</li>
        </ul>
      </div>

        <h3 className="text-lg font-semibold mb-4 text-gray-800">La începutul scenei</h3>
      <p className="mb-4">
        Acest eveniment inițializează opacitatea țintelor la început.
      </p>
      <div className="bg-indigo-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-indigo-800 mb-2">Eveniment de inițializare:</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-indigo-100 px-2 py-1 rounded text-sm">At the beginning of the scene</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the opacity of <code className="bg-orange-100 px-1 py-0.5 rounded">🔺TintaTriunghi</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">100</code></li>
              <li>Change the opacity of <code className="bg-red-100 px-1 py-0.5 rounded">🟥TintaPatrat</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">100</code></li>
              <li>Change the opacity of <code className="bg-blue-100 px-1 py-0.5 rounded">🔵TintaCerc</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">100</code></li>
              <li>Change the opacity of <code className="bg-yellow-100 px-1 py-0.5 rounded">⭐TintaStea</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">100</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Detectarea coliziunilor</h3>
      <p className="mb-4">
        Evenimentele care detectează când formele ajung la țintele lor și actualizează scorul.
      </p>
      
      <div className="bg-green-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-green-800 mb-2">Evenimente de coliziune:</h4>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-3">
            <p><strong>Pentru Cerc:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-blue-100 px-2 py-1 rounded text-sm">🔵Cerc is in collision with 🔵TintaCerc</code></li>
              <li><code className="bg-blue-100 px-2 py-1 rounded text-sm">Trigger once</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">scor</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">1</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-3">
            <p><strong>Pentru Triunghi:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-orange-100 px-2 py-1 rounded text-sm">🔺Triunghi is in collision with 🔺TintaTriunghi</code></li>
              <li><code className="bg-orange-100 px-2 py-1 rounded text-sm">Trigger once</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">scor</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">1</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-3">
            <p><strong>Pentru Patrat:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">🟥Patrat is in collision with 🟥TintaPatrat</code></li>
              <li><code className="bg-red-100 px-2 py-1 rounded text-sm">Trigger once</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">scor</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">1</code></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 pl-3">
            <p><strong>Pentru Stea:</strong></p>
            <p><strong>Condiții:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li><code className="bg-yellow-100 px-2 py-1 rounded text-sm">⭐Stea is in collision with ⭐TintaStea</code></li>
              <li><code className="bg-yellow-100 px-2 py-1 rounded text-sm">Trigger once</code></li>
            </ul>
            <p><strong>Acțiune:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the variable <code className="bg-gray-100 px-1 py-0.5 rounded">scor</code>: add <code className="bg-gray-100 px-1 py-0.5 rounded">1</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Actualizarea scorului și victoria</h3>
      <p className="mb-4">
        Eveniment care actualizează textul scorului și verifică victoria.
      </p>
      
      <div className="bg-amber-50 p-4 rounded-lg mb-4">
        <h4 className="font-semibold text-amber-800 mb-2">Actualizarea scorului</h4>
        <div className="space-y-2">
          <div className="border-l-4 border-amber-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-amber-100 px-2 py-1 rounded text-sm">-</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Change the text of <code className="bg-gray-100 px-1 py-0.5 rounded">Scor</code>: set to <code className="bg-gray-100 px-1 py-0.5 rounded">"Scor: " + scor</code></li>

            </ul>
          </div>

          <h4 className="font-semibold text-amber-800 mb-2">Condiția de victorie</h4>
          <div className="border-l-4 border-amber-500 pl-3">
            <p><strong>Condiție:</strong> <code className="bg-amber-100 px-2 py-1 rounded text-sm">The variable scor = 4</code></p>
            <p><strong>Acțiuni:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
              <li>Wait <code className="bg-gray-100 px-1 py-0.5 rounded">3</code> seconds</li>
              <li>Change to scene <code className="bg-gray-100 px-1 py-0.5 rounded">"Victorie"</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h4 className="font-semibold text-emerald-800 mb-2">🎯 Note importante:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-emerald-700">
          <li>"Trigger once" asigură că scorul se adaugă o singură dată per coliziune</li>
          <li>Toate țintele încep cu opacitatea 100 pentru vizibilitate redusă</li>
          <li>Când scorul ajunge la 4, jucătorul a câștigat</li>
          <li>După 3 secunde se schimbă automat la scena "Victorie"</li>
          <li>Asigură-te că ai o scenă numită "Victorie" creată</li>
        </ul>
      </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 20}}>
        <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Scene2Code2.png" 
            alt="Cod scena Joc" 
            caption="Cod scenă Joc"
          />
      <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Scene2Code1.png" 
            alt="Cod scena Joc" 
            caption="Cod scenă Joc"
          />
          </div>
        </>
      )
    },
     {
      id: 'configurarea-scenei-victorie',
      title: 'Configurarea scenei Victorie',
      content: (
        <>
          <p className="mb-4">
            Poziționează obiectele Victorie pe întreaga scenă.
          </p>

          <StepItem number={1} title="Adaugă obiectele pe scenă">
            <p>Trage obiectul `Victorie` în centrul scenei și redimensioneză-l corespunzător.</p>
          </StepItem>

          <ImageModal 
            src="/assets/images/gdevelop/GDevelop_S2_Scene3Preview.png" 
            alt="newscene" 
            caption="Scena Victorie"
          />
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii',
      content: (
        <>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">🎓 Ce ai învățat în această lecție</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Cum să configurezi obiecte și scene în GDevelop
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Cum să detectezi coliziuni și să actualizezi scorul
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">▶</span>
                Cum să schimbi scena bazat pe condiții
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-3">💡 Sfaturi</h4>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Testează jocul după fiecare modificare
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Adaugă mai multe obiecte pentru varietate
              </li>
            </ul>
          </div>

          <Challenge title="Provocare practică" difficulty="easy">
            <p className="mb-3">Extinde jocul cu următoarele:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Adaugă 2 obiecte noi cu culori diferite</li>
              <li>Crește scorul necesar pentru victorie la 6</li>
            </ul>
          </Challenge>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="gdevelop"
      title="Joc de Aventură cu Obiecte Colorate"
      subtitle="Creează un joc simplu în GDevelop"
      heroColor="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500"
      previousLesson={{ title: "Vezi toate cursurile", path: "../courses/gdevelop/" }}
      nextLesson={{ title: "Lecția următoare", path: "/gdevelop/session2" }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default GDevelopLessonRomania;