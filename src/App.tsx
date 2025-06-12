
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from '@/components/ProtectedRoute';

// Import pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Courses from '@/pages/Courses';
import NotFound from '@/pages/NotFound';

// Auth pages
import AuthPage from '@/pages/auth/AuthPage';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import Unauthorized from '@/pages/auth/Unauthorized';

// Admin pages
import Dashboard from '@/pages/admin/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import ProjectStructure from '@/pages/admin/ProjectStructure';

// Student pages
import StudentDashboard from '@/pages/student/StudentDashboard';

// Course pages
import Scratch from '@/pages/courses/Scratch';
import AppInventor from '@/pages/courses/AppInventor';
import Construct3 from '@/pages/courses/Construct3';
import GDevelop from '@/pages/courses/GDevelop';
import Alice3 from '@/pages/courses/Alice3';
import MicrobitArcade from '@/pages/courses/MicrobitArcade';
import MinecraftModding from '@/pages/courses/MinecraftModding';
import RobloxLua from '@/pages/courses/RobloxLua';
import Python from '@/pages/courses/Python';
import Greenfoot from '@/pages/courses/Greenfoot';
import Godot from '@/pages/courses/Godot';
import FrontendDev from '@/pages/courses/FrontendDev';
import LegoSpikeEssentials from '@/pages/courses/LegoSpikeEssentials';
import LegoSpikePrime from '@/pages/courses/LegoSpikePrime';
import MicrobitExplorers from '@/pages/courses/MicrobitExplorers';

// Session pages - Scratch
import Session1Alegesanatos from '@/pages/scratch/Session1Alegesanatos';
import Session2SpaceDodge from '@/pages/scratch/Session2SpaceDodge';
import Session3MotoRacer from '@/pages/scratch/Session3MotoRacer';
import Session4CityRunner from '@/pages/scratch/Session4CityRunner';
import Session5BeachBallBounce from '@/pages/scratch/Session5BeachBallBounce';
import Session6StitchBeach from '@/pages/scratch/Session6StitchBeach';
import Session7cakequest from '@/pages/scratch/Session7cakequest';
import Session8WizardsQuest from '@/pages/scratch/Session8WizardsQuest';
import Session9RobotFootball from '@/pages/scratch/Session9RobotFootball';
import Session10FlappyMinecraftPart1 from '@/pages/scratch/Session10FlappyMinecraftPart1';
import Session10FlappyMinecraftPart2 from '@/pages/scratch/Session10FlappyMinecraftPart2';
import Session11EggDropper from '@/pages/scratch/Session11EggDropper';

// Session pages - AppInventor
import AppInventorSession1 from '@/pages/appinventor/Session1';
import AppInventorSession2 from '@/pages/appinventor/Session2';
import AppInventorSession3 from '@/pages/appinventor/Session3';
import AppInventorSession4 from '@/pages/appinventor/Session4';
import AppInventorSession5 from '@/pages/appinventor/Session5';
import AppInventorSession6 from '@/pages/appinventor/Session6';
import AppInventorSession7 from '@/pages/appinventor/Session7';
import AppInventorSession8 from '@/pages/appinventor/Session8';
import AppInventorSession9 from '@/pages/appinventor/Session9';

// Session pages - Alice3
import Alice3Session1 from '@/pages/alice3/Session1';
import Alice3Session1Adventure from '@/pages/alice3/Session1Adventure';
import Alice3Session2SpaceGame from '@/pages/alice3/Session2SpaceGame';
import Alice3Session3VirtualPet from '@/pages/alice3/Session3VirtualPet';
import Alice3Session4Geometry from '@/pages/alice3/Session4Geometry';

// Session pages - Minecraft Modding
import MinecraftSession1 from '@/pages/minecraftmodding/Session1';
import MinecraftCrystalRealm from '@/pages/minecraftmodding/CrystalRealm';
import MinecraftRubyArmor from '@/pages/minecraftmodding/RubyArmor';

// Session pages - Roblox
import RobloxSession1 from '@/pages/robloxlua/Session1';
import RobloxSession1Introducere from '@/pages/robloxlua/Session1Introducere';
import RobloxSession2QuizGame from '@/pages/robloxlua/Session2QuizGame';
import RobloxSession3ConstructiiScripturiIncepatori from '@/pages/robloxlua/Session3ConstructiiScripturiIncepatori';
import RobloxSession4Obby from '@/pages/robloxlua/Session4Obby';
import RobloxSession5NPCCreator from '@/pages/robloxlua/Session5NPCCreator';
import RobloxSession6CreateAnimations from '@/pages/robloxlua/Session6CreateAnimations';
import RobloxSession7Shop from '@/pages/robloxlua/Session7Shop';

// Session pages - Python
import PythonSession1 from '@/pages/python/Session1';

// Session pages - Greenfoot
import GreenfootSession1 from '@/pages/greenfoot/Session1';
import GreenfootSession2 from '@/pages/greenfoot/Session2';
import GreenfootSession3 from '@/pages/greenfoot/Session3';

// Session pages - Godot
import GodotSession1 from '@/pages/godot/Session1';
import GodotSession2 from '@/pages/godot/Session2';
import GodotSession3 from '@/pages/godot/Session3';
import GodotSession4 from '@/pages/godot/Session4';
import GodotSession5 from '@/pages/godot/Session5';
import GodotSimpleGame from '@/pages/godot/SimpleGame';

// Session pages - GDevelop
import GDevelopSession1 from '@/pages/gdevelop/Session1';

// Session pages - Construct3
import Construct3Session1 from '@/pages/construct3/Session1';

// Session pages - Frontend Dev
import FrontendDevSession1 from '@/pages/frontenddev/Session1';

// Session pages - micro:bit Arcade
import MicrobitArcadeSession1 from '@/pages/microbitarcade/Session1';

// Session pages - LEGO SPIKE Essentials
import LegoEssentialsSession1ClassicCarousel from '@/pages/legoessentials/Session1ClassicCarousel';
import LegoEssentialsSession2FerrisWheel from '@/pages/legoessentials/Session2FerrisWheel';
import LegoEssentialsSession3CableCar from '@/pages/legoessentials/Session3CableCar';
import LegoEssentialsSession4TwirlingTeacups from '@/pages/legoessentials/Session4TwirlingTeacups';
import LegoEssentialsSession5SnackStand from '@/pages/legoessentials/Session5SnackStand';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  // Admin routes
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute requiredRole="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedRoute requiredRole="admin">
        <UserManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/structure",
    element: (
      <ProtectedRoute requiredRole="admin">
        <ProjectStructure />
      </ProtectedRoute>
    ),
  },
  // Student routes
  {
    path: "/student/dashboard",
    element: (
      <ProtectedRoute>
        <StudentDashboard />
      </ProtectedRoute>
    ),
  },
  // Course pages - Updated to match CourseCard links
  {
    path: "/courses/scratch",
    element: <Scratch />,
  },
  {
    path: "/courses/appinventor",
    element: <AppInventor />,
  },
  {
    path: "/courses/construct3",
    element: <Construct3 />,
  },
  {
    path: "/courses/gdevelop",
    element: <GDevelop />,
  },
  {
    path: "/courses/alice3",
    element: <Alice3 />,
  },
  {
    path: "/courses/microbit-arcade",
    element: <MicrobitArcade />,
  },
  {
    path: "/courses/minecraft-modding",
    element: <MinecraftModding />,
  },
  {
    path: "/courses/roblox-lua",
    element: <RobloxLua />,
  },
  {
    path: "/courses/python",
    element: <Python />,
  },
  {
    path: "/courses/greenfoot",
    element: <Greenfoot />,
  },
  {
    path: "/courses/godot",
    element: <Godot />,
  },
  {
    path: "/courses/frontend-dev",
    element: <FrontendDev />,
  },
  {
    path: "/courses/lego-spike-essentials",
    element: <LegoSpikeEssentials />,
  },
  {
    path: "/courses/lego-spike-prime",
    element: <LegoSpikePrime />,
  },
  {
    path: "/courses/microbit-explorers",
    element: <MicrobitExplorers />,
  },
  // Scratch sessions
  {
    path: "/scratch/session1alegesanatos",
    element: <Session1Alegesanatos />,
  },
  {
    path: "/scratch/session2spacedodge",
    element: <Session2SpaceDodge />,
  },
  {
    path: "/scratch/session3motoracer",
    element: <Session3MotoRacer />,
  },
  {
    path: "/scratch/session4cityrunner",
    element: <Session4CityRunner />,
  },
  {
    path: "/scratch/session5beachballbounce",
    element: <Session5BeachBallBounce />,
  },
  {
    path: "/scratch/session6stitchbeach",
    element: <Session6StitchBeach />,
  },
  {
    path: "/scratch/session7cakequest",
    element: <Session7cakequest />,
  },
  {
    path: "/scratch/session8wizardsquest",
    element: <Session8WizardsQuest />,
  },
  {
    path: "/scratch/session9robotfootball",
    element: <Session9RobotFootball />,
  },
  {
    path: "/scratch/session10flappyminecraftpart1",
    element: <Session10FlappyMinecraftPart1 />,
  },
  {
    path: "/scratch/session10flappyminecraftpart2",
    element: <Session10FlappyMinecraftPart2 />,
  },
  {
    path: "/scratch/session11eggdropper",
    element: <Session11EggDropper />,
  },
  // AppInventor sessions
  {
    path: "/appinventor/session1",
    element: <AppInventorSession1 />,
  },
  {
    path: "/appinventor/session2",
    element: <AppInventorSession2 />,
  },
  {
    path: "/appinventor/session3",
    element: <AppInventorSession3 />,
  },
  {
    path: "/appinventor/session4",
    element: <AppInventorSession4 />,
  },
  {
    path: "/appinventor/session5",
    element: <AppInventorSession5 />,
  },
  {
    path: "/appinventor/session6",
    element: <AppInventorSession6 />,
  },
  {
    path: "/appinventor/session7",
    element: <AppInventorSession7 />,
  },
  {
    path: "/appinventor/session8",
    element: <AppInventorSession8 />,
  },
  {
    path: "/appinventor/session9",
    element: <AppInventorSession9 />,
  },
  // Alice3 sessions
  {
    path: "/alice3/session1",
    element: <Alice3Session1 />,
  },
  {
    path: "/alice3/session1adventure",
    element: <Alice3Session1Adventure />,
  },
  {
    path: "/alice3/session2spacegame",
    element: <Alice3Session2SpaceGame />,
  },
  {
    path: "/alice3/session3virtualpet",
    element: <Alice3Session3VirtualPet />,
  },
  {
    path: "/alice3/session4geometry",
    element: <Alice3Session4Geometry />,
  },
  // Minecraft Modding sessions
  {
    path: "/minecraftmodding/session1",
    element: <MinecraftSession1 />,
  },
  {
    path: "/minecraftmodding/crystalrealm",
    element: <MinecraftCrystalRealm />,
  },
  {
    path: "/minecraftmodding/rubyarmor",
    element: <MinecraftRubyArmor />,
  },
  // Roblox sessions
  {
    path: "/robloxlua/session1",
    element: <RobloxSession1 />,
  },
  {
    path: "/robloxlua/session1introducere",
    element: <RobloxSession1Introducere />,
  },
  {
    path: "/robloxlua/session2quizgame",
    element: <RobloxSession2QuizGame />,
  },
  {
    path: "/robloxlua/session3constructiiscripturiincepatori",
    element: <RobloxSession3ConstructiiScripturiIncepatori />,
  },
  {
    path: "/robloxlua/session4obby",
    element: <RobloxSession4Obby />,
  },
  {
    path: "/robloxlua/session5npccreator",
    element: <RobloxSession5NPCCreator />,
  },
  {
    path: "/robloxlua/session6createanimations",
    element: <RobloxSession6CreateAnimations />,
  },
  {
    path: "/robloxlua/session7shop",
    element: <RobloxSession7Shop />,
  },
  // Python sessions
  {
    path: "/python/session1",
    element: <PythonSession1 />,
  },
  // Greenfoot sessions
  {
    path: "/greenfoot/session1",
    element: <GreenfootSession1 />,
  },
  {
    path: "/greenfoot/session2",
    element: <GreenfootSession2 />,
  },
  {
    path: "/greenfoot/session3",
    element: <GreenfootSession3 />,
  },
  // Godot sessions
  {
    path: "/godot/session1",
    element: <GodotSession1 />,
  },
  {
    path: "/godot/session2",
    element: <GodotSession2 />,
  },
  {
    path: "/godot/session3",
    element: <GodotSession3 />,
  },
  {
    path: "/godot/session4",
    element: <GodotSession4 />,
  },
  {
    path: "/godot/session5",
    element: <GodotSession5 />,
  },
  {
    path: "/godot/simplegame",
    element: <GodotSimpleGame />,
  },
  // GDevelop sessions
  {
    path: "/gdevelop/session1",
    element: <GDevelopSession1 />,
  },
  // Construct3 sessions
  {
    path: "/construct3/session1",
    element: <Construct3Session1 />,
  },
  // Frontend Dev sessions
  {
    path: "/frontenddev/session1",
    element: <FrontendDevSession1 />,
  },
  // micro:bit Arcade sessions
  {
    path: "/microbitarcade/session1",
    element: <MicrobitArcadeSession1 />,
  },
  // LEGO SPIKE Essentials sessions
  {
    path: "/legoessentials/session1classiccarusel",
    element: <LegoEssentialsSession1ClassicCarousel />,
  },
  {
    path: "/legoessentials/session2ferriswheel",
    element: <LegoEssentialsSession2FerrisWheel />,
  },
  {
    path: "/legoessentials/session3cablecar",
    element: <LegoEssentialsSession3CableCar />,
  },
  {
    path: "/legoessentials/session4twirlingteacups",
    element: <LegoEssentialsSession4TwirlingTeacups />,
  },
  {
    path: "/legoessentials/session5snackstand",
    element: <LegoEssentialsSession5SnackStand />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
