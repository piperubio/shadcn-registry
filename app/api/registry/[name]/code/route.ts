import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  try {
    const { name } = params;
    
    // First, get the component metadata to know which files to read
    const componentPath = join(process.cwd(), 'registry', 'components', `${name}.json`);
    const componentData = await readFile(componentPath, 'utf-8');
    const component = JSON.parse(componentData);

    // Read all component files
    const files = await Promise.all(
      component.files.map(async (file: any) => {
        const filePath = join(process.cwd(), file.path);
        const content = await readFile(filePath, 'utf-8');
        
        return {
          name: file.name,
          path: file.path,
          type: file.type,
          target: file.target,
          content
        };
      })
    );

    return NextResponse.json({
      name: component.name,
      files,
      dependencies: component.dependencies,
      registryDependencies: component.registryDependencies || []
    });
  } catch (error) {
    console.error(`Error reading component code for ${params.name}:`, error);
    return NextResponse.json(
      { error: 'Component source code not found' },
      { status: 404 }
    );
  }
}