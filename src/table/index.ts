import _BaseTable from './base-table/index';
import _PrimaryTable from './primary-table/index';
import mapProps from '../utils/map-props';
import withInstall from '../utils/withInstall';
import { TdBaseTableProps, TdPrimaryTableProps } from './type';

import './style/';

const TPrimaryTable = mapProps([
  {
    name: 'expandedRowKeys',
    event: ['expand-change', 'update:expandedRowKeys'],
  },
  {
    name: 'selectedRowKeys',
    event: ['select-change', 'update:selectedRowKeys'],
  },
  {
    name: 'sort',
    event: ['sort-change', 'update:sort'],
  },
  {
    name: 'filterValue',
    event: ['filter-change', 'update:filterValue'],
  },
])(_PrimaryTable);

export type BaseTableProps = TdBaseTableProps;
export type PrimaryTableProps = TdPrimaryTableProps;
export * from './type';

export const BaseTable = withInstall('BaseTable', _BaseTable);
export const PrimaryTable = withInstall('PrimaryTable', TPrimaryTable);
export const Table = withInstall('Table', TPrimaryTable);

export default Table;
