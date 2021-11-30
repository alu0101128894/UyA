# Uso de la web por personas con disfuncionalidad

## Introduccion
En este seminario se nos pide que probemos extensiones y navegadores con el fin de adquirir la experiencia de navegación de personas con discapacidades, para 
posteriormente saber cuáles son las carencias del diseño de este tipo de sitios web y poder tener en cuenta dichos fallos al momento de crear nuestras propias 
páginas.

Las aplicaciones que se nos facilitaron fueron un plugin del navegador Chrome llamado Vox (ChromeVox), este plugin remarca los diferentes elementos seleccionados
que se muestran en pantalla y usa el sistema de sonido para reproducir una descripción de lo que se ha seleccionado.

La otra aplicación es un navegador Lynx , es un navegador que funciona por consola (no se puede usar el ratón) y sólo cuenta con modo texto. Como aspecto general
negativo es que el navegador Lynx funciona introduciendo la URL, lo cual hace muy difícil la navegación de los usuarios.

Estas herramientas sirven, como se dijo anteriormente, para ayudar a las personas discapacitadas a usar correctamente los diferentes sitios web en los que estén
interesados en navegar.

Al emplear estas herramientas para la actividad descrita nos hemos encontrado que, aunque las páginas facilitadas permiten de una forma u otra navegar, el diseño
para la usabilidad de personas discapacitadas es muy pobre a la vez que dificultosa:

[Enlace al video de la experiencia con el navegador Lynx](https://drive.google.com/file/d/1jGh87RlNtBY_N0SOdWNaPWZN65tzixXD/view?usp=sharing)

### Consulta calendario académico

Con la herramienta Vox, vemos que muchos de los elementos dispuestos en pantalla son descritos, y a causa del exceso de información hace más difícil la navegación,
esto se solucionaría haciendo que se indique solo parte de la información contextual y posteriormente la que nos interese, por ejemplo: nos diga que estamos en el
calendario y en un mes y año concreto y según avanzamos en los días solo nos indique el día actual, hasta cambiar de mes.

Cabe recalcar que el mal diseño de la página obliga al usuario el empleo del ratón para poder ser completamente usable, lo cual es contraproducente en este aspecto.

Sin embargo, cuando se selecciona la fecha en la que el usuario está interesado, se puede establecer un evento sin muchas complicaciones.
[Enlace al Video](https://drive.google.com/file/d/1pvVCIFDlSCi0BxDfptXrHQHr54kEtKjo/view?usp=sharing)

Por otro lado, tenemos el navegador Lynx, en el cual la experiencia de navegación fue bastante intuitiva, hasta llegar al horario, en donde tenemos problemas
debido a que el navegador no nos permite abrir los enlaces disponibles a causa de la falta de JavaScript, con lo cual no podemos consultar los horarios.

### Horarios de Usabilidad y Accesibilidad

Con el plugin podemos llegar hasta la página de la Ull en donde esta los distintos horarios de los diferentes cursos de nuestra facultad. El error que tiene esta
página es que, aunque podemos tener una descripción bastante acertada del contexto en el que el usuario se encuentra, al llegar al desplegable no hay forma de 
abrirlo con el uso del teclado, haciendo que una persona que dependa directamente de esta herramienta le sea imposible acceder a los horarios. Esto se arregla 
modificando el código de dichos desplegables para que se desplieguen al usar una tecla, por ejemplo, intro.
[Enlace al Video](https://drive.google.com/file/d/1GdrlnxoRVf922k-io1eiwVe-KGvNJO6u/view?usp=sharing)


En cuanto al navegador Lynx, nos encontramos con el mismo problema del apartado anterior con JavaScript.

### Matriculación

Con ChromeVox nos encontramos que la navegación hasta cierto punto es correcta, pero al momento de autenticarnos como alumnos de la ULL la extensión no nos hace 
una descripción correcta del formulario, además que cuando se va a escribir números no nos lo indica en español, sino en inglés.
[Enlace al Video](https://drive.google.com/file/d/1vdgSAzlicL-aLV08kj4UbLJgb0MxGu64/view?usp=sharing)

En cuanto a Lynx, nos encontramos que debido a las limitaciones del navegador y la complejidad de la página de la ULL se hace muy difícil la navegación (en la
pantalla aparece mucho texto y es bastante fácil perderse buscando el punto que uno busca). Se pudo acceder al trámite, pero no iniciarlo.

### Notas Primer cuatrimestre

Con Vox, nos encontramos en principio con el mismo problema en el apartado anterior con el formulario de autenticación. Una vez dentro, al intentar hacer uso del 
teclado nos damos cuenta de que, por un lado, no todos los elementos tienen una descripción adecuada, y por otro es imposible entrar en el apartado del alumno,
con lo cual no podremos acceder a nuestra información, entre la que se encuentra las notas del primer cuatrimestre.

[Enlace al Video](https://drive.google.com/file/d/1XpwnuY4oacO9cdNj8iPj-Zm3wMlu5yaF/view?usp=sharing)

Para resolver esto, se tiene que hacer seleccionable el apartado del alumno, y posteriormente asignar descripciones adecuadas a todos los elementos de la página.
Con el navegador Lynx nos encontramos con exactamente los problemas de los apartados anteriores, además se ha hecho imposible el inicio de sesión con credenciales
correctas, con lo cual, tampoco hemos sido capaces de acceder a las notas.

