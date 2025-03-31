
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Star, Database, Server } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ReadingProgressBar from '@/components/ReadingProgressBar';

const Session7 = () => {
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
                    7
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold">Sesiunea 7: Aplicația Meteo cu API</h1>
                </div>
                <p className="text-white/90">
                  Învață să comunici cu servicii web și să afișezi date meteo în timp real!
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
                      În lecția de astăzi vom învăța cum să comunicăm cu servicii web externe pentru a obține date în timp real. 
                      Vom construi o aplicație meteo care va afișa informații despre vreme în locația aleasă de utilizator.
                    </p>
                    <p className="mb-4">
                      Această aplicație va combina multe concepte pe care le-ai învățat până acum: interfețe utilizator, 
                      interacțiunea cu utilizatorul, și procesarea datelor. În plus, vei învăța cum să utilizezi componenta 
                      Web pentru a face cereri la un API (Application Programming Interface).
                    </p>

                    <div className="bg-blue-50 border-l-4 border-course-blue p-4 my-6">
                      <h3 className="text-lg font-semibold text-course-blue mb-2">Ce vei învăța</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să faci cereri la API-uri externe</li>
                        <li>Cum să procesezi datele JSON primite</li>
                        <li>Cum să afișezi informații despre vreme în interfața utilizator</li>
                        <li>Cum să utilizezi componenta de localizare pentru a obține locația curentă</li>
                        <li>Cum să gestionezi erorile de rețea</li>
                      </ul>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="ce-este-api">Ce este un API?</h2>
                    <p className="mb-4">
                      Un API (Application Programming Interface) este un set de reguli și protocoale care permit aplicațiilor 
                      să comunice între ele. În contextul nostru, vom folosi un API meteo pentru a obține informații despre 
                      vreme din diferite locații.
                    </p>
                    <p className="mb-4">
                      API-urile funcționează pe baza cererii și răspunsului. Aplicația noastră va trimite o cerere către 
                      serverul API, specificând ce informații dorim (de exemplu, vremea din București), iar serverul va 
                      răspunde cu datele solicitate.
                    </p>
                    <p className="mb-4">
                      Majoritatea API-urilor moderne returnează datele în format JSON (JavaScript Object Notation), un format 
                      text care este ușor de citit atât de oameni, cât și de mașini.
                    </p>

                    <div className="my-6 p-4 bg-gray-50 rounded-md border">
                      <h3 className="text-lg font-semibold mb-2">Exemplu de date JSON pentru vreme</h3>
                      <CodeBlock language="json">
{`{
  "location": {
    "name": "București",
    "country": "România"
  },
  "current": {
    "temp_c": 22,
    "condition": {
      "text": "Parțial înnorat",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
    },
    "wind_kph": 15,
    "humidity": 65
  }
}`}
                      </CodeBlock>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="configurare">Pasul 1: Configurarea Proiectului</h2>
                    <p className="mb-4">
                      Să începem prin crearea unui nou proiect în MIT App Inventor și configurarea componentelor necesare.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Creează un nou proiect</strong> în MIT App Inventor și numește-l "AplicatieMeteo".
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Din Palette, secțiunea "User Interface"</strong>, adaugă următoarele componente:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Un Label pentru titlu</li>
                          <li>Un TextBox pentru introducerea orașului</li>
                          <li>Un Button pentru căutare</li>
                          <li>Mai multe Labels pentru afișarea datelor meteo</li>
                          <li>Un Image pentru afișarea iconului meteo</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Din Palette, secțiunea "Connectivity"</strong>, adaugă componenta Web pentru a face cereri HTTP.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Din Palette, secțiunea "Sensors"</strong>, adaugă componenta LocationSensor pentru a obține locația curentă.
                      </li>
                    </ol>

                    <div className="my-6 text-center">
                      <img 
                        src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/picture/DoItNowAppPreview.png" 
                        alt="Layout App Inventor" 
                        className="mx-auto border rounded-md shadow-md max-w-full"
                      />
                      <p className="text-gray-600 mt-2">Exemplu de layout în App Inventor</p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="design">Pasul 2: Designul Interfeței</h2>
                    <p className="mb-4">
                      Acum, să organizăm componentele pentru a crea o interfață utilizator plăcută și funcțională.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Organizează componentele</strong> într-un Vertical Arrangement:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Titlul "Aplicație Meteo" în partea de sus (FontSize 24, TextAlignment Center)</li>
                          <li>Un HorizontalArrangement pentru căutare (TextBox și Button)</li>
                          <li>Un alt Button pentru "Folosește locația mea"</li>
                          <li>Un Image pentru iconul meteo</li>
                          <li>Labels pentru orașul actual, temperatura, descrierea vremii, umiditate și viteza vântului</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Setează proprietățile componentelor:</strong>
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>TextBox: Hint="Introdu numele orașului"</li>
                          <li>Button căutare: Text="Caută"</li>
                          <li>Button locație: Text="Folosește locația mea"</li>
                          <li>Label oraș: Text="", TextColor=Blue, FontSize=18</li>
                          <li>Label temperatură: Text="", TextColor=Red, FontSize=36, TextAlignment=Center</li>
                          <li>Label descriere vreme: Text="", FontSize=16, TextAlignment=Center</li>
                          <li>Label umiditate: Text=""</li>
                          <li>Label viteză vânt: Text=""</li>
                          <li>Redenumește componentele pentru a le face mai ușor de identificat în codul bloc</li>
                        </ul>
                      </li>
                    </ol>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                      <h3 className="text-lg font-semibold text-yellow-700 mb-2">Sfat important</h3>
                      <p>
                        Redenumirea componentelor este o practică bună deoarece face codul mai ușor de citit și de înțeles.
                        De exemplu, în loc de "Label1", "Label2", etc., folosește nume descriptive cum ar fi "LabelOras",
                        "LabelTemperatura", etc.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="api-key">Pasul 3: Obținerea unei Chei API</h2>
                    <p className="mb-4">
                      Pentru a utiliza API-ul meteo, vom avea nevoie de o cheie API. În acest exemplu, vom folosi WeatherAPI.com,
                      care oferă un plan gratuit suficient pentru scopurile noastre.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Vizitează</strong> <a href="https://www.weatherapi.com/signup.aspx" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline">WeatherAPI.com</a> și înregistrează-te pentru un cont gratuit.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>După înregistrare</strong>, vei primi o cheie API. Această cheie va fi folosită pentru a face cereri la API.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Copiază cheia API</strong> și ține-o la îndemână pentru a o folosi în aplicația noastră.
                      </li>
                    </ol>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                      <h3 className="text-lg font-semibold text-red-700 mb-2">Atenție</h3>
                      <p>
                        Nu distribui niciodată cheia ta API în mod public. Ea este ca o parolă și oferă acces la serviciul API
                        în numele tău. În aplicația noastră de testare o vom folosi direct, dar într-o aplicație reală ar trebui
                        protejată corespunzător.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4" id="programare">Pasul 4: Programarea Funcționalității</h2>
                    <p className="mb-4">
                      Acum vom adăuga cod pentru a face aplicația noastră funcțională. Vom implementa două funcționalități principale:
                      căutarea vremii pentru un oraș specificat și obținerea vremii în funcție de locația curentă.
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.1 Configurarea Componentei Web</h3>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Selectează componenta Web din "Components"</li>
                          <li>Setează proprietatea "Url" la "https://api.weatherapi.com/v1/current.json"</li>
                          <li>Lasă celelalte proprietăți la valorile lor implicite</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.2 Implementarea Căutării după Oraș</h3>
                        <p className="mb-2">În "Blocks Editor", implementează următoarea funcționalitate pentru butonul de căutare:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Când butonul de căutare este apăsat:</li>
                          <li>Construiește URL-ul cu parametrii necesari (cheia API și orașul)</li>
                          <li>Fă cererea la API folosind Web.Get</li>
                          <li>Procesează răspunsul când evenimentul Web.GotText este declanșat</li>
                        </ol>
                        <div className="mt-4">
                          <p className="font-semibold mb-2">Cod bloc pentru butonul de căutare:</p>
                          <img 
                            src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/URL_request.png" 
                            alt="Exemplu cod bloc pentru cereri web" 
                            className="border rounded-md shadow-sm max-w-full"
                          />
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.3 Procesarea Răspunsului JSON</h3>
                        <p className="mb-2">Când primim răspunsul de la API, trebuie să procesăm datele JSON și să actualizăm interfața:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>În evenimentul Web.GotText:</li>
                          <li>Folosește blocurile pentru a analiza răspunsul JSON</li>
                          <li>Extrage informațiile necesare: nume oraș, temperatură, descriere vreme, umiditate, etc.</li>
                          <li>Actualizează etichetele corespunzătoare cu informațiile extrase</li>
                          <li>Setează URL-ul imaginii pentru icoana meteo</li>
                        </ol>
                        <div className="mt-4">
                          <p className="font-semibold mb-2">Cod bloc pentru procesarea JSON:</p>
                          <img 
                            src="https://appinventor.mit.edu/explore/sites/all/files/tutorials/stockMarketPortfolio/blocks/Response.png" 
                            alt="Exemplu cod bloc pentru procesare JSON" 
                            className="border rounded-md shadow-sm max-w-full"
                          />
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.4 Implementarea Funcționalității de Localizare</h3>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Când butonul "Folosește locația mea" este apăsat:</li>
                          <li>Pornește LocationSensor pentru a obține coordonatele curente</li>
                          <li>În evenimentul LocationChanged, folosește latitudinea și longitudinea pentru a construi URL-ul API</li>
                          <li>Fă cererea la API și procesează răspunsul ca mai sus</li>
                        </ol>
                      </div>

                      <div className="p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold mb-2">4.5 Gestionarea Erorilor</h3>
                        <p className="mb-2">Este important să gestionăm posibilele erori:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Verifică dacă câmpul orașului nu este gol înainte de căutare</li>
                          <li>Adaugă un bloc pentru a gestiona erorile API (de exemplu, oraș inexistent)</li>
                          <li>Verifică dacă LocationSensor este disponibil înainte de a încerca să obții locația</li>
                        </ol>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 mt-8" id="testare">Pasul 5: Testarea Aplicației</h2>
                    <p className="mb-4">
                      Este momentul să testăm aplicația noastră meteo pentru a verifica dacă funcționează corect.
                    </p>

                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Conectează-te</strong> prin "AI Companion" sau folosește emulatorul pentru a rula aplicația.
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează căutarea după oraș</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Introdu un nume de oraș (ex: "București")</li>
                          <li>Apasă butonul "Caută"</li>
                          <li>Verifică dacă aplicația afișează corect datele meteo pentru orașul respectiv</li>
                        </ul>
                      </li>
                      <li className="p-4 border rounded-md bg-gray-50">
                        <strong>Testează funcția de localizare</strong>:
                        <ul className="list-disc list-inside mt-2 ml-4">
                          <li>Apasă butonul "Folosește locația mea"</li>
                          <li>Acceptă permisiunea de localizare dacă ți se cere</li>
                          <li>Verifică dacă aplicația afișează datele meteo pentru locația ta curentă</li>
                        </ul>
                      </li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-4" id="imbunatatiri">Îmbunătățiri Posibile</h2>
                    <p className="mb-4">
                      Iată câteva idei pentru îmbunătățirea aplicației noastre meteo:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Prognoza pe Mai Multe Zile
                        </h3>
                        <p className="mt-2">
                          Extinde aplicația pentru a afișa prognoza meteo pentru mai multe zile, nu doar pentru ziua curentă.
                          WeatherAPI oferă endpoint-ul "forecast.json" care poate returna date pentru până la 3 zile în planul gratuit.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Salvarea Orașelor Favorite
                        </h3>
                        <p className="mt-2">
                          Adaugă funcționalitate pentru salvarea orașelor favorite, astfel încât utilizatorul să poată verifica
                          rapid vremea în locațiile care îl interesează.
                        </p>
                      </div>
                      
                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Notificări
                        </h3>
                        <p className="mt-2">
                          Implementează un sistem de notificări care să alerteze utilizatorul în caz de condiții meteo extreme
                          în zona sa.
                        </p>
                      </div>

                      <div className="p-4 border-l-4 border-course-purple bg-purple-50 rounded-r-md">
                        <h3 className="font-bold flex items-center">
                          <Star className="h-5 w-5 text-course-purple mr-2" />
                          Design Adaptabil
                        </h3>
                        <p className="mt-2">
                          Îmbunătățește designul aplicației pentru a se adapta la diferite teme (zi/noapte) și condiții meteo
                          (ploaie, soare, ninsoare).
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">Ce ai învățat</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cum să utilizezi componenta Web pentru a face cereri la API-uri externe</li>
                        <li>Cum să procesezi date în format JSON</li>
                        <li>Cum să obții și să utilizezi locația curentă a dispozitivului</li>
                        <li>Cum să actualizezi interfața utilizator în funcție de datele primite</li>
                        <li>Cum să gestionezi erorile în aplicațiile care folosesc servicii externe</li>
                      </ul>
                    </div>

                    <div className="flex justify-end mt-8">
                      <Button asChild className="bg-course-purple hover:bg-course-blue">
                        <Link to="/appinventor/session8">
                          <span>Sesiunea 8: Baza de Date TinyDB</span>
                          <ChevronRight className="ml-2 h-5 w-5" />
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
                          <a href="#ce-este-api" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Ce este un API?
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
                          <a href="#api-key" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 3: Cheia API
                          </a>
                        </li>
                        <li>
                          <a href="#programare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 4: Programare
                          </a>
                        </li>
                        <li>
                          <a href="#testare" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Pasul 5: Testare
                          </a>
                        </li>
                        <li>
                          <a href="#imbunatatiri" className="text-gray-700 hover:text-course-blue flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            Îmbunătățiri
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
                          <a href="https://www.weatherapi.com/docs/" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Documentație WeatherAPI
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/ai2/weather-station" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Tutorial Stație Meteo
                          </a>
                        </li>
                        <li>
                          <a href="https://appinventor.mit.edu/explore/sites/all/files/hourofcode/WeatherAPI.pdf" target="_blank" rel="noopener noreferrer" className="text-course-blue hover:underline flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Ghid APIs în App Inventor
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

export default Session7;
