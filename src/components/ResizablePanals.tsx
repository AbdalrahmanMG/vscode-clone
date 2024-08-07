import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  rightPanel: ReactNode;
  leftPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizablePanals = ({ defaultLayout = [33, 67], rightPanel, leftPanel, showLeftPanel }: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId={'condition'}>
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible={true}
           collapsedSize={0} minSize={10}>{leftPanel}</Panel>
        </>
      )}
      <PanelResizeHandle className="border-r-2 border-[#c9c9c983]" />
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanals;
