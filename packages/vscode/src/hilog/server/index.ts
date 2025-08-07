import { Autowired, Service } from 'unioc'
import { HiLogProcessService } from './hilog.process'

@Service
export class HiLogServerService {
  @Autowired
  readonly hiLogProcessService: HiLogProcessService
}
