'use client'

import { useEffect } from 'react'

/**
 * Casual save-deterrent for images (screenshots, logos).
 * Blocks the right-click context menu and drag-to-save ON IMAGES ONLY, so the
 * rest of the page keeps normal right-click behaviour. This stops non-technical
 * copying only — it cannot prevent dev-tools, network-tab, or OS screenshots.
 */
export default function ImageGuard() {
  useEffect(() => {
    const isImg = (t: EventTarget | null) => (t as HTMLElement | null)?.tagName === 'IMG'
    const onCtx = (e: MouseEvent) => { if (isImg(e.target)) e.preventDefault() }
    const onDrag = (e: DragEvent) => { if (isImg(e.target)) e.preventDefault() }
    document.addEventListener('contextmenu', onCtx)
    document.addEventListener('dragstart', onDrag)
    return () => {
      document.removeEventListener('contextmenu', onCtx)
      document.removeEventListener('dragstart', onDrag)
    }
  }, [])
  return null
}
