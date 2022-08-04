import { Typography } from '@mui/material';

function ErrorMessage({ message, name }: Error) {
  return (
    <>
      <Typography variant="h4">Error type: {name}</Typography>
      <Typography variant="h5" color="error">
        {message}
      </Typography>
    </>
  );
}

export default ErrorMessage;
