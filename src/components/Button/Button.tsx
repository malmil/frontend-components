import classnames from 'classnames';
import {
  DefaultButton,
  IButtonProps
} from 'office-ui-fabric-react/lib-commonjs/Button';
import * as React from 'react';
import { getClassNames as getStandardClassNames } from './Button.classNames';

interface ButtonProps extends IButtonProps {
  /** Ikon som skal vises foran teksten på knappen */
  icon?: string;
  /** Benyttes for å definere type knapp som skal benyttes */
  type?:
    | 'primary'
    | 'primaryRounded'
    | 'primaryRoundedFilled'
    | 'warning'
    | 'secondary'
    | 'primaryLarge';
}
/**
 * @visibleName Button (Knapp)
 */
export default class Button extends React.PureComponent<ButtonProps, {}> {
  static defaultProps = {
    primary: false,
    type: 'primaryRounded',
    disabled: false,
    icon: undefined,
    onClick: undefined
  };
  render() {
    const { children, icon, className, ...props } = this.props;
    return (
      <DefaultButton
        {...props}
        className={classnames(getStandardClassNames(this.props), className)}
        iconProps={icon ? { iconName: icon } : undefined}
      >
        {children}
      </DefaultButton>
    );
  }
}
