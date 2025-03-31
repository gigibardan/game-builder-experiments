
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, Database, Save, List } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ReadingProgressBar from '@/components/ReadingProgressBar';

const Session8 = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling when URL contains hash
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReadingProgressBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-white text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    8
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 8: Salvarea Datelor cu TinyDB</h1>
                </div>
                <p className="text-white/90">
                  Învață să stochezi și să recuperezi date locale pentru a crea aplicații cu memorie!
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
                  <Link to="/courses/appinventor" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curriculum</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4" id="introducere">Introducere</h2>
                    <p className="mb-4">
                      Până acum, toate aplicațiile noastre au „uitat" toate datele după ce le-am închis. De fiecare dată când 
                      deschidem aplicația, trebuie să reintroducem toate informațiile. În această lecție, vom învăța cum să 
                      folosim TinyDB pentru a salva date pe dispozitiv, astfel încât datele să persiste între sesiunile aplicației.
                    </p>
                    <p className="mb-4">
                      Vom construi o aplicație de "Note și Sarcini" care permite utilizatorului să adauge, salveze, vizualizeze 
                      și șteargă note. Această aplicație va demonstra cum să salvezi date simple și colecții de date, cum să le 
                      recuperezi și cum să le gestionezi.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să utilizezi componenta TinyDB pentru stocarea locală de date</li>
                        <li>Cum să salvezi și să recuperezi diferite tipuri de date</li>
                        <li>Cum să organizezi datele folosind sistem de tip cheie-valoare</li>
                        <li>Cum să lucrezi cu liste și cum să le salvezi</li>
                        <li>Cum să creezi o aplicație care își "amintește" preferințele utilizatorului</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="ce-este-tinydb">Ce este TinyDB?</h2>
                    <p className="mb-4">
                      TinyDB este o componentă din MIT App Inventor care permite salvarea datelor direct pe dispozitivul utilizatorului. 
                      Este o bază de date simplă de tip cheie-valoare, ceea ce înseamnă că fiecare bucată de date este stocată 
                      asociată unei "chei" unice care poate fi folosită ulterior pentru a recupera datele.
                    </p>
                    <p className="mb-4">
                      Datele salvate în TinyDB persistă chiar și după închiderea aplicației și repornirea dispozitivului, 
                      permițându-ți să creezi aplicații cu "memorie".
                    </p>
                    <p className="mb-4">
                      TinyDB poate stoca diverse tipuri de date:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Text (stringuri)</li>
                      <li>Numere</li>
                      <li>Boolean (adevărat/fals)</li>
                      <li>Liste</li>
                      <li>Structuri complexe (prin intermediul listelor și a formatării JSON)</li>
                    </ul>

                    <div className="my-6 p-4 bg-gray-50 rounded-md border">
                      <h3 className="text-lg font-semibold mb-2">Diferența dintre TinyDB și variabile</h3>
                      <p className="mb-2">
                        Diferența esențială dintre TinyDB și variabilele obișnuite este persistența datelor:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Variabilele pierd valorile când aplicația se închide</li>
                        <li>TinyDB păstrează valorile chiar și după închiderea aplicației</li>
                        <li>Datele din TinyDB sunt salvate local pe dispozitiv</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="configurare">Pasul 1: Configurarea Proiectului</h2>
                    <p className="mb-4">
                      Să creăm o nouă aplicație de note care utilizează TinyDB pentru a salva și recupera note.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Creează un nou proiect</strong> în MIT App Inventor și numește-l "AplicatieNote".
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Din Palette, secțiunea "User Interface"</strong>, adaugă următoarele componente:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Un Label pentru titlul aplicației</li>
                          <li>Un TextBox pentru introducerea titlului notei</li>
                          <li>Un TextBox multi-linie pentru conținutul notei</li>
                          <li>Un Button pentru salvarea notei</li>
                          <li>Un Button pentru vizualizarea notelor salvate</li>
                          <li>Un ListView pentru afișarea titlurilor notelor</li>
                          <li>Un Notifier pentru mesaje de confirmare</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Din Palette, secțiunea "Storage"</strong>, adaugă componenta TinyDB pentru stocarea datelor.
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-4" id="design">Pasul 2: Designul Interfeței</h2>
                    <p className="mb-4">
                      Vom crea o interfață simplă dar funcțională pentru aplicația noastră de note.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Configurează layout-ul</strong> cu două "Vertical Arrangements" principale:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Prima pentru adăugarea notelor (vizibilă inițial)</li>
                          <li>A doua pentru vizualizarea notelor (ascunsă inițial)</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>În primul Vertical Arrangement (pentru adăugare):</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Label pentru titlul aplicației: Text="Note și Sarcini", FontSize=24, TextAlignment=Center</li>
                          <li>TextBox pentru titlu: Hint="Titlul notei", Width=Fill parent</li>
                          <li>TextBox multi-linie pentru conținut: Hint="Conținutul notei", Width=Fill parent, Height=150</li>
                          <li>Button pentru salvare: Text="Salvează Nota"</li>
                          <li>Button pentru vizualizare: Text="Vezi Notele Mele"</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>În al doilea Vertical Arrangement (pentru vizualizare):</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Label pentru titlu: Text="Notele Mele", FontSize=24, TextAlignment=Center</li>
                          <li>ListView pentru afișarea notelor: Width=Fill parent, Height=300</li>
                          <li>Label pentru instrucțiuni: Text="Apasă pe o notă pentru a o vizualiza", TextAlignment=Center</li>
                          <li>Button pentru revenire: Text="Înapoi la Adăugare"</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Setează Visible</strong> la "False" pentru al doilea Vertical Arrangement.
                      </li>
                    </ol>

                    <div className="my-6 text-center">
                      <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white border-2 border-gray-300 rounded-xl p-4 w-64">
                          <div className="text-center p-2 mb-4 text-xl font-bold">
                            Note și Sarcini
                          </div>
                          <div className="mb-4">
                            <div className="bg-gray-100 border p-2 rounded text-sm text-gray-500">
                              Titlul notei
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="bg-gray-100 border p-2 rounded h-24 text-sm text-gray-500">
                              Conținutul notei
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="bg-blue-500 text-white py-2 px-4 rounded text-center">
                              Salvează Nota
                            </div>
                          </div>
                          <div>
                            <div className="bg-gray-500 text-white py-2 px-4 rounded text-center">
                              Vezi Notele Mele
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border-2 border-gray-300 rounded-xl p-4 w-64">
                          <div className="text-center p-2 mb-4 text-xl font-bold">
                            Notele Mele
                          </div>
                          <div className="mb-4 border rounded bg-gray-50 h-48 p-2">
                            <div className="border-b py-2">Nota 1: Cumpărături</div>
                            <div className="border-b py-2">Nota 2: Teme</div>
                            <div className="border-b py-2">Nota 3: Idei proiect</div>
                          </div>
                          <div className="mb-2 text-sm text-center text-gray-500">
                            Apasă pe o notă pentru a o vizualiza
                          </div>
                          <div>
                            <div className="bg-gray-500 text-white py-2 px-4 rounded text-center">
                              Înapoi la Adăugare
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">Vizualizarea celor două ecrane ale aplicației</p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="salvare-date">Pasul 3: Salvarea Datelor cu TinyDB</h2>
                    <p className="mb-4">
                      Acum vom implementa funcționalitatea de salvare a notelor folosind TinyDB.
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">3.1 Gestionarea Listei de Note</h3>
                        <p>Pentru a gestiona notele, vom folosi două strategii de stocare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>O listă cu toate titlurile notelor</li>
                          <li>Fiecare notă individuală (conținut) stocată cu o cheie unică</li>
                        </ol>
                        <div className="mt-4">
                          <p className="mb-2">Vom defini cheile în TinyDB astfel:</p>
                          <ul className="list-disc list-inside mt-2">
                            <li><strong>"note_titles"</strong> - pentru lista titlurilor notelor</li>
                            <li><strong>"note_X"</strong> - pentru conținutul fiecărei note (unde X este indexul notei)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">3.2 Declararea Variabilelor Globale</h3>
                        <p className="mb-2">Vom începe prin a defini câteva variabile globale necesare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>O variabilă globală <strong>notesList</strong> pentru a păstra lista titlurilor notelor</li>
                          <li>O variabilă globală <strong>currentIndex</strong> pentru a ține evidența indexului curent</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">3.3 Inițializarea Aplicației</h3>
                        <p className="mb-2">În blocul <strong>Screen.Initialize</strong>, vom încărca lista de titluri din TinyDB:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Verifică dacă cheia "note_titles" există în TinyDB</li>
                          <li>Dacă există, încarcă lista în variabila <strong>notesList</strong></li>
                          <li>Dacă nu există, inițializează <strong>notesList</strong> ca o listă goală și salvează în TinyDB</li>
                        </ol>
                        <div className="mt-4">
                          <p className="font-semibold mb-2">Cod bloc pentru inițializare:</p>
                          <img 
                            src="https://community.thunkable.com/uploads/default/original/3X/7/0/704d20ffc4a74f01777707ed3c03c347aeda71d3.png" 
                            alt="Exemplu cod bloc pentru inițializare" 
                            className="border rounded-md shadow-sm max-w-full"
                          />
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">3.4 Salvarea unei Note Noi</h3>
                        <p className="mb-2">În blocul pentru butonul de salvare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Verifică dacă textbox-urile pentru titlu și conținut nu sunt goale</li>
                          <li>Ia valorile din textbox-uri</li>
                          <li>Generează o cheie unică pentru notă (folosind timpul sau lungimea listei)</li>
                          <li>Adaugă titlul în lista <strong>notesList</strong></li>
                          <li>Salvează lista actualizată în TinyDB sub cheia "note_titles"</li>
                          <li>Salvează conținutul notei în TinyDB sub cheia "note_X" (unde X este indexul)</li>
                          <li>Afișează un mesaj de confirmare folosind Notifier</li>
                          <li>Golește textbox-urile pentru titlu și conținut</li>
                        </ol>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="recuperare-date">Pasul 4: Recuperarea și Afișarea Datelor</h2>
                    <p className="mb-4">
                      Acum vom implementa funcționalitatea pentru vizualizarea notelor salvate.
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.1 Afișarea Listei de Note</h3>
                        <p className="mb-2">În blocul pentru butonul "Vezi Notele Mele":</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Ascunde primul Vertical Arrangement și arată-l pe al doilea</li>
                          <li>Șterge toate elementele din ListView</li>
                          <li>Încarcă lista de titluri din TinyDB (sau folosește variabila globală notesList)</li>
                          <li>Pentru fiecare titlu din listă, adaugă-l în ListView</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.2 Vizualizarea unei Note</h3>
                        <p className="mb-2">În blocul pentru evenimentul ListView.AfterPicking:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Obține indexul elementului selectat</li>
                          <li>Folosește acest index pentru a construi cheia notei (ex: "note_3")</li>
                          <li>Recuperează conținutul notei din TinyDB folosind cheia</li>
                          <li>Afișează titlul și conținutul într-un Notifier.ShowAlert</li>
                        </ol>
                        <div className="mt-4">
                          <p className="font-semibold mb-2">Cod bloc pentru vizualizare:</p>
                          <img 
                            src="https://community.thunkable.com/uploads/default/original/3X/e/7/e777e3bb9d45aaa8d2195cd82297495e64a85610.png" 
                            alt="Exemplu cod bloc pentru vizualizare" 
                            className="border rounded-md shadow-sm max-w-full"
                          />
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.3 Navigarea Înapoi la Adăugare</h3>
                        <p className="mb-2">În blocul pentru butonul "Înapoi la Adăugare":</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Ascunde al doilea Vertical Arrangement și arată primul</li>
                        </ol>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="functionalitati-avansate">Pasul 5: Funcționalități Avansate</h2>
                    <p className="mb-4">
                      Să adăugăm câteva funcționalități avansate aplicației noastre.
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">5.1 Ștergerea Notelor</h3>
                        <p className="mb-2">Adaugă un buton de ștergere și implementează funcționalitatea:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Adaugă un buton "Șterge" lângă fiecare element din ListView (sau folosește un context menu cu apăsare lungă)</li>
                          <li>Pentru ștergere, elimină titlul din lista <strong>notesList</strong></li>
                          <li>Actualizează lista în TinyDB</li>
                          <li>Șterge și conținutul notei din TinyDB</li>
                          <li>Actualizează ListView-ul pentru a reflecta modificările</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">5.2 Editarea Notelor</h3>
                        <p className="mb-2">Implementează funcționalitatea de editare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Când utilizatorul selectează o notă, în loc să afișezi doar conținutul, permite editarea</li>
                          <li>Încarcă titlul și conținutul în textbox-uri</li>
                          <li>Adaugă un buton "Actualizează" pentru a salva modificările</li>
                          <li>Actualizează nota în TinyDB când utilizatorul salvează modificările</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">5.3 Căutarea în Note</h3>
                        <p className="mb-2">Adaugă o funcționalitate de căutare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Adaugă un TextBox pentru căutare deasupra ListView-ului</li>
                          <li>Pe măsură ce utilizatorul tastează, filtrează lista de note pentru a afișa doar pe cele care conțin textul căutat</li>
                          <li>Actualizează ListView-ul cu rezultatele filtrate</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">5.4 Sortarea Notelor</h3>
                        <p className="mb-2">Adaugă opțiuni de sortare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Adaugă butoane pentru sortarea notelor după titlu, data creării, etc.</li>
                          <li>Implementează logica de sortare pentru fiecare criteriu</li>
                          <li>Actualizează ListView-ul pentru a afișa notele sortate</li>
                        </ol>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="testare">Pasul 6: Testarea Aplicației</h2>
                    <p className="mb-4">
                      Este timpul să testăm aplicația noastră pentru a verifica dacă toate funcționalitățile lucrează corect.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează funcția de salvare</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Adaugă câteva note cu titluri și conținut diferite</li>
                          <li>Verifică dacă aplicația afișează mesajul de confirmare la salvare</li>
                          <li>Verifică dacă textbox-urile se golesc după salvare</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează funcția de vizualizare</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Apasă pe butonul "Vezi Notele Mele"</li>
                          <li>Verifică dacă toate notele salvate apar în ListView</li>
                          <li>Selectează o notă și verifică dacă se afișează conținutul corect</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează persistența datelor</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Închide aplicația și deschide-o din nou</li>
                          <li>Verifică dacă toate notele salvate sunt încă disponibile</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează funcționalitățile avansate</strong> (dacă le-ai implementat):
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Încearcă să ștergi o notă și verifică dacă dispare din listă</li>
                          <li>Încearcă să editezi o notă și verifică dacă modificările sunt salvate</li>
                          <li>Testează funcția de căutare pentru a găsi note specifice</li>
                          <li>Verifică opțiunile de sortare pentru a te asigura că funcționează corect</li>
                        </ul>
                      </li>
                    </ol>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                      <h3 className="text-lg font-semibold text-yellow-700 mb-2">Limitările TinyDB</h3>
                      <p className="mb-2">
                        Deși TinyDB este foarte util pentru aplicațiile simple, are unele limitări:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Este limitat la stocarea locală pe un singur dispozitiv (datele nu sunt sincronizate între dispozitive)</li>
                        <li>Nu este potrivit pentru cantități mari de date sau aplicații complexe</li>
                        <li>Nu oferă funcționalități avansate de baze de date cum ar fi interogări sau indexare</li>
                      </ul>
                      <p className="mt-2">
                        Pentru aplicații mai complexe, poți explora Firebase sau alte servicii de stocare cloud.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="idei-aplicatii">Idei pentru Alte Aplicații cu TinyDB</h2>
                    <p className="mb-4">
                      Iată câteva idei pentru alte aplicații care ar putea beneficia de stocarea datelor cu TinyDB:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Aplicație de Setări Personalizate
                        </h3>
                        <p className="mt-2">
                          Creează o aplicație care permite utilizatorului să își personalizeze experiența (culori, font, dimensiuni)
                          și salvează aceste preferințe în TinyDB pentru a le aplica la fiecare lansare a aplicației.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Lista de Cumpărături
                        </h3>
                        <p className="mt-2">
                          O aplicație pentru lista de cumpărături care permite adăugarea, bifarea și ștergerea articolelor,
                          cu salvarea listei pentru utilizări viitoare.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Jurnal Personal
                        </h3>
                        <p className="mt-2">
                          O aplicație de jurnal personal care permite utilizatorului să scrie însemnări zilnice și să le 
                          vizualizeze în ordine cronologică, cu opțiuni de căutare și filtrare după dată.
                        </p>
                      </div>

                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Tracker de Obiceiuri
                        </h3>
                        <p className="mt-2">
                          O aplicație pentru a urmări obiceiurile zilnice, bifând activitățile completate și vizualizând 
                          statistici despre consecvență și progres.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să utilizezi TinyDB pentru a salva și recupera date locale</li>
                        <li>Cum să gestionezi liste și să lucrezi cu sisteme de stocare de tip cheie-valoare</li>
                        <li>Cum să creezi o aplicație cu persistența datelor între sesiuni</li>
                        <li>Cum să implementezi funcționalități CRUD (Create, Read, Update, Delete) pentru datele aplicației</li>
                        <li>Limitările și avantajele stocării locale cu TinyDB</li>
                      </ul>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button asChild className="bg-gray-500 hover:bg-gray-600">
                        <Link to="/appinventor/session7">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>Sesiunea 7: Aplicația Meteo</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Conținut</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#introducere" className="text-course-purple hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-course-purple rounded-full mr-2"></div>
                            Introducere
                          </a>
                        </li>
                        <li>
                          <a href="#ce-este-tinydb" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Ce este TinyDB?
                          </a>
                        </li>
                        <li>
                          <a href="#configurare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 1: Configurare
                          </a>
                        </li>
                        <li>
                          <a href="#design" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 2: Design
                          </a>
                        </li>
                        <li>
                          <a href="#salvare-date" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 3: Salvarea Datelor
                          </a>
                        </li>
                        <li>
                          <a href="#recuperare-date" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 4: Recuperarea Datelor
                          </a>
                        </li>
                        <li>
                          <a href="#functionalitati-avansate" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 5: Funcționalități Avansate
                          </a>
                        </li>
                        <li>
                          <a href="#testare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 6: Testare
                          </a>
                        </li>
                        <li>
                          <a href="#idei-aplicatii" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Idei Aplicații
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Resurse</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/tinydb" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Documentație TinyDB
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/notepad" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutorial Notepad
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/displaying-lists" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Lucrul cu Liste în App Inventor
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session8;
