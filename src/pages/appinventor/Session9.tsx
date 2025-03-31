
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';

const Session9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ReadingProgressBar />
      <Header />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <Link to="/courses/appinventor">
                <Button variant="outline" className="mb-4 border-course-purple text-course-purple hover:bg-course-purple/10 hover:text-course-purple">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Înapoi la curs
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">Construirea unei Aplicații de Notițe</h1>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Durată: aproximativ 60 minute</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>Lecția 9 din 9</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Conținut</h2>
            <ul className="space-y-2">
              <li>
                <a href="#introducere" className="text-course-blue hover:underline">1. Introducere și obiective</a>
              </li>
              <li>
                <a href="#configurare" className="text-course-blue hover:underline">2. Configurarea interfeței utilizator</a>
              </li>
              <li>
                <a href="#stocarea-datelor" className="text-course-blue hover:underline">3. Stocarea datelor cu TinyDB</a>
              </li>
              <li>
                <a href="#functionalitati" className="text-course-blue hover:underline">4. Implementarea funcționalităților CRUD</a>
              </li>
              <li>
                <a href="#personalizare" className="text-course-blue hover:underline">5. Personalizarea notițelor</a>
              </li>
              <li>
                <a href="#testare" className="text-course-blue hover:underline">6. Testare și depanare</a>
              </li>
              <li>
                <a href="#provocare" className="text-course-blue hover:underline">7. Provocare și extindere</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="introducere">
            <h2 className="text-2xl font-bold mb-4">1. Introducere și obiective</h2>
            <p className="mb-4">
              În această lecție, vom crea o aplicație de notițe funcțională care permite utilizatorilor să adauge, editeze, șteargă și vizualizeze notițe. 
              Aplicația va folosi TinyDB pentru a stoca datele local pe dispozitiv, astfel încât notițele să persiste chiar și după închiderea aplicației.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-bold text-lg mb-2">Obiectivele lecției</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Crearea unei interfețe utilizator pentru gestionarea notițelor</li>
                <li>Implementarea funcționalităților de bază CRUD (Create, Read, Update, Delete)</li>
                <li>Utilizarea TinyDB pentru stocarea persistentă a datelor</li>
                <li>Implementarea modului de editare și de vizualizare a notițelor</li>
                <li>Adăugarea funcționalităților de personalizare pentru notițe (culoare, prioritate)</li>
              </ul>
            </div>
            
            <p className="mb-4">
              La finalul acestei lecții, vei avea o aplicație de notițe complet funcțională pe care o poți personaliza 
              și extinde după propriile preferințe.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="configurare">
            <h2 className="text-2xl font-bold mb-4">2. Configurarea interfeței utilizator</h2>
            <p className="mb-4">
              Vom începe prin a crea interfața noastră de utilizator în Designer. Aplicația va avea două ecrane principale:
            </p>
            <ul className="list-disc ml-5 space-y-2 mb-6">
              <li><strong>Screen1</strong>: Lista de notițe cu opțiuni de adăugare și ștergere</li>
              <li><strong>EditNoteScreen</strong>: Ecran pentru adăugarea sau editarea unei notițe</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Configurarea Screen1:</h3>
            <ol className="list-decimal ml-5 space-y-2 mb-6">
              <li>Adaugă un <code>TitleBar</code> cu titlul "Notițele Mele"</li>
              <li>Adaugă un <code>FloatingActionButton</code> pentru crearea unei noi notițe (în colțul din dreapta jos)</li>
              <li>Adaugă un <code>ListView</code> pentru a afișa toate notițele</li>
              <li>Adaugă un <code>NotifierComponent</code> pentru afișarea mesajelor către utilizator</li>
              <li>Adaugă un <code>TinyDB</code> component pentru stocarea datelor (componentă nevizibilă)</li>
            </ol>
            
            <div className="mb-8">
              <img 
                src="https://i.imgur.com/ecRPPmX.png" 
                alt="Configurarea ecranului principal" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Configurarea EditNoteScreen:</h3>
            <ol className="list-decimal ml-5 space-y-2 mb-6">
              <li>Adaugă un <code>TitleBar</code> cu titlul "Editează Notița"</li>
              <li>Adaugă un <code>TextBox</code> multi-linie pentru titlu</li>
              <li>Adaugă un <code>TextBox</code> multi-linie pentru conținutul notiței</li>
              <li>Adaugă un <code>HorizontalArrangement</code> cu butoane pentru:
                <ul className="list-disc ml-5 mt-2">
                  <li>Salvare</li>
                  <li>Anulare</li>
                  <li>Selectare culoare</li>
                </ul>
              </li>
              <li>Adaugă un <code>ColorChooser</code> pentru a permite utilizatorului să aleagă o culoare pentru notiță</li>
              <li>Adaugă un <code>TinyDB</code> component (nevizibil)</li>
            </ol>
            
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/tELF6YH.png" 
                alt="Configurarea ecranului de editare" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="stocarea-datelor">
            <h2 className="text-2xl font-bold mb-4">3. Stocarea datelor cu TinyDB</h2>
            <p className="mb-4">
              TinyDB este o bază de date locală în App Inventor care stochează date sub formă de perechi cheie-valoare. 
              Pentru aplicația noastră, vom stoca notițele ca o listă în format JSON.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Structura datelor:</h3>
            <p className="mb-4">
              Fiecare notiță va fi reprezentată ca un obiect cu următoarea structură:
            </p>
            
            <CodeBlock 
              code={`{
  "id": "123456789",  // Un identificator unic generat la crearea notiței
  "title": "Titlul notiței",
  "content": "Conținutul notiței...",
  "color": "#FFEB3B", // Codul de culoare pentru notiță
  "createdAt": "2023-07-15 14:30",  // Data și ora creării
  "updatedAt": "2023-07-15 14:45"   // Data și ora ultimei actualizări
}`} 
              language="json" 
              className="mb-6"
            />
            
            <h3 className="text-xl font-semibold mb-3">Implementarea blocurilor pentru stocarea datelor:</h3>
            <p className="mb-4">
              În App Inventor, vom implementa următoarele funcții pentru a gestiona datele:
            </p>
            
            <ol className="list-decimal ml-5 space-y-3 mb-6">
              <li>
                <strong>LoadNotes</strong>: Încarcă toate notițele din TinyDB
                <div className="mt-2">
                  <img 
                    src="https://i.imgur.com/HwZQlvs.png" 
                    alt="Blocuri pentru încărcarea notițelor" 
                    className="rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
              </li>
              <li>
                <strong>SaveNote</strong>: Salvează o notiță în TinyDB (create sau update)
                <div className="mt-2">
                  <img 
                    src="https://i.imgur.com/xCttPUN.png" 
                    alt="Blocuri pentru salvarea notițelor" 
                    className="rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
              </li>
              <li>
                <strong>DeleteNote</strong>: Șterge o notiță din TinyDB
                <div className="mt-2">
                  <img 
                    src="https://i.imgur.com/jWeRLZF.png" 
                    alt="Blocuri pentru ștergerea notițelor" 
                    className="rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
              </li>
            </ol>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <h3 className="font-bold mb-2">Puncte importante:</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Folosim cheia "notes_data" pentru a stoca toate notițele</li>
                <li>Dacă nu există notițe salvate, returnăm o listă goală</li>
                <li>Generăm un ID unic pentru fiecare notiță folosind timpul curent</li>
                <li>Actualizăm câmpurile createdAt și updatedAt corespunzător</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="functionalitati">
            <h2 className="text-2xl font-bold mb-4">4. Implementarea funcționalităților CRUD</h2>
            
            <h3 className="text-xl font-semibold mb-3">Afișarea notițelor (Read)</h3>
            <p className="mb-4">
              Pentru afișarea notițelor în ListView, vom implementa următoarele blocuri:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/QCZj5n9.png" 
                alt="Blocuri pentru afișarea notițelor" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Crearea unei notițe noi (Create)</h3>
            <p className="mb-4">
              Când utilizatorul apasă pe FloatingActionButton, deschidem EditNoteScreen în modul de creare:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/gBRfYZH.png" 
                alt="Blocuri pentru crearea unei notițe noi" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Actualizarea unei notițe (Update)</h3>
            <p className="mb-4">
              Când utilizatorul selectează o notiță din listă, deschidem EditNoteScreen în modul de editare:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/1dKyAvP.png" 
                alt="Blocuri pentru actualizarea unei notițe" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Ștergerea unei notițe (Delete)</h3>
            <p className="mb-4">
              Implementăm ștergerea notițelor cu o confirmare înainte de a elimina definitiv notița:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/YxIiEik.png" 
                alt="Blocuri pentru ștergerea unei notițe" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="personalizare">
            <h2 className="text-2xl font-bold mb-4">5. Personalizarea notițelor</h2>
            <p className="mb-4">
              Vom adăuga funcționalități pentru personalizarea notițelor, permițând utilizatorului să aleagă o culoare pentru fiecare notiță.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Selectarea culorii notiței</h3>
            <p className="mb-4">
              În EditNoteScreen, implementăm un buton care deschide ColorChooser pentru a permite utilizatorului să aleagă o culoare:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/lJUVyIk.png" 
                alt="Blocuri pentru selectarea culorii" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Aplicarea culorii la elementele listei</h3>
            <p className="mb-4">
              Modificăm funcția de afișare a listei pentru a aplica culoarea selectată fiecărui element:
            </p>
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/Qz1cnYT.png" 
                alt="Blocuri pentru aplicarea culorii" 
                className="mx-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h3 className="font-bold mb-2">Sfat pentru design:</h3>
              <p>
                Adaugă un contrast bun între culoarea de fundal și textul notiței. Poți face acest lucru calculând 
                luminozitatea culorii de fundal și alegând text negru sau alb în funcție de rezultat.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="testare">
            <h2 className="text-2xl font-bold mb-4">6. Testare și depanare</h2>
            <p className="mb-4">
              Este important să testăm aplicația pentru a ne asigura că toate funcționalitățile funcționează corect.
              Iată câteva scenarii de testare pe care ar trebui să le parcurgem:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Scenariu</th>
                    <th className="py-2 px-4 border-b text-left">Pași de testare</th>
                    <th className="py-2 px-4 border-b text-left">Rezultat așteptat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Crearea unei notițe noi</td>
                    <td className="py-2 px-4 border-b">
                      <ol className="list-decimal ml-4">
                        <li>Apasă butonul +</li>
                        <li>Completează titlul și conținutul</li>
                        <li>Alege o culoare</li>
                        <li>Apasă Salvare</li>
                      </ol>
                    </td>
                    <td className="py-2 px-4 border-b">Notița este adăugată în listă cu titlul și culoarea selectată</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Editarea unei notițe</td>
                    <td className="py-2 px-4 border-b">
                      <ol className="list-decimal ml-4">
                        <li>Selectează o notiță din listă</li>
                        <li>Modifică conținutul</li>
                        <li>Apasă Salvare</li>
                      </ol>
                    </td>
                    <td className="py-2 px-4 border-b">Notița este actualizată cu modificările făcute</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Ștergerea unei notițe</td>
                    <td className="py-2 px-4 border-b">
                      <ol className="list-decimal ml-4">
                        <li>Apasă lung pe o notiță</li>
                        <li>Confirmă ștergerea</li>
                      </ol>
                    </td>
                    <td className="py-2 px-4 border-b">Notița este eliminată din listă</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Persistența datelor</td>
                    <td className="py-2 px-4 border-b">
                      <ol className="list-decimal ml-4">
                        <li>Adaugă câteva notițe</li>
                        <li>Închide aplicația</li>
                        <li>Redeschide aplicația</li>
                      </ol>
                    </td>
                    <td className="py-2 px-4 border-b">Toate notițele adăugate anterior sunt încărcate și afișate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Depanarea erorilor comune</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <h4 className="font-bold mb-2">Erori potențiale și soluții:</h4>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  <strong>Notițele nu se încarcă după repornirea aplicației</strong>
                  <p>Asigură-te că folosești corect TinyDB.GetValue și ai specificat cheia corectă ("notes_data").</p>
                </li>
                <li>
                  <strong>Erori la parsarea JSON</strong>
                  <p>Verifică formatul JSON salvat și asigură-te că toate caracterele speciale sunt gestionate corect.</p>
                </li>
                <li>
                  <strong>Actualizările nu se reflectă imediat</strong>
                  <p>Asigură-te că reîncarci lista după fiecare modificare (create, update, delete).</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8" id="provocare">
            <h2 className="text-2xl font-bold mb-4">7. Provocare și extindere</h2>
            <p className="mb-4">
              Acum că avem o aplicație de notițe funcțională, iată câteva idei pentru a o extinde și îmbunătăți:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="text-lg font-semibold mb-2">Adaugă categorii pentru notițe</h3>
                <p>
                  Implementează un sistem de categorii (de exemplu: Personal, Muncă, Școală) 
                  și permite utilizatorului să filtreze notițele după categorie.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-lg font-semibold mb-2">Adaugă funcționalitatea de căutare</h3>
                <p>
                  Adaugă un SearchBox care permite utilizatorului să caute notițe 
                  după cuvinte cheie în titlu sau conținut.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="text-lg font-semibold mb-2">Exportă notițele</h3>
                <p>
                  Adaugă o opțiune pentru a exporta notițele selectate ca text sau pentru 
                  a le trimite prin email sau alte aplicații.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h3 className="text-lg font-semibold mb-2">Adaugă notificări de reminder</h3>
                <p>
                  Permite utilizatorului să seteze un reminder pentru o notiță, care va 
                  declanșa o notificare la data și ora specificată.
                </p>
              </div>
            </div>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <h3 className="font-bold mb-2">Provocare pentru tine:</h3>
              <p className="mb-2">
                Încearcă să implementezi cel puțin una dintre funcționalitățile de extindere de mai sus. 
                Începe cu cea care ți se pare cea mai interesantă sau utilă.
              </p>
              <p>
                Când ai terminat, împărtășește aplicația ta cu colegii și colectează feedback 
                pentru a vedea cum o poți îmbunătăți în continuare.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Concluzie</h2>
            <p className="mb-4">
              Felicitări! Ai creat o aplicație completă de notițe cu funcționalități CRUD, personalizare și stocare persistentă.
              Prin acest proiect, ai învățat:
            </p>
            
            <ul className="list-disc ml-5 space-y-2 mb-6">
              <li>Cum să utilizezi TinyDB pentru stocarea persistentă a datelor</li>
              <li>Cum să implementezi operațiunile CRUD într-o aplicație mobilă</li>
              <li>Cum să lucrezi cu mai multe ecrane în App Inventor</li>
              <li>Cum să personalizezi aspectul elementelor din interfața utilizator</li>
              <li>Cum să testezi și să depanezi aplicația ta</li>
            </ul>
            
            <p className="mb-4">
              Aceste concepte și tehnici sunt fundamentale pentru dezvoltarea de aplicații mobile și le poți aplica 
              în multe alte proiecte viitoare.
            </p>
            
            <div className="flex justify-between">
              <Link to="/appinventor/session8">
                <Button variant="outline" className="border-course-purple text-course-purple hover:bg-course-purple/10 hover:text-course-purple">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Lecția anterioară
                </Button>
              </Link>
              <Link to="/courses/appinventor">
                <Button className="bg-course-blue hover:bg-course-blue/90">
                  Înapoi la cursul App Inventor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session9;
