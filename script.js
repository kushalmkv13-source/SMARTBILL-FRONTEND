const tbody = document.getElementById("productBody");

function addRow() {

const row = document.createElement("tr");

row.innerHTML = `

<td>
<input type="text"
class="form-control product-name"
placeholder="Enter Product">
</td>

<td>
<input type="number"
class="form-control qty"
value="1"
min="1">
</td>

<td>
<input type="number"
class="form-control price"
value="0"
min="0">
</td>

<td>

<select class="form-select gst">

<option value="0">0%</option>
<option value="5">5%</option>
<option value="12">12%</option>
<option value="18" selected>18%</option>
<option value="28">28%</option>

</select>

</td>

<td class="lineTotal">
₹0.00
</td>

<td>

<button class="btn btn-danger btn-sm removeBtn">

<i class="bi bi-trash"></i>

</button>

</td>

`;

tbody.appendChild(row);

attachEvents(row);

calculateTotals();

}
function attachEvents(row){

row.querySelectorAll("input,select").forEach(input=>{

input.addEventListener("input",calculateTotals);

});

}
function calculateTotals(){

let subtotal=0;

let gstTotal=0;

document.querySelectorAll("#productBody tr").forEach(row=>{

const qty=parseFloat(row.querySelector(".qty").value)||0;

const price=parseFloat(row.querySelector(".price").value)||0;

const gst=parseFloat(row.querySelector(".gst").value)||0;

const amount=qty*price;

const gstAmount=(amount*gst)/100;

const total=amount+gstAmount;

row.querySelector(".lineTotal").innerHTML="₹"+total.toFixed(2);

subtotal+=amount;

gstTotal+=gstAmount;

});

document.getElementById("subtotal").innerHTML="₹"+subtotal.toFixed(2);

document.getElementById("gstTotal").innerHTML="₹"+gstTotal.toFixed(2);

document.getElementById("grandTotal").innerHTML="₹"+(subtotal+gstTotal).toFixed(2);

}
document.addEventListener("click",function(e){

if(e.target.closest(".removeBtn")){

const rows=document.querySelectorAll("#productBody tr");

if(rows.length>1){

e.target.closest("tr").remove();

calculateTotals();

}

}

});
document.querySelectorAll("#productBody tr").forEach(row=>{

attachEvents(row);

});

calculateTotals();

const invoiceNo =
"INV-" +
new Date().getFullYear() +
"-" +
Math.floor(100000 + Math.random() * 900000);

updatePaymentFields();

document.getElementById("paymentMethod")
.addEventListener("change",updatePaymentFields);

document.getElementById("invoiceNumber").value = invoiceNo;
function showPreview(){


document.getElementById("previewCompany").innerText =
document.getElementById("companyName").value;
document.getElementById("previewGST").innerText =
document.getElementById("companyGST").value;

document.getElementById("previewPhone").innerText =
document.getElementById("companyPhone").value;

document.getElementById("previewEmail").innerText =
document.getElementById("companyEmail").value;


document.getElementById("previewAddress").innerText =
document.getElementById("companyAddress").value;
document.getElementById("previewTerms").innerHTML =
document.getElementById("invoiceTerms").value.replace(/\n/g,"<br>");
document.getElementById("previewGST").innerText =
document.getElementById("companyGST").value;




document.getElementById("previewCustomer").innerText =
document.getElementById("customerName").value;
document.getElementById("previewCustomerGST").innerText =
document.getElementById("customerGST").value;

document.getElementById("previewCustomerMobile").innerText =
document.getElementById("customerMobile").value;

document.getElementById("previewCustomerEmail").innerText =
document.getElementById("customerEmail").value;

document.getElementById("previewCustomerAddress").innerText =
document.getElementById("customerAddress").value;

document.getElementById("previewDueDate").innerText =
document.getElementById("dueDate").value;

document.getElementById("previewStatus").innerText =
document.getElementById("invoiceStatus").value;

document.getElementById("previewPayment").innerText =
document.getElementById("paymentMethod").value;
const upi=document.getElementById("upiId");

if(upi){

document.getElementById("previewUPI").innerText=upi.value;

}
const bank=document.getElementById("bankName");

if(bank){

document.getElementById("previewBank").innerText=bank.value;

}

const account=document.getElementById("accountNumber");

if(account){

document.getElementById("previewAccount").innerText=account.value;

}

const ifsc=document.getElementById("ifsc");

if(ifsc){

document.getElementById("previewIFSC").innerText=ifsc.value;

}


const payment =
document.getElementById("paymentMethod").value;

document.getElementById("paymentSection").style.display="block";

document.getElementById("upiRow").style.display="none";
document.getElementById("bankRow").style.display="none";
document.getElementById("accountRow").style.display="none";
document.getElementById("ifscRow").style.display="none";

if(payment==="Cash"){

document.getElementById("paymentSection").style.display="none";

}

else if(payment==="UPI"){

document.getElementById("upiRow").style.display="";

}

else if(payment==="Net Banking"){

document.getElementById("bankRow").style.display="";
document.getElementById("accountRow").style.display="";
document.getElementById("ifscRow").style.display="";

}
else if(payment==="Card"){

document.getElementById("paymentSection").style.display="none";

}
document.getElementById("previewInvoice").innerText =
document.getElementById("invoiceNumber").value;

const qr = document.getElementById("qrcode");

if(qr){

    qr.innerHTML = "";

    const invoice =
        document.getElementById("invoiceNumber").value || "";

    const customer =
        document.getElementById("customerName").value || "";

    const total =
        document.getElementById("grandTotal").innerText.replace(/[^\d.]/g,"");

    new QRCode(qr,{
        text:`INV:${invoice}|CUS:${customer}|TOTAL:${total}`,
        width:120,
        height:120,
        correctLevel:QRCode.CorrectLevel.L
    });

}

document.getElementById("previewDate").innerText =
document.getElementById("invoiceDate").value;
0.
document.getElementById("previewTotal").innerText =
document.getElementById("grandTotal").innerText;
const amountWords = document.getElementById("amountWords");

if(amountWords){

amountWords.innerText =
numberToWords(
parseInt(
document.getElementById("grandTotal")
.innerText.replace(/[₹,]/g,"")
)
) + " Rupees Only";

}



document.getElementById("previewGSTTotal").innerText =
document.getElementById("gstTotal").innerText;

document.getElementById("previewSubtotal").innerText =
document.getElementById("subtotal").innerText;
// Copy Products
const previewBody = document.getElementById("previewProducts");

previewBody.innerHTML = "";

document.querySelectorAll("#productBody tr").forEach(row => {

    const product = row.querySelector(".product-name").value;
    const qty = row.querySelector(".qty").value;
    const price = row.querySelector(".price").value;
    const gst = row.querySelector(".gst").value;
    const total = row.querySelector(".lineTotal").innerText;

   const gstAmount =
((parseFloat(price) * parseFloat(qty) * parseFloat(gst)) / 100);

const totalAmount =
(parseFloat(price) * parseFloat(qty)) + gstAmount;

previewBody.innerHTML += `

<tr>

<td>${previewBody.rows.length + 1}</td>

<td>${product}</td>

<td>${qty}</td>

<td>₹${parseFloat(price).toFixed(2)}</td>

<td>${gst}%</td>

<td>₹${gstAmount.toFixed(2)}</td>

<td>₹${totalAmount.toFixed(2)}</td>

</tr>

`;

});   // closes forEach

new bootstrap.Modal(
document.getElementById("previewModal")
).show();

}   // closes showPreview()
function printInvoice() {

    showPreview();

    setTimeout(() => {

        const printContents =
            document.getElementById("invoicePreview").innerHTML;

      

 
        const printWindow =
            window.open("", "", "width=900,height=700");

        printWindow.document.write(`
        <html>

        <head>

        <title>Invoice</title>

        <style>

        body{
            font-family:Arial,sans-serif;
            padding:30px;
        }

        table{
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
        }

        table,th,td{
            border:1px solid #000;
        }

        th,td{
            padding:10px;
            text-align:left;
        }

        h2{
            margin-bottom:5px;
        }

        </style>

        </head>

        <body>

        ${printContents}

        </body>

        </html>
        `);

        printWindow.document.close();

        printWindow.focus();

        printWindow.print();

        printWindow.close();

    },300);
}




function generateInvoice() {

    const invoiceNo = "INV-" + Date.now();

    document.getElementById("invoiceNumber").value = invoiceNo;

    document.getElementById("previewInvoice").innerText = invoiceNo;

    document.getElementById("previewDate").innerText =
        document.getElementById("invoiceDate").value;

    showPreview();

}
function numberToWords(num){

return num.toLocaleString("en-IN");

}

function downloadPDF() {

    showPreview();

    

    setTimeout(() => {

        const invoice = document.getElementById("invoicePreview");

        const opt = {

            margin: 10,

            filename:
            document.getElementById("invoiceNumber").value + ".pdf",

            image: {
                type: "jpeg",
                quality: 1
            },

            html2canvas: {
                scale: 3,
                useCORS: true,
                scrollY: 0
            },
        

            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            }

        };

        html2pdf().set(opt).from(invoice).save();

    }, 500);

}
function updatePaymentFields(){

const method =
document.getElementById("paymentMethod").value;

document.getElementById("upiField").style.display="none";
document.getElementById("bankField").style.display="none";

if(method==="UPI"){

document.getElementById("upiField").style.display="block";

}

else if(method==="Net Banking"){

document.getElementById("bankField").style.display="block";

}

}