import TableBody from '../TableBody';
import TableData from '../TableData';
import TableRow from '../TableRow';

const DataTableBody = ({ columns, data, onRowClick, hoverEffect }) => {
  const renderCell = (rowData, column, rowIndex) => {
    const cellData = rowData[column.key];
    if (column.content) {
      return column.content(cellData, rowData, rowIndex);
    }
    return cellData;
  };

  const handleRowClick = (data) => {
    onRowClick && onRowClick(data);
  };

  return (
    <TableBody>
      {data?.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
            onClick={() => handleRowClick(row)}
            className={onRowClick ? 'cursor-pointer' : ''}
            hoverEffect={hoverEffect}
          >
            {columns?.map((column, columnIndex) => (
              <TableData key={columnIndex}>
                {renderCell(row, column, rowIndex)}
              </TableData>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default DataTableBody;
