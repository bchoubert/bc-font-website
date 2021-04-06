import React, { ReactNode, CSSProperties } from 'react';
interface CardProps {
    children: ReactNode;
    className?: string;
    isInteractive?: boolean;
    style?: CSSProperties;
}
declare const _default: React.MemoExoticComponent<({ children, className, isInteractive, style }: CardProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>>;
export default _default;
