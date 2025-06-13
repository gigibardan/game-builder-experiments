
import React from 'react';
import { ScratchSessionRoutes } from './sessions/ScratchSessionRoutes';
import { FrontendDevSessionRoutes } from './sessions/FrontendDevSessionRoutes';
import { PythonSessionRoutes } from './sessions/PythonSessionRoutes';
import { GameDevelopmentSessionRoutes } from './sessions/GameDevelopmentSessionRoutes';
import { RobloxMinecraftSessionRoutes } from './sessions/RobloxMinecraftSessionRoutes';
import { MobileRoboticsSessionRoutes } from './sessions/MobileRoboticsSessionRoutes';

export const CourseSessionRoutes = () => (
  <>
    {ScratchSessionRoutes()}
    {FrontendDevSessionRoutes()}
    {PythonSessionRoutes()}
    {GameDevelopmentSessionRoutes()}
    {RobloxMinecraftSessionRoutes()}
    {MobileRoboticsSessionRoutes()}
  </>
);
