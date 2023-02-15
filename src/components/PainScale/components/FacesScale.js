import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import {
    SentimentVerySatisfiedOutlined,
    SentimentVerySatisfied,
    SentimentSatisfiedOutlined,
    SentimentSatisfiedAlt,
    SentimentSatisfied,
    SentimentNeutralOutlined,
    SentimentNeutral,
    SentimentDissatisfied,
    SentimentDissatisfiedOutlined,
    MoodBadOutlined,
    SentimentVeryDissatisfiedOutlined
} from '@mui/icons-material';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVerySatisfiedOutlined color='success' />,
        label: '0',
    },
    2: {
        icon: <SentimentVerySatisfied color="success" />,
        label: '1',
    },
    3: {
        icon: <SentimentSatisfiedOutlined color="success" />,
        label: '2',
    },
    4: {
        icon: <SentimentSatisfiedAlt color="secondary" />,
        label: '3',
    },
    5: {
        icon: <SentimentSatisfied color="secondary" />,
        label: '4',
    },
    6: {
        icon: <SentimentNeutralOutlined color="primary" />,
        label: '5',
    },
    7: {
        icon: <SentimentNeutral color="primary" />,
        label: '6',
    },
    8: {
        icon: <SentimentDissatisfied color="warning" />,
        label: '7',
    },
    9: {
        icon: <SentimentDissatisfiedOutlined color="warning" />,
        label: '8',
    },
    10: {
        icon: <MoodBadOutlined color="error" />,
        label: '9',
    },
    11: {
        icon: <SentimentVeryDissatisfiedOutlined color="error" />,
        label: '10',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
};

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function RadioGroupRating(props) {
    const functionChangeValue = props.changeValue;

    return (
        <StyledRating
            name="highlight-selected-only"
            defaultValue={0}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            max={11}
            highlightSelectedOnly
            onChange={functionChangeValue}
        />
    );
};
