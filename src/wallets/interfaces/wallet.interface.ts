export interface IRechargeWallet {
  document: string;
  cellphone: string;
  value: number;
}
export interface IGenerateToken {
  document: string;
  cellphone: string;
  amount: number;
}
export interface IConfirmPayment {
  session_id: string;
  token: string;
  amount: number;
}
