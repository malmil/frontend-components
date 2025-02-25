import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

function getType(props) {
  switch (props.type) {
    case 'left':
      return {
        display: 'block'
      };
    default:
      return;
  }
}

function getIcon(props) {
  switch (props.alignIcon) {
    case 'right':
      return {
        fontSize: '28px',
        float: 'right'
      };
    default:
      return {
        fontSize: '42px',
        display: 'inherit',
        margin: `16px 0`,
        textAlign: 'center',
        color: 'black'
      };
  }
}

function getTitle(props) {
  const { palette } = getTheme();
  switch (props.alignTitle) {
    case 'left':
      return {
        textAlign: 'left',
        margin: 0,
        marginBottom: '8px',
        color: palette.skeColor.blue
      };
    default:
      return;
  }
}

function getDescription(props) {
  const { palette } = getTheme();
  switch (props.alignDescription) {
    case 'left':
      return {
        margin: 0,
        textAlign: 'left',
        lineHeight: '25px',
        color: palette.skeColor.blackAlt
      };
    default:
      return;
  }
}

export const getClassNames = props => {
  const { palette } = getTheme();
  return mergeStyleSets({
    content: {
      selectors: {
        '& i': {
          ...getIcon(props)
        },
        '& p': {
          margin: 0,
          textAlign: 'center',
          lineHeight: '25px',
          color: palette.skeColor.blackAlt,
          ...getDescription(props)
        },
        '& h2': {
          textAlign: 'center',
          margin: 0,
          marginBottom: '8px',
          color: palette.skeColor.blue,
          ...getTitle(props)
        },

        '&:active, &:focus, &:hover': {
          selectors: {
            h2: {
              color: palette.skeColor.darkBlue
            }
          }
        }
      }
    },
    nav: {
      selectors: {
        '& a': {
          border: '0',
          margin: 'auto'
        },
        '& ul': {
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
          justifyContent: 'space-between',
          ...getType(props)
        },
        '& ul li': {
          borderBottom: `3px solid ${palette.skeColor.darkBlue}`,
          position: 'relative',
          textDecoration: 'none',
          listStyle: 'none',
          display: 'flex',
          marginBottom: '32px',
          flexBasis: '46%'
        },
        '& ul li > a': {
          color: palette.skeColor.darkBlue,
          textDecoration: 'none',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          margin: '0 !important',
          width: '100%',
          transition: 'all 0.2s ease'
        },
        '& ul li > a:active, & ul li > a:focus, & ul li > a:hover': {
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none',
          transition: 'background-color .2s'
        },
        '& ul li > a::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          left: 0,
          bottom: 0,
          backgroundColor: palette.skeColor.darkBlue,
          transition: 'height 0.1s',
          width: '100%',
          height: 0
        },
        '& ul li > a:focus:after, & ul li > a:hover:after': {
          height: 2
        },
        '@media (max-width: 1023px)': {
          selectors: {
            'ul li': {
              flexBasis: '100%'
            }
          }
        }
      }
    }
  });
};
