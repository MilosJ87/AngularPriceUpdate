import { Component, OnInit } from '@angular/core';
import { KursnaLista, PriceService, ZlatneKovanice, ZlatnePoluge } from './price-service.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class AppComponent implements OnInit {
  zlatneKovanices: ZlatneKovanice[] = [];
  zlatnePoluges: ZlatnePoluge[] = [];
  currencies: KursnaLista[] = [];
  public userAuthenticated = false;

  constructor(private priceService: PriceService, private _authService: AuthService) {
    this._authService.loginChanged
      .subscribe(userAuthenticated => {
        this.userAuthenticated = userAuthenticated;
      });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this._authService.isAuthenticated()
      .then(userAuthenticated => {
        this.userAuthenticated = userAuthenticated;

        this.priceService.getKovanice().subscribe(
          (kovaniceData: ZlatneKovanice[]) => {
            console.log('Kovanice Data received:', kovaniceData);
            this.zlatneKovanices = kovaniceData;

            // Fetch ZlatnePoluge after fetching Kovanice
            this.priceService.getPoluge().subscribe(
              (polugeData: ZlatnePoluge[]) => {
                console.log('Poluge Data received:', polugeData);
                this.zlatnePoluges = polugeData;
              },
              (polugeError) => {
                console.error('Error fetching Poluge data:', polugeError);
              }
            );
          },
          (kovaniceError) => {
            console.error('Error fetching Kovanice data:', kovaniceError);
          }
        );
      });
  }
  public login = () => {
    this._authService.login();
  }
}
