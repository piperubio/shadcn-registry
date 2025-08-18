import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  try {
    const { name } = params;
    const componentPath = join(process.cwd(), 'registry', 'components', `${name}.json`);
    
    const componentData = await readFile(componentPath, 'utf-8');
    const component = JSON.parse(componentData);

    return NextResponse.json(component);
  } catch (error) {
    console.error(`Error reading component ${params.name}:`, error);
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }
}