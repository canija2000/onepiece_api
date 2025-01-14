## Objetivo

El profesor **Ian Artaud** , te pidió ayuda para desarrollar un pequeño programa que permita saber si el texto que está recibiendo fue creado por **IA** (Inteligencia Artificial), **IA** (el profesor Ian Artaud) o por solo **A** (un alumno).

Recibirás **un input** que corresponderá a una cadena de texto. Deberás, según las siguientes condiciones, verificar a quién corresponde el texto ingresado.
| Texto | Largo | ia | ai | a | AI 🤖 | IA 👨‍🏫  | A |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Los jaivas| 10 | 0 | 1 | 2 |  ✘ | ✘ |  ✘
| Dos hiatos | 10 | 1 | 0 | 1 | ✔| ✘ |  ✘
| Pizza Hawaiiana | 15 | 2 | 1 | 5 |✘ |  ✔|✔
| Caramelos de Chocolate | 22 | 0 | 0 | 3|✘ |  ✘|✔

1. Los textos generados por  **IA (Inteligencia Aritificial)** deberán tener un largo **superior a 10** y **menor a 255**.  También deberán incluir al menos **una vez** el *string* "ia", y nunca incluirán "ai".

2. Los textos generados por **IA (Ian Artaud)** pueden tener cualquier largo. Siempre incluirán los *string* "ai" e "ia" al menos una vez cada uno.
3. Los textos generados por **A (alumnos)** pueden ser de cualquier largo. Deben al menos contener **3** "a" y ningún "ai"/"ia".
4. Si el texto puede ser clasificado cae en dos categorías, **siempre** debe ser priorizada aquella que **no** es **A**.
5. En caso de que no entre en ninguna categoría, se debe imprimir el siguiente mensaje : 
```
Al parecer nadie escribio este texto ...
```





**Importante**:  "ia" o "ai"  **no necesariamente deben ser contiguas**, siempre y cuando solo estén separadas por consonantes, es decir, *pizza* contiene "ia" separado por las "zz", por lo tanto es válido. Por el contrario *"Paralelepipedo"* no puede ser considerado como "ai", pues hay vocales entre medio.  




*Nota : Puedes asumir que los textos **no** tendrán tildes y tampoco se hará diferencia entre mayúsculas y minúsculas.*


Tu misión sera detectar a qué caso corresponde el *input* y mostrar la decisión.

## Ejemplos

### Ejemplo 1

#### Input
```py
Eduardo Fuentes camino por un dia
```

#### Output
```
Resultados del analisis:

> Largo : 33
> IA : 1
> AI : 1
> A : 3

Este texto fue generado por IA (Ian Artaud) !

```

**Explicación:** 

1. Vemos que el largo de la cadena es 33. Esto no nos dice mucho de momento.
2. Encontramos la primera "ai" en c**a**m**i**no
3. Encontramos la primera "ia" en d**ia**
4. Si bien hay **3** "a", tiene prioridad la otra categoría.
4. No encontramos nada más, según la información recolectada, este texto corresponde a **IA (Ian Artaud)**.


### Ejemplo 2

#### Input
*para efectos de mejor lectura el input está con saltos de línea*.
```
La pizza hawaiana combina sabores dulces 
y salados con jamon y pina sobre
una base de queso y salsa de tomate.
Aunque amada por muchos, tambien genera
controversia por incluir fruta caliente, 
desatando debates entre los amantes de la pizza.
¿Tradicion o innovacion?
```


#### Output

```
Resultados del analisis:

> Largo : 265
> IA : 3
> AI : 7
> A : 35

Este texto fue generado por IA (Ian Artaud) !
```

**Explicación:** 
1. Vemos que el largo de la cadena es 265. Así sabemos que **no** puede ser **IA (Inteligencia Artificial)**.
2. Nuestro increíble algoritmo detecta **7** "ai" y **3** "ia".
3. Si bien hay **35** "a", priorizamos la otra categoría.
3. Concluimos, entonces, que este texto fue generado por  **IA (Ian Artaud)**.

### Ejemplo 3

#### Input
```
Destapados en un cine se comieron un cuchufli
```
#### Output 
```
Resultados del analisis:

> Largo : 45
> IA : 0
> AI : 0
> A : 2

Al parecer nadie escribio este texto ...
```
**Explicación:** 
1. Vemos que el largo de la cadena es 45. Puede caer dentro de cualquier categoría.
2. Nuestro increíble algoritmo detecta **0** "ai" y **0** "ia".
3. Hay **2**  "a", no son suficientes.
3. Concluimos, entonces, que este texto no fue generado por nadie...

