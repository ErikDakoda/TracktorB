import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/shared/constants/AppEnums';
import {alpha} from '@mui/material/styles';

const Priority = ({priority}) => {
  return (
    <Box
      component='span'
      sx={{
        px: 3,
        py: 1,
        color: priority.color,
        borderRadius: '30px',
        fontSize: 12,
        fontWeight: Fonts.SEMI_BOLD,
        bgcolor: alpha(priority.color, 0.1),
      }}
    >
      {priority.name}
    </Box>
  );
};

export default Priority;

Priority.propTypes = {
  priority: PropTypes.object.isRequired,
};
