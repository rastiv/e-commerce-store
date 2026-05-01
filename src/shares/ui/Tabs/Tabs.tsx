import { createContext, useContext, useState, type ReactNode } from "react";

import styles from "./Tabs.module.scss";

import { cn } from "@/shares/libs";
import { Button } from "@/shares/ui";

type TabsContextType = {
  activeTab: string;
  handleChangeActiveTab: (tab: string) => void;
};

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
  onChange?: (tab: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const Tabs = ({ defaultValue, children, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
    if (onChange) {
      onChange(tab);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChangeActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

type TabsList = {
  children: ReactNode;
};

const TabsList = ({ children }: TabsList) => {
  return <div className={styles.list}>{children}</div>;
};

type TabTriggerProps = {
  value: string;
  children: ReactNode;
};

const TabTrigger = ({ value, children }: TabTriggerProps) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabTrigger must be used within a Tabs component");
  }

  const isActive = context.activeTab === value;

  const handleClick = () => {
    context.handleChangeActiveTab(value);
  };

  return (
    <Button
      theme={isActive ? "outline" : "tertiary"}
      form="rounded"
      onClick={handleClick}
      className={cn(styles.trigger, { [styles.active]: isActive })}
    >
      {children}
    </Button>
  );
};

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

const TabsContent = ({ value, children }: TabsContentProps) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const isActive = context.activeTab === value;

  if (!isActive) {
    return null;
  }

  return <div className={cn(styles.content)}>{children}</div>;
};

Tabs.List = TabsList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabsContent;

export default Tabs;
