/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/
/*
  Adım 1: IconButton fonksiyonu
*/

/*
  Adım 1: IconButton fonksiyonu
*/
function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.className = `btn btn-${btnColor}`;

  button.innerHTML = `<i class="${iconClass}"></i> ${btnText}`;

  return button;
}

const button1 = IconButton('Aç', 'blue', 'fa fa-folder-open');
const button2 = IconButton('Düzenle', 'orange', 'fa fa-pen');
const button3 = IconButton('Sil', 'red', 'fa fa-trash');

document.getElementById('icon-buttons').appendChild(button1);
document.getElementById('icon-buttons').appendChild(button2);
document.getElementById('icon-buttons').appendChild(button3);
