# Pokédex en React

Este es un proyecto de una Pokédex desarrollada con React que consume datos de la [PokeAPI](https://pokeapi.co/). La aplicación consulta un Pokémon aleatorio cada 30 segundos y muestra una cuenta regresiva para la próxima actualización. La información obtenida incluye el nombre, imagen, habilidades y otra información relevante del Pokémon.

## Características

- Consulta a la PokeAPI cada 30 segundos para obtener un Pokémon aleatorio.
- Muestra una cuenta regresiva para indicar el tiempo que falta para la próxima consulta.
- Almacena y muestra la información del Pokémon, incluyendo su nombre, imagen, habilidades, experiencia base y más.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **PokeAPI**: API pública para obtener datos de Pokémon.
- **CSS** (opcional): Para estilos personalizados de la aplicación.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/PoquetzSY/Pokedex_Prueba.git
   cd Pokedex_Prueba
   ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Inicia la aplicación:**

    ```bash
    npm start
    ```

    La aplicación estará disponible en http://localhost:3000.

## Estructura del Proyecto

    pokedex-react/
    ├── public/             # Archivos públicos
    ├── src/
    │   ├── components/     # Componentes React
    │   ├── services/       # Lógica para consumir la PokeAPI
    │   ├── App.js          # Componente principal
    │   ├── index.js        # Archivo de entrada
    ├── README.md           # Documentación del proyecto
    └── package.json        # Dependencias y scripts del proyecto

## Uso
La aplicación consulta un Pokémon aleatorio cada 30 segundos y muestra una cuenta regresiva en segundos para la próxima consulta. Puedes ver la información del Pokémon en el componente principal.

## Personalización
Para cambiar el intervalo de actualización, puedes modificar el valor 30000 en el intervalo setTimeout(getPokemon, 30000); a la cantidad de milisegundos deseada.

## Créditos
PokeAPI por los datos de Pokémon.
React por la biblioteca de UI.

## Licencia
Este proyecto está bajo la Licencia MIT.