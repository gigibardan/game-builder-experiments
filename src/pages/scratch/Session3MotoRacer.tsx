
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { motion } from 'framer-motion';
import ImageModal from '@/components/ImageModal';
import LessonLayout from '@/components/LessonLayout';

const Session3MotoRacer = () => {
  const sidebarItems = [
    { id: 'introducere', title: 'Introducere', isActive: true },
    { id: 'personaje', title: 'Personaje și Decor' },
    { id: 'control', title: 'Controlul Motocicletei' },
    { id: 'obstacole', title: 'Obstacole' },
    { id: 'puncte', title: 'Sistem de Punctaj' },
    { id: 'conditii', title: 'Condiții de Joc' },
  ];

  const resources = [
    { title: 'Documentație Scratch', url: 'https://scratch.mit.edu/ideas' },
    { title: 'Comunitatea Scratch', url: 'https://scratch.mit.edu/explore/projects/all' },
    { title: 'Tutorial video', url: 'https://scratch.mit.edu/studios/1809250/' },
  ];

  const sections = [
    {
      id: 'introducere',
      title: 'Introducere în Jocul Moto Racer',
      content: (
        <>
          <p className="mb-6">
            În această lecție vei învăța să creezi un joc captivant în care controlezi o motocicletă, 
            eviți obstacole și colectezi stele pentru a acumula puncte. Vei învăța concepte importante 
            de programare, cum ar fi: detectarea coliziunilor, generarea de obiecte aleatorii și condiții de joc.
          </p>

          <div className="mb-8">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2preview.png" 
              alt="Jocul Moto Racer"
              caption="Previzualizare Jocul Moto Racer - Click pentru a mări"
              className="w-full"
            />
          </div>

          <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-amber-400">
            <h3 className="text-lg font-bold mb-2 text-amber-700">Ce vei învăța</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Cum să controlezi o motocicletă folosind tastele săgeți</li>
              <li>Cum să generezi obstacole aleatorii</li>
              <li>Cum să detectezi coliziunile între personaje</li>
              <li>Cum să implementezi un sistem de punctaj</li>
              <li>Cum să creezi condiții de victorie și înfrângere</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'personaje',
      title: 'Personaje și Decor',
      content: (
        <>
          <p className="mb-4">
            Pentru acest joc, vom avea nevoie de următoarele personaje și elemente de decor:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2personaje.png" 
              alt="Personajele din joc"
              caption="Personajele din jocul Moto Racer - Click pentru a mări"
              className="w-full"
            />
          </div>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>O motocicletă - personajul principal controlat de jucător</li>
            <li>Pietre - obstacole pe care trebuie să le eviți</li>
            <li>Stele - elemente de colectat pentru a acumula puncte</li>
          </ul>

          <p className="mb-4">
            De asemenea, vom configura un fundal potrivit pentru jocul nostru:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2decor.png" 
              alt="Fundalul jocului"
              caption="Fundalul pentru jocul Moto Racer - Click pentru a mări"
              className="w-full"
            />
          </div>
        </>
      )
    },
    {
      id: 'control',
      title: 'Controlul Motocicletei',
      content: (
        <>
          <p className="mb-4">
            Vom programa motocicleta pentru a putea fi controlată folosind tastele săgeți sus și jos. 
            Motocicleta se va putea mișca doar în sus și în jos, deoarece jocul se derulează automat 
            de la stânga la dreapta.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2moto.png" 
              alt="Codul pentru controlul motocicletei"
              caption="Codul pentru controlul motocicletei - Click pentru a mări"
              className="w-full"
            />
          </div>

          <p className="mb-4">
            Observă în codul de mai sus:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Poziționarea inițială a motocicletei</li>
            <li>Folosirea evenimentului "când se apasă tasta săgeată în sus/jos"</li>
            <li>Limitarea mișcării pentru a nu ieși din ecran</li>
          </ul>
        </>
      )
    },
    {
      id: 'obstacole',
      title: 'Crearea Obstacolelor',
      content: (
        <>
          <p className="mb-4">
            Obstacolele (pietrele) vor apărea din partea dreaptă a ecranului și se vor deplasa către stânga. 
            Vom folosi clone pentru a genera mai multe obstacole.
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2rocks.png" 
              alt="Codul pentru generarea obstacolelor"
              caption="Codul pentru generarea pietrelor - Click pentru a mări"
              className="w-full"
            />
          </div>

          <p className="mb-4">
            De asemenea, vom crea stele care vor apărea aleator și vor oferi puncte jucătorului când sunt colectate:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2stars.png" 
              alt="Codul pentru generarea stelelor"
              caption="Codul pentru generarea stelelor - Click pentru a mări"
              className="w-full"
            />
          </div>
        </>
      )
    },
    {
      id: 'puncte',
      title: 'Sistem de Punctaj',
      content: (
        <>
          <p className="mb-4">
            Vom implementa un sistem de punctaj care va crește cu 10 puncte de fiecare dată când 
            jucătorul colectează o stea. Vom crea o variabilă numită "Scor" pentru a ține evidența punctelor.
          </p>

          <p className="mb-4">
            În codul pentru stele, vom adăuga detecția coliziunii cu motocicleta și creșterea scorului:
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold mb-2 text-amber-700">Sfat important</h3>
            <p className="text-gray-700">
              Pentru a face jocul mai interesant, poți face ca viteza obstacolelor să crească treptat 
              pe măsură ce jocul avansează sau scorul crește. Acest lucru va crește dificultatea jocului 
              și va păstra interesul jucătorului.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'conditii',
      title: 'Condiții de Joc',
      content: (
        <>
          <p className="mb-4">
            Vom adăuga condiții de victorie și înfrângere pentru jocul nostru:
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-amber-700">Condiții de înfrângere</h3>
          <p className="mb-4">
            Jocul se termină când motocicleta lovește o piatră:
          </p>

          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2lost.png" 
              alt="Codul pentru condiția de înfrângere"
              caption="Codul pentru condiția de înfrângere - Click pentru a mări"
              className="w-full"
            />
          </div>

          <h3 className="text-xl font-bold mb-3 text-amber-700">Condiții de victorie</h3>
          <p className="mb-4">
            Jocul este câștigat când jucătorul atinge un anumit scor (de exemplu, 100 de puncte):
          </p>
          
          <div className="mb-6">
            <ImageModal 
              src="https://elearning.techminds-academy.ro/assets/images/scratchproiect2win.png" 
              alt="Codul pentru condiția de victorie"
              caption="Codul pentru condiția de victorie - Click pentru a mări"
              className="w-full"
            />
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-400">
            <h3 className="text-lg font-bold mb-2 text-green-700">Provocare</h3>
            <p className="text-gray-700">
              Încearcă să adaugi efecte sonore la jocul tău! De exemplu, un sunet când colectezi o stea, 
              un sunet când lovești o piatră, și un sunet de fundal pentru întregul joc. Acest lucru va face 
              experiența jucătorului mult mai imersivă!
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonLayout
      courseId="scratch"
      sessionId="3"
      title="Jocul Moto Racer"
      subtitle="Creează un joc captivant cu motociclete, obstacole și puncte"
      heroColor="bg-gradient-to-r from-green-500 to-emerald-600"
      previousLesson={{
        title: "Lecția anterioară",
        path: "/scratch/session2spacedodge"
      }}
      nextLesson={{
        title: "Lecția următoare",
        path: "/scratch/session4cityrunner"
      }}
      sidebarItems={sidebarItems}
      resources={resources}
      sections={sections}
    />
  );
};

export default Session3MotoRacer;
