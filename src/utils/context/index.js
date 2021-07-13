import React, { createContext, useState } from 'react';

export const UtilContext = createContext({
  selectEstado: 'Ceará',
  setselectEstado() {},
  selectChart: 'BARRA',
  setSelectChart() {},
});

export const ProviderUtil = ({children}) => {
  const [selectEstado, setselectEstado] = useState('Ceará');
  const [selectChart, setSelectChart] = useState('BARRA');

  const contextValues = {
    selectEstado,
    setselectEstado,
    selectChart,
    setSelectChart
  };

  return (
    <UtilContext.Provider value={contextValues}>
      {children}
    </UtilContext.Provider>
  );
};
