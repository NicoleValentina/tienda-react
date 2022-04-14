const productos = [{
  nombre: "Polerón",
  precio: "20.000",
  stock: "10",
  imagen: 'https://previews.dropbox.com/p/thumb/ABgaloKjabzchBIxRhwGIGh_H0HFjKwR_8__a6vidOJGgP-7oqgXEepwwkgWun3tQXYAlGvMyDLHA1HetM0ZS_XadeW81WJfn_gj-D2ajnfXSYLcLHp0b1b02q1asU6B1HXrZCqw7lHIOt4SjtIMfdqRA0-wtQQCxGdGmM9Or71twqDI9ITq9Hq6eq5e2hAGSO4k_Ymt-MhBykHWCPV6_29HcsPR6H-e6skYtaO9b1eXVcUY_UT2hMDRBUPCkpPTy01jUp61Ymr2GcTTdWCMWj3RJLCE7yK9yva_TD02diDFwtUz38ArEqLM6tD--gvsVN0c7NQEml5SgSg-50z-QTWPm36qYVZOnr8NutTFolwWR_cLXbNP8nkA87Aef3GRTKg/p.jpeg',
  id: 1,
  categoria: "Mujer",
},
{
  nombre: "Pantalón",
  precio: "25.000",
  stock: "15",
  imagen: "https://previews.dropbox.com/p/thumb/ABiW3UVxGOQw8CNOFbMBCLhQaMmem_VqMCsgSF60M2oO3MjRAz-pixlyKIiLtggX5G3rKCrI1X8qCu3zmH8wG6jMx41BQZd-oaIUyUagV8wS-4alXSGlZQLty2NIM4jqVSXybzqO-1XDYJIdAQ_6e2uq1uB0bV7W-caoEc0gelX_BTgL5NMXtx3s54_KiHbM9HldWVfR1TfY2TqcBBVr3_s095liH7S4anLwWLjwU_HWMM9qsXoR5O58T8nhaDxdrd4kmpLoP9ilh-MZKXRO6BJmbamzMHX8oYIYoHxmlSpo27Dr8F2Pq79HApSqEiOFh0LCAjj8DtbZv8wi31yfRbOxb-ZoUhMjiekDE6dnFHpSboH33p4f4jaNUVV7EXwZc90/p.jpeg",
  id: 2,
  categoria: "Mujer",
},
{
  nombre: "Beanie",
  precio: "10.000",
  stock: "8",
  imagen: "https://previews.dropbox.com/p/thumb/ABhtpeX35T_VuCMJ07wrRT7zZ1HdVboHP7s6cTFbrwMDYczrPuRUz9w60UVf4BS-NGvzBg7k_zNPvUtm4cnGM390ajZ9y9KhNO_j7bVdAAArWY88DcKiXN_CLPXfB0ZBang63J5L8p9_QsIXCWLXzRxBVFGDzYM4lWs7Cs9b3o9ZkXNzyiXlEXQpOn93lD9NrWLvAmfiTWjpUmqkL94s6wwh3Fp3UaskclU3EEJOBYG8gTZVI38d9PEJo70he3zrhOe97VYQEqt_GgsTJaa6V2Nv9vvgULoyBQeWzkaKcFpYSZn4TdbIlzZnFnX7NnuWFsiLbxlM2jWwc38DthhOsRypJPn6N3clbmF5u3mAKDGYpKI9PHLk3FdR8aX7Qz9ZTCo/p.jpeg",
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