# Seminario 6

### Participantes

Enrique Manuel Pedroza Castillo (alu0100886351@ull.edu.es)

Yeixon Reinaldo Morales Gonzalez (alu0101133324@ull.edu.es)

José Javier Díaz González (alu0101128894@ull.edu.es)

Alejandro Curbelo García (alu0101233581@ull.edu.es)

----------------------------------------------------------

# INFORME Criterios - Técnicas WCAG 2.1 (II) - Principio Comprensible y Robusto

Se pretende analizar y explicar cada una de las pautas que componen el WCAG 2.1 Comprensible-Robusto sobre dos webs de ejemplo. La web que vamos a analizar es la siguiente: 
- [Sinpromi](https://sinpromi.es/)

***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Sinpromi](https://sinpromi.es/)
***

Se explicarán y analizarán todos los criterios y pautas sobre [Sinpromi](https://sinpromi.es/).

# Introducción

En este informe nos centraremos en analizar y comprobar que la web de la sociedad insular para la promoción de las personas con discapacidad cumpla con los criterios comprensibles-robusto que recoge la WACC.

### Pauta 3.1: Contenidos de fácil comprensión y lectura

- **Criterio 3.1.1 (A):** Se puede encontrar el lenguaje predefinido de la pagina en la cabecera del codigo HTML, con lo cual podemos decir que cumple con el criterio, en este caso `lang ="en"`:

![Sinpromi-lang](https://github.com/Yeixon98/UYA-Grupo_8/blob/Seminarios/Seminarios/6.%20Seminario%20Principio%20Comprensible%20y%20Robusto/img/sinpromi-lang.png "Imagen que muestra la parte del codigo que hace referencia al lenguaje")

El lenguaje se puede identificar usando **lang** y se puede apreciar su contenido en la imagen anterior.

- **Criterio 3.1.2 (AA):** Como pudimos ver en el apartado anterior, si podemos determinar por la cabecera, la lengua prevista para la que fue creada la pagina, esto se cumple en todas las paginas del sitio web

### Pauta 3.2: Manejo de Webs de forma predecible

- **Criterio 3.2.1:** Al hacer uso de del foco sobre los elementops de la web, no se inicia un cambio en el contexto, podemos navegar con el tabulador por toda la web,se puede abrir ventanas y enlaces sólo cuando sea necesario. Sin embargo, cuando abrimos menus desplegables si queremos salir, independientemente de que podamos navegar dentro, no podemos hacer la accion de comprimir y ocultar el menu desplegable, con lo que tendria mos que volver a dar la vuelta a la pagina hasta el boton del desplegable para poder cerrarlo. Por esto no cumple el criterio 3.2.1

- **Criterio 3.2.2:** Se cumple que el cambio de estado en un componenete no provoca automáticamente el cambio de contexto.

- **Criterio 3.2.3:** Algunos de los ejemplos que cumple este criterio son la de un menú de navegación extendible, incluyendo en el una serie de elementos con enlaces a las principales secciones de un sitio web.


### Pauta 3.3: Evitar y corregir errores

- **Criterio 3.3.1:** Al introducir nuestras credenciales en la entrada de datos correspondiente, se identifica el elemento erróneo ademas de describir el motivo del error mediante texto. Podemos ver un ejemplo de ello en la siguiente imágen:

![fallo-usuario](https://github.com/Yeixon98/UYA-Grupo_8/blob/Seminarios/Seminarios/6.%20Seminario%20Principio%20Comprensible%20y%20Robusto/img/fallo-usuario.png "Se muestra el bloque de texto con el error")

- **Criterio 3.3.2:** En la cajetilla de entrada de datos se le muestra al usuario un ejemplo o una breve descripción orientativa sobre los datos a introducir en la misma.

Tomamos como ejemplo el formulario de registro, que nos muestra lo siguiente:

![registro-sinpromi](https://github.com/Yeixon98/UYA-Grupo_8/blob/Seminarios/Seminarios/6.%20Seminario%20Principio%20Comprensible%20y%20Robusto/img/registro-sinpromi.png "Imagen que ilustra el formulario de registro de la web  Sinpromi")

- **Criterio 3.3.3:** A la hora de hacer el registro, si se encuentra algún tipo de error, se presta al usuario una breve descripción del problema.
    Fácil lectura y comprensión de los contenidos


### Criterios relacionados con las pautas de Robusto:

### Pauta 4.1: Compatibilidad

  Compatible: Maximizar la compatibilidad con las aplicaciones de usuario actuales y futuras, incluyendo las ayudas técnicas.

- **Criterio 4.1.1 (Nivel AA):** La web sí cumple este criterio ya que, podemos encontrar que todos los elementos tienen las etiquetas de apertura y cierre completas, están anidados de acuerdo a sus especificaciones, no contienen atributos duplicados y no hemos encontrado ningún ID repetido. Esto se puede comprobar mediante las técnicas de validadores automáticos, además de que se nota que siguen el estándar HTML. A continuación se puede ver una captura del código de la página de [Sinpromi](https://sinpromi.es/) donde se puede observar como se cumple:

![criterio411](https://github.com/Yeixon98/UYA-Grupo_8/blob/Seminarios/Seminarios/6.%20Seminario%20Principio%20Comprensible%20y%20Robusto/img/criterio411html.png "Imagen que muestra una sección del código de la página de Sinpromi.")

- **Criterio 4.1.2 (nivel A):** Sí lo cumple ya que, para todos los componentes de la interfaz de usuario el elemento y la función pueden ser determinados por software. Además, el usuario no tiene que aportar nada así que no hay que especificarlo por software ni consultar los cambios. Alguna técnica que se puede emplear para llevar a cabo esto es la ARIA14: Usar aria-label para proporcionar una etiqueta invisible donde no se puede usar una etiqueta visible

- **Criterio 4.1.3 (nivel A):** Este criterio no puede ser comprobado en esta página ya que no hay ningún temporizador o formulario que requiera de tiempo y te pueda mandar un aviso. Este criterio viene a decir que aunque los mensajes de error y las advertencias pueden ser mensajes de estado, no lo son si cambian el contexto al establecer el foco en el error. Este criterio beneficia a aquellas personas que usan tecnología de asistencia, como lectores de pantalla.
