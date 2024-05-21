export interface ICardData {
  imagePath?: string;
  background?: string;
  coinPath: string;
  emptyCoinPath: string;
  coinCount: number;
  emptyCoinCount: number;
  icon: string | null,
  prizeAmount: string | null,
  text: string;
  hiddenCredentials?: boolean;
}