function generateQR() {
    var inputValue = document.getElementById('input').value;
    if (inputValue.trim() !== '') {
        var qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = '';
        var qr = qrcode(0, 'M');
        qr.addData(inputValue);
        qr.make();
        qrCodeDiv.innerHTML = qr.createImgTag(5, 10);
    } else {
        alert('Please enter some text or URL to generate QR code.');
    }
}

function downloadQR() {
    var qrCodeImage = document.getElementById('qr-code').querySelector('img');
    var link = document.createElement('a');
    link.href = qrCodeImage.src;
    link.download = 'qr_code.png';
    link.click();
}