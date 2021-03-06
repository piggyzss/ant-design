import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';

export interface CheckableTagProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckableTag: React.FC<CheckableTagProps> = props => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const handleClick = () => {
    const { checked, onChange } = props;
    if (onChange) {
      onChange(!checked);
    }
  };

  const { prefixCls: customizePrefixCls, className, checked, ...restProps } = props;
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-checkable-checked`]: checked,
    },
    className,
  );

  delete (restProps as any).onChange; // TypeScript cannot check delete now.
  return <span {...(restProps as any)} className={cls} onClick={handleClick} />;
};

export default CheckableTag;
