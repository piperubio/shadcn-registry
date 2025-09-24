"use client";

import React, { createContext, useContext, Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SpanValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "filled";
type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

const BREAKPOINTS: BreakpointKey[] = ["base", "sm", "md", "lg", "xl", "2xl"] as const;

// Context optimizado para mejor rendimiento y tipos más estrictos
interface DescriptionContextValue {
  columnsConfig: Record<BreakpointKey, SpanValues>;
  variant: "basic" | "bordered";
  layout: "horizontal" | "vertical";
  itemCount: number;
  currentItemIndex: number;
}

const DescriptionContext = createContext<DescriptionContextValue>({
  columnsConfig: { base: 1, sm: 1, md: 2, lg: 3, xl: 3, "2xl": 3 },
  variant: "basic",
  layout: "horizontal",
  itemCount: 0,
  currentItemIndex: 0,
});

// Tipos más estrictos y claros
interface ResponsiveSpanConfig {
  base?: SpanValues;
  sm?: SpanValues;
  md?: SpanValues;
  lg?: SpanValues;
  xl?: SpanValues;
  "2xl"?: SpanValues;
}

interface DescriptionItemProps {
  label: string;
  children: ReactNode;
  className?: string;
  /**
   * Column span configuration:
   * - number (1-12): specific column span
   * - "filled": fill remaining space in current row
   * - object: responsive configuration per breakpoint
   */
  span?: SpanValues | ResponsiveSpanConfig;
}

interface DescriptionSectionProps {
  label: string;
  children: ReactNode;
  className?: string;
}

type ResponsiveColumnsConfig = ResponsiveSpanConfig;

interface DescriptionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  /** Responsive columns configuration. Default: { base: 1, md: 2, lg: 3 } */
  columns?: ResponsiveColumnsConfig;
  variant?: "basic" | "bordered";
  /** Layout direction for content */
  layout?: "horizontal" | "vertical";
}



function buildSpanClasses(span: SpanValues | ResponsiveSpanConfig, columnsConfig: Record<BreakpointKey, SpanValues>): string[] {
  const classes: string[] = [];
  const isResponsive = typeof span === "object" && span !== null;
  
  if (!isResponsive) {
    // Caso simple: span único
    if (span === "filled") {
      classes.push("col-span-full");
    } else {
      classes.push(`col-span-${span}`);
    }
    return classes;
  }

  // Caso responsivo: propagar valores por breakpoints
  let currentSpan = span.base ?? 1;
  
  BREAKPOINTS.forEach((bp, index) => {
    const responsiveSpan = span[bp] ?? currentSpan;
    
    if (index === 0) {
      // Base breakpoint
      if (responsiveSpan === "filled") {
        classes.push("col-span-full");
      } else {
        classes.push(`col-span-${responsiveSpan}`);
      }
    } else {
      // Solo agregar si cambia respecto al anterior
      if (responsiveSpan !== currentSpan) {
        if (responsiveSpan === "filled") {
          classes.push(`${bp}:col-span-full`);
        } else {
          classes.push(`${bp}:col-span-${responsiveSpan}`);
        }
      }
    }
    
    currentSpan = responsiveSpan;
  });

  return classes;
}

export function DescriptionItem({ label, children, className = "", span = 1 }: DescriptionItemProps) {
  const { columnsConfig, variant, layout, itemCount, currentItemIndex } = useContext(DescriptionContext);
  
  const spanClasses = buildSpanClasses(span, columnsConfig);

  // Lógica optimizada para diferentes variantes y layouts
  const baseClasses = cn(spanClasses, className);
  const isResponsive = typeof span === "object";
  const spanData = typeof span === "number" ? span : span === "filled" ? "filled" : undefined;
  const spanConfigData = isResponsive ? JSON.stringify(span) : undefined;

  if (variant === "bordered") {
    if (layout === "vertical") {
      return (
        <div
          className={cn(
            "grid grid-rows-2 border-b last:border-b-0",
            baseClasses
          )}
          data-span={spanData}
          data-span-config={spanConfigData}
        >
          <span className="text-sm font-medium text-muted-foreground p-4 bg-muted/30 border-b">
            {label}:
          </span>
          <span className="p-4 text-sm break-words">{children}</span>
        </div>
      );
    }
    
    return (
      <div
        className={cn(
          "grid border-b last:border-b-0 grid-cols-2",
          baseClasses
        )}
        data-span={spanData}
        data-span-config={spanConfigData}
      >
        <span className="text-sm font-medium text-muted-foreground p-4 bg-muted/30 border-r shrink-0">
          {label}:
        </span>
        <span className="p-4 text-sm break-words">{children}</span>
      </div>
    );
  }

  if (layout === "vertical") {
    return (
      <div
        className={cn(
          "grid gap-1",
          baseClasses
        )}
        data-span={spanData}
        data-span-config={spanConfigData}
      >
        <span className="text-muted-foreground text-sm font-medium">{label}:</span>
        <span className="font-medium break-words">{children}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-2",
        baseClasses
      )}
      data-span={spanData}
      data-span-config={spanConfigData}
    >
      <span className="text-muted-foreground shrink-0">{label}:</span>
      <span className="font-medium break-words">{children}</span>
    </div>
  );
}

export function DescriptionSection({
  label,
  children,
  className = "",
}: DescriptionSectionProps) {
  const { variant } = useContext(DescriptionContext);
  
  return (
    <div 
      className={cn(
        "grid border-b last:border-b-0 col-span-full",
        variant === "bordered" ? "grid-cols-1" : "",
        className
      )} 
      data-testid="description-section"
    >
      <div className="p-4 bg-muted/30 text-sm font-medium text-muted-foreground border-b">
        {label}
      </div>
      <div className="p-4 text-sm space-y-1">
        {children}
      </div>
    </div>
  );
}

// Función optimizada para construir clases grid usando template strings
function buildGridClasses(columns: ResponsiveColumnsConfig): string[] {
  const classes: string[] = [];
  let currentCols = columns.base ?? 1;
  
  // Base breakpoint
  if (currentCols !== "filled") {
    classes.push(`grid-cols-${currentCols}`);
  }
  
  // Responsive breakpoints
  BREAKPOINTS.slice(1).forEach(bp => {
    const cols = columns[bp];
    if (cols && cols !== currentCols) {
      if (cols !== "filled") {
        classes.push(`${bp}:grid-cols-${cols}`);
      }
      currentCols = cols;
    }
  });
  
  return classes;
}

// Función para normalizar configuración de columnas
function normalizeColumnsConfig(columns: ResponsiveColumnsConfig): Record<BreakpointKey, SpanValues> {
  const normalized = {} as Record<BreakpointKey, SpanValues>;
  let current: SpanValues = columns.base ?? 1;
  
  BREAKPOINTS.forEach(bp => {
    const value = columns[bp];
    if (value !== undefined) {
      current = value;
    }
    normalized[bp] = current;
  });
  
  return normalized;
}

// Función para construir clases de divisores optimizada
function buildDividerClasses(
  layout: "horizontal" | "vertical", 
  columns: ResponsiveColumnsConfig
): string {
  if (layout === "vertical") return "divide-y";
  
  // Encontrar primer breakpoint con columnas > 1
  const firstMultiCol = BREAKPOINTS.find(
    bp => columns[bp] !== undefined && columns[bp] !== 1 && columns[bp] !== "filled"
  );
  
  if (!firstMultiCol) return "divide-y";
  
  if (firstMultiCol === "base") return "divide-y divide-y-0 divide-x";
  return `divide-y ${firstMultiCol}:divide-y-0 ${firstMultiCol}:divide-x`;
}

// Función para contar elementos children válidos
function countValidChildren(children: ReactNode): number {
  return Children.count(children);
}

export function Description({
  children,
  className = "",
  columns = { base: 1, md: 2, lg: 3 },
  variant = "basic",
  layout = "horizontal",
}: DescriptionProps) {
  // Optimizaciones usando funciones especializadas
  const gridClasses = buildGridClasses(columns);
  const normalizedColumns = normalizeColumnsConfig(columns);
  const dividerClasses = buildDividerClasses(layout, columns);
  const itemCount = countValidChildren(children);
  
  // Envolver children con índices para detección de último elemento
  const childrenWithIndex = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return (
        <DescriptionContext.Provider 
          value={{ 
            columnsConfig: normalizedColumns, 
            variant, 
            layout, 
            itemCount, 
            currentItemIndex: index 
          }}
          key={index}
        >
          {child}
        </DescriptionContext.Provider>
      );
    }
    return child;
  });

  const contextValue: DescriptionContextValue = {
    columnsConfig: normalizedColumns,
    variant,
    layout,
    itemCount,
    currentItemIndex: 0
  };

  if (variant === "bordered") {
    return (
      <DescriptionContext.Provider value={contextValue}>
        <Card className="p-0 overflow-hidden">
          <div
            className={cn(
              "grid auto-rows-fr",
              gridClasses,
              dividerClasses,
              className
            )}
            data-testid="description-bordered"
          >
            {childrenWithIndex}
          </div>
        </Card>
      </DescriptionContext.Provider>
    );
  }

  return (
    <DescriptionContext.Provider value={contextValue}>
      <div
        className={cn(
          "grid gap-6 text-sm auto-rows-fr",
          gridClasses,
          className
        )}
        data-testid="description-basic"
      >
        {childrenWithIndex}
      </div>
    </DescriptionContext.Provider>
  );
}
