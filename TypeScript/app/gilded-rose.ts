import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].quality <=0) {
        this.items[i].quality = 0
        continue;
      }
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = 80
        continue;
      }
      
      if(this.items[i].name == 'Aged Brie' || this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn == 0) {
          this.items[i].quality = 0
          continue;
        }
        if (this.items[i].sellIn > 10 || this.items[i].name == 'Aged Brie'){
          this.items[i].quality += 1
        } else if (this.items[i].sellIn <=10 && this.items[i].sellIn > 5){
          this.items[i].quality +=2
        } else if (this.items[i].sellIn <=5){
          this.items[i].quality += 3
        }
      } else {
        var mul_fac_conj = 1
        var mul_fac_sellIn = 1
        if (this.items[i].name == 'Conjured') mul_fac_conj = 2
        if (this.items[i].sellIn == 0) mul_fac_sellIn = 2
        this.items[i].quality -= mul_fac_conj*mul_fac_sellIn*1
      }
      if (this.items[i].quality < 0) this.items[i].quality = 0
      if (this.items[i].quality >= 50) this.items[i].quality = 50

    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    }

    return this.items;
  }
}
