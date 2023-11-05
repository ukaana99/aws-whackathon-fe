import { useRef, useState } from 'react';

import Dialog from '@base/components/Dialog';

import DialogContext from './DialogContext';

function DialogProvider({ children }) {
  const [dialogs, setDialogs] = useState([]);

  const createDialog = (option) => {
    const dialog = { ...option, open: true };
    setDialogs((dialogs) => [...dialogs, dialog]);
  };

  const closeDialog = () => {
    setDialogs((dialogs) => {
      dialogs.pop();
      return [...dialogs];
    });
  };

  const contextValue = useRef([createDialog, closeDialog]);

  return (
    <DialogContext.Provider value={contextValue.current}>
      {children}
      {dialogs.map((dialog, i) => {
        const { children: dialogChildren, ...dialogParams } = dialog;

        return (
          <Dialog key={i} onClose={closeDialog} {...dialogParams}>
            {dialogChildren}
          </Dialog>
        );
      })}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
