import CheckIcon from '@mui/icons-material/Check';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import MuiStepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import MuiStepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import petronasGray from '@base/colors/petronasGray';

import { convertType } from '@/utils/convert-string';

const StyledStepConnector = styled(MuiStepConnector)(({ theme, alternative }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderWidth: '3px',
    borderRadius: '1px',
    marginTop: convertType(alternative) ? '-18px' : '-6px',
    marginLeft: convertType(alternative) && '-8px',
    marginRight: convertType(alternative) && '-8px',
    marginBottom: '-6px',
    minHeight: 'calc(24px + 0.75rem)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledMuiStepper = styled(MuiStepper)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: 500,
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root .MuiStepIcon-root .MuiSvgIcon-root-MuiStepIcon-root': {
    color: theme.palette.background.paper,
  },
}));

const StyledStepperIcon = styled('div')(({ theme, isSubStep, isCompleteStep, isActiveStep }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isSubStep ? 8 : 22,
    height: isSubStep ? 8 : 22,
    marginLeft: isSubStep ? 8 : 0,
    backgroundColor: isCompleteStep
      ? theme.palette.primary.main
      : isSubStep && isActiveStep
      ? theme.palette.primary.main
      : isSubStep
      ? petronasGray[300]
      : theme.palette.background.paper,
    borderRadius: 50,
    border: `2px solid ${
      isActiveStep || isCompleteStep ? theme.palette.primary.main : petronasGray[300]
    }`,
  };
});

// default props for all components
const defaultProps = {
  steps: [],
  activeStep: 0,
  onClick: () => {},
  onNext: () => {},
  onBack: () => {},
  onReset: () => {},
};

const DefaultStepper = ({ steps, activeStep, onClick, onNext, onBack, onReset, ...props }) => {
  return (
    <StyledMuiStepper
      activeStep={activeStep}
      connector={<StyledStepConnector alternative={String(props.alternativeLabel)} />}
      {...props}
    >
      {steps.map((step) => {
        const isCompleteStep = step.stepId <= activeStep;
        const isActiveStep = step.stepId === activeStep + 1;
        return (
          <Step key={step.label}>
            <StepButton
              onClick={(event) => onClick(event, step?.stepId)}
              sx={{ py: 0 }}
              icon={
                <StyledStepperIcon
                  isSubStep={step?.subStep}
                  isCompleteStep={isCompleteStep}
                  isActiveStep={isActiveStep}
                >
                  {isCompleteStep && !step?.subStep ? (
                    <CheckIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
                  ) : (
                    <Typography fontSize={12} fontWeight={500} color={'#181818'}>
                      {step?.subStep ? '' : step?.stepNo || step?.stepId}
                    </Typography>
                  )}
                </StyledStepperIcon>
              }
            >
              <StepLabel>{step.label}</StepLabel>
            </StepButton>
          </Step>
        );
      })}
    </StyledMuiStepper>
  );
};
DefaultStepper.defaultProps = defaultProps;

const Stepper = (props) => {
  return <DefaultStepper {...props} />;
};

export default Stepper;
