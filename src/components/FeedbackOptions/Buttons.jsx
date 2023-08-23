import PropTypes from 'prop-types';
import { ButtonsStyled } from 'components/FeedbackOptions/Buttons.styled';
import { Section } from 'components/Section/Section';
import { HiOutlineHeart } from 'react-icons/hi';
import { MdThumbDownOffAlt, MdSentimentNeutral } from 'react-icons/md';

const iconsArr = [
  <HiOutlineHeart />,
  <MdSentimentNeutral />,
  <MdThumbDownOffAlt />,
];

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      {options.map((option, index) => (
        <ButtonsStyled
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option} {iconsArr[index]}
        </ButtonsStyled>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// import PropTypes from 'prop-types';
// import { ButtonsStyled } from 'components/FeedbackOptions/Buttons.styled';
// import { Section } from 'components/Section/Section';
// import { HiOutlineHeart } from 'react-icons/hi';
// import { MdThumbDownOffAlt, MdSentimentNeutral } from 'react-icons/md';

// const iconsArr = {
//   good: <HiOutlineHeart size={22} />,
//   neutral: <MdSentimentNeutral size={22} />,
//   bad: <MdThumbDownOffAlt size={22} />,
// };

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <Section title="Please leave feedback">
//       {options.map(option => (
//         <ButtonsStyled
//           key={option}
//           type="button"
//           onClick={() => onLeaveFeedback(option)}
//         >
//           {iconsArr[option]}
//           {option}
//         </ButtonsStyled>
//       ))}
//     </Section>
//   );
// };

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
//     .isRequired,
// };
