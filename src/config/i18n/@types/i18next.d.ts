// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { resources, defaultNS } from '../setup'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['pt']
  }
}
