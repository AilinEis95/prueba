export default function FuncionUseState(){
    return(
        <div className="contenido [&>p]:m-3 [&>h1,h2]:m-4 [&>h1,h2]:font-bold">
            <h2>Hook useState </h2>
            <p>Este hook se utiliza para mantener un seguimiento del estado de la aplicación.<br/>Los estados generalmente se refieren a datos o propiedades de la aplicación que necesitan ser monitoreados</p>
            <p>El primer paso es importarlo desde React; import &#123; useState &#125; from 'react'; </p>
            <p>Luego inicializamos nuestro estado llamando o invocando a useState en nuestro componente funcional.<br/>UseState acepta un estado inicial, y retorna dos valores:
                <ul>
                    <li>El estado actual</li>
                    <li>Una función que actualiza el estado</li>
                </ul>
            </p>
            <h2>Ejemplo</h2>
            <code>
                import &#123; useState &#125; from 'react';<br/>
                function ColorFavorito()&#123; <br/>
                    const [color, setColor] = useState("Azul");
&#125;
            </code>
            <p>El primer valor, color, es nuestro estado actual, el siguiente o el segundo valor, setColor, es la función que se utiliza para actualizar nuestro estado. Estos nombres son variables que pueden llevar el nombre que quiera</p>
            <p>Por ultimo, establecemos el estado inicial a "Azul" con la llamada useState </p>
        </div>
    )
}