import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  test: {
    // @ts-ignore
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
