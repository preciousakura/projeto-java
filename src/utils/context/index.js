import React, { createContext, useState } from 'react';

export const UtilContext = createContext({
  selectEstado: 'Acre',
  setselectEstado() {},
  selectChart: 'Acre',
  setSelectChart() {},
});

export const ProviderUtil = ({children}) => {
  const [selectEstado, setselectEstado] = useState('Acre');
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
