const productos = [{
  nombre: "Polerón",
  precio: "20.000",
  stock: "10",
  imagen: 'https://uca823edd88a7f3a9a969f6fba78.previews.dropboxusercontent.com/p/thumb/ABh8u4wJ2ket55KL-JHIDGMAU5f7Hk-NGgdHqi7m3JdZX0Jy8s0adc87HN6SKr-xZWPPNkSmaADRb_Lgon4ZFzv7m-cOLz3XTPu3oLtFSz32FZMjkskPw_xOJVRa889BOH_R8qACANrs4D9zQqkGpxyHhJm4zW1D2ux9JUCdcbtSdBxnC0oX_QPpDe2tg8PmW5bAgNhZFSxIb4o3wC7RZfCO50q_5dQWD9knoT9pQ9qUuFWCcdbiOPbDJJyeR97_g-l93DT6IF2ycYR2nbk5xKKwesGeALNrO1nBVPHFEIrbeznC4r99gAbtiKA08XUSoLLvC22AMhpEVIkdi58U9RnShRhS1ySYnP5H8mFjneAmLfCm4uKV26eET3-5-prAQxN1gD4rKZEC69ZHd4sFBMaFDjabw4KGUo5fznpUkx1sgQ/p.jpeg',
  id: 1,
  categoria: "Mujer",
},
{
  nombre: "Pantalón",
  precio: "25.000",
  stock: "15",
  imagen: "https://ucf22aa69ec538cecd49265404e0.previews.dropboxusercontent.com/p/thumb/ABilCq58AhcHrDN4zSHshDhuZ35huQM1jgY_NfU2yPwvifDxlAMrDYFUhFF6JItfkrzApJgpx1biVIQTkCtRPP0-r_k7-CQL-bt2BBBy9_anRpypjnNiQh2k5ijiuDma9RW98PDjVTHm9VjVlWyOy_9HaCdNIb7vF54ao8D0Dn2T2zqn6I2sscLFW8_caXPOzIA38oUvLSUvNqKKFhsiYnWGBMHU_rE7lbES_ZFJNn2yalgD2Q9n6j7Wygkywqva8-0EsRNLm9J7jqEKMg7dyGqMBaonCf2iN-dwSjCHCOz7C08AGFVk8ZXh0TIbH2L4JnBhdYAtqV7rOqjLVg7tCcUohXcV9q8j7r236Mvu0XpQURSCdi8rGRy0k1ch95BYgjgeYLfIZcoNUsjIigbzjWDBg6rQcdVPyN4pxgs9oGRF-g/p.jpeg",
  id: 2,
  categoria: "Mujer",
},
{
  nombre: "Beanie",
  precio: "10.000",
  stock: "8",
  imagen: "https://uc0806e758d2bc297abbdd96ee04.previews.dropboxusercontent.com/p/thumb/ABgDeq7OSXMhh2HyrVfMmp3dmnk-_fQz1G_M1NYFidetQvNAa2wwf3dL0B7YlRQBVJTG6NxPA1V262v7CXRFPZBc-Ld63nzgOCjlqs65jvXCq61-t6Rivj9eR1-Kk5waW6jyYtLr3OXTq1u-FdHC7tbZ__nwHkDAR4oFe_um-Hfkp-xB33OeY8iSaOyvj6mycW3s4uhYP3HkE56ncwOq8WasmAHOig9lLXe5GqFuNgO-GIbG6E-jfZddUbZPdwbdaDvbsvHLQ7tz7p2HlCINfXJFQkB7bIc2pOGbpE0VEBdqLx6FuYmL8y6XHiovhmnn_-8XXxAhGBfQU6rp4bYQ4yLbg9mutZ5H9NdK42e92YN7sR_bet_wSK0927YHHBA5zZbWk-K4YSLBHFKB6tsVpDoxXmOuuuTVPNiOnmi2TbZB5w/p.jpeg",
  id: 3,
  categoria: "Accesorios",
},
{
  nombre: "Cortaviento",
  precio: "25.000",
  stock: "10",
  imagen: "https://previews.dropbox.com/p/thumb/ABjAdYL88z6FKDmXv6scXHUqt88R9LPl1EzDqSpFWHZ8AhszlcnJWFbFTA26xQ_16dHAvC8i4wKM9IafU1Kcu5ARZ72NevjLyRlgZmNP1hw96ZmNuiMEzPPb-LuoYcIp6kCLDMXmiblJzX-55ITRg_YDuQe8aDQMB8XZwA_AvB2gktErfgpttujspg7OW4MdTcv4KoCB5PCKxR5fhkubpBVam6TvRo1M0ui6Wt0A9Esmxky_N_38K8k53eTqttwn6vKsdidAdr1MOW-0Hqw6GUPeIyl8emxuAnb5NQQTESZTGJ45PtDV0QWLCOVo2_Mu09j4fMZNa9VD6WWN_slfWeSCvLw-gzMaWbW9qBsh8LjLd6AU6RMKT7NEjNav9dS-Y2g/p.jpeg",
  id: 4,
  categoria: "Mujer",
}
]

//Exportar todos los productos
export const listaProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};


//Exportar un producto para detalle
export const getItem = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos[n])
    }, 2000)
  })
}