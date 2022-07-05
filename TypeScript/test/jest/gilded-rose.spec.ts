import { Item, GildedRose } from '@/gilded-rose';

// describe('Gilded Rose', () => {
//   it('should foo', () => {
//     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toBe('fixme');
//   });
// });

describe('Sulfurus', () => {
  it('should be 80 always as it does not change in quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80)
  });
});

describe('Quality degradation once sell by date has passed', () => {
  it('should degrade twice as fast', () => {
    const gildedRose = new GildedRose([new Item('', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8)
  });
  it('should be zero as it cannot be negative', () => {
    const gildedRose = new GildedRose([new Item('', 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  });
});

describe('Quality of Aged Brie', () => {
  it('should increase rather than decrease', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie',2,3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4)
  });
  it('should not go over 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie',1,50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50)
  })
});

describe('Quality of item in given range', () => {
  it('should never never be negative', () => {
    const gildedRose = new GildedRose([new Item('',1,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
})

describe('Backstage passes', () => {
  it('should increase by two when SellIn <10 days but >5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',8,1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3)
  })
  it('quality should be zero after concert ', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',0,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
  it('shouldnt go over 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',1,49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50)
  })
})


describe('Conjured items', () => {
  it('should degrade twice as fast as normal items', () => {
    const gildedRose = new GildedRose([new Item('Conjured',1,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3)
  })
  it('should never be below zero', () => {
    const gildedRose = new GildedRose([new Item('Conjured',0,3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0)
  })
  it('should never be above 50', () => {
    const gildedRose = new GildedRose([new Item('Conjured',0,55)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50)
  })
  it('degrade four times as fast when past sell by date compared to normal items', () => {
    const gildedRose = new GildedRose([new Item('Conjured',0,40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(36)
  })
})
