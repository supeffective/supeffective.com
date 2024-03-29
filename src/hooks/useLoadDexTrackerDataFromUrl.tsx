import useDexTrackerStore from '@/stores/useDexTrackerStore'
import { useRouterStore } from '@/stores/useRouterStore'
import { getFullDexId } from '@/stores/utils'
import { useEffect } from 'react'

export type DexTrackerRouteParams = {
  gameId?: string
  dexId?: string
}

export default function useLoadDexTrackerDataFromUrl(): void {
  const [params, route] = useRouterStore((store) => [store.params as DexTrackerRouteParams, store.route])
  const [setDex, unsetDex] = useDexTrackerStore((store) => [store.setCurrentDex, store.unsetCurrentDex])

  // biome-ignore lint/correctness/useExhaustiveDependencies: setGame, setDex should not be dependencies
  useEffect(() => {
    if (params.dexId && params.gameId) {
      const fullDexId = getFullDexId(params.gameId, params.dexId)
      if (fullDexId) {
        setDex(fullDexId)
      } else {
        unsetDex()
      }
    } else {
      // console.log('useLoadDexTrackerDataFromUrl: unsetting dex')
      unsetDex()
    }
  }, [params, route?.hashPath])
}
