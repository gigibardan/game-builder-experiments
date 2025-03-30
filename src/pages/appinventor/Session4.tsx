
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';
import { Cloud, Smartphone, Database, Server } from 'lucide-react';

const Session4 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Lecția 4: Aplicația Meteo (Weather App)</h1>
          <p className="text-gray-600">Învață să creezi o aplicație meteo utilizând servicii web și API-uri externe</p>
        </div>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <h2 className="text-2xl font-semibold">Obiectivele lecției</h2>
              <p className="mt-2 opacity-90">În această lecție vei învăța să creezi o aplicație meteo care obține date de la servicii web și le afișează utilizatorului.</p>
            </div>
            
            <Card className="border-0 shadow-none">
              <CardContent className="p-6">
                <Tabs defaultValue="introduction" className="w-full">
                  <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8">
                    <TabsTrigger value="introduction">Introducere</TabsTrigger>
                    <TabsTrigger value="ui-design">Design UI</TabsTrigger>
                    <TabsTrigger value="api-connection">Conexiunea API</TabsTrigger>
                    <TabsTrigger value="extra">Extra</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="introduction">
                    <section className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Ce este o aplicație meteo?</h3>
                        <p className="text-gray-700">
                          O aplicație meteo oferă utilizatorilor informații despre condițiile meteorologice actuale și prognozele viitoare.
                          În această lecție, vom crea o aplicație simplă care obține date meteo de la un serviciu web și le afișează într-o interfață prietenoasă.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Cloud className="mr-2 h-5 w-5 text-blue-600" /> 
                            Ce vei învăța în această lecție
                          </h4>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Cum să utilizezi componenta Web pentru accesarea API-urilor</li>
                            <li>Cum să trimiți cereri HTTP și să procesezi răspunsurile</li>
                            <li>Cum să parsezi date în format JSON</li>
                            <li>Cum să creezi o interfață dinamică pentru afișarea datelor meteo</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Smartphone className="mr-2 h-5 w-5 text-purple-600" />
                            Ce vom crea
                          </h4>
                          <p>
                            Vom dezvolta o aplicație meteo care va permite utilizatorilor să:
                          </p>
                          <ul className="list-disc ml-5 space-y-1 mt-2">
                            <li>Caute informații meteo pentru diferite orașe</li>
                            <li>Vizualizeze temperatura curentă, umiditatea și condițiile meteo</li>
                            <li>Vadă prognoza meteo pentru următoarele zile</li>
                            <li>Salveze orașele favorite pentru acces rapid</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">API-uri meteo</h3>
                        <p className="text-gray-700">
                          Pentru această aplicație, vom folosi OpenWeatherMap API, un serviciu gratuit care oferă date meteo.
                          Vei învăța cum să obții o cheie API și cum să faci cereri pentru a primi informații meteo.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mt-4">
                          <h4 className="font-semibold mb-1">Notă importantă:</h4>
                          <p>
                            Țineți cont că în aplicațiile reale, cheile API ar trebui păstrate în siguranță și nu ar trebui incluse direct în codul aplicației.
                            Pentru scopuri educaționale, în această lecție vom include cheia API în aplicație.
                          </p>
                        </div>
                      </div>
                    </section>
                  </TabsContent>
                  
                  <TabsContent value="ui-design">
                    <section className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Design-ul interfeței utilizator</h3>
                        <p className="text-gray-700">
                          Pentru aplicația noastră meteo, vom crea o interfață simplă dar efectivă, care să afișeze informațiile meteo într-un mod clar și atractiv.
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-3">Componente necesare pentru interfață</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">1. Căutare oraș</h5>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>TextBox pentru introducerea numelui orașului</li>
                              <li>Buton pentru inițierea căutării</li>
                              <li>ListPicker pentru orașe favorite (opțional)</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">2. Afișare informații curente</h5>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>Label pentru numele orașului și țara</li>
                              <li>Label pentru temperatura curentă</li>
                              <li>Label pentru descrierea vremii</li>
                              <li>Imagine corespunzătoare condițiilor meteo</li>
                              <li>Labels pentru umiditate, vânt, etc.</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">3. Prognoză pe mai multe zile</h5>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>HorizontalArrangement pentru fiecare zi</li>
                              <li>Labels pentru ziua săptămânii</li>
                              <li>Imagini pentru condițiile meteo</li>
                              <li>Labels pentru temperaturile min/max</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">4. Setări și opțiuni</h5>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>Buton pentru adăugare la favorite</li>
                              <li>Buton pentru reîmprospătarea datelor</li>
                              <li>Toggle pentru unități de măsură (°C/°F)</li>
                              <li>Notificări pentru alerte meteo (opțional)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium text-lg mb-3">Designul componentelor în App Inventor</h4>
                        <p className="mb-4">
                          În App Inventor, vom aranja componentele după cum urmează:
                        </p>
                        
                        <CodeBlock>
{`1. Screen1
   |- VerticalArrangement (Header)
      |- HorizontalArrangement (SearchBar)
         |- TextBox (CityInput)
         |- Button (SearchButton)
      |- HorizontalArrangement (FavoritesBar)
         |- ListPicker (FavoriteCities)
   |- VerticalArrangement (CurrentWeather)
      |- Label (CityNameLabel)
      |- HorizontalArrangement
         |- Image (WeatherIcon)
         |- Label (TemperatureLabel)
      |- Label (WeatherDescriptionLabel)
      |- HorizontalArrangement (Details)
         |- VerticalArrangement
            |- Label (HumidityTitle)
            |- Label (HumidityValue)
         |- VerticalArrangement
            |- Label (WindTitle)
            |- Label (WindValue)
   |- HorizontalArrangement (ForecastContainer)
      |- VerticalScrollArrangement
         |- HorizontalArrangement (Day1)
            |- Label (Day1Name)
            |- Image (Day1Icon)
            |- Label (Day1Temp)
         |- HorizontalArrangement (Day2)
            |- ...
         |- HorizontalArrangement (Day3)
            |- ...
         |- ...
   |- HorizontalArrangement (Footer)
      |- Button (AddToFavorites)
      |- Button (RefreshData)
      |- Switch (UnitToggle)`}
                        </CodeBlock>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                          <h4 className="font-semibold mb-1">Sfat de design:</h4>
                          <p>
                            Folosiți culori adecvate pentru a reprezenta diferite condiții meteo. 
                            De exemplu, albastru pentru cer senin, gri pentru noros, etc.
                            App Inventor vă permite să setați fundaluri și culori diferite pentru componente,
                            astfel încât să creați o interfață intuitivă și vizual atractivă.
                          </p>
                        </div>
                      </div>
                    </section>
                  </TabsContent>
                  
                  <TabsContent value="api-connection">
                    <section className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Conectarea la API-ul meteo</h3>
                        <p className="text-gray-700">
                          Pentru a obține date meteo, vom folosi componenta Web din App Inventor pentru a face cereri HTTP către API-ul OpenWeatherMap.
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-lg mb-3">Pași pentru conectarea la API</h4>
                        
                        <ol className="list-decimal ml-5 space-y-3">
                          <li>
                            <strong>Obținerea unei chei API</strong>
                            <p className="mt-1">Înregistrează-te pe <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenWeatherMap</a> și obține o cheie API gratuită.</p>
                          </li>
                          
                          <li>
                            <strong>Adăugarea componentei Web</strong>
                            <p className="mt-1">Din secțiunea Connectivity din Palette, adaugă componenta Web în aplicația ta.</p>
                          </li>
                          
                          <li>
                            <strong>Construirea URL-ului pentru cerere</strong>
                            <p className="mt-1">Vom construi URL-ul de cerere folosind orașul introdus și cheia API:</p>
                            <CodeBlock>
{`// Pentru vremea curentă
https://api.openweathermap.org/data/2.5/weather?q=NUME_ORAS&appid=CHEIE_API&units=metric

// Pentru prognoza pe 5 zile
https://api.openweathermap.org/data/2.5/forecast?q=NUME_ORAS&appid=CHEIE_API&units=metric`}
                            </CodeBlock>
                          </li>
                          
                          <li>
                            <strong>Trimiterea cererii și gestionarea răspunsului</strong>
                            <p className="mt-1">Vom folosi metoda Web.Get pentru a trimite cererea și Web.GotText pentru a gestiona răspunsul.</p>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium text-lg mb-3">Blocurile pentru cererea API</h4>
                        
                        <div className="bg-gray-50 p-5 rounded-lg border">
                          <h5 className="font-semibold mb-2">1. Construirea și trimiterea cererii</h5>
                          <p className="mb-3">Când utilizatorul apasă butonul de căutare:</p>
                          
                          <CodeBlock>
{`// SearchButton.Click event
when SearchButton.Click
do
  set global cityName to CityInput.Text
  set requestURL to join "https://api.openweathermap.org/data/2.5/weather?q=" cityName "&appid=YOUR_API_KEY&units=metric"
  call Web1.Get requestURL
end`}
                          </CodeBlock>
                        </div>
                        
                        <div className="bg-gray-50 p-5 rounded-lg border mt-6">
                          <h5 className="font-semibold mb-2">2. Procesarea răspunsului</h5>
                          <p className="mb-3">Când primim răspunsul de la API:</p>
                          
                          <CodeBlock>
{`// Web1.GotText event
when Web1.GotText responseCode responseText
do
  if responseCode = 200 then
    // Parsarea răspunsului JSON
    set weatherData to Web1.JsonTextDecode responseText
    
    // Extragerea și afișarea datelor
    set CityNameLabel.Text to join (get dict_value (get dict_value weatherData "name")) ", " (get dict_value (get dict_value weatherData "sys") "country")
    set temperatureValue to round (get dict_value (get dict_value weatherData "main") "temp")
    set TemperatureLabel.Text to join temperatureValue "°C"
    
    // Extragerea descrierii vremii
    set weatherDescription to get dict_value (select list item (get dict_value weatherData "weather") 1) "description"
    set WeatherDescriptionLabel.Text to weatherDescription
    
    // Umiditate și vânt
    set HumidityValue.Text to join (get dict_value (get dict_value weatherData "main") "humidity") "%"
    set windSpeed to get dict_value (get dict_value weatherData "wind") "speed"
    set WindValue.Text to join windSpeed " m/s"
    
    // Setarea iconiței meteo
    set weatherIcon to get dict_value (select list item (get dict_value weatherData "weather") 1) "icon"
    set WeatherIcon.Picture to join "https://openweathermap.org/img/wn/" weatherIcon "@2x.png"
  else
    // Tratarea erorilor
    set CityNameLabel.Text to "Orașul nu a fost găsit"
    set TemperatureLabel.Text to ""
    set WeatherDescriptionLabel.Text to "Verificați numele orașului și încercați din nou."
  end if
end`}
                          </CodeBlock>
                        </div>
                        
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100 mt-6">
                          <h4 className="font-semibold mb-1 text-red-700">Atenție:</h4>
                          <p>
                            Blocurile de cod prezentate sunt pseudocod pentru a ilustra logica. 
                            În App Inventor, vei crea aceste blocuri folosind interfața vizuală de programare.
                            Sintaxa exactă poate varia, dar conceptele generale rămân aceleași.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium text-lg mb-3">Implementarea prognozei pe 5 zile</h4>
                        <p className="mb-4">
                          Pentru prognoza pe 5 zile, vom face o cerere separată și vom procesa datele pentru a afișa informații pentru fiecare zi:
                        </p>
                        
                        <CodeBlock>
{`// Buton pentru prognoza pe 5 zile
when ForecastButton.Click
do
  set forecastURL to join "https://api.openweathermap.org/data/2.5/forecast?q=" cityName "&appid=YOUR_API_KEY&units=metric"
  call Web1.Get forecastURL
end

// Procesarea prognozei
when Web1.GotText responseCode responseText
do
  if responseCode = 200 then
    set forecastData to Web1.JsonTextDecode responseText
    
    // Obținerea listei de prognoze (la fiecare 3 ore)
    set forecastList to get dict_value forecastData "list"
    
    // Pentru fiecare zi (vom lua doar prognoza de la ora 12:00)
    // Cod pentru extragerea și afișarea datelor pentru fiecare zi
    // ...
  end if
end`}
                        </CodeBlock>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                          <h4 className="font-semibold mb-1">Sfat pentru procesarea datelor:</h4>
                          <p>
                            API-ul de prognoză returnează date la fiecare 3 ore pentru 5 zile.
                            Pentru a afișa o prognoză zilnică simplificată, puteți filtra datele pentru a lua doar 
                            o singură prognoză pe zi (de exemplu, cea de la ora 12:00) sau puteți calcula media temperaturii pentru fiecare zi.
                          </p>
                        </div>
                      </div>
                    </section>
                  </TabsContent>
                  
                  <TabsContent value="extra">
                    <section className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Funcționalități avansate</h3>
                        <p className="text-gray-700">
                          Odată ce ai implementat funcționalitățile de bază ale aplicației meteo, poți adăuga caracteristici suplimentare pentru a o îmbunătăți.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Database className="mr-2 h-5 w-5 text-green-600" /> 
                            Salvarea orașelor favorite
                          </h4>
                          <p className="mb-3">
                            Implementează o funcționalitate pentru a salva orașele favorite ale utilizatorului:
                          </p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Utilizează TinyDB pentru a stoca lista de orașe favorite</li>
                            <li>Adaugă un buton pentru a adăuga/elimina un oraș din favorite</li>
                            <li>Populează ListPicker cu orașele salvate pentru acces rapid</li>
                          </ul>
                          <CodeBlock>
{`// Salvarea unui oraș favorit
when AddToFavoritesButton.Click
do
  // Obținerea listei existente
  if TinyDB1.GetValue tag: "favorites" = "" then
    set favoritesList to create empty list
  else
    set favoritesList to TinyDB1.GetValue tag: "favorites"
  end if
  
  // Verificarea dacă orașul există deja în listă
  if not (is in list? cityName favoritesList) then
    set favoritesList to add items to list favoritesList cityName
    call TinyDB1.StoreValue tag: "favorites" valueToStore: favoritesList
    set AddToFavoritesButton.Text to "Elimină din favorite"
  else
    // Eliminarea orașului din favorite
    set favoritesList to remove item cityName from list favoritesList
    call TinyDB1.StoreValue tag: "favorites" valueToStore: favoritesList
    set AddToFavoritesButton.Text to "Adaugă la favorite"
  end if
  
  // Actualizarea ListPicker cu noua listă de favorite
  set FavoriteCities.Elements to favoritesList
end`}
                          </CodeBlock>
                        </div>
                        
                        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Server className="mr-2 h-5 w-5 text-blue-600" />
                            Geolocalizare pentru vremea locală
                          </h4>
                          <p className="mb-3">
                            Utilizează senzorul de locație pentru a obține automat vremea pentru poziția curentă a utilizatorului:
                          </p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Adaugă componenta LocationSensor în aplicație</li>
                            <li>Creează un buton pentru a obține locația curentă</li>
                            <li>Folosește latitudinea și longitudinea pentru a face cererea către API</li>
                          </ul>
                          <CodeBlock>
{`// Obținerea vremii pentru locația curentă
when CurrentLocationButton.Click
do
  call LocationSensor1.RequestLocation
end

// Când locația este disponibilă
when LocationSensor1.LocationChanged latitude longitude altitude accuracy
do
  set weatherByLocationURL to join "https://api.openweathermap.org/data/2.5/weather?lat=" latitude "&lon=" longitude "&appid=YOUR_API_KEY&units=metric"
  call Web1.Get weatherByLocationURL
end`}
                          </CodeBlock>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium text-lg mb-3">Îmbunătățiri vizuale și de utilizare</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">Fundaluri dinamice</h5>
                            <p className="mb-2">
                              Schimbă fundalul aplicației în funcție de condițiile meteo și momentul zilei:
                            </p>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>Fundal însorit pentru cer senin</li>
                              <li>Imagine cu nori pentru condiții noroase</li>
                              <li>Fundal întunecat pentru noapte</li>
                              <li>Animații de ploaie sau zăpadă</li>
                            </ul>
                          </div>
                          
                          <div className="border rounded p-4">
                            <h5 className="font-semibold mb-2">Notificări și alerte</h5>
                            <p className="mb-2">
                              Implementează notificări pentru alerte meteo importante:
                            </p>
                            <ul className="list-disc ml-5 space-y-1">
                              <li>Folosește componenta Notifier pentru afișarea alertelor</li>
                              <li>Implementează verificări periodice ale vremii</li>
                              <li>Notifică utilizatorul despre schimbări semnificative</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="font-medium text-lg mb-3">Proiect final și continuare</h4>
                          <p className="mb-2">
                            După implementarea acestor funcționalități, vei avea o aplicație meteo completă și funcțională.
                            Câteva idei pentru dezvoltarea ulterioară a proiectului:
                          </p>
                          <ul className="list-disc ml-5 space-y-1">
                            <li>Adaugă un widget pentru ecranul de start al telefonului</li>
                            <li>Implementează grafice pentru evoluția temperaturii</li>
                            <li>Adaugă suport pentru mai multe limbi</li>
                            <li>Creează o interfață pentru diferite zone de timp</li>
                            <li>Integrează cu alte aplicații (calendar, alarme)</li>
                          </ul>
                          
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mt-6">
                            <h4 className="font-semibold mb-1">Notă finală:</h4>
                            <p>
                              Această aplicație meteo reprezintă un exemplu bun de cum poți utiliza API-uri externe
                              pentru a crea aplicații utile și informative. Conceptele învățate aici pot fi aplicate
                              în numeroase alte proiecte care necesită integrare cu servicii web.
                            </p>
                          </div>
                          
                          <div className="mt-8 text-center">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Descarcă codul sursă al proiectului
                            </Button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Session4;
