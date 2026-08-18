import { useState, useRef } from 'react';
import type { RefObject } from 'react';
import { Octagon, Timer } from 'lucide-react';
import { WorkflowStep } from '@react-nx-demo/workflow-models';

export interface StepIndicatorProps {
  step: WorkflowStep;
}
export function StepIndicator({ step }: StepIndicatorProps ) {
  const [showBelowType, setShowBelowType] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const closingPopoverRef = useRef<HTMLDivElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const decisionPopoverRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);
  const timerPopoverRef = useRef<HTMLDivElement>(null);

  const findClippingContainer = (element: HTMLElement): DOMRect => {
    let current: HTMLElement | null = element.parentElement;

    while (current) {
      const style = window.getComputedStyle(current);
      const overflowY = style.overflowY;
      const overflow = style.overflow;
      const isClipping =
        overflowY === 'hidden' ||
        overflowY === 'auto' ||
        overflowY === 'scroll' ||
        overflow === 'hidden' ||
        overflow === 'auto' ||
        overflow === 'scroll';

      if (isClipping) {
        return current.getBoundingClientRect();
      }

      current = current.parentElement;
    }

    return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const handleMouseEnter = (
    type: string,
    triggerRef: RefObject<HTMLDivElement | null>,
    popoverRef: RefObject<HTMLDivElement | null>,
  ) => {
    if (!triggerRef.current || !popoverRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverHeight = popoverRef.current.getBoundingClientRect().height;
    const containerRect = findClippingContainer(triggerRef.current);
    const arrowGap = 14.4;
    const neededSpace = popoverHeight + arrowGap;
    const spaceAbove = triggerRect.top - containerRect.top;
    const spaceBelow = containerRect.bottom - triggerRect.bottom;

    const shouldShowBelow =
      spaceAbove < neededSpace && spaceBelow >= neededSpace;

    setShowBelowType(shouldShowBelow ? type : null);
    setActiveType(type);
  };

  const handleMouseLeave = () => {
    // Only hide the popover — keep showBelowType so the position stays
    // stable during the opacity fade-out transition. It will be
    // recalculated on the next mouseenter.
    setActiveType(null);
  };

  const getPopoverClasses = (type: string) => {
    const baseClasses =
      'absolute left-1/2 translate-x-[-50%] transition-opacity z-9999';
    const visibilityClasses =
      activeType === type
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none';
    const positionClass = showBelowType === type ? 'top-10' : '-top-11.75';
    return `${baseClasses} ${visibilityClasses} ${positionClass}`;
  };

  const getArrowClasses = (type: string) => {
    const baseClasses =
      'absolute left-1/2 translate-x-[-50%] w-4 h-[14.4px] flex items-center justify-center';
    if (showBelowType === type) {
      return `${baseClasses} top-[-9.2px] rotate-180`;
    }
    return `${baseClasses} bottom-[-9.2px]`;
  };  
  if (
    !step.decisionRequired &&
    !step.closingStep &&
    step.stepDuration === 0
  ) {
    return null;
  }

  return (
    <div className="absolute -top-4.5 left-1/2 z-10 flex translate-x-[-50%] gap-4">
      {step.closingStep && (
        <div
          ref={closingRef}
          className="relative z-10"
          onMouseEnter={() =>
            handleMouseEnter('closing', closingRef, closingPopoverRef)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex size-7 items-center justify-center">
            <div className="absolute size-8.5 rounded-full bg-[#ea083e]" />
            <div className="relative z-10 flex items-center justify-center text-card">
              <Octagon className='h-5 w-5 text-card stroke-3' />
            </div>
          </div>
          {/* Popover on hover */}
          <div ref={closingPopoverRef} className={getPopoverClasses('closing')}>
            <div className="relative w-auto min-w-30 rounded-md bg-[#2b2b2b] px-3 py-2.5 dark:bg-color-active-text">
              <p className="text-center text-sm leading-[normal] font-normal whitespace-nowrap text-card dark:text-[#2b2b2b]">
                Closing Step
              </p>
              {/* Arrow pointing down or up */}
              <div className={getArrowClasses('closing')}>
                <div className="h-0 w-0 border-t-[14.4px] border-r-8 border-l-8 border-t-[#2b2b2b] border-r-transparent border-l-transparent dark:border-t-color-active-text" />
              </div>
            </div>
          </div>
        </div>
      )}
      {step.decisionRequired && (
        <div
          ref={decisionRef}
          className="relative z-10"
          onMouseEnter={() =>
            handleMouseEnter('decision', decisionRef, decisionPopoverRef)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex size-7 items-center justify-center">
            <div className="absolute size-6.75 rotate-45">
              <div className="size-full rounded-sm bg-[#0074e0]" />
            </div>
            <div className="relative z-10 flex items-center justify-center text-card">
              <span className="text-[16px] leading-none font-bold text-card dark:text-card-foreground">
                ?
              </span>
            </div>
          </div>
          {/* Popover on hover */}
          <div
            ref={decisionPopoverRef}
            className={getPopoverClasses('decision')}
          >
            <div className="relative w-auto min-w-30 rounded-md bg-[#2b2b2b] px-3 py-2.5 dark:bg-color-active-text">
              <p className="text-center text-sm leading-[normal] font-normal whitespace-nowrap text-card dark:text-[#2b2b2b]">
                Decision Required
              </p>
              {/* Arrow pointing down or up */}
              <div className={getArrowClasses('decision')}>
                <div className="h-0 w-0 border-t-[14.4px] border-r-8 border-l-8 border-t-[#2b2b2b] border-r-transparent border-l-transparent dark:border-t-color-active-text" />
              </div>
            </div>
          </div>
        </div>
      )}
      {step.stepDuration !== 0 && (
        <div
          ref={timerRef}
          className="relative z-10"
          onMouseEnter={() =>
            handleMouseEnter('timer', timerRef, timerPopoverRef)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex size-7 items-center justify-center">
            <div className="absolute size-8.5 rounded-full bg-[#FF9F10]" />
            <div className="relative z-10 flex items-center justify-center text-card dark:text-card-foreground">
              <Timer className='h-5 w-5 stroke-3' />
            </div>
          </div>
          {/* Popover on hover */}
          <div ref={timerPopoverRef} className={getPopoverClasses('timer')}>
            <div className="relative w-auto min-w-30 rounded-md bg-[#2b2b2b] px-3 py-2.5 dark:bg-color-active-text">
              <p className="text-center text-sm leading-[normal] font-normal whitespace-nowrap text-card dark:text-[#2b2b2b]">
                Advances to next step after{' '}
                {step.stepDuration} day
                {step.stepDuration !== 1 ? 's' : ''}
              </p>
              {/* Arrow pointing down or up */}
              <div className={getArrowClasses('timer')}>
                <div className="h-0 w-0 border-t-[14.4px] border-r-8 border-l-8 border-t-[#2b2b2b] border-r-transparent border-l-transparent dark:border-t-color-active-text" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepIndicator;
