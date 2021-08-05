import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars: React.FC<any> = (props) => (
  <Scrollbars
    {...props}
    autoHide
    renderTrackHorizontal={(props: any) => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
  />
);

export default CustomScrollbars;
