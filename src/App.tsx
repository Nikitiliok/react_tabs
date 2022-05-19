import React, { useState } from 'react';
import Tabs from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <Tabs
        props={tabs}
        selected={selectedTab.id}
        newSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
