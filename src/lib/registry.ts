import fs from "fs/promises";
import path from "path";

export type RegistryFileRef = {
  path: string;
  type?: string;
  target?: string;
};

export type RegistryItem = {
  name: string;
  title?: string;
  description?: string;
  type?: string;
  meta?: Record<string, any>;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFileRef[];
  [k: string]: any;
};

export type Registry = {
  $schema?: string;
  name?: string;
  homepage?: string;
  items?: RegistryItem[];
  [k: string]: any;
};

let cached: Registry | null = null;

async function readRegistryJson(): Promise<Registry> {
  if (cached) return cached;
  const p = path.join(process.cwd(), "registry.json");
  const raw = await fs.readFile(p, "utf-8");
  const parsed = JSON.parse(raw) as Registry;
  cached = parsed;
  return parsed;
}

/** Read a registry item by name from the root `registry.json` file. */
export async function readRegistryItem(name: string): Promise<RegistryItem> {
  const registry = await readRegistryJson();
  const items = registry.items ?? [];
  const found = items.find((i) => i.name === name);
  if (!found) throw new Error(`Registry item not found: ${name}`);
  return found;
}

export async function readAllItems(): Promise<RegistryItem[]> {
  const registry = await readRegistryJson();
  return registry.items ?? [];
}

export async function clearCache(): Promise<void> {
  cached = null;
}
