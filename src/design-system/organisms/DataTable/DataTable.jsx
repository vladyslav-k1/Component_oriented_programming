import { cx } from '../../utils/cx';
import utilities from '../../styles/utilities.module.css';
import styles from './DataTable.module.css';

function getAriaSort(column, sort) {
  if (!column.sortable) return undefined;
  if (!sort || sort.key !== column.key) return 'none';
  return sort.direction === 'asc' ? 'ascending' : 'descending';
}

function SortIndicator({ active, direction }) {
  if (!active) {
    return <span aria-hidden="true" className={styles.indicatorIdle}>↕</span>;
  }
  return <span aria-hidden="true">{direction === 'asc' ? '▲' : '▼'}</span>;
}

/**
 * Таблиця даних із сортуванням і клікабельними рядками.
 * @param {{
 *   columns: {
 *     key: string,
 *     header: React.ReactNode,
 *     sortable?: boolean,
 *     align?: 'start' | 'center' | 'end',
 *     width?: 'auto' | 'icon',
 *     render?: (row: any) => React.ReactNode
 *   }[],
 *   rows: any[],
 *   getRowKey: (row: any) => string,
 *   sort?: { key: string, direction: 'asc' | 'desc' },
 *   onSortChange?: (key: string) => void,
 *   onRowClick?: (row: any) => void,
 *   selectedRowKey?: string | null,
 *   maxHeight?: 'sm' | 'md' | 'lg',
 *   caption?: string,
 *   emptyMessage?: string
 * }} props
 */
function DataTable({
  columns,
  rows,
  getRowKey,
  sort,
  onSortChange,
  onRowClick,
  selectedRowKey,
  maxHeight = 'md',
  caption,
  emptyMessage = 'Немає даних',
}) {
  const isInteractive = Boolean(onRowClick);

  const cellClass = (column) =>
    cx(styles[column.align ?? 'start'], column.width === 'icon' && styles.iconColumn);

  return (
    <div className={cx(styles.wrapper, styles[`height-${maxHeight}`])}>
      <table className={styles.table}>
        {caption && <caption className={utilities.srOnly}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                aria-sort={getAriaSort(column, sort)}
                className={cx(styles.headerCell, cellClass(column))}
              >
                {column.sortable && onSortChange ? (
                  <button
                    type="button"
                    className={styles.sortButton}
                    onClick={() => onSortChange(column.key)}
                  >
                    {column.header}
                    <SortIndicator active={sort?.key === column.key} direction={sort?.direction} />
                  </button>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.empty}>{emptyMessage}</td>
            </tr>
          ) : (
            rows.map((row) => {
              const rowKey = getRowKey(row);
              return (
                <tr
                  key={rowKey}
                  className={cx(
                    isInteractive && styles.interactive,
                    rowKey === selectedRowKey && styles.selected,
                  )}
                  tabIndex={isInteractive ? 0 : undefined}
                  onClick={isInteractive ? () => onRowClick(row) : undefined}
                  onKeyDown={
                    isInteractive
                      ? (event) => {
                          if (event.key === 'Enter' && event.target === event.currentTarget) {
                            onRowClick(row);
                          }
                        }
                      : undefined
                  }
                >
                  {columns.map((column) => (
                    <td key={column.key} className={cx(styles.cell, cellClass(column))}>
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
