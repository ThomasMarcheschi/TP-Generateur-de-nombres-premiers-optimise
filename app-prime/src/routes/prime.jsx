import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prime')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prime"!</div>
}
