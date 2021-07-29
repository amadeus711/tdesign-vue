import _Notification from './notification';
import withInstall from '../utils/withInstall';
import { TdNotificationProps } from './type';

import './style/';

export * from './type';
export * from './plugin';
export type NotificationProps = TdNotificationProps;

export const Notification = withInstall('Notification', _Notification);
export default Notification;
