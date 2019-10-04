import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize,
  IPivotProps
} from 'office-ui-fabric-react/lib-commonjs/Pivot';

import { getClassNames } from './Tabs.classNames';

interface TabsProps extends IPivotProps {}
/**
 * @visibleName Tabs (Arkfane)
 */
export default class Tabs extends React.PureComponent<TabsProps, {}> {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <Pivot
        linkFormat={PivotLinkFormat.tabs}
        linkSize={PivotLinkSize.large}
        {...props}
        className={classnames(getClassNames(this.props), className)}
      >
        {React.Children.map(this.props.children, child => (
          <PivotItem {...child.props} />
        ))}
      </Pivot>
    );
  }
}
