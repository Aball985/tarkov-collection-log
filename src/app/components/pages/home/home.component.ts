import { Component, OnInit } from '@angular/core';
import { TarkovApiService } from '../../../services/tarkov-api.service';
import { ItemCardComponent } from '../../item-card/item-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ItemCardComponent, FormsModule],
})
export class HomeComponent implements OnInit {
  itemSearchInput: string = '';
  filteredItems: any[] = [];
  itemList1: any[] = [];
  itemList2: any[] = [];
  itemList3: any[] = [];

  constructor(private tarkovService: TarkovApiService) {}

  ngOnInit(): void {
    this.getBarterItem();
  }

  getBarterItem(): void {
    this.tarkovService.getBarterItem().subscribe((res) => {
      this.itemList1 = res.data.items;
      this.filteredItems = this.itemList1;
    });
  }

  filterResults() {
    this.filteredItems = this.itemList1.filter((item) =>
      item.shortName.toLowerCase().includes(this.itemSearchInput.toLowerCase())
    );

    if (!this.filteredItems.length) {
      this.filteredItems = this.itemList1;
    }
  }
}
