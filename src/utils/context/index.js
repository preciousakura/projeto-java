import React, { createContext, useState } from 'react';

export const UtilContext = createContext({
  selectEstado: 'Ceará',
  setselectEstado() {},
  selectChart: 'BARRA',
  setSelectChart() {},
  modal: false,
  setModal() {},
});

export const ProviderUtil = ({children}) => {
  const [selectEstado, setselectEstado] = useState('Acre');
  const [selectChart, setSelectChart] = useState('BARRA');
  const [modal, setModal] = useState(false);

  const contextValues = {
    selectEstado,
    setselectEstado,
    selectChart,
    setSelectChart,
    modal,
    setModal
  };

  return (
    <UtilContext.Provider value={contextValues}>
      {children}
    </UtilContext.Provider>
  );
};
