import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const registryPath = join(process.cwd(), 'registry', 'index.json');
    const registryData = await readFile(registryPath, 'utf-8');
    const registry = JSON.parse(registryData);

    return NextResponse.json(registry);
  } catch (error) {
    console.error('Error reading registry:', error);
    return NextResponse.json(
      { error: 'Failed to load registry' },
      { status: 500 }
    );
  }
}