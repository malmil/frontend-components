import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, IconFontSizes } from '../utils/fonts';
import { MessageBarType } from 'office-ui-fabric-react/lib-commonjs/MessageBar';
import { Animation } from '../utils/getAnimationStyles';

//import { transitionKeysAreEqual } from 'office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey';

function getBackgroundColor(props) {
  const { palette } = getTheme();

  switch (props) {
    case MessageBarType.error:
    case MessageBarType.warning:
      return {
        backgroundColor: palette.skeColor.lightPink
      };
    case MessageBarType.severeWarning:
      return {
        backgroundColor: palette.skeColor.pink
      };
    case MessageBarType.info:
      return {
        backgroundColor: palette.skeColor.beige
      };
    case MessageBarType.success:
      return {
        backgroundColor: palette.skeColor.lightGreen
      };
    default:
      return {
        backgroundColor: palette.skeColor.beige
      };
  }
}

export const getClassNames = props => {
  const { palette } = getTheme();
  const severe = props.type === MessageBarType.severeWarning;
  const fadeOut = Animation.fadeOutNormal;
  const { size } = props;
  //const largeSize = size === 'large';
  //const defaultSize = size === 'default';

  return mergeStyles([
    {
      //opacity: props.hideMessageBar ? 0 : 1,
      selectors: {
        '&.ms-MessageBar': {
          ...getBackgroundColor(props.type),
          border: 'none',
          padding: size === 'large' ? '25px 25px 25px 30px' : '',
          selectors: {
            '&.fade-exit': {
              opacity: 1
            },
            '&.fade-exit-active': {
              ...fadeOut
            }
          }
        },
        '.ms-MessageBar-icon i': {
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt,
          fontSize: size === 'large' ? IconFontSizes.mega : IconFontSizes.large
        },
        '.ms-MessageBar-innerText': {
          fontSize: size === 'large' ? FontSizes.large : FontSizes.medium,
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt,
          lineHeight: size === 'large' ? '40px' : '22px',
          padding: size === 'large' ? '-2px 0px 0px 30px' : '-2px 0px 0px 0px'
        },
        '.ms-MessageBar-dismissal i': {
          marginTop: size === 'large' ? '' : '6px',
          position: size === 'large' ? 'absolute' : '',
          top: size === 'large' ? '-8px' : '',
          right: size === 'large' ? '-15px' : '',
          fontSize:
            size === 'large' ? IconFontSizes.xlarge : IconFontSizes.large,
          color: severe ? palette.skeColor.white : palette.skeColor.blackAlt
        }
      }
    }
  ]);
};
