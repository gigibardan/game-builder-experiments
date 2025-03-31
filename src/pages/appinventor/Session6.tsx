
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, MessageSquare, Send } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                  Construiește o aplicație de mesagerie instant cu comunicare în timp real!
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link to="/appinventor" className="flex items-center">
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
                    <Tabs defaultValue="tutorial">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
                        <TabsTrigger value="code">Codul complet</TabsTrigger>
                      </TabsList>

                      <TabsContent value="tutorial">
                        <h2 className="text-2xl font-bold mb-4">Introducere în aplicația de chat</h2>
                        <p className="mb-4">
                          În această lecție, vom construi o aplicație de chat simplu care permite utilizatorilor să 
                          trimită și să primească mesaje în timp real. Vom folosi serviciul Firebase pentru a stoca și 
                          sincroniza mesajele între dispozitive.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                          <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cum să folosești Firebase pentru a stoca date în cloud</li>
                            <li>Cum să sincronizezi date între dispozitive în timp real</li>
                            <li>Cum să creezi o interfață de chat</li>
                            <li>Cum să gestionezi autentificarea utilizatorilor</li>
                          </ul>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Pasul 1: Configurarea Firebase</h2>
                        <p className="mb-4">
                          Înainte de a începe dezvoltarea aplicației, trebuie să configurăm Firebase pentru a stoca mesajele:
                        </p>

                        <ol className="list-decimal list-inside space-y-4 mb-6">
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Creează un cont Firebase</strong> dacă nu ai deja unul, la:
                            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline ml-1">
                              https://firebase.google.com/
                            </a>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Creează un proiect nou</strong> în consola Firebase
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Activează Realtime Database</strong> din meniul din stânga
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Alege "Start in test mode" pentru regulile de securitate</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Notează URL-ul Firebase</strong> - vei avea nevoie de el în App Inventor
                          </li>
                        </ol>

                        <h2 className="text-2xl font-bold mb-4">Pasul 2: Crearea interfeței de utilizator</h2>
                        
                        <p className="mb-4">
                          Acum vom crea interfața aplicației de chat:
                        </p>

                        <ol className="list-decimal list-inside space-y-4 mb-6">
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Creează un nou proiect</strong> în MIT App Inventor numit "ChatApp"
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un TextBox</strong> pentru numele utilizatorului
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Schimbă Hint la "Introdu numele tău"</li>
                              <li>Setează Width la Fill parent</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un aranjament HorizontalArrangement</strong> pentru autentificare
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Adaugă un buton în acest aranjament cu textul "Conectează-te"</li>
                              <li>Adaugă o etichetă status lângă buton</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un ListView</strong> pentru afișarea mesajelor
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Setează Height la 60% of screen</li>
                              <li>Setează Width la Fill parent</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă un aranjament HorizontalArrangement</strong> în partea de jos
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Adaugă un TextBox pentru mesajul cu Width la 70%</li>
                              <li>Adaugă un buton "Trimite" cu Width la 30%</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă componenta FirebaseDB</strong> din secțiunea Extension
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Setează FirebaseURL la URL-ul pe care l-ai notat anterior</li>
                              <li>Setează ProjectBucket la "chat"</li>
                            </ul>
                          </li>
                          <li className="p-4 border rounded-md bg-gray-50">
                            <strong>Adaugă componenta Clock</strong> pentru actualizări periodice
                            <ul className="list-disc list-inside mt-2 ml-4">
                              <li>Setează TimerInterval la 1000 (1 secundă)</li>
                              <li>Activează TimerEnabled</li>
                            </ul>
                          </li>
                        </ol>

                        <div className="my-8 border p-4 rounded-md text-center">
                          <p className="text-gray-600 mb-2">
                            Interfața aplicației tale de chat ar trebui să arate astfel:
                          </p>
                          <div className="bg-white border-2 border-gray-300 rounded-xl p-4 mx-auto">
                            <div className="border-b pb-2 mb-2">
                              <div className="bg-gray-100 p-2 rounded mb-2">Introdu numele tău</div>
                              <div className="flex justify-between">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded">Conectează-te</button>
                                <div className="text-gray-500">Status: Deconectat</div>
                              </div>
                            </div>
                            <div className="bg-gray-100 h-60 mb-2 rounded overflow-y-auto p-2">
                              <div className="bg-blue-100 p-2 rounded mb-1 text-left">Ana: Salut tuturor!</div>
                              <div className="bg-green-100 p-2 rounded mb-1 text-left">Mihai: Bună Ana!</div>
                            </div>
                            <div className="flex">
                              <div className="bg-gray-100 p-2 rounded flex-grow mr-2">Scrie un mesaj</div>
                              <button className="bg-blue-500 text-white px-3 py-1 rounded">Trimite</button>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Pasul 3: Programarea funcționalității</h2>

                        <p className="mb-4">
                          Acum vom adăuga blocurile de cod pentru a face aplicația să funcționeze:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.1. Autentificarea utilizatorului</h3>
                        <p className="mb-4">
                          Primul pas este să permitem utilizatorului să se conecteze cu un nume:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.2. Trimiterea mesajelor</h3>
                        <p className="mb-4">
                          Acum vom implementa funcționalitatea de a trimite mesaje:
                        </p>

                        <h3 className="text-xl font-bold mb-3">3.3. Primirea și afișarea mesajelor</h3>
                        <p className="mb-4">
                          În final, vom implementa primirea și afișarea mesajelor de la alți utilizatori:
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                          <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cum să folosești Firebase pentru a stoca date în cloud</li>
                            <li>Cum să creezi o aplicație de chat funcțională</li>
                            <li>Cum să sincronizezi date între dispozitive</li>
                            <li>Cum să gestionezi autentificarea utilizatorilor simplu</li>
                          </ul>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Provocări suplimentare</h2>
                        <div className="space-y-4 mb-8">
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 1: Adaugă ora mesajului
                            </h3>
                            <p className="mt-2">
                              Afișează ora la care a fost trimis fiecare mesaj lângă numele utilizatorului.
                            </p>
                          </div>
                          
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 2: Chat-uri private
                            </h3>
                            <p className="mt-2">
                              Implementează opțiunea de a trimite mesaje private către un utilizator specific.
                            </p>
                          </div>
                          
                          <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                            <h3 className="font-bold flex items-center">
                              <Star className="h-5 w-5 text-course-purple mr-2" />
                              Provocare 3: Trimitere de imagini
                            </h3>
                            <p className="mt-2">
                              Adaugă funcționalitatea de a trimite imagini în conversație.
                            </p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="code">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">Codul complet pentru aplicația de Chat</h2>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Variabile globale</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
initialize global username to ""
initialize global isConnected to false
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Autentificare utilizator</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when ButtonConnect.Click
  do
    if TextBoxUsername.Text = "" then
      call Notifier1.ShowAlert
        notice "Te rugăm să introduci un nume"
    else
      set global username to TextBoxUsername.Text
      set global isConnected to true
      set LabelStatus.Text to join "Status: Conectat ca " global username
      set ButtonConnect.Enabled to false
      set TextBoxUsername.Enabled to false
    end if
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Trimiterea mesajelor</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when ButtonSend.Click
  do
    if global isConnected then
      if TextBoxMessage.Text <> "" then
        set messageToSend to create dictionary
          with key "sender" as global username
          with key "message" as TextBoxMessage.Text
          with key "timestamp" as call Clock1.Now
        call FirebaseDB1.StoreValue
          tag join "message_" call Clock1.Now
          valueToStore messageToSend
        set TextBoxMessage.Text to ""
      end if
    else
      call Notifier1.ShowAlert
        notice "Trebuie să te conectezi mai întâi!"
    end if
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Primirea mesajelor</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when FirebaseDB1.DataChanged
  do
    set tag to call FirebaseDB1.GetTagList
    call updateMessageList
      tagList tag

to updateMessageList
  with tagList
  do
    set messageList to create empty list
    for each item tag in tagList
      do
        if starts tag with "message_" then
          set message to call FirebaseDB1.GetValue
            tag tag
            valueIfTagNotThere ""
          if message <> "" then
            set messageText to join get dictionary value message "sender" ": " get dictionary value message "message"
            call add items to list messageList messageText
          end if
        end if
    end for
    call ListViewMessages.Elements
      elements messageList
`}
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Actualizarea periodică</h3>
                            <CodeBlock
                              language="blocks"
                              code={`
when Clock1.Timer
  do
    if global isConnected then
      call FirebaseDB1.GetTagList
    end if
`}
                            />
                          </div>
                        </section>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-between mt-8">
                      <Button asChild className="bg-gray-500 hover:bg-gray-600">
                        <Link to="/appinventor/session5" className="flex items-center">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          <span>Lecția anterioară</span>
                        </Link>
                      </Button>
                      <Button disabled className="bg-gray-300">
                        <span>Lecția următoare</span>
                        <ChevronRight className="ml-2 h-5 w-5" />
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
                            Introducere
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 1: Firebase
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 2: Interfața
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 3: Funcționalitatea
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Provocări
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
                          <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Documentație Firebase
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/firebase" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutorial Firebase în App Inventor
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
