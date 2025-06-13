
import React from 'react';
import { Route } from 'react-router-dom';
import Scratch from '@/pages/courses/Scratch';
import RobloxLua from '@/pages/courses/RobloxLua';
import MinecraftModding from '@/pages/courses/MinecraftModding';
import Python from '@/pages/courses/Python';
import GDevelop from '@/pages/courses/GDevelop';
import Alice3 from '@/pages/courses/Alice3';
import AppInventor from '@/pages/courses/AppInventor';
import Construct3 from '@/pages/courses/Construct3';
import Godot from '@/pages/courses/Godot';
import Greenfoot from '@/pages/courses/Greenfoot';
import FrontendDev from '@/pages/courses/FrontendDev';
import LegoSpikeEssentials from '@/pages/courses/LegoSpikeEssentials';
import LegoSpikePrime from '@/pages/courses/LegoSpikePrime';
import MicrobitExplorers from '@/pages/courses/MicrobitExplorers';
import MicrobitArcade from '@/pages/courses/MicrobitArcade';

export const CourseOverviewRoutes = () => (
  <>
    <Route path="/courses/scratch" element={<Scratch />} />
    <Route path="/courses/robloxlua" element={<RobloxLua />} />
    <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
    <Route path="/courses/python" element={<Python />} />
    <Route path="/courses/gdevelop" element={<GDevelop />} />
    <Route path="/courses/alice3" element={<Alice3 />} />
    <Route path="/courses/appinventor" element={<AppInventor />} />
    <Route path="/courses/construct3" element={<Construct3 />} />
    <Route path="/courses/godot" element={<Godot />} />
    <Route path="/courses/greenfoot" element={<Greenfoot />} />
    <Route path="/courses/frontenddev" element={<FrontendDev />} />
    <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
    <Route path="/courses/lego-spike-prime" element={<LegoSpikePrime />} />
    <Route path="/courses/microbit-explorers" element={<MicrobitExplorers />} />
    <Route path="/courses/microbitarcade" element={<MicrobitArcade />} />
  </>
);
