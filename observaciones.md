### Comentarios Generales

Dani, queria felicitarte primero por un gran trabajo. Tu portfolio quedó muy lindo, lo hiciste realmente tuyo y a nivel personal me gusta como lo adaptaste para que te reflejara mejor. La paleta de colores, los estilos de las tarjetas, todo revela mucho cuidado, compromiso y ganas de aplicar lo que sabés para hacer una web fantástica, que es a fin de cuentas el mayor objetivo de este curso.

Temo sin embargo que en algunas de las cosas que cambiaste también te escapaste de las consignas, y si bien lo resolviste muy bien a nivel visual y código, tengo que contemplar que no todo lo que pedimos está cumplido. No son requisitos porque sí: si bien es importante cumplir requerimientos a nivel laboral no dudo que vos vayas a hacerlo en ese ámbito, pero más bien le doy importancia porque hay algunas cosas que agregamos específicamente porque queríamos ver cómo las resolvían (por darte un ejemplo sencillo, no es casual que el botón "lo que hago" tenga el mismo estilo que el link de "contacto"). Al no estar algunas de esas cosas, no puedo evaluar tu trabajo de la misma manera que los de tus compañeras. 

En ese mismo sentido, otras consignas principales tampoco están cumplidas: el sitio no está deployado (o si lo está, no hay indicación de tal cosa en el README), el README no está completo. No sé bien cuáles de estas cosas fueron por falta de tiempo, pero tengo que contemplar de todos modos el grado de cumplimiento de las consignas en la nota final. Al hacerlo, sin embargo, quiero insistir en que la nota refleja más este incumplimiento que la calidad de tu trabajo, que es realmente excelente. 

Personalmente, no soy fanática de las notas por cosas como esta: creo que no sirvan para capturar las complejidades y matices de cada trabajo en particular (de hecho, antes no las usaba, pero comencé a hacerlo a pedido de las alumnas). Un número no me dice nada, ni te dice nada a vos, de la calidad de tu trabajo y los aspectos a mejorar. Prefiero decirlo en palabras: tu trabajo es excelente, se nota tu esfuerzo, entusiasmo y dedicación, que son lo más importante para mí. Pero, en futuros trabajos, voy a pedir que te esfuerces más en cumplir las consignas. 

Dejo algunos comentarios generales sobre tu trabajo: 

- Tengo que comentar y felicitarte por la prolijidad del código, tanto HTML como CSS. El orden, la estructura, el tabulado, el respeto por los espacios y buenas prácticas se nota a cada instante. Es un placer recorrer un código tan bien escrito para corregirlo, y no es habitual alcanzar esta prolijidad de escritura con tu experiencia. Felicitaciones por eso. 

- Los nombres de clases, a veces, no son lo suficientemente descriptivos. Recordá que el objetivo (que es casi un ideal, pero para acercarnos lo más posible) es que nuestro HTML se pueda entender sin haber visto la página. Nombres como "caja" o "caja-pro" no me dicen lo que es ese elemento, qué función cumple en tu página. "tarjeta-skills" y "tarjeta-proyectos" son mejores en ese sentido. La sección "hola" tiene un problema similar. Quizá en unos meses ya no quieras que diga "Hola", pero la clase en el código seguirá siendo "hola": no es bueno depender del contenido para los nombres de clases (ni colores, o formas), sino describir funcionalidades. Esa seccion es la seccion de presentación, o la sección principal: esos nombres son más adecuados para describirla. 

- Ocasionalmente usas alturas fijas para las secciones, y eso no es buena práctica: salvo cuando se trata de elementos pequeños (como tarjetas o botones), la altura de un elemento tiene que estar dada por sus contenidos. Fijate que las tarjetas de la sección "Mis conocimientos" rebalsan a su contenedor entre los 700 y los 600px: eso es porque la sección tiene una altura de 100vh, que no alcanza para las tarjetas cuando se ven de dos en dos. 

- La conversión a mobile está muy bien, salvo en el caso de las tarjetas de Mis Conocimientos, en donde los iconos rebalsan sus contenedores y empeoran un poco la experiencia. Aqui tenes el problema de haber usado porcentajes para las alturas de las tarjetas. Si usamos porcentaje en un height, nos estamos refiriendo al height del elemento contenedor, pero con un detalle importante: ese height tiene que estar seteado explicitamente (lo cual no es buena práctica, como dijimos). Si el contenedor no tiene un height explicito, el navegador va a ignorar el height de las cajas y darles el tamaño de acuerdo a su contenido. Lo cual no sería un problema en este caso si no fuera porque los iconos son muy grandes para mobile, ademas de tener margen, lo cual hace que desborden de la caja. Yo les daria a .caja un height explicito (200px creo que se ve bien) y le agregaria justify-content: space-evenly para acomodar el texto los iconos: una vez hecho eso, le podemos quitar el margen a los <i>. Creo que así mejora mucho todo en celulares. 

- Mucho cuidado con los cierres de tus media queries, ya que hay momentos donde agregaste estilo *despues* de cerrarla. Si eso ocurre, los estilos se aplican en todas las resoluciones. Te lo comenté en el css. 

- Como la inmensa mayoria de tus elementos tienen el font-family Montserrat, creo que sería mejor darle esa indicación al body, así no tenes que repetirla tanto a lo largo de tu css. Esto también permite que el botón "Quien soy" tenga tipografia, en lugar de la que viene por defecto en el codigo. 

- Con respecto al proyecto en github, debo comentar la buena calidad de los mensajes de los commits, aunque hubiera sido preferible que lo subieras a github antes, asi podiamos ver el recorrido de tu codigo siguiendo tus commits. Se que da verguenza subirlo cuando aun está incompleto, pero es muy importante para que tus futuros colegas puedan ir viendo como vas avanzando con el código, por lo que lo ideal es acostumbrarse a hacerlo desde ahora. Sobre el README, claramente le faltan cosas y te animo a que lo mejores, ya que importa mucho cuando otra persona está leyendo tu codigo y quiere conocer más sobre tu proyecto. Menciono que, si bien funciona tal como lo escribirte en github, la manera correcta de nombrarlo es con mayusculas: README.md 

Dejo algunos comentarios específicos a lo largo de tu código. 

Notarás, viendo esos comentarios, que comento muchisimas cosas y soy bastante quisquillosa (por no usar otra palabra no tan profesional...) con las correcciones. Mi tarea es comentarte todo lo que vea para que puedas mejorar tu código: no habla de la calidad de tu trabajo, que es realmente excelente. 


### Nota final: 7

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✔️ Respeta la consigna --> con observaciones
✔️ Respeta el diseño dado --> con observaciones
✔️ Responsive funciona correctamente --> con observaciones 
✅ Código bien indentado. 
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✔️ Buenos nombres de clases ---> con observaciones
✅ Reutilización de estilos.
✅ Código CSS ordenado.
✅ Commits con mensajes adecuados.
