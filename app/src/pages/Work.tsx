import React from "react";

export const Work:React.FC = () => {
  const electron = (window as any).electron;
  return (
    <>
  <div>This is work page contents</div>
  <div>The home dir is @ {electron.homeDir()}</div>
  <div>The home dir is @ {electron.osVersion()}</div>
  <div>The home dir is @ {electron.arch()}</div>
  </>
  )
}
