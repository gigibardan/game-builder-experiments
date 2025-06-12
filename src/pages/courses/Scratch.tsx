
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import SessionCardInDevelopment from '@/components/SessionCardInDevelopment';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Scratch = () => {
  const sessions = [
    {
      id: 1,
      title: "Jocul Alege Sănătos",
      description: "Învață să creezi un joc simplu în care trebuie să prinzi mâncăruri sănătoase și să eviți cele nesănătoase.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session1alegesanatos",
      highlights: ["Controlarea personajelor", "Detectarea coliziunilor", "Folosirea variabilelor", "Condiții de victorie"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratch-alegesanatos-preview.png",
      color: "amber"
    },
    {
      id: 2,
      title: "Jocul Space Dodge",
      description: "Creează un joc spațial în care trebuie să eviți meteoriții pentru a supraviețui cât mai mult.",
      duration: "90 minute",
      level: "Începător",
      ageGroup: "7-14 ani",
      link: "/scratch/session2spacedodge",
      highlights: ["Animarea personajelor", "Generarea de obstacole", "Sistem de scor", "Elemente de fundal"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect5preview.png",
      color: "blue"
    },
    {
      id: 3,
      title: "Jocul Moto Racer",
      description: "Învață să creezi un joc captivant în care controlezi o motocicletă, eviți obstacole și colectezi stele.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session3motoracer",
      highlights: ["Controlul cu săgeți", "Generarea de obiecte aleatorii", "Utilizarea clonelor", "Detectarea coliziunilor"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect2preview.png",
      color: "green"
    },
    {
      id: 4,
      title: "Jocul City Runner",
      description: "Creează un joc captivant în care controlezi o pisică ce aleargă prin oraș, colectând diamante și evitând bombe.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session4cityrunner",
      highlights: ["Controlul cu săgeți", "Animarea personajelor", "Sisteme de recompense și penalizări", "Elemente de decor animate"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect3preview.png",
      color: "purple"
    },
    {
      id: 5,
      title: "Beach Ball Bounce",
      description: "Învață să creezi un joc distractiv în care controlezi un colac pentru a menține o minge de plajă în aer.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session5beachballbounce",
      highlights: ["Control cu mouse", "Simularea fizicii", "Obiecte bonus și obstacole", "Gravitație și ricoșare"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect4preview.png",
      color: "cyan"
    },
    {
      id: 6,
      title: "Stitch's Beach Adventure",
      description: "Creează un joc distractiv cu Stitch, personajul tău preferat, care colectează torturi și evită bombe pe o plajă.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session6stitchbeach",
      highlights: ["Animarea personajelor", "Detecția coliziunilor", "Sisteme de punctaj complexe", "Condiții de victorie și înfrângere"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect7preview.png",
      color: "indigo"
    },
    {
      id: 7,
      title: "The Cake Quest",
      description: "Ajută personajul Roadster să traverseze o stradă aglomerată, evitând mașinile, pentru a ajunge la un tort delicios.",
      duration: "90 minute",
      level: "Începător-Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session7cakequest",
      highlights: ["Controlul personajului", "Clonarea obiectelor", "Detecția coliziunilor", "Condiții de victorie și înfrângere"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect8preview.png",
      color: "rose"
    },
    {
      id: 8,
      title: "Wizard's Quest",
      description: "Ghidează un vrăjitor broscoi prin labirint pentru a găsi bagheta magică pierdută, evitând liliecii periculoși care patrulează coridoarele.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session8wizardsquest",
      highlights: ["Detectarea coliziunilor folosind culori", "Algoritm de evitare a obstacolelor", "Mișcarea inamicilor autonomi", "Labirint interactiv"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/scratchproiect6preview.png",
      color: "purple"
    },
    {
      id: 9,
      title: "Robot Football",
      description: "Creează un joc distractiv în Scratch unde doi roboți joacă fotbal, controlând mingea și marcând goluri împotriva adversarului.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "7-14 ani",
      link: "/scratch/session9robotfootball",
      highlights: ["Joc pentru doi jucători", "Coliziuni și ricoșări", "Sistem de scor", "Animații de countdown"],
      imageSrc: "https://elearning.techminds-academy.ro/assets/images/robotfootballpreview.png",
      color: "emerald"
    },
    {
      id: 10,
      title: "Flappy Minecraft (Partea 1)",
      description: "Începe să creezi un joc captivant inspirat din Flappy Bird, dar cu elemente și personaje din universul Minecraft.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session10flappyminecraftpart1",
      highlights: ["Crearea obstacolelor", "Sistem de clonare", "Efecte de animație", "Detecția punctelor"],
      imageSrc: "/assets/images/scratch/previewminecraft.png",
      color: "amber"
    },
    {
      id: 11,
      title: "Flappy Minecraft (Partea 2)",
      description: "Finalizează jocul Flappy Minecraft adăugând personajul principal, fizica zborului, detecția coliziunilor și efecte vizuale.",
      duration: "90 minute",
      level: "Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session10flappyminecraftpart2",
      highlights: ["Fizică de zbor", "Controlul personajului", "Detecția coliziunilor", "Efecte vizuale și sonore"],
      imageSrc: "/assets/images/scratch/previewminecraft.png",
      color: "green"
    },
    {
      id: 12,
      title: "Egg Dropper",
      description: "Creează un joc captivant în care controlezi un iepuraș cu jetpack care aruncă ouă, încercând să țintească coșurile în mișcare pentru a acumula puncte.",
      duration: "120 minute",
      level: "Intermediar",
      ageGroup: "8-14 ani",
      link: "/scratch/session11eggdropper",
      highlights: ["Funcții trigonometrice", "Sistemul de lansare de ouă", "Efecte vizuale și de fum", "Detecția coliziunilor avansată"],
      imageSrc: "/assets/images/scratch/previewEggD.png",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Scratch Programming</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Învață programare vizuală cu Scratch! Creează jocuri și animații într-un mod distractiv și intuitiv.
            </p>
          </div>
        </section>

        {/* Sessions Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  number={session.id}
                  title={session.title}
                  description={session.description}
                  duration={session.duration}
                  level={session.level}
                  ageGroup={session.ageGroup}
                  highlights={session.highlights}
                  link={session.link}
                  imageSrc={session.imageSrc}
                  color={session.color}
                  isAvailable={[1, 3, 5, 7].includes(session.id)} // Only sessions 1, 3, 5, 7 are available
                />
              ))}
              
              {/* Add placeholder cards for sessions in development */}
              <SessionCardInDevelopment 
                number={13}
                title="Proiect Avansat" 
                description="Combină toate conceptele învățate într-un proiect complex."
                color="orange"
              />
              
              <SessionCardInDevelopment 
                number={14}
                title="Proiect Final" 
                description="Creează propriul tău joc unic și personalizat."
                color="orange"
              />
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ești pregătit să începi?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Începe cu prima sesiune și descoperă lumea programării vizuale!
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/scratch/session1alegesanatos" className="flex items-center">
                <span>Începe Sesiunea 1</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scratch;
