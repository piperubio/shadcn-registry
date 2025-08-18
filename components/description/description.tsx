"use client";

import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Context para pasar el número de columnas y variante
const DescriptionContext = createContext<{ columns: number; variant: "basic" | "bordered" }>({ 
  columns: 3, 
  variant: "basic" 
});

interface DescriptionItemProps {
  label: string;
  value: ReactNode;
  className?: string;
  span?: 1 | 2 | 3;
}

interface DescriptionSectionProps {
  label: string;
  children: ReactNode;
  className?: string;
}

interface DescriptionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3;
  variant?: "basic" | "bordered";
}

export function DescriptionItem({
  label,
  value,
  className = "",
  span = 1,
}: DescriptionItemProps) {
  const { columns, variant } = useContext(DescriptionContext);

  // Generate the appropriate col-span class based on span value
  const getColSpanClass = (span: number = 1, maxColumns: number = 3) => {
    // Validar que span sea un número válido
    if (typeof span !== "number" || span <= 0 || isNaN(span)) {
      span = 1;
    }

    // Limitar el span al número máximo de columnas
    const effectiveSpan = Math.min(span, maxColumns);

    switch (effectiveSpan) {
      case 1:
        return "col-span-1";
      case 2:
        return "col-span-2";
      case 3:
        return "col-span-3";
      default:
        return "col-span-1";
    }
  };

  const colSpanClass = getColSpanClass(span, columns);

  if (variant === "bordered") {
    const isSpanning = span > 1;
    
    return (
      <div
        className={cn(
          "grid border-b last:border-b-0",
          isSpanning ? "col-span-full grid-cols-1" : "grid-cols-2",
          colSpanClass,
          className
        )}
        data-span={span}
      >
        <span className={cn(
          "text-sm font-medium text-muted-foreground",
          isSpanning 
            ? "p-4 bg-muted/30 border-b" 
            : "p-4 bg-muted/30 border-r shrink-0"
        )}>
          {label}:
        </span>
        <span className="p-4 text-sm break-words">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn("flex gap-2", colSpanClass, className)}
      data-span={span}
    >
      <span className="text-muted-foreground shrink-0">{label}:</span>
      <span className="font-medium break-words">{value}</span>
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
    <div className={cn(
      "grid border-b last:border-b-0",
      variant === "bordered" ? "col-span-full grid-cols-1" : "",
      className
    )} data-testid="description-section">
      <div className="p-4 bg-muted/30 text-sm font-medium text-muted-foreground border-b">
        {label}
      </div>
      <div className="p-4 text-sm space-y-1">
        {children}
      </div>
    </div>
  );
}

export function Description({
  title,
  children,
  className = "",
  columns = 3,
  variant = "basic",
}: DescriptionProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  if (variant === "bordered") {
    const borderedGridCols = {
      1: "grid-cols-1",
      2: "grid-cols-1 lg:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    };

    const divider =
      columns === 1
        ? "divide-y"
        : columns === 2
        ? "divide-y lg:divide-y-0 lg:divide-x"
        : "divide-y md:divide-y-0 md:divide-x lg:divide-x";

    return (
      <DescriptionContext.Provider value={{ columns, variant }}>
        <div className="">
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <Card className="p-0 overflow-hidden">
            <div
              className={cn(
                "grid",
                borderedGridCols[columns],
                divider,
                className
              )}
              data-testid="description-bordered"
            >
              {children}
            </div>
          </Card>
        </div>
      </DescriptionContext.Provider>
    );
  }

  return (
    <DescriptionContext.Provider value={{ columns, variant }}>
      <div className="">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div
          className={cn(
            "grid gap-6 text-sm",
            gridCols[columns],
            className
          )}
          data-testid="description-basic"
        >
          {children}
        </div>
      </div>
    </DescriptionContext.Provider>
  );
}
