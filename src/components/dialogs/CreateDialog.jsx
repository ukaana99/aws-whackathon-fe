import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/system';

import Typography from '@base/components/Typography';

import DialogTitle from '@/components/dialogs/DialogTitle';
import { Icons } from '@/constants';
import JhaCreateDialog from '@/features/jha/components/dialogs/JhaCreateDialog';
import { PtwCreateDialog } from '@/features/ptw/components/PtwCreateDialog';
import VpCreateDialog from '@/features/ventilation-plan/components/dialogs/VpCreateDialog';
import { useDialog } from '@/hooks/useDialog';

const DocumentButton = styled(Button)({
  padding: 1,
  height: '60px',
  width: '260px',
  justifyContent: 'flex-start',
});

function CreateDialog(props) {
  const { onClose } = props;

  const [currentDialog, setCurrentDialog] = useState(null);
  const [openDialog, closeDialog] = useDialog();

  useEffect(() => {
    if (currentDialog) {
      onClose();
      openDialog(currentDialog);
    }
  }, [currentDialog, openDialog, onClose]);

  const handleClick = (doc) => {
    if (doc.DialogProps) setCurrentDialog(null);
    setCurrentDialog(doc.DialogProps);
  };

  const document = [
    {
      path: '/ptw/apply',
      icon: Icons.SafetyHelmet,
      title: 'PTW',
      description: 'Permit To Work',
      disabled: false,
      DialogProps: {
        children: <PtwCreateDialog onClose={closeDialog} />,
      },
    },
    {
      path: '/jha/apply',
      icon: Icons.Toolbox,
      title: 'JHA',
      description: 'Job Hazard Analysis',
      disabled: false,
      DialogProps: {
        children: <JhaCreateDialog onClose={closeDialog} />,
      },
    },
    {
      path: '/cse/apply',
      icon: Icons.SafetyHelmet,
      title: 'CSE',
      description: 'Confined Space Entry',
      disabled: false,
    },
    {
      path: '/rp/apply',
      icon: Icons.FirstAid,
      title: 'RP',
      description: 'Rescue Plan',
      disabled: false,
    },
    {
      path: '/vp/apply',
      icon: Icons.SafetyHelmet,
      title: 'VP',
      description: 'Ventilation Plan',
      disabled: false,
      DialogProps: {
        children: <VpCreateDialog onClose={closeDialog} />,
      },
    },
    {
      path: '/eic/apply',
      icon: Icons.SolarPanel,
      title: 'EIC',
      description: 'Electrical Isolation Certificate',
      disabled: false,
    },
    {
      path: '/pic/apply',
      icon: Icons.SafetyHelmet,
      title: 'PIC',
      description: 'Physical Isolation Certificate',
      disabled: false,
    },
    {
      path: '/dc/apply',
      icon: Icons.SafetyHelmet,
      title: 'DC',
      description: 'Diving Certificate',
      disabled: true,
    },
    {
      path: '/vec/apply',
      icon: Icons.SafetyHelmet,
      title: 'VEC',
      description: 'Vehical Entry Certificate',
      disabled: true,
    },
    {
      path: '/roc/apply',
      icon: Icons.SafetyHelmet,
      title: 'ROC',
      description: 'Road Obstruction Certificate',
      disabled: true,
    },
    {
      path: '/ec/apply',
      icon: Icons.SafetyHelmet,
      title: 'EC',
      description: 'Excavation Certificate',
      disabled: true,
    },
    {
      path: '/scpd/apply',
      icon: Icons.SafetyHelmet,
      title: 'SCPD',
      description: 'Safety Critical Protection Device',
      disabled: true,
    },
    {
      path: '/pil/apply',
      icon: Icons.SafetyHelmet,
      title: 'PIL',
      description: 'Physical Isolation Library',
      disabled: true,
    },
    {
      path: '/lc/apply',
      icon: Icons.SafetyHelmet,
      title: 'LC',
      description: 'Lifting Certificate',
      disabled: true,
    },
    {
      path: '/loeac/apply',
      icon: Icons.SafetyHelmet,
      title: 'LOEAC',
      description: 'Limit of Electrical Access Certificate',
      disabled: true,
    },
    {
      path: '/peti/apply',
      icon: Icons.SafetyHelmet,
      title: 'PETI',
      description: 'Portable Equipment Temporary Installation Certificate',
      disabled: true,
    },
    {
      path: '/rc/apply',
      icon: Icons.SafetyHelmet,
      title: 'RC',
      description: 'Radiation Certificate',
      disabled: true,
    },
  ];

  const renderButtons = () => {
    return document.map((doc, index) => (
      <DocumentButton
        key={index}
        onClick={() => handleClick(doc)}
        component={Link}
        variant="outlined"
        disabled={doc.disabled}
        sx={{
          my: 1,
          mx: 1,
        }}
      >
        <Box display="flex" sx={{ alignItems: 'center' }}>
          <Box
            component="img"
            src={doc.icon}
            sx={{
              width: 60,
              height: 60,
              objectFit: 'none',
            }}
          />
          <Box>
            <Typography fontSize={16} fontWeight={700}>
              {doc.title}
            </Typography>
            <Typography
              variation={doc.disabled ? null : 'eh'}
              color={doc.disabled ? 'text.disabled' : 'neutral2'}
              fontSize={12}
              fontWeight={500}
            >
              {doc.description}
            </Typography>
          </Box>
        </Box>
      </DocumentButton>
    ));
  };

  return (
    <>
      <DialogTitle title={dialog.title} subtitle={dialog.subtitle} onClose={onClose} />
      <DialogContent sx={{ px: 1.5 }}>{renderButtons()}</DialogContent>
    </>
  );
}

export default CreateDialog;

const dialog = {
  title: 'Category',
  subtitle: 'Please select document type that you would like to create',
};
