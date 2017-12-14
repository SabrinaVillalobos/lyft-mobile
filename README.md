## 2. L Y F T
Desarrolla una web-app que replique el sitio de **Lyft**, en este reto deberás cumplir los pasos necesarios para que tu usuario pueda registrarse.

**Flujo de la aplicación.**

Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de **SING UP.**

![Imgur](https://i.imgur.com/gbb50Tj.png)

En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de **NEXT** debe estar deshabilitado hasta que se ingrese un número de 10 dígitos.
![Imgur](https://i.imgur.com/LMntH12.png)

Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista.
![Imgur](https://i.imgur.com/LW0vnUZ.png)

En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos. (Puede tener la opción de enviar otro código.)
![Imgur](https://i.imgur.com/Tk9iJSg.png)

Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio.
![Imgur](https://i.imgur.com/65OZBNm.png)

Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.
![Imgur](https://i.imgur.com/05grfb0.png)

NOTA: Todas nuestras vistas deben de contar con una manera de regresar a la vista anterior
