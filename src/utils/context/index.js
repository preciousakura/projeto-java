import React, { createContext, useState, useEffect } from 'react';

export const UtilContext = createContext({
  selectEstado: 'Ceará',
  setselectEstado() {},
  selectChart: 'BARRA',
  setSelectChart() {},
  modal: false,
  setModal() {},
  width: window.innerWidth
});

export const ProviderUtil = ({children}) => {
  const [selectEstado, setselectEstado] = useState('Acre');
  const [selectChart, setSelectChart] = useState('BARRA');
  const [modal, setModal] = useState(false);
  
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const contextValues = {
    selectEstado,
    setselectEstado,
    selectChart,
    setSelectChart,
    modal,
    setModal, 
    width,
  };

  return (
    <UtilContext.Provider value={contextValues}>
      {children}
    </UtilContext.Provider>
  );
};
