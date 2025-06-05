import { watch, type FSWatcher } from 'chokidar'
import { FileSystem } from './file-system'

export abstract class AbstractWatcher extends FileSystem {
  protected readonly watcher: FSWatcher = watch([])
}
