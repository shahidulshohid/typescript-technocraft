{
    //access modifiers;
    class BackAccount {
       public readonly id: number;
       public name: string;
       protected _balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addDeposit (amount : number) {
            this._balance = this._balance + amount
        }
        public getBalance(){
            return this._balance;
        }
    }

    class studentAccount extends BackAccount {
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BackAccount(111, "GoribManush", 20)
    // goribManusherAccount.balance = 0
    goribManusherAccount.addDeposit(20)
    const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance)

    //
}