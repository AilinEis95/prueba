export default function Objetos(){
    /*//El objeto literal es almacenado en la variable Taza
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
    document.getElementById("informacion").innerText = texto;*/
    return (
    <>
        <div className="seccionobjetos">
            <h1>Hola Mundo</h1>
            <a href= "./clase-formulario"> Link a clase formulario </a>
        </div>
    </>
    )
}