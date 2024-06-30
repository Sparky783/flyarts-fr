import { createContext, useState } from "react";

export const CvAnimationContext = createContext({
  currentElement: <></>,
  setCurrentElement: (currentElement: any) => { }
});

export function ExperienceAnimationContextProvider({ children }: any) {
  const [currentElement, setCurrentElement] = useState(<></>);

  return <CvAnimationContext.Provider value={{ currentElement, setCurrentElement }}>
    {children}
  </CvAnimationContext.Provider>
}