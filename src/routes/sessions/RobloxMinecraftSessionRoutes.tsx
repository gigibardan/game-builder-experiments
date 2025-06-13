
import React from 'react';
import { Route } from 'react-router-dom';
import CourseAccessGuard from '@/components/CourseAccessGuard';

// RobloxLua sessions
import Session1RobloxLua from '@/pages/robloxlua/Session1';
import Session1IntroducereRoblox from '@/pages/robloxlua/Session1Introducere';
import Session2QuizGameRoblox from '@/pages/robloxlua/Session2QuizGame';
import Session3ConstructiiScripturiRoblox from '@/pages/robloxlua/Session3ConstructiiScripturiIncepatori';
import Session4ObbyRoblox from '@/pages/robloxlua/Session4Obby';
import Session5NPCCreatorRoblox from '@/pages/robloxlua/Session5NPCCreator';
import Session6CreateAnimationsRoblox from '@/pages/robloxlua/Session6CreateAnimations';
import Session7ShopRoblox from '@/pages/robloxlua/Session7Shop';

// MinecraftModding sessions
import Session1MinecraftModding from '@/pages/minecraftmodding/Session1';
import Session4MinecraftModding from '@/pages/minecraftmodding/Session4';
import Session5MinecraftModding from '@/pages/minecraftmodding/Session5';
import Session6MinecraftModding from '@/pages/minecraftmodding/Session6';
import Session7MinecraftModding from '@/pages/minecraftmodding/Session7';
import Session8MinecraftModding from '@/pages/minecraftmodding/Session8';
import Session9MinecraftModding from '@/pages/minecraftmodding/Session9';
import Session10MinecraftModding from '@/pages/minecraftmodding/Session10';
import Session11MinecraftModding from '@/pages/minecraftmodding/Session11';
import Session12MinecraftModding from '@/pages/minecraftmodding/Session12';
import Session13MinecraftModding from '@/pages/minecraftmodding/Session13';
import Session14MinecraftModding from '@/pages/minecraftmodding/Session14';
import CrystalRealmMinecraft from '@/pages/minecraftmodding/CrystalRealm';
import RubyArmorMinecraft from '@/pages/minecraftmodding/RubyArmor';

export const RobloxMinecraftSessionRoutes = () => (
  <>
    {/* RobloxLua sessions */}
    <Route 
      path="/robloxlua/session1" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session1RobloxLua />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session1introducere" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session1IntroducereRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session2quizgame" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session2QuizGameRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session3constructiiscripturi"
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session3ConstructiiScripturiRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session4obby" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session4ObbyRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session5npccreator" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session5NPCCreatorRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session6createanimations" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session6CreateAnimationsRoblox />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/robloxlua/session7shop" 
      element={
        <CourseAccessGuard courseSlug="robloxlua">
          <Session7ShopRoblox />
        </CourseAccessGuard>
      } 
    />

    {/* MinecraftModding sessions */}
    <Route 
      path="/minecraft-modding/session1" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session1MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session4" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session4MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session5" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session5MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session6" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session6MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session7" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session7MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session8" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session8MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session9" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session9MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session10" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session10MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session11" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session11MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session12" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session12MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session13"
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session13MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/session14" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <Session14MinecraftModding />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/crystalrealm" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <CrystalRealmMinecraft />
        </CourseAccessGuard>
      } 
    />
    <Route 
      path="/minecraft-modding/rubyarmor" 
      element={
        <CourseAccessGuard courseSlug="minecraft-modding">
          <RubyArmorMinecraft />
        </CourseAccessGuard>
      } 
    />
  </>
);
