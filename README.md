# Ionic 2 y Firebase

<div style="width: 100%; text-align:center;">
    <img height="200" width="200" src="https://www.joshmorony.com/wp-content/uploads/2018/05/ionic-logo-white-200x200.png"/>
    <img height="200" width="200" src="https://firebase.google.com/_static/images/firebase/touchicon-180.png"/>
</div>

Código desarrollado por Ignacio García-Cano Lavazza para una clase del programa FullStack realizado por la E.O.I.

Ejemplo de una aplicación sencilla hecha con Ionic 2 y Firebase, usando los servicios de Realtime Database y Auth.

Esta aplicación se encarga de mostrar un listado de blogs que se encuentran guardados en una instancia de Firebase. Además, se puede ver 
la información completa de cada blog y existe un apartado (a implementar por el alumno) donde se pueden subir nuevos blogs.

Para hacer funcionar el código es necesario tener instalado ionic, incluir en /src/environments un fichero environment con la siguiente información:

```typescript
export const environment = {
    firebase:{
        apiKey: "firebase-key",
        authDomain: "firebase-key",
        databaseURL: "firebase-key",
        projectId: "firebase-key",
        storageBucket: "firebase-key",
        messagingSenderId: "firebase-key"
    }
}
```

y ejecutar los comandos:

```bash
$ npm i
$ ionic serve
```


