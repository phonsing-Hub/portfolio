import React from 'react'
import CodeComparison from "@/components/ui/code-comparison";


const afterCode = 
`import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@app/(auth)/auth/_middleware';
import { team } from '@app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares);

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

function page() {
  return (
    <CodeComparison
      code={afterCode}
      language="typescript"
      filename="middleware.ts"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  )
}

export default page