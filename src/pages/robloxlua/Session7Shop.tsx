import React from 'react';
import LessonLayout from '@/components/LessonLayout';
import { InfoBox, StepItem, Challenge, LearningOutcome } from '@/components/LessonComponents';
import { CodeExample } from '@/components/CodeExample';
import ImageModal from '@/components/ImageModal';

const RobloxLesson7 = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'interfata', title: 'Interfața' },
    { id: 'scripts', title: 'Scripts' },
    { id: 'iteme', title: 'Iteme din Shop' },
    { id: 'structura', title: 'Structura obiectelor' },
    { id: 'provocari', title: 'Provocări' },
    { id: 'concluzii', title: 'Concluzii' },
  ];

  const resources = [
    { title: 'Documentație Roblox Studio', url: 'https://developer.roblox.com/en-us/' },
    { title: 'Tutorial video Roblox Shop', url: 'https://www.youtube.com/results?search_query=roblox+shop+tutorial' },
    { title: 'Comunitate Roblox DevForum', url: 'https://devforum.roblox.com/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere',
      content: (
        <>
          <p className="mb-4">
            Lecția aceasta presupune crearea unui <span className="highlight">SHOP</span>, prin care poți cumpăra elementele expuse în SHOP plătind bani virtuali. O dată cumpărat un item din shop, acesta ajunge în inventarul utilizatorului și îi scade bani în funcție de preț.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.1.png" 
            alt="Introducere Shop Roblox" 
            caption="Exemplu de interfață pentru magazinul din Roblox Studio"
          />
          <LearningOutcome items={[
            "Cum să creezi o interfață de shop în Roblox Studio",
            "Cum să implementezi un sistem de cumpărare cu bani virtuali",
            "Cum să organizezi itemele în ReplicatedStorage",
            "Cum să configurezi scripturi pentru gestionarea tranzacțiilor"
          ]} />
        </>
      )
    },
    {
      id: 'interfata',
      title: 'Interfața',
      content: (
        <>
          <p className="mb-4">
            Pentru a crea interfața magazinului deschidem Explorer-ul, apoi în StarterGUI adăugăm ScreenGUI, iar în acesta adăugăm un Frame pe care îl mărim și îl centrăm.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.2.png" 
            alt="Configurare ScreenGUI" 
            caption="Adăugarea și centrarea Frame-ului în ScreenGUI"
          />
          <p className="mb-4">
            Redenumim ScreenGUI-ul în Shop, iar din Properties, schimbăm culoarea Frame-ului.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.3.png" 
            alt="Culoare Frame" 
            caption="Schimbarea culorii Frame-ului în Properties"
          />
          <p className="mb-4">
            În frame adăugăm un TextLabel și în Properties facem următoarele modificări:
          </p>
          <div className="properties">
            <ul className="list-disc list-inside">
              <li>BackgroundTransparency = 1</li>
              <li>TextScaled = True</li>
              <li>Text = Shop</li>
              <li>Redenumiți TextLabel-ul în Title.</li>
              <li>Extra: Puteți modifica font-ul și culoarea textului.</li>
            </ul>
          </div>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.4.png" 
            alt="TextLabel Shop" 
            caption="Configurarea TextLabel-ului pentru titlul Shop"
          />
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.5.png" 
            alt="TextLabel Shop" 
            caption="Aspectul final al TextLabel-ului"
          />
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.6.png" 
            alt="TextLabel Shop" 
            caption="TextLabel poziționat în Frame"
          />
          <p className="mb-4">
            <strong>De asemenea, în Frame adăugăm un TextButton care va fi Butonul de ieșire din Shop. Colorăm Background-ul roșu, edităm Textul în X, TextScaled = True și îl redenumim în Close.</strong>
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.7.png" 
            alt="Buton Close" 
            caption="Configurarea butonului de ieșire (Close)"
          />
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.8.png" 
            alt="Buton Close Aspect" 
            caption="Aspectul butonului Close"
          />
          <p className="mb-4">
            Mai departe, vom adăuga un Button care deschide Shop-ul. În ScreenGUI-ul SHOP adăugăm un TextButton.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.9.png" 
            alt="Buton Open" 
            caption="Adăugarea butonului Open în ScreenGUI"
          />
          <p className="mb-4">
            De asemenea, îl vom poziționa în stânga Shop-ului și vom face următoarele modificări în Properties.
          </p>
          <div className="properties">
            <ul className="list-disc list-inside">
              <li>Colorăm butonul, modificând BackgroundColor în culoare pe care ne-o dorim.</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.10.png" 
                alt="Culoare Buton Open" 
                caption="Modificarea culorii butonului Open"
              />
              <li>Modificăm text-ul în Shop</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.11.png" 
                alt="Text Buton Open" 
                caption="Setarea textului butonului Open"
              />
              <li>Setăm TextScaled la True.</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.12.png" 
                alt="TextScaled Open" 
                caption="Activarea TextScaled pentru butonul Open"
              />
              <li>Redenumim TextButton-ul în Open</li>
            </ul>
          </div>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.13.png" 
            alt="Buton Open Final" 
            caption="Aspectul final al butonului Open"
          />
          <p className="mb-4">
            În acest TextButton redenumit Open adăugăm un LocalScript care va avea ca scop deschiderea Shop-ului atunci când butonul este apăsat.
          </p>
          <CodeExample title="LocalScript pentru deschiderea Shop-ului" language="lua">
            script.Parent.MouseButton1Down:Connect(function()
                script.Parent.Parent.Frame.Visible = true
            end)
          </CodeExample>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.14.png" 
            alt="LocalScript Open" 
            caption="Adăugarea LocalScript-ului pentru butonul Open"
          />
          <p className="mb-4">
            Pentru a testa funcționalitatea butonului de Shop ne asigurăm că proprietatea Visible este False (adică debifată).
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.15.png" 
            alt="Proprietate Visible" 
            caption="Setarea proprietății Visible la False"
          />
          <p className="mb-4">
            Pentru a face butonul de ieșire din Shop să funcționeze adăugăm un LocalScript în butonul Close și scriem script-ul următor.
          </p>
          <CodeExample title="LocalScript pentru închiderea Shop-ului" language="lua">
            script.Parent.MouseButton1Down:Connect(function()
                script.Parent.Parent.Visible = false
            end)
          </CodeExample>
          <InfoBox title="Notă" icon="info" variant="warning">
            <p>Testați funcționalitățile implementate.</p>
          </InfoBox>
        </>
      )
    },
    {
      id: 'scripts',
      title: 'Scripts',
      content: (
        <>
          <p className="mb-4">
            În ServerScriptService adăugăm un Script care adaugă bani utilizatorului în Leaderboard. Redenumim Scriptul în Leaderstats.
          </p>
          <CodeExample title="Script pentru Leaderboard" language="lua">
            game.Players.PlayerAdded:Connect(function(player)
                local leaderstats = Instance.new("Folder", player)
                leaderstats.Name = "leaderstats"
                
                local money = Instance.new("IntValue", leaderstats)
                money.Name = "Money"
                money.Value = 1000
            end)
          </CodeExample>
          <InfoBox title="Explicație" icon="info" variant="success">
            <p>La conectarea fiecărui jucător în joc, scriptul:</p>
            <ul className="list-disc list-inside">
              <li>Creează sub acel jucător un folder numit <strong>leaderstats</strong>.</li>
              <li>Adaugă în acel folder o valoare întreagă (<strong>IntValue</strong>) numită <strong>Money</strong> cu valoarea inițială <strong>1000</strong>, astfel încât banii să apară în leaderboard.</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      id: 'iteme',
      title: 'Iteme din Shop',
      content: (
        <>
          <p className="mb-4">
            Deschidem Toolbox-ul și adăugăm 3 iteme, în cazul de față trei săbii. Nu toate itemele sunt eligibile așa încât recomandăm să alegeți din ToolBox itemele următoare:
          </p>
          <div className="steps">
            <ul className="list-disc list-inside">
              <li>Azure</li>
              <li>Dragon Fire Sword</li>
              <li>SwordOfLight</li>
            </ul>
          </div>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.16.png" 
            alt="Adăugare Iteme" 
            caption="Adăugarea itemelor din Toolbox"
          />
          <p className="mb-4">
            Selectăm cele 3 săbii (din explorer) prin Ctrl + Click Stanga și le "tăiem". În ReplicatedStorage creem un Folder pe care îl denumim "Items" și în acest folder lipim cele 3 iteme.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.17.png" 
            alt="Folder Items" 
            caption="Crearea folderului Items în ReplicatedStorage"
          />
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.18.png" 
            alt="Lipire Iteme" 
            caption="Lipirea itemelor în folderul Items"
          />
          <p className="mb-4">
            Mai departe vom continua cu design-ul Shop-ului, vom adăuga trei Frame-uri pentru cele trei Iteme. În Frame-ul principal adăugăm un Frame pe care îl vom poziționa pe Frame-ul Shopului.
          </p>
          <InfoBox title="Notă" icon="info" variant="warning">
            <p>Setează Frame-ul Shop-ului Visibile pentru a putea așeza Frame-urile itemelor.</p>
          </InfoBox>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.19.png" 
            alt="Frame Item" 
            caption="Adăugarea unui Frame pentru un item"
          />
          <p className="mb-4">
            Poziționăm și redimensionăm Frame-ul, așa încât să incapă trei pe un rând.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.20.png" 
            alt="Poziționare Frame" 
            caption="Poziționarea și redimensionarea Frame-ului"
          />
          <p className="mb-4">
            În cel de-al doilea Frame adăugăm un TextButton pe care îl redenumim Buy. De asemenea, vom schimba Textul butonului în BUY și vom bifa TextScaled.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.21.png" 
            alt="Buton Buy" 
            caption="Configurarea butonului Buy"
          />
          <p className="mb-4">
            În Frame-ul secundar (acolo unde este butonul de Buy), adăugăm un TextLabel pe care îl redenumim Price. Acest label va fi prețul item-ului. Modificăm Text-ul în 1500$. În același Frame adăugăm un ImageLabel, care va fi imaginea item-ului din shop. În imagine mai adăugăm un UIAspectRatioConstraint care fixează raportul lăţime/înălţime al ImageLabel-ului, astfel încât:
          </p>
          <div className="steps">
            <ul className="list-disc list-inside">
              <li>Proprietatea <strong>AspectRatio</strong> (ex. 1.5) defineşte raportul lăţime÷înălţime pe care îl vrei.</li>
              <li><strong>DominantAxis</strong> (Width, Height sau Lesser/Greater) stabileşte care dimensiune se ajustează automat ca să păstreze raportul.</li>
            </ul>
          </div>
          <p className="mb-4">
            Rezultat: imaginea nu se mai întinde sau comprimă, ci îşi păstrează forma corectă indiferent de redimensionarea containerului.
          </p>
          <p className="mb-4">
            Pentru a pune o imagine sugestivă a Item-ului, vom copia TextureId-ul corespunzător din <strong>ReplicatedStorage-&gt;Items-&gt;Azure</strong> (respectiv celelalte item-uri) și îl lipim în <strong>TextureId</strong> din <strong>ImageLabel.</strong>
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.22.png" 
            alt="TextureId Item" 
            caption="Copierea TextureId-ului pentru ImageLabel"
          />
          <p className="mb-4">
            În final, redenumim Frame-ul în numele item-ului din care am copiat imaginea.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.23.png" 
            alt="Redenumire Frame" 
            caption="Redenumirea Frame-ului după item"
          />
          <p className="mb-4">
            Fiindcă avem trei iteme, vom copia modelul primului pentru celelalte două astfel:
          </p>
          <div className="steps">
            <ul className="list-disc list-inside">
              <li>Selectăm Frame-ul și îl dublicăm</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.24.png" 
                alt="Duplicare Frame" 
                caption="Duplicarea Frame-ului pentru alte iteme"
              />
              <li>Selectăm Frame-ul, TextLabel-ul, ImageLabel-ul și Price-ul prin Ctrl + MouseLeft</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.25.png" 
                alt="Selecție Multiplă" 
                caption="Selectarea componentelor Frame-ului"
              />
              <li>Tragem cel de al doilea Frame la mijloc</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.26.png" 
                alt="Poziționare Frame Mijloc" 
                caption="Poziționarea celui de-al doilea Frame"
              />
              <li>Îl redenumim după numele celui de al doilea/treilea item.</li>
              <li>Modificăm prețul</li>
              <ImageModal 
                src="/assets/images/roblox/RobloxL8.27.png" 
                alt="Modificare Preț" 
                caption="Modificarea prețului pentru al doilea item"
              />
            </ul>
          </div>
          <p className="mb-4">
            Acum, pentru a putea cumpăra din Shop, vom automatiza, în primă instanță prețurile. Așa că în <strong>ReplicatedStorage</strong> adăugăm un <strong>ModuleScript</strong> pe care îl numim Prices.
          </p>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.28.png" 
            alt="ModuleScript Prices" 
            caption="Adăugarea ModuleScript-ului Prices"
          />
          <InfoBox title="Notă" icon="info" variant="warning">
            <p>Asigurați-vă ca datele din acest script corespund cu prețurile afișate pe Frame. Pentru a se testa toate itemele am pus prețuri mici astfel încât suma să se încadreze până în 1000$, suma alocată inițial.</p>
          </InfoBox>
          <p className="mb-4">
            În Shop din StarterGUI adăugăm un LocalScript:
          </p>
          <CodeExample title="LocalScript pentru gestionarea Shop-ului" language="lua">
            local ItemPrices = require(game.ReplicatedStorage.Prices)
            local RE = game.ReplicatedStorage:WaitForChild("BuyItem")

            RE.OnClientEvent:Connect(function(value)
                if value == "Open" then
                    script.Parent.Enabled = true
                elseif value == "Close" then
                    script.Parent.Enabled = false
                end
            end)
            local closeBtn = script.Parent.Frame:WaitForChild("Close")

            closeBtn.MouseButton1Click:Connect(function()
                script.Parent.Enabled = false
            end)

            -- Buy Button
            local buyItemRE = game.ReplicatedStorage:WaitForChild("BuyItem")

            local function onBuyButtonClicked(itemName)
                local price = ItemPrices[itemName]

                if price then
                    buyItemRE:FireServer(itemName, price)
                    print("player bought item")
                else
                    warn("Item does not exist in the price list.")
                end
            end

            for _, itemFrame in pairs(script.Parent.Frame:GetChildren()) do
                if itemFrame:IsA("Frame") then
                    local buyButton = itemFrame:FindFirstChild("Buy")
                    if buyButton and buyButton:IsA("TextButton") then
                        buyButton.MouseButton1Click:Connect(function()
                            onBuyButtonClicked(itemFrame.Name)
                        end)
                    end
                end
            end
          </CodeExample>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.29.png" 
            alt="LocalScript Shop" 
            caption="Adăugarea LocalScript-ului în Shop"
          />
          <InfoBox title="Explicație" icon="info" variant="success">
            <ol className="list-decimal list-inside">
              <li>Importă lista de preţuri din ReplicatedStorage.Prices.</li>
              <li>Ascultă evenimentul client BuyItem pentru a deschide/închide GUI-ul (script.Parent.Enabled = true/false).</li>
              <li>Configurează butonul „Close” ca la click să închidă fereastra (Enabled = false).</li>
              <li>
                Funcţia de cumpărare (onBuyButtonClicked):
                <ul className="list-disc list-inside ml-4">
                  <li>Primește itemName, îi ia preţul din ItemPrices.</li>
                  <li>Dacă există, trimite la server cu FireServer(itemName, price) și loghează achiziția.</li>
                  <li>Dacă nu există, afișează un avertisment.</li>
                </ul>
              </li>
              <li>Leagă fiecare buton „Buy” din cadrul GUI-ului de funcţia de cumpărare, folosind numele Frame-ului ca itemName.</li>
            </ol>
            <p>Astfel, oricând serverul emite "Open"/"Close", GUI-ul apare/dispare, iar click pe „Buy” trimite cererea de cumpărare cu preţul corect.</p>
          </InfoBox>
          <p className="mb-4">
            De asemenea, în <strong>ReplicatedStorage</strong> adăugăm un <strong>RemoteEvent</strong> pe care îl denumim <strong>BuyItem</strong>.
          </p>
          <p className="mb-4">
            În ServerScriptService adăugăm un Script pe care îl redenumim BuyingHandler căruia îi atașăm scriptul:
          </p>
          <CodeExample title="Script BuyingHandler" language="lua">
            local ReplicatedStorage = game:GetService("ReplicatedStorage")
            local buyRE = ReplicatedStorage:FindFirstChild("BuyItem")
            local ItemsFolder = ReplicatedStorage:FindFirstChild("Items")

            local function onBuyItem(player, itemName, price)
                local item = ItemsFolder:FindFirstChild(itemName)
                local Money = player.leaderstats.Money

                if item and Money.Value &gt;= price then
                    Money.Value = Money.Value - price

                    local itemClone = item:Clone()
                    itemClone.Parent = player.Backpack

                    print(player.Name .. " purchased " .. itemName)
                end
            end

            buyRE.OnServerEvent:Connect(function(player, itemName, price)
                onBuyItem(player, itemName, price)
            end)
          </CodeExample>
          <InfoBox title="Explicație" icon="info" variant="success">
            <p>Pe server, scriptul <strong>BuyingHandler</strong> ascultă evenimentul <code>BuyItem</code> şi, la fiecare cerere de cumpărare:</p>
            <ol className="list-decimal list-inside">
              <li>Primește jucătorul, <code>itemName</code> și <code>price</code>.</li>
              <li>Caută obiectul în <code>ReplicatedStorage.Items</code>.</li>
              <li>Verifică dacă <code>player.leaderstats.Money.Value</code> este suficient.</li>
              <li>Dacă da:
                <ul className="list-disc list-inside ml-4">
                  <li>Scade <code>Money.Value</code> cu <code>price</code>.</li>
                  <li>Clonează obiectul și îl adaugă în <code>player.Backpack</code>.</li>
                  <li>Afișează în consolă: <code>player.Name purchased itemName</code>.</li>
                </ul>
              </li>
              <li>Dacă nu există obiectul sau fonduri insuficiente, nu se întâmplă nimic.</li>
            </ol>
          </InfoBox>
          <ImageModal 
            src="/assets/images/roblox/RobloxL8.30.png" 
            alt="BuyingHandler Script" 
            caption="Adăugarea scriptului BuyingHandler în ServerScriptService"
          />
        </>
      )
    },
    {
      id: 'structura',
      title: 'Structura obiectelor în Explorer',
      content: (
        <>
          <div className="structure">
            <ul className="list-disc list-inside">
              <li><strong>StarterGui</strong> &gt; Shop (ScreenGui)
                <ul className="list-disc list-inside ml-4">
                  <li>└── Frame (conține itemele, Close și Title)
                    <ul className="list-disc list-inside ml-4">
                      <li>└── SwordOfLight, Dragon Fire Sword, etc. (Frame per item)
                        <ul className="list-disc list-inside ml-4">
                          <li>├── ImageLabel (cu imaginea itemului)</li>
                          <li>├── Price (TextLabel)</li>
                          <li>└── Buy (TextButton)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>ReplicatedStorage</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>├── BuyItem (RemoteEvent)</li>
                  <li>├── Prices (ModuleScript)</li>
                  <li>└── Items (Folder cu Tool-uri)</li>
                </ul>
              </li>
              <li><strong>ServerScriptService</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>├── Leaderstats (Script pentru bani)</li>
                  <li>└── BuyingHandler (Script server pentru cumpărare)</li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'provocari',
      title: 'Provocări',
      content: (
        <>
          <p className="mb-4">
            Încercați aceste provocări pentru a vă testa cunoștințele:
          </p>
          <Challenge title="Provocare 1: Adăugare Item Nou" difficulty="easy">
            <p>Adaugă un al patrulea item în shop, urmând aceiași pași ca pentru cele trei iteme existente.</p>
          </Challenge>
          <Challenge title="Provocare 2: Modificare Preț Dinamic" difficulty="medium">
            <p>Modifică scriptul astfel încât prețurile să se actualizeze dinamic în funcție de un anumit factor (ex. nivel de dificultate al jocului).</p>
          </Challenge>
          <Challenge title="Provocare 3: Adăugare Efecte Vizuale" difficulty="hard">
            <p>Adaugă efecte vizuale (ex. particule sau animații) atunci când un item este cumpărat.</p>
          </Challenge>
        </>
      )
    },
    {
      id: 'concluzii',
      title: 'Concluzii',
      content: (
        <>
          <p className="mb-4">
            În această lecție am învățat cum să creăm un sistem de shop funcțional în Roblox Studio, inclusiv interfața grafică, gestionarea banilor virtuali și procesul de cumpărare a itemelor.
          </p>
          <InfoBox title="Ce ai învățat" icon="success" variant="success">
            <ul className="list-disc list-inside space-y-1">
              <li>Cum să configurezi o interfață de shop cu ScreenGUI și Frame-uri</li>
              <li>Cum să implementezi scripturi pentru deschiderea și închiderea shop-ului</li>
              <li>Cum să gestionezi banii virtuali prin Leaderstats</li>
              <li>Cum să configurezi un sistem de cumpărare cu RemoteEvent</li>
            </ul>
          </InfoBox>
          <div className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-course-purple">
            <h3 className="text-lg font-semibold mb-2">Pregătire pentru lecția următoare</h3>
            <p>În lecția următoare vom explora metode avansate de personalizare a shop-ului și integrarea acestuia cu alte sisteme din joc.</p>
          </div>
        </>
      )
    },
  ];

  return (
    <LessonLayout
      courseId="roblox"
      sessionId="8"
      title="Curs Roblox Studio"
      subtitle="Tutorial Shop cu Sistem de Cumpărare"
      heroColor="bg-gradient-to-r from-course-purple to-course-blue"
      previousLesson={{
        title: "Lecția Anterioară",
        path: "/robloxlua/session6createanimations"
      }}
      nextLesson={{
        title: "Lecția Următoare",
        path: "../roblox/roblox-l7"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default RobloxLesson7;