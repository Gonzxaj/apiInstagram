# Integración de Instagram

Este proyecto es una integración simple de un feed de Instagram que obtiene datos multimedia de la API de Graph de Instagram y los muestra en un formato de galería receptiva. La galería admite la navegación con botones de siguiente y anterior.

## Uso

1. Clona el repositorio:

```bash
git clone https://github.com/Gonzxaj/apiInstagram
```

2. Abre el archivo `index.html` en tu navegador web preferido.

3. Asegúrate de tener un token de acceso válido para la API de Graph de Instagram. Actualiza la variable `access_token` en el archivo `script.js` con tu token de acceso.

4. Ejecuta la aplicación y explora el feed de Instagram.

## Dependencias

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/): Bootstrap se utiliza para dar estilo a los componentes HTML.
- [Material Icons](https://material.io/resources/icons/): Se utilizan íconos de Material para los botones de navegación siguiente y anterior.
- [API de Graph de Instagram](https://developers.facebook.com/docs/instagram-api/getting-started): Se utiliza la API de Graph de Instagram para obtener datos multimedia.

## Archivos

- `index.html`: El archivo HTML principal que contiene la estructura de la integración del feed de Instagram.
- `style.css`: Estilos CSS personalizados para el proyecto.
- `script.js`: Archivo JavaScript responsable de obtener datos multimedia de Instagram y crear dinámicamente los elementos HTML.

## Cómo funciona

1. La aplicación obtiene datos multimedia de la API de Graph de Instagram utilizando el token de acceso proporcionado.
2. Los datos obtenidos se procesan y se crean dinámicamente elementos HTML para mostrar las imágenes en un formato de galería receptiva.
3. Los usuarios pueden navegar por la galería utilizando los botones de siguiente y anterior.

## Personalización

Siéntete libre de personalizar los estilos y la apariencia modificando el archivo `style.css` según tus preferencias.

## Nota

Asegúrate de tener un token de acceso válido para la API de Graph de Instagram y de que se hayan concedido los permisos necesarios para obtener datos multimedia.
