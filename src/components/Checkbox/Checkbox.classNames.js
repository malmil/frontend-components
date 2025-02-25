import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { getFocusStyle } from '../utils/getFocusStyle';
import { FontWeights, FontSizes } from '../utils/fonts';

export var getClassNames = function getClassNames(props) {
  const theme = getTheme();
  const inset = -4;
  const radius = '0';
  return mergeStyles([
    getFocusStyle(theme, inset, 'relative', radius),
    {
      displayName: 'SkeAvkrysningsboks',
      selectors: {
        '&.ms-Checkbox': {
          padding: '4px'
        },
        '&.is-enabled .ms-Checkbox-checkbox': {
          borderRadius: '0px',
          content: '',
          display: 'inline-block',
          border: '2px solid',
          cursor: 'pointer',
          fontSize: FontSizes.medium
        },
        'span.ms-Checkbox-text': {
          fontSize: FontSizes.medium
        },
        '&.is-checked .ms-Checkbox-checkbox': {
          border: 'none',
          fontSize: FontSizes.medium
        },
        'i.ms-Checkbox-checkmark': {
          paddingLeft: '1.5px',
          paddingTop: '1.5px',
          fontSize: FontSizes.medium
        },
        '&:hover .ms-Checkbox-checkmark': {
          opacity: 0
        },
        '&.is-checked:hover .ms-Checkbox-checkmark': {
          opacity: 1
        },
        '& i': {
          fontWeight: FontWeights.bold
        },
        '.ms-Checkbox-label:hover i': {
          opacity: 0
        }
      }
    }
  ]);
};
