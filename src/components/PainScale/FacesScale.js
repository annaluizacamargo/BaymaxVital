import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import MoodBadOutlinedIcon from '@mui/icons-material/MoodBadOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
    1: {
        icon: <SentimentVerySatisfiedOutlinedIcon color="error" />,
        label: 'Pain: 0',
      },
      2: {
        icon: <SentimentVerySatisfiedIcon color="error" />,
        label: 'Pain: 1',
      },
      3: {
        icon: <SentimentSatisfiedOutlinedIcon color="warning" />,
        label: 'Pain: 2',
      },
      4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Pain: 3',
      },
      5: {
        icon: <SentimentSatisfiedIcon color="success" />,
        label: 'Pain: 4',
      },
      6: {
        icon: <SentimentNeutralOutlinedIcon color="error" />,
        label: 'Pain: 5',
      },
      7: {
        icon: <SentimentNeutralIcon color="error" />,
        label: 'Pain: 6',
      },
      8: {
        icon: <SentimentDissatisfiedIcon color="warning" />,
        label: 'Pain: 7',
      },
      9: {
        icon: <SentimentDissatisfiedOutlinedIcon color="success" />,
        label: 'Pain: 8',
      },
      10: {
        icon: <MoodBadOutlinedIcon color="success" />,
        label: 'Pain: 9',
      },
      11: {
        icon: <SentimentVeryDissatisfiedOutlinedIcon color="success" />,
        label: 'Pain: 10',
      },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={1}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      max={11}
      highlightSelectedOnly
    />
  );
}