import React, { createContext, useState, useEffect } from 'react';

export const UtilContext = createContext({
  selectEstado: ' ',
  setselectEstado() {},
  selectChart: 'BARRA',
  setSelectChart() {},
  modal: false,
  setModal() {},
  width: window.innerWidth,
  dados: undefined,
  setDados() {},
  dado: undefined,
  setDado() {},
});

export const ProviderUtil = ({children}) => {
  const [dados, setDados] = useState();
  const [dado, setDado] = useState();
  const [selectEstado, setselectEstado] = useState('');
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
    dados,
    setDados,
    dado,
    setDado,
  };

  return (
    <UtilContext.Provider value={contextValues}>
      {children}
    </UtilContext.Provider>
  );
};
