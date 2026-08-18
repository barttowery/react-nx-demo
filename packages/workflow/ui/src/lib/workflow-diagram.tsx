import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  NodeTypes,
  ColorMode,
  ReactFlowInstance,
  Node,
} from '@xyflow/react';
import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import '@xyflow/react/dist/style.css';
import { WorkflowData } from '@react-nx-demo/workflow-models';
import { AngularEdge } from './flow-shapes/angular-edge';
import { LoopbackStubNode } from './flow-shapes/loopback-stub-node';
import { WorkflowStepNode } from './flow-shapes/workflow-step-node';
import { createNodesEdges } from './workflow-utils/create-nodes-edges';
import { createWorkflowHierarchy } from './workflow-utils/create-workflow-hierarchy';
import { layoutWorkflowNodes } from './workflow-utils/layout-workflow-nodes';

export interface WorkflowDiagramProps {
  workflow: WorkflowData,
  onReactFlowInit?: (instance: ReactFlowInstance) => void;
  onWrapperRefReady?: (element: HTMLDivElement | null) => void;
}
export function WorkflowDiagram({
  workflow,
  onReactFlowInit,
  onWrapperRefReady,
}: WorkflowDiagramProps) {
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const handleReactFlowInit = useCallback(
    (instance: ReactFlowInstance) => {
      setReactFlowInstance(instance);
      onReactFlowInit?.(instance);
    },
    [onReactFlowInit],
  );
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    try {
      const workflowStartNode = createWorkflowHierarchy(
        workflow.steps,
      );
      if (!workflowStartNode) {
        return { nodes: [], edges: [] };
      }
      const layoutedWorkflow = layoutWorkflowNodes(workflowStartNode);
      return createNodesEdges(layoutedWorkflow);
    } catch (error) {
      console.error('Error creating workflow diagram:', error);
      return { nodes: [], edges: [] };
    }
  }, [workflow.steps]);
  const wrapperDivRef = useRef<HTMLDivElement>(null);
  const wrapperRefCallback = useCallback(
    (node: HTMLDivElement | null) => {
      (wrapperDivRef as React.MutableRefObject<HTMLDivElement | null>).current =
        node;
      onWrapperRefReady?.(node);
    },
    [onWrapperRefReady],
  );

  useLayoutEffect(() => {
    const element = wrapperDivRef.current;
    if (!element || !reactFlowInstance) return;

    const observer = new ResizeObserver(() => {
      reactFlowInstance.fitView();
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [wrapperDivRef, reactFlowInstance]);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Reset state when workflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    reactFlowInstance?.fitView();
  }, [initialNodes, initialEdges, reactFlowInstance]);

  const onNodesChange: OnNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange: OnEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect: OnConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onNodeMouseEnter = useCallback(
    (event: React.MouseEvent, node: Node) => {
      // Increase the zIndex on hover
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return { ...n, style: { ...n.style, zIndex: 1000 } };
          }
          return n;
        }),
      );
    },
    [setNodes],
  );

  const onNodeMouseLeave = useCallback(
    (event: React.MouseEvent, node: Node) => {
      // Reset the zIndex when the mouse leaves
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return { ...n, style: { ...n.style, zIndex: 10 } }; // Reset to original zIndex
          }
          return n;
        }),
      );
    },
    [setNodes],
  );

  const nodeTypes: NodeTypes = {
    workflowStepNode: WorkflowStepNode,
    loopbackStubNode: LoopbackStubNode,
  };
  const darkModeSetting = document.documentElement.classList.contains('dark')
    ? { colorMode: 'dark' as ColorMode }
    : {};
  return (
    <div className="h-full w-full" ref={wrapperRefCallback}>
      {nodes.length === 0 && edges.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          Error displaying workflow.
        </div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={handleReactFlowInit}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={{
            angular: AngularEdge,
          }}
          defaultEdgeOptions={{
            type: 'angular',
          }}
          connectionLineStyle={{ strokeWidth: 2 }}
          fitViewOptions={{
            padding: 0.2,
            includeHiddenNodes: false,
          }}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          panOnDrag={true}
          zoomOnScroll={true}
          {...darkModeSetting}
          className=""
        >
          <Controls showInteractive={false} />
          {/* <MiniMap /> */}
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      )}
    </div>
  );
}

export default WorkflowDiagram;
