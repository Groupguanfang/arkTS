import { watch } from 'chokidar'
import { FileSystem } from './file-system'

export abstract class Watcher extends FileSystem {
  protected readonly watcher = watch([])
}
