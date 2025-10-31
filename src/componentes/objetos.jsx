export default function Objetos(){
    //El objeto literal es almacenado en la variable Taza
    //Todos los objetos arrays, listas y demás estructuras similares deben ser variables del tipo "const"
    const Taza = {
        material: "ceramica",
        color: "blanco",
        capacidad: "250ml"
    };
    //Otra manera de escribir los objetos es usando un formato de lista, este formato mejora la legibilidad del código al utilizar objetos con muchos atributos

    const Autos = {
        marca: "Ford",
        modelo: "Fiesta",
        color: "Rojo",
        kilometraje: "150000km",
        patente: "AB123CD",
        anio: 2010,
    };
    //Es posible crear un objeto vacio y luego agregarle las propiedades

    const persona = {};
    persona.nombre = "Juan";
    persona.apellido = "Perez";
    persona.edad = 30;
    persona.altura = "1.75m";

    //Podemos acceder a las propiedades o a los atributos de los objetos de dos maneras

    console.log(persona.nombre)
    console.log(Autos["modelo"])

    //Metodos
    const Perro = {
        nombre: "Max",
        raza: "Labrador",
        edad: 5,
        ladrar: function() {
            console.log("Guau Guau!");
        },
        info: function() {
            return "raza: " + this.raza + "\n" + "nombre: " + this.nombre + "\n" + "edad: " + this.edad + " años";
                }
}

    //Invocamos el método ladrar de la misma manera que las propiedades
    Perro.ladrar();
    var infoPerro = Perro.info();
    console.log(infoPerro);  

    const ciudad = {
        nombre: "Buenos Aires",
        pais: "Argentina",
        habitantes: "3 millones",
        partido: "Comuna 1",
        intendente: "Juan Carlos",
    };

    var texto = "La ciudad de " + ciudad.nombre + " está en " + ciudad.pais + " y tiene " + ciudad.habitantes + " habitantes.";
    //document.getElementById("informacion").innerHTML = texto;
    document.getElementById("informacion").innerText = texto;
    return (
    <>
        <div className="seccionobjetos">
            <div>
                <h2>Objetos</h2>
                <p>Un objeto en JS es una estructura de datos que nos permite almacenar diversos tipos de datos en un solo elemento. Estas estructuras comparten las mismas caracteristicas que los objetos fisicos.</p>
                <p>Pensemos en cualquer objeto de la vida real, los podemos describir con sus correspondientes atributos: Ej: Taza es un objeto, y sus atributos serían el tipo de material, las dimensiones, el color, etc.Los atributos están definidos en el código con una serie de pares de llave/valor</p>
                <h3>Objeto literal</h3>
                
                <p>El ejemplo anterior representa un objeto literal, está encerrado entre llaves y sus pares de llave/valor están separados por ","</p>
                <p>Ver ejemplos en el código fuente</p>
                <h3>Método de los objetos</h3>
                <p>Si los atributos son los que identifican a los objetos, los métodos describen su comportamiento. Son las acciones que este objeto va a realizar</p>
                <p>Los métodos para JS son funciones almacenadas como valores de las propiedades </p>
                <p>Ver ejemplo en código fuente</p>
                <p>Mostrando las propiedades</p>
                <p>Para mostrar los valores de las propiedades de nuestros objetos podemos utilizar el método document.get.elementById("")</p>
                <div id="informacion"></div>

            </div>            
        </div>
    </>
    )
}