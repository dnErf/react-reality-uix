import React from 'react';

import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';

export default ({ selected }) => {
  let TabContent;
  if (selected === 'tab-1') {
    TabContent = <TabContent1 />;
  } else if (selected === 'tab-2') {
    TabContent = <TabContent2 />;
  } else {
    TabContent = <TabContent3 />;
  }
  return (
    <section className="tab-content">
      <div className="container">
        { TabContent }
      </div>
    </section>
  )
}