import { Test } from '@nestjs/testing';
import { ZookeeperService } from './zookeeper.service';
import { ZOOKEEPER_CONFIG_OPTIONS } from './zookeeper.constant';
import { ZookeeperModuleOptions } from './zookeeper-module.options';

describe('ZookeeperService', () => {
  let service: ZookeeperService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: ZOOKEEPER_CONFIG_OPTIONS,
          useValue: {
            host: '127.0.0.1:2181',
          } as ZookeeperModuleOptions,
        },
        ZookeeperService,
      ],
    }).compile();

    service = module.get(ZookeeperService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should fail connect zookeeper', async () => {
    expect(await service.connect()).toThrow();
  });
});
