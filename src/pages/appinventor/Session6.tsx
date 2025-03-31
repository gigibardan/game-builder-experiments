
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, Terminal, MessageCircle } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Session6 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-course-purple to-course-blue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-white text-course-purple rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    6
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 6: Aplicație de Chat</h1>
                </div>
                <p className="text-white/90">
                  Construiește o aplicație de mesagerie instant cu comunicare în timp real
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="secondary" className="border-white text-gray-800 hover:bg-white/90">
                  <Link to="/appinventor" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Înapoi la curs</span>
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
                    <h2 className="text-2xl font-bold mb-4">Aplicație de Chat: ConnectMe</h2>
                    <p className="mb-4">
                      În această sesiune vom crea o aplicație de mesagerie instant numită "ConnectMe". Vom învăța cum să folosim serviciile cloud pentru a stoca și sincroniza mesajele între utilizatori în timp real.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să folosești componenta Firebase pentru stocarea datelor în cloud</li>
                        <li>Cum să implementezi un sistem de autentificare simplu</li>
                        <li>Cum să trimiți și să primești mesaje în timp real</li>
                        <li>Cum să gestionezi și să afișezi liste de mesaje</li>
                        <li>Concepte de bază despre securitatea datelor</li>
                      </ul>
                    </div>

                    <Tabs defaultValue="setup" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="setup">Configurare Firebase</TabsTrigger>
                        <TabsTrigger value="implementation">Interfață & Implementare</TabsTrigger>
                        <TabsTrigger value="extensions">Extinderi</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="setup">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Pasul 1: Configurarea Firebase</h3>
                          <p className="mb-2">
                            Înainte de a începe să construim aplicația, trebuie să configurăm o bază de date Firebase care va stoca mesajele noastre. Firebase este o platformă dezvoltată de Google care oferă diverse servicii pentru dezvoltarea aplicațiilor mobile.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Accesează <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline">Firebase</a> și conectează-te cu contul tău Google.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Apasă pe "Go to console" și apoi pe "Add project".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Numește proiectul tău (ex. "ConnectMe") și urmează pașii pentru a crea proiectul.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              După ce proiectul a fost creat, din panoul de navigare din stânga, selectează "Realtime Database".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Apasă "Create Database" și alege "Start in test mode" pentru moment. Acest mod ne va permite să citim și să scriem date fără restricții de securitate pentru început.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Notează URL-ul bazei de date Realtime (va arăta aproximativ așa: <code>https://[numele-proiectului].firebaseio.com</code>). Vom avea nevoie de acesta pentru App Inventor.
                            </li>
                          </ol>
                          
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                            <h4 className="font-semibold text-yellow-700 mb-1">Important!</h4>
                            <p className="text-yellow-800">
                              În mediul de producție, nu ar trebui niciodată să folosiți modul de test pentru Firebase. Pentru simplicitate în acest exercițiu folosim acest mod, dar pentru o aplicație reală trebuie să implementați reguli de securitate corespunzătoare.
                            </p>
                          </div>
                          
                          <h3 className="text-xl font-semibold mt-6">Pasul 2: Configurarea App Inventor pentru Firebase</h3>
                          <p>
                            Acum trebuie să adăugăm extensia Firebase în proiectul nostru App Inventor.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Accesează <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline">MIT App Inventor</a> și autentifică-te.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Creează un nou proiect și numește-l "ConnectMe".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              În Palette, caută secțiunea "Extensions" și apasă pe "Import extension".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Alege "Import extension" și apoi "Import URL", introducând URL-ul extensiei Firebase pentru App Inventor:
                              <CodeBlock>
                                {`http://community.appinventor.mit.edu/appinventor/extensions/com.google.firebase.community.FirebaseDB.aix`}
                              </CodeBlock>
                              După import, ar trebui să ai un nou component disponibil numit "FirebaseDB".
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Adaugă un component FirebaseDB în ecranul tău. În proprietățile componentului:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Setează "FirebaseURL" la URL-ul bazei tale de date Realtime notat anterior</li>
                                <li>Setează "ProjectBucket" la "chat"</li>
                              </ul>
                            </li>
                          </ol>
                          
                          <div className="mt-6 text-center">
                            <p className="text-gray-600 mb-2">
                              Cu Firebase configurat, acum suntem pregătiți să construim interfața aplicației noastre de chat.
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="implementation">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Pasul 3: Crearea interfeței aplicației</h3>
                          <p className="mb-2">
                            Vom construi o interfață simplă pentru aplicația noastră de chat.
                          </p>
                          
                          <ol className="list-decimal list-inside space-y-4 pl-4 mt-4">
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Layout", adaugă un "VerticalArrangement" care va conține toate elementele ecranului nostru.
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Adaugă o zonă de autentificare:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Adaugă un "Label" cu textul "ConnectMe Chat"</li>
                                <li>Adaugă un "HorizontalArrangement" care conține:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Un "TextBox" cu hint "Nume utilizator" (denumit "UsernameTextBox")</li>
                                  <li>Un "Button" cu textul "Conectare" (denumit "LoginButton")</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Adaugă zona de afișare a mesajelor:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Un "ListView" care va afișa mesajele (denumit "MessagesListView")</li>
                                <li>Setează Height la 60% din înălțimea ecranului</li>
                                <li>Setează Background la o culoare deschisă</li>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Adaugă zona de compunere a mesajelor:
                              <ul className="list-disc list-inside mt-2 ml-4">
                                <li>Un "HorizontalArrangement" care conține:</li>
                                <ul className="list-disc list-inside ml-4">
                                  <li>Un "TextBox" cu hint "Scrie un mesaj" (denumit "MessageTextBox")</li>
                                  <li>Un "Button" cu textul "Trimite" (denumit "SendButton")</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="p-4 border rounded-md bg-gray-50">
                              Din secțiunea "Sensors", adaugă un component "Clock" (denumit "RefreshClock") pentru a actualiza periodic lista de mesaje.
                            </li>
                          </ol>
                          
                          <div className="mt-6 border p-4 rounded-md text-center">
                            <p className="text-gray-600 mb-2">
                              Interfața ta ar trebui să arate aproximativ așa:
                            </p>
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-4 max-w-md mx-auto">
                              <div className="text-center p-2 mb-4 font-bold bg-course-purple text-white rounded">
                                ConnectMe Chat
                              </div>
                              <div className="flex justify-between p-2 mb-4">
                                <div className="w-3/4 px-2 py-1 border rounded">Nume utilizator</div>
                                <div className="w-1/4 px-2 py-1 bg-blue-500 text-white text-center rounded">Conectare</div>
                              </div>
                              <div className="h-40 mb-4 bg-gray-100 border rounded p-2 overflow-y-auto">
                                <div className="text-left mb-2 bg-blue-100 rounded p-2">Ana: Salut tuturor!</div>
                                <div className="text-left mb-2 bg-green-100 rounded p-2">Mihai: Bună ziua!</div>
                                <div className="text-left mb-2 bg-blue-100 rounded p-2">Ana: Ce mai faceți?</div>
                              </div>
                              <div className="flex justify-between p-2">
                                <div className="w-3/4 px-2 py-1 border rounded">Scrie un mesaj</div>
                                <div className="w-1/4 px-2 py-1 bg-blue-500 text-white text-center rounded">Trimite</div>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mt-6">Pasul 4: Implementarea logicii aplicației</h3>
                          <p className="mb-2">
                            Acum vom programa logica aplicației folosind blocurile din App Inventor.
                          </p>
                          
                          <h4 className="text-lg font-medium mt-4">Variabile globale</h4>
                          <CodeBlock>
{`// Variabilă pentru numele utilizatorului
initialize global username to ""

// Variabilă pentru a stoca lista de mesaje
initialize global messagesList to create empty list

// Variabilă pentru a stoca timestamp-ul ultimului mesaj
initialize global lastMessageTime to 0`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Autentificarea utilizatorului</h4>
                          <CodeBlock>
{`when LoginButton.Click
  do
    // Verifică dacă utilizatorul a introdus un nume
    if UsernameTextBox.Text = "" then
      // Afișează un mesaj de eroare
      call Notifier1.ShowAlert("Vă rugăm să introduceți un nume de utilizator!")
    else
      // Salvează numele utilizatorului
      set global username to UsernameTextBox.Text
      
      // Dezactivează zona de autentificare
      set UsernameTextBox.Enabled to false
      set LoginButton.Enabled to false
      
      // Activează zona de chat
      set MessageTextBox.Enabled to true
      set SendButton.Enabled to true
      
      // Pornește actualizarea periodică a mesajelor
      set RefreshClock.TimerEnabled to true
      
      // Trimite un mesaj de sistem că utilizatorul s-a conectat
      call FirebaseDB1.AppendValue("messages", create dictionary with pairs ((timestamp, clock), (sender, "system"), (message, join global username " s-a conectat")))
      
      // Actualizează lista de mesaje
      refreshMessages
    end if`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Trimiterea mesajelor</h4>
                          <CodeBlock>
{`when SendButton.Click
  do
    // Verifică dacă mesajul nu este gol
    if MessageTextBox.Text = "" then
      // Afișează un mesaj de eroare
      call Notifier1.ShowAlert("Vă rugăm să introduceți un mesaj!")
    else
      // Creează un nou mesaj cu datele necesare
      set newMessage to create dictionary with pairs 
        ((timestamp, clock), (sender, global username), (message, MessageTextBox.Text))
      
      // Adaugă mesajul în Firebase
      call FirebaseDB1.AppendValue("messages", newMessage)
      
      // Golește caseta de mesaj
      set MessageTextBox.Text to ""
      
      // Actualizează lista de mesaje
      refreshMessages
    end if`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Actualizarea periodică a mesajelor</h4>
                          <CodeBlock>
{`when RefreshClock.Timer
  do
    // Actualizează lista de mesaje
    refreshMessages`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Procedura pentru actualizarea mesajelor</h4>
                          <CodeBlock>
{`to refreshMessages
  // Obține toate mesajele din Firebase
  call FirebaseDB1.GetValue("messages", "")`}
                          </CodeBlock>
                          
                          <h4 className="text-lg font-medium mt-6">Gestionarea datelor primite de la Firebase</h4>
                          <CodeBlock>
{`when FirebaseDB1.GotValue
  do
    // Verifică dacă tag-ul este gol (ceea ce înseamnă că am cerut toate mesajele)
    if tag = "" then
      // Verifică dacă am primit date valide
      if not (value = "null") then
        // Convertește valoarea JSON primită într-o listă
        set global messagesList to value
        
        // Golește ListView-ul
        call MessagesListView.Elements.Clear
        
        // Adaugă fiecare mesaj în ListView
        for each item msgKey msgData in value
          // Obține detaliile mesajului
          set sender to select list item at (select list item at msgData "sender") 1
          set messageText to select list item at (select list item at msgData "message") 1
          set timestamp to select list item at (select list item at msgData "timestamp") 1
          
          // Formatează mesajul pentru afișare
          if sender = "system" then
            // Mesaje de sistem (conectări, etc)
            set displayText to messageText
          else
            // Mesaje normale de la utilizatori
            set displayText to join sender ": " messageText
          end if
          
          // Adaugă mesajul formatat în ListView
          call MessagesListView.Elements.Add(displayText)
        end for
        
        // Derulează automat la ultimul mesaj
        set MessagesListView.Selection to (MessagesListView.Elements.Count - 1)
      end if
    end if`}
                          </CodeBlock>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="extensions">
                        <div className="space-y-4 mt-4">
                          <h3 className="text-xl font-semibold">Extinderea aplicației de chat</h3>
                          <p className="mb-2">
                            Acum că ai implementat funcționalitatea de bază a aplicației de chat, poți explora următoarele funcții suplimentare:
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Implementează camere de chat multiple
                              </h4>
                              <p className="mt-2">
                                Permite utilizatorilor să se alăture diferitelor camere de chat sau să creeze propriile lor camere.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă o listă derulantă pentru a selecta o cameră de chat existentă</li>
                                <li>Adaugă un buton pentru a crea o nouă cameră</li>
                                <li>Modifică structura bazei de date pentru a stoca mesajele pe camere</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Adaugă funcția de mesaje private
                              </h4>
                              <p className="mt-2">
                                Implementează posibilitatea de a trimite mesaje private între utilizatori.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă o listă cu utilizatorii conectați</li>
                                <li>Permite selectarea unui utilizator pentru a-i trimite un mesaj privat</li>
                                <li>Modifică structura bazei de date pentru a stoca mesajele private</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Adaugă suport pentru imagini și emoticoane
                              </h4>
                              <p className="mt-2">
                                Extinde aplicația pentru a permite trimiterea de imagini și emoticoane.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă un buton pentru a selecta și încărca imagini</li>
                                <li>Implementează o selecție de emoticoane comune</li>
                                <li>Modifică afișarea mesajelor pentru a include imagini</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Implementează autentificarea securizată
                              </h4>
                              <p className="mt-2">
                                Adaugă un sistem de autentificare cu parole pentru a securiza aplicația de chat.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă câmpuri pentru nume de utilizator și parolă</li>
                                <li>Implementează stocarea securizată a informațiilor de autentificare</li>
                                <li>Adaugă funcționalitatea de înregistrare pentru utilizatori noi</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                              <h4 className="font-bold flex items-center">
                                <Star className="h-5 w-5 text-course-purple mr-2" />
                                Adaugă stare online/offline și notificări
                              </h4>
                              <p className="mt-2">
                                Implementează un sistem care să arate când utilizatorii sunt online/offline și trimite notificări pentru mesaje noi.
                              </p>
                              <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Adaugă un indicator de stare pentru fiecare utilizator</li>
                                <li>Implementează actualizări periodice ale stării</li>
                                <li>Adaugă notificări push pentru mesaje noi când aplicația rulează în fundal</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                            <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Cum să folosești Firebase Realtime Database pentru stocare de date în cloud</li>
                              <li>Cum să implementezi comunicare în timp real între utilizatori</li>
                              <li>Cum să structurezi o aplicație de chat</li>
                              <li>Cum să gestionezi liste de mesaje și să le afișezi utilizatorului</li>
                              <li>Concepte de bază despre stocarea și securitatea datelor</li>
                            </ul>
                          </div>
                          
                          <h3 className="text-xl font-semibold mt-6">Securitate și bune practici</h3>
                          <p className="mb-2">
                            Dacă ai dori să dezvolți această aplicație pentru utilizare reală, ar trebui să iei în considerare următoarele aspecte de securitate:
                          </p>
                          
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Configurează reguli de securitate pentru Firebase pentru a controla accesul la date</li>
                            <li>Implementează autentificare adecvată (poate prin Firebase Authentication)</li>
                            <li>Limitează frecvența cu care utilizatorii pot trimite mesaje (pentru a preveni spam-ul)</li>
                            <li>Implementează o modalitate de a raporta și modera conținutul neadecvat</li>
                            <li>Asigură-te că datele personale sunt protejate conform reglementărilor de confidențialitate</li>
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between mt-8">
                      <Button className="bg-gray-500 hover:bg-gray-600" asChild>
                        <Link to="/appinventor/session5">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>Sesiunea anterioară</span>
                        </Link>
                      </Button>
                      
                      <Button className="bg-course-purple hover:bg-course-blue" disabled>
                        <span>Toate lecțiile complete!</span>
                        <MessageCircle className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-4">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">Conținut</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-course-purple hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-course-purple rounded-full mr-2"></div>
                            Configurare Firebase
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Interfața aplicației
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Trimiterea mesajelor
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Extinderi
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
                          <a href="https://firebase.google.com/docs/database" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Documentație Firebase
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/firebase" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Tutoriale Firebase pentru App Inventor
                          </a>
                        </li>
                        <li>
                          <a href="https://community.appinventor.mit.edu/t/using-the-firebase-db-extension/12289" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            Comunitatea App Inventor - Firebase
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

export default Session6;
