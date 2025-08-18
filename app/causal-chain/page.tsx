'use client'

import { Layout } from '@/components/Layout/Layout'
import { CausalChainExplorer } from '@/components/CausalChain/CausalChainExplorer'

export default function CausalChainPage() {
  return (
    <Layout>
      <CausalChainExplorer />
    </Layout>
  )
}