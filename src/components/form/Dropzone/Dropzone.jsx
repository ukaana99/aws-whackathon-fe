// https://react-dropzone.js.org/
import { useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import Button from '@base/components/Button';
import Typography from '@base/components/Typography';

import { Images } from '@base/constants';

const StyledBox = styled(Box)(({ theme, status }) => {
  const idleBorderColorLight = theme.palette.neutral[300];
  const idleBorderColorDark = theme.palette.neutral[700];
  const focusedBorderColor = theme.palette.primary[500];
  const successBorderColor = theme.palette.success[500];
  const errorBorderColor = theme.palette.error[500];

  const backgroundImage = (color) => {
    const strokeColor = '%23' + color.slice(1);
    return `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='${strokeColor}' stroke-width='4' stroke-dasharray='4%2c10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 276,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    // border: '2px dashed',
    borderRadius: '8px',
    borderColor: idleBorderColorLight,
    backgroundImage: backgroundImage(idleBorderColorLight),

    ...(theme.palette.mode === 'dark' && {
      borderColor: idleBorderColorDark,
      backgroundImage: backgroundImage(idleBorderColorDark),
    }),
    ...(status === 'idle' && {
      borderColor: theme.palette.neutral[300],
      ...(theme.palette.mode === 'dark' && {
        borderColor: idleBorderColorDark,
        backgroundImage: backgroundImage(idleBorderColorDark),
      }),
    }),
    // ...(status === 'focused' && {
    //   borderColor: focusedBorderColor,
    //   backgroundColor: theme.palette.primary[50],
    //   backgroundImage: backgroundImage(focusedBorderColor),
    //   ...(theme.palette.mode === 'dark' && {
    //     backgroundColor: theme.palette.primary[900],
    //   }),
    // }),
    ...(status === 'success' && {
      borderColor: successBorderColor,
      backgroundColor: theme.palette.success[50],
      backgroundImage: backgroundImage(successBorderColor),
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.success[900],
      }),
    }),
    ...(status === 'error' && {
      borderColor: errorBorderColor,
      backgroundColor: theme.palette.error[50],
      backgroundImage: backgroundImage(errorBorderColor),
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.error[900],
      }),
    }),
    '&:hover': {
      borderColor: focusedBorderColor,
      backgroundColor: theme.palette.primary[50],
      backgroundImage: backgroundImage(focusedBorderColor),
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.primary[900],
      }),
    },
  };
});

// default props for all components
const defaultProps = {
  accept: {
    // 'image/*': [],
    // 'application/pdf': [],
  },
  description: 'File size no more than 10MB',
  multiple: false,
  maxFiles: 1,
  maxSize: 10 * 1024 * 1024,
  onDropAccepted: () => {},
  onDropRejected: () => {},
};

const DefaultDropzone = (props) => {
  const {
    initialFiles,
    accept,
    description,
    multiple = false,
    maxFiles = 1,
    maxSize = 10 * 1024 * 1024,
    noClick = false,
    noKeyboard = false,
    onDropAccepted,
    onDropRejected,
  } = props;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    open,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    noClick: noClick,
    noKeyboard: noKeyboard,
    accept: accept,
    maxFiles: !multiple ? 1 : maxFiles,
    maxSize: maxSize,
    multiple: false,
    onDropAccepted: onDropAccepted,
    onDropRejected: onDropRejected,
  });

  const status = isDragReject ? 'error' : isDragAccept ? 'success' : isFocused ? 'focused' : 'idle';

  return (
    <StyledBox status={status} {...getRootProps()}>
      <input {...getInputProps()} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box component="img" src={Images.FileUpload} alt={'Dropzone'} height={160} width={200} />
        <Box display="flex" mb={1}>
          <Typography fontWeight={600} fontSize={16}>
            Drag & drop your files here, or&nbsp;
          </Typography>
          <Button variation="text" sx={{ p: 0 }} onClick={open}>
            <Typography color="primary" fontWeight={600} fontSize={16}>
              Browse
            </Typography>
          </Button>
        </Box>
        <Typography color="text.hint" fontWeight={400} fontSize={12}>
          {description}
        </Typography>
      </Box>
    </StyledBox>
  );
};
DefaultDropzone.defaultProps = defaultProps;

const Dropzone = (props) => {
  return <DefaultDropzone {...props} />;
};

export default Dropzone;
