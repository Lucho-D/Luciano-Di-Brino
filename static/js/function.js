let links = document.getElementsByClassName("link");
let projectHeaders = document.getElementsByClassName("project-header");

document.getElementById("en").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "I am a web developer with a passion for programming, with a focus on Python and a background in web technologies. I stand out for my ability to work in a team, learn quickly and adapt to new tools and technological environments."
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Home";
    document.getElementById("nav_experiencia").innerHTML = "Experience";
    document.getElementById("nav_habilidades").innerHTML = "Skills";
    document.getElementById("nav_proyectos").innerHTML = "Projects";
    document.getElementById("nav_contacto").innerHTML = "Contact";
    document.getElementById("nav_downloads").innerHTML = "Downloads";
    document.getElementById("title_experiencia").innerHTML = "Experience";
    document.getElementById("title_habilidades").innerHTML = "Skills";
    document.getElementById("title_proyectos").innerHTML = "Completed projects";
    document.getElementById("title_datos").innerHTML = "Contact";
    document.getElementById("title_downloads").innerHTML = "Downloads";

    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADEMIC";
    document.getElementById("exp_cursos").innerHTML = "COURSES";
    document.getElementById("exp_laboral").innerHTML = "WORK";
    document.getElementById("exp_escolar").innerHTML = "Bachelor of Social Sciences";
    document.getElementById("exp_universidad").innerHTML = "Systems Engineering (1°)";
    document.getElementById("exp_argentina").innerHTML = "Data Analysis Python";
    document.getElementById("exp_codoacodo").innerHTML = "• Initial Programming with Python<br> • FullStack Python<br>";
    document.getElementById("exp_cpfp").innerHTML = "Digital Electronics Assistant";
    document.getElementById("exp_coffeeshop").innerHTML = "• Developed an E-Commerce website for a coffee shop using Flask as a backend framework using MYSQL, and HTML, CSS and JavaScript for the frontend.<br> • Implemented interaction functionalities, such as shopping carts and product filters, contact form, review and product crud using JavaScript to improve the usability of the site.<br> • Collaborated with a team to define the project requirements, design the architecture and develop the functionalities according to the needs of the project.";
    document.getElementById("exp_lmtattoo").innerHTML = "• Collaborated with the design team to translate creative concepts into an intuitive and engaging user interface.<br> • I used HTML, CSS, and JavaScript to create a responsive design that highlighted the work of tattoo artists and offered a seamless user experience.<br> • Implemented animations and visual effects to improve the aesthetics and interactivity of the site.";
    document.getElementById("exp_classcloud").innerHTML = "• Collaborated with a team in the creation of a platform designed to optimize the management of users and content in the educational environment using Angular, HTML, CSS and TypeScript.<br> • Implemented a clean and intuitive interface, which improved the user experience.";
    document.getElementById("sin_exp").innerHTML = "(no previous work experience)";
    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DEVELOPMENT";
    document.getElementById("hab_profesional").innerHTML = "PROFESSIONAL";
    document.getElementById("trabajoenequipo").innerHTML = "Teamwork";
    document.getElementById("adaptabilidad").innerHTML = "adaptability";
    document.getElementById("empatia").innerHTML = "Empathy";
    document.getElementById("comunicacion").innerHTML = "Communication";
    document.getElementById("respeto").innerHTML = "respect";

    /*proyectos*/

    document.getElementById("descripcion").innerHTML = "> Description"; // Para inglés

    for (let i = 0; i < links.length; i++) {
        links[i].innerHTML = "> Link to project";
    }

    for (let i = 0; i < projectHeaders.length; i++) {
        // Obtén el contenido actual del elemento
        let currentContent = projectHeaders[i].innerHTML;

        // Realiza los reemplazos necesarios
        let updatedContent = currentContent.replace(/Diseño/g, "Design")
            .replace(/Desarrollo/g, "Development");

        // Asigna el nuevo contenido al elemento
        projectHeaders[i].innerHTML = updatedContent;
    }




    /*descargas*/
    document.getElementById("certificates").innerHTML = "📄 Certificates PDF";

    /*contacto*/
    document.getElementById("boton_enviar").value = "Send";
    document.getElementById("form_nombre").placeholder = "Name:";
    document.getElementById("form_mensaje").placeholder = "Message:";
    
}


document.getElementById("es").onclick = function () {
    /*hero*/
    document.getElementById("hhero").innerHTML = "Soy un desarrollador web apasionado por la programación, con un enfoque en Python y experiencia en tecnologías web. Me destaco por mi capacidad para trabajar en equipo, aprender rápidamente y adaptarme a nuevas herramientas y entornos tecnológicos";
    /*navbar y títulos*/
    document.getElementById("nav_inicio").innerHTML = "Inicio";
    document.getElementById("nav_experiencia").innerHTML = "Experiencia";
    document.getElementById("nav_habilidades").innerHTML = "Habilidades";
    document.getElementById("nav_proyectos").innerHTML = "Proyectos";
    document.getElementById("nav_contacto").innerHTML = "Contacto";
    document.getElementById("nav_downloads").innerHTML = "Descargas";
    document.getElementById("title_experiencia").innerHTML = "Experiencia";
    document.getElementById("title_habilidades").innerHTML = "Habilidades";
    document.getElementById("title_proyectos").innerHTML = "Proyectos realizados";
    document.getElementById("title_datos").innerHTML = "Contacto";
    document.getElementById("title_downloads").innerHTML = "Descargas";

    /*experiencia*/
    document.getElementById("exp_academica").innerHTML = "ACADÉMICA";
    document.getElementById("exp_cursos").innerHTML = "CURSOS";
    document.getElementById("exp_laboral").innerHTML = "LABORAL";
    document.getElementById("exp_escolar").innerHTML = "Bachiller en Ciencias Sociales";
    document.getElementById("exp_universidad").innerHTML = "Ingeniería en sistemas(1°año)";
    document.getElementById("exp_argentina").innerHTML = "Análisis de Datos con Python";
    document.getElementById("exp_codoacodo").innerHTML = "• Programación Inicial con Python<br> • FullStack Python<br>";
    document.getElementById("exp_cpfp").innerHTML = "Auxiliar en electrónica digital";
    document.getElementById("exp_coffeeshop").innerHTML = "• Desarrollé una página web E-Commerce de una cafetería utilizando Flask como framework backend utilizando MYSQL, y HTML, CSS y JavaScript para el frontend.<br> • Implementé funcionalidades de interacción, como carritos de compras y filtros de productos, formulario de contacto, crud de comentarios y productos utilizando JavaScript para mejorar la usabilidad del sitio.<br> • Colaboré con un equipo para definir los requisitos del proyecto, diseñar la arquitectura y desarrollar las funcionalidades según las necesidades del proyecto.<br>  ";
    document.getElementById("exp_lmtattoo").innerHTML = "  • Colaboré con el equipo de diseño para traducir conceptos creativos en una interfaz de usuario intuitiva y atractiva.<br> • Utilicé HTML, CSS y JavaScript para crear un diseño responsivo que resaltara la obra de los artistas de tatuajes y ofreciera una experiencia de usuario fluida.<br> • Implementé animaciones y efectos visuales para mejorar la estética y la interactividad del sitio.<br>  ";
    document.getElementById("exp_classcloud").innerHTML = "• Colaboré con un equipo en la creación de una plataforma diseñada para optimizar la administración de usuarios y contenidos en el entorno educativo utilizando Angular, HTML, CSS y TypeScript.<br> • Implementé una interfaz limpia e intuitiva, lo que mejoró la experiencia del usuario.<br>";
    document.getElementById("sin_exp").innerHTML = "(sin experiencia laboral previa en compañias)";
    /*habilidades*/
    document.getElementById("hab_desarrollo").innerHTML = "DESARROLLO";
    document.getElementById("hab_profesional").innerHTML = "PROFESIONAL";
    document.getElementById("trabajoenequipo").innerHTML = "Trabajo en equipo";
    document.getElementById("adaptabilidad").innerHTML = "Adaptabilidad";
    document.getElementById("empatia").innerHTML = "Empatía";
    document.getElementById("comunicacion").innerHTML = "Comunicación";
    document.getElementById("respeto").innerHTML = "Respeto";

    /*descargas*/
    document.getElementById("certificates").innerHTML = "📄 Certificados PDF";

    /*proyectos*/
   
    document.getElementById("descripcion").innerHTML = "> Descripción"; // Para español

    for (let i = 0; i < links.length; i++) {
        links[i].innerHTML = "> Enlace al proyecto";
    }
    for (let i = 0; i < projectHeaders.length; i++) {
        // Obtén el contenido actual del elemento
        let currentContent = projectHeaders[i].innerHTML;

        // Realiza los reemplazos necesarios
        let updatedContent = currentContent.replace(/Design/g, "Diseño")
            .replace(/Development/g, "Desarrollo")
            .replace(/Music/g, "Música");

        // Asigna el nuevo contenido al elemento
        projectHeaders[i].innerHTML = updatedContent;
    }



    /*contacto*/
    document.getElementById("boton_enviar").value = "Enviar";
    document.getElementById("form_nombre").placeholder = "Nombre:";
    document.getElementById("form_mensaje").placeholder = "Mensaje:";

}

let check = document.querySelector('#check');

document.getElementById("nav_inicio").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_experiencia").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_habilidades").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_proyectos").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_contacto").onclick = function () {
    check.checked = false;
}
document.getElementById("nav_downloads").onclick = function () {
    check.checked = false;
}

