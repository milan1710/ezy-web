import Button from './ui/Button'
import { openLeadForm } from '../utils/leadModal'

/**
 * Button that opens the lead form modal instead of navigating away.
 * Renders through the shared `Button` primitive, so it supports every variant,
 * size and icon the rest of the site uses.
 */
export default function LeadFormTrigger({
  children = 'Fill Form',
  service = '',
  source = 'cta',
  ...buttonProps
}) {
  return (
    <Button type="button" onClick={() => openLeadForm({ service, source })} {...buttonProps}>
      {children}
    </Button>
  )
}
