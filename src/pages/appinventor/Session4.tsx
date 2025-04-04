
import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';

const Session4 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'weather-app', title: 'Weather App' },
    { id: 'interfata', title: 'Design-ul interfeței' },
    { id: 'componente', title: 'Componente și proprietăți' },
    { id: 'web-api', title: 'Lucrul cu Web API' },
    { id: 'implementare', title: 'Implementarea funcționalităților' },
    { id: 'exercitiu', title: 'Exercițiu pentru acasă' },
  ];

  const resources = [
    { title: 'Documentație App Inventor - Web Component', url: 'https://appinventor.mit.edu/explore/ai2/web' },
    { title: 'Documentație OpenWeatherMap API', url: 'https://openweathermap.org/api' },
    { title: 'Tutorial video - Weather App', url: 'https://www.youtube.com/watch?v=AbMGLIKvDis' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <LearningOutcome items={[
            "Înțelegerea conceptului de API și cum să comunicăm cu servicii web",
            "Utilizarea componentei Web din App Inventor pentru a face cereri HTTP",
            "Parsarea datelor JSON primite de la un API",
            "Crearea unei aplicații meteo funcționale"
          ]} />
          
          <p className="mt-4 text-gray-700">
            În această lecție vom învăța să creăm o aplicație meteo care utilizează date în timp real de la 
            un serviciu web (API). Vom folosi componenta Web din App Inventor pentru a ne conecta la API-ul
            OpenWeatherMap și vom afișa informații meteo pentru orașul ales de utilizator.
          </p>
        </>
      )
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Weather App este o aplicație care permite utilizatorului să verifice condițiile meteo curente 
            pentru orice oraș din lume. Aplicația include următoarele funcționalități:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Căutarea unui oraș</li>
            <li>Afișarea temperaturii curente</li>
            <li>Afișarea descrierii condițiilor meteo</li>
            <li>Afișarea unei icoane reprezentative pentru condițiile meteo</li>
            <li>Afișarea informațiilor suplimentare precum umiditatea și viteza vântului</li>
          </ul>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://appinventor.mit.edu/explore/sites/all/files/Tutorials/amazonAws/webServiceAmazon.png" 
              alt="Weather App Example" 
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
            Interfața aplicației noastre va consta într-un câmp de căutare, un buton pentru a obține datele
            meteo și mai multe etichete pentru a afișa informațiile primite.
          </p>

          <InfoBox title="Structura interfeței" variant="primary">
            <p>Interfața aplicației va fi organizată astfel:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Un TextBox pentru introducerea numelui orașului</li>
              <li>Un Button pentru a efectua căutarea</li>
              <li>O Label pentru a afișa numele orașului</li>
              <li>O Label pentru a afișa temperatura</li>
              <li>O Label pentru a afișa descrierea condițiilor meteo</li>
              <li>O Image pentru a afișa iconița meteo</li>
              <li>Etichete pentru informații suplimentare (umiditate, vânt, etc.)</li>
            </ol>
          </InfoBox>

          <StepItem number={1} title="Configurarea Designer-ului">
            <p>Pentru a crea interfața aplicației, vom folosi următoarea structură în Designer:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Un VerticalArrangement pentru întregul ecran</li>
              <li>Un HorizontalArrangement pentru zona de căutare (TextBox și Button)</li>
              <li>Un VerticalArrangement pentru zona de afișare a rezultatelor</li>
              <li>Etichete și o imagine în zona de rezultate</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'componente',
      title: 'Componente și proprietăți',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Pentru a implementa aplicația meteo, vom avea nevoie de următoarele componente:
          </p>

          <InfoBox title="Componente necesare" variant="secondary">
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>TextBox</strong> - pentru introducerea numelui orașului</li>
              <li><strong>Button</strong> - pentru inițierea căutării</li>
              <li><strong>Label</strong> - pentru afișarea informațiilor meteo</li>
              <li><strong>Image</strong> - pentru afișarea iconiței meteo</li>
              <li><strong>Web</strong> - pentru a face cereri HTTP la API</li>
              <li><strong>Notifier</strong> - pentru a afișa mesaje de eroare</li>
              <li><strong>HorizontalArrangement</strong> și <strong>VerticalArrangement</strong> - pentru organizarea componentelor</li>
            </ul>
          </InfoBox>

          <StepItem number={2} title="Obținerea unei chei API pentru OpenWeatherMap">
            <p>Înainte de a începe implementarea, avem nevoie de o cheie API de la OpenWeatherMap:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Accesează site-ul <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenWeatherMap</a></li>
              <li>Creează un cont gratuit (Sign Up)</li>
              <li>După autentificare, accesează secțiunea "API keys"</li>
              <li>Copiază cheia API generată automat sau creează una nouă</li>
              <li>Această cheie va fi folosită în aplicația noastră pentru a accesa datele meteo</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'web-api',
      title: 'Lucrul cu Web API',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            API-ul (Application Programming Interface) este un set de reguli care permite aplicațiilor să 
            comunice între ele. În cazul nostru, vom folosi API-ul OpenWeatherMap pentru a obține date meteo.
          </p>

          <InfoBox title="Cum funcționează API-ul OpenWeatherMap" variant="primary">
            <p>Pentru a obține datele meteo pentru un oraș, vom face o cerere HTTP GET la următorul URL:</p>
            <div className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
              <code>https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=YOUR_API_KEY&units=metric</code>
            </div>
            <p className="mt-2">Unde:</p>
            <ul className="list-disc pl-5 mt-1">
              <li><strong>CITY_NAME</strong> - numele orașului pentru care dorim datele meteo</li>
              <li><strong>YOUR_API_KEY</strong> - cheia API obținută de la OpenWeatherMap</li>
              <li><strong>units=metric</strong> - specifică faptul că dorim temperatura în grade Celsius</li>
            </ul>
          </InfoBox>

          <StepItem number={3} title="Adăugarea componentei Web în aplicație">
            <p>Pentru a face cereri la API, vom adăuga o componentă Web în aplicația noastră:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Din categoria "Connectivity", adaugă o componentă "Web" în aplicație</li>
              <li>Această componentă nu va fi vizibilă în interfață (va apărea în secțiunea "Non-visible components")</li>
              <li>Vom folosi metoda Web.Get pentru a face cereri GET la API</li>
            </ol>
          </StepItem>
        </>
      )
    },
    {
      id: 'implementare',
      title: 'Implementarea funcționalităților',
      content: (
        <>
          <p className="mb-6 text-gray-700">
            Acum vom implementa funcționalitățile aplicației noastre folosind blocurile din Blocks Editor.
          </p>

          <StepItem number={1} title="Inițializarea aplicației">
            <p>La inițializarea aplicației, trebuie să setăm valorile implicite și să ascundem zonele de rezultate:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Screen1.Initialize<br/>
                &nbsp;&nbsp;set ResultsPanel.Visible to false<br/>
                &nbsp;&nbsp;set ApiKeyLabel.Text to "YOUR_API_KEY"<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={2} title="Implementarea căutării">
            <p>Când utilizatorul apasă butonul de căutare, trebuie să facem o cerere la API:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when SearchButton.Click<br/>
                &nbsp;&nbsp;if CityTextBox.Text is empty then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call Notifier1.ShowAlert with message "Please enter a city name"<br/>
                &nbsp;&nbsp;else<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set url to join "https://api.openweathermap.org/data/2.5/weather?q=" CityTextBox.Text "&appid=" ApiKeyLabel.Text "&units=metric"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call Web1.Get with url<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>

          <StepItem number={3} title="Procesarea răspunsului de la API">
            <p>Când primim răspunsul de la API, trebuie să parsăm datele JSON și să actualizăm interfața:</p>
            <div className="mt-3 p-3 bg-gray-100 rounded-md">
              <p className="font-mono text-sm">
                when Web1.GotText<br/>
                &nbsp;&nbsp;if Web1.ResponseCode = 200 then<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set ResultsPanel.Visible to true<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set jsonResponse to Web1.JsonTextDecode with responseContent<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set CityNameLabel.Text to get from jsonResponse with key "name"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set weatherList to get from jsonResponse with key "weather"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set weatherItem to select list item from weatherList with index 1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set WeatherDescriptionLabel.Text to get from weatherItem with key "description"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set iconCode to get from weatherItem with key "icon"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set WeatherIcon.Picture to join "https://openweathermap.org/img/wn/" iconCode "@2x.png"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set mainData to get from jsonResponse with key "main"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set tempValue to get from mainData with key "temp"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set TemperatureLabel.Text to join tempValue " °C"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set humidityValue to get from mainData with key "humidity"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set HumidityLabel.Text to join "Humidity: " humidityValue "%"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set windData to get from jsonResponse with key "wind"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set windSpeed to get from windData with key "speed"<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set WindLabel.Text to join "Wind: " windSpeed " m/s"<br/>
                &nbsp;&nbsp;else<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;set ErrorLabel.Text to join "Error: " Web1.ResponseCode<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;call Notifier1.ShowAlert with message "City not found or API error"<br/>
                &nbsp;&nbsp;end if<br/>
              </p>
            </div>
          </StepItem>

          <InfoBox title="Sfat important" variant="warning">
            <p>Nu uita să înlocuiești "YOUR_API_KEY" cu cheia API reală obținută de la OpenWeatherMap.</p>
            <p className="mt-2">De asemenea, asigură-te că aplicația ta are permisiunea de a accesa internetul.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'exercitiu',
      title: 'Exercițiu pentru acasă',
      content: (
        <>
          <Challenge title="Extinde aplicația meteo cu următoarele funcționalități" difficulty="medium">
            <p className="text-gray-700 mb-4">
              Extinde aplicația meteo creată în timpul lecției adăugând:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">Un buton pentru a obține prognoza meteo pe 5 zile (folosind endpoint-ul /forecast)</li>
              <li className="text-gray-700">Opțiunea de a comuta între grade Celsius și Fahrenheit</li>
              <li className="text-gray-700">Utilizarea serviciului de localizare pentru a obține automat vremea pentru locația curentă</li>
              <li className="text-gray-700">Afișarea datelor suplimentare precum presiunea atmosferică și vizibilitatea</li>
              <li className="text-gray-700">Adăugarea unui sistem de favorite pentru a salva și accesa rapid orașele preferate</li>
              <li className="text-gray-700">Implementarea unui fundal care să se schimbe în funcție de condițiile meteo (însorit, ploios, etc.)</li>
            </ul>
          </Challenge>

          <InfoBox title="Nu uita!" variant="success">
            <p>Încarcă aplicația pe dispozitivul tău Android pentru a o testa. Verifică funcționalitatea cu diferite orașe și condiții meteo.</p>
          </InfoBox>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="appinventor"
      sessionId="4"
      title="Weather App - Aplicație Meteo"
      subtitle="Învățăm să creăm o aplicație meteo care utilizează API-uri"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/appinventor/session3"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/appinventor/session5"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session4;
