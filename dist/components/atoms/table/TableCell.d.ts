import { FC } from 'react';
import { TableCellProps as MUITableCellProps } from '@material-ui/core';
export interface TableCellProps extends MUITableCellProps {
}
declare const TableCell: FC<TableCellProps>;
export default TableCell;
