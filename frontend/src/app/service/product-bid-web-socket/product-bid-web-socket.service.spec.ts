import { TestBed } from '@angular/core/testing';

import { ProductBidWebSocketService } from './product-bid-web-socket.service';

describe('ProductBidWebSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBidWebSocketService = TestBed.get(ProductBidWebSocketService);
    expect(service).toBeTruthy();
  });
});
