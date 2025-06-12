import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from '@/components/ProtectedRoute';
import CourseAccessGuard from '@/components/CourseAccessGuard';

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
import PythonSession2 from '@/pages/python/Session2';

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
import GDevelopSession2 from '@/pages/gdevelop/Session2';

// Session pages - Construct3
import Construct3Session1 from '@/pages/construct3/Session1';
import Construct3Session2 from '@/pages/construct3/Session2';

// Session pages - Frontend Dev
import FrontendDevSession1 from '@/pages/frontenddev/Session1';
import FrontendDevSession2 from '@/pages/frontenddev/Session2';

// Session pages - micro:bit Arcade
import MicrobitArcadeSession1 from '@/pages/microbitarcade/Session1';
import MicrobitArcadeSession2 from '@/pages/microbitarcade/Session2';

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
  // Course pages - Protected with CourseAccessGuard
  {
    path: "/courses/scratch",
    element: (
      <CourseAccessGuard courseSlug="scratch">
        <Scratch />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/appinventor",
    element: (
      <CourseAccessGuard courseSlug="appinventor">
        <AppInventor />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/construct3",
    element: (
      <CourseAccessGuard courseSlug="construct3">
        <Construct3 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/gdevelop",
    element: (
      <CourseAccessGuard courseSlug="gdevelop">
        <GDevelop />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/alice3",
    element: (
      <CourseAccessGuard courseSlug="alice3">
        <Alice3 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/microbitarcade",
    element: (
      <CourseAccessGuard courseSlug="microbit-arcade">
        <MicrobitArcade />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/microbit-arcade",
    element: (
      <CourseAccessGuard courseSlug="microbit-arcade">
        <MicrobitArcade />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/minecraft-modding",
    element: (
      <CourseAccessGuard courseSlug="minecraft-modding">
        <MinecraftModding />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/robloxlua",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua">
        <RobloxLua />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/roblox-lua",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua">
        <RobloxLua />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/python",
    element: (
      <CourseAccessGuard courseSlug="python">
        <Python />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/greenfoot",
    element: (
      <CourseAccessGuard courseSlug="greenfoot">
        <Greenfoot />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/godot",
    element: (
      <CourseAccessGuard courseSlug="godot">
        <Godot />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/frontenddev",
    element: (
      <CourseAccessGuard courseSlug="frontend-dev">
        <FrontendDev />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/frontend-dev",
    element: (
      <CourseAccessGuard courseSlug="frontend-dev">
        <FrontendDev />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/lego-spike-essentials",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials">
        <LegoSpikeEssentials />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/lego-spike-prime",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-prime">
        <LegoSpikePrime />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/courses/microbit-explorers",
    element: (
      <CourseAccessGuard courseSlug="microbit-explorers">
        <MicrobitExplorers />
      </CourseAccessGuard>
    ),
  },
  // Scratch sessions
  {
    path: "/scratch/session1alegesanatos",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session1alegesanatos">
        <Session1Alegesanatos />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session2spacedodge",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session2spacedodge">
        <Session2SpaceDodge />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session3motoracer",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session3motoracer">
        <Session3MotoRacer />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session4cityrunner",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session4cityrunner">
        <Session4CityRunner />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session5beachballbounce",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session5beachballbounce">
        <Session5BeachBallBounce />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session6stitchbeach",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session6stitchbeach">
        <Session6StitchBeach />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session7cakequest",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session7cakequest">
        <Session7cakequest />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session8wizardsquest",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session8wizardsquest">
        <Session8WizardsQuest />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session9robotfootball",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session9robotfootball">
        <Session9RobotFootball />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session10flappyminecraftpart1",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session10flappyminecraftpart1">
        <Session10FlappyMinecraftPart1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session10flappyminecraftpart2",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session10flappyminecraftpart2">
        <Session10FlappyMinecraftPart2 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/scratch/session11eggdropper",
    element: (
      <CourseAccessGuard courseSlug="scratch" sessionSlug="session11eggdropper">
        <Session11EggDropper />
      </CourseAccessGuard>
    ),
  },
  // AppInventor sessions
  {
    path: "/appinventor/session1",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session1">
        <AppInventorSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session2",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session2">
        <AppInventorSession2 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session3",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session3">
        <AppInventorSession3 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session4",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session4">
        <AppInventorSession4 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session5",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session5">
        <AppInventorSession5 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session6",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session6">
        <AppInventorSession6 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session7",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session7">
        <AppInventorSession7 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session8",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session8">
        <AppInventorSession8 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/appinventor/session9",
    element: (
      <CourseAccessGuard courseSlug="appinventor" sessionSlug="session9">
        <AppInventorSession9 />
      </CourseAccessGuard>
    ),
  },
  // Alice3 sessions
  {
    path: "/alice3/session1",
    element: (
      <CourseAccessGuard courseSlug="alice3" sessionSlug="session1">
        <Alice3Session1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/alice3/session1adventure",
    element: (
      <CourseAccessGuard courseSlug="alice3" sessionSlug="session1adventure">
        <Alice3Session1Adventure />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/alice3/session2spacegame",
    element: (
      <CourseAccessGuard courseSlug="alice3" sessionSlug="session2spacegame">
        <Alice3Session2SpaceGame />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/alice3/session3virtualpet",
    element: (
      <CourseAccessGuard courseSlug="alice3" sessionSlug="session3virtualpet">
        <Alice3Session3VirtualPet />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/alice3/session4geometry",
    element: (
      <CourseAccessGuard courseSlug="alice3" sessionSlug="session4geometry">
        <Alice3Session4Geometry />
      </CourseAccessGuard>
    ),
  },
  // Minecraft Modding sessions
  {
    path: "/minecraftmodding/session1",
    element: (
      <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="session1">
        <MinecraftSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/minecraftmodding/crystalrealm",
    element: (
      <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="crystalrealm">
        <MinecraftCrystalRealm />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/minecraftmodding/rubyarmor",
    element: (
      <CourseAccessGuard courseSlug="minecraft-modding" sessionSlug="rubyarmor">
        <MinecraftRubyArmor />
      </CourseAccessGuard>
    ),
  },
  // Roblox sessions
  {
    path: "/robloxlua/session1",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session1">
        <RobloxSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session1introducere",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session1introducere">
        <RobloxSession1Introducere />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session2quizgame",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session2quizgame">
        <RobloxSession2QuizGame />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session3constructiiscripturiincepatori",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session3constructiiscripturiincepatori">
        <RobloxSession3ConstructiiScripturiIncepatori />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session4obby",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session4obby">
        <RobloxSession4Obby />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session5npccreator",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session5npccreator">
        <RobloxSession5NPCCreator />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session6createanimations",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session6createanimations">
        <RobloxSession6CreateAnimations />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/robloxlua/session7shop",
    element: (
      <CourseAccessGuard courseSlug="roblox-lua" sessionSlug="session7shop">
        <RobloxSession7Shop />
      </CourseAccessGuard>
    ),
  },
  // Python sessions
  {
    path: "/python/session1",
    element: (
      <CourseAccessGuard courseSlug="python" sessionSlug="session1">
        <PythonSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/python/session2",
    element: (
      <CourseAccessGuard courseSlug="python" sessionSlug="session2">
        <PythonSession2 />
      </CourseAccessGuard>
    ),
  },
  // Greenfoot sessions
  {
    path: "/greenfoot/session1",
    element: (
      <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session1">
        <GreenfootSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/greenfoot/session2",
    element: (
      <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session2">
        <GreenfootSession2 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/greenfoot/session3",
    element: (
      <CourseAccessGuard courseSlug="greenfoot" sessionSlug="session3">
        <GreenfootSession3 />
      </CourseAccessGuard>
    ),
  },
  // Godot sessions
  {
    path: "/godot/session1",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="session1">
        <GodotSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/godot/session2",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="session2">
        <GodotSession2 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/godot/session3",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="session3">
        <GodotSession3 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/godot/session4",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="session4">
        <GodotSession4 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/godot/session5",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="session5">
        <GodotSession5 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/godot/simplegame",
    element: (
      <CourseAccessGuard courseSlug="godot" sessionSlug="simplegame">
        <GodotSimpleGame />
      </CourseAccessGuard>
    ),
  },
  // GDevelop sessions
  {
    path: "/gdevelop/session1",
    element: (
      <CourseAccessGuard courseSlug="gdevelop" sessionSlug="session1">
        <GDevelopSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/gdevelop/session2",
    element: (
      <CourseAccessGuard courseSlug="gdevelop" sessionSlug="session2">
        <GDevelopSession2 />
      </CourseAccessGuard>
    ),
  },
  // Construct3 sessions
  {
    path: "/construct3/session1",
    element: (
      <CourseAccessGuard courseSlug="construct3" sessionSlug="session1">
        <Construct3Session1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/construct3/session2",
    element: (
      <CourseAccessGuard courseSlug="construct3" sessionSlug="session2">
        <Construct3Session2 />
      </CourseAccessGuard>
    ),
  },
  // Frontend Dev sessions
  {
    path: "/frontenddev/session1",
    element: (
      <CourseAccessGuard courseSlug="frontend-dev" sessionSlug="session1">
        <FrontendDevSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/frontenddev/session2",
    element: (
      <CourseAccessGuard courseSlug="frontend-dev" sessionSlug="session2">
        <FrontendDevSession2 />
      </CourseAccessGuard>
    ),
  },
  // micro:bit Arcade sessions
  {
    path: "/microbitarcade/session1",
    element: (
      <CourseAccessGuard courseSlug="microbit-arcade" sessionSlug="session1">
        <MicrobitArcadeSession1 />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/microbitarcade/session2",
    element: (
      <CourseAccessGuard courseSlug="microbit-arcade" sessionSlug="session2">
        <MicrobitArcadeSession2 />
      </CourseAccessGuard>
    ),
  },
  // LEGO SPIKE Essentials sessions
  {
    path: "/legoessentials/session1classiccarusel",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session1classiccarusel">
        <LegoEssentialsSession1ClassicCarousel />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/legoessentials/session2ferriswheel",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session2ferriswheel">
        <LegoEssentialsSession2FerrisWheel />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/legoessentials/session3cablecar",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session3cablecar">
        <LegoEssentialsSession3CableCar />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/legoessentials/session4twirlingteacups",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session4twirlingteacups">
        <LegoEssentialsSession4TwirlingTeacups />
      </CourseAccessGuard>
    ),
  },
  {
    path: "/legoessentials/session5snackstand",
    element: (
      <CourseAccessGuard courseSlug="lego-spike-essentials" sessionSlug="session5snackstand">
        <LegoEssentialsSession5SnackStand />
      </CourseAccessGuard>
    ),
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
