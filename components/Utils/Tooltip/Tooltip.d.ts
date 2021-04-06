import { FC, ReactNode } from 'react';
interface TooltipProps {
    content: ReactNode | string;
    children: ReactNode;
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
