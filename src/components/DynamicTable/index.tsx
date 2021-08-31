/* eslint-disable */
import { Card, Col, Row, Table, TableProps } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useCallback } from 'react';

import DynamicColumnSettings from './DynamicColumnSettings';

interface DynamicTableProps extends TableProps<any> {
  className?: string;
  primaryTitle?: string;
  actions?: React.ReactNode;
  rightActionCtn?: any;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  children,
  className: pageClassName,
  primaryTitle,
  columns,
  rightActionCtn,
  actions,
  ...rest
}) => {
  const [displayColumns, setDisplayColumns] = useState<any[]>(columns || []);
  const primaryClsName = classNames('kdr-dynamic-table', pageClassName);

  const onDisplayColumnChange = useCallback(
    (keys: string[]) => {
      const updatedDisplayColumns = columns?.filter((c) =>
        keys.some((k) => k === c.key)
      );

      setDisplayColumns(updatedDisplayColumns || []);
    },
    [columns]
  );

  return (
    <Card
      className={primaryClsName}
      title={
        <Row>
          <Col xs={24} md={16} lg={18}>
            <h3>{primaryTitle}</h3>
          </Col>
          <Col xs={24} md={8} lg={6}>
            <div className="kdr-dyn-actions kdr-d-flex kdr-align-items-center kdr-justify-content-end kdr-w-100 kdr-flex-1">
              {actions && <div className="kdr-mr-4 kdr-w-100">{actions}</div>}
              { rightActionCtn && rightActionCtn() }
              <DynamicColumnSettings
                columns={columns}
                onSelectedChange={onDisplayColumnChange}
              ></DynamicColumnSettings>
            </div>
          </Col>
        </Row>
      }
    >
      <Table columns={displayColumns} {...rest} />
    </Card>
  );
};

export default DynamicTable;
