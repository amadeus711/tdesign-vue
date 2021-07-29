import _Breadcrumb from './breadcrumb';
import _BreadcrumbItem from './breadcrumb-item';
import withInstall from '../utils/withInstall';
import { TdBreadcrumbProps, TdBreadcrumbItemProps } from './type';

import './style/';

export * from './type';
export type BreadcrumbProps = TdBreadcrumbProps;
export type BreadcrumbItemProps = TdBreadcrumbItemProps;

export const BreadcrumbItem = withInstall('BreadcrumbItem', _BreadcrumbItem);
export const Breadcrumb = withInstall('Breadcrumb', _Breadcrumb);
export default Breadcrumb;
