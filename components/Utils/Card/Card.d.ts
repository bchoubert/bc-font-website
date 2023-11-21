import React, { ReactNode, CSSProperties } from 'react';
interface CardProps {
    children: ReactNode;
    className?: string;
    isInteractive?: boolean;
    style?: CSSProperties;
}
declare const _default: React.MemoExoticComponent<({ children, className, isInteractive, style }: CardProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
