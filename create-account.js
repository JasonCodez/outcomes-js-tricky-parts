function createAccount(pin, amount = 0) {
   let userPin = pin;
   let balance = amount;
   return {
      checkBalance: function(pin) {
         if (pin !== userPin) return "Invalid PIN.";
         return `$${balance}`;
      },
      deposit: function(pin, amount) {
         if (pin !== userPin) return "Invalid PIN.";
         balance += amount;
         return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw: function(pin, amount) {
         if (pin !== userPin) return "Invalid PIN.";
         if (amount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled."
         } else {
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
         }
      },
      changePin: function(pin, newPin) {
         if (pin !== userPin) return "Invalid PIN";
         if (pin === userPin) userPin = newPin;
         return "PIN successfully changed!";
      }
   }
}

module.exports = { createAccount };
