# Next.js 15 App Router Error with Simple Function Component

This repository demonstrates a seemingly simple issue with the Next.js 15 App Router.  A basic functional component throws an unexpected error when used within the app directory.  The solution provides a workaround to resolve this issue.

## Bug

A standard functional component, as shown in `bug.js`, fails to render correctly in the Next.js 15 app directory.  This is unexpected behavior, as the component itself is very simple and should render without error.

## Solution

The solution, found in `bugSolution.js`, showcases a potential fix for this error. By making minimal change in the component structure, this fixes the unexpected error.