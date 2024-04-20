let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    var enterName = document.getElementById("enterName").Value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 6000) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalnce").innerHTML) - enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerText = finalAmount;
        alert('Successful Transaction')

        // transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode('$${enter amount} is sent to recipent on ${Date()}.');
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction history body");
        element.insertBefore(createPTag, element.firstChild);
    }

}