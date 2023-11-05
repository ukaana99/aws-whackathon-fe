import { useContext } from 'react';

import { DialogContext } from '@/providers/Dialog';

export const useDialog = () => useContext(DialogContext);
